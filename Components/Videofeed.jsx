import { useEffect, useState } from "react";
import { YOUTUBE_API, YOUTUBE_API_KEY, YOUTUBE_EDUCATION, YOUTUBE_VIDEOS } from "../Utils/constant";
import VideoCard from "./VideoCard";

const educationalKeywords = [
  "math", "physics", "chemistry", "biology",
  "coding", "programming", "react", "javascript",
  "history", "engineering", "ai", "machine learning",
];

// ---------------------------------------------
// VALIDATION — Only allow educational topics
// ---------------------------------------------
const isEducationalTopic = (topic) => {
  return educationalKeywords.some((keyword) =>
    topic.toLowerCase().includes(keyword)
  );
};

// Build OR query for YouTube
const buildQuery = (keywords) => {
  return keywords.join(" OR ");
};

const VideoFeed = () => {
  const [videos, setVideos] = useState([]);
  const [searchFilter, setSearchfilter] = useState("");
  const [error, setError] = useState("");

  // user whitelist
  const [whitelist, setWhitelist] = useState([
    "javascript",
    "math",
    "react",
    "history",
  ]);

  // ---------------------------------------------
  // 1️⃣ Fetch videos with educational keywords (INITIAL LOAD)
  // ---------------------------------------------
  const fetchInitialVideos = async () => {
    const query = buildQuery(educationalKeywords);

    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${query}&key=${YOUTUBE_API_KEY}`
    );

    const json = await response.json();
    setVideos(json.items || []);
  };

  useEffect(() => {
    fetchInitialVideos();
  }, []);

  // ---------------------------------------------
  // 2️⃣ Fetch videos based on user search (API CALL)
  // Only allowed if the topic is educational or in whitelist
  // ---------------------------------------------
  const getVideosByTopic = async (topic) => {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${topic}&key=${YOUTUBE_API_KEY}`
    );

    const json = await response.json();
    setVideos(json.items || []);
  };

  // ---------------------------------------------
  // ADD TOPIC TO WHITELIST
  // ---------------------------------------------
  const addToWhitelist = () => {
    if (!isEducationalTopic(searchFilter)) {
      setError("❌ Only educational topics allowed.");
      return;
    }

    if (!whitelist.includes(searchFilter.toLowerCase())) {
      setWhitelist([...whitelist, searchFilter.toLowerCase()]);
    }
    setError("");
  };

  // ---------------------------------------------
  // HANDLE SEARCH — Hit API again
  // ---------------------------------------------
  const handleSearch = () => {
    const q = searchFilter.toLowerCase().trim();

    if (q === "") {
      // empty search → show all initial educational videos
      fetchInitialVideos();
      setError("");
      return;
    }

    if (!whitelist.includes(q) && !isEducationalTopic(q)) {
      setError("❌ Topic is not allowed. Add it to whitelist first.");
      return;
    }

    setError("");

    // API call for searched topic
    getVideosByTopic(q);
  };

  return (
    <div className="px-4 py-6">

      {/* Search & Add Button */}
      <div className="flex gap-3 mb-4">
        <input
          type="text"
          placeholder="Search educational content... (e.g., math, javascript)"
          value={searchFilter}
          onChange={(e) => setSearchfilter(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          className="border border-gray-300 p-2 w-full sm:w-80 rounded-lg 
                     focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />

        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Search
        </button>

        <button
          onClick={addToWhitelist}
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
        >
          + Add
        </button>
      </div>

      {/* Error Message */}
      {error && <p className="text-red-500 mb-4">{error}</p>}

      {/* Whitelist */}
      <div className="mb-6">
        <h2 className="font-semibold mb-2">Allowed Educational Topics:</h2>
        <div className="flex flex-wrap gap-2">
          {whitelist.map((topic) => (
            <span
              key={topic}
              className="bg-gray-200 text-sm px-3 py-1 rounded-full"
            >
              {topic}
            </span>
          ))}
        </div>
      </div>

      {/* Video Grid */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {videos.map((video) => (
          <VideoCard
            key={video.id.videoId || video.id}
            video={video}
          />
        ))}
      </div>

    </div>
  );
};

export default VideoFeed;
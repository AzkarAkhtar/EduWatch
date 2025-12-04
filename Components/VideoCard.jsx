const VideoCard = ({video}) => {

    console.log("props",video);

  return (
      <div className="cursor-pointer">
      {/* Thumbnail */}
      <div className="relative">
        <img
          src={video?.snippet?.thumbnails?.high?.url}
          alt={video?.snippet?.title}
          className="rounded-xl w-full"
        />

        {/* Duration Badge */}
        <span className="absolute bottom-2 right-2 bg-black text-white text-xs px-2 py-1 rounded">
          {video?.snippet?.description}
        </span>
      </div>

      {/* Video Info */}
      <div className="mt-2 flex gap-3">
        {/* Channel Logo */}
        <img
          src={video.channelLogo}
          className="w-10 h-10 rounded-full"
          alt="channel logo"
        />

        <div>
          <h3 className="font-semibold text-sm line-clamp-2">
            {video?.snippet?.title}
          </h3>

          <p className="text-xs text-gray-600">
            {video?.snippet?.channelTitle}
          </p>

          <p className="text-xs text-gray-600">
            {video?.statistics?.viewCount} views
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
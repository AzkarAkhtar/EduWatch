import { useDispatch } from "react-redux";
import { YoutubeLogo } from "../Utils/constant";
import { Togglemenu } from "../Reduxstore/MenuSlice";
const Head  = ()=>{

    const dispatch = useDispatch();
    const Toggle = () =>{
        dispatch(Togglemenu());
    }

return (
    <header className="flex items-center justify-between px-4 py-2 shadow-md">
      
      {/* Left: Hamburger + YouTube Logo + EduWatch */}
      <div className="flex items-center gap-3">
        
        {/* Hamburger Icon */}
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={1.5} 
            stroke="currentColor" 
            className="w-6 h-6"
            onClick={()=>{Toggle()}}
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d="M3.75 5.25h16.5M3.75 12h16.5M3.75 18.75h16.5" 
            />
          </svg>
        </button>

        {/* YouTube Logo */}
        <img
          src={YoutubeLogo}
          alt="YouTube Logo"
          className="h-8"
        />

        {/* EduWatch Brand Name */}
        <h1 className="text-xl font-semibold text-red-600 tracking-tight">
          EduWatch
        </h1>
      </div>

      {/* Middle: Search Bar */}
      <div className="flex items-center flex-1 max-w-xl mx-4">
        <input
          type="text"
          placeholder="Search"
          className="border border-gray-300 rounded-l-full px-4 py-1 w-full focus:outline-none"
        />
        <button className="bg-gray-100 border border-gray-300 px-4 py-1 rounded-r-full">
          <span className="material-icons">search</span>
        </button>
      </div>

      {/* Right Icons */}
      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <span className="material-icons">videocam</span>
        </button>

        <button className="p-2 hover:bg-gray-100 rounded-full">
          <span className="material-icons">notifications</span>
        </button>

        {/* Profile */}
        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
      </div>
    </header>
  );

}

export default Head;
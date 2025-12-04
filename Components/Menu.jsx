import { useSelector } from "react-redux";

const Menu = () => {

    const isMenu = useSelector((store) => store.MenuToggle.isMenuopen);
    
    if(!isMenu) return null; 

  return (
    <aside className="w-60 h-screen border-r bg-white p-3 overflow-y-auto">

      {/* Home */}
      <div className="flex items-center gap-4 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
        <span className="text-sm font-medium">Home</span>
      </div>

      {/* Shorts */}
      <div className="flex items-center gap-4 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
        <span className="text-sm font-medium">Shorts</span>
      </div>

      {/* Subscriptions */}
      <div className="flex items-center gap-4 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
        <span className="text-sm font-medium">Subscriptions</span>
      </div>

      <hr className="my-3" />

      {/* Library */}
      <div className="flex items-center gap-4 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
        <span className="text-sm font-medium">Library</span>
      </div>

      {/* History */}
      <div className="flex items-center gap-4 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
        <span className="text-sm font-medium">History</span>
      </div>

      {/* Watch Later */}
      <div className="flex items-center gap-4 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
        <span className="text-sm font-medium">Watch Later</span>
      </div>

      {/* Liked Videos */}
      <div className="flex items-center gap-4 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
        <span className="text-sm font-medium">Liked Videos</span>
      </div>

    </aside>
  );
};

export default Menu;
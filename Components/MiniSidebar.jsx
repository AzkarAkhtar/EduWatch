import { useSelector } from "react-redux";

const MiniSidebar = () => {
    const isMenu = useSelector((store) => store.MenuToggle.isMenuopen);

    if(isMenu) return null; 

  return (
   <aside className="w-20 h-screen border-r bg-white p-4 flex flex-col items-center gap-6">
  {/* Home */}
  <div className="flex flex-col items-center cursor-pointer hover:bg-gray-100 rounded-xl p-2">
    <span className="material-icons text-2xl">home</span>
    <span className="text-xs mt-1">Home</span>
  </div>

  {/* Subscriptions */}
  <div className="flex flex-col items-center cursor-pointer hover:bg-gray-100 rounded-xl p-2">
    <span className="material-icons text-2xl">subscriptions</span>
    <span className="text-xs mt-1">Subscriptions</span>
  </div>

  {/* History */}
  <div className="flex flex-col items-center cursor-pointer hover:bg-gray-100 rounded-xl p-2">
    <span className="material-icons text-2xl">history</span>
    <span className="text-xs mt-1">History</span>
  </div>
</aside>


  );
};

export default MiniSidebar;
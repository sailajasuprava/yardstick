import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

function AppLayout() {
  return (
    <div className="grid grid-cols-[auto_1fr] gap-6">
      <Sidebar />
      <main className="pl-50 bg-gray-100 min-h-screen lg:w-screen lg:overflow-x-hidden min-w-[1024px] overflow-x-scroll">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;

import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="flex flex-col w-50 h-screen fixed bottom-0 top-0 left-0 gap-4 font-semibold px-4 pt-20 bg-[#165976] text-white">
      <NavLink to="/dashboard" className="hover:text-sky-400 duration-300">
        Dashboard
      </NavLink>
      <NavLink to="/form" className="hover:text-sky-300 duration-300">
        Form
      </NavLink>
      <NavLink to="/transactions" className="hover:text-sky-300 duration-300">
        Transactions
      </NavLink>
    </div>
  );
}

export default Sidebar;

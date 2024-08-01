import { NavLink } from "react-router-dom";
function Nav() {
  return (
    <nav className="bg-gray-700 shadow-lg col-span-1 rounded md:col-span-4">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center py-5">
        <NavLink to={"/"} className={"text-xl font-bold"}>
          Akira Brown
        </NavLink>
        <div className="hidden md:flex space-x-4">
          <NavLink className="hover:text-teal-500" to={"/projects"}>
            Projects
          </NavLink>
          <NavLink className="hover:text-teal-500" to={"/blogs"}>
            Blogs
          </NavLink>
          <NavLink className="hover:text-teal-500" to={"/contact"}>
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Nav;

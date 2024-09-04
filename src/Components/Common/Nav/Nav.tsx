function Nav() {
  return (
    <nav className="bg-gray-700 shadow-lg col-span-1 rounded md:col-span-4">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center py-5">
        <a href={"/"} className={"text-xl font-bold"}>
          Akira Brown
        </a>
        <div className="hidden md:flex space-x-4">
          <a className="hover:text-teal-500" href={"#projects"}>
            Projects
          </a>
          <a className="hover:text-teal-500" href={"#about"}>
            About
          </a>
          <a className="hover:text-teal-500" href={"#resume"}>
            Resume
          </a>
          <a className="hover:text-teal-500" href={"#education"}>
            Education
          </a>
          <a className="hover:text-teal-500" href={"#contact"}>
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Nav;

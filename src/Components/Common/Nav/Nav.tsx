import { NavLink } from "react-router-dom";
function Nav() {
  return (
    <header className="mb-auto">
      <div>
        <h3 className="float-md-start mb-0">Akira Brown</h3>
        <nav className="nav nav-masthead justify-content-center float-md-end text-bg-dark">
          <NavLink
            className="nav-link fw-bold py-1 px-0"
            to={"/"}
            aria-current="page"
          >
            Home
          </NavLink>
          <NavLink className="nav-link fw-bold py-1 px-3" to={"/projects"}>
            Projects
          </NavLink>
          <NavLink className="nav-link fw-bold py-1 px-3" to={"/blogs"}>
            Blog
          </NavLink>
          <NavLink className="nav-link fw-bold py-1 px-3" to={"/contact"}>
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Nav;

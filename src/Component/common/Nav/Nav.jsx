import { NavLink } from "react-router-dom";
function Nav() {
  return (
    <header className="mb-auto">
      <h3 className="float-md-start mb-0">Akira Brown</h3>
      <nav className="nav nav-masthead justify-content-center float-md-end">
        <NavLink className="nav-link fw-bold py-1 px-0 p-2" to={"/"}>
          Home
        </NavLink>
        <NavLink className="nav-link fw-bold py-1 px-0" to={"/projects"}>
          Projects
        </NavLink>
        <NavLink className="nav-link fw-bold py-1 px-0" to={"/news"}>
          News
        </NavLink>
      </nav>
    </header>
  );
}

export default Nav;

import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to={"/"}>
          Akira Brown
        </NavLink>
      </div>
    </nav>
  );
}

export default Nav;

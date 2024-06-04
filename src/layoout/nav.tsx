import { NavLink } from "react-router-dom";

import "./nav.scss";

function Navbar() {
  return (
    <div className=" shadow py-3 px-2">
      <ul className="nav">
        <li className="nav-item">
          <NavLink
            to="/"
            className={({ isActive }) => {
              const activeClass = isActive ? "active" : "";
              return `nav-link rounded ${activeClass}`;
            }}
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/users"
            className={({ isActive }) => {
              const activeClass = isActive ? "active" : "";
              return `nav-link rounded ${activeClass}`;
            }}
          >
            User
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;

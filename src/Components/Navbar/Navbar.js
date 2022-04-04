import React from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="nav-color py-4">
        <NavLink
          to={"/home"}
          className={({ isActive }) =>
            isActive
              ? "text-orange fs-4 mx-2 fw-bolder text-decoration-underline"
              : "text-white mx-2 fs-5 text-decoration-none"
          }
        >
          Home
        </NavLink>
        <NavLink
          to={"/reviews"}
          className={({ isActive }) =>
            isActive
              ? "text-orange fs-4 mx-2 fw-bolder text-decoration-underline"
              : "text-white mx-2 fs-5 text-decoration-none"
          }
        >
          Reviews
        </NavLink>
        <NavLink
          to={"/dashboard"}
          className={({ isActive }) =>
            isActive
              ? "text-orange fs-4 mx-2 fw-bolder text-decoration-underline"
              : "text-white mx-2 fs-5 text-decoration-none"
          }
        >
          DASHBOARD
        </NavLink>
        <NavLink
          to={"/blogs"}
          className={({ isActive }) =>
            isActive
              ? "text-orange mx-2 fs-4 fw-bolder text-decoration-underline"
              : "text-white mx-2 fs-5 text-decoration-none"
          }
        >
          Blogs
        </NavLink>
        <NavLink
          to={"/about"}
          className={({ isActive }) =>
            isActive
              ? "text-orange fs-4 mx-2 fw-bolder text-decoration-underline"
              : "text-white mx-2 fs-5 text-decoration-none"
          }
        >
          About
        </NavLink>
      </nav>
    </>
  );
};

export default Navbar;

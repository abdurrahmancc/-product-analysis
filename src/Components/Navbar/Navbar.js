import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Nav } from "react-bootstrap";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const { pathname } = useLocation();
  console.log("emtty", pathname);
  return (
    <>
      <nav
        /* style={
          pathname.includes(" ")
            ? { display: "block" }
            :  pathname.includes("home")
            ? { display: "block" }
            : pathname.includes("reviews")
            ? { display: "block" }
            : pathname.includes("dashboard")
            ? { display: "block" }
            : pathname.includes("blogs")
            ? { display: "block" }
            : pathname.includes("about")
            ? { display: "block" }
            : { display: "none" }
        } */
        className="nav-color py-4"
      >
        <NavLink to={-1}>
          <FontAwesomeIcon className="text-white fs-4 me-4" icon={faArrowLeft}></FontAwesomeIcon>
        </NavLink>
        <NavLink
          to={"/home"}
          className={({ isActive }) =>
            isActive
              ? "text-orange active-border fs-4 mx-2 fw-bolder text-decoration-none"
              : "text-white mx-2 fs-5 unActive-border text-decoration-none"
          }
        >
          Home
        </NavLink>
        <NavLink
          to={"/reviews"}
          className={({ isActive }) =>
            isActive
              ? "text-orange active-border fs-4 mx-2 fw-bolder text-decoration-none"
              : "text-white unActive-border mx-2 fs-5 text-decoration-none"
          }
        >
          Reviews
        </NavLink>
        <NavLink
          to={"/dashboard"}
          className={({ isActive }) =>
            isActive
              ? "text-orange active-border fs-4 mx-2 fw-bolder text-decoration-none"
              : "text-white unActive-border mx-2 fs-5 text-decoration-none"
          }
        >
          DASHBOARD
        </NavLink>
        <NavLink
          to={"/blogs"}
          className={({ isActive }) =>
            isActive
              ? "text-orange active-border mx-2 fs-4 fw-bolder text-decoration-none"
              : "text-white unActive-border mx-2 fs-5 text-decoration-none"
          }
        >
          Blogs
        </NavLink>
        <NavLink
          to={"/about"}
          className={({ isActive }) =>
            isActive
              ? "text-orange active-border fs-4 mx-2 fw-bolder text-decoration-none"
              : "text-white unActive-border mx-2 fs-5 text-decoration-none"
          }
        >
          About
        </NavLink>
        <NavLink to={1}>
          <FontAwesomeIcon className="text-white fs-4 ms-4" icon={faArrowRight}></FontAwesomeIcon>
        </NavLink>
      </nav>
    </>
  );
};

export default Navbar;

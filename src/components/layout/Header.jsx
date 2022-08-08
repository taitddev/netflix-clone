import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="header flex items-center justify-center gap-5 py-10 mb-10">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-lg ${isActive ? "text-primary font-bold" : ""}`
          }
        >
          Trang chủ
        </NavLink>
        <NavLink
          to="/movies"
          className={({ isActive }) =>
            `text-lg ${isActive ? "text-primary font-bold" : ""}`
          }
        >
          Movies
        </NavLink>
      </header>
    </>
  );
};

export default Header;

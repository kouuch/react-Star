import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "../style/index.css";

export default function RootLayout() {
  return (
    <div>
      <>
        <NavLink
          className={({ isActive, isPending }) => {
            return isActive ? "active" : isPending ? "pending" : "";
          }}
          to="/"
        >
          Home
        </NavLink>
        |
        <NavLink
          className={({ isActive, isPending }) => {
            return isActive ? "active" : isPending ? "pending" : "";
          }}
          to="/about"
        >
          About
        </NavLink>
        |
        <NavLink
          className={({ isActive, isPending }) => {
            return isActive ? "active" : isPending ? "pending" : "";
          }}
          to="/blog"
        >
          Blog
        </NavLink>
        <p />
        <Outlet />
      </>
    </div>
  );
}

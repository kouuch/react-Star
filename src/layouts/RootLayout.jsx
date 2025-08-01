import { Link, Outlet } from "react-router-dom";

import React from "react";

export default function RootLayout() {
  return (
    <div>
      <>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> |{" "}
        <Link to="/blog">Blog</Link>
        <p />
        <Outlet />
      </>
    </div>
  );
}

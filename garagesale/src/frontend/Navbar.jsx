import React from "react";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/sales">Sales</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          {" "}
          <a href="/signup"> Signup </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

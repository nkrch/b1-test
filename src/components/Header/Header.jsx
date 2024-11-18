import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header>
    <h1>Pexels Photo Gallery</h1>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/gallery">Gallery</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;

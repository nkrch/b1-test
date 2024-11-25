import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header>
    <h1>
      <img width={28} src="./logo.jpg" alt="Pexels Logo" />
      Pexels Photo Gallery
      <img width={28} src="./logo.jpg" alt="Pexels Logo" />
    </h1>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/gallery">Gallery</Link>
        </li>
        <li>
          <Link to="/favorites">Favorites</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;

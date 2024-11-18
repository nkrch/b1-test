import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Gallery from "./components/Gallery/Gallery";

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<h2>Welcome to Pexels Photo Gallery</h2>} />
      <Route path="/gallery" element={<Gallery />} />
    </Routes>
  </Router>
);

export default App;

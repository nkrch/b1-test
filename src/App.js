import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import { PhotoBig } from "./components/PhotoBig";
import { Main } from "./components/Main";
import { Saved } from "./components/Saved";

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/favorites" element={<Saved />} />
    </Routes>
  </Router>
);

export default App;

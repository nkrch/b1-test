import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import { PhotoBig } from "./components/PhotoBig";
import { Main } from "./components/Main";
import { Saved } from "./components/Saved";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/b1-test/" element={<Main />} />
        <Route path="/b1-test/gallery" element={<Gallery />} />

        <Route path="/b1-test/favorites" element={<Saved />} />
      </Routes>
    </Router>
  );
}

export default App;

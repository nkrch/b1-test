import React, { useState } from "react";

function PhotoCard({ photo }) {
  function openBig(params) {}

  function saveToFavourites(photo) {
    let loacale = localStorage.getItem("pexelsby");
    console.log("fav");
    if (loacale) {
      let pexelsby = JSON.parse(loacale);
      pexelsby.push(photo);
      localStorage.setItem("pexelsby", JSON.stringify(pexelsby));
    } else {
      localStorage.setItem("pexelsby", JSON.stringify([photo]));
    }
  }

  return (
    <div className="photo-card" onClick={() => openBig(photo)}>
      <img src={photo.src.medium} alt={photo.photographer} />
      <div className="photo-card-info">
        <p>{photo.photographer}</p>
        <button onClick={() => saveToFavourites(photo)}>F</button>
      </div>
    </div>
  );
}

export default PhotoCard;

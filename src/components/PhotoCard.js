import React, { useState } from "react";
import { PhotoBig } from "./PhotoBig";

function PhotoCard({ photo }) {
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
    <div>
      <img src={photo.src.medium} alt={photo.photographer} />
      <div className="photo-card-info">
        <p>{photo.photographer}</p>
        <button onClick={() => saveToFavourites(photo)}>F</button>
      </div>
    </div>
  );
}

export default PhotoCard;

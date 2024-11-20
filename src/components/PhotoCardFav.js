import React, { useState } from "react";

function PhotoCardFav({ photo }) {
  function openBig(params) {}

  function unSaveToFavourites(photo) {
    let loacale = localStorage.getItem("pexelsby");
    console.log("fav");
    if (loacale) {
      let pexelsby = JSON.parse(loacale);
      pexelsby = pexelsby.filter((item) => item.id !== photo.id);
      localStorage.setItem("pexelsby", JSON.stringify(pexelsby));
    }
  }

  return (
    <div className="photo-card" onClick={() => openBig(photo)}>
      <img src={photo.src.medium} alt={photo.photographer} />
      <div className="photo-card-info">
        <p>{photo.photographer}</p>
        <button onClick={() => unSaveToFavourites(photo)}>F</button>
      </div>
    </div>
  );
}

export default PhotoCardFav;

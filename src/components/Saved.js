import PhotoCard from "./PhotoCard";
import PhotoCardFav from "./PhotoCardFav";
import { useState } from "react";
export function Saved(params) {
  const [pexelsby, setPexelsby] = useState(
    JSON.parse(localStorage.getItem("pexelsby"))
  );

  function filter(algorithm) {
    switch (algorithm) {
      case "dateacs":
        setPexelsby([
          ...JSON.parse(localStorage.getItem("pexelsby")).reverse(),
        ]);
        break;
      case "datedesc":
        setPexelsby([
          ...JSON.parse(localStorage.getItem("pexelsby")).sort((a, b) => {
            return new Date(b.liked_at) - new Date(a.liked_at);
          }),
        ]);
        break;
      case "source":
        setPexelsby([
          ...JSON.parse(localStorage.getItem("pexelsby")).sort((a, b) => {
            return a.photographer.localeCompare(b.photographer);
          }),
        ]);
        break;
      case "reset":
        setPexelsby(
          JSON.parse(localStorage.getItem("pexelsby")).sort((a, b) => {
            return new Date(b.liked_at) - new Date(a.liked_at);
          })
        );

        break;

      default:
        break;
    }
  }

  return (
    <div>
      <h1>Saved</h1>
      <button onClick={() => filter("dateacs")}>
        Filter by date of liking asc
      </button>
      <button onClick={() => filter("datedesc")}>
        Filter by date of liking desc
      </button>
      <button onClick={() => filter("source")}>Filter by date of source</button>
      <div className="photo-container">
        {pexelsby?.map((photo) => (
          <PhotoCardFav key={photo.id} photo={photo} />
        )) || "You haven't saved any photos yet."}
      </div>
    </div>
  );
}

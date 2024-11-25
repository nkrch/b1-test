import React, { useState, useEffect } from "react";
import axios from "axios";
import PhotoCard from "./PhotoCard";
import Filters from "./Filters";
import { PhotoBig } from "./PhotoBig";

const Gallery = () => {
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState(null);
  const [modal, setModal] = useState(false);
  const [photo0, setPhoto0] = useState(null);
  const fetchPhotos = (query = "") => {
    axios
      .get(`https://api.pexels.com/v1/search?query=${query}&per_page=10`, {
        headers: {
          Authorization:
            "o9hy8J7r0V1kM0stj780LGsepYKzpC0tFLEcVuUCZOZ6ga6M4NrfJv4D",
        },
      })
      .then((response) => {
        setPhotos(response.data.photos);
        setError("");
      })
      .catch((error) => {
        setError(
          "Failed to fetch photos. Please try again later or use an input field."
        );
      });
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <div>
      <Filters onSearch={fetchPhotos} />
      {error && <p>{error}</p>}
      <div className="photo-container">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="photo-card"
            onClick={() => {
              setPhoto0(photo);
              setModal(true);
            }}
          >
            <PhotoCard key={photo.id} photo={photo} />
          </div>
        ))}
      </div>

      <article className="modal" onClick={() => setModal((w) => !w)}>
        {modal && <PhotoBig photo={photo0} />}
      </article>
    </div>
  );
};

export default Gallery;

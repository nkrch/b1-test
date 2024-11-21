import "./PhotoBis.css";

export function PhotoBig(params) {
  console.log(params);
  return (
    <div className="photo-card-big">
      <img src={params.photo.src.medium} alt={params.photo.photographer} />
      <p>{params.photo.photographer}</p>
      <p>Click to close</p>
    </div>
  );
}

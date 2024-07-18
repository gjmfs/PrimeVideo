import React from "react";
import movie from "./movie.js";

const Popular = () => {
  const shortList=movie.sort((a, b) => b.Rating - a.Rating)
  const x =shortList[0]
  const y= shortList[1]
  const z= shortList[2]
  return (
    <div
      id="carouselExampleInterval"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="10000">
          <img src={x.thumbnail} className="d-block w-100 imageSize" alt="..." />
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img src={y.thumbnail} className="d-block w-100 imageSize" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={z.thumbnail} className="d-block w-100 imageSize" alt="..." />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Popular;

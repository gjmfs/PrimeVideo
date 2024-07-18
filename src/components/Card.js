import React from "react";
import { MouseEvent } from "react";
import movie from "./movie";
import { useNavigate } from "react-router-dom";
import {clickButton} from './clickButton'

//movie page

export const MoviePage = () => {
  return (
    <>
      <div className="bg text-center text-light bg-dark-subtle">
        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-3">
          <div className="col">
            <img src={clickedMovie.coverPhoto} alt="" />
          </div>
          <div className="col">description</div>
          <div className="col">Recomented</div>
        </div>
      </div>
      <div className="container">
        <div className="row">sample photos</div>
      </div>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2">
          <div className="col">summary</div>
          <div className="col">Cast</div>
        </div>
      </div>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2">
          <div className="col">review</div>
          <div className="col">submit your review</div>
        </div>
      </div>
    </>
  );
};

let clickedMovie

export const Card = () => {  
const content=movie.map((movie) => (
  <div
    onClick={() => clickedMovie=movie}
    key={movie.id}
    className="card"
  >
    <img
      src={movie.coverPhoto}
      className="card-img-top"
      alt={movie.name}
    />
    <div className="card-body">
      <h5>{movie.name}</h5>
    </div>
    <div className="card-footer">
      <small className="text-white-70">
        Last updated 3 mins ago
      </small>
    </div>
  </div>
))
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg">
          <div
            className="row row-cols-1 row-cols-lg-4 row-cols-md-3 row-cols-xl-5 g-4"
            onClick={() => {
              navigate("/moviePage");
            }}
          >
            {content}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;

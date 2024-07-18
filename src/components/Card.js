import React from "react";
import { MouseEvent } from "react";
import movie from "./movie";
import { useNavigate } from "react-router-dom";
// import {clickButton} from './MoviePage'

export const Card = () => {
  class clickButton {
    constructor(x) {
      let clickedId = movie[x];
      console.log(clickedId.name);
    }
}
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg">
          <div
            className="row row-cols-1 row-cols-lg-4 row-cols-md-3 row-cols-xl-5 g-4"
            onClick={() => {
              navigate("moviePage");
            }}
          >
            {movie.map((movie) => (
              <div
                onClick={() => new clickButton(movie.id)}
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
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;

import React from "react";
import profile from "../Images/Profile.jpg";

import movies from "./movie";
const Card = () => {
  
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg">
          <div className="row row-cols-1 row-cols-lg-4 row-cols-md-3 row-cols-xl-5 g-4">
            {movies.map((movies) => (
              <div key={movies.id} className="card">
                <img
                  src={movies.coverPhoto}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5>{movies.name}</h5>
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

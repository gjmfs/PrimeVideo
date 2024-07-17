import React from "react";
import profile from "../Images/Profile.jpg";
import intersteller from "../Images/cover-images/interstellar.jpg"
import naruto from "../Images/cover-images/naruto.jpg";
import onePiece from "../Images/cover-images/one-piece.jpg";
import soloLeveling from "../Images/cover-images/solo-leveling.jpg";
import godFather from "../Images/cover-images/godfather.jpg";
import despicableMe from "../Images/cover-images/despicableMe.jpg"

const Card = () => {
  const movies = [
    {
      id: 0,
      name: "Naruto",
      category: "anime",
      Rating: 9.8,
      coverPhoto: naruto,
    },
    {
      id: 1,
      name: "One-piece",
      category: "anime",
      Rating: 9.9,
      coverPhoto: onePiece,
    },
    {
      id: 2,
      name: "Solo leveling",
      category: "anime",
      Rating: 9.5,
      coverPhoto: soloLeveling,
    },
    {
      id: 3,
      name: "The Godfather",
      category: "Drama",
      Rating: 9.2,
      coverPhoto: godFather,
    },
    {
      id:4,
      name:"Intersteller",
      category:"science fiction",
      Rating:8.7,
      coverPhoto: intersteller
    },
    {
      id:5,
      name:"Despicable Me 4",
      category:"Anime",
      Rating:7.2,
      coverPhoto:despicableMe
    }
  ];
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

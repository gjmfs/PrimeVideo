import React from "react";
import profile from "./Images/Profile.jpg";
import naruto from "./Images/cover-images/naruto.jpg";
import onePiece from "./Images/cover-images/one-piece.jpg";
import soloLeveling from "./Images/cover-images/solo-leveling.jpg";
import godFather from "./Images/cover-images/godfather.jpg";

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
  ];
  return (
    <div className="card-group  border-success mb-3">
      {movies.map((movies) => (
        <div key={movies.id} className="card">
          <h5 className="card-title">{movies.name}</h5>
          <img src={movies.coverPhoto} className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
          <div className="card-footer">
            <small className="text-white-70">Last updated 3 mins ago</small>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Card;

import React from "react";
import { IMG_CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const MovieCard = ({ title, posterPath, id }) => {
  const imgStyle = {
    transition: "transform 0.2s",
  };

  if (!posterPath) return;
  return (
    <div
      className="w-36 md:w-48 p-4 rounded-lg hover:scale-105"
      style={{ overflow: "hidden" }}
    >
      <Link to={"/browse/" + id}>
        <img
          className="rounded-lg"
          alt={title}
          src={IMG_CDN_URL + posterPath}
          style={{ ...imgStyle, opacity: 1 }}
        />
      </Link>
      <h1 className="text-white mt-2 text-lg">{title}</h1>
    </div>
  );
};

export default MovieCard;

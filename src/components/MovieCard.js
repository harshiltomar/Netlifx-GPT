import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ title, posterPath }) => {
  const imgStyle = {
    transition: "transform 0.2s",
  };

  return (
    <div
      className="w-48 p-4 rounded-lg hover:scale-105"
      style={{ overflow: "hidden" }}
    >
      <img
        className="rounded-lg"
        alt={title}
        src={IMG_CDN_URL + posterPath}
        style={imgStyle}
      />
      <h1 className="text-white mt-2 text-xl">{title}</h1>
    </div>
  );
};

export default MovieCard;

import React from "react";
import { IMG_CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const MovieCard = ({ title, posterPath, id, original_name }) => {
  const imgStyle = {
    transition: "transform 0.2s",
  };

  if (!posterPath) return null;

  // Generate a random number
  const randomNum = Math.random();

  // Check if the red line should be shown (e.g., 30% chance)
  const showRedLine = randomNum < 0.3;

  // Generate a random width for the red line
  const randomWidth = Math.floor(Math.random() * 100); // Adjust the maximum width as needed

  return (
    <div className="w-36 md:w-48 p-4 rounded-lg hover:scale-105 relative">
      <Link to={"/browse/" + id}>
        <img
          className="rounded-lg"
          alt={title != null ? title : original_name}
          src={IMG_CDN_URL + posterPath}
          style={{ ...imgStyle, opacity: 1 }}
        />
      </Link>
      <div className="relative mt-2">
        {showRedLine && (
          <>
            <div className="bg-zinc-400 h-1 w-full"></div>
            <div
              className="bg-red-500 h-1 w-full"
              style={{ width: `${randomWidth}%`, position: "absolute", top: 0 }}
            ></div>
          </>
        )}
      </div>
      <h1 className="text-white mt-2 text-lg">{title}</h1>
    </div>
  );
};

export default MovieCard;

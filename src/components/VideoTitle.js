import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const VideoTitle = ({ title, overview, id }) => {
  return (
    <div className="w-screen aspect-video pt-[15%] px-6 md:px-12 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-5xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-m w-1/3">{overview}</p>
      <div className="my-4 md:m-0">
        <Link to={`/browse/${id}?title=${encodeURIComponent(title)}`}>
          <button className="bg-white text-black py-1 md:p-4 px-3 md:px-12 text-xl rounded-lg">
            <FontAwesomeIcon icon={faPlay} /> Play
          </button>
        </Link>
        <Link to={`/browse/${id}?title=${encodeURIComponent(title)}`}>
          <button className="mx-4 bg-gray-500 text-white p-4 px-3 md:px-12 text-xl bg-opacity-50 rounded-lg">
            <FontAwesomeIcon icon={faInfoCircle} /> More Info
          </button>
        </Link>
      </div>
    </div>
  );
};

export default VideoTitle;

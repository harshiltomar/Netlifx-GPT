import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[15%] px-12 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="py-6 text-m w-1/4">{overview}</p>
      <div className="">
        <button className="bg-white text-black p-4 px-16 text-xl bg-opacity-80 rounded-lg hover:bg-opacity-100">
          ▶ Play
        </button>
        <button className="mx-4 bg-gray-500 text-white p-4 px-16 text-xl bg-opacity-50 rounded-lg">
          ✨More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;

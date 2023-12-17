import React from "react";

const DetailBackground = ({ tvdata, title, video }) => {
  return (
    <>
      {tvdata?.name === title ? (
        <div className="-mt-10 flex items-center justify-center h-screen bg-zinc-800">
          <img
            src={`https://image.tmdb.org/t/p/original/${tvdata?.poster_path}`}
            alt={tvdata?.name}
            className="h-screen bg-zinc-800"
          />
        </div>
      ) : (
        <div
          className="w-screen -mt-24 aspect-video"
          style={{ height: "150%" }}
        >
          <iframe
            className=""
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${video?.key}?&autoplay=1&mute=0&loop=1&playlist=${video?.key}&controls=0&modestbranding=1`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </>
  );
};

export default DetailBackground;

import React, { useEffect, useState, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { API_OPTIONS } from "../../utils/constants";

const Moviedetails = () => {
  const navigate = useNavigate();
  const { movieId } = useParams();
  const [moviesdata, setMoviesdata] = useState(null);
  const [video, setVideo] = useState(null);

  // Define fetchMoviesData with useCallback
  const fetchMoviesData = useCallback(async () => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
        API_OPTIONS
      );
      const json = await data.json();
      console.log(json);
      setMoviesdata(json);
    } catch (error) {
      console.error("Error fetching movies data:", error);
    }
  }, [movieId]);

  useEffect(() => {
    const fetchMovieVideo = async () => {
      try {
        const data = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
          API_OPTIONS
        );
        const json = await data.json();
        setVideo(json.results[0]);
      } catch (error) {
        console.error("Error fetching movie video:", error);
      }
    };

    // Call the memoized fetchMoviesData and fetchMovieVideo functions
    fetchMoviesData();
    fetchMovieVideo();
  }, [fetchMoviesData, movieId]); // Include fetchMoviesData and movieId in the dependency array

  const handleBackToBrowse = () => {
    navigate("/Browse");
  };

  return (
    <div className="hidden md:mt-[10px] md:block relative">
      <div className="w-screen -mt-24 absolute aspect-video hidden md:block">
        <iframe
          className=""
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${video?.key}?&autoplay=1&mute=1&loop=1&playlist=${video?.key}&controls=0&modestbranding=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <div className="fixed inset-0 hidden md:block bg-gradient-to-r from-black">
        <button
          className="text-white bg-red-800 px-4 py-2 rounded-lg absolute top-4 left-4"
          onClick={handleBackToBrowse}
        >
          Go Back
        </button>
        <div className="text-white absolute ml-14 top-[250px] ">
          <h1 className="font-semibold text-6xl">
            {moviesdata?.title || "Loading..."}
          </h1>
          <h2 className="my-5 font-extralight">{moviesdata?.tagline}....</h2>
          <p className="mt-2 font-medium w-[60%]">
            {moviesdata?.overview || "Loading..."}
          </p>
          <div className="flex mx-0">
            {moviesdata?.genres?.map((genre) => (
              <p
                key={genre?.id}
                className="rounded-lg mt-10 mx-2 px-4 py-2 bg-black opacity-70 text-white text-lg"
              >
                {genre?.name}
              </p>
            ))}
          </div>
          <div className="flex ml-[-15px] mt-6"></div>
        </div>
      </div>
    </div>
  );
};

export default Moviedetails;

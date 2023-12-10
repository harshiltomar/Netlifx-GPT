import React, { useEffect, useState, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { API_OPTIONS } from "../../utils/constants";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Moviedetails = () => {
  const navigate = useNavigate();
  const { movieId } = useParams();
  const [moviesdata, setMoviesdata] = useState(null);
  const [tvdata, setTvdata] = useState(null);
  const [video, setVideo] = useState(null);

  // Define fetchMoviesData with useCallback
  const fetchMoviesData = useCallback(async () => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
        API_OPTIONS
      );
      const json = await data.json();
      setMoviesdata(json);
    } catch (error) {
      console.error("Error fetching movies data:", error);
    }
  }, [movieId]);

  const fetchMovieVideo = useCallback(async () => {
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
  }, [movieId]);

  const fetchTVData = useCallback(async () => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/tv/${movieId}?language=en-US`,
        API_OPTIONS
      );
      const json = await data.json();
      setTvdata(json);
    } catch (error) {
      console.error("Error fetching tv data:", error);
    }
  }, [movieId]);

  useEffect(() => {
    // Call the memoized fetchMoviesData and fetchMovieVideo functions
    fetchMoviesData();
    fetchMovieVideo();
    fetchTVData();
  }, [fetchMoviesData, fetchMovieVideo, movieId]); // Include fetchMoviesData and movieId in the dependency array

  console.log("Movie", moviesdata);
  console.log("Tv", tvdata);

  const handleBackToBrowse = () => {
    navigate("/Browse");
  };

  return (
    <div className="hidden md:mt-[10px] md:block relative">
      {tvdata?.first_air_date ? (
        <div className="-mt-10">
          <img
            src={`https://image.tmdb.org/t/p/w500/${tvdata?.backdrop_path}`}
            alt={moviesdata?.title}
            className="w-full h-full object-cover"
          />
        </div>
      ) : (
        <div className="w-screen -mt-24 absolute aspect-video hidden md:block">
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
      <div className="fixed inset-0 hidden md:block bg-gradient-to-r from-black">
        <button
          className="text-white bg-red-800 px-4 py-2 rounded-lg absolute top-4 left-4"
          onClick={handleBackToBrowse}
        >
          <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
          Back
        </button>
        <div className="text-white absolute ml-14 top-[250px] ">
          <h1 className="font-semibold text-6xl">
            {tvdata?.first_air_date
              ? tvdata?.name
              : moviesdata?.title || "Loading..."}
          </h1>
          <p className="mt-2 font-medium w-[60%]">
            {tvdata?.first_air_date
              ? tvdata?.overview
              : moviesdata?.overview || "Loading..."}
          </p>
          <div className="flex mx-0">
            {(tvdata?.first_air_date
              ? moviesdata?.genres
              : tvdata?.genres
            )?.map((genre) => (
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

import React, { useEffect, useState, useCallback } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import {
  fetchMoviesData,
  fetchMovieVideo,
  fetchsimilarMovies,
  fetchsimilarTV,
  fetchTVData,
} from "./DetailFetch";
import MainDetailContainer from "./MainDetailContainer";
import RecommendationContainer from "./RecommendationContainer";

const Moviedetails = () => {
  const navigate = useNavigate();
  const { movieId } = useParams();
  const location = useLocation();
  const [moviesdata, setMoviesdata] = useState(null);
  const [tvdata, setTvdata] = useState(null);
  const [video, setVideo] = useState(null);
  const [similarTv, setSimilarTV] = useState(null);
  const [similarMovie, setSimilarMovie] = useState(null);
  const title = new URLSearchParams(location.search).get("title");

  const fetchData = useCallback(async () => {
    await fetchMoviesData(movieId, setMoviesdata);
    await fetchMovieVideo(movieId, setVideo);
    await fetchTVData(movieId, setTvdata);
    await fetchsimilarTV(movieId, setSimilarTV);
    await fetchsimilarMovies(movieId, setSimilarMovie);
  }, [movieId]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleBackToBrowse = () => {
    navigate("/Browse");
  };

  return (
    <div>
      <MainDetailContainer
        title={title}
        tvdata={tvdata}
        moviesdata={moviesdata}
        video={video}
        handleBackToBrowse={handleBackToBrowse}
        similarTv={similarTv}
        similarMovie={similarMovie}
      />

      <RecommendationContainer
        title={title}
        tvdata={tvdata}
        similarTv={similarTv}
        similarMovie={similarMovie}
      />
    </div>
  );
};

export default Moviedetails;

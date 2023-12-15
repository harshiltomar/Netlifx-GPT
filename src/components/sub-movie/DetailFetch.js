import { API_OPTIONS } from "../../utils/constants";

export const fetchMoviesData = async (movieId, setMoviesdata) => {
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
};

export const fetchMovieVideo = async (movieId, setVideo) => {
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

export const fetchTVData = async (movieId, setTvdata) => {
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
};

export const fetchsimilarTV = async (movieId, setSimilarTV) => {
  try {
    const data = await fetch(
      `https://api.themoviedb.org/3/tv/${movieId}/similar?language=en-US&page=1`,
      API_OPTIONS
    );
    const json = await data.json();
    setSimilarTV(json);
  } catch (error) {
    console.log("Error fetching similar TV", error);
  }
};

export const fetchsimilarMovies = async (movieId, setSimilarMovie) => {
  try {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/similar?language=en-US&page=1`,
      API_OPTIONS
    );
    const json = await data.json();
    setSimilarMovie(json);
  } catch (error) {
    console.log("Error fetching similar TV", error);
  }
};

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addSimilarMovies } from "../utils/moviesSlice";

const useSimilarMovies = () => {
  // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();

  const similarMovies = useSelector((store) => store.movies.popularMovies);

  const getSimilarMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/movie_id/similar?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addSimilarMovies(json.results));
  };

  useEffect(() => {
    if (!similarMovies) getSimilarMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Disable exhaustive-deps for this line
};

export default useSimilarMovies;

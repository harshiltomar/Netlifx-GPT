import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addSimilarTV } from "../utils/moviesSlice";

const useSimilarTV = () => {
  // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();

  const similarTV = useSelector((store) => store.movies.popularMovies);

  const getSimilarTV = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/movie_id/similar?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addSimilarTV(json.results));
  };

  useEffect(() => {
    if (!similarTV) getSimilarTV();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Disable exhaustive-deps for this line
};

export default useSimilarTV;

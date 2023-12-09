import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../../utils/constants";
import { addPopularTV } from "../../utils/moviesSlice";

const usePopularTV = () => {
  // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();

  const getPopularTV = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addPopularTV(json.results));
  };

  useEffect(() => {
    getPopularTV();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Disable exhaustive-deps for this line
};

export default usePopularTV;

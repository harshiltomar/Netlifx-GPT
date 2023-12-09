import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../../utils/constants";
import { addTopRatedTV } from "../../utils/moviesSlice";

const useTopRatedTV = () => {
  // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();

  const getTopRatedTV = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTopRatedTV(json.results));
  };

  useEffect(() => {
    getTopRatedTV();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Disable exhaustive-deps for this line
};

export default useTopRatedTV;

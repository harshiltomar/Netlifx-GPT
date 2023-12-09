import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../../utils/constants";
import { addAiringToday } from "../../utils/moviesSlice";

const useAiringToday = () => {
  // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();

  const getAiringToday = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addAiringToday(json.results));
  };

  useEffect(() => {
    getAiringToday();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Disable exhaustive-deps for this line
};

export default useAiringToday;

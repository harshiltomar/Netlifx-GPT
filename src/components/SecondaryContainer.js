import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  console.log(movies.airingToday);

  return (
    movies.nowPlayingMovies && (
      <div className="bg-black">
        <div className="mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Top-Rated"} movies={movies.topRatedMovies} />
          <MovieList title={"Popular"} movies={movies.popularMovies} />
          <MovieList title={"Upcoming Movies"} movies={movies.upcomingmovies} />
          <MovieList title={"Airing Today in TV"} movies={movies.airingToday} />
          <MovieList title={"Popular TV Shows"} movies={movies.popularTV} />
          <MovieList title={"Top Rated TV Shows"} movies={movies.topRatedTV} />
        </div>
      </div>
    )
  );
};
export default SecondaryContainer;

import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-0">
      <h1 className="text-lg md:text-3xl py-2 text-white">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex">
          {movies?.map(
            (movie) => (
              console.log("movie :", movie.title),
              console.log("TV :", movie.original_name),
              (
                <MovieCard
                  id={movie.id}
                  key={movie.id}
                  title={
                    movie.title != null ? movie.title : movie.original_name
                  }
                  posterPath={movie.poster_path}
                  // name={movie.original_name}
                />
              )
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieList;

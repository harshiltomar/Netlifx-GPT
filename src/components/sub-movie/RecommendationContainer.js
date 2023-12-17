import React from "react";
import MovieList from "../MovieList";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const RecommendationContainer = ({
  tvdata,
  similarTv,
  similarMovie,
  title,
}) => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="bg-zinc-800 w-screen mt-20">
      <div className="mt-0 md:-mt-40 pl-4 md:pl-12 relative z-20">
        <h1 className="text-white text-4xl mt-10 mb-2">
          Similar Recommendations
        </h1>
        <div className="flex flex-row overflow-x-scroll no-scrollbar">
          {tvdata?.name === title ? (
            <div className="flex">
              {similarTv?.results.map(
                (item) =>
                  item.backdrop_path && (
                    <div
                      key={item.id}
                      className="w-80 p-1 mr-4 rounded-lg hover:scale-105 relative"
                    >
                      {item.backdrop_path && (
                        <>
                          <Link
                            to={`/browse/${item.id}?title=${encodeURIComponent(
                              item.original_name
                            )}`}
                          >
                            <img
                              className="rounded-lg object-cover"
                              alt={item.name}
                              src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
                            />
                          </Link>
                          <h1 className="text-white mt-2 text-lg">
                            {item.name}
                          </h1>
                        </>
                      )}
                    </div>
                  )
              )}
            </div>
          ) : (
            <div className="flex">
              {similarMovie?.results.map(
                (item) =>
                  item.backdrop_path && (
                    <div
                      key={item.id}
                      className="w-80 p-1 mr-4 rounded-lg hover:scale-105 relative"
                    >
                      {item.backdrop_path && (
                        <>
                          <Link
                            to={`/browse/${item.id}?title=${encodeURIComponent(
                              item.original_name
                            )}`}
                          >
                            <img
                              className="rounded-lg object-cover"
                              alt={item.name}
                              src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
                            />
                          </Link>
                          <h1 className="text-white mt-2 text-lg">
                            {item.title}
                          </h1>
                        </>
                      )}
                    </div>
                  )
              )}
            </div>
          )}
        </div>
      </div>
      <div className="ml-10 mt-5">
        <MovieList
          title={"Now Playing Movies"}
          movies={movies.nowPlayingMovies}
        />
        <MovieList title={"Airing Today in TV"} movies={movies.airingToday} />
      </div>
    </div>
  );
};

export default RecommendationContainer;

import React from "react";
import useSWR from "swr";
import { AiOutlineSearch } from "react-icons/ai";

import MovieCard from "../components/movie/MovieCard";
import { tmdbAPI, fetcher } from "../config";

const MoviePage = () => {
  const { data } = useSWR(tmdbAPI.getMovieList("upcoming"), fetcher);

  const movies = data?.results || [];

  return (
    <div className="container">
      <div className="flex mb-10 relative">
        <div className="flex-1">
          <input
            type="text"
            className="w-full p-4 bg-slate-800 outline-none rounded-lg"
            placeholder="Search movies..."
          ></input>
        </div>

        <button className="p-4 bg-primary absolute top-0 bottom-0 right-0 rounded-r-lg">
          <AiOutlineSearch fontSize={24} />
        </button>
      </div>

      <div className="grid grid-cols-4 gap-10">
        {movies.length > 0 &&
          movies.map((movie) => <MovieCard movie={movie} />)}
      </div>
    </div>
  );
};

export default MoviePage;

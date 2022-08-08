import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import useSWR from "swr";
import PropTypes from "prop-types";

import { fetcher, tmdbAPI } from "../../config";
import MovieCard from "./MovieCard";

const MovieList = ({ type = "now_playing" }) => {
  const { data, error } = useSWR(tmdbAPI.getMovieList(type), fetcher);

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (data) setMovies(data.results);
  }, [data]);

  return (
    <>
      <div className="movie-list">
        <Swiper grabCursor={"true"} slidesPerView={"auto"}>
          {movies.length > 0 &&
            movies.map((movie) => (
              <SwiperSlide key={movie.id}>
                <MovieCard movie={movie} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>

      {error && <div>Failed to load</div>}
    </>
  );
};

MovieList.propTypes = {
  type: PropTypes.string.isRequired,
};

export default MovieList;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import useSWR from "swr";
import PropTypes from "prop-types";

import { fetcher, tmdbAPI } from "../../config";
import MovieCard from "./MovieCard";
import MovieCardSkeleton from "./MovieCardSkeleton";

const MovieList = ({ type = "now_playing" }) => {
  const { data, error } = useSWR(tmdbAPI.getMovieList(type), fetcher);

  const movies = data?.results || [];
  const isLoading = !data && !error;

  return (
    <>
      {isLoading ? (
        <div className="movie-list">
          <Swiper grabCursor={"true"} slidesPerView={"auto"}>
            <SwiperSlide>
              <MovieCardSkeleton />
            </SwiperSlide>
            <SwiperSlide>
              <MovieCardSkeleton />
            </SwiperSlide>
            <SwiperSlide>
              <MovieCardSkeleton />
            </SwiperSlide>
            <SwiperSlide>
              <MovieCardSkeleton />
            </SwiperSlide>
          </Swiper>
        </div>
      ) : (
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
      )}
    </>
  );
};

MovieList.propTypes = {
  type: PropTypes.string.isRequired,
};

export default MovieList;

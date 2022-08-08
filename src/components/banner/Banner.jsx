import React from "react";
import useSWR from "swr";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";

import { fetcher, tmdbAPI } from "../../config";
import BannerItem from "./BannerItem";

const Banner = () => {
  const { data: moviesResponse } = useSWR(
    tmdbAPI.getMovieList("upcoming"),
    fetcher
  );
  const movies = moviesResponse?.results || [];

  const { data: genresResponse } = useSWR(tmdbAPI.getGenres(), fetcher);
  const genres = genresResponse?.genres || [];

  return (
    <>
      <section className="banner h-[500px] container overflow-hidden">
        <Swiper grabCursor slidesPerView={"auto"}>
          {movies.length > 0 &&
            movies.map((movie) => (
              <SwiperSlide key={movie.id}>
                <BannerItem movie={movie} genres={genres} />
              </SwiperSlide>
            ))}
        </Swiper>
      </section>
    </>
  );
};

export default Banner;

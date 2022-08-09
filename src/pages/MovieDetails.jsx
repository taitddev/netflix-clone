import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";

import { fetcher, tmdbAPI } from "../config";
import MovieCard from "../components/movie/MovieCard";

const MovieDetails = () => {
  const { movieId } = useParams();

  const { data: movie } = useSWR(tmdbAPI.getMovieDetails(movieId), fetcher);
  const { data: credits } = useSWR(tmdbAPI.getCredits(movieId), fetcher);
  const { data: videos } = useSWR(tmdbAPI.getVideos(movieId), fetcher);
  const { data: similarMoviesRes } = useSWR(
    tmdbAPI.getSimilarMovies(movieId),
    fetcher
  );

  const similarMovies = similarMoviesRes?.results || [];

  return (
    <>
      {movie && (
        <>
          <div
            className="relative w-full h-[600px] bg-cover bg-no-repeat rounded-xl mb-[280px]"
            style={{
              backgroundImage: `url(${tmdbAPI.imageOriginal(
                movie.backdrop_path
              )})`,
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-70 rounded-xl"></div>

            <div className="w-full h-[400px] max-w-[800px] mx-auto absolute -translate-x-2/4 left-1/2 bottom-0 translate-y-2/4">
              <img
                src={`${tmdbAPI.image500(movie.poster_path)}`}
                alt={movie.title}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>

          <div className="flex flex-col gap-16 text-center max-w-[1280px] mx-auto">
            <div className="flex flex-col gap-10">
              <h2>{movie.title}</h2>

              <div className="flex gap-3 justify-center">
                {movie.genres.length > 0 &&
                  movie.genres.map((genre, index) => (
                    <span
                      className="border-2 px-4 py-2 border-primary text-primary rounded-md"
                      key={genre.id}
                    >
                      {genre.name}
                    </span>
                  ))}
              </div>
            </div>

            {movie.overview && (
              <p className="leading-loose max-w-[600px] mx-auto">
                {movie.overview}
              </p>
            )}

            <h3>Diễn viên</h3>
            {credits && credits.cast.length > 0 && (
              <div className="grid grid-cols-5 gap-10 mx-auto">
                {credits.cast.slice(0, 5).map((cast) => (
                  <div className="text-center" key={cast.id}>
                    <img
                      src={tmdbAPI.imageOriginal(cast.profile_path)}
                      alt={cast.name}
                      className="rounded-lg mb-4"
                    />

                    <p>{cast.name}</p>
                  </div>
                ))}
              </div>
            )}

            {videos && videos.results.length > 0 && (
              <div className="flex flex-col gap-10 mx-auto text-center w-full">
                {videos.results.slice(0, 4).map((video) => (
                  <div
                    className="w-full aspect-video flex flex-col gap-5"
                    key={video.id}
                  >
                    <p className="text-lg font-bold">{video.name}</p>
                    <iframe
                      src={`https://www.youtube.com/embed/${video.key}`}
                      title={video.name}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full object-fill border-none"
                    ></iframe>
                  </div>
                ))}
              </div>
            )}

            <h3>Phim được gợi ý</h3>
            <div className="movie-list text-left">
              <Swiper grabCursor={"true"} slidesPerView={"auto"}>
                {similarMovies.length > 0 &&
                  similarMovies.map((movie) => (
                    <SwiperSlide key={movie.id}>
                      <MovieCard movie={movie} />
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MovieDetails;

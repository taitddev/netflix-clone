import React from "react";
import MovieList from "../components/movie/MovieList";
import Banner from "../components/banner/Banner";

const HomePage = () => {
  return (
    <>
      <Banner />
      <section className="movies-layout container">
        <p className="section-title">Phim đang chiếu</p>
        <MovieList type="now_playing" />
      </section>
      <section className="movies-layout container">
        <p className="section-title">Phim được xếp hạng cao</p>
        <MovieList type="top_rated" />
      </section>
      <section className="movies-layout container">
        <p className="section-title">Phim hot</p>
        <MovieList type="popular" />
      </section>
    </>
  );
};

export default HomePage;

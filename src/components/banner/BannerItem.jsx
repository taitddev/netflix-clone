import React from "react";
import { BsPlusLg } from "react-icons/bs";
import { FaPlayCircle } from "react-icons/fa";
import { tmdbAPI } from "../../config";

const BannerItem = ({ movie, genres }) => {
  const { title, genre_ids, release_date, vote_average, poster_path, id } =
    movie;

  return (
    <>
      <div className="w-full h-full rounded-3xl relative">
        <div className="overlay absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg"></div>
        <img
          src={tmdbAPI.imageOriginal(poster_path)}
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute bottom-5 left-5">
          <div className="flex flex-col gap-8">
            <h2>{title}</h2>

            <div className="flex gap-3">
              {genre_ids.length > 0 &&
                genre_ids.map((id, index) => (
                  <p className="genre" key={index}>
                    {genres.find((genre) => genre.id === id)?.name}
                  </p>
                ))}
            </div>
            <div className="flex gap-4 items-center">
              <button className="btn-primary flex items-center justify-center gap-1">
                <p>Xem</p>
                <FaPlayCircle fontSize={22} />
              </button>

              <button className="p-4 rounded-lg bg-gray-600">
                <BsPlusLg />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerItem;

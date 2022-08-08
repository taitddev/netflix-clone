import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BsPlusLg } from "react-icons/bs";
import { FaPlayCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import { tmdbAPI } from "../../config";
import { getYear } from "../../utils/utils";

const MovieCard = ({ movie }) => {
  const { title, release_date, vote_average, poster_path, id } = movie;
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col rounded-xl bg-slate-800 p-3 relative h-full select-none">
        <img
          src={tmdbAPI.image500(poster_path)}
          className="w-full h-[250px] object-cover rounded-xl mb-4"
        />

        <button className="bg-opacity-60 bg-gray-600 p-2 absolute rounded-md top-5 right-5">
          <BsPlusLg />
        </button>

        <div className="flex flex-col flex-1">
          <p className="font-bold mb-2">{title}</p>

          <div className="flex justify-between items-center text-xs text-gray-300 mb-6">
            <p>{getYear(release_date)}</p>
            <div className="flex gap-2 items-center">
              <p>{vote_average}</p>
              <AiFillStar color="#00ff00" />
            </div>
          </div>

          <button
            className="btn-primary flex items-center gap-1 w-full justify-center mt-auto"
            onClick={() => {
              navigate(`/movie/${id}`);
            }}
          >
            <p>Watch now</p>
            <FaPlayCircle fontSize={22} />
          </button>
        </div>
      </div>
    </>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    vote_average: PropTypes.number,
    release_date: PropTypes.string,
    poster_path: PropTypes.string,
    id: PropTypes.number,
  }),
};

export default MovieCard;

import React from "react";
import Backup from "../assets/images/backup.png";
import { Link } from "react-router";

function Card({ movie }) {
  const imageUrl = import.meta.env.VITE_MOVIE_API_IMAGE_URL;
  const poster_path = movie.poster_path
    ? `${imageUrl}${movie.poster_path}`
    : Backup;

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 m-3">
      <Link to={`/movie/${movie.id}`}>
        <img className="rounded-t-lg" src={poster_path} alt="" />
      </Link>
      <div className="p-5">
        <Link to={`/movie/${movie.id}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {movie.title}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {movie.overview}
        </p>
      </div>
    </div>
  );
}

export default Card;

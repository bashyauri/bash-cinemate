import React, { useEffect, useState } from "react";
import Backup from "../assets/images/backup.png";
import { useParams } from "react-router";
import useTitle from "../hooks/useTitle";

function MovieDetail() {
  const params = useParams();
  const [movie, setMovie] = useState({});
  const apiKey = import.meta.env.VITE_MOVIE_API_KEY;
  const imageUrl = import.meta.env.VITE_MOVIE_API_IMAGE_URL;
  const poster_path = movie.poster_path
    ? `${imageUrl}${movie.poster_path}`
    : Backup;
  useEffect(() => {
    const fetchMovie = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=${apiKey}`
      );
      const json = await response.json();
      setMovie(json);
      console.log(json);
    };
    fetchMovie();
  }, []);
  useTitle(movie.title);
  return (
    <div className="App dark:bg-slate-800">
      <main>
        <section className="flex justify-around flex-wrap py-5">
          <div classname="max-w-sm">
            <img className="rounded" src={poster_path} alt={movie.title} />
          </div>
          <div className="max-w-2xl text-gray-700 text-lg dark:text-white">
            <h1 className="text-4xl font-bold my-3 text-center lg:text-left">
              {movie.title}
            </h1>
            <p className="my-4">{movie.overview}</p>
            <p className="my-7 flex flex-wrap gap-2">
              {Array.isArray(movie.genres) && movie.genres.length > 0
                ? movie.genres.map((genre) => (
                    <span
                      key={genre.id}
                      className="mr-2 border border-gray-200 rounded dark:border-gray-600 p-2"
                    >
                      {genre.name}
                    </span>
                  ))
                : "No genres available"}
            </p>

            <div className="flex items-center">
              <svg
                className="w-4 h-4 text-yellow-300 me-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <p className="ms-2 text-gray-900 dark:text-white">
                {movie.vote_average}
              </p>
              <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
              <span className="text-gray-900 dark:text-white">
                {movie.vote_count} reviews
              </span>
            </div>
            <p className="my-4">
              <span className="mr-2 font-bold">Runtime:</span>
              <span>{movie.runtime} min.</span>
            </p>
            <p className="my-4">
              <span className="mr-2 font-bold">Budget:</span>
              <span>
                {movie.budget
                  ? new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                    }).format(movie.budget)
                  : "N/A"}
              </span>
            </p>
            <p className="my-4">
              <span className="mr-2 font-bold">Revenue:</span>
              <span>
                {movie.revenue
                  ? new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                    }).format(movie.revenue)
                  : "N/A"}
              </span>
            </p>
            <p className="my-4">
              <span className="mr-2 font-bold">Release Date:</span>
              <span>{movie.release_date}</span>
            </p>
            <p className="my-4">
              <span className="mr-2 font-bold">IMDB Code:</span>
              <a
                href={`https://www.imdb.com/title/${movie.imdb_id}`}
                target="_blank"
                rel="noreferrer"
              >
                {movie.imdb_id}
              </a>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default MovieDetail;

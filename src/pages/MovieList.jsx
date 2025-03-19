import React, { useEffect, useState } from "react";

import Card from "../components/Card";

function MovieList() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const apiKey = import.meta.env.VITE_MOVIE_API_KEY;
    const fetchMovies = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`
      );
      const data = await response.json();
      setMovies(data.results);
    };
    fetchMovies();
  }, []);
  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap other:justify-evenly">
          {movies.map((movie) => {
            console.log(movie);
            return <Card key={movie.id} movie={movie} />;
          })}
        </div>
      </section>
    </main>
  );
}

export default MovieList;

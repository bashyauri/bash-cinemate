import React from "react";
import { Route, Routes } from "react-router";

function AllRoutes() {
  return (
    <div className="App dark:bg-slate-800">
      <Routes>
        {/* <Route path="/" element={<App />} /> */}
        {/* <Route
          path=""
          element={<MovieList apiPath="movie/now_playing" title="Home" />}
        />
        <Route path="movie/:id" element={<MovieDetail />} />
        <Route
          path="movies/popular"
          element={<MovieList apiPath="movie/popular" title="Popular" />}
        />
        <Route
          path="movies/top"
          element={<MovieList apiPath="movie/top_rated" title="Top Rated" />}
        />
        <Route
          path="movies/upcoming"
          element={<MovieList apiPath="movie/upcoming" title="Upcoming" />}
        />
        <Route path="search" element={<Search apiPath="search/movie" />} />
        <Route path="*" element={<PageNotFound />} /> */}
      </Routes>
    </div>
  );
}

export default AllRoutes;

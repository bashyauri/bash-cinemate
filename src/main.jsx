import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes, ScrollRestoration } from "react-router";
import "./index.css";
import App from "./App.jsx";
import MovieDetail from "./pages/MovieDetail.jsx";
import MovieList from "./pages/MovieList.jsx";
import Search from "./pages/Search.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import Header from "./components/Header.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Header />

      <Routes>
        <Route path="/" element={<App />} />
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
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

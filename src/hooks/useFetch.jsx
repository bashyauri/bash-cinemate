import { useEffect, useState } from "react";

function useFetch(apiPath, searchQuery = "") {
  const apiKey = import.meta.env.VITE_MOVIE_API_KEY;
  const [data, setData] = useState([]);
  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${apiKey}&query=${searchQuery}`;
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(url);
      const json = await response.json();
      setData(json.results);
    };
    fetchMovies();
  }, [url]);
  return { data };
}

export default useFetch;

import { useEffect, useState } from "react";

function useFetch(apiPath, apiKey) {
  const [data, setData] = useState([]);
  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${apiKey}`;
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

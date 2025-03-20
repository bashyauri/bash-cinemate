import React, { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState([]);
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

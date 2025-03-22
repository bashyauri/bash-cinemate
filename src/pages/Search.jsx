import React from "react";
import { useSearchParams } from "react-router";
import useFetch from "../hooks/useFetch";
import Card from "../components/Card";

function Search({ apiPath = "" }) {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("q");
  const { data: movies } = useFetch(apiPath, searchQuery);
  return (
    <div className="App dark:bg-slate-800">
      <main>
        <section className="py-7">
          <p className="text-3xl text-gray-700 dark:text-white">
            {movies.length === 0
              ? `No result found for '${searchQuery}'`
              : `Search results for '${searchQuery}'`}
          </p>
        </section>
        <section className="max-w-7xl mx-auto py-7">
          <div className="flex flex-wrap justify-start other:justify-evenly">
            {movies.map((movie) => {
              return <Card key={movie.id} movie={movie} />;
            })}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Search;

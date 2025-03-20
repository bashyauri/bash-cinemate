import Card from "../components/Card";
import useFetch from "../hooks/useFetch";

function MovieList({ apiPath = "", title }) {
  const apiKey = import.meta.env.VITE_MOVIE_API_KEY;
  console.log("apiPath:", apiPath); // Output: apiPath: movie/popular
  console.log("title:", title); // Output: title: Popular

  const { data: movies } = useFetch(apiPath, apiKey);
  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex flex-wrap justify-start other:justify-evenly">
          {movies.map((movie) => {
            return <Card key={movie.id} movie={movie} />;
          })}
        </div>
      </section>
    </main>
  );
}

export default MovieList;

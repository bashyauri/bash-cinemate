import Card from "../components/Card";
import useFetch from "../hooks/useFetch";

function MovieList({ apiPath = "", title }) {
  const { data: movies } = useFetch(apiPath);
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

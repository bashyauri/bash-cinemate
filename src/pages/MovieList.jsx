import Card from "../components/Card";
import useFetch from "../hooks/useFetch";
import useTitle from "../hooks/useTitle";

function MovieList({ apiPath = "", title }) {
  const { data: movies } = useFetch(apiPath);
  useTitle(title);

  return (
    <div className="App dark:bg-slate-800">
      <main>
        <section className="max-w-7xl mx-auto md:py-7">
          <div className="flex flex-wrap justify-evenly">
            {movies.map((movie) => {
              return <Card key={movie.id} movie={movie} />;
            })}
          </div>
        </section>
      </main>
    </div>
  );
}

export default MovieList;

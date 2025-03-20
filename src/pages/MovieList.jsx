import Card from "../components/Card";
import useFetch from "../hooks/useFetch";

function MovieList() {
  const apiKey = import.meta.env.VITE_MOVIE_API_KEY;

  const { data: movies } = useFetch(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`
  );
  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex flex-wrap justify-start other:justify-evenly">
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

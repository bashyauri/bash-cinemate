import "./App.css";
import Footer from "./components/Footer";

import MovieList from "./pages/MovieList";

function App() {
  return (
    <>
      <MovieList apiPath="movie/now_playing" title="Home" />
      <Footer />
    </>
  );
}

export default App;

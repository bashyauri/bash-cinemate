import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MovieList from "./pages/MovieList";

function App() {
  return (
    <div className="App dark:bg-slate-800">
      <MovieList apiPath="movie/now_playing" title="Home" />
      <Footer />
    </div>
  );
}

export default App;

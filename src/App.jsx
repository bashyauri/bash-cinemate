import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MovieList from "./pages/MovieList";
import AllRoutes from "./routes/AllRoutes";

function App() {
  return (
    <div className="App dark:bg-slate-800">
      <Header />
      <MovieList />
      <Footer />
    </div>
  );
}

export default App;

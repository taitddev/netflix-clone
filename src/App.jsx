import { Routes, Route } from "react-router-dom";
import Main from "./components/layout/Main";
import HomePage from "./pages/HomePage";
import MovieDetails from "./pages/MovieDetails";
import MoviePage from "./pages/MoviePage";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Main />}>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/movies" element={<MoviePage />}></Route>
          <Route path="/movie/:movieId" element={<MovieDetails />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;

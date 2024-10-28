import { useSelector } from "react-redux";
import MovieList from "./MovieList";

function SecondaryContainer() {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="relative -mt-20 z-20">
      <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
      <MovieList title="Popular" movies={movies.getPopularMovies} />
      <MovieList title="Horror" movies={movies.nowPlayingMovies} />
      <MovieList title="Most Popular" movies={movies.nowPlayingMovies} />
      <MovieList title="Action" movies={movies.nowPlayingMovies} />
    </div>
  );
}
export default SecondaryContainer;

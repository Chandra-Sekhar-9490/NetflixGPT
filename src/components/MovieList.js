import MovieCard from "./MovieCard";

function MovieList({ title, movies }) {
  return (
    <div className="flex overflow-auto scrollbar-hide bg-black custom-scroll">
      <div>
        <h1 className="text-white p-2 font-bold">{title}</h1>
        <div className="flex gap-1">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieList;

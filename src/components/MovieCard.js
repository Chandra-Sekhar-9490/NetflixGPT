import { IMG_CDN_URL } from "../utils/constants";

function MovieCard({ posterPath }) {
  return (
    <div className="w-40">
      <img
        className="rounded-sm"
        src={IMG_CDN_URL + posterPath}
        alt="movie-card"
      />
    </div>
  );
}

export default MovieCard;

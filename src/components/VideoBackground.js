import { useDispatch, useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

function VideoBackground({ movieId }) {
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);
  useMovieTrailer(movieId);

  return (
    <div>
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailerVideo}?si=kk65G421FNygHJer&autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
}
export default VideoBackground;

// const url = "https://api.themoviedb.org/3/movie/912649/videos?language=en-US";
// const options = {
//   method: "GET",
//   headers: {
//     accept: "application/json",
//     Authorization:
//       "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZGVhYWQzMzA0MzI0MWNmYzRmYzJhOWMzNWFmODEzNyIsIm5iZiI6MTczMDAwNTgzMS4wNzkzMDgsInN1YiI6IjY3MWRjOWQ4YTRhYzhhNDMyYzVjODlmYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Cax-MwyTWoAuQjIDWRlgj97w38PPW5Zgqp_XstSdzE0",
//   },
// };

// fetch(url, options)
//   .then((res) => res.json())
//   .then((json) => console.log(json))
//   .catch((err) => console.error(err));

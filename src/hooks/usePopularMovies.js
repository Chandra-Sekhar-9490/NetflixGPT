import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";
import { API_OPTIONS, API_URL } from "../utils/constants";
import { useEffect } from "react";

function usePopularMovies() {
  const dispatch = useDispatch();
  async function getPopularMovies() {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  }

  useEffect(function () {
    getPopularMovies();
  }, []);
}

export default usePopularMovies;

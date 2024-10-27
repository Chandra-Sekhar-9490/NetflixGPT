import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { API_OPTIONS, API_URL } from "../utils/constants";
import { useEffect } from "react";

function useNowPlayingMovies() {
  const dispatch = useDispatch();
  async function getNowPlayingMovies() {
    const data = await fetch(API_URL, API_OPTIONS);
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  }

  useEffect(function () {
    getNowPlayingMovies();
  }, []);
}

export default useNowPlayingMovies;

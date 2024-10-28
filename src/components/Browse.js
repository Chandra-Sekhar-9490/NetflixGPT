import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

function Browse() {
  useNowPlayingMovies();
  usePopularMovies();
  return (
    <div className="flex flex-col">
      <Header />;
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
}

export default Browse;

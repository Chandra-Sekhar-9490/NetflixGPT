import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

function Browse() {
  useNowPlayingMovies();
  return (
    <div className="flex flex-col">
      <Header />;
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
}

export default Browse;

import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Billboard from "./Billboard";
import MovieGrid from "./MovieGrid";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <>
      <Billboard />
      <MovieGrid />
    </>
  );
};

export default Browse;

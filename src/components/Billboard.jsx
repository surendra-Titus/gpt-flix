import { useSelector } from "react-redux";
import BillboardActions from "./BillboardActions";
import BillboardBackgroundTrailer from "./BillboardBackgroundTrailer";

const Billboard = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;
  const billBoardMovie = movies[0];
  if (!billBoardMovie) return;
  console.log(billBoardMovie);
  const { id, original_title, overview } = billBoardMovie;
  return (
    <div className="">
      <BillboardActions title={original_title} overview={overview} />
      <BillboardBackgroundTrailer movieId={id} />
    </div>
  );
};

export default Billboard;

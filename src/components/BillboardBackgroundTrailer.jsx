import { useSelector } from "react-redux";
import useBillboardMovieVideos from "../hooks/useBillboardMovieVideos";

/* eslint-disable react/prop-types */
const BillboardBackgroundTrailer = ({ movieId }) => {
  useBillboardMovieVideos(movieId);
  const billBoardVideos = useSelector((s) => s.movies?.billboardVideos);
  if (!billBoardVideos) return;
  const trailer = billBoardVideos.filter((movie) => movie.type === "Trailer");
  console.log(trailer[0].key);
  const trailerKey = trailer[0].key;
  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailerKey}?si=v3GlmjogJ_cAgpiy&autoplay=1&controls=0&modestbranding=1&rel=0&showinfo=0&fs=0&disablekb=1&mute=1&playsinline=1`}
        title="YouTube video player"
        allow="autoplay; encrypted-media"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default BillboardBackgroundTrailer;

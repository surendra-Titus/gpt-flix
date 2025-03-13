import { useEffect } from "react";
import { MOV_LST_OPTIONS } from "../utils/constants";
import { addBillboardVideos } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";

const useBillboardMovieVideos = (movieId) => {
  const dispatch = useDispatch();
  const getBillboardMovieVideos = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        MOV_LST_OPTIONS
      );
      const data = await response.json();
      console.log(data.results);
      dispatch(addBillboardVideos(data.results));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getBillboardMovieVideos();
  }, []);
};
export default useBillboardMovieVideos;

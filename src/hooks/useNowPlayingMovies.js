import { useEffect } from "react";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { MOV_LST_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const movieListURL = "https://api.themoviedb.org/3/movie/now_playing?page=1";
  const getNowPlayingMovies = async () => {
    try {
      const response = await fetch(movieListURL, MOV_LST_OPTIONS);
      const data = await response.json();
      console.log(data.results);
      dispatch(addNowPlayingMovies(data.results));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;

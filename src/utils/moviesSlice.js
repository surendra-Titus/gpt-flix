import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    billboardVideos: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addBillboardVideos: (state, action) => {
      state.billboardVideos = action.payload;
    },
  },
});
export const { addNowPlayingMovies, addBillboardVideos } = movieSlice.actions;
export default movieSlice.reducer;

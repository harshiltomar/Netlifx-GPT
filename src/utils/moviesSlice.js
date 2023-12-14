import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingmovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addAiringToday: (state, action) => {
      state.airingToday = action.payload;
    },
    addPopularTV: (state, action) => {
      state.popularTV = action.payload;
    },
    addTopRatedTV: (state, action) => {
      state.topRatedTV = action.payload;
    },
    addSimilarMovies: (state, action) => {
      state.similarMovies = action.payload;
    },
    addSimilarTV: (state, action) => {
      state.similarTV = action.payload;
    },
  },
});

export const {
  addSimilarTV,
  addSimilarMovies,
  addNowPlayingMovies,
  addTopRatedMovies,
  addUpcomingMovies,
  addTrailerVideo,
  addPopularMovies,
  addAiringToday,
  addPopularTV,
  addTopRatedTV,
} = moviesSlice.actions;

export default moviesSlice.reducer;

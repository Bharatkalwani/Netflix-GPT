import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    isMovieLoaded:true,
    toggleGPTSearch:false,
    nowPlayingMovies: null,
    popularMovies: null,
    topRatedMovies: null,
    upcomingMovies: null,
    searchedMovies: null,
  },
  reducers: {
    updateMovieLoaded: (state, action) => {
      state.isMovieLoaded =action.payload
    },
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload
    },
    addSearchedMovies: (state, action) => {
      state.searchedMovies = action.payload
    },
    removeSearchedMovies: (state, action) => {
       state.searchedMovies=null
    },
    removeAllData: (state, action) => {
      state.toggleGPTSearch=false
    },
    setToggleGPTSearch: (state, action) => {
      state.toggleGPTSearch=!state.toggleGPTSearch
      console.log("toggleGPTSearch",state.toggleGPTSearch)
   }

  }
})

export const { addNowPlayingMovies, addPopularMovies, addTopRatedMovies,
               addUpcomingMovies, addSearchedMovies, removeSearchedMovies,
               updateMovieLoaded,setToggleGPTSearch,removeAllData } = moviesSlice.actions
export default moviesSlice.reducer;
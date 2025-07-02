import React, { useState } from 'react'
import Header from '../components/shared/Header'
import useFetchMovies from '../hooks/useFetchMovies'
import MainContainer from '../containers/MainContainer'
import SecondaryContainer from '../containers/SecondaryContainer'
import { getNewMovies, getPopularMovies, getTopRatedMovies, getUpcomingMovies } from '../services/moviesService'
import { addNowPlayingMovies, addPopularMovies, addTopRatedMovies, addUpcomingMovies } from '../store/movieSlice'
import GPTSearch from '../components/GPTSearch'
import { useSelector } from 'react-redux'

const Browser = () => {
  // let isMovieLoaded = useSelector((store) => store.movies.isMovieLoaded)
  const [toggleGPTSearch, setToggleGPTSearch] = useState(false); //this call state lift up or in can use redux
  useFetchMovies(getNewMovies, addNowPlayingMovies, (state) => state.movies.nowPlayingMovies);
  useFetchMovies(getPopularMovies, addPopularMovies, (state) => state.movies.popularMovies);
  useFetchMovies(getTopRatedMovies, addTopRatedMovies, (state) => state.movies.topRatedMovies);
  useFetchMovies(getUpcomingMovies, addUpcomingMovies, (state) => state.movies.upcomingMovies);
  

  return (
    <div>
      <Header toggleGPTSearch={toggleGPTSearch} setToggleGPTSearch={setToggleGPTSearch} />
      {
        toggleGPTSearch ? (
          <GPTSearch></GPTSearch>
        ) :
          <>
            <MainContainer></MainContainer>
            <SecondaryContainer></SecondaryContainer>
          </>
      }
    </div>
  )
}

export default Browser
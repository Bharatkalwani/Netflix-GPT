import React, { useState } from 'react'
import Header from './Header'
import useFetchMovies from '../hooks/useFetchMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import { getNewMovies, getPopularMovies, getTopRatedMovies, getUpcomingMovies } from '../services/moviesService'
import { addNowPlayingMovies, addPopularMovies, addTopRatedMovies, addUpcomingMovies } from '../store/movieSlice'
import GPTSearch from './GPTSearch'

const Browser = () => {
  const [toggleGPTSearch, setToggleGPTSearch] = useState(false); //this call state lift up or in can use redux
  useFetchMovies(getNewMovies, addNowPlayingMovies);
  useFetchMovies(getPopularMovies, addPopularMovies);
  useFetchMovies(getTopRatedMovies, addTopRatedMovies);
  useFetchMovies(getUpcomingMovies, addUpcomingMovies);

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
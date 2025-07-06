import React from 'react'
import Header from '../components/shared/Header'
import useFetchMovies from '../hooks/useFetchMovies'
import MainContainer from '../containers/MainContainer'
import SecondaryContainer from '../containers/SecondaryContainer'
import { getNewMovies, getPopularMovies, getTopRatedMovies, getUpcomingMovies } from '../services/moviesService'
import { addNowPlayingMovies, addPopularMovies, addTopRatedMovies, addUpcomingMovies } from '../store/movieSlice'


const Browser = () => { 
  // This call state lift up or in can use redux but when component increases 
  // header calling from different cases show error not from browser
  // const [toggleGPTSearch, setToggleGPTSearch] = useState(false); 
  useFetchMovies(getNewMovies, addNowPlayingMovies, (state) => state.movies.nowPlayingMovies);
  useFetchMovies(getPopularMovies, addPopularMovies, (state) => state.movies.popularMovies);
  useFetchMovies(getTopRatedMovies, addTopRatedMovies, (state) => state.movies.topRatedMovies);
  useFetchMovies(getUpcomingMovies, addUpcomingMovies, (state) => state.movies.upcomingMovies);
  
   return (
    <div>
      <Header/>
      <MainContainer></MainContainer>
      <SecondaryContainer></SecondaryContainer>
    </div>
  )
}

export default Browser
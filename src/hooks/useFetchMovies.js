import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {updateMovieLoaded} from '../store/movieSlice'

const useFetchMovies = (fetchMoviesApi, actionCreator, selector) => {
  const dispatch = useDispatch()
  const movieData = useSelector(selector); // memoization -to reduce apis calls 

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await fetchMoviesApi();
      dispatch(actionCreator(data));
       dispatch(updateMovieLoaded(false));
    };
    if(!movieData)
    fetchMovies();

  }, [dispatch, fetchMoviesApi, actionCreator])

}

export default useFetchMovies
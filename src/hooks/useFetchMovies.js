import React, { useEffect } from 'react'
import {getNewMovies} from '../services/moviesService'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies } from '../store/movieSlice'
const useFetchMovies = (fetchMoviesApi, actionCreator) => {
    const dispatch =useDispatch()

    useEffect(() => {
    const fetchMovies = async () => {
        const data = await fetchMoviesApi();
        dispatch(actionCreator(data));
    };
  
    fetchMovies();
  }, [dispatch,fetchMoviesApi,actionCreator])

}

export default useFetchMovies
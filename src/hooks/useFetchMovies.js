import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const useFetchMovies = (fetchMoviesApi, actionCreator) => {
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await fetchMoviesApi();
      dispatch(actionCreator(data));
    };

    fetchMovies();
  }, [dispatch, fetchMoviesApi, actionCreator])

}

export default useFetchMovies
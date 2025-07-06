const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.REACT_APP_TMDB_TOKEN}`
  }
};

export const getNewMovies = async () => {
  let getMovies = await fetch(`${process.env.REACT_APP_TMDB_BASE_URL}now_playing?&page=1`, options)
  getMovies = await getMovies.json();
  getMovies = getMovies.results;
  return getMovies
}

export const getPopularMovies = async () => {
  let getPopularMovies = await fetch(`${process.env.REACT_APP_TMDB_BASE_URL}popular?language=en-US&page=1`, options)
  getPopularMovies = await getPopularMovies.json();
  getPopularMovies = getPopularMovies.results;
  return getPopularMovies
}

export const getTopRatedMovies = async () => {
  let getTopMovies = await fetch(`${process.env.REACT_APP_TMDB_BASE_URL}top_rated?language=en-US&page=1`, options)
  getTopMovies = await getTopMovies.json();
  getTopMovies = getTopMovies.results;
  return getTopMovies
}

export const getUpcomingMovies = async () => {
  let getLatestMovies = await fetch(`${process.env.REACT_APP_TMDB_BASE_URL}upcoming?language=en-US&page=1`, options)
  getLatestMovies = await getLatestMovies.json();
  getLatestMovies = getLatestMovies.results;
  return getLatestMovies
}

export const getSearchedMovies = async (payload) => {
  const url = `https://api.themoviedb.org/3/search/movie?query=${payload}%20&include_adult=false&language=en-US&page=1`;
  let searchMovies = await fetch(url, options)
  searchMovies = await searchMovies.json();
  searchMovies = searchMovies.results;
  return searchMovies
}

export const getVideosByMovieId = async (payload) => {
  let getVideos = await fetch(`${process.env.REACT_APP_TMDB_BASE_URL}${payload}/videos`, options)
  getVideos = await getVideos.json();
  getVideos = getVideos.results;
  return getVideos
}

export const getMovieDetails = async (payload) => {
  let getMovieData = await fetch(`${process.env.REACT_APP_TMDB_BASE_URL}${payload}`, options)
  getMovieData = await getMovieData.json();
  return getMovieData
}
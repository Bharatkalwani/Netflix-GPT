const BASE_URL = 'https://api.themoviedb.org/3/movie/'
const moviesUrl = 'https://api.themoviedb.org/3/movie/now_playing?&page=1';
const popularMoviesUrl = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
const topRatedUrl = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
const upcomingRatedUrl = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNWEyM2JmZDBiYjg2ZTM1ODNjNzQ3YjljMzk4NmJiMCIsIm5iZiI6MTc1MDE1NTY2Ni42NzYsInN1YiI6IjY4NTE0MTkyNWU0MTgxNWFkZTkyZGRhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PUUkdkphKTHy1qeCyvgAMVfsphlan8radgZr6D4a4kI'
  }
};

export const getNewMovies = async () => {
  let getMovies = await fetch(moviesUrl, options)
  getMovies = await getMovies.json();
  getMovies = getMovies.results;
  return getMovies
}

export const getPopularMovies = async () => {
  let getPopularMovies = await fetch(popularMoviesUrl, options)
  getPopularMovies = await getPopularMovies.json();
  getPopularMovies = getPopularMovies.results;
  return getPopularMovies
}

export const getTopRatedMovies = async () => {
  let getTopMovies = await fetch(topRatedUrl, options)
  getTopMovies = await getTopMovies.json();
  getTopMovies = getTopMovies.results;
  return getTopMovies
}

export const getUpcomingMovies = async () => {
  let getLatestMovies = await fetch(upcomingRatedUrl, options)
  getLatestMovies = await getLatestMovies.json();
  getLatestMovies = getLatestMovies.results;
  return getLatestMovies
}

export const getSearchedMovies = async (payload) => {
  const url = `https://api.themoviedb.org/3/search/movie?query=${payload}%20&include_adult=false&language=en-US&page=1`;
  let searchMovies = await fetch(url, options)
  searchMovies = await searchMovies.json();
  searchMovies = searchMovies.results;
  console.log("Api search data",searchMovies)
  return searchMovies
}

export const getVideosByMovieId = async (payload) => {
  let getVideos = await fetch(`${BASE_URL}${payload}/videos`, options)
  getVideos = await getVideos.json();
  getVideos = getVideos.results;
  return getVideos
}
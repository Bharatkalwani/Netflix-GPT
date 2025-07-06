import React from 'react'
import MovieList from '../components/MovieList'
import { useSelector } from 'react-redux'
import ShimmerUI from '../components/shared/ShimmerUI'

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies)
  return (
    <div className="bg-black">
      {
        movies && (
          <div className="mt-0 md:-mt-52 relative z-20">
            <MovieList title="Now Playing" movies={movies.nowPlayingMovies}></MovieList>
            <MovieList title="Popular Movies" movies={movies.popularMovies}></MovieList>
            <MovieList title="Top Rated" movies={movies.topRatedMovies}></MovieList>
            <MovieList title="Upcoming Movies" movies={movies.upcomingMovies}></MovieList>
          </div>
        )
      }
    </div>
  )
}

export default SecondaryContainer
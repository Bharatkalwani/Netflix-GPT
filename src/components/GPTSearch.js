import React from 'react'
import GTPSearchBar from './GTPSearchBar'
import GPTMovieSuggestions from './GPTMovieSuggestions'
import { NETFLIX_BACKGROUND_IMG } from '../utils/constants'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

//h-full w-full object-cover 
const GPTSearch = () => {
    const movies = useSelector((store) => store.movies)
    return (
        <div>
            <div className='absolute inset-0 -z-10'>
                <img
                    className=''
                    src={NETFLIX_BACKGROUND_IMG}
                    alt="Netflix Background"
                />
            </div>
         
            <GTPSearchBar></GTPSearchBar>
           {
            movies.searchedMovies &&
            <MovieList 
            title="Searched Movies" 
            movies={movies.searchedMovies}
            layout="grid">   
            </MovieList>
           }
     
        </div>
    )
}

export default GPTSearch
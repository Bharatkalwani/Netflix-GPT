import React from 'react'
import Header from '../components/shared/Header'
import GTPSearchBar from '../components/GTPSearchBar'
import { NETFLIX_BACKGROUND_IMG, SEARCHED_MOVIE_TEXT } from '../utils/constants'
import { useSelector } from 'react-redux'
import MovieList from '../components/MovieList'

const GPTSearch = () => {
    const movies = useSelector((store) => store.movies)
    return (
        <div>
         <Header/>
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
                    title={SEARCHED_MOVIE_TEXT}
                    movies={movies.searchedMovies}
                    layout="grid">
                </MovieList>
            }

        </div>
    )
}

export default GPTSearch
import React from 'react'
import { MOVIE_IMG_URL } from '../utils/constants'
const MovieCart = ({ movie }) => {
    return (
        <div className=' w-48 pr-4'>
            <img
                alt='Image'
                src={`${MOVIE_IMG_URL}${movie.poster_path}`
                }
            />
        </div>
    )
}

export default MovieCart
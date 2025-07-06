import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import {getMovieDetails} from '../services/moviesService'
import Header from '../components/shared/Header';
import { MOVIE_IMG_URL } from '../utils/constants'

const MovieDetails = () => {
    const { movieId } = useParams();
   const [movie,setMovie]=useState(null)
    useEffect(() => {
        fetchMovieDetails();
    }, [])
    
    const fetchMovieDetails =async()=>{
        const getMovieData=await getMovieDetails(movieId)
        setMovie(getMovieData)
    }
  return (
    <div className="bg-gradient-to-b from-black to-gray-900 min-h-screen text-white">
    <Header></Header>
    <div className="flex flex-col md:flex-row px-10 py-20 items-center md:items-start gap-10 my-20">
       {/* Left - Poster */}
      {
        movie && (
        <>
            <img className=' h-96'
            src={`${MOVIE_IMG_URL}${movie.poster_path}`}
               alt='poster'></img>
        </>
        )
      }
  {/* Right - Movie Details */}
      {
        movie && (
          <div className="max-w-2xl">
          <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
          <p className="text-lg leading-relaxed pb-3">{movie.overview}</p>
          <p className="text-lg leading-relaxed pb-3">Original Language : {movie.original_language}</p>
          <p className="text-lg leading-relaxed pb-3">Movie Type : {movie.genres[0].name}</p>
          <p className="text-lg leading-relaxed pb-3">Released Date : {movie.release_date}</p>
          <p className="text-lg leading-relaxed pb-3">Status : {movie.status}</p>
            </div>
        )
      }
    </div>
   
 
    </div>
  )
}

export default MovieDetails
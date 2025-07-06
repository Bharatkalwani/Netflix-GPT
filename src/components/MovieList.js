import React from 'react'
import MovieCart from '../components/shared/MovieCart'
import ShimmerUI from './shared/ShimmerUI';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const MovieList = ({ title, movies, layout = "horizontal" }) => {
    let isMovieLoaded = useSelector((store) => store.movies.isMovieLoaded)
    const shimmerCount = layout === "horizontal" ? 9 : 6;

    const renderShimmer = () => {
        return Array.from({ length: shimmerCount }).map((_, idx) => (
            <ShimmerUI key={idx} />
        ));
    };
    return (
        <div className='px-3'>
            <h1 className='py-5 text-2xl pl-3 font-bold text-[#e5e5e5] tracking-wide'>
                {title}
            </h1>

            {layout === "horizontal" ? (
                <div className='flex overflow-x-scroll pl-3'>
                    <div className='flex space-x-4'>
                        {
                            isMovieLoaded ? renderShimmer() :
                                (movies?.map((movie) => (
                                   <Link key={movie.id} to={"/movieDetails/"+ movie.id}> <MovieCart key={movie.id} movie={movie} /></Link>
                                )))
                        }

                    </div>
                </div>
            ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">

                    {isMovieLoaded ? renderShimmer() :

                        movies?.map((movie) => (
                            <Link key={movie.id} to={"/movieDetails/"+ movie.id}> <MovieCart key={movie.id} movie={movie} /></Link>
                        ))}
                </div>
            )}
        </div>
    );
};


export default MovieList

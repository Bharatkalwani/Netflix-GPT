import React from 'react'
import MovieCart from './MovieCart'

const MovieList = ({ title, movies, layout = "horizontal" }) => {
    return (
        <div className='px-3'>
            <h1 className='py-5 text-2xl pl-3 font-bold text-[#e5e5e5] tracking-wide'>
                {title}
            </h1>

            {layout === "horizontal" ? (
                <div className='flex overflow-x-scroll pl-3'>
                    <div className='flex space-x-4'>
                        {movies?.map((movie) => (
                            <MovieCart key={movie.id} movie={movie} />
                        ))}
                    </div>
                </div>
            ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                    {movies?.map((movie) => (
                        <MovieCart key={movie.id} movie={movie} />
                    ))}
                </div>
            )}
        </div>
    );
};


export default MovieList
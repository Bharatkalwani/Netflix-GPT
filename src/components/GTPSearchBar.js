import React, { useRef } from 'react'
import {getSearchedMovies} from '../services/moviesService'
import { useDispatch, useSelector } from 'react-redux'
import { addSearchedMovies } from '../store/movieSlice'

const GTPSearchBar = () => {
    console.log("Search bar created")
    const searchRef = useRef();
    const dispatch =useDispatch()
   
    const handleSearch = async() => {
        const query = searchRef.current.value;
        const searchData = await getSearchedMovies(query);
        dispatch(addSearchedMovies(searchData));
    }

    return (
        <div className=' pt-[30%] md:p-[8%] flex justify-center'>
            <form className=' w-full md:w-1/2 bg-black grid grid-cols-12' onSubmit={(e)=>e.preventDefault()}>
                <input
                    ref={searchRef}
                    type='text'
                    placeholder='Explore trending movies & shows'
                    className=' p-3 m-2 col-span-9'
                />
                <button
                    className='text-white p-1 col-span-3 bg-red-500 hover:bg-red-500 m-2 rounded font-semibold'
                    type='button'
                    onClick={handleSearch}
                >
                    Search
                </button>
            </form>
        </div>
    )
}

export default GTPSearchBar

    // We dont have OpenAI Key so we are directly searching with tmdb movies api
    // import openAI from '../utils/openAI'
    // const handleSearch2 = async() => {
    //     const completion = await openAI.chat.completions.create({
    //         model: "gpt-4o-mini", //gpt-3.5-turbo  gpt-4o-mini
    //          store: true,
    //         messages: [
    //           {"role": "user", "content": "write a sytemDesign 5 points"},
    //         ],
    //       });
          
    //     //   completion.then((result) => console.log(result.choices[0].message));
    // }
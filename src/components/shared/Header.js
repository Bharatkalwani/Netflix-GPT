import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { removeUser } from '../../store/userSlice';
import { removeSearchedMovies,setToggleGPTSearch,removeAllData } from "../../store/movieSlice"
import { NETFLIX_LOGO } from '../../utils/constants'

const Header = () => {
  let toggleGPTSearch = useSelector((store) => store.movies.toggleGPTSearch)
  //{ toggleGPTSearch, setToggleGPTSearch } //for uplifting
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user)

  const handleSignOut = () => {
    dispatch(removeSearchedMovies());
    dispatch(removeUser());
    dispatch(setToggleGPTSearch());
    localStorage.removeItem('user')
    navigate('/login')
    dispatch(removeAllData());
  }


  const handleGPTSearch = () => {
    const newValue = !toggleGPTSearch;
    dispatch(setToggleGPTSearch());
 
   if(newValue)
    navigate('/gptSearch')
  else
  navigate('/browser')


    dispatch(removeSearchedMovies());
  }

  return (
    <div className="absolute top-0 left-0 w-full px-8 py-2 bg-gradient-to-b from-black flex flex-col  md:flex-row justify-between items-center z-10">
      {/* Logo (optional) */}
      <img
        className="w-44"
        src={NETFLIX_LOGO}
        alt="Netflix Logo"
      />
      {/* Search & Sign Out Button */}
      {user && (

        <div className="flex space-x-3">
          <button
            type="button"
            onClick={handleGPTSearch}
            className="bg-blue-600 hover:bg-blue-700 transition duration-300 text-white px-6 py-2 rounded font-semibold"
          >
            {
              toggleGPTSearch ? "Home" : "GTP Search"
            }
          </button>
          <button
            type="button"
            onClick={handleSignOut}
            className="bg-red-600 hover:bg-red-700 transition duration-300 text-white px-6 py-2 rounded font-semibold">
            Sign Out
          </button>
        </div>

      )}
    </div>
  );
}

export default Header
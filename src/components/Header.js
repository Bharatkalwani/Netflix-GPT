import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { removeUser } from '../store/userSlice';
import {removeSearchedMovies} from "../store/movieSlice"

const Header = ({ toggleGPTSearch, setToggleGPTSearch }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user)

  const handleSignOut = () => {
    dispatch(removeSearchedMovies());
    dispatch(removeUser());
    navigate('/login')
  }

  const handleGPTSearch = () => {
    setToggleGPTSearch(!toggleGPTSearch)
     dispatch(removeSearchedMovies());
  }

  return (
    <div className="absolute top-0 left-0 w-full px-8 py-2 bg-gradient-to-b from-black flex flex-col  md:flex-row justify-between items-center z-10">
      {/* Logo (optional) */}
      <img
        className="w-44"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
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
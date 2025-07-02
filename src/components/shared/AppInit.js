import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../../store/userSlice';

const AppInit = () => {
    const dispatch = useDispatch();
  
    useEffect(() => {
      const savedUser = JSON.parse(localStorage.getItem("user"));
      if (savedUser) {
        dispatch(addUser(savedUser));
      }
    }, []);
  
    return null; // This component just does init work
}

export default AppInit


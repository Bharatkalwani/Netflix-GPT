import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate,useLocation } from 'react-router-dom';
const PublicRoute = ({ children }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const user = useSelector((state) => state.user);
    useEffect(() => {
      if (user?.token) {
        navigate('/browser'); // or your desired default logged-in route
      }
    }, [user, navigate,location.pathname]);
  
    if (user?.token) {
      return null; // Or loading if you want
    }
  
    return children;
}

export default PublicRoute
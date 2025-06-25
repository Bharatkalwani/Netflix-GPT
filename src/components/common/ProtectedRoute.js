import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { , useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const navigate = useNavigate();
    const user = useSelector((state) => state.user);
  
    useEffect(() => {
      if (!user?.token) {
        navigate('/login');
      }
    }, [user, navigate]);
  
    if (!user?.token) {
      return null; // or a loading spinner
    }
  
    return children;
  };

export default ProtectedRoute;


import { useSelector } from "react-redux";
import { useNavigate,Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  // const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  if (!user || !user.token) {
    return <Navigate to="/login" replace />; //used  out event handles
    // navigate('/login'); // used in event handlers like useEffect
  }
  return children;
};

export default ProtectedRoute;

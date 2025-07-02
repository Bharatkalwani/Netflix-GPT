
import { useSelector } from 'react-redux';
import { useNavigate,useLocation,Navigate } from 'react-router-dom';
const PublicRoute = ({ children }) => {
    // const navigate = useNavigate();
    const user = useSelector((state) => state.user);

    if (user) {
      return <Navigate to="/browser" replace />;
      // navigate('/browser');
    }
    return children;
}

export default PublicRoute
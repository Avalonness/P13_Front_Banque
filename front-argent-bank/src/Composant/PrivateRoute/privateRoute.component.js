import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function PrivateRoute({ component: Component, ...rest }) {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  if (isAuthenticated) {
    return <Component {...rest} />;
  } else {
    return <Navigate to="/signin" replace />;
  }
}

export default PrivateRoute;
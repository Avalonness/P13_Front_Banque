import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import logo from '../../Shares/img/argentBankLogo.png';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../Shares/redux/slices/authSlice';
function NavBarLayout() {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const navigate = useNavigate();  // pour la redirection après déconnexion

  const handleLogout = () => {
    // Supprime le token du localStorage
    localStorage.removeItem('token');
    
    // Met à jour le state dans Redux
    dispatch(logout());

    // Redirige l'utilisateur vers la page d'accueil ou de connexion
    navigate('/');
  };

  return (
    <div>
      <nav className="main-nav">
        <Link to="/" className="main-nav-logo">
          <img
            className="main-nav-logo-image"
            src={logo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div>
          {isAuthenticated ? (
            <button onClick={handleLogout} className="main-nav-item logout">
              <i className="fa fa-sign-out"></i>
              Logout
            </button>
          ) : (
            <Link to="/signin" className="main-nav-item">
              <i className="fa fa-user-circle"></i>
              Sign In
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
}

export default NavBarLayout;
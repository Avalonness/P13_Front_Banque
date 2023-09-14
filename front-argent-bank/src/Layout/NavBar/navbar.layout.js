import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import logo from '../../Shares/img/argentBankLogo.png';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../Shares/redux/slices/authSlice';

function NavBarLayout() {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const profile = useSelector(state => state.auth.profile);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    dispatch(logout());
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
            <>
              <Link to="/user" className="main-nav-item username">
                {profile?.firstName} {profile?.lastName}
              </Link>
              <button onClick={handleLogout} className="main-nav-item logout">
                <i className="fa fa-sign-out"></i>
                Logout
              </button>
            </>
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
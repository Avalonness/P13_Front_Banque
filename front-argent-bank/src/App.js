import './index.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Assurez-vous d'utiliser BrowserRouter ici
import AcceuilLayout from './Layout/Acceuil/acceuil.layout';
import NavBarLayout from './Layout/NavBar/navbar.layout';
import FooterLayout from './Layout/Footer/footer.layout';
import SignInLayout from './Layout/SignIn/signIn.layout';
import UserLayout from './Layout/User/user.layout'

function App() {
  return (
    <Router>
      <div className='main_container'>
        <div className="content">
          <NavBarLayout />
          <Routes>
            <Route path="/user" element={<UserLayout />} />
            <Route path="/signin" element={<SignInLayout />} />
            <Route path="/" element={<AcceuilLayout />} />
          </Routes>
          <FooterLayout />
        </div>
      </div>
    </Router>
  );
}

export default App;
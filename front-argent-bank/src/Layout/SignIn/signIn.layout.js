import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import login from '../../Shares/Services/login.service';
import { useDispatch, useSelector } from 'react-redux';
import { login as loginAction } from '../../Shares/redux/slices/authSlice';

function SignInLayout() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  
  const dispatch = useDispatch();
  const navigate = useNavigate();  
  const authState = useSelector(state => state.auth); 

  console.log("État initial d'authentification:", authState);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const data = await login(email, password);
      console.log("Réponse du service de login:", data);

      dispatch(loginAction(data.body.token));

      console.log("État après la tentative de connexion:", authState);

      navigate('/user');

    } catch (error) {
      setError(error.message);
      console.error("Erreur lors de la tentative de connexion:", error.message);
    }
  };


  return (
    <div>
    <main className="main bg-dark">
        <section className="sign-in-content">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign In</h1>
            {error && <p>{error}</p>}
            <form onSubmit={handleLogin}>
                <div className="input-wrapper">
                    <label htmlFor="username">Email</label>
                    <input type="email" id="username" value={email} onChange={e => setEmail(e.target.value)} required />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} required />
                </div>
                <div className="input-remember">
                    <input type="checkbox" id="remember-me" />
                    <label htmlFor="remember-me">Remember me</label>
                </div>
                <button type="submit" className="sign-in-button">Sign In</button>
            </form>
        </section>
    </main>
</div>
  );
}

export default SignInLayout;
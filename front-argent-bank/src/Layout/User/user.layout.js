import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { useDispatch, useSelector } from 'react-redux';
import { getProfile, updateProfile } from '../../Shares/Services/userProfile.service';
import { setProfile } from '../../Shares/redux/slices/authSlice';
import AccountComposant from "../../Composant/AccountList/accountlisst.composant";

function UserLayout() {
  const navigate = useNavigate();  
  const dispatch = useDispatch();
  const profile = useSelector(state => state.auth.profile);
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    firstName: profile?.firstName || '',
    lastName: profile?.lastName || ''
  });

  useEffect(() => {
    async function fetchUserProfile() {
        try {
            const data = await getProfile();
            dispatch(setProfile(data));
        } catch (error) {
            console.error('Failed to fetch user profile:', error.message);
            navigate('/');
        }
    }

    fetchUserProfile();
  }, [dispatch, navigate]);

  const toggleForm = () => {
    setShowForm(!showForm);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const updatedProfile = await updateProfile(formData.firstName, formData.lastName);
      
      // Mise à jour du profil dans Redux
      dispatch(setProfile(updatedProfile));
  
      //Ferme le formulaire
      setShowForm(false);
      
    } catch (error) {
      console.error('Failed to update user profile:', error.message);
    }
  }

  return (
    <div>
      <main className="main bg-dark">
        <div className="header">
        <h1>Welcome back<br />{profile?.firstName} {profile?.lastName}!</h1>
        <button className="edit-button" onClick={toggleForm}>Edit Name</button>

          {showForm && (
            <form onSubmit={handleSubmit}>
              <label>
                First Name:
                <input 
                  type="text" 
                  name="firstName" 
                  value={formData.firstName} 
                  onChange={handleChange} 
                />
              </label>
              <label>
                Last Name:
                <input 
                  type="text" 
                  name="lastName" 
                  value={formData.lastName} 
                  onChange={handleChange} 
                />
              </label>
              <button type="submit" className='edit-button'>Save Changes</button>
            </form>
          )}
        </div>
        {isAuthenticated && (
          <>
            <h2 className="sr-only">Accounts</h2>
            <AccountComposant
              title="Argent Bank Checking (x8349)"
              amount="$2,082.79"
              description="Available Balance"
            />
            <AccountComposant
              title="Argent Bank Savings (x6712)"
              amount="$10,928.42"
              description="Available Balance"
            />
            <AccountComposant
              title="Argent Bank Credit Card (x8349)"
              amount="$184.30"
              description="Current Balance"
            />
          </>
        )}
      </main>
    </div>
  );
}

export default UserLayout;
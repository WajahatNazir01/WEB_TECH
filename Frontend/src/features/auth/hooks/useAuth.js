import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { registerUser } from '../services/authService';

export const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const register = async (userData) => {
    setLoading(true);
    try {
      const data = await registerUser(userData); // This is now just the data
      toast.success('Registration successful!');
      
      // If your backend returns a token
      if (data.token) {
        localStorage.setItem('token', data.token);
      }
      
      // If your backend returns user info
      if (data.user) {
        localStorage.setItem('user', JSON.stringify(data.user));
      }
      
      setTimeout(() => {
        navigate('/dashboard');
      }, 1500);
    } catch (error) {
      toast.error(error.response?.data?.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return {
    register,
    loading
  };
};
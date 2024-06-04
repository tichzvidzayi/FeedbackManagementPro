import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FeedbackForm from './components/FeedbackForm';
import AdminLogin from './components/AdminLogin';
import AdminPanel from './components/AdminPanel';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [feedbackList, setFeedbackList] = useState([]);
  const [adminToken, setAdminToken] = useState('');

  useEffect(() => {
    // Fetch feedback list if user is logged in
    if (loggedIn) {
      fetchFeedbackList();
    }
  }, [loggedIn]);

  const fetchFeedbackList = async () => {
    try {
      const response = await axios.get('/api/v1/feedback', {
        headers: {
          Authorization: `Bearer ${adminToken}`,
        },
      });
      setFeedbackList(response.data);
    } catch (error) {
      console.error('Error fetching feedback list:', error);
    }
  };

  const handleFeedbackSubmit = async (feedbackData) => {
    try {
      await axios.post('/api/v1/feedback', feedbackData);
      console.log('Feedback submitted successfully');
    } catch (error) {
      console.error('Error submitting feedback:', error);
    }
  };

  const handleAdminLogin = async (credentials) => {
    try {
      const response = await axios.post('/api/v1/login', credentials);
      setAdminToken(response.data.token);
      setLoggedIn(true);
    } catch (error) {
      console.error('Error logging in as admin:', error);
    }
  };

  const handleAdminLogout = () => {
    setLoggedIn(false);
    setAdminToken('');
  };

  return (
    <div className="container mt-4">
      {!loggedIn ? (
        <AdminLogin onLogin={handleAdminLogin} />
      ) : (
        <AdminPanel feedbackList={feedbackList} onLogout={handleAdminLogout} />
      )}
      <FeedbackForm onSubmit={handleFeedbackSubmit} />
    </div>
  );
};

export default App;

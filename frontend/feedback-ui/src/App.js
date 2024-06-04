import React, { useState } from 'react';
import FeedbackForm from './FeedbackForm';
import AdminLogin from './AdminLogin';
import AdminPanel from './AdminPanel';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [feedbackList, setFeedbackList] = useState([]);

  const handleFeedbackSubmit = (feedbackData) => {
    // Implement API call to submit feedback
    console.log('Submitting feedback:', feedbackData);
  };

  const handleAdminLogin = (credentials) => {
    // Implement API call to authenticate admin
    console.log('Logging in as admin:', credentials);
    setLoggedIn(true);
    // Fetch feedback list after login
    // Implement API call to fetch feedback list
    const dummyFeedbackList = [
      { name: 'John Doe', email: 'john@example.com', message: 'Great service!' },
      { name: 'Jane Smith', email: 'jane@example.com', message: 'Could be improved.' }
    ];
    setFeedbackList(dummyFeedbackList);
  };

  const handleAdminLogout = () => {
    setLoggedIn(false);
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

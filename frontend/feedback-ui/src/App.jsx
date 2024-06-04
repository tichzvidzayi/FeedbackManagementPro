import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [feedbackList, setFeedbackList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeedbackList = async () => {
      setLoading(true);
      try {
        const response = await axios.get('/api/feedback');
        setFeedbackList(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFeedbackList();
  }, []);

  const handleFeedbackSubmit = async (feedbackData) => {
    setLoading(true);
    try {
      const response = await axios.post('/api/feedback', feedbackData);
      setFeedbackList([...feedbackList, response.data]);
      alert('Feedback submitted successfully!');
    } catch (error) {
      console.error('Error submitting feedback:', error);
      alert('Failed to submit feedback. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-4">
      <FeedbackForm onSubmit={handleFeedbackSubmit} />
      {loading ? (
        <p>Loading feedback...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <FeedbackList feedbackList={feedbackList} />
      )}
    </div>
  );
};

export default App;

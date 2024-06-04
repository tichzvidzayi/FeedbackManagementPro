import React from 'react';
import { Button } from 'react-bootstrap';

const AdminPanel = ({ feedbackList, onLogout }) => {
  return (
    <div>
      <Button variant="danger" onClick={onLogout} className="mb-3">Logout</Button>
      <h2>Feedback List</h2>
      <ul>
        {feedbackList.map((feedback, index) => (
          <li key={index}>
            <strong>{feedback.name}</strong> - {feedback.email}: {feedback.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;

import React from 'react';
import { ListGroup } from 'react-bootstrap';

const FeedbackList = ({ feedbackList }) => {
  return (
    <div>
      <h2>Feedback List</h2>
      <ListGroup>
        {feedbackList.map((feedback, index) => (
          <ListGroup.Item key={index}>
            <strong>{feedback.name}</strong> - {feedback.email}: {feedback.message}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default FeedbackList;

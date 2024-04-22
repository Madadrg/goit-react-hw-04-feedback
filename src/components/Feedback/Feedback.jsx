import React, { useState } from 'react';

// Feedback component
const Feedback = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  // Function to handle feedback button clicks
  const handleFeedback = type => {
    setFeedback(prevState => ({
      ...prevState,
      [type]: prevState[type] + 1,
    }));
  };

  // Calculate total feedback count and positive feedback percentage
  const total = feedback.good + feedback.neutral + feedback.bad;
  const positivePercentage =
    total > 0 ? Math.round((feedback.good / total) * 100) : 0;

  // Section component
  const Section = ({ title, children }) => {
    return (
      <div>
        <h2>{title}</h2>
        {children}
      </div>
    );
  };

  // Notification component
  const Notification = ({ message }) => {
    return <p>{message}</p>;
  };

  // Statistics component
  const Statistics = () => {
    return (
      <div>
        <h3>Statistics:</h3>
        <p>
          Good: {feedback.good} Neutral: {feedback.neutral} Bad: {feedback.bad}{' '}
          Total: {total} Positive feedback: {positivePercentage}%
        </p>
      </div>
    );
  };

  // FeedbackOptions component
  const FeedbackOptions = () => {
    const options = ['good', 'neutral', 'bad'];
    return (
      <div>
        <h2>Please leave feedback:</h2>
        {options.map(option => (
          <button key={option} onClick={() => handleFeedback(option)}>
            {option}
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className="container">
      <Section title="Feedback">
        <FeedbackOptions />
      </Section>
      {total > 0 ? (
        <Section title="Statistics">
          <Statistics />
        </Section>
      ) : (
        <Section title="Statistics">
          <Notification message="There is no feedback" />
        </Section>
      )}
    </div>
  );
};

export default Feedback;

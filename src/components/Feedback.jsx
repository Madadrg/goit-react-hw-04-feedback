import React, { useState } from 'react';

// Section component
const Section = ({ title, children }) => {
  return (
    <div>
      <h2>{title}</h2>
      {children}
    </div>
  );
};

// Statistics component
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <h3>Statistics:</h3>
      <p>
        Good: {good} Neutral: {neutral} Bad: {bad} Total: {total} Positive
        feedback: {positivePercentage}%
      </p>
    </div>
  );
};

// FeedbackOptions component
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      <h2>Please leave feedback:</h2>
      {options.map(option => (
        <button key={option} onClick={() => onLeaveFeedback(option)}>
          {option}
        </button>
      ))}
    </div>
  );
};

function App() {
  // State to keep track of feedback statistics
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

  return (
    <div className="container">
      <Section title="Feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleFeedback}
        />
      </Section>
      <Section title="Statistics">
        <Statistics
          good={feedback.good}
          neutral={feedback.neutral}
          bad={feedback.bad}
          total={total}
          positivePercentage={positivePercentage}
        />
      </Section>
    </div>
  );
}

export default App;

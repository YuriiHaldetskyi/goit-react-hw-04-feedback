import { FeedbackOptions } from 'components/FeedBackOptions/feedbackoptions';
import { Statictics } from 'components/Statistics/Statistics';
import { Section } from './Section/Section';
import PropTypes from 'prop-types';
import { useState } from 'react';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = event => {
    switch (event.currentTarget.name) {
      case 'good':
        setGood(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;
      default:
        break;
    }
  };

  const getTotalFeedback = () => {
    return good + bad + neutral;
  };
  const Percentage = () => {
    const total = getTotalFeedback();
    return Math.round((good / total) * 100);
  };
  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onChange={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        <Statictics
          good={good}
          neutral={neutral}
          bad={bad}
          total={getTotalFeedback()}
          positivePercentage={Percentage()}
        />
      </Section>
    </>
  );
}

App.propType = {
  state: PropTypes.oneOfType([PropTypes.number]),
};

import { FeedbackOptions } from 'components/FeedBackOptions/feedbackoptions';
import { Statictics } from 'components/Statistics/Statistics';
import { Section } from './Section/Section';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = event => {
    const { name } = event.currentTarget;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    const Percentage = Math.round((good / total) * 100);
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onChange={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          <Statictics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={Percentage}
          />
        </Section>
      </>
    );
  }
}

App.propType = {
  state: PropTypes.oneOfType([PropTypes.number]),
};

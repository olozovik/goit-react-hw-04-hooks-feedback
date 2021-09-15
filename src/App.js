import React, { Component } from 'react';
import { FeedbackOptions } from './components/FeedbackOptions/FeedbackOptions';
import { Statistics } from './components/Statistics/Statistics';
import { Section } from 'components/Section/Section';
import { Notification } from './components/Statistics/Notification/Notification';

const options = ['good', 'neutral', 'bad'];

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  getQuantityByType = typeFeedback => {
    return this.state[typeFeedback];
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const good = this.state.good;
    return Math.round((good / total) * 100);
  };

  render() {
    const {
      onLeaveFeedback,
      countTotalFeedback,
      getQuantityByType,
      countPositiveFeedbackPercentage,
    } = this;

    return (
      <>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={options}
            onLeaveFeedback={onLeaveFeedback}
          />
        </Section>
        <Section title={'Statistics'}>
          {countTotalFeedback() > 0 ? (
            <Statistics
              good={getQuantityByType('good')}
              neutral={getQuantityByType('neutral')}
              bad={getQuantityByType('bad')}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message={'No feedback given'} />
          )}
        </Section>
      </>
    );
  }
}

export { App };

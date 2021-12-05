import { Section } from './components/Section';
import { Statistics } from './components/Statistics';
import { FeedbackOptions } from './components/FeedbackOptions';
import { Notification } from './components/Notification';
import { Component } from 'react';
import './App.scss';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  buttonHandler = value => {
    this.setState(prevState => ({ [value]: prevState[value] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;

    return good + neutral + bad;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.buttonHandler}
          />
        </Section>
        <Section title="Statistics">
          {total === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics good={good} neutral={neutral} bad={bad} total={total} />
          )}
        </Section>
      </>
    );
  }
}

export default App;

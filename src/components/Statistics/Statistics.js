import { Component } from 'react';

export class Statistics extends Component {
  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.props;

    return Math.floor((good / (good + neutral + bad)) * 100);
  };

  render() {
    const { good, neutral, bad, total } = this.props;
    const positiveFeedback = this.countPositiveFeedbackPercentage();
    return (
      <ul>
        <li>Good:{good}</li>
        <li>Neutral:{neutral}</li>
        <li>Bad:{bad}</li>
        <li>Total:{total}</li>
        <li>Positive feedback:{positiveFeedback}%</li>
      </ul>
    );
  }
}

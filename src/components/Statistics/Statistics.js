import { Component } from 'react';
import { PropTypes } from 'prop-types';
import s from './Statistics.module.scss';

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
        <li className={s.element}>Good:{good}</li>
        <li className={s.element}>Neutral:{neutral}</li>
        <li className={s.element}>Bad:{bad}</li>
        <li className={s.element}>Total:{total}</li>
        <li className={s.element}>Positive feedback:{positiveFeedback}%</li>
      </ul>
    );
  }
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
};

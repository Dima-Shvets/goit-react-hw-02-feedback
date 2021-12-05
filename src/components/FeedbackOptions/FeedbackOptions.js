import { Component } from 'react';
import { PropTypes } from 'prop-types';
import s from './FeedbackOptions.module.scss';

export class FeedbackOptions extends Component {
  capitalize = string => {
    return string[0].toUpperCase() + string.substring(1);
  };

  render() {
    const options = Object.keys(this.props.options);
    return (
      <ul className={s.list}>
        {options.map(option => {
          return (
            <li key={option} className={s.element}>
              <button
                type="button"
                onClick={() => this.props.onLeaveFeedback(option)}
              >
                {this.capitalize(option)}
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}

FeedbackOptions.protoTypes = {
  options: PropTypes.sting,
  onLeaveFeedback: PropTypes.func,
};

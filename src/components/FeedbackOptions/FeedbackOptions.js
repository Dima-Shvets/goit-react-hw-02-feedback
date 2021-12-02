import { Component } from 'react';

export class FeedbackOptions extends Component {
  capitalize = string => {
    return string[0].toUpperCase() + string.substring(1);
  };

  render() {
    const options = Object.keys(this.props.options);
    return (
      <ul>
        {options.map(option => {
          return (
            <li key={option}>
              <button
                type="button"
                onClick={this.props.onLeaveFeedback}
                data-value={option}
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

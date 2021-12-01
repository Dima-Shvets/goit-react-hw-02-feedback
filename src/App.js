import { Component } from 'react';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positiveFeedback: 0,
  };

  buttonHandler = e => {
    const { value } = e.currentTarget.dataset;

    this.setState(prevState => ({ [value]: prevState[value] + 1 }));

    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    this.setState({
      total: good + neutral + bad,
    });
  };

  countPositiveFeedbackPercentage = () => {
    const { good, total } = this.state;
    this.setState({
      positiveFeedback: Math.floor((good / total) * 100),
    });
  };

  render() {
    const { good, neutral, bad, total, positiveFeedback } = this.state;
    return (
      <>
        <h2>Please leave feedback</h2>
        <ul>
          <li>
            <button
              type="button"
              onClick={this.buttonHandler}
              data-value="good"
            >
              Good
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={this.buttonHandler}
              data-value="neutral"
            >
              {' '}
              Neutral
            </button>
          </li>
          <li>
            <button type="button" onClick={this.buttonHandler} data-value="bad">
              Bad
            </button>
          </li>
        </ul>
        <h2>Statistics</h2>
        <ul>
          <li>Good:{good}</li>
          <li>Neutral:{neutral}</li>
          <li>Bad:{bad}</li>
          <li>Total:{total}</li>
          <li>Positive feedback:{positiveFeedback}%</li>
        </ul>
      </>
    );
  }
}

export default App;

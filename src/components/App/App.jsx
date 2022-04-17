import React from 'react';
import { FeedbackContainer, NotificationMessage } from './App.styled';
import { Controls } from '../Buttons/Buttons';
import { FeedbackStatictics } from '../Statistics/Statistics';

const message = 'There is no feedback';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = event => {
    const eventName = event.target.textContent;
    console.log(eventName);
    this.setState(prevState => {
      return {
        [eventName]: prevState[eventName] + 1,
      };
    });
  };

  countTotalFeedback() {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  }

  countPositiveFeedbackPercentage() {
    return Math.round(
      (this.state.good /
        (this.state.good + this.state.neutral + this.state.bad)) *
        100
    );
  }

  render() {
    const options = Object.keys(this.state);

    return (
      <FeedbackContainer>
        <h2>Please leave Feedback</h2>
        <Controls options={options} handleFeedback={this.handleFeedback} />
        {this.countTotalFeedback() > 0 ? (
          <FeedbackStatictics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            percentage={this.countPositiveFeedbackPercentage()}
          />
        ) : (
          <NotificationMessage>{message} </NotificationMessage>
        )}
      </FeedbackContainer>
    );
  }
}

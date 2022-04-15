// import React from 'react';
// import { FeedbackContainer, NotificationMessage } from './Feedback.styled';
// import { Controls } from './Buttons';
// import { FeedbackStatictics } from './Statistics';

// class Feedback extends React.Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//     message: 'There is no feedback',
//   };

//   handleGood = () => {
//     this.setState(prevState => {
//       return {
//         good: prevState.good + 1,
//       };
//     });
//   };

//   handleNeutral = () => {
//     this.setState(prevState => {
//       return {
//         neutral: prevState.neutral + 1,
//       };
//     });
//   };

//   handleBad = () => {
//     this.setState(prevState => {
//       return {
//         bad: prevState.bad + 1,
//       };
//     });
//   };

//   countTotalFeedback() {
//     const total = this.state.good + this.state.neutral + this.state.bad;
//     return total;
//   }

//   countPositiveFeedbackPercentage() {
//     return Math.round(
//       (this.state.good /
//         (this.state.good + this.state.neutral + this.state.bad)) *
//         100
//     );
//   }

//   render() {
//     return (
//       <FeedbackContainer>
//         <h2>Please leave Feedback</h2>
//         <Controls
//           onGood={this.handleGood}
//           onNeutral={this.handleNeutral}
//           onBad={this.handleBad}
//         />
//         {this.countTotalFeedback() > 0 ? (
//           <FeedbackStatictics
//             good={this.state.good}
//             neutral={this.state.neutral}
//             bad={this.state.bad}
//             total={this.countTotalFeedback()}
//             percentage={this.countPositiveFeedbackPercentage()}
//           />
//         ) : (
//           <NotificationMessage>{this.state.message} </NotificationMessage>
//         )}
//       </FeedbackContainer>
//     );
//   }
// }

// export default Feedback;

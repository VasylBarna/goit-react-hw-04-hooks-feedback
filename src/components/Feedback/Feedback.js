import { useState } from 'react';
import FeedbackOptions from '../FeedbackOptions';
import Section from '../Section';
import Statistics from '../Statistics';
import Notification from '../Notification';
import styles from './Feedback.module.scss';

export default function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const setStats = event => {
    switch (event) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };

  const totalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  };

  const positiveFeedbackPercentage = () => {
    const positive = Math.round((good / totalFeedback()) * 100);
    return positive;
  };

  const options = { good, neutral, bad };
  const feedbackChoice = Object.keys(options);

  return (
    <div className={styles.container}>
      <Section title="Please leave feedback">
        <FeedbackOptions options={feedbackChoice} onLeaveFeedback={setStats} />
      </Section>
      <Section title="Statistics">
        {good || neutral || bad ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback()}
            percente={positiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </div>
  );
}

// import { Component } from 'react';
// import FeedbackOptions from '../FeedbackOptions';
// import Section from '../Section';
// import Statistics from '../Statistics';
// import Notification from '../Notification';
// import styles from './Feedback.module.scss';

// const feedbackChoice = ['good', 'neutral', 'bad'];

// class Feedback extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   onLeaveFeedback = ({ target: { name } }) =>
//     this.setState({ [name]: this.state[name] + 1 });

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const { good } = this.state;
//     const total = this.countTotalFeedback();
//     return Math.round((good / total) * 100);
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const total = this.countTotalFeedback();
//     const percente = this.countPositiveFeedbackPercentage();

//     return (
//       <div className={styles.container}>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={feedbackChoice}
//             onLeaveFeedback={this.onLeaveFeedback}
//           />
//         </Section>
//         <Section title="Statistics">
//           {total > 0 ? (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={total}
//               percente={percente}
//             />
//           ) : (
//             <Notification message="No feedback given" />
//           )}
//         </Section>
//       </div>
//     );
//   }
// }

// export default Feedback;

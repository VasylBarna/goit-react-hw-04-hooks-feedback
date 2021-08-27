import PropTypes from 'prop-types';
import styles from './Statistics.module.scss';

const Statistics = ({ good, neutral, bad, total, percente }) => (
  <div className={styles.statistics}>
    <ul className={styles.list}>
      <li>
        Good: <span className={styles.indicator}>{good}</span>
      </li>
      <li>
        Neutral: <span className={styles.indicator}>{neutral}</span>
      </li>
      <li>
        Bad: <span className={styles.indicator}>{bad}</span>
      </li>
    </ul>
    <p className={styles.total}>
      Total: <span className={styles.indicator}>{total}</span>
    </p>
    <p className={styles.positive}>
      Positive Feedback: <span className={styles.indicator}>{percente}%</span>
    </p>
  </div>
);

Statistics.propType = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  percente: PropTypes.func.isRequired,
};
export default Statistics;

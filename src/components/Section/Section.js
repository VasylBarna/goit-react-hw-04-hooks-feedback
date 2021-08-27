import PropTypes from 'prop-types';
import styles from './Section.module.scss';

const Section = ({ title, children }) => (
  <div>
    <h3 className={styles.title}>{title}</h3>
    {children}
  </div>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};

export default Section;

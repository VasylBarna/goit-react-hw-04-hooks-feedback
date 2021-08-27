import styles from './Notification.module.scss';

const Notification = ({ message }) => (
  <p className={styles.message}>{message}</p>
);

export default Notification;

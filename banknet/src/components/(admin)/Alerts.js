import styles from '@/styles/admin/Alerts.module.css';

const Alerts = ({ alerts }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Alertas Recientes</h2>
      <ul className={styles.alertsList}>
        {alerts.map((alert, index) => (
          <li key={index} className={`${styles.alert} ${styles[alert.level]}`}>
            <div className={styles.alertIcon}>{alert.icon}</div>
            <div className={styles.alertContent}>
              <p className={styles.alertTitle}>{alert.title}</p>
              <p className={styles.alertMessage}>{alert.message}</p>
              <p className={styles.alertTime}>{alert.time}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Alerts;
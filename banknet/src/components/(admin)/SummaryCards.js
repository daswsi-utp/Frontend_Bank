import styles from '@/styles/admin/SummaryCard.module.css';

const SummaryCard = ({ title, value, change, icon }) => {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.value}>{value}</p>
        <p className={`${styles.change} ${change >= 0 ? styles.positive : styles.negative}`}>
          {change >= 0 ? '+' : ''}{change}%
        </p>
      </div>
    </div>
  );
};

export default SummaryCard;
'use client';

import styles from '@/styles/admin/Dashboard1.module.css';

const ActivityTimeline = ({ data }) => {
  if (!Array.isArray(data)) return null;

  return (
    <ul className={styles.timeline}>
      {data.map((item, index) => {
        let fecha = 'Fecha inválida';
        if (item.timestamp) {
          const parsedDate = new Date(item.timestamp);
          if (!isNaN(parsedDate)) {
            fecha = parsedDate.toLocaleString();
          }
        }

        return (
          <li key={index} className={styles.timelineItem}>
            <span className={styles.timelineDate}>{fecha}</span>
            <span className={styles.timelineMessage}>{item.message || 'Sin descripción'}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default ActivityTimeline;

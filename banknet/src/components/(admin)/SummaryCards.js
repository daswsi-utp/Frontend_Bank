// src/components/(admin)/SummaryCards.js
'use client';

import styles from '@/styles/admin/Dashboard1.module.css';

const SummaryCard = ({ title, value, icon, trend, percentage }) => {
  const trendColor = trend === 'up' ? '#4CAF50' : trend === 'down' ? '#F44336' : '#FFC107';
  
  return (
    <div className={styles.summaryCard}>
      <div className={styles.cardIcon} style={{ backgroundColor: `${trendColor}20` }}>
        {icon}
      </div>
      <div className={styles.cardContent}>
        <span className={styles.cardTitle}>{title}</span>
        <span className={styles.cardValue}>{value}</span>
        <div className={styles.cardTrend} style={{ color: trendColor }}>
          {trend === 'up' ? '↑' : trend === 'down' ? '↓' : '→'} {percentage}
        </div>
      </div>
    </div>
  );
};

export default SummaryCard;
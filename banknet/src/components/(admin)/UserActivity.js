import styles from '@/styles/admin/UserActivity.module.css';

const UserActivity = ({ activities }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Actividad de Usuarios</h2>
      <div className={styles.activityList}>
        {activities.map((activity, index) => (
          <div key={index} className={styles.activityItem}>
            <div className={styles.userInfo}>
              <div className={styles.avatar}>{activity.user.charAt(0)}</div>
              <div>
                <p className={styles.userName}>{activity.user}</p>
                <p className={styles.userRole}>{activity.role}</p>
              </div>
            </div>
            <div className={styles.activityDetails}>
              <p className={styles.activityAction}>{activity.action}</p>
              <p className={styles.activityTime}>{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserActivity;
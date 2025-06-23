import styles from '@/styles/admin/QuickActions.module.css';

const QuickActions = () => {
  const actions = [
    { icon: '💰', label: 'Nueva Transacción', action: () => {} },
    { icon: '👤', label: 'Agregar Usuario', action: () => {} },
    { icon: '📊', label: 'Generar Reporte', action: () => {} },
    { icon: '🔒', label: 'Ajustes Seguridad', action: () => {} },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Acciones Rápidas</h2>
      <div className={styles.actionsGrid}>
        {actions.map((action, index) => (
          <button key={index} className={styles.actionButton} onClick={action.action}>
            <span className={styles.actionIcon}>{action.icon}</span>
            <span className={styles.actionLabel}>{action.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
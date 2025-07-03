import styles from "@/styles/admin/TransactionsTable.module.css";

const getEstadoNombre = (estadoId) => {
  switch (estadoId) {
    case 1:
      return "Pendiente";
    case 2:
      return "Completado";
    case 3:
      return "Rechazado";
    default:
      return "Desconocido";
  }
};

const TransactionsTable = ({ transactions }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Últimas Transferencias</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Cuenta Origen</th>
            <th>Cuenta Destino</th>
            <th>Monto</th>
            <th>Moneda</th>
            <th>Concepto</th>
            <th>Fecha</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transfer) => (
            <tr key={transfer.id}>
              <td>{transfer.id}</td>
              <td>{transfer.sourceAccount}</td>
              <td>{transfer.destinationAccount}</td>
              <td
                className={
                  parseFloat(transfer.monto) >= 0
                    ? styles.positive
                    : styles.negative
                }
              >
                S/.{parseFloat(transfer.monto).toFixed(2)}
              </td>
              <td>{transfer.moneda}</td>
              <td>{transfer.concepto}</td>
              <td>{new Date(transfer.fechaSolicitud).toLocaleString()}</td>
              <td>
                <span
                  className={`${styles.status} ${
                    styles[getEstadoNombre(transfer.estadoId)]
                  }`}
                >
                  {getEstadoNombre(transfer.estadoId)}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionsTable;

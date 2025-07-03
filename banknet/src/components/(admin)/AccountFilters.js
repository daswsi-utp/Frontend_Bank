import styles from "@/styles/admin/Transactions.module.css";
import { useState } from "react";

export default function AccountFilters({ onFilter }) {
  const [userId, setUserId] = useState("");
  const [typeId, setTypeId] = useState("");

  const applyFilters = () => {
    onFilter({ userId, typeId });
  };

  return (
    <div className={styles.filtersContainer}>
      <div className={styles.filtersGrid}>
        <div className={styles.filterGroup}>
          <label className={styles.filterLabel}>ID de Usuario</label>
          <input
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            className={styles.filterInput}
            placeholder="Ej. 123"
          />
        </div>
        <div className={styles.filterGroup}>
          <label className={styles.filterLabel}>ID Tipo de Cuenta</label>
          <input
            type="text"
            value={typeId}
            onChange={(e) => setTypeId(e.target.value)}
            className={styles.filterInput}
            placeholder="Ej. 1"
          />
        </div>
      </div>
      <button className={styles.applyButton} onClick={applyFilters}>
        Aplicar Filtros
      </button>
    </div>
  );
}

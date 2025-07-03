"use client";

import { useEffect, useState } from "react";
import styles from "@/styles/admin/Accounts.module.css";
import {
  getAllAccounts,
  createAccount,
  updateAccount,
  deleteAccount,
  getMovementsByAccountId,
} from "@/lib/accountService";
import NewAccountForm from "@/components/(admin)/NewAccountForm";
import EditAccountForm from "@/components/(admin)/EditAccountForm";
import AccountFilters from "@/components/(admin)/AccountFilters";

export default function AccountsPage() {
  const [accounts, setAccounts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedAccount, setSelectedAccount] = useState(null);
  const [showMovements, setShowMovements] = useState(false);
  const [movements, setMovements] = useState([]);
  const [filteredAccounts, setFilteredAccounts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formMode, setFormMode] = useState("create");
  const [formData, setFormData] = useState({
    userId: "",
    accountTypeId: "",
    balance: 0,
  });

  // Cargar cuentas
  const loadAccounts = async () => {
    setLoading(true);
    try {
      const data = await getAllAccounts();
      setAccounts(data);
      setFilteredAccounts(data);
    } catch (error) {
      console.error("Error al cargar cuentas:", error);
    } finally {
      setLoading(false);
    }
  };

  // Mostrar movimientos
  const openMovementsModal = async (accountId) => {
    try {
      const data = await getMovementsByAccountId(accountId);
      setMovements(data);
      setShowMovements(true);
    } catch (error) {
      console.error("Error al obtener movimientos:", error);
    }
  };

  // Crear/editar cuenta
  const handleSave = async () => {
    try {
      if (formMode === "create") {
        await createAccount(formData);
      } else {
        await updateAccount(formData.id, formData);
      }
      await loadAccounts();
      setShowForm(false);
    } catch (error) {
      console.error("Error al guardar cuenta:", error);
    }
  };

  const handleFilter = ({ userId, typeId }) => {
    let filtered = accounts;
    if (userId)
      filtered = filtered.filter((acc) => acc.userId.toString() === userId);
    if (typeId)
      filtered = filtered.filter(
        (acc) => acc.accountTypeId.toString() === typeId
      );
    setFilteredAccounts(filtered);
  };

  // Eliminar cuenta
  const handleDelete = async (id) => {
    if (!confirm("¿Estás seguro de eliminar esta cuenta?")) return;
    try {
      await deleteAccount(id);
      await loadAccounts();
    } catch (error) {
      console.error("Error al eliminar cuenta:", error);
    }
  };

  // Abrir formulario
  const openForm = (mode, account = null) => {
    setFormMode(mode);
    setFormData(account || { userId: "", accountTypeId: "", balance: 0 });
    setShowForm(true);
  };

  useEffect(() => {
    loadAccounts();
  }, []);

  return (
    <div className={styles.accountsContainer}>
      <div className={styles.header}>
        <h1 className={styles.pageTitle}>Gestión de Cuentas Bancarias</h1>
        <div className={styles.actions}>
          <button
            onClick={() => openForm("create")}
            className={styles.primaryButton}
          >
            + Nueva Cuenta
          </button>
        </div>
      </div>

      {loading ? (
        <div className={styles.loadingContainer}>
          <div className={styles.spinner}></div>
          <p>Cargando información de cuentas...</p>
        </div>
      ) : (
        <div className={styles.contentWrapper}>
          <div className={styles.filtersContainer}>
            <AccountFilters onFilter={handleFilter} />
          </div>

          <div className={styles.tableWrapper}>
            <table className={styles.dataTable}>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Número</th>
                  <th>Usuario</th>
                  <th>Tipo</th>
                  <th>Saldo</th>
                  <th>Disponible</th>
                  <th>Creación</th>
                  <th>Actualización</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {filteredAccounts.map((acc) => (
                  <tr
                    key={acc.id}
                    onClick={() => openMovementsModal(acc.id)}
                    className={styles.tableRow}
                  >
                    <td>{acc.id}</td>
                    <td className={styles.accountNumber}>{acc.accountNumber}</td>
                    <td>{acc.userId}</td>
                    <td>{acc.accountTypeId}</td>
                    <td className={styles.amount}>${parseFloat(acc.balance).toFixed(2)}</td>
                    <td className={styles.amount}>${parseFloat(acc.availableBalance).toFixed(2)}</td>
                    <td>{new Date(acc.creationDate).toLocaleDateString()}</td>
                    <td>{new Date(acc.lastUpdate).toLocaleDateString()}</td>
                    <td className={styles.actionsCell}>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          openForm("edit", acc);
                        }}
                        className={styles.editButton}
                      >
                        Editar
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDelete(acc.id);
                        }}
                        className={styles.deleteButton}
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Modal de movimientos */}
      {showMovements && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <div className={styles.modalHeader}>
              <h2>Historial de Movimientos</h2>
              <button
                className={styles.closeButton}
                onClick={() => setShowMovements(false)}
              >
                &times;
              </button>
            </div>
            <div className={styles.modalBody}>
              <ul className={styles.movementsList}>
                {movements.map((mov) => (
                  <li key={mov.id} className={styles.movementItem}>
                    <div className={styles.movementDetails}>
                      <span className={styles.movementDescription}>{mov.description}</span>
                      <span className={mov.amount >= 0 ? styles.positiveAmount : styles.negativeAmount}>
                        ${parseFloat(mov.amount).toFixed(2)}
                      </span>
                    </div>
                    <div className={styles.movementDate}>
                      {new Date(mov.date).toLocaleDateString()}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Modal de formulario */}
      {showForm && formMode === "create" && (
        <NewAccountForm
          onSubmit={async (newData) => {
            try {
              await createAccount(newData);
              await loadAccounts();
              setShowForm(false);
            } catch (err) {
              console.error("Error al crear cuenta:", err);
            }
          }}
          onCancel={() => setShowForm(false)}
        />
      )}

      {showForm && formMode === "edit" && (
        <EditAccountForm
          account={formData}
          onSubmit={async (id, updatedData) => {
            try {
              await updateAccount(id, updatedData);
              await loadAccounts();
              setShowForm(false);
            } catch (err) {
              console.error("Error al actualizar cuenta:", err);
            }
          }}
          onCancel={() => setShowForm(false)}
        />
      )}
    </div>
  );
}
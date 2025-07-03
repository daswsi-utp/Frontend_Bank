"use client";

import { useEffect, useState } from "react";
import EmployeesTable from "@/components/(admin)/EmployeesTable";
import NewEmployeeForm from "@/components/(admin)/NewEmployeeForm";
import EditEmployeeForm from "@/components/(admin)/EditEmployeeForm";
import ConfirmDeleteDialog from "@/components/(admin)/ConfirmDeleteDialog";

import styles from "@/styles/admin/Clients.module.css";

import {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
} from "@/lib/userService";

export default function EmployeesPage() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [showNewForm, setShowNewForm] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [deletingEmployee, setDeletingEmployee] = useState(null);

  const fetchEmployees = async () => {
    try {
      const data = await getAllUsers();

      const onlyEmployees = data
        .filter((e) => e.tipo?.toUpperCase() === "EMPLEADO")
        .map((e) => ({
          id: e.id,
          nombre: e.nombre,
          apePaterno: e.apePaterno,
          apeMaterno: e.apeMaterno,
          name: `${e.nombre} ${e.apePaterno} ${e.apeMaterno}`,
          email: e.email,
          phone: e.telefono,
          telefono: e.telefono, // ✅ clave para el formulario
          dni: e.dni,
          departamento: e.departamento,
          provincia: e.provincia,
          distrito: e.distrito,
          direccion: e.direccion,
          fecha_creacion: new Date(e.fechaCreacion).toLocaleDateString(),
          status: "Activo",
        }));

      setEmployees(onlyEmployees);
    } catch (err) {
      console.error("Error al cargar empleados:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const handleCreate = async (formData) => {
    await createUser({
      ...formData,
      tipo: "EMPLEADO",
    });
    await fetchEmployees();
  };

  const handleUpdate = async (id, formData) => {
    await updateUser(id, {
      tipo: "EMPLEADO",
      nombre: formData.nombre,
      apePaterno: formData.apePaterno,
      apeMaterno: formData.apeMaterno,
      email: formData.email,
      telefono: formData.telefono,
      dni: formData.dni,
      direccion: formData.direccion,
      departamento: formData.departamento,
      provincia: formData.provincia,
      distrito: formData.distrito,
    });
    await fetchEmployees();
  };

  const handleDelete = async (id) => {
    await deleteUser(id);
    await fetchEmployees();
  };

  const filteredEmployees = employees.filter((employee) =>
    `${employee.nombre} ${employee.apePaterno} ${employee.apeMaterno}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase()) ||
    employee.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.clientsContainer}>
      <div className={styles.header}>
        <h1>Administración de Empleados</h1>
        <div className={styles.actions}>
          <button
            className={styles.primaryButton}
            onClick={() => setShowNewForm(true)}
          >
            Nuevo Empleado
          </button>
        </div>
      </div>

      <div className={styles.filters}>
        <input
          type="text"
          placeholder="Buscar empleado..."
          className={styles.searchInput}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select className={styles.filterSelect}>
          <option>Todos los empleados</option>
          <option>Activos</option>
          <option>Inactivos</option>
        </select>
        <select className={styles.filterSelect}>
          <option>Cualquier tipo</option>
          <option>Administrativos</option>
          <option>Operativos</option>
        </select>
      </div>

      {loading ? (
        <p>Cargando empleados...</p>
      ) : (
        <EmployeesTable
          employees={filteredEmployees}
          onEdit={(employee) => setEditingEmployee(employee)}
          onDelete={(employee) => setDeletingEmployee(employee)}
        />
      )}

      {showNewForm && (
        <NewEmployeeForm
          onCreate={handleCreate}
          onClose={() => setShowNewForm(false)}
        />
      )}

      {editingEmployee && (
        <EditEmployeeForm
          employee={editingEmployee}
          onUpdate={handleUpdate}
          onClose={() => setEditingEmployee(null)}
        />
      )}

      {deletingEmployee && (
        <ConfirmDeleteDialog
          client={deletingEmployee}
          onDelete={handleDelete}
          onClose={() => setDeletingEmployee(null)}
        />
      )}
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import ClientsTable from "@/components/(admin)/ClientsTable";
import NewClientForm from "@/components/(admin)/NewClientForm";
import EditClientForm from "@/components/(admin)/EditClientForm";
import ConfirmDeleteDialog from "@/components/(admin)/ConfirmDeleteDialog";

import styles from "@/styles/admin/Clients.module.css";

import {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
} from "@/lib/userService";

export default function ClientsPage() {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [showNewForm, setShowNewForm] = useState(false);
  const [editingClient, setEditingClient] = useState(null);
  const [deletingClient, setDeletingClient] = useState(null);

  const fetchClients = async () => {
    try {
      const data = await getAllUsers();

      const onlyClients = data
        .filter((c) => c.tipo?.toUpperCase() === "CLIENTE")
        .map((c) => ({
          id: c.id,
          nombre: c.nombre,
          apePaterno: c.apePaterno,
          apeMaterno: c.apeMaterno,
          name: `${c.nombre} ${c.apePaterno} ${c.apeMaterno}`,
          email: c.email,
          phone: c.telefono,
          dni: c.dni,
          departamento: c.departamento,
          provincia: c.provincia,
          distrito: c.distrito,
          direccion: c.direccion,
          fecha_creacion: new Date(c.fechaCreacion).toLocaleDateString(),
          status: "Activo",
        }));

      setClients(onlyClients);
    } catch (err) {
      console.error("Error al cargar clientes:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchClients();
  }, []);

  const handleCreate = async (formData) => {
    await createUser({
      ...formData,
      tipo: "CLIENTE",
    });
    await fetchClients();
  };

  const handleUpdate = async (id, formData) => {
    await updateUser(id, {
      tipo: "CLIENTE",
      nombre: formData.nombre,
      apePaterno: formData.apePaterno,
      apeMaterno: formData.apeMaterno,
      email: formData.email,
      telefono: formData.phone,
      dni: formData.dni,
      direccion: formData.direccion,
      departamento: formData.departamento,
      provincia: formData.provincia,
      distrito: formData.distrito,
    });
    await fetchClients();
  };

  const handleDelete = async (id) => {
    await deleteUser(id);
    await fetchClients();
  };

  const filteredClients = clients.filter((client) =>
    `${client.nombre} ${client.apePaterno} ${client.apeMaterno}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase()) ||
    client.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.clientsContainer}>
      <div className={styles.header}>
        <h1>Administración de Clientes</h1>
        <div className={styles.actions}>
          <button className={styles.primaryButton} onClick={() => setShowNewForm(true)}>
            Nuevo Cliente
          </button>
          
        </div>
      </div>

      <div className={styles.filters}>
        <input
          type="text"
          placeholder="Buscar cliente..."
          className={styles.searchInput}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select className={styles.filterSelect}>
          <option>Todos los clientes</option>
          <option>Activos</option>
          <option>Inactivos</option>
        </select>
        <select className={styles.filterSelect}>
          <option>Cualquier tipo</option>
          <option>Personales</option>
          <option>Empresariales</option>
        </select>
      </div>

      {loading ? (
        <p>Cargando clientes...</p>
      ) : (
        <ClientsTable
          clients={filteredClients}
          onEdit={(client) => setEditingClient(client)}
          onDelete={(client) => setDeletingClient(client)}
        />
      )}

      {/* Formularios modales */}
      {showNewForm && (
        <NewClientForm
          onCreate={handleCreate}
          onClose={() => setShowNewForm(false)}
        />
      )}

      {editingClient && (
        <EditClientForm
          client={editingClient}
          onUpdate={handleUpdate}
          onClose={() => setEditingClient(null)}
        />
      )}

      {deletingClient && (
        <ConfirmDeleteDialog
          client={deletingClient}
          onDelete={handleDelete}
          onClose={() => setDeletingClient(null)}
        />
      )}
    </div>
  );
}

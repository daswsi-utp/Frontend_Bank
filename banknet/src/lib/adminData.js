import axios from 'axios';
import {
  USER_API,
  TRANSFER_API,
  FRAUD_API,
  LOG_API,
  EMPLOYEE_API
} from './api';

// Total de usuarios
export const fetchTotalUsers = async () => {
  const res = await axios.get(USER_API.GET_ALL);
  return res.data.length;
};

// Total de transferencias del día
export const fetchTodayTransfers = async () => {
  const today = new Date().toISOString().split('T')[0]; // "2025-06-02"
  const res = await axios.get(TRANSFER_API.GET_BY_DATE_RANGE, {
    params: {
      from: today,
      to: today
    }
  });
  return res.data.length;
};


// Últimas 5 transferencias (últimos 3 días)
export const fetchRecentTransactions = async () => {
  const today = new Date();
  const from = new Date(today.getTime() - 3 * 86400000).toISOString().split('T')[0];
  const to = today.toISOString().split('T')[0];

  const res = await axios.get(TRANSFER_API.GET_BY_DATE_RANGE, {
    params: {
      from,
      to
    }
  });

  return res.data.slice(0, 5);
};
export const fetchAllUsers = async () => {
  const res = await fetch('http://localhost:8080/api/users'); // ajusta si usas otra ruta
  return await res.json();
};

// Últimas alertas de fraude
export const fetchRecentAlerts = async () => {
  const res = await axios.get(FRAUD_API.GET_ALL);
  return res.data.slice(0, 5);
};

// Última actividad simulada desde logs
export const fetchUserActivities = async () => {
  const res = await axios.get(LOG_API.GET_ALL);
  return res.data.slice(0, 5);
};

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";

export const USER_API = {
  CREATE: `${API_BASE}/api/users`,
  GET_BY_ID: (id) => `${API_BASE}/api/users/${id}`,
  GET_BY_EMAIL: (email) => `${API_BASE}/api/users/email/${email}`,
  GET_BY_DNI: (dni) => `${API_BASE}/api/users/dni/${dni}`,
  GET_ALL: `${API_BASE}/api/users`,
  UPDATE: (id) => `${API_BASE}/api/users/${id}`,
  DELETE: (id) => `${API_BASE}/api/users/${id}`,
  CREATE_CREDENTIAL: `${API_BASE}/api/credentials`,
  GET_CREDENTIAL_BY_USER: (id) => `${API_BASE}/api/credentials/user/${id}`,
};

export const ADMIN_API = {
  LOGIN: `${API_BASE}/api/employee-credentials/login`,
};

export const TRANSFER_API = {
  // TRANSFERS
  CREATE: `${API_BASE}/api/transfers`,
  GET_BY_ID: (id) => `${API_BASE}/api/transfers/${id}`,
  GET_BY_SOURCE: (accountId) => `${API_BASE}/api/transfers/source/${accountId}`,
  GET_BY_DESTINATION: (accountId) => `${API_BASE}/api/transfers/destination/${accountId}`,
  GET_BY_DATE_RANGE: `${API_BASE}/api/transfers/range`,
  UPDATE_STATUS: (id, statusId) => `${API_BASE}/api/transfers/${id}/status/${statusId}`,

  // FEES
  GET_BY_TRANSACTION: (transactionId) => `${API_BASE}/api/fees/transaction/${transactionId}`,
  GET_BY_RANGE: `${API_BASE}/api/fees/range`,
  GET_TOTAL: `${API_BASE}/api/fees/total`,

  // LIMITS
  CREATE_LIMIT: `${API_BASE}/api/limits`,
  GET_LIMIT: (accountId) => `${API_BASE}/api/limits/${accountId}`,
  UPDATE_LIMIT: (accountId) => `${API_BASE}/api/limits/${accountId}`,
  DELETE_LIMIT: (accountId) => `${API_BASE}/api/limits/${accountId}`,
  GET_AVAILABLE_LIMIT: (accountId) => `${API_BASE}/api/limits/${accountId}/available`,
  GET_LIMITS_BY_RANGE: `${API_BASE}/api/limits/range`,

  // STATUSES
  GET_STATUSES: `${API_BASE}/api/statuses`,
};


export const PAYMENT_API = {
  CREATE: `${API_BASE}/api/payments`,
  GET_BY_ID: (id) => `${API_BASE}/api/payments/${id}`,
  GET_BY_ACCOUNT: (accountId) => `${API_BASE}/api/payments/account/${accountId}`,
  GET_ALL: `${API_BASE}/api/payments`,
};


export const LOG_API = {
  CREATE: `${API_BASE}/api/logs`,
  GET_BY_ID: (id) => `${API_BASE}/api/logs/${id}`,
  GET_BY_USER: (userId) => `${API_BASE}/api/logs/user/${userId}`,
  GET_ALL: `${API_BASE}/api/logs`,
};


export const LOAN_API = {
  CREATE: `${API_BASE}/api/loans`,
  GET_BY_ID: (id) => `${API_BASE}/api/loans/${id}`,
  GET_BY_USER: (userId) => `${API_BASE}/api/loans/user/${userId}`,
  GET_ALL: `${API_BASE}/api/loans`,
  APPROVE: (id, approvedAmount) => `${API_BASE}/api/loans/${id}/approve?approvedAmount=${approvedAmount}`,
  MAKE_PAYMENT: (loanId, amount) => `${API_BASE}/api/loan-payments/${loanId}?amount=${amount}`,
  GET_PAYMENTS: (loanId) => `${API_BASE}/api/loan-payments/${loanId}`,
  GET_LOAN_STATUSES: `${API_BASE}/api/loan-statuses`,
};


export const FRAUD_API = {
  CREATE_ALERT: `${API_BASE}/api/fraud-alerts`,
  GET_BY_ID: (id) => `${API_BASE}/api/fraud-alerts/${id}`,
  GET_BY_USER: (userId) => `${API_BASE}/api/fraud-alerts/user/${userId}`,
  GET_ALL: `${API_BASE}/api/fraud-alerts`,
  CONFIRM_ALERT: (id) => `${API_BASE}/api/fraud-alerts/${id}/confirm`,
  GET_ALERT_TYPES: `${API_BASE}/api/alert-types`,
};


export const EMPLOYEE_API = {
  CREATE: `${API_BASE}/api/employees`,
  GET_BY_ID: (id) => `${API_BASE}/api/employees/${id}`,
  GET_ALL: `${API_BASE}/api/employees`,
  UPDATE: (id) => `${API_BASE}/api/employees/${id}`,
  DELETE: (id) => `${API_BASE}/api/employees/${id}`,
  GET_CREDENTIALS: (employeeId) => `${API_BASE}/api/employee-credentials/employee/${employeeId}`,
};

export const CARD_API = {
  CREATE: `${API_BASE}/api/cards`,
  GET_BY_ID: (id) => `${API_BASE}/api/cards/${id}`,
  GET_BY_NUMBER: (cardNumber) => `${API_BASE}/api/cards/number/${cardNumber}`,
  GET_BY_USER: (userId) => `${API_BASE}/api/cards/user/${userId}`,
  GET_ALL: `${API_BASE}/api/cards`,
  CREATE_MOVEMENT: `${API_BASE}/api/movements`,
  GET_BY_CARD: (id) => `${API_BASE}/api/movements/card/${id}`,
  GET_STATUSES: `${API_BASE}/api/card-statuses`,
  GET_TYPES: `${API_BASE}/api/card-types`,
};



export const ACCOUNT_API = {
  CREATE: `${API_BASE}/api/accounts`,
  GET_BY_ID: (id) => `${API_BASE}/api/accounts/${id}`,
  GET_BY_NUMBER: (accountNumber) => `${API_BASE}/api/accounts/number/${accountNumber}`,
  GET_BY_USER: (userId) => `${API_BASE}/api/accounts/user/${userId}`,
  GET_ALL: `${API_BASE}/api/accounts`,
  GET_STATUSES: `${API_BASE}/api/account-statuses`,
  GET_TYPES: `${API_BASE}/api/account-types`,
};


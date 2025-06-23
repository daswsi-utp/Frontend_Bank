import axios from "axios";
import Cookies from "js-cookie";

const BASE_URL = "http://localhost:8080"; // Asegúrate que es tu API Gateway
const LOGIN_URL = `${BASE_URL}/api/credentials/login`;

export const login = async (email, password) => {
  const res = await axios.post(LOGIN_URL, { email, password });

  const user = res.data;

  Cookies.set("user", JSON.stringify(user), { path: "/", expires: 1 });

  return user;
};

export const logout = () => {
  Cookies.remove("user");
};

export const getCurrentUser = () => {
  try {
    const user = Cookies.get("user");
    return user ? JSON.parse(user) : null;
  } catch {
    return null;
  }
};

import axios from "axios";
import Cookies from "js-cookie";
import { ADMIN_API } from "./api";

export const loginAdmin = async (email, password) => {
  const res = await axios.post(ADMIN_API.LOGIN, { email, password });

  const { id, nombre, apellido, email: correo, dni, rol } = res.data;

  const user = { id, nombre, apellido, correo, dni, rol };

  Cookies.set("adminUser", JSON.stringify(user), { path: "/", expires: 1 });

  return user;
};

export const logoutAdmin = () => {
  Cookies.remove("adminUser");
};

export const getCurrentAdmin = () => {
  try {
    const user = Cookies.get("adminUser");
    return user ? JSON.parse(user) : null;
  } catch {
    return null;
  }
};

import { api } from "../services/api";
import CryptoJS from "crypto-js";

export const getUsers = async () => {
  const response = await api.get("api/users");
  return response.data;
};
export const getUserProfile = async () => {
  const response = await api.get("api/getUserProfile");
  return response.data;
};

export const getProducts = async () => {
  const response = await api.get("api/products");
  return response.data;
};

export const login = async (email: string, password: string) => {
  const encryptedEmail = CryptoJS.AES.encrypt(
    email,
    import.meta.env.VITE_REACT_CRYPTO_SECRET
  ).toString();
  const encryptedPassword = CryptoJS.AES.encrypt(
    password,
    import.meta.env.VITE_REACT_CRYPTO_SECRET
  ).toString();

  const response = await api.post("api/login", {
    email: encryptedEmail,
    password: encryptedPassword,
  });
  return response.data;
};

export const handleCreateUser = async (
  name: string,
  email: string,
  password: string
) => {
  const response = await api.post("api/createNewUser", {
    name,
    email,
    password,
  });
  return response.data;
};

import axios from "axios";
import { toast } from "react-toastify";

import { config } from "../config";

export const baseApi = axios.create({
  baseURL: config.SERVER_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const authenticatedApi = (token: string): any => {
  const instance = axios.create({
    baseURL: config.SERVER_URL,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  instance.interceptors.response.use(
    (res) => {
      return res;
    },
    async (err) => {
      if (err?.response?.status === 401) {
        if (typeof window !== undefined) {
          toast.error("You are not authenticated, please login");
          localStorage.clear();
          window.location.replace("/login");

          return;
        }
      }

      return Promise.reject(err);
    }
  );

  return instance;
};

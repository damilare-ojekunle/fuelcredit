import { baseApi } from "../api";

export const loginFn = async ({ credentials }) => {
  const { data } = await baseApi.post("/login", credentials);
  return data;
};
export const registerFn = async ({ credentials }) => {
  const { data } = await baseApi.post("/register", credentials);
  return data;
};

import { api } from "../../../services/api";
import type { TUser } from "../../../types/auth";

type LoginRequest = {
  email: string;
  password: string;
};

type RegisterRequest = {
  name: string;
  email: string;
  password: string;
};

type LoginResponse = {
  token: string;
  user: TUser;
};

export const authService = {
  login: async (data: LoginRequest) => {
    const response = await api.post<LoginResponse>("/login", data);
    return response.data;
  },

  register: async (data: RegisterRequest) => {
    const response = await api.post("/register", data);
    return response.data;
  },

  me: async () => {
    const response = await api.get<TUser>("/me");
    return response.data;
  },
};

import type { AxiosResponse } from "axios";
import API from "./api";

export const authService = {
  login: (email: string, password: string): Promise<AxiosResponse> =>
    API.post("/auth/login", { email, password }),

  verifyOtp: (email: string, otp: string): Promise<AxiosResponse> =>
    API.post("/auth/verify-user", { email, otp }),

  register: (data: any): Promise<AxiosResponse> =>
    API.post("/auth/register", data),
};

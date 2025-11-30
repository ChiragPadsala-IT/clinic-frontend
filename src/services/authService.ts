import API from "./api";

export const authService = {
  login: (email: string, password: string) =>
    API.post("/auth/login", { email, password })
      .then((r) => r.data)
      .catch((err) => console.log(err)),
  register: (name: string, email: string, password: string) =>
    API.post("/auth/register", { name, email, password }).then((r) => r.data),
};

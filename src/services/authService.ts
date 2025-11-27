import API from "./api";

export const authService = {
  login: (email: string, password: string) => API.post("/auth/login", { email, password }).then(r=>r.data),
  register: (name:string,email:string,password:string) => API.post("/auth/register", { name, email, password }).then(r=>r.data),
};

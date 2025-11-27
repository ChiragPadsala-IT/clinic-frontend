import API from "./api";
import type { Patient } from "../types";

export const patientService = {
  list: () => API.get("/patients").then((r) => r.data),

  create: (payload: Partial<Patient>) =>
    API.post("/patients", payload).then((r) => r.data),

  get: (id: number) => API.get(`/patients/${id}`).then((r) => r.data),

  update: (id: number, payload: Partial<Patient>) =>
    API.put(`/patients/${id}`, payload).then((r) => r.data),

  remove: (id: number) => API.delete(`/patients/${id}`).then((r) => r.data),
};

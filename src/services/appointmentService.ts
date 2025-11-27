import API from "./api";
import type { Appointment } from "../types";

export const appointmentService = {
  list: () => API.get("/appointments").then((r) => r.data),

  create: (payload: Partial<Appointment>) =>
    API.post("/appointments", payload).then((r) => r.data),

  get: (id: number) => API.get(`/appointments/${id}`).then((r) => r.data),

  update: (id: number, payload: Partial<Appointment>) =>
    API.put(`/appointments/${id}`, payload).then((r) => r.data),

  remove: (id: number) => API.delete(`/appointments/${id}`).then((r) => r.data),
};

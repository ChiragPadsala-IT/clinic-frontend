import API from "./api";
import type { Therapist } from "../types";

export const therapistService = {
  list: () => API.get("/therapists").then((r) => r.data),

  create: (payload: Partial<Therapist>) =>
    API.post("/therapists", payload).then((r) => r.data),

  get: (id: number) => API.get(`/therapists/${id}`).then((r) => r.data),

  update: (id: number, payload: Partial<Therapist>) =>
    API.put(`/therapists/${id}`, payload).then((r) => r.data),

  remove: (id: number) => API.delete(`/therapists/${id}`).then((r) => r.data),
};

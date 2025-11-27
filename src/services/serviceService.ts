// import API from "./api";
// import type { Service } from "../types";

// export const serviceService = {
//   list: () => API.get("/services").then((r) => r.data),
//   create: (payload: Partial<Service>, file?: File) => {
//     if (file) {
//       const fd = new FormData();
//       fd.append("image", file);
//       Object.entries(payload).forEach(([k, v]) => {
//         if (v !== undefined) fd.append(k, String(v));
//       });
//       return API.post("/services", fd, {
//         headers: { "Content-Type": "multipart/form-data" },
//       }).then((r) => r.data);
//     } else {
//       return API.post("/services", payload).then((r) => r.data);
//     }
//   },
// };

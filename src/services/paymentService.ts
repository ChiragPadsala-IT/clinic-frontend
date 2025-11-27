import API from "./api";

export const paymentService = {
  createOrder: (appointmentId: number, amount: string) =>
    API.post("/payments/create-order", { appointmentId, amount }).then(
      (r) => r.data
    ),

  captureOrder: (orderId: string, appointmentId: number, amount: string) =>
    API.post("/payments/capture-order", {
      orderId,
      appointmentId,
      amount,
    }).then((r) => r.data),
};

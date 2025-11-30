import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import PatientsPage from "./pages/patients/PatientsPage";
import TherapistsPage from "./pages/therapists/TherapistsPage";
import ServicesPage from "./pages/services/ServicesPage";
import AppointmentsPage from "./pages/appointments/AppointmentsPage";
import LoginPage from "./pages/auth/LoginPage";
import PaymentPage from "./pages/payments/PaymentSccessPage";
import Navbar from "./components/layout/Navbar";
// import useAuthStore from "./store/authStore";
import type { JSX } from "react/jsx-runtime";
import Home from "./pages/Home";

function Protected({ children }: { children: JSX.Element }) {
  // const { token } = useAuthStore();
  const token = null;
  if (!token) return <Navigate to="/login" replace />;
  return children;
}

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      {/* <main className="max-w-6xl mx-auto"> */}
      <main className="max-w-full mx-auto relative">
        <Routes>
          {/* <Route path="/" element={<Navigate to="/patients" replace />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/patients"
            element={
              // <Protected>
              <PatientsPage />
              // </Protected>
            }
          />
          <Route
            path="/therapists"
            element={
              <Protected>
                <TherapistsPage />
              </Protected>
            }
          />
          <Route
            path="/services"
            element={
              <Protected>
                <ServicesPage />
              </Protected>
            }
          />
          <Route
            path="/appointments"
            element={
              <Protected>
                <AppointmentsPage />
              </Protected>
            }
          />
          <Route
            path="/payments"
            element={
              <Protected>
                <PaymentPage />
              </Protected>
            }
          />
          {/* <Route path="/patients" element={<PatientsPage/>} />
          <Route path="/therapists" element={<TherapistsPage/>} />
          <Route path="/services" element={<ServicesPage/>} />
          <Route path="/appointments" element={<AppointmentsPage/>} />
          <Route path="/payments" element={<PaymentPage/>} /> */}
        </Routes>
      </main>
    </div>
  );
}

import React from "react";
import {
  Routes,
  Route,
  Navigate,
  useLocation,
  type Location,
} from "react-router-dom";
import PatientsPage from "./pages/patients/PatientsPage";
import TherapistsPage from "./pages/therapists/TherapistsPage";
import ServicesPage from "./pages/services/ServicesPage";
import AppointmentsPage from "./pages/appointments/AppointmentsPage";
import LoginPage from "./pages/auth/LoginPage";
import PaymentPage from "./pages/payments/PaymentSccessPage";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import Footer from "./components/layout/Footer";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import appRoutes from "./router/app.router";

export default function App() {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {location.pathname !== "/login" &&
        location.pathname !== "/signup" &&
        location.pathname !== "/register" && <Navbar />}
      {/* <main className="max-w-6xl mx-auto"> */}
      <main className="flex-grow relative">
        <Routes>
          {appRoutes.map((route, index) => (
            <Route path={route.path} element={route.element} />
          ))}
        </Routes>
      </main>
      {location.pathname !== "/login" &&
        location.pathname !== "/signup" &&
        location.pathname !== "/register" && <Footer />}
    </div>
  );
}

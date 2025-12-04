import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import Home from "../pages/Home";
import TherapistsPage from "../pages/therapists/TherapistsPage";
import { Navigate } from "react-router-dom";
import useAuthStore from "../store/authStore";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";

// function Protected({ children }: { children: JSX.Element }) {
//   const { token } = useAuthStore();
//   const token = null;
//   if (!token) return <Navigate to="/login" replace />;
//   return children;
// }

const appRoutes = [
  { path: "/login", element: <LoginPage /> },
  { path: "/register", element: <RegisterPage /> },
  { path: "/", element: <Home /> },
  { path: "/about-us", element: <AboutUs /> },
  { path: "/contact-us", element: <ContactUs /> },
  { path: "/doctors", element: <TherapistsPage /> },
];

export default appRoutes;

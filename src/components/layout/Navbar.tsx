import { useState } from "react";
import { easeInOut, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // DEMO ONLY — replace with Zustand auth state later
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <nav className="w-full bg-white shadow-md  top-0 left-0 z-50 relative">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo + Clinic Name */}
          <div className="flex items-center gap-3 cursor-pointer">
            <img
              src="/logo.png"
              alt="Clinic Logo"
              className="w-10 h-10 object-contain"
            />
            <h1 className="text-2xl font-bold text-primary">
              PhysioCare Clinic
            </h1>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-10 text-gray-700 font-medium">
            <li
              className="hover:text-primary transition cursor-pointer"
              onClick={() => navigate("/")}
            >
              Home
            </li>
            <li
              className="hover:text-primary transition cursor-pointer"
              onClick={() => navigate("/about-us")}
            >
              About Us
            </li>
            <li
              className="hover:text-primary transition cursor-pointer"
              onClick={() => navigate("/contact-us")}
            >
              Contact
            </li>

            {/* If User Is Logged In → Show Avatar */}
            {isLoggedIn ? (
              <div className="flex items-center gap-3 cursor-pointer">
                <img
                  src="https://placehold.co/40x40"
                  alt="Avatar"
                  className="w-10 h-10 rounded-full border shadow-sm"
                />
              </div>
            ) : (
              <div className="flex items-center gap-5">
                <button className="px-4 py-1.5 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition">
                  Login
                </button>
                <button className="px-4 py-1.5 rounded-full bg-primary text-white hover:bg-primary-dark transition">
                  Sign Up
                </button>
              </div>
            )}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col gap-1.5"
          >
            <span className="w-6 h-0.5 bg-gray-700"></span>
            <span className="w-6 h-0.5 bg-gray-700"></span>
            <span className="w-6 h-0.5 bg-gray-700"></span>
          </button>
        </div>
      </nav>
      {/* Mobile Dropdown */}
      {open && (
        <div className="flex justify-end mr-2">
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: easeInOut }}
            className="md:hidden  w-[12rem] m-auto bg-white px-6 py-4 space-y-4 shadow-inner absolute z-100 top-20 "
          >
            <p className="py-2 hover:text-primary">Home</p>
            <p className="py-2 hover:text-primary">About Us</p>
            <p className="py-2 hover:text-primary">Contact</p>

            {/* Mobile: Auth Options */}
            {isLoggedIn ? (
              <div className="flex items-center gap-3 pt-3">
                <img
                  src="https://placehold.co/40x40"
                  alt="Avatar"
                  className="w-12 h-12 rounded-full border shadow-sm"
                />
              </div>
            ) : (
              <div className="flex flex-col gap-3 pt-3">
                <button className="w-full px-4 py-2 border border-primary rounded-lg text-primary hover:bg-primary hover:text-white transition">
                  Login
                </button>
                <button className="w-full px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary-dark transition">
                  Sign Up
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </>
  );
}

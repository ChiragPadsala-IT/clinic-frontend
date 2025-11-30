import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authService } from "../../services/authService";
import useAuthStore from "../../store/authStore";
// import Button from "../../components/Button";
import { LoginImage } from "../../assets/images";
import { color } from "../../style";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setAuth } = useAuthStore();
  const nav = useNavigate();

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      console.log("email : " + email);
      console.log("password : " + password);
      const res = await authService.login(email, password);
      const token = res.token;
      const staff = res.staff;
      setAuth(token, staff);
      nav("/patients");
    } catch (err: any) {
      alert(err?.response?.data?.message || err.message);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen font-sans">
      {/* LEFT SIDE FORM */}
      <div className="flex items-center justify-center p-10 bg-white">
        <div className="w-full max-w-md">
          <form onSubmit={submit}>
            {/* Logo */}
            <h1 className="text-3xl font-semibold mb-2">Welcome back</h1>
            <p className="text-gray-600 mb-8">Please enter your details</p>
            {/* Email */}
            <div className="mb-5">
              <label className="block text-sm font-medium mb-1">
                Email address
              </label>
              <input
                className="w-full px-4 py-2.5 rounded-lg border border-border bg-white focus:border-primary outline-none transition"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {/* Password */}
            <div className="mb-3">
              <label className="block text-sm font-medium mb-1">Password</label>
              <input
                className="w-full px-4 py-2.5 rounded-lg border border-border bg-white focus:border-primary outline-none transition"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {/* Remember + Forgot */}
            <div className="flex justify-between items-center mb-6 text-sm">
              <a
                href="#"
                className="hover:underline text-blue-600"
                style={{ color: color.primaryColoe }}
              >
                Forgot password
              </a>
            </div>
            {/* Sign In */}
            <button
              type="submit"
              className="mt-4 w-full py-2.5 border border-border cursor-pointer rounded-lg bg-white hover:bg-gray-light transition-all duration-110 active:scale-95 hover:scale-102"
              style={{ background: color.primaryColoe, color: "white" }}
            >
              <div className="flex justify-center items-center gap-2">
                Login
              </div>
            </button>
            {/* Sign Up Link */}
            <p className="mt-6 text-center text-sm">
              Don't have an account?
              <a
                href="/signup"
                className="text-primary font-medium hover:underline"
              >
                {" "}
                Sign up
              </a>
            </p>
          </form>
        </div>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="hidden md:flex items-center justify-center bg-primary-light h-182">
        <img src={LoginImage} alt="Illustration" className="w-full h-full" />
      </div>
    </div>
  );

  // return (
  //   <div className="card">
  //     <h2>Login</h2>
  //     <form onSubmit={submit}>
  //       <label>
  //         Email
  //         <input value={email} onChange={(e) => setEmail(e.target.value)} />
  //       </label>
  //       <label>
  //         Password
  //         <input
  //           type="password"
  //           value={password}
  //           onChange={(e) => setPassword(e.target.value)}
  //         />
  //       </label>
  //       <Button>Login</Button>
  //     </form>
  //   </div>
  // );
};

export default LoginPage;

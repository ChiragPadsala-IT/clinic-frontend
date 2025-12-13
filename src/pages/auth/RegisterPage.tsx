import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authService } from "../../services/authService";
import useAuthStore from "../../store/authStore";
// import Button from "../../components/Button";
import { LoginImage } from "../../assets/images";
import * as Yup from "yup";
import { set, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import type { Axios, AxiosError, AxiosResponse } from "axios";
import OtpDialog from "../../components/OtpDialog ";

interface FormValues {
  email: string;
  password: string;
  confirmPassword: string;
  role: string;
}

const valiDationSchema = Yup.object().shape({
  email: Yup.string().required("Email is required").email("Email is invalid"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 8 characters")
    .max(40, "Password must not exceed 40 characters"),
  confirmPassword: Yup.string()
    .required("Confirm password is required")
    .oneOf([Yup.ref("password")], "Confirm password does not match"),
  role: Yup.string().default("patient").required("Role is required"),
});

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<FormValues>({ resolver: yupResolver(valiDationSchema) });

  const { setAuth, userRole } = useAuthStore();
  const navigate = useNavigate();
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [otpErrMessage, setotpErrMessage] = useState("");

  const onFormSubmit = async (data: FormValues) => {
    try {
      const { confirmPassword, ...restData } = data;

      const res: AxiosResponse = await authService.register(restData);

      if (res.status === 200) {
        setIsOtpSent(true);
        navigate("/login");
      }
    } catch (err: AxiosError | any) {
      alert(err.response.data.message);
    }
  };

  const verifyOtpHandler = async (otp: string) => {
    try {
      const res: AxiosResponse = await authService.verifyOtp(
        watch("email"),
        otp
      );
      if (res.status === 200) {
        setIsOtpSent(false);
      }
    } catch (err: AxiosError | any) {
      console.log(err.response.data.message);
      setotpErrMessage(err.response.data.message);
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen font-sans">
        {/* LEFT SIDE FORM (scrollable) */}
        <div className="flex items-center justify-center p-10 bg-white overflow-y-auto h-screen">
          <div className="w-full max-w-md">
            <form onSubmit={handleSubmit(onFormSubmit)}>
              {/* Logo */}
              <h1 className="text-3xl font-semibold text-primary text-center my-10">
                Register
              </h1>
              <p className="text-gray-600 mb-8">Please enter your details</p>

              {/* Email */}
              <div className="mb-5">
                <label className="block text-sm font-medium mb-1">
                  Email address
                </label>
                <input
                  className="w-full px-4 py-2.5 rounded-lg border border-border bg-white focus:border-primary outline-none transition"
                  type="email"
                  {...register("email")}
                />
                <span className="text-red-600">{errors.email?.message}</span>
              </div>
              {/* Password */}
              <div className="mb-3">
                <label className="block text-sm font-medium mb-1">
                  Password
                </label>
                <input
                  className="w-full px-4 py-2.5 rounded-lg border border-border bg-white focus:border-primary outline-none transition"
                  type="password"
                  {...register("password")}
                />
                <span className="text-red-600">{errors.password?.message}</span>
              </div>

              {/* Confirm Password */}
              <div className="mb-3">
                <label className="block text-sm font-medium mb-1">
                  Confirm Password
                </label>
                <input
                  className="w-full px-4 py-2.5 rounded-lg border border-border bg-white focus:border-primary outline-none transition"
                  type="password"
                  {...register("confirmPassword")}
                />
                <span className="text-red-600">
                  {errors.confirmPassword?.message}
                </span>
              </div>

              {/* Role Selector */}
              {(userRole === "admin" || userRole === "staff") && (
                <div className="mb-3">
                  <label className="block text-sm font-medium mb-2">
                    Select Role
                  </label>

                  <div className="flex items-center gap-6">
                    {/* Staff */}
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        className="w-4 h-4 text-primary border-gray-300 focus:ring-primary"
                        {...register("role")}
                      />
                      <span className="text-sm">Staff</span>
                    </label>

                    {/* Patient */}
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        className="w-4 h-4 text-primary border-gray-300 focus:ring-primary"
                        {...register("role")}
                      />
                      <span className="text-sm">Patient</span>
                    </label>
                  </div>
                  <span className="text-red-600">{errors.role?.message}</span>
                </div>
              )}

              {/* Register */}
              <button
                type="submit"
                className="mt-4 w-full py-3 rounded-xl text-white font-semibold bg-primary
             shadow-md hover:shadow-lg
             transition-all duration-300 hover:scale-[1.02] active:scale-[0.96]"
                // onClick={handleSubmit(onFormSubmit)}
              >
                {/* <div className="flex justify-center items-center gap-2"> */}
                Register
                {/* </div> */}
              </button>

              {/* Sign Up Link */}
              <p className="mt-6 text-center text-sm">
                Don't have an account?
                <span
                  className="text-primary font-medium hover:underline"
                  onClick={() => navigate("/login")}
                >
                  {" "}
                  Login
                </span>
              </p>
            </form>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE (fixed, not scrollable) */}
        <div className="hidden md:flex items-center justify-center bg-primary-light h-screen">
          <img
            src={LoginImage}
            alt="Illustration"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      {isOtpSent && (
        <OtpDialog
          onClose={() => {}}
          onResend={() => {}}
          onSubmit={verifyOtpHandler}
          errMessage={otpErrMessage}
        />
      )}
    </>
  );
};

export default RegisterPage;

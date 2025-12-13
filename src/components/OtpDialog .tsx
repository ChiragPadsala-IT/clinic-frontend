import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { authService } from "../services/authService";

type OtpDialogProps = {
  onClose: () => void;
  onSubmit: (otp: string) => void;
  onResend: () => void;
  errMessage: string;
};

const OtpDialog = ({
  onClose,
  onSubmit,
  onResend,
  errMessage,
}: OtpDialogProps) => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(30);
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

  // TIMER COUNTDOWN
  useEffect(() => {
    setTimer(30); // reset when dialog opens

    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleChange = (value: string, index: number) => {
    if (!/^[0-9]?$/.test(value)) return;

    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: any, index: number) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const submitOtp = () => {
    const finalOtp = otp.join("");
    if (finalOtp.length === 6) {
      onSubmit(finalOtp);
    } else {
      alert("Please enter all 6 digits.");
    }
  };

  const handleResend = () => {
    if (timer === 0) {
      onResend(); // call parent function
      setTimer(30); // restart timer
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999]">
      <motion.div
        initial={{ scale: 0.6, opacity: 0, y: -20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.6, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="bg-white p-8 rounded-2xl shadow-xl w-96"
      >
        <h2 className="text-2xl font-semibold text-center mb-4">Enter OTP</h2>

        {errMessage && <p className="mb-4 text-red-600">{errMessage}</p>}

        <div className="flex justify-between mb-4">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => {
                inputRefs.current[index] = el;
              }}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="w-10 h-12 text-center border border-gray-300 rounded-lg text-xl
              focus:border-primary outline-none transition"
            />
          ))}
        </div>

        <div></div>

        {/* Resend Timer */}
        <div className="text-center mb-4 text-sm">
          {timer > 0 ? (
            <span className="text-gray-500">
              Resend OTP in <span className="font-semibold">{timer}s</span>
            </span>
          ) : (
            <button
              onClick={handleResend}
              className="text-primary font-semibold underline"
            >
              Resend OTP
            </button>
          )}
        </div>

        <button
          onClick={submitOtp}
          className="w-full py-3 bg-primary text-white font-semibold rounded-lg
          hover:bg-primary/90 transition mb-3"
        >
          Verify OTP
        </button>

        <button
          onClick={onClose}
          className="w-full py-2 border border-gray-400 rounded-lg text-gray-600
          hover:bg-gray-100 transition"
        >
          Cancel
        </button>
      </motion.div>
    </div>
  );
};

export default OtpDialog;

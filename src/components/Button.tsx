import type React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

const Button = ({ children, className = "", ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={`w-full py-2.5 rounded-lg font-medium text-white bg-primary hover:bg-primary-light active:scale-95 transition-all shadow-sm ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;

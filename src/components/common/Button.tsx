import { ReactNode } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  fullWidth?: boolean;
  className?: string;
}

const Button = ({
  children,
  variant = "primary",
  size = "md",
  onClick,
  type = "button",
  disabled = false,
  fullWidth = false,
  className = "",
}: ButtonProps) => {
  const baseStyles =
    "rounded font-medium transition-all duration-200 flex items-center justify-center relative overflow-hidden";

  const variantStyles = {
    primary: "text-white",
    secondary:
      "bg-accent-secondary text-coffee-dark hover:bg-accent-secondary/90",
    outline:
      "bg-transparent border-2 border-accent-primary text-accent-primary hover:bg-accent-primary/10",
  };

  const sizeStyles = {
    sm: "text-sm py-1 px-3",
    md: "py-2 px-4",
    lg: "text-lg py-3 px-6",
  };

  const widthStyle = fullWidth ? "w-full" : "";
  const disabledStyle = disabled
    ? "opacity-50 cursor-not-allowed"
    : "cursor-pointer";

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        baseStyles,
        variant !== "primary" && variantStyles[variant],
        sizeStyles[size],
        widthStyle,
        disabledStyle,
        className
      )}
      whileTap={{ scale: disabled ? 1 : 0.97 }}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
    >
      {variant === "primary" && (
        <motion.div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "linear-gradient(270deg, #c58f65, #8c4f2c, #c58f65)",
            backgroundSize: "400%",
          }}
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      )}

      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};

export default Button;

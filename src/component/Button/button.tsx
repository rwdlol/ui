import type { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./button.module.scss";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonProps) {
  const variantClass =
    variant === "primary" ? styles.btnPrimary : styles.btnSecondary;
  const sizeClass =
    styles[
      `btn${size.charAt(0).toUpperCase() + size.slice(1)}` as keyof typeof styles
    ];

  return (
    <button
      className={`${styles.btn} ${variantClass} ${sizeClass} ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
}

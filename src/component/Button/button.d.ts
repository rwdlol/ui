import type { ButtonHTMLAttributes, ReactNode } from "react";
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: "primary" | "secondary";
    size?: "sm" | "md" | "lg";
}
export declare function Button({ children, variant, size, className, ...props }: ButtonProps): import("react").JSX.Element;

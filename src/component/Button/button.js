import { jsx as _jsx } from "react/jsx-runtime";
import styles from "./button.module.scss";
export function Button({ children, variant = "primary", size = "md", className = "", ...props }) {
    const variantClass = variant === "primary" ? styles.btnPrimary : styles.btnSecondary;
    const sizeClass = styles[`btn${size.charAt(0).toUpperCase() + size.slice(1)}`];
    return (_jsx("button", { className: `${styles.btn} ${variantClass} ${sizeClass} ${className}`.trim(), ...props, children: children }));
}

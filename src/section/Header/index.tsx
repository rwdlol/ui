import type { ReactNode } from "react";
import "./index.scss";

export type NavItem = {
  label: string;
  href: string;
};

export type HeaderProps = {
  brand?: ReactNode;
  links?: NavItem[];
  actions?: ReactNode;
  className?: string;
};

export function Header({
  brand = "Brand",
  links = [],
  actions,
  className = "",
}: HeaderProps) {
  return (
    <header className={`ui-header ${className}`.trim()}>
      <div className="ui-header__brand">{brand}</div>

      {links.length > 0 && (
        <nav className="ui-header__nav" aria-label="Main Navigation">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      )}

      {actions && <div className="ui-header__actions">{actions}</div>}
    </header>
  );
}

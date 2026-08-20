import type { ReactNode } from "react";
import "./index.scss";

export type NotFoundProps = {
  statusCode?: string | number;
  title?: string;
  description?: string;
  action?: ReactNode;
  className?: string;
};

export function NotFound({
  statusCode = "404",
  title = "Page Not Found",
  description = "Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.",
  action,
  className = "",
}: NotFoundProps) {
  return (
    <main className={`ui-not-found ${className}`.trim()}>
      <span className="ui-not-found__code">{statusCode}</span>
      <h1 className="ui-not-found__title">{title}</h1>
      <p className="ui-not-found__description">{description}</p>
      {action && <div className="ui-not-found__actions">{action}</div>}
    </main>
  );
}

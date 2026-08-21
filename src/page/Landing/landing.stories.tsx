import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../../component/Button/button";

function LandingPageLayout() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#020617",
        color: "#f8fafc",
        fontFamily: "sans-serif",
      }}
    >
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1.5rem 3rem",
          borderBottom: "1px solid #1e293b",
        }}
      >
        <h2 style={{ margin: 0, fontSize: "1.25rem", fontWeight: 700 }}>
          @rwdlol/ui
        </h2>
        <nav style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
          <a
            href="#features"
            style={{ color: "#94a3b8", textDecoration: "none" }}
          >
            Features
          </a>
          <a
            href="#pricing"
            style={{ color: "#94a3b8", textDecoration: "none" }}
          >
            Pricing
          </a>
          <Button variant="secondary" size="sm">
            Log In
          </Button>
        </nav>
      </header>
      <section
        style={{
          textAlign: "center",
          padding: "6rem 2rem",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            fontSize: "3.5rem",
            fontWeight: 800,
            marginBottom: "1.5rem",
            lineHeight: 1.1,
          }}
        >
          Build Faster with Beautiful Modular UI
        </h1>
        <p
          style={{
            fontSize: "1.25rem",
            color: "#94a3b8",
            marginBottom: "2.5rem",
          }}
        >
          Engineered with modern React 19, scoped styles, and subpath
          optimizations.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
          <Button variant="primary" size="lg">
            Start Building
          </Button>
          <Button variant="secondary" size="lg">
            View Source
          </Button>
        </div>
      </section>
      <section
        style={{
          padding: "4rem 2rem",
          borderTop: "1px solid #1e293b",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "2rem",
          }}
        >
          <div
            style={{
              padding: "1.5rem",
              backgroundColor: "#0f172a",
              borderRadius: "8px",
              border: "1px solid #1e293b",
            }}
          >
            <h3>⚡ Lightning Fast</h3>
            <p style={{ color: "#94a3b8" }}>
              Bundled with Vite and tree-shaking support.
            </p>
          </div>
          <div
            style={{
              padding: "1.5rem",
              backgroundColor: "#0f172a",
              borderRadius: "8px",
              border: "1px solid #1e293b",
            }}
          >
            <h3>🔒 Strict Types</h3>
            <p style={{ color: "#94a3b8" }}>
              100% written in TypeScript with generated declarations.
            </p>
          </div>
          <div
            style={{
              padding: "1.5rem",
              backgroundColor: "#0f172a",
              borderRadius: "8px",
              border: "1px solid #1e293b",
            }}
          >
            <h3>🎨 Scoped SCSS</h3>
            <p style={{ color: "#94a3b8" }}>
              No collision styling across different app environments.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

const meta: Meta<typeof LandingPageLayout> = {
  title: "Pages/Landing Page",
  component: LandingPageLayout,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof LandingPageLayout>;

export const Default: Story = {
  parameters: {},
};

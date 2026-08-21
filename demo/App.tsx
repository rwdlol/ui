import "../src/styles/global.scss";
import { Link, Route, Routes } from "react-router-dom";
import { Button } from "../src/component";
import { Hero } from "../src/section";
import { useState } from "react";

function HomePage() {
  return (
    <div>
      <Hero title="Demo Home Page" />
      <p style={{ marginTop: "1rem", color: "#64748b" }}>
        Welcome to the local playground for testing components and sections.
      </p>
    </div>
  );
}

function ButtonsDemo() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Button Variants & Sizes</h2>
      <div
        style={{
          display: "flex",
          gap: "1rem",
          alignItems: "center",
          marginTop: "1rem",
        }}
      >
        <Button
          variant="primary"
          size="lg"
          onClick={() => setCount((c) => c + 1)}
        >
          Large Primary ({count})
        </Button>
        <Button variant="secondary" size="md" onClick={() => setCount(0)}>
          Medium Reset
        </Button>
        <Button variant="primary" size="sm" disabled>
          Small Disabled
        </Button>
      </div>
    </div>
  );
}

function SectionsDemo() {
  return (
    <div>
      <h2>Sections Showcase</h2>
      <Hero title="Custom Hero Section" />
    </div>
  );
}

export default function App() {
  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "0 auto",
      }}
    >
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid #e2e8f0",
          paddingBottom: "1rem",
          marginBottom: "2rem",
        }}
      >
        <h1 style={{ margin: 0, fontSize: "1.25rem" }}>
          @rwdlol/ui Playground
        </h1>
        <nav style={{ display: "flex", gap: "1rem" }}>
          <Link
            to="/"
            style={{
              color: "#2563eb",
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            Home
          </Link>
          <Link
            to="/buttons"
            style={{
              color: "#2563eb",
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            Buttons
          </Link>
          <Link
            to="/sections"
            style={{
              color: "#2563eb",
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            Sections
          </Link>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/buttons" element={<ButtonsDemo />} />
          <Route path="/sections" element={<SectionsDemo />} />
        </Routes>
      </main>
    </div>
  );
}

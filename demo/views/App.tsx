import { Button } from "../../src/component/Button";
import { Header } from "../../src/section/Header";
import { NotFound } from "../../src/page/NotFound";
import { HashRouter, Route, Routes } from "react-router";

export default function App() {
  return (
    <HashRouter>
      <main
        style={{
          fontFamily: "sans-serif",
          padding: "2rem",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
        }}
      >
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="*" element={<NotFoundView />} />
        </Routes>
      </main>
    </HashRouter>
  );
}

function HomeView() {
  return (
    <>
      <h1>@rwdlol/ui Live Demo</h1>
      <section>
        <h2>Buttons</h2>
        <div style={{ display: "flex", gap: "1rem" }}>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
      </section>
      <section>
        <h2>Hero Section</h2>
        <Header />
      </section>
    </>
  );
}

function NotFoundView() {
  return (
    <section>
      <h2>Not Found Page</h2>
      <NotFound />
    </section>
  );
}

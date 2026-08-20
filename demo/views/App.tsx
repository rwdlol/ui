// import { useState, useEffect } from "react";
import { HashRouter, Routes, Route } from "react-router";
import { Button } from "../../src/component/Button";
import { Header } from "../../src/section/Header";
import { NotFound } from "../../src/page/NotFound";

// export default function App() {
//   const [route, setRoute] = useState(window.location.hash || "#/");
//   useEffect(() => {
//     const handleHashChange = () => setRoute(window.location.hash || "#/");
//     window.addEventListener("hashchange", handleHashChange);
//     return () => window.removeEventListener("hashchange", handleHashChange);
//   }, []);
//   return (
//     <div style={{ fontFamily: "sans-serif", padding: "2rem" }}>
//       <h1>@rwdlol/ui Live Demo</h1>

//       {/* Route Switcher */}
//       {route === "#/" || route === "" ? <HomeView /> : <NotFoundView />}
//     </div>
//   );
// }

export default function App() {
  return (
    <HashRouter>
      <main
        style={{
          fontFamily: "sans-serif",
          padding: "2rem",
          display: "flex",
          flexDirection: "column",
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

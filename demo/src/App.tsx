import { Router, Link, Route, Switch } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import { Button } from "../../src/component/Button";
import { Header } from "../../src/section/Header";
import { NotFound } from "../../src/page/NotFound";

export default function App() {
  return (
    <Router hook={useHashLocation}>
      <main
        style={{
          fontFamily: "sans-serif",
          padding: "2rem",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
          <Link href="/">home</Link>
          <Link href="/users/1">profile</Link>
          <Link href="/404">404</Link>
        </div>
        <Switch>
          <Route path="/" children={<HomeView />} />
          <Route path="/users/:name">
            {(params) => <>Hello, {params.name}!</>}
          </Route>
          <Route path="*">{() => <NotFoundView />}</Route>
        </Switch>
      </main>
    </Router>
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

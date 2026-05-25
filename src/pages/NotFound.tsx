import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-mesh-light px-4 text-center dark:bg-mesh-dark">
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-mint">404</p>
        <h1 className="mt-3 font-display text-4xl font-extrabold">Page not found</h1>
        <Link className="focus-ring mt-6 inline-flex rounded-full bg-ink-950 px-6 py-3 font-semibold text-white dark:bg-mint dark:text-ink-950" to="/">
          Back to portfolio
        </Link>
      </div>
    </main>
  );
}

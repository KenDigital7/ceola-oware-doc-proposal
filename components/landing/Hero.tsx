import Link from "next/link";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="flex min-h-[70vh] flex-col justify-end"
    >
      <div className="mx-auto w-full max-w-doc px-6 pb-20 pt-24 sm:px-10 sm:pb-28">
        <p className="mb-6 text-xs uppercase tracking-widest text-foreground-subtle">
          Kenctures Inc &mdash; Legacy Documentary Service
        </p>
        <h1
          id="hero-heading"
          className="mb-6 font-serif text-5xl font-normal leading-tight tracking-tight text-foreground text-balance sm:text-6xl lg:text-7xl"
        >
          Intergenerational Knowledge.
          <br />
          <span className="text-accent">Preserved.</span>
        </h1>
        <p className="mb-10 max-w-measure text-lg leading-relaxed text-foreground-muted">
          Professional documentary filmmaking for the stories you{" "}
          <em>can&apos;t afford to lose.</em>
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="#work"
            className="inline-block border border-accent bg-accent px-7 py-3 font-sans text-sm uppercase tracking-widest text-background transition-opacity hover:opacity-80"
          >
            See My Work
          </Link>
        </div>
      </div>
    </section>
  );
}

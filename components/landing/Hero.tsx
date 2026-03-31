import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative flex min-h-[92vh] flex-col justify-end overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-family.jpg"
          alt="An elderly man sitting in his living room surrounded by family photographs"
          fill
          priority
          className="object-cover object-center opacity-40"
          sizes="100vw"
        />
        {/* Gradient overlay — darkens toward bottom */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(14,13,11,0.3) 0%, rgba(14,13,11,0.75) 55%, rgba(14,13,11,1) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-doc px-6 pb-20 pt-32 sm:px-10 sm:pb-28">
        <p className="mb-6 text-xs uppercase tracking-widest text-foreground-subtle">
          Kenctures Inc &mdash; Legacy Documentary Service
        </p>
        <h1
          id="hero-heading"
          className="mb-6 font-serif text-5xl font-normal leading-tight tracking-tight text-foreground text-balance sm:text-6xl lg:text-7xl"
        >
          One Camera.
          <br />
          One Day.
          <br />
          <span className="text-accent">Forever.</span>
        </h1>
        <p className="mb-10 max-w-measure text-lg leading-relaxed text-foreground-muted">
          Professional documentary filmmaking for the stories you{" "}
          <em>can&apos;t afford to lose.</em>
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="#contact"
            className="inline-block border border-accent bg-accent px-7 py-3 font-sans text-sm uppercase tracking-widest text-background transition-opacity hover:opacity-80"
          >
            Discuss Your Story
          </Link>
          <Link
            href="#work"
            className="inline-block border border-border px-7 py-3 font-sans text-sm uppercase tracking-widest text-foreground-muted transition-colors hover:border-foreground-muted"
          >
            See Examples
          </Link>
        </div>
      </div>
    </section>
  );
}

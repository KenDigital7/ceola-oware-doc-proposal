import { SectionLabel } from "./SectionLabel";

export function WhyNow() {
  return (
    <section
      aria-labelledby="why-now-heading"
      className="mx-auto max-w-doc px-6 py-20 sm:px-10 sm:py-28"
    >
      <SectionLabel label="Why This Matters" />

      <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
        {/* Left: headline */}
        <div>
          <h2
            id="why-now-heading"
            className="font-serif text-4xl font-normal leading-tight tracking-tight text-foreground text-balance sm:text-5xl"
          >
            This Isn&apos;t a Project You Can Postpone
          </h2>
        </div>

        {/* Right: body */}
        <div className="flex flex-col gap-5 text-base leading-relaxed text-foreground-muted">
          <p>
            I&apos;ve had friends reach out years after their father passed,
            desperately wishing they&apos;d made that video when they had the
            chance. I&apos;ve seen family members step in at the last moment,
            motivated by the knowledge that their parent carries stories no one
            else knows&mdash;especially the kind of knowledge passed down
            through generations, cultural histories that live only in
            conversation.
          </p>
          <p>These are the moments that define legacy work.</p>
          <p>
            I&apos;ve sat in this position myself. I&apos;ve watched it matter.
            I&apos;ve seen families years later reaching back, grateful that one
            decision to document changed what their children and grandchildren
            would know. With my own roots in Chicago&apos;s South and West Side
            communities, I understand that documentation is an act of love for
            the next generation.
          </p>
        </div>
      </div>


    </section>
  );
}

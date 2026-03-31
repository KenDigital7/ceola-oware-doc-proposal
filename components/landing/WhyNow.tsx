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
            A friend reaches out, years after her father has passed,
            desperately searching for the video she wishes she&apos;d made.
            Another family member steps in, motivated by the knowledge that
            their parent carries stories no one else in the family
            knows&mdash;especially the men&apos;s knowledge passed down through
            male relatives, cultural histories that lived only in conversation.
          </p>
          <p>
            These are the moments that define legacy work.
          </p>
          <p>
            Ken has sat in this position. He&apos;s watched it matter. He&apos;s
            seen families years later reaching back, grateful that one decision
            to document changed what their children and grandchildren would
            know. He&apos;s also lived it&mdash;with roots in Chicago&apos;s
            South and West Side communities, he understands that documentation
            is an act of love for the next generation.
          </p>
        </div>
      </div>

      {/* Pull quote */}
      <blockquote className="relative mt-20 border-l-2 border-accent pl-8 sm:pl-12">
        <p className="font-serif text-xl font-normal italic leading-relaxed text-foreground sm:text-2xl lg:text-3xl text-pretty">
          &ldquo;Now that my mother has passed, I see all these unanswered
          questions. But I still have the opportunity to help on my dad&apos;s
          side. Because when he passes, that&apos;s it in terms of long-standing
          history. He knows things even his own siblings don&apos;t know.&rdquo;
        </p>
        <footer className="mt-5 text-sm uppercase tracking-widest text-foreground-subtle">
          &mdash; Ceola, documentary client
        </footer>
      </blockquote>
    </section>
  );
}

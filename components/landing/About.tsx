import { SectionLabel } from "./SectionLabel";

export function About() {
  return (
    <section
      aria-labelledby="about-heading"
      className="border-t border-border"
    >
      <div className="mx-auto max-w-doc px-6 py-20 sm:px-10 sm:py-28">
        <SectionLabel label="The Philosophy" />

        <div className="flex flex-col gap-10">
          <div>
            <h2
              id="about-heading"
              className="font-serif text-4xl font-normal leading-tight tracking-tight text-foreground text-balance sm:text-5xl"
            >
              Why I Do This Work
            </h2>
          </div>

          <div className="flex flex-col gap-5 text-base leading-relaxed text-foreground-muted">
            <p>
              Years ago, a friend faced a choice: her father was in cancer
              remission, and time suddenly felt urgent. She asked me to sit down
              and document his stories&mdash;just conversational questions about
              his life, his reflections, his hopes for the family. Two years
              later, that father passed away. The family still has that video.
              They still reach for it. It shaped what the grandchildren know
              about where they come from.
            </p>
            <p>
              That&apos;s when I understood: legacy work isn&apos;t a luxury.
              It&apos;s a responsibility.
            </p>
            <p>
              I&apos;ve brought this same intentionality to everything I
              do&mdash;whether documenting Chicago&apos;s West Side for the
              &ldquo;Making Meaning&rdquo; archival project, or sitting in
              someone&apos;s living room capturing their family story. The
              underlying principle is the same: everyday life, when documented
              with care and craft, becomes fine art. The domestic becomes the
              archival. The personal becomes the historical.
            </p>
            <p>
              Your father&apos;s factory work, your mother&apos;s migration
              route, your grandparent&apos;s business struggles and
              triumphs&mdash;these aren&apos;t small stories. They&apos;re the
              foundation of everything that came after.
            </p>


          </div>
        </div>
      </div>
    </section>
  );
}

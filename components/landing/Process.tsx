import { SectionLabel } from "./SectionLabel";

const STEPS = [
  {
    num: "01",
    title: "Pre-Production Planning",
    body: "I develop the aesthetic, the questions, and the logistics. This is where the real creative work begins \u2014 figuring out how to tell the story in a way that honors both the person and the history.",
  },
  {
    num: "02",
    title: "Production Day",
    body: "I come to your home. We spend a full day documenting the story in a real, natural setting.",
  },
  {
    num: "03",
    title: "Post-Production",
    body: "I shape the footage into a finished documentary. 3\u20134 weeks later, you have a film.",
  },
  {
    num: "04",
    title: "You Share It",
    body: "It\u2019s yours now. Share it with your family, add it to your archive, pass it down. The work continues.",
  },
];

export function Process() {
  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="border-t border-border bg-surface"
    >
      <div className="mx-auto max-w-doc px-6 py-20 sm:px-10 sm:py-28">
        <SectionLabel label="How to Begin" />

        <h2
          id="process-heading"
          className="mb-16 font-serif text-4xl font-normal leading-tight tracking-tight text-foreground text-balance sm:text-5xl"
        >
          Four Steps to a Finished Film
        </h2>

        <div className="grid gap-px border border-border bg-border sm:grid-cols-2">
          {STEPS.map((step) => (
            <div
              key={step.num}
              className="flex flex-col gap-4 bg-surface p-8"
            >
              <span className="font-serif text-3xl font-normal text-accent opacity-60">
                {step.num}
              </span>
              <h3 className="text-base font-normal text-foreground">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-foreground-muted">
                {step.body}
              </p>
            </div>
          ))}
        </div>

        {/* Timeline strip */}
        <div className="mt-10 flex flex-wrap gap-6 border-t border-border pt-10">
          {[
            ["Pre-Production", "2–3 weeks"],
            ["Production", "1 day"],
            ["Post-Production", "3–4 weeks"],
            ["Total", "6–8 weeks"],
          ].map(([label, value]) => (
            <div key={label} className="flex flex-col gap-1">
              <span className="text-xs uppercase tracking-widest text-foreground-subtle">
                {label}
              </span>
              <span className="text-sm text-foreground-muted">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

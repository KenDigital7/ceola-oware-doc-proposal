import { SectionLabel } from "./SectionLabel";

const PRE_PRODUCTION = [
  "Discovery consultation — I listen to understand your story and the questions that matter most",
  "Aesthetic planning — decisions about where to film and how to visually frame the story",
  "Question development — help articulating questions that draw out the deepest, most meaningful responses",
  "Logistics coordination — timeline, home access, comfort considerations, special requests",
];

const PRODUCTION = [
  "Single full-day shoot in your home (typically 4–6 hours depending on story scope)",
  "Professional lighting, audio, and camera work designed for your living room",
  "Guided conversation — I facilitate the interview to draw out authentic moments and reflection",
  "Visual storytelling — integration of family photographs, heirlooms, and meaningful artifacts",
];

const POST_PRODUCTION = [
  "Full edit — I shape raw footage into a narrative arc that honors the speaker",
  "Color grading — professional treatment ensuring gallery-quality results",
  "Sound design — professional audio mixing and licensed music selection",
  "Title sequences & graphics — professional opening and closing grounded in time and context",
  "Delivery files — HD digital, archival master, and social-ready versions",
];

const INCLUDED = [
  "You don\u2019t have to figure out how to operate a camera",
  "You don\u2019t have to learn video editing or color grading",
  "You don\u2019t have to navigate technical formats or archival specifications",
  "You don\u2019t have to make aesthetic choices alone — I bring expertise and options",
  "You don\u2019t have to worry about whether it will look professional — it will",
];

function PackageList({
  items,
  heading,
}: {
  items: string[];
  heading: string;
}) {
  return (
    <div>
      <h3 className="mb-4 text-xs uppercase tracking-widest text-accent">
        {heading}
      </h3>
      <ul className="flex flex-col gap-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-foreground-muted">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Package() {
  return (
    <section
      id="package"
      aria-labelledby="package-heading"
      className="border-t border-border"
    >
      <div className="mx-auto max-w-doc px-10 py-10">
        <SectionLabel label="The Production Package" />

        {/* Headline + price */}
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <h2
            id="package-heading"
            className="font-serif text-4xl font-normal leading-tight tracking-tight text-foreground text-balance sm:text-5xl"
          >
            Full Production Package
          </h2>
          <div className="text-right">
            <p className="font-serif text-4xl font-normal text-accent">$4,000</p>
            <p className="mt-1 text-xs uppercase tracking-widest text-foreground-subtle">
              Paid in installments
            </p>
          </div>
        </div>

        <p className="mb-14 max-w-measure text-base leading-relaxed text-foreground-muted">
          This package exists to remove every barrier between you and preserving
          your family&apos;s story. One comprehensive investment. One day of
          production. Everything you need to create a finished documentary that
          will outlast generations.
        </p>

        {/* Three phase grid */}
        <div className="grid gap-10 border-t border-border pt-12 sm:grid-cols-3">
          <PackageList heading="Pre-Production" items={PRE_PRODUCTION} />
          <PackageList heading="Production Day" items={PRODUCTION} />
          <PackageList heading="Post-Production" items={POST_PRODUCTION} />
        </div>

        {/* What you get callout */}
        <div className="mt-14 border border-border p-8 sm:p-10">
          <h3 className="mb-6 font-serif text-xl font-normal text-foreground">
            What This Means Practically
          </h3>
          <ul className="flex flex-col gap-3">
            {INCLUDED.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-foreground-muted">
                <span className="mt-0.5 text-accent" aria-hidden="true">&#10003;</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-base leading-relaxed text-foreground">
            <strong>What you DO get:</strong> One beautiful day capturing your
            family&apos;s story, and a finished film you&apos;ll be proud to
            share with your children, grandchildren, and the generations to
            come.
          </p>
        </div>

        {/* Exclusions note */}
        <div className="mt-12 border-l-2 border-accent pl-6 py-6 sm:pl-8">
          <p className="text-sm leading-relaxed text-foreground-muted">
            <span className="text-accent font-semibold">Not included in the $4,000 package:</span> social cutdowns, trailer, YouTube/Instagram packaging, thumbnail strategy, paid ads, or additional interviews for series expansion. Those are add-ons quoted separately.
          </p>
        </div>

        {/* Timeline */}
        <div className="mt-8 flex flex-wrap gap-8 border-t border-border pt-8">
          <div>
            <p className="text-xs uppercase tracking-widest text-foreground-subtle">Timeline</p>
            <p className="mt-1 text-sm text-foreground-muted">4–6 weeks from production day</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-foreground-subtle">Runtime</p>
            <p className="mt-1 text-sm text-foreground-muted">Determined collaboratively based on scope</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-foreground-subtle">Location</p>
            <p className="mt-1 text-sm text-foreground-muted">Chicago-based; available for projects anywhere</p>
          </div>
        </div>
      </div>
    </section>
  );
}

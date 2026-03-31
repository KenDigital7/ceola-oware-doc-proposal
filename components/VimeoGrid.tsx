"use client";

type VimeoVideo = {
  id: string;
  /** Unlisted hash token, e.g. "09bde37f29" — leave undefined for public videos */
  h?: string;
  title: string;
};

const VIDEOS: VimeoVideo[] = [
  { id: "1161240020", h: "09bde37f29", title: "Interview Reel" },
  { id: "1163159879", h: "b0eff44a22", title: "Historical Montage Spotlight" },
  { id: "1169068989", title: "Family Storytelling" },
  { id: "1169069067", title: "Homemade Video Sample" },
  { id: "379462250", title: "Documentary Sample" },
];

function vimeoSrc({ id, h }: VimeoVideo) {
  const params = new URLSearchParams({
    title: "0",
    byline: "0",
    portrait: "0",
    dnt: "1",
    color: "c8913a",
  });
  if (h) params.set("h", h);
  return `https://player.vimeo.com/video/${id}?${params.toString()}`;
}

export function VimeoGrid() {
  return (
    <section
      aria-labelledby="sample-work-heading"
      className="px-10 py-10"
    >
      <div className="mx-auto max-w-doc">
        {/* Section label */}
        <div className="mb-10 flex items-center gap-4">
          <span className="text-xs uppercase tracking-widest text-foreground-subtle">
            Sample Work
          </span>
          <div className="flex-1 border-t border-border" />
        </div>

        <h2
          id="sample-work-heading"
          className="mb-3 font-serif text-4xl font-normal tracking-tight text-foreground sm:text-5xl"
        >
          Previous Work
        </h2>
        <p className="mb-10 max-w-measure text-lg leading-relaxed text-foreground-muted">
          A selection of interview and documentary productions for reference — demonstrating approach, craft, and editorial standard.
        </p>
      </div>

      <div className="mx-auto max-w-doc grid gap-8">
        {VIDEOS.map((video, i) => (
          <figure key={video.id} className="flex flex-col gap-3">
            <div
              className="relative w-full overflow-hidden border border-border bg-surface"
              style={{ paddingBottom: "56.25%" /* 16:9 */ }}
            >
              <iframe
                src={vimeoSrc(video)}
                title={video.title}
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                loading="lazy"
                className="absolute inset-0 h-full w-full"
              />
            </div>
            <figcaption className="flex items-center gap-3">
              <span className="text-xs text-foreground-subtle tabular-nums">
                0{i + 1}
              </span>
              <span className="text-sm text-foreground-muted">{video.title}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}



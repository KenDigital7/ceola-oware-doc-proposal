"use client";

type VimeoVideo = {
  id: string;
  /** Unlisted hash token, e.g. "09bde37f29" — leave undefined for public videos */
  h?: string;
  title: string;
};

const VIDEOS: VimeoVideo[] = [
  { id: "1161240020", h: "09bde37f29", title: "Interview — Sample 1" },
  { id: "1163159879", h: "b0eff44a22", title: "Interview — Sample 2" },
  { id: "1169068989", title: "Documentary Work — Sample 3" },
  { id: "1169069067", title: "Documentary Work — Sample 4" },
];

function vimeoSrc({ id, h }: VimeoVideo) {
  const params = new URLSearchParams({
    title: "0",
    byline: "0",
    portrait: "0",
    dnt: "1",
  });
  if (h) params.set("h", h);
  return `https://player.vimeo.com/video/${id}?${params.toString()}`;
}

export function VimeoGrid() {
  return (
    <section
      aria-labelledby="sample-work-heading"
      className="mx-auto max-w-doc px-5 pb-14 pt-10 sm:px-8"
    >
      {/* Divider */}
      <hr className="mb-10 border-paper-dark" />

      <h2
        id="sample-work-heading"
        className="mb-2 font-serif text-2xl font-semibold text-ink"
      >
        Sample Work
      </h2>
      <p className="mb-8 text-sm leading-relaxed text-ink/65">
        Previous interviews and documentary productions for reference.
      </p>

      <div className="grid gap-6 sm:grid-cols-2">
        {VIDEOS.map((video) => (
          <figure key={video.id} className="flex flex-col gap-2">
            <div
              className="relative w-full overflow-hidden rounded-sm border border-paper-dark bg-paper-dark/50"
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
            <figcaption className="text-xs text-ink/50">{video.title}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

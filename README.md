# Ceola — Father’s Story / Documentary Proposal

Internal workspace for a tailored client proposal, a **Next.js proposal site** (reads the markdown at build time), and reusable workflow assets.

| Asset | Path |
|--------|------|
| Transcript | [Context/Ceola's Dad's Story.txt](Context/Ceola's Dad's Story.txt) |
| Project brief | [docs/project-brief-ceola-dad.md](docs/project-brief-ceola-dad.md) |
| **Source markdown (edit this)** | [proposals/ceola-dad-documentary-proposal.md](proposals/ceola-dad-documentary-proposal.md) |
| Proposal UI | Next.js `app/page.tsx` → renders the file above |
| Future proposals workflow | [workflow/README.md](workflow/README.md) |

**Investment in proposal:** USD $4,000 full production; marketing/series quoted separately.

## Local preview

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Deploy on Vercel

1. Push this folder to a Git repository (GitHub, GitLab, or Bitbucket).
2. In [Vercel](https://vercel.com): **Add New Project** → import the repo.
3. Framework preset: **Next.js** (default). Root directory: repo root (no monorepo path needed).
4. Deploy. Each deploy rebuilds the page from `proposals/ceola-dad-documentary-proposal.md`.

**Updating copy:** edit the markdown file, commit, and push (or trigger a redeploy). No need to duplicate text in React components.

**Privacy:** For a client-only link, use Vercel [Deployment Protection](https://vercel.com/docs/security/deployment-protection) (team plans) or share a preview URL only with Ceola.

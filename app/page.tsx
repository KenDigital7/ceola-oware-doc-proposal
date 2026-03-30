import fs from "node:fs/promises";
import path from "node:path";
import { ProposalMarkdown } from "@/components/ProposalMarkdown";
import { VimeoGrid } from "@/components/VimeoGrid";

export default async function Page() {
  const mdPath = path.join(
    process.cwd(),
    "proposals",
    "ceola-dad-documentary-proposal.md",
  );
  const content = await fs.readFile(mdPath, "utf-8");

  return (
    <main id="main" className="min-h-[calc(100vh-12rem)]">
      <div className="mx-auto max-w-doc px-6 py-12 sm:px-10 sm:py-16">
        <ProposalMarkdown content={content} />
      </div>
      <VimeoGrid />
    </main>
  );
}

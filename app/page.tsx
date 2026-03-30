import fs from "node:fs/promises";
import path from "node:path";
import { ProposalMarkdown } from "@/components/ProposalMarkdown";

export default async function Page() {
  const mdPath = path.join(
    process.cwd(),
    "proposals",
    "ceola-dad-documentary-proposal.md",
  );
  const content = await fs.readFile(mdPath, "utf-8");

  return (
    <main
      id="main"
      className="mx-auto min-h-[calc(100vh-12rem)] max-w-doc px-5 py-10 sm:px-8 sm:py-14"
    >
      <ProposalMarkdown content={content} />
    </main>
  );
}

"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type Props = { content: string };

export function ProposalMarkdown({ content }: Props) {
  return (
    <div className="doc-prose prose prose-lg max-w-none font-sans prose-headings:font-serif prose-headings:font-semibold prose-p:leading-relaxed prose-a:text-umber prose-a:no-underline hover:prose-a:underline prose-hr:border-paper-dark prose-li:marker:text-sage">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  );
}

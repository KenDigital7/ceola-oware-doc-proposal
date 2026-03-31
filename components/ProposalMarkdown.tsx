"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type Props = { content: string };

export function ProposalMarkdown({ content }: Props) {
  return (
    <div className="doc-prose prose prose-lg max-w-none font-sans prose-headings:font-serif prose-headings:font-normal prose-headings:tracking-tight prose-headings:text-foreground prose-p:leading-relaxed prose-p:text-foreground prose-a:text-accent prose-a:no-underline hover:prose-a:opacity-70 prose-strong:text-foreground prose-hr:border-border prose-li:text-foreground prose-li:marker:text-accent prose-th:text-foreground prose-td:text-foreground-muted prose-blockquote:border-l-accent prose-blockquote:text-foreground-muted">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  );
}


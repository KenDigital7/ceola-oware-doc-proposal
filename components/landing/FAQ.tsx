"use client";

import { useState } from "react";
import { SectionLabel } from "./SectionLabel";

const FAQS = [
  {
    q: "How do I know what to ask my father / mother / grandmother?",
    a: "That\u2019s what pre-production is for. Ken will help you develop questions that matter \u2014 questions that draw out not just facts, but the reasoning, the emotion, the \u2018why\u2019 behind decisions and paths.",
  },
  {
    q: "What if my parent is private, shy, or uncomfortable on camera?",
    a: "The first day is about building trust and comfort. Ken\u2019s approach is conversational, not interrogative. People open up when they feel heard. That said, if someone genuinely isn\u2019t comfortable, that\u2019s valid \u2014 and you\u2019ll know during pre-production.",
  },
  {
    q: "What if the story is longer than a short film?",
    a: "The package assumes a single production day and a runtime agreed in pre-production. If the story needs more time on camera, Ken will give you a transparent addendum before moving forward. You\u2019re never surprised by scope creep.",
  },
  {
    q: "Will I be able to share this online, or is it just for family?",
    a: "You own the film. You decide how it\u2019s shared. Closed captions and professional delivery files make it accessible everywhere \u2014 from private family screenings to public sharing, YouTube channels to archival institutions.",
  },
  {
    q: "What if my family member passes before we can film?",
    a: "Then you already know why this matters. That\u2019s the hard truth that motivates this work. The time to document is now \u2014 while the person is here to share their story in their own voice.",
  },
  {
    q: "Can you film my whole family at once, or is it one-on-one?",
    a: "Typically the focus is on one primary storyteller in the home environment, which allows for deeper, more intimate conversation. Multi-generational group dynamics would be a separate conversation during pre-production.",
  },
  {
    q: "How much time should I block for the production day?",
    a: "Plan for 4\u20136 hours. Ken will coordinate timing based on your family member\u2019s energy, mobility, and the scope of stories. It\u2019s unhurried \u2014 this isn\u2019t about rushing through; it\u2019s about giving the story the time it needs.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      aria-labelledby="faq-heading"
      className="border-t border-border"
    >
      <div className="mx-auto max-w-doc px-6 py-20 sm:px-10 sm:py-28">
        <SectionLabel label="Common Questions" />

        <h2
          id="faq-heading"
          className="mb-14 font-serif text-4xl font-normal leading-tight tracking-tight text-foreground text-balance sm:text-5xl"
        >
          Legacy Work Deserves Honest Answers
        </h2>

        <dl className="flex flex-col divide-y divide-border">
          {FAQS.map((faq, i) => (
            <div key={i}>
              <dt>
                <button
                  type="button"
                  aria-expanded={open === i}
                  aria-controls={`faq-answer-${i}`}
                  onClick={() => setOpen(open === i ? null : i)}
                  className="flex w-full items-start justify-between gap-6 py-6 text-left"
                >
                  <span className="text-base font-normal text-foreground">
                    {faq.q}
                  </span>
                  <span
                    className="mt-0.5 shrink-0 text-accent text-xl leading-none transition-transform duration-200"
                    style={{ transform: open === i ? "rotate(45deg)" : "rotate(0deg)" }}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
              </dt>
              <dd
                id={`faq-answer-${i}`}
                hidden={open !== i}
                className="pb-6 text-sm leading-relaxed text-foreground-muted"
              >
                {faq.a}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

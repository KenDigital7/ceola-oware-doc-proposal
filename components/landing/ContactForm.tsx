"use client";

import { useState, type FormEvent } from "react";
import { SectionLabel } from "./SectionLabel";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="border-t border-border"
    >
      <div className="mx-auto max-w-doc px-6 py-20 sm:px-10 sm:py-28">
        <SectionLabel label="Next Steps" />

        <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:gap-24">
          {/* Left */}
          <div>
            <h2
              id="contact-heading"
              className="mb-5 font-serif text-4xl font-normal leading-tight tracking-tight text-foreground text-balance sm:text-5xl"
            >
              Discuss Your Story
            </h2>
            <p className="text-base leading-relaxed text-foreground-muted">
              Tell Ken about the person whose story you want to preserve. He
              typically responds within 24–48 hours.
            </p>
            <div className="mt-10 flex flex-col gap-3 text-sm text-foreground-muted">
              <a
                href="mailto:info@kenctures.com"
                className="text-accent transition-opacity hover:opacity-70"
              >
                info@kenctures.com
              </a>
              <a
                href="tel:7083591464"
                className="text-accent transition-opacity hover:opacity-70"
              >
                708.359.1464
              </a>
            </div>
          </div>

          {/* Right: form */}
          {submitted ? (
            <div className="flex items-center justify-center border border-border p-12 text-center">
              <div>
                <p className="font-serif text-2xl font-normal text-foreground">
                  Thank you.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
                  Ken will be in touch within 24–48 hours.
                </p>
              </div>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5"
              aria-label="Contact form"
            >
              {[
                { id: "name", label: "Your Name", type: "text", required: true },
                {
                  id: "relationship",
                  label: "Your Relationship to the Person",
                  type: "text",
                  required: true,
                  placeholder: "e.g. daughter, nephew",
                },
                {
                  id: "subject-name",
                  label: "Their Name & Approximate Age",
                  type: "text",
                  required: true,
                  placeholder: "e.g. James, 78",
                },
                {
                  id: "reach",
                  label: "Best Way to Reach You",
                  type: "text",
                  required: true,
                  placeholder: "Email or phone",
                },
              ].map((field) => (
                <div key={field.id} className="flex flex-col gap-1.5">
                  <label
                    htmlFor={field.id}
                    className="text-xs uppercase tracking-widest text-foreground-subtle"
                  >
                    {field.label}
                  </label>
                  <input
                    id={field.id}
                    name={field.id}
                    type={field.type}
                    required={field.required}
                    placeholder={field.placeholder}
                    className="border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-foreground-subtle focus:border-accent focus:outline-none"
                  />
                </div>
              ))}

              {/* Textarea */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="background"
                  className="text-xs uppercase tracking-widest text-foreground-subtle"
                >
                  Their Story / Family Background (brief)
                </label>
                <textarea
                  id="background"
                  name="background"
                  rows={4}
                  className="resize-none border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-foreground-subtle focus:border-accent focus:outline-none"
                  placeholder="Migration route, work history, what you most want to capture..."
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="question"
                  className="text-xs uppercase tracking-widest text-foreground-subtle"
                >
                  Your Main Question or Concern
                </label>
                <textarea
                  id="question"
                  name="question"
                  rows={3}
                  className="resize-none border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-foreground-subtle focus:border-accent focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="mt-2 border border-accent bg-accent px-7 py-3.5 font-sans text-sm uppercase tracking-widest text-background transition-opacity hover:opacity-80"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

import React from "react";
import { ArrowRight } from "lucide-react";

export default function DonateCTA() {
  return (
    <section id="donate" className="py-24 md:py-32 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div className="max-w-2xl">
            <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-accent mb-5">
              Direct Action
            </p>
            <h2 className="font-display text-5xl md:text-7xl leading-[1.0] text-balance">
              Fund the next garden. Plant the next tree. Shift the next policy.
            </h2>
          </div>
          <div className="flex flex-col gap-4 shrink-0">
            <a
              href="#donate"
              className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground font-mono text-[13px] tracking-[0.2em] uppercase px-8 py-4 hover:bg-background transition-colors"
            >
              Donate now
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#activate"
              className="inline-flex items-center justify-center gap-2 border border-primary-foreground/40 text-primary-foreground font-mono text-[13px] tracking-[0.2em] uppercase px-8 py-4 hover:bg-primary-foreground/10 transition-colors"
            >
              Become a member
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
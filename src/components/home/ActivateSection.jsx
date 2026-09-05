import React from "react";
import { ArrowRight, Sprout, CalendarDays, UserRound } from "lucide-react";

const ACTIONS = [
  {
    icon: Sprout,
    title: "Volunteer",
    desc: "Join a garden crew, tree planting, or cleanup this month.",
    cta: "Register",
  },
  {
    icon: CalendarDays,
    title: "Events & Workshops",
    desc: "Hands-on sessions on greywater, native plants, and composting.",
    cta: "See calendar",
  },
  {
    icon: UserRound,
    title: "Membership",
    desc: "Become a sustaining member of the alliance from $5/mo.",
    cta: "Join now",
  },
];

export default function ActivateSection() {
  return (
    <section id="activate" className="py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-accent mb-4">
              C · The Activation Hub
            </p>
            <h2 className="font-display text-5xl md:text-6xl text-foreground leading-[1.02] max-w-2xl text-balance">
              From observer to participant in two clicks.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border/60 rounded-sm overflow-hidden">
          {ACTIONS.map(({ icon: Icon, title, desc, cta }) => (
            <div
              key={title}
              className="bg-background p-8 md:p-10 flex flex-col gap-5 group hover:bg-secondary/40 transition-colors"
            >
              <Icon className="h-8 w-8 text-primary" />
              <h3 className="font-display text-3xl text-foreground">{title}</h3>
              <p className="text-foreground/70 leading-relaxed flex-1">{desc}</p>
              <a
                href="#donate"
                className="inline-flex items-center gap-2 font-mono text-[12px] tracking-[0.2em] uppercase text-primary group-hover:text-accent transition-colors"
              >
                {cta}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
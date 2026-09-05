import React from "react";
import { ArrowUpRight } from "lucide-react";

const POSTS = [
  {
    date: "Sep 2026",
    cat: "Policy",
    title: "LA City Council passes SFVGA-backed turf replacement rebate",
  },
  {
    date: "Aug 2026",
    cat: "Forestry",
    title: "1,200 native oaks planted along the Tujunga Wash corridor",
  },
  {
    date: "Aug 2026",
    cat: "Water",
    title: "Rain-capture pilot saves 480,000 gallons in Pacoima",
  },
];

export default function IntelSection() {
  return (
    <section id="intel" className="py-24 md:py-32 bg-secondary/40">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-accent mb-4">
              D · The Intel Archive
            </p>
            <h2 className="font-display text-5xl md:text-6xl text-foreground leading-[1.02] text-balance">
              The region's primary source of environmental truth.
            </h2>
          </div>
          <a
            href="#intel"
            className="inline-flex items-center gap-2 font-mono text-[12px] tracking-[0.2em] uppercase text-primary hover:text-accent transition-colors"
          >
            All news
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="divide-y divide-border">
          {POSTS.map((p) => (
            <a
              key={p.title}
              href="#intel"
              className="group flex flex-col md:flex-row md:items-center gap-3 md:gap-8 py-6 hover:bg-background/60 transition-colors -mx-2 px-2"
            >
              <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-muted-foreground md:w-28 shrink-0">
                {p.date}
              </span>
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-accent md:w-24 shrink-0">
                {p.cat}
              </span>
              <h3 className="font-display text-2xl md:text-3xl text-foreground flex-1 group-hover:text-primary transition-colors">
                {p.title}
              </h3>
              <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors shrink-0" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
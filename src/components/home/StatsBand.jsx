import React from "react";

const STATS = [
  { value: "47", unit: "gardens", label: "Community gardens cultivated" },
  { value: "12,400", unit: "trees", label: "Native canopy planted" },
  { value: "3.2M", unit: "gallons", label: "Water saved this year" },
  { value: "1,800+", unit: "members", label: "Active advocates" },
];

export default function StatsBand() {
  return (
    <section className="relative -mt-px">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border/60 rounded-sm overflow-hidden">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="glass px-6 py-8 md:py-10 flex flex-col gap-1"
            >
              <div className="flex items-baseline gap-1.5">
                <span className="font-display text-4xl md:text-5xl text-primary leading-none">
                  {s.value}
                </span>
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
                  {s.unit}
                </span>
              </div>
              <p className="text-sm text-foreground/70 mt-2">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
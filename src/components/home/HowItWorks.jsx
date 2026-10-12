import React from "react";

const STEPS = [
  {
    n: "01",
    title: "Elected Board",
    desc: "At the year-end general meeting, members elect or nominate seven board members.",
  },
  {
    n: "02",
    title: "Plan the Year",
    desc: "The board finalizes 8 to 12 events and the annual budget for the coming year.",
  },
  {
    n: "03",
    title: "Form Committees",
    desc: "Committees of 5 to 10 members are created to organize each event.",
  },
  {
    n: "04",
    title: "Host & Enjoy",
    desc: "Every member family joins at least one committee — then attends and enjoys the rest.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="text-center mb-14">
          <p className="font-body text-sm tracking-[0.2em] uppercase text-primary font-bold mb-3">
            How SFVGA Works
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground text-balance">
            A community-run association
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {STEPS.map((s) => (
            <div key={s.n} className="text-center md:text-left">
              <p className="font-display text-5xl text-primary/30 mb-3">{s.n}</p>
              <h3 className="font-display text-2xl text-foreground mb-2">{s.title}</h3>
              <p className="font-body text-sm text-foreground/70 leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
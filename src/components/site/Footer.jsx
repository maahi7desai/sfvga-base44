import React from "react";
import Logo from "./Logo";
import HorizonRule from "./HorizonRule";

const GROUPS = [
  {
    title: "Impact Engine",
    links: ["Community Gardens", "Water Conservation", "Urban Forestry", "Policy Advocacy"],
  },
  {
    title: "Alliance Portal",
    links: ["Our Mission", "Board of Directors", "Partners & Affiliates", "Financial Transparency"],
  },
  {
    title: "Activation Hub",
    links: ["Volunteer Registration", "Upcoming Events", "Membership Portal"],
  },
  {
    title: "Intel Archive",
    links: ["Environmental News", "Local Resources", "FAQ", "Contact"],
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-foreground text-background overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 pt-20 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {GROUPS.map((g) => (
            <div key={g.title}>
              <h4 className="font-mono text-[11px] tracking-[0.24em] uppercase text-accent mb-5">
                {g.title}
              </h4>
              <ul className="space-y-3">
                {g.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#top"
                      className="text-sm text-background/70 hover:text-background transition-colors"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 mb-6">
          <HorizonRule className="opacity-30" />
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Logo className="h-8 w-8" variant="light" />
            <span className="font-mono text-[12px] tracking-[0.3em]">SFVGA</span>
          </div>
          <p className="text-xs text-background/50 max-w-md leading-relaxed">
            San Fernando Valley Green Alliance — a Southern California non-profit,
            cultivating a living valley since 1978.
          </p>
          <div className="flex gap-5 font-mono text-[11px] tracking-[0.18em] uppercase text-background/50">
            <a href="#top" className="hover:text-background">Privacy</a>
            <a href="#top" className="hover:text-background">Terms</a>
            <a href="#intel" className="hover:text-background">Contact</a>
          </div>
        </div>
      </div>

      {/* Oversized logotype mask */}
      <div
        className="pointer-events-none select-none px-5 sm:px-8 -mb-6 leading-none"
        aria-hidden="true"
      >
        <span className="font-display text-[22vw] md:text-[18vw] tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-background/15 to-background/5">
          SFVGA
        </span>
      </div>
    </footer>
  );
}
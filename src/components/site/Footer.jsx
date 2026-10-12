import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const GROUPS = [
  {
    title: "Explore",
    links: [
      { label: "Home", to: "/" },
      { label: "Events", to: "/events" },
      { label: "Members", to: "/members" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    title: "Get Involved",
    links: [
      { label: "Become a Member", to: "/members" },
      { label: "Member Login", to: "/login" },
      { label: "Volunteer", to: "/members" },
    ],
  },
  {
    title: "Board Meetings",
    links: [
      { label: "Roles & Responsibilities", href: "https://sfvga.org/roles-and-resp", external: true },
      { label: "Association By Laws", href: "https://sfvga.org/s/BYLAWS.docx", external: true },
      { label: "Meeting Minutes", href: "https://sfvga.org/board/meeting-minutes", external: true },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="hidden md:block bg-background text-foreground border-t border-primary/15">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Logo className="h-16 w-16 object-contain" />
              <div className="leading-tight">
                <p className="font-display text-2xl">SFVGA</p>
                <p className="font-body text-xs tracking-wide opacity-80">
                  San Fernando Valley Gujarati Association
                </p>
              </div>
            </div>
            <p className="font-body text-sm opacity-80 max-w-sm leading-relaxed">
              A Southern California non-profit organization since 1978. A vibrant
              Gujarati community in the heart of Southern California.
            </p>
            <p className="font-body text-sm mt-4 opacity-80">
              Email:{" "}
              <a href="mailto:sfvgabod@gmail.com" className="underline text-accent hover:text-primary">
                sfvgabod@gmail.com
              </a>
            </p>
          </div>

          {GROUPS.map((g) => (
            <div key={g.title}>
              <h4 className="font-body text-xs tracking-[0.18em] uppercase text-accent mb-4">
                {g.title}
              </h4>
              <ul className="space-y-2.5">
                {g.links.map((l) => (
                  <li key={l.label}>
                    {l.external ? (
                      <a
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-body text-sm opacity-80 hover:opacity-100 text-accent hover:text-primary transition-colors"
                      >
                        {l.label}
                      </a>
                    ) : (
                      <Link
                        to={l.to}
                        className="font-body text-sm opacity-80 hover:opacity-100 text-accent hover:text-primary transition-colors"
                      >
                        {l.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-primary/15 flex flex-col sm:flex-row justify-between gap-3">
          <p className="font-body text-xs opacity-60">
            © {new Date().getFullYear()} San Fernando Valley Gujarati Association. All rights reserved.
          </p>
          <p className="font-body text-xs opacity-60">
            Preserve Heritage &amp; Promote Culture
          </p>
        </div>
      </div>
    </footer>
  );
}
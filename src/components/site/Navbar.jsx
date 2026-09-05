import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const NAV = [
  { label: "Impact", href: "#impact" },
  { label: "Alliance", href: "#alliance" },
  { label: "Activate", href: "#activate" },
  { label: "Intel", href: "#intel" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="glass border-b border-foreground/10">
        <nav className="mx-auto max-w-[1400px] px-5 sm:px-8 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2.5 group">
            <Logo className="h-7 w-7 text-primary" variant="dark" />
            <span className="font-mono text-[13px] tracking-[0.32em] text-foreground font-medium">
              SFVGA
            </span>
          </a>

          <div className="hidden md:flex items-center gap-9">
            {NAV.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-mono text-[13px] tracking-[0.22em] uppercase text-foreground/70 hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="#activate"
              className="font-mono text-[12px] tracking-[0.2em] uppercase text-foreground/70 hover:text-primary transition-colors"
            >
              Volunteer
            </a>
            <a
              href="#donate"
              className="bg-primary text-primary-foreground font-mono text-[12px] tracking-[0.2em] uppercase px-5 py-2.5 hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Donate
            </a>
          </div>

          <button
            className="md:hidden p-2 -mr-2 text-foreground"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </div>

      {open && (
        <div className="md:hidden glass border-b border-foreground/10">
          <div className="px-5 py-6 flex flex-col gap-1">
            {NAV.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 font-mono text-sm tracking-[0.22em] uppercase text-foreground/80 border-b border-foreground/5"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#donate"
              onClick={() => setOpen(false)}
              className="mt-4 bg-primary text-primary-foreground font-mono text-[12px] tracking-[0.2em] uppercase px-5 py-3.5 text-center"
            >
              Donate
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
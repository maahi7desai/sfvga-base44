import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const NAV = [
  { label: "Home", to: "/" },
  { label: "Events", to: "/events" },
  { label: "Membership", to: "/membership" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-background/90 backdrop-blur-md border-b border-primary/15">
      <nav className="mx-auto max-w-[1200px] px-5 sm:px-8 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <Logo className="h-12 w-12 object-contain" />
          <span className="hidden sm:flex flex-col leading-tight">
            <span className="font-display text-lg text-primary">SFVGA</span>
            <span className="font-body text-[10px] tracking-[0.18em] uppercase text-foreground/60">
              Est. 1984
            </span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {NAV.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="font-body text-sm font-medium text-foreground/75 hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Link
          to="/membership"
          className="hidden md:inline-flex bg-primary text-primary-foreground font-body text-sm font-medium px-6 py-2.5 rounded-full hover:bg-accent hover:text-accent-foreground transition-colors"
        >
          Become a Member
        </Link>

        <button
          className="md:hidden p-2 -mr-2 text-foreground"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-background border-t border-primary/10">
          <div className="px-5 py-4 flex flex-col">
            {NAV.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                onClick={() => setOpen(false)}
                className="py-3 font-body text-base font-medium text-foreground/80 border-b border-primary/5"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/membership"
              onClick={() => setOpen(false)}
              className="mt-4 bg-primary text-primary-foreground font-body text-sm font-medium px-6 py-3 rounded-full text-center"
            >
              Become a Member
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
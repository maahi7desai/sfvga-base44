import React from "react";
import { Map, HandHeart, Newspaper } from "lucide-react";

const ITEMS = [
  { icon: Map, label: "Explore", href: "#impact" },
  { icon: HandHeart, label: "Act", href: "#donate" },
  { icon: Newspaper, label: "Intel", href: "#intel" },
];

export default function FloatingBioBar() {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-50 px-4 pb-4">
      <div className="glass-dark rounded-full flex items-center justify-around py-2.5 shadow-2xl">
        {ITEMS.map(({ icon: Icon, label, href }) => (
          <a
            key={label}
            href={href}
            className="flex flex-col items-center gap-1 px-6 py-1 text-background/80"
          >
            <Icon className="h-5 w-5" />
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase">
              {label}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
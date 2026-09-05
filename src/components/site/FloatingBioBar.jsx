import React from "react";
import { Link } from "react-router-dom";
import { CalendarDays, UserPlus, Phone } from "lucide-react";

const ITEMS = [
  { icon: CalendarDays, label: "Events", to: "/events" },
  { icon: UserPlus, label: "Members", to: "/members" },
  { icon: Phone, label: "Contact", to: "/contact" },
];

export default function FloatingBioBar() {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-50 px-4 pb-4">
      <div className="bg-secondary/90 backdrop-blur-md rounded-full flex items-center justify-around py-2.5 shadow-xl border border-secondary-foreground/15">
        {ITEMS.map(({ icon: Icon, label, to }) => (
          <Link
            key={label}
            to={to}
            className="flex flex-col items-center gap-1 px-6 py-1 text-secondary-foreground"
          >
            <Icon className="h-5 w-5" />
            <span className="font-body text-[10px] tracking-wide uppercase">
              {label}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
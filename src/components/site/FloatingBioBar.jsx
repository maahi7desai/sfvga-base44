import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, CalendarDays, UserPlus, Phone } from "lucide-react";

const ITEMS = [
{ icon: Home, label: "Home", to: "/" },
{ icon: CalendarDays, label: "Events", to: "/events" },
{ icon: UserPlus, label: "Members", to: "/members" },
{ icon: Phone, label: "Contact", to: "/contact" }];


export default function FloatingBioBar() {
  const { pathname } = useLocation();
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-background/90 backdrop-blur-md border-t border-primary/15">
      <div className="flex items-center justify-around py-2 bg-background">
        {ITEMS.map(({ icon: Icon, label, to }) => {
          const active = pathname === to;
          return (
          <Link
            key={label}
            to={to}
            className={`flex flex-col items-center gap-1 px-4 py-1 text-xs transition-colors ${active ? "text-primary font-bold" : "text-accent/80 font-normal"}`}>
          
            <Icon className="h-5 w-5" />
            <span className={`tracking-wide uppercase text-sm [font-family:'VAG_Rounded_Next',_sans-serif] ${active ? "font-[1000]" : "font-normal"}`}>
              {label}
            </span>
          </Link>
          );
        })}
      </div>
    </div>);

}
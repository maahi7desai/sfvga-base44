import React from "react";
import { Link } from "react-router-dom";
import { Home, CalendarDays, UserPlus, Phone } from "lucide-react";

const ITEMS = [
{ icon: Home, label: "Home", to: "/" },
{ icon: CalendarDays, label: "Events", to: "/events" },
{ icon: UserPlus, label: "Members", to: "/members" },
{ icon: Phone, label: "Contact", to: "/contact" }];


export default function FloatingBioBar() {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-background/90 backdrop-blur-md border-t border-primary/15">
      <div className="flex items-center justify-around py-2 bg-[hsl(40_50%_92%)]">
        {ITEMS.map(({ icon: Icon, label, to }) =>
        <Link
          key={label}
          to={to}
          className="flex flex-col items-center gap-1 px-4 py-1 text-primary text-xs">
          
            <Icon className="h-5 w-5" />
            <span className="tracking-wide uppercase text-sm [font-family:'VAG_Rounded_Next',_sans-serif] font-[1000]">
              {label}
            </span>
          </Link>
        )}
      </div>
    </div>);

}
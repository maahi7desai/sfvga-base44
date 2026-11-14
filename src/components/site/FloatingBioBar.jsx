import React, { useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Home, CalendarDays, UserPlus, Phone, Menu } from "lucide-react";
import { tabRootFor } from "@/lib/tabs";

const ITEMS = [
{ icon: Home, label: "Home", to: "/" },
{ icon: CalendarDays, label: "Events", to: "/events" },
{ icon: UserPlus, label: "Members", to: "/members" },
{ icon: Phone, label: "Contact", to: "/contact" },
{ icon: Menu, label: "More", to: "/more" }];

// Each tab keeps its own last location so switching tabs restores that stack.

export default function FloatingBioBar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const stacks = useRef({});

  useEffect(() => {
    const root = tabRootFor(pathname);
    if (root) stacks.current[root] = pathname;
  }, [pathname]);

  const handleTab = (e, to) => {
    e.preventDefault();
    if (tabRootFor(pathname) === to) {
      // Re-tapping the active tab pops it back to its root.
      navigate(to, { replace: true });
      return;
    }
    navigate(stacks.current[to] || to);
  };

  return (
    <div
      className="tab-bar md:hidden fixed bottom-0 inset-x-0 z-50 bg-background/90 backdrop-blur-md border-t border-primary/15"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}>
      
      <div className="flex items-center justify-around py-2 bg-background">
        {ITEMS.map(({ icon: Icon, label, to }) => {
          const active = tabRootFor(pathname) === to;
          return (
            <Link
              key={label}
              to={to}
              onClick={(e) => handleTab(e, to)}
              className={`flex flex-col items-center justify-center gap-1 px-3 py-1.5 min-h-[44px] text-xs transition-colors ${active ? "text-primary font-bold" : "text-accent font-normal"}`}>
              
              <Icon className="h-5 w-5" />
              <span className={`tracking-wide uppercase text-sm [font-family:'VAG_Rounded_Next',_sans-serif] ${active ? "font-[1000]" : "font-normal"}`}>
                {label}
              </span>
            </Link>);

        })}
      </div>
    </div>);

}
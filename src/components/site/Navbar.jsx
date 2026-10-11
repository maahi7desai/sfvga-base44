import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Bell, User } from "lucide-react";
import Logo from "./Logo";

const NAV = [
{ label: "Home", to: "/" },
{ label: "Events", to: "/events" },
{ label: "Members", to: "/members" },
{ label: "Contact", to: "/contact" },
{ label: "More", to: "/more" }];


const NOTIFICATIONS = [
{ title: "Sanskriti Divas", text: "Join us September 13th for our flagship cultural night.", date: "Aug 28" },
{ title: "Navratri Passes", text: "Pass bookings are now open for Navratri & Garba.", date: "Aug 20" },
{ title: "Membership 2026", text: "Membership renewal is now open for 2026.", date: "Aug 15" }];


export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-background/90 backdrop-blur-md border-b border-primary/15">
      <nav className="mx-auto max-w-[1200px] px-5 sm:px-8 h-20 flex items-center justify-between bg-background">
        <Link to="/" className="flex items-center gap-2 sm:gap-3 min-w-0">
          <Logo className="h-10 w-10 sm:h-12 sm:w-12 object-contain flex-shrink-0" />
          <span className="flex flex-col leading-tight min-w-0">
            <span className="text-primary leading-tight text-xl sm:text-xl [font-family:'VAG_Rounded_Next',_sans-serif] font-[1000]">San Fernando Valley Gujarati Association</span>
            

            
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {NAV.map((item) =>
          <Link
            key={item.label}
            to={item.to}
            className="font-body text-sm font-medium text-foreground/75 hover:text-primary transition-colors">
            
              {item.label}
            </Link>
          )}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <div className="relative">
            <button
              onClick={() => setNotifOpen((v) => !v)}
              className="relative p-2 rounded-full hover:bg-primary/10 transition-colors"
              aria-label="Notifications">
              
              <Bell className="h-5 w-5 text-foreground/70" />
              <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-accent" />
            </button>
            {notifOpen &&
            <>
                <div className="fixed inset-0 z-40" onClick={() => setNotifOpen(false)} />
                <div className="absolute right-0 mt-2 w-80 bg-card border border-border rounded-lg shadow-xl z-50 overflow-hidden">
                  <div className="px-4 py-3 border-b border-border bg-muted/50">
                    <p className="font-body text-sm font-semibold">Notifications</p>
                  </div>
                  <ul className="max-h-80 overflow-y-auto">
                    {NOTIFICATIONS.map((n) =>
                  <li
                    key={n.title}
                    className="px-4 py-3 border-b border-border/50 hover:bg-muted/30">
                    
                        <div className="flex justify-between items-start">
                          <p className="font-body text-sm font-medium text-foreground">
                            {n.title}
                          </p>
                          <span className="font-body text-[10px] text-foreground/50">
                            {n.date}
                          </span>
                        </div>
                        <p className="font-body text-xs text-foreground/70 mt-1">{n.text}</p>
                      </li>
                  )}
                  </ul>
                  <Link
                  to="/events"
                  onClick={() => setNotifOpen(false)}
                  className="block px-4 py-3 text-center font-body text-xs font-medium text-primary hover:bg-muted/30">
                  
                    View all updates
                  </Link>
                </div>
              </>
            }
          </div>
          





          
        </div>

        <button
          className="md:hidden p-2 -mr-2 text-foreground"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu">
          
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open &&
      <div className="md:hidden bg-background border-t border-primary/10">
          <div className="px-5 py-4 flex flex-col">
            {NAV.map((item) =>
          <Link
            key={item.label}
            to={item.to}
            onClick={() => setOpen(false)}
            className="py-3 font-body text-base font-medium text-foreground/80 border-b border-primary/5">
            
                {item.label}
              </Link>
          )}
            <Link
            to="/login"
            onClick={() => setOpen(false)}
            className="mt-4 bg-primary text-primary-foreground font-body text-sm font-medium px-6 py-3 rounded-full text-center">
            
              Member Login
            </Link>
          </div>
        </div>
      }
    </header>);

}
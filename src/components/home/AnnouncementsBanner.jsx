import React from "react";
import { Link } from "react-router-dom";
import { Bell } from "lucide-react";

const UPDATES = [
  {
    icon: Bell,
    title: "Membership 2026 Open",
    text: "Renew your membership or invite new members to join our vibrant community.",
    badge: "Reminder",
  },
];

export default function AnnouncementsBanner() {
  return (
    <section className="bg-muted/40 pattern-diya">
      {/* Announcements */}
      <div className="mx-auto max-w-[700px] px-5 sm:px-8">
        <div className="mb-8">
          <p className="font-body text-xs tracking-[0.2em] uppercase text-primary mb-2">
            Latest Updates 
          </p>
          <div className="h-px w-16 bg-accent mb-4" />
          {UPDATES.map((u) => (
            <div>
              <h3 className="font-display text-lg text-foreground mb-2">{u.title}</h3>
              <p className="font-body text-sm text-foreground/70 leading-relaxed">
                {u.text}
              </p>
            </div>
          ))}
            <Link to="/members" className="inline-flex items-center gap-2 font-body text-sm font-medium text-accent hover:text-primary transition-colors">
              Renew Membership →
            </Link>
          </div>
        </div>
    </section>
  );
}
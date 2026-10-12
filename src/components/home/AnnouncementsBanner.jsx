import React from "react";
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
    <section className="py-24 bg-muted/40 pattern-diya">
      {/* Welcome */}
      <div className="mx-auto max-w-[700px] px-5 sm:px-8">
        <div className="mb-8">
          <p className="font-body text-xs tracking-[0.2em] uppercase text-accent mb-2">
            Home
          </p>
          <div className="h-px w-16 bg-accent mb-4" />
            <h4 className="font-display text-foreground mb-3">
              One place for the gatherings, people, and traditions that hold our community together across the San Fernando Valley. 
            </h4>
          </div>
      </div>
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="text-center mb-10">
          <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-3">
            Latest Updates
          </p>
        </div>
        <div className="flex justify-center">
          <div className="w-full max-w-md">
            {UPDATES.map((u) => (
              <div
                key={u.title}
                className="bg-card border border-border rounded-lg p-6 flex flex-col"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-primary/10 text-primary">
                    <u.icon className="h-5 w-5" />
                  </div>
                  <span className="font-body text-[10px] tracking-wide uppercase font-medium text-accent bg-accent/10 px-2.5 py-1 rounded-full">
                    {u.badge}
                  </span>
                </div>
                <h3 className="font-display text-lg text-foreground mb-2">{u.title}</h3>
                <p className="font-body text-sm text-foreground/70 leading-relaxed">
                  {u.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
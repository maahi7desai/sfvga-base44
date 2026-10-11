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
    <section className="py-16 md:py-20 bg-muted/40 pattern-diya">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="text-center mb-10">
          <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-3">
            Latest Updates
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground text-balance">
            Announcements &amp; Community News
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
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
    </section>
  );
}
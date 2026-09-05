import React from "react";
import HorizonRule from "@/components/site/HorizonRule";
import { ShieldCheck, Users, FileText, Handshake } from "lucide-react";

const TRUST = [
  { icon: ShieldCheck, label: "501(c)(3) since 1978" },
  { icon: Users, label: "Volunteer-led board" },
  { icon: FileText, label: "Audited annual finances" },
  { icon: Handshake, label: "30+ regional partners" },
];

export default function AllianceSection() {
  return (
    <section id="alliance" className="py-24 md:py-32 bg-secondary/40">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-16 items-start">
          <div className="md:col-span-3">
            <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-accent mb-4">
              B · The Alliance Portal
            </p>
            <h2 className="font-display text-5xl md:text-6xl text-foreground leading-[1.02] text-balance">
              Institutional authority, earned over four decades of stewardship.
            </h2>
            <HorizonRule className="my-8" />
            <p className="text-lg text-foreground/75 leading-relaxed max-w-xl">
              The San Fernando Valley Green Alliance unites residents, scientists,
              and civic leaders around a single conviction: that a thriving urban
              ecology is a human right. We operate with radical transparency —
              every dollar and decision is public.
            </p>
          </div>

          <div className="md:col-span-2 grid grid-cols-2 gap-4">
            {TRUST.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="glass rounded-sm p-5 flex flex-col gap-3"
              >
                <Icon className="h-6 w-6 text-primary" />
                <span className="font-mono text-[11px] tracking-[0.16em] uppercase text-foreground/80 leading-snug">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
import React from "react";
import { Image } from "@/components/ui/image";
import { ArrowDown } from "lucide-react";

const HERO_IMG =
  "https://media.base44.com/images/public/6a9ca2f5e4aceea1e9c56b3b/69478f26a_generated_9f498639.jpg";

export default function Hero() {
  return (
    <section className="relative min-h-[94vh] flex flex-col justify-end overflow-hidden -mt-16">
      <div className="absolute inset-0">
        <Image
          src={HERO_IMG}
          alt="Indigenous San Fernando Valley flora at golden hour"
          className="w-full h-full"
          fittingType="fill"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/55 via-foreground/25 to-background" />
      </div>

      <div className="relative mx-auto max-w-[1400px] w-full px-5 sm:px-8 pb-16 md:pb-24">
        <p className="font-mono text-[11px] tracking-[0.32em] uppercase text-background/70 mb-8 animate-bloom">
          San Fernando Valley Green Alliance · Est. 1978
        </p>

        <h1 className="font-display text-background leading-[0.95] text-balance animate-bloom">
          <span className="block text-[14vw] md:text-[8.5vw] font-light tracking-tight">
            The Valley
          </span>
          <span className="block text-[14vw] md:text-[8.5vw] italic font-normal tracking-tight -mt-2 md:-mt-4">
            is breathing.
          </span>
        </h1>

        <div className="mt-10 max-w-xl flex flex-col sm:flex-row sm:items-end gap-6 justify-between">
          <p className="text-base md:text-lg text-background/85 leading-relaxed">
            A living advocacy engine restoring the green heart of the San Fernando
            Valley — one garden, tree, and policy at a time.
          </p>
          <a
            href="#impact"
            className="inline-flex items-center gap-2 font-mono text-[12px] tracking-[0.2em] uppercase text-background border-b border-background/40 pb-1 hover:border-accent hover:text-accent transition-colors shrink-0"
          >
            See the impact
            <ArrowDown className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-px horizon-rule" />
    </section>
  );
}
import React from "react";
import { Image } from "@/components/ui/image";
import HorizonRule from "@/components/site/HorizonRule";
import { ArrowUpRight } from "lucide-react";

const PROJECTS = [
  {
    title: "Community Gardens",
    tag: "Impact Engine",
    desc: "Neighborhood plots transforming vacant lots into food sovereignty and neighborhood roots.",
    stat: "47 active gardens",
    img: "https://media.base44.com/images/public/6a9ca2f5e4aceea1e9c56b3b/604956ae9_generated_85c1ea38.jpg",
    span: "md:col-span-3",
  },
  {
    title: "Water Conservation",
    tag: "Impact Engine",
    desc: "Greywater systems, rain capture, and turf replacement rebates across the Valley.",
    stat: "3.2M gallons saved",
    img: "https://media.base44.com/images/public/6a9ca2f5e4aceea1e9c56b3b/ff2e2e0ff_generated_c30de4f2.jpg",
    span: "md:col-span-2",
  },
  {
    title: "Urban Forestry",
    tag: "Impact Engine",
    desc: "Native canopy restoration cooling our streets and cleaning our air.",
    stat: "12,400 trees planted",
    img: "https://media.base44.com/images/public/6a9ca2f5e4aceea1e9c56b3b/3f3711d99_generated_19550ce9.jpg",
    span: "md:col-span-2",
  },
  {
    title: "Policy Advocacy",
    tag: "Impact Engine",
    desc: "Driving environmental legislation at City Hall and the Coastal Commission.",
    stat: "9 ordinances shaped",
    img: "https://media.base44.com/images/public/6a9ca2f5e4aceea1e9c56b3b/69478f26a_generated_9f498639.jpg",
    span: "md:col-span-3",
  },
];

export default function ImpactSection() {
  return (
    <section id="impact" className="py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-accent mb-4">
              A · The Impact Engine
            </p>
            <h2 className="font-display text-5xl md:text-6xl text-foreground leading-[1.02] max-w-2xl text-balance">
              Visual proof of the green being added to the valley.
            </h2>
          </div>
          <p className="text-foreground/70 max-w-sm leading-relaxed">
            Every project is measured, mapped, and open. Track the living progress
            of our environmental work in real time.
          </p>
        </div>

        <HorizonRule className="mb-10" />

        <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
          {PROJECTS.map((p) => (
            <article
              key={p.title}
              className={`group relative overflow-hidden rounded-sm bg-card ${p.span}`}
            >
              <div className="aspect-[16/10] md:aspect-auto md:h-full min-h-[260px] w-full">
                <Image
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full transition-transform duration-700 group-hover:scale-105"
                  fittingType="fill"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/30 to-transparent" />
              <div className="absolute inset-0 p-6 md:p-7 flex flex-col justify-end">
                <span className="font-mono text-[10px] tracking-[0.24em] uppercase text-accent mb-2">
                  {p.tag}
                </span>
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-2xl md:text-3xl text-background leading-tight">
                    {p.title}
                  </h3>
                  <ArrowUpRight className="h-5 w-5 text-background/70 shrink-0 mt-1 group-hover:text-accent transition-colors" />
                </div>
                <p className="text-sm text-background/75 mt-2 max-w-md leading-relaxed">
                  {p.desc}
                </p>
                <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-background/90 mt-4">
                  {p.stat}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
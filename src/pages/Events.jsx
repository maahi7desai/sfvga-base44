import React from "react";
import { Image } from "@/components/ui/image";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const EVENTS = [
  {
    name: "Sanskriti Divas",
    date: "September 13, 2026",
    desc: "A grand celebration of Gujarati culture, music, and heritage. Members and guests gather for an evening of performances, traditional food, and community.",
    img: "https://media.base44.com/images/public/6a9ca2f5e4aceea1e9c56b3b/f7a1e1efd_generated_image.png",
  },
  {
    name: "Sanskriti thi Startup sudhi",
    date: "September 13, 2026",
    desc: "From culture to innovation — cultural festivities paired with youth and startup showcases for the next generation.",
    img: "https://media.base44.com/images/public/6a9ca2f5e4aceea1e9c56b3b/06a0c2f32_generated_image.png",
  },
  {
    name: "Navratri",
    date: "October 17, 2026",
    desc: "Nine nights of Garba and Dandiya Raas. Join hundreds of members dancing under the stars in traditional festive attire.",
    img: "https://media.base44.com/images/public/6a9ca2f5e4aceea1e9c56b3b/06a0c2f32_generated_image.png",
  },
  {
    name: "Dipotsav (Diwali)",
    date: "November 14, 2026",
    desc: "The festival of lights — diyas, dhol, rangoli, and community feasts celebrating the triumph of light.",
    img: "https://media.base44.com/images/public/6a9ca2f5e4aceea1e9c56b3b/f25ab77b3_generated_image.png",
  },
];

export default function Events() {
  return (
    <div className="pt-20">
      <section className="bg-secondary text-secondary-foreground py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8 text-center">
          <h1 className="font-display text-4xl md:text-6xl mb-4">Events 2026</h1>
          <p className="font-body text-lg opacity-85 max-w-2xl mx-auto">
            Join us throughout the year as we celebrate the festivals that define
            our community.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8 space-y-12">
          {EVENTS.map((e) => (
            <article
              key={e.name}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
            >
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-md">
                <Image
                  src={e.img}
                  alt={e.name}
                  className="w-full h-full"
                  fittingType="fill"
                />
              </div>
              <div>
                <p className="font-body text-sm tracking-wide uppercase text-accent font-medium mb-2">
                  {e.date}
                </p>
                <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
                  {e.name}
                </h2>
                <p className="font-body text-foreground/75 leading-relaxed mb-6">
                  {e.desc}
                </p>
                <span className="font-body text-sm text-primary font-medium">
                  Members & invited guests
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-16 bg-muted/40 text-center">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
            Want to attend our events?
          </h2>
          <p className="font-body text-foreground/70 mb-8 max-w-xl mx-auto">
            Membership is required to participate. Become a member today and join
            the celebration.
          </p>
          <Link
            to="/membership"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-body font-medium px-8 py-3.5 rounded-full hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Become a Member
          </Link>
        </div>
      </section>
    </div>
  );
}
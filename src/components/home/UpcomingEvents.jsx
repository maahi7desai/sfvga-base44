import React from "react";
import { Link } from "react-router-dom";
import { Image } from "@/components/ui/image";

const EVENTS = [
  {
    name: "Sanskriti Divas",
    date: "September 13",
    desc: "A grand celebration of Gujarati culture, music, and heritage.",
    img: "https://media.base44.com/images/public/6a9ca2f5e4aceea1e9c56b3b/f7a1e1efd_generated_image.png",
  },
  {
    name: "Sanskriti thi Startup sudhi",
    date: "September 13",
    desc: "Cultural festivities leading into youth and startup showcases.",
    img: "https://media.base44.com/images/public/6a9ca2f5e4aceea1e9c56b3b/06a0c2f32_generated_image.png",
  },
  {
    name: "Navratri",
    date: "October 17",
    desc: "Nine nights of Garba and Dandiya Raas under the stars.",
    img: "https://media.base44.com/images/public/6a9ca2f5e4aceea1e9c56b3b/06a0c2f32_generated_image.png",
  },
  {
    name: "Dipotsav (Diwali)",
    date: "November 14",
    desc: "The festival of lights — diyas, dhol, and community feasts.",
    img: "https://media.base44.com/images/public/6a9ca2f5e4aceea1e9c56b3b/f25ab77b3_generated_image.png",
  },
];

export default function UpcomingEvents() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="text-center mb-14">
          <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-3">
            Upcoming Events
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground text-balance">
            Celebrate with us throughout the year
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {EVENTS.map((e) => (
            <article
              key={e.name}
              className="group rounded-lg overflow-hidden bg-card border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={e.img}
                  alt={e.name}
                  className="w-full h-full transition-transform duration-500 group-hover:scale-105"
                  fittingType="fill"
                />
              </div>
              <div className="p-5">
                <p className="font-body text-xs tracking-wide uppercase text-accent font-medium mb-1">
                  {e.date}
                </p>
                <h3 className="font-display text-xl text-foreground mb-2">{e.name}</h3>
                <p className="font-body text-sm text-foreground/70 leading-relaxed">
                  {e.desc}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/events"
            className="inline-flex items-center gap-2 font-body text-sm font-medium text-primary hover:text-accent transition-colors"
          >
            View all events
          </Link>
        </div>
      </div>
    </section>
  );
}
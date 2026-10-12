import React from "react";
import Hero from "@/components/home/Hero";
import UpcomingEvents from "@/components/home/UpcomingEvents";
import AnnouncementsBanner from "@/components/home/AnnouncementsBanner";
export default function Home() {
  return (
    <div className="pt-20">
      <section className="py-4 bg-primary text-primary-foreground text-center">
        <div className="mx-auto max-w-[700px] px-5 sm:px-8">
          <p className="font-body opacity-90 mb-8 max-w-xl mx-auto">
            Current members are requested to be active and invite new members to
            enjoy the benefits of our culture, food, festivals, friendship, and fun.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://sfvga.org/membership"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground font-body font-medium px-8 py-3.5 rounded-full hover:bg-background transition-colors">
              New Member Application
            </a>
          </div>
        </div>
      </section>

      <Hero />
      <UpcomingEvents />
      <AnnouncementsBanner />
    </div>
  );
}
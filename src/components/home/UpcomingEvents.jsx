import React from "react";
import { Link } from "react-router-dom";
import { Image } from "@/components/ui/image";
import { CalendarDays, MapPin } from "lucide-react";

const EVENTS = [
  {
    name: "Diwali Dipotsav",
    date: "November 14, 2026",
    location: "Chatsworth, CA",
    title: "Join for one of our flagship event to celebrate Diwali with the community.",
    desc: "The festival of lights — diyas, dhol, rangoli, and community feasts.",
    img: "https://media.base44.com/images/public/6a9ca2f5e4aceea1e9c56b3b/8d8ad67f5_generated_image.png"
  }];


export default function UpcomingEvents() {
  return (
    <section className="py-24 bg-muted/40 pattern-diya">
      {/* Welcome */}
      <div className="mx-auto max-w-[700px] px-5 sm:px-8">
        <div className="mb-8">
          <p className="font-body text-xs tracking-[0.2em] uppercase text-foreground/40 mb-2">
            Home
          </p>
          <div className="h-px w-16 bg-accent mb-4" />
            <h4 className="font-display text-foreground mb-3">
              One place for the gatherings, people, and traditions that hold our community together across the San Fernando Valley. 
            </h4>
          </div>
          <div className="aspect-[4/3] w-full overflow-hidden">
            <Image
              src="https://images.squarespace-cdn.com/content/v1/6182dd41e5fdbc615031592a/1636077374216-2T3UGHN9QPDYT0KDUMRD/image-asset.jpeg"
              className="w-full h-full transition-transform duration-500 group-hover:scale-105"
              fittingType="fill" />
          </div>
      </div>

      {/* Next Event */}
      <div className="mx-auto py-8 max-w-[700px] px-5 sm:px-8">
        <div className="mb-8">
          <p className="font-body text-xs tracking-[0.2em] uppercase text-foreground/40 mb-2">
            Upcoming Event
          </p>
          <div className="h-px w-16 bg-accent mb-4" />
            {EVENTS.map((e) =>
                <div className="p-5 flex flex-col flex-1">
                  <h4 className="font-display text-foreground mb-3">
                    {e.title}
                  </h4>
                  <div className="flex items-center gap-2 text-xs text-foreground/60 mb-2">
                    <CalendarDays className="h-3.5 w-3.5" />
                    <span className="font-body">{e.date}</span>
                  </div>
                  <h3 className="font-display text-xl text-foreground mb-2">{e.name}</h3>
                  <div className="flex items-center gap-1.5 text-xs text-foreground/60 mb-3">
                    <MapPin className="h-3.5 w-3.5" />
                    <span className="font-body">{e.location}</span>
                  </div>
                  <div className="aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={e.img}
                      alt={e.name}
                      className="w-full h-full transition-transform duration-500 group-hover:scale-105"
                      fittingType="fill" />
                  </div>
                  <p className="font-body text-sm text-foreground/70 leading-relaxed mb-5">
                    {e.desc}
                  </p>
                  <Link
                    to="/events"
                    className="mt-auto inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-body text-sm font-medium px-5 py-2.5 rounded-full hover:bg-accent hover:text-accent-foreground transition-colors">

                    Register / RSVP
                  </Link>
                </div>
            )}
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            to="/events"
            className="inline-flex items-center gap-2 font-body text-sm font-medium text-primary hover:text-accent transition-colors">

            View all events →
          </Link>
        </div>
    </section>);

}
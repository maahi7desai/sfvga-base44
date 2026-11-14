import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Image } from "@/components/ui/image";
import { Calendar, MapPin } from "lucide-react";
import { getEvent } from "@/data/events";

export default function EventDetail() {
  const { id } = useParams();
  const event = getEvent(id);

  useEffect(() => {
    if (event) return;
    const meta = document.createElement("meta");
    meta.name = "prerender-status-code";
    meta.content = "404";
    document.head.appendChild(meta);
    return () => {
      document.head.removeChild(meta);
    };
  }, [event]);

  if (!event) {
    return (
      <div className="pt-4">
        <div className="mx-auto max-w-[700px] px-5 sm:px-8 py-16 text-center">
          <h1 className="font-display text-3xl text-foreground mb-3">Event not found</h1>
          <p className="font-body text-sm text-foreground/70">
            This event is no longer listed. Browse all upcoming events instead.
          </p>
        </div>
      </div>);

  }

  return (
    <div className="pt-4">
      <section className="py-4">
        <div className="mx-auto max-w-[700px] px-5 sm:px-8">
          <p className="font-body text-xs tracking-[0.2em] uppercase text-primary font-bold mb-2">
            {event.tag}
          </p>
          <div className="h-px w-16 bg-primary/80 mb-4" />
          <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4">{event.name}</h1>
          <div className="flex flex-wrap items-center gap-4 text-xs text-foreground/60 mb-6">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" />
              <span className="font-body">{event.next}</span>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" />
              <span className="font-body">San Fernando Valley</span>
            </span>
          </div>
          <div className="aspect-[4/3] w-full overflow-hidden rounded-lg">
            <Image
              src={event.img}
              alt={event.name}
              className="w-full h-full"
              fittingType="fill" />
            
          </div>
          <p className="font-body text-sm text-foreground/70 leading-relaxed mt-6">{event.desc}</p>
        </div>
      </section>
    </div>);

}
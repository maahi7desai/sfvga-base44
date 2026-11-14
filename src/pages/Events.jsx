import React from "react";
import { Link } from "react-router-dom";
import { Image } from "@/components/ui/image";
import { Calendar, ArrowRight } from "lucide-react";
import { EVENTS } from "@/data/events";

export default function Events() {
  return (
    <div>
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {EVENTS.map((e) =>
            <article
              key={e.slug}
              className="group rounded-lg overflow-hidden bg-card border border-border shadow-sm hover:shadow-lg transition-shadow flex flex-col">
              
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <Image
                  src={e.img}
                  alt={e.name}
                  className="w-full h-full transition-transform duration-500 group-hover:scale-105"
                  fittingType="fill" />
                
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <p className="font-body text-xs tracking-wide uppercase text-primary font-medium mb-1.5">
                    {e.tag}
                  </p>
                  <h2 className="font-display text-2xl text-foreground mb-2">{e.name}</h2>
                  <div className="flex items-center gap-1.5 text-xs text-foreground/60 mb-3">
                    <Calendar className="h-3.5 w-3.5" />
                    <span className="font-body">{e.next}</span>
                  </div>
                  <p className="font-body text-sm text-foreground/70 leading-relaxed mb-5">
                    {e.desc}
                  </p>
                  <Link
                  to={`/events/${e.slug}`}
                  className="mt-auto inline-flex items-center gap-2 font-body text-sm font-medium text-accent hover:text-primary transition-colors min-h-[44px]">
                  
                    View Details
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            )}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/40 text-center">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8"></div>
      </section>
    </div>);

}
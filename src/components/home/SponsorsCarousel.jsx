import React from "react";

const SPONSORS = [
"Anand Bazaar",
"Swad Indian Cuisine",
"Rajdhani Sweets",
"Patel Brothers",
"Surati Farsan",
"Jay Bhavani Caterers",
"Laxmi Jewelers",
"Sona Travel"];


export default function SponsorsCarousel() {
  return (
    <section className="py-14 md:py-16 border-t border-border hidden">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 text-center">
        <p className="font-body text-sm tracking-[0.2em] uppercase text-foreground/50 mb-8 hidden">
          Community Sponsors &amp; Supporters
        </p>
        <div className="flex overflow-x-auto gap-4 md:gap-6 pb-2 snap-x snap-mandatory">
          {SPONSORS.map((name) =>
          <div
            key={name}
            className="flex-shrink-0 snap-center bg-card border border-border rounded-lg px-8 py-5 min-w-[180px] flex items-center justify-center hidden">
            
              <span className="font-display text-lg text-foreground/60 whitespace-nowrap">
                {name}
              </span>
            </div>
          )}
        </div>
      </div>
    </section>);

}
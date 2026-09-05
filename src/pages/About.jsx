import React from "react";

export default function About() {
  return (
    <div className="pt-20">
      <section className="bg-secondary text-secondary-foreground py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8 text-center">
          <h1 className="font-display text-4xl md:text-6xl mb-4">About SFVGA</h1>
          <p className="font-body text-lg opacity-85 max-w-2xl mx-auto">
            San Fernando Valley Gujarati Association — Preserve Heritage &amp;
            Promote Culture since 1984.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[800px] px-5 sm:px-8">
          <div className="font-body text-foreground/80 leading-relaxed space-y-5">
            <p>
              The San Fernando Valley Gujarati Association (SFVGA) was founded in
              1984 to bring together Gujarati families across Southern California.
              For over four decades, we have served as a cultural home — a place to
              celebrate our festivals, share our food, pass on our traditions, and
              build lasting friendships.
            </p>
            <p>
              From Sanskriti Divas to Navratri and Dipotsav (Diwali), our calendar
              is filled with events that connect generations. We are a volunteer-run,
              member-driven association: every family contributes to at least one
              event committee each year, making SFVGA a true community effort.
            </p>
            <p>
              Our mission is simple — to preserve our heritage and promote our
              culture, so that the next generation grows up knowing the joy of
              Garba, the warmth of a community feast, and the pride of being
              Gujarati.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
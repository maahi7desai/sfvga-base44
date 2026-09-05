import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function MissionStatement() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-[1000px] px-5 sm:px-8 text-center">
        <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-4">
          Our Heritage
        </p>
        <h2 className="font-display text-4xl md:text-5xl text-foreground leading-tight mb-6 text-balance">
          Serving the San Fernando Valley since 1978
        </h2>
        <p className="font-body text-lg text-foreground/75 leading-relaxed mb-5 max-w-3xl mx-auto">
          We, friendly and accomplished Gujarati families living in the San
          Fernando Valley of Southern California, have created and are proud of
          our extended family — our SFVGA.
        </p>
        <p className="font-body text-base text-foreground/70 leading-relaxed max-w-3xl mx-auto">
          Our mission is to preserve the cultural, social, and religious values,
          promote the educational and recreational experiences, and preserve the
          heritage of the Gujarati people living in Southern California.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 font-body text-sm font-medium text-primary hover:text-accent transition-colors mt-8"
        >
          Learn more about us
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
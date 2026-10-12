import React from "react";
import { Image } from "@/components/ui/image";
import { Link } from "react-router-dom";

const ABOUT_IMG =
  "https://media.base44.com/images/public/6a9ca2f5e4aceea1e9c56b3b/f7a1e1efd_generated_image.png";

export default function AboutTeaser() {
  return (
    <section className="py-20 md:py-28 bg-muted/40 pattern-diya">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-md order-2 md:order-1">
            <Image
              src={ABOUT_IMG}
              alt="SFVGA community cultural performance"
              className="w-full h-full"
              fittingType="fill"
            />
          </div>
          <div className="order-1 md:order-2">
            <p className="font-body text-sm tracking-[0.2em] uppercase text-primary font-bold mb-3">
              Welcome to SFVGA
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground leading-tight mb-6 text-balance">
              We are proud of our extended family.
            </h2>
            <p className="font-body text-foreground/75 leading-relaxed mb-4">
              We, friendly and accomplished Gujarati families living in the San
              Fernando Valley of Southern California, have created and are proud of
              our extended family — our SFVGA.
            </p>
            <p className="font-body text-foreground/75 leading-relaxed mb-8">
              Our mission is to preserve the cultural, social, and religious values
              and promote the educational, recreational, and heritage of the Gujarati
              people living in Southern California — since 1978.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 font-body text-sm font-medium text-accent hover:text-primary transition-colors"
            >
              Learn more about us →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
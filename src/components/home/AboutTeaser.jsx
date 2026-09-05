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
            <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-3">
              Welcome to SFVGA
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground leading-tight mb-6 text-balance">
              A community bound by culture, food, and friendship.
            </h2>
            <p className="font-body text-foreground/75 leading-relaxed mb-4">
              Founded in 1984, the San Fernando Valley Gujarati Association brings
              together Gujarati families across Southern California to celebrate
              our shared heritage. Through festivals, cultural programs, and
              community service, we keep our traditions alive for the next
              generation.
            </p>
            <p className="font-body text-foreground/75 leading-relaxed mb-8">
              From Sanskriti Divas to Navratri and Dipotsav, every gathering is a
              chance to reconnect, volunteer, and enjoy the richness of Gujarati
              culture together.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 font-body text-sm font-medium text-primary hover:text-accent transition-colors"
            >
              Learn more about us →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
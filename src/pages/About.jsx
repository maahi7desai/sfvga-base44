import React from "react";
import { Link } from "react-router-dom";
import { Image } from "@/components/ui/image";
import { ArrowRight } from "lucide-react";

const ABOUT_IMG =
  "https://media.base44.com/images/public/6a9ca2f5e4aceea1e9c56b3b/f7a1e1efd_generated_image.png";

const MISSION_POINTS = [
  "Celebrate our Indian festivals such as Navratri and Diwali.",
  "Organize family get-togethers with outings such as Camping, Boat Trip, and Beach Party.",
  "Sharpen ours and our children's sportsmanship by organizing Sports Day, Kite Flying, and Hiking.",
  "Show our talent by organizing and performing in Cultural Events.",
  "Satisfy our needs for Indian Music, Drama, and Literature by inviting accomplished artists.",
  "Enjoy our Western orientation by celebrating Valentine's Day and Mother's Day.",
  "Meet, talk, socialize, make friends, contribute to worthy causes, and have fun.",
  "Facilitate our children and us to become lifelong friends.",
  "Last but not least, enjoy delicious Indian food at our events.",
];

export default function About() {
  return (
    <div className="pt-20">
      <section className="bg-secondary text-secondary-foreground py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8 text-center">
          <h1 className="font-display text-4xl md:text-6xl mb-4">About Us</h1>
          <p className="font-body text-lg opacity-85 max-w-3xl mx-auto">
            We, friendly and accomplished Gujarati families living in the San
            Fernando Valley of Southern California, have created and are proud of
            our extended family — our SFVGA!!
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-md order-2 md:order-1">
              <Image
                src={ABOUT_IMG}
                alt="SFVGA community cultural celebration"
                className="w-full h-full"
                fittingType="fill"
              />
            </div>
            <div className="order-1 md:order-2">
              <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-3">
                Our Mission
              </p>
              <h2 className="font-display text-3xl md:text-4xl text-foreground leading-tight mb-6 text-balance">
                Preserve heritage. Promote culture.
              </h2>
              <p className="font-body text-foreground/75 leading-relaxed">
                Our mission is to preserve the cultural, social, and religious
                values, promote the educational and recreational experiences, and
                preserve the heritage of the Gujarati people living in Southern
                California.
              </p>
              <p className="font-body text-foreground/75 leading-relaxed mt-4">
                A Southern California non-profit organization since 1978.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/40 pattern-diya">
        <div className="mx-auto max-w-[900px] px-5 sm:px-8">
          <h2 className="font-display text-3xl md:text-4xl text-foreground text-center mb-12">
            How SFVGA Accomplishes Its Mission
          </h2>
          <ul className="space-y-4">
            {MISSION_POINTS.map((point) => (
              <li
                key={point}
                className="flex items-start gap-3 font-body text-foreground/80 leading-relaxed"
              >
                <span className="mt-2 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 bg-primary text-primary-foreground text-center">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <h2 className="font-display text-3xl md:text-4xl mb-4">
            We invite you to become a part of our extended family!
          </h2>
          <Link
            to="/membership"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-body font-medium px-8 py-3.5 rounded-full hover:bg-background transition-colors"
          >
            Join Us
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
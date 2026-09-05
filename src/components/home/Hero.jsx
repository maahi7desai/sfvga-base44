import React from "react";
import { Link } from "react-router-dom";
import { Image } from "@/components/ui/image";
import Logo from "@/components/site/Logo";
import { ArrowRight } from "lucide-react";

const HERO_IMG =
  "https://media.base44.com/images/public/6a9ca2f5e4aceea1e9c56b3b/f5de301f4_generated_image.png";

export default function Hero() {
  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden -mt-20 pt-20">
      <div className="absolute inset-0">
        <Image
          src={HERO_IMG}
          alt="Dandiya Raas dancers celebrating Gujarati culture"
          className="w-full h-full"
          fittingType="fill"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/85 via-secondary/55 to-secondary/20" />
      </div>

      <div className="relative mx-auto max-w-[1200px] w-full px-5 sm:px-8 py-24">
        <div className="max-w-xl text-secondary-foreground animate-fade-in">
          <Logo className="h-24 w-24 object-contain mb-6 drop-shadow-lg" />
          <h1 className="font-display text-5xl md:text-6xl leading-[1.05] text-balance">
            San Fernando Valley
            <span className="block text-accent">Gujarati Association</span>
          </h1>
          <p className="font-body text-lg md:text-xl mt-4 opacity-90 tracking-wide">
            A Southern California non-profit organization, since 1978
          </p>
          <p className="font-body text-base mt-6 opacity-85 max-w-md leading-relaxed">
            Join a vibrant Gujarati community in the heart of SoCal — celebrating
            our festivals, food, and friendship for over four decades.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              to="/events"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-body font-medium px-7 py-3.5 rounded-full hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              View Events
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/members"
              className="inline-flex items-center justify-center gap-2 border border-secondary-foreground/50 text-secondary-foreground font-body font-medium px-7 py-3.5 rounded-full hover:bg-secondary-foreground/10 transition-colors"
            >
              Become a Member
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
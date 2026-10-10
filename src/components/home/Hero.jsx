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
          fittingType="fill" />
        
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/85 via-secondary/55 to-secondary/20" />
      </div>

      <div className="relative mx-auto max-w-[1200px] w-full px-5 sm:px-8 py-24">
        



























        
      </div>
    </section>);

}
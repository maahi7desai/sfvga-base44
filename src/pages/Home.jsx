import React from "react";
import Hero from "@/components/home/Hero";
import StatsBand from "@/components/home/StatsBand";
import ImpactSection from "@/components/home/ImpactSection";
import AllianceSection from "@/components/home/AllianceSection";
import ActivateSection from "@/components/home/ActivateSection";
import IntelSection from "@/components/home/IntelSection";
import DonateCTA from "@/components/home/DonateCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBand />
      <ImpactSection />
      <AllianceSection />
      <ActivateSection />
      <IntelSection />
      <DonateCTA />
    </>
  );
}
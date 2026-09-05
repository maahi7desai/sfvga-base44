import React from "react";
import Hero from "@/components/home/Hero";
import UpcomingEvents from "@/components/home/UpcomingEvents";
import AboutTeaser from "@/components/home/AboutTeaser";
import MembershipTeaser from "@/components/home/MembershipTeaser";
import HowItWorks from "@/components/home/HowItWorks";

export default function Home() {
  return (
    <>
      <Hero />
      <UpcomingEvents />
      <AboutTeaser />
      <MembershipTeaser />
      <HowItWorks />
    </>
  );
}
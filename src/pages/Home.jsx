import React from "react";
import Hero from "@/components/home/Hero";
import MissionStatement from "@/components/home/MissionStatement";
import UpcomingEvents from "@/components/home/UpcomingEvents";
import AnnouncementsBanner from "@/components/home/AnnouncementsBanner";
import SponsorsCarousel from "@/components/home/SponsorsCarousel";
import RotatingBackground from "@/components/home/RotatingBackground";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <RotatingBackground />
      <div className="relative z-10">
        <Hero />
        <MissionStatement />
        <UpcomingEvents />
        <AnnouncementsBanner />
        <SponsorsCarousel />
      </div>
    </div>
  );
}
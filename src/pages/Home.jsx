import React from "react";
import Hero from "@/components/home/Hero";
import MissionStatement from "@/components/home/MissionStatement";
import UpcomingEvents from "@/components/home/UpcomingEvents";
import AnnouncementsBanner from "@/components/home/AnnouncementsBanner";
import SponsorsCarousel from "@/components/home/SponsorsCarousel";

export default function Home() {
  return (
    <>
      <Hero />
      <MissionStatement />
      <UpcomingEvents />
      <AnnouncementsBanner />
      <SponsorsCarousel />
    </>
  );
}
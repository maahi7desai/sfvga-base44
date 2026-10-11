import React from "react";
import Hero from "@/components/home/Hero";
import UpcomingEvents from "@/components/home/UpcomingEvents";
import AnnouncementsBanner from "@/components/home/AnnouncementsBanner";
export default function Home() {
  return (
    <>
      <Hero />
      <UpcomingEvents />
      <AnnouncementsBanner />
    </>
  );
}
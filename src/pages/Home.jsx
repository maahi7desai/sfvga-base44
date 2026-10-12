import React from "react";
import { Image } from "@/components/ui/image";
import UpcomingEvents from "@/components/home/UpcomingEvents";
import AnnouncementsBanner from "@/components/home/AnnouncementsBanner";
export default function Home() {
  return (
    <div className="pt-20">
      <section className="py-4 bg-primary text-primary-foreground text-center">
        <div className="mx-auto max-w-[700px] px-5 sm:px-8">
          <p className="font-body opacity-90 mb-8 max-w-xl mx-auto">
            One place for the gatherings, people, and traditions that hold our community together across the San Fernando Valley. 
          </p>
          <div className="aspect-[4/3] w-full overflow-hidden">
            <Image
              src="https://images.squarespace-cdn.com/content/v1/6182dd41e5fdbc615031592a/1636077374216-2T3UGHN9QPDYT0KDUMRD/image-asset.jpeg"
              className="w-full h-full transition-transform duration-500 group-hover:scale-105"
              fittingType="fill" />
          </div>
        </div>
      </section>
      <UpcomingEvents />
      <AnnouncementsBanner />
    </div>
  );
}
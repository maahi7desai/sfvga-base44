import React from "react";
import { Image } from "@/components/ui/image";
import { Link } from "react-router-dom";
import { Bell, CalendarDays, MapPin } from "lucide-react";
import AnnouncementsBanner from "@/components/home/AnnouncementsBanner";

const UPDATES = [
  {
    icon: Bell,
    title: "Membership 2026 Open",
    text: "Renew your membership or invite new members to join our vibrant community.",
    badge: "Reminder",
  },
];
const EVENTS = [
  {
    name: "Diwali Dipotsav",
    date: "November 14, 2026",
    location: "Chatsworth, CA",
    title: "Join for one of our flagship event to celebrate Diwali with the community.",
    desc: "The festival of lights — diyas, dhol, rangoli, and community feasts.",
    img: "https://media.base44.com/images/public/6a9ca2f5e4aceea1e9c56b3b/8d8ad67f5_generated_image.png"
  }];

export default function Home() {
  return (
    <div className="pt-20">
      {/* Welcome */}
      <section className="py-4 bg-muted/80 text-center">
        <div className="mx-auto max-w-[700px] px-5 sm:px-8">
          <p className="font-body opacity-90 mb-4 max-w-xl mx-auto">
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
      {/* Next Event */}
      <section className="py-4 bg-primary/5 pattern-diya">
        <div className="mx-auto max-w-[700px] px-5 sm:px-8">
          <div className="mb-8">
            <p className="font-body text-xs tracking-[0.2em] uppercase text-primary mb-2">
              Upcoming Event
            </p>
            <div className="h-px w-16 bg-primary/80 mb-4" />
            {EVENTS.map((e) =>
              <div>
                <h4 className="font-display text-foreground mb-3">
                  {e.name}
                </h4>
                <p className="flex items-center gap-2 text-xs text-foreground/60 mb-2">
                  {e.title}
                </p>
                <div className="flex items-center gap-2 text-xs text-foreground/60 mb-2">
                  <CalendarDays className="h-3.5 w-3.5" />
                  <span className="font-body">{e.date}</span>
                  <MapPin className="h-3.5 w-3.5" />
                  <span className="font-body">{e.location}</span>
                </div>
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={e.img}
                    alt={e.name}
                    className="w-full h-full transition-transform duration-500 group-hover:scale-105"
                    fittingType="fill" />
                </div>
              </div>
            )}
          </div>
          <Link to="/events" className="inline-flex items-center gap-2 font-body text-sm font-medium text-accent hover:text-primary transition-colors">
            Register & View Details →
          </Link>
        </div>
      </section>

      {/* Announcements */}
      <section className="py-4 bg-muted/60 pattern-diya">
      <div className="mx-auto max-w-[700px] px-5 sm:px-8">
        <div className="mb-8">
          <p className="font-body text-xs tracking-[0.2em] uppercase text-primary mb-2">
            Latest Updates 
          </p>
          <div className="h-px w-16 bg-primary/80 mb-4" />
          {UPDATES.map((u) => (
            <div>
              <h3 className="font-display text-lg text-foreground mb-2">{u.title}</h3>
              <p className="font-body text-sm text-foreground/70 leading-relaxed">
                {u.text}
              </p>
            </div>
          ))}
            <Link to="/members" className="inline-flex items-center gap-2 font-body text-sm font-medium text-accent hover:text-primary transition-colors">
              Renew Membership →
            </Link>
          </div>
        </div>
    </section>
    </div>
  );
}
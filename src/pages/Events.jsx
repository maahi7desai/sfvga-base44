import React from "react";
import { Link } from "react-router-dom";
import { Image } from "@/components/ui/image";
import { Calendar, MapPin, ArrowRight } from "lucide-react";

const CATEGORIES = [
{
  name: "Sanskriti Divas",
  tag: "Flagship Cultural Night",
  desc: "Our signature evening of Gujarati music, dance, and heritage. Members and guests gather for performances, traditional food, and community celebration.",
  img: "https://media.base44.com/images/public/6a9ca2f5e4aceea1e9c56b3b/a26f38386_generated_image.png",
  next: "September 13, 2026"
},
{
  name: "Navratri & Garba",
  tag: "Schedule • Venue Rules • Pass Bookings",
  desc: "Nine nights of Garba and Dandiya Raas. Join hundreds of members dancing under the stars in traditional festive attire. Pass bookings now open.",
  img: "https://media.base44.com/images/public/6a9ca2f5e4aceea1e9c56b3b/fcc94dcaa_generated_image.png",
  next: "October 17, 2026"
},
{
  name: "Dipotsav / Diwali",
  tag: "Festival of Lights",
  desc: "The festival of lights — diyas, dhol, rangoli, and community feasts celebrating the triumph of light over darkness.",
  img: "https://media.base44.com/images/public/6a9ca2f5e4aceea1e9c56b3b/8d8ad67f5_generated_image.png",
  next: "November 14, 2026"
},
{
  name: "Rammat-Gammat",
  tag: "Sports • Games • Outdoor Picnics",
  desc: "Sports Day, kite flying, hiking, and family picnics — sharpening sportsmanship for all ages with outdoor fun and games.",
  img: "https://media.base44.com/images/public/6a9ca2f5e4aceea1e9c56b3b/fcc94dcaa_generated_image.png",
  next: "Spring 2026"
},
{
  name: "Chalo Manek Chowk",
  tag: "Food • Music • Street-Style Socials",
  desc: "A taste of home — street-style food, music, and social gatherings reminiscent of Ahmedabad's famous Manek Chowk.",
  img: "https://media.base44.com/images/public/6a9ca2f5e4aceea1e9c56b3b/a26f38386_generated_image.png",
  next: "Summer 2026"
},
{
  name: "Event Media Gallery",
  tag: "Photos • Recap Videos",
  desc: "Relive the magic — browse past event photos and recap videos from our community celebrations over the years.",
  img: "https://media.base44.com/images/public/6a9ca2f5e4aceea1e9c56b3b/8d8ad67f5_generated_image.png",
  next: "Past Events"
}];


export default function Events() {
  return (
    <div className="pt-20">
      <section className="bg-secondary text-secondary-foreground py-16 md:py-24 hidden">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8 text-center">
          <h1 className="font-display text-4xl md:text-6xl mb-4">Events 2026</h1>
          <p className="font-body text-lg opacity-85 max-w-2xl mx-auto">
            Join us throughout the year as we celebrate the festivals and
            gatherings that define our community.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CATEGORIES.map((e) =>
            <article
              key={e.name}
              className="group rounded-lg overflow-hidden bg-card border border-border shadow-sm hover:shadow-lg transition-shadow flex flex-col">
              
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <Image
                  src={e.img}
                  alt={e.name}
                  className="w-full h-full transition-transform duration-500 group-hover:scale-105"
                  fittingType="fill" />
                
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <p className="font-body text-[11px] tracking-wide uppercase text-accent font-medium mb-1.5">
                    {e.tag}
                  </p>
                  <h2 className="font-display text-2xl text-foreground mb-2">{e.name}</h2>
                  <div className="flex items-center gap-1.5 text-xs text-foreground/60 mb-3">
                    <Calendar className="h-3.5 w-3.5" />
                    <span className="font-body">{e.next}</span>
                  </div>
                  <p className="font-body text-sm text-foreground/70 leading-relaxed mb-5">
                    {e.desc}
                  </p>
                  <Link
                  to="/events"
                  className="mt-auto inline-flex items-center gap-2 font-body text-sm font-medium text-primary hover:text-accent transition-colors">
                  
                    View Details
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            )}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/40 text-center">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
            Want to attend our events?
          </h2>
          <p className="font-body text-foreground/70 mb-8 max-w-xl mx-auto">
            Membership is required to participate. Become a member today and join
            the celebration.
          </p>
          <Link
            to="/members"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-body font-medium px-8 py-3.5 rounded-full hover:bg-accent hover:text-accent-foreground transition-colors">
            
            Become a Member
          </Link>
        </div>
      </section>
    </div>);

}
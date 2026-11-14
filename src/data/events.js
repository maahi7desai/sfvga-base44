export const EVENTS = [
{
  slug: "sanskriti-divas",
  name: "Sanskriti Divas",
  tag: "Flagship Cultural Night",
  desc: "Our signature evening of Gujarati music, dance, and heritage. Members and guests gather for performances, traditional food, and community celebration.",
  img: "https://media.base44.com/images/public/6a9ca2f5e4aceea1e9c56b3b/a26f38386_generated_image.png",
  next: "September 13, 2026"
},
{
  slug: "navratri-garba",
  name: "Navratri & Garba",
  tag: "Schedule • Venue Rules • Pass Bookings",
  desc: "Nine nights of Garba and Dandiya Raas. Join hundreds of members dancing under the stars in traditional festive attire. Pass bookings now open.",
  img: "https://media.base44.com/images/public/6a9ca2f5e4aceea1e9c56b3b/fcc94dcaa_generated_image.png",
  next: "October 17, 2026"
},
{
  slug: "dipotsav-diwali",
  name: "Dipotsav / Diwali",
  tag: "Festival of Lights",
  desc: "The festival of lights — diyas, dhol, rangoli, and community feasts celebrating the triumph of light over darkness.",
  img: "https://media.base44.com/images/public/6a9ca2f5e4aceea1e9c56b3b/8d8ad67f5_generated_image.png",
  next: "November 14, 2026"
},
{
  slug: "rammat-gammat",
  name: "Rammat-Gammat",
  tag: "Sports • Games • Outdoor Picnics",
  desc: "Sports Day, kite flying, hiking, and family picnics — sharpening sportsmanship for all ages with outdoor fun and games.",
  img: "https://media.base44.com/images/public/6a9ca2f5e4aceea1e9c56b3b/9c038fad4_generated_image.png",
  next: "Spring 2026"
},
{
  slug: "chalo-manek-chowk",
  name: "Chalo Manek Chowk",
  tag: "Food • Music • Street-Style Socials",
  desc: "A taste of home — street-style food, music, and social gatherings reminiscent of Ahmedabad's famous Manek Chowk.",
  img: "https://media.base44.com/images/public/6a9ca2f5e4aceea1e9c56b3b/fc5c7eb38_generated_image.png",
  next: "Summer 2026"
},
{
  slug: "event-media-gallery",
  name: "Event Media Gallery",
  tag: "Photos • Recap Videos",
  desc: "Relive the magic — browse past event photos and recap videos from our community celebrations over the years.",
  img: "https://media.base44.com/images/public/6a9ca2f5e4aceea1e9c56b3b/aaef9c9c3_generated_image.png",
  next: "Past Events"
}];

export const getEvent = (slug) => EVENTS.find((e) => e.slug === slug);
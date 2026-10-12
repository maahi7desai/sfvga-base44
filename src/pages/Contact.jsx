import React, { useState } from "react";
import { Image } from "@/components/ui/image";
import { Mail, MapPin, Phone, Send, HelpCircle, ExternalLink } from "lucide-react";

const BOARD = [
{ role: "President", name: "Jaymeen Desai", img: "https://images.squarespace-cdn.com/content/v1/6182dd41e5fdbc615031592a/65ec64e6-bb01-4c9a-b080-75a8576e182d/WhatsApp+Image+2026-01-11+at+8.59.10+PM.jpeg" },
{ role: "Vice President", name: "Monika Patel", img: "https://images.squarespace-cdn.com/content/v1/6182dd41e5fdbc615031592a/9cd10f67-c5b8-4e93-a30b-a5db8f92303a/WhatsApp+Image+2026-01-11+at+8.55.58+PM.jpeg" },
{ role: "Secretary", name: "Bhavin Shah", img: "https://images.squarespace-cdn.com/content/v1/6182dd41e5fdbc615031592a/2cd5cdbd-d702-4dc7-8398-f7731d798ecf/WhatsApp+Image+2026-01-11+at+8.57.06+PM.jpeg" },
{ role: "Treasurer", name: "Mayank Shah", img: "https://images.squarespace-cdn.com/content/v1/6182dd41e5fdbc615031592a/f2447547-4095-48a0-964f-0715ad790187/WhatsApp+Image+2025-01-21+at+2.49.44+AM.jpeg" },
{ role: "Youth Champion", name: "Pinal Kantawala", img: "https://images.squarespace-cdn.com/content/v1/6182dd41e5fdbc615031592a/a2c19622-2da2-48c3-98f5-61432a20ce6b/WhatsApp+Image+2026-01-11+at+10.47.52+PM.jpeg" },
{ role: "Director", name: "Ami Dave", img: "https://images.squarespace-cdn.com/content/v1/6182dd41e5fdbc615031592a/40ec5886-304c-45c4-96b2-ab8600eb3e5d/WhatsApp+Image+2025-05-07+at+11.27.40+AM.jpeg" },
{ role: "Director", name: "Bhakti Desai", img: "https://images.squarespace-cdn.com/content/v1/6182dd41e5fdbc615031592a/a73b9e08-af65-4723-8f0a-8548a73c438b/WhatsApp+Image+2026-01-12+at+5.13.52+AM.jpeg" }];

const EXTENDED_LEADERSHIP = [
{ role: "Webmaster", name: "Namrata Shah", img: "https://media.base44.com/images/public/6a9ca2f5e4aceea1e9c56b3b/8b6708e28_Screenshot2026-10-11at35801PM.png" },
{ role: "Honorary CPA", name: "Mike Taylor", img: "https://media.base44.com/images/public/6a9ca2f5e4aceea1e9c56b3b/0c7a83221_Screenshot2026-10-11at35810PM.png" },
{ role: "Honorary CPA", name: "Vaishali Mehta", img: "https://media.base44.com/images/public/6a9ca2f5e4aceea1e9c56b3b/8eb5cad69_Screenshot2026-10-11at35817PM.png" },
{ role: "App Developer", name: "Rahil Shah", img: "https://media.base44.com/images/public/6a9ca2f5e4aceea1e9c56b3b/5a82078b5_Screenshot2026-10-11at41024PM.png" },
{ role: "App Developer", name: "Maahi Desai", img: "https://media.base44.com/images/public/6a9ca2f5e4aceea1e9c56b3b/eb0731c9a_IMG_1113.JPG" },
{ role: "App Developer", name: "Ansh Mehta", img: "" }];


const FAQS = [
{
  q: "How can I become a member?",
  a: "SFVGA membership is available to anyone who is referred by an existing member. Review the by-laws, fill out the membership form, and send dues via Zelle to sfvgabod@gmail.com."
},
{
  q: "What are the membership dues?",
  a: "New Family Membership is $200, Family Renewal is $140, Age 75+ Renewal is $100, and Individual/Student Renewal is $75 per calendar year."
},
{
  q: "When is membership valid?",
  a: "Membership is valid for the current calendar year. You can join any time during the year. Forms postmarked after Nov 30th require an additional $25, and no forms are accepted after Dec 31st."
},
{
  q: "Can I bring guests to events?",
  a: "Events are for members and invited guests. Membership is required to participate in most events."
},
{
  q: "How are events organized?",
  a: "Seven board members are elected annually. They finalize 8–12 events and form committees of 5–10 members each. Every member family joins at least one committee."
}];

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="pt-20">
      {/* Board of Directors */}
      <section className="py-12 md:py-20 bg-muted/40 pattern-diya">
        <div className="mx-auto max-w-[700px] px-5 sm:px-8">
          <div className="mb-8">
            <p className="font-body text-xs tracking-[0.2em] uppercase text-primary mb-2">
              Leadership
            </p>
            <div className="h-px w-12 bg-primary/80 mb-4" />
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-3">
              Board of Directors
            </h2>
            <p className="font-body text-sm text-foreground/60 leading-relaxed">
              The volunteers who plan the year, steward the funds, and answer the
              phone at 9pm.
            </p>
          </div>
          <div className="divide-y divide-border">
            {BOARD.map((b) =>
              <div key={b.role + b.name} className="flex items-center gap-4 py-5">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-primary p-0.5">
                  <Image
                    src={b.img}
                    alt={b.name}
                    className="w-full h-full rounded-full"
                    fittingType="fill" />
                </div>
                <div>
                  <p className="font-body text-xs tracking-[0.15em] uppercase text-primary mb-0.5">
                    {b.role}
                  </p>
                  <p className="font-display text-lg md:text-xl text-foreground">
                    {b.name}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Extended Leadership */}
      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-[700px] px-5 sm:px-8">
          <div className="mb-8">
            <p className="font-body text-xs tracking-[0.2em] uppercase text-primary mb-2">
              Champions
            </p>
            <div className="h-px w-12 bg-primary/80 mb-4" />
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-3">
              Extended Leadership
            </h2>
            <p className="font-body text-sm text-foreground/60 leading-relaxed">
              Dedicated community members who support SFVGA's mission through
              their specialized roles.
            </p>
          </div>
          <div className="divide-y divide-border">
            {EXTENDED_LEADERSHIP.map((b) =>
              <div key={b.role + b.name} className="flex items-center gap-4 py-5">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-primary p-0.5">
                  <Image
                    src={b.img}
                    alt={b.name}
                    className="w-full h-full rounded-full"
                    fittingType="fill" />
                </div>
                <div>
                  <p className="font-body text-xs tracking-[0.15em] uppercase text-primary mb-0.5">
                    {b.role}
                  </p>
                  <p className="font-display text-lg md:text-xl text-foreground">
                    {b.name}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact info + form */}
      <section className="py-12 md:py-20 bg-muted/40 pattern-diya">
        <div className="mx-auto max-w-[700px] px-5 sm:px-8">
          <div className="mb-8">
            <p className="font-body text-xs tracking-[0.2em] uppercase text-primary mb-2">
              Contact
            </p>
            <div className="h-px w-12 bg-primary/80 mb-4" />
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-3">
              Get in Touch
            </h2>
            <p className="font-body text-sm text-foreground/60 leading-relaxed">
              For membership &amp; general inquiries.
            </p>
          </div>
          {sent ? (
            <div className="bg-card border border-border rounded-lg p-8 text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4">
                <Send className="h-6 w-6" />
              </div>
              <h3 className="font-display text-2xl text-foreground mb-2">Thank you!</h3>
              <p className="font-body text-sm text-foreground/70">
                Your message has been received. We'll get back to you shortly.
              </p>
              <button
                onClick={() => setSent(false)}
                className="mt-6 font-body text-sm font-medium text-accent hover:text-primary">
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-card border border-border rounded-lg p-8 space-y-5">
              <div>
                <label className="font-body text-sm font-medium text-foreground block mb-1.5">
                  Name
                </label>
                <input
                  required
                  type="text"
                  className="w-full rounded-md border border-input bg-background px-4 py-2.5 font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
              <div>
                <label className="font-body text-sm font-medium text-foreground block mb-1.5">
                  Email
                </label>
                <input
                  required
                  type="email"
                  className="w-full rounded-md border border-input bg-background px-4 py-2.5 font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
              <div>
                <label className="font-body text-sm font-medium text-foreground block mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full rounded-md border border-input bg-background px-4 py-2.5 font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
              <div>
                <label className="font-body text-sm font-medium text-foreground block mb-1.5">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  className="w-full rounded-md border border-input bg-background px-4 py-2.5 font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-body font-medium px-6 py-3 rounded-full hover:bg-accent hover:text-accent-foreground transition-colors">
                <Send className="h-4 w-4" />
                Send Message
              </button>
            </form>
          )}
        </div>
      </section>

      {/* FAQs */}
      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-[700px] px-5 sm:px-8">
          <div className="mb-8">
            <p className="font-body text-xs tracking-[0.2em] uppercase text-primary mb-2">
              FAQs
            </p>
            <div className="h-px w-12 bg-primary/80 mb-4" />
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-3">
              Common Questions
            </h2>
          </div>
          <div className="space-y-4">
            {FAQS.map((f) =>
              <div key={f.q} className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-body font-medium text-foreground mb-2">{f.q}</h3>
                <p className="font-body text-sm text-foreground/70 leading-relaxed">{f.a}</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
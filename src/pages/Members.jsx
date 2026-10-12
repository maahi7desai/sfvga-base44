import React from "react";
import { Image } from "@/components/ui/image";
import { Link } from "react-router-dom";
import { UserCircle, RefreshCw, Heart, BookOpen, GraduationCap, ExternalLink } from "lucide-react";

const PLANS = [
  { name: "New Family Membership", price: "$200", note: "For new families joining SFVGA" },
  { name: "Family Membership Renewal", price: "$140", note: "Annual renewal for existing families" },
  { name: "Age 75+ Membership Renewal", price: "$100", note: "For members aged 75 and above" },
  { name: "Individual/Student Renewal", price: "$75", note: "For individual members" }
];
const DASHBOARD = [
  {
    icon: UserCircle,
    title: "Member Profile",
    desc: "Manage your account details, view membership status, and update family information.",
    cta: "Access Profile",
    to: "/login"
  },
  {
    icon: RefreshCw,
    title: "Membership Renewal",
    desc: "Review the terms and conditions and renew your membership online.",
    cta: "Renew Membership",
    to: "/renew"
  },
  {
    icon: Heart,
    title: "Youth & Volunteer Portal",
    desc: "Sign up for youth initiatives and volunteer for event committees.",
    cta: "Get Involved",
    to: "/login"
  },
  {
    icon: BookOpen,
    title: "Community Directory",
    desc: "Connect with fellow members through our member-only networking directory.",
    cta: "View Directory",
    to: "/login"
  }];


export default function Members() {
  return (
    <div className="pt-20">
      {/* Welcome */}
      <section className="py-4 bg-primary/5 pattern-diya">
        <div className="mx-auto max-w-[700px] px-5 sm:px-8">
          <p className="font-body text-xs tracking-[0.2em] uppercase text-primary mb-2">
            Membership
          </p>
          <div className="h-px w-16 bg-primary/80 mb-4" />
          <p className="flex text-sm text-foreground mb-2">
            Current members are requested to be active and invite new members to
            enjoy the benefits of our culture, food, festivals, friendship, and fun.
          </p>
          <p className="flex text-sm text-foreground mb-2">
            Membership annual Dues preferred payment method is Zelle to{" "}
            <span className="font-semibold text-primary bg-accent/15 px-1.5 py-0.5 rounded">
              sfvgabod@gmail.com
            </span>
            .
          </p>
          <p className="flex items-center gap-2 text-sm text-foreground mb-2">
            Zelle membership dues based on type below.
          </p>
          <ul className="mt-3 space-y-1.5">
            {PLANS.map((p) =>
              <li key={p.name} className="font-body text-sm text-foreground flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span><span className="font-medium">{p.price}</span> - {p.name}</span>
              </li>
            )}
          </ul>
        </div>
      </section>
      <section className="py-4 bg-primary text-primary-foreground text-center">
        <div className="mx-auto max-w-[700px] px-5 sm:px-8">
          <div className="flex flex-row gap-4 justify-center">
            <a
              href="https://sfvga.org/membership"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground font-body font-medium px-8 py-3.5 rounded-full hover:bg-background transition-colors">
              New Member Application
            </a>
            <Link
              to="/renew"
              className="inline-flex items-center justify-center gap-2 border border-primary-foreground/50 text-primary-foreground font-body font-medium px-8 py-3.5 rounded-full hover:bg-primary-foreground/10 transition-colors">
              Renew Membership
            </Link>
          </div>
        </div>
      </section>

      {/* Member Resources */}
      <section className="py-12 md:py-20 bg-muted/40 pattern-diya">
        <div className="mx-auto max-w-[700px] px-5 sm:px-8">
          <div className="mb-8">
            <p className="font-body text-xs tracking-[0.2em] uppercase text-primary mb-2">
              Member Resources
            </p>
            <div className="h-px w-16 bg-primary/80 mb-4" />
            <p className="font-body text-sm text-foreground/60 leading-relaxed">
              Manage your membership, get involved, and connect with the community.
            </p>
          </div>
          <div className="divide-y divide-border">
            {DASHBOARD.map((d) =>
              <div key={d.title} className="flex items-start gap-4 py-5">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary flex-shrink-0">
                  <d.icon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-lg md:text-xl text-foreground mb-1">{d.title}</h3>
                  <p className="font-body text-sm text-foreground/70 leading-relaxed mb-2">
                    {d.desc}
                  </p>
                  <Link
                    to={d.to}
                    className="inline-flex items-center gap-2 font-body text-sm font-medium text-accent hover:text-primary transition-colors">
                    {d.cta} →
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Youth Corner */}
      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-[700px] px-5 sm:px-8">
          <div className="mb-8">
            <p className="font-body text-xs tracking-[0.2em] uppercase text-primary mb-2">
              Youth Corner
            </p>
            <div className="h-px w-16 bg-primary/80 mb-4" />
            <p className="font-body text-sm text-foreground/60 leading-relaxed">
              SFVGA's youth initiatives build leadership, community service, and life skills.
            </p>
          </div>
          <div className="space-y-5">
            <div className="bg-card border border-border rounded-lg overflow-hidden flex flex-col">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src="https://images.squarespace-cdn.com/content/v1/6182dd41e5fdbc615031592a/020cd21f-9848-4317-aea3-8f4bf9fb04c4/IMG_1849.jpg"
                  alt="SFVGA youth CPR training"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-display text-xl text-foreground mb-2">CPR Training</h3>
                <p className="font-body text-sm text-foreground/70 leading-relaxed mb-4">
                  CPR training organized by SFVGA, equipping our youth with life-saving skills.
                </p>
                <a
                  href="https://photos.app.goo.gl/6acBJLs3ZWgcmQgm8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-2 font-body text-sm font-medium text-accent hover:text-primary transition-colors"
                >
                  CPR Training Pictures
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
            <div className="bg-card border border-border rounded-lg overflow-hidden flex flex-col">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src="https://images.squarespace-cdn.com/content/v1/6182dd41e5fdbc615031592a/5f9a1512-d0c4-4a69-aab2-195c39fd221f/CPRFULL.jpg"
                  alt="SFVGA volunteer hours"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-display text-xl text-foreground mb-2">Volunteer Hours</h3>
                <p className="font-body text-sm text-foreground/70 leading-relaxed mb-4">
                  Track community service hours contributed by SFVGA youth members.
                </p>
                <a
                  href="https://docs.google.com/spreadsheets/d/1ta7e9CjXyIITVmewgA1Ft4Ez7Js-UKHkbDdKLUV72nQ/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-2 font-body text-sm font-medium text-accent hover:text-primary transition-colors"
                >
                  Review Volunteer Hours Log
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
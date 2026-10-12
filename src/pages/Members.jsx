import React from "react";
import { Link } from "react-router-dom";
import { Users, UserCircle, RefreshCw, Heart, BookOpen, GraduationCap, ExternalLink } from "lucide-react";

const PLANS = [
{ name: "New Family Membership", price: "$200", note: "For new families joining SFVGA" },
{ name: "Family Membership Renewal", price: "$140", note: "Annual renewal for existing families" },
{ name: "Age 75+ Membership Renewal", price: "$100", note: "For members aged 75 and above" },
{ name: "Individual Membership Renewal", price: "$75", note: "For individual members" },
{ name: "Student Membership Renewal", price: "$75", note: "With a valid student ID" }];


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
      {/* Join or Renew */}
      <section className="py-16 md:py-24 bg-muted/40 pattern-diya">
        <div className="mx-auto max-w-[1000px] px-5 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-lg p-8 flex flex-col">
              <h3 className="font-display text-2xl text-foreground mb-3">New Members</h3>
              <p className="font-body text-sm text-foreground/70 leading-relaxed mb-6">
                New members can apply using our membership application form on the
                SFVGA website. Please fill the form completely and wait for approval
                before sending membership fees.
              </p>
              <a
                href="https://sfvga.org/membership"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-body font-medium px-6 py-3 rounded-full hover:bg-accent hover:text-accent-foreground transition-colors">
                
                Apply on SFVGA.org →
              </a>
            </div>
            <div className="bg-card border border-border rounded-lg p-8 flex flex-col">
              <h3 className="font-display text-2xl text-foreground mb-3">Renewing Members</h3>
              <p className="font-body text-sm text-foreground/70 leading-relaxed mb-6">
                Already a member? Renew your membership online by reviewing the terms
                and submitting your renewal request.
              </p>
              <Link
                to="/renew"
                className="mt-auto inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-body font-medium px-6 py-3 rounded-full hover:bg-accent hover:text-accent-foreground transition-colors">
                
                Renew Online →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Types */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <h2 className="font-display text-3xl md:text-4xl text-foreground text-center mb-4">
            Membership Types &amp; Annual Dues
          </h2>
          <p className="font-body text-foreground/70 text-center mb-12 max-w-xl mx-auto">
            Preferred payment method: Zelle to sfvgabod@gmail.com
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PLANS.map((p) =>
            <div
              key={p.name}
              className="bg-card border border-border rounded-lg p-7 flex flex-col">
              
                <p className="font-body text-xs text-foreground/60 mb-2">{p.note}</p>
                <p className="font-display text-4xl text-primary mb-2">{p.price}</p>
                <h3 className="font-body text-base font-medium text-foreground">
                  {p.name}
                </h3>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Member Dashboard Components */}
      <section className="py-16 md:py-24 bg-muted/40">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <h2 className="font-display text-3xl md:text-4xl text-foreground text-center mb-4">
            Member Resources
          </h2>
          <p className="font-body text-foreground/70 text-center mb-12 max-w-xl mx-auto">
            Manage your membership, get involved, and connect with the community.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {DASHBOARD.map((d) =>
            <div
              key={d.title}
              className="bg-card border border-border rounded-lg p-7 flex items-start gap-5">
              
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary flex-shrink-0">
                  <d.icon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl text-foreground mb-2">{d.title}</h3>
                  <p className="font-body text-sm text-foreground/70 leading-relaxed mb-4">
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
      <section className="py-16 md:py-24 bg-muted/40 pattern-diya">
        <div className="mx-auto max-w-[1000px] px-5 sm:px-8">
          <div className="flex items-center gap-3 mb-3 justify-center">
            <GraduationCap className="h-7 w-7 text-primary" />
            <h2 className="font-display text-3xl md:text-4xl text-foreground">
              Youth Corner
            </h2>
          </div>
          <p className="font-body text-foreground/70 text-center mb-12 max-w-xl mx-auto">
            SFVGA's youth initiatives build leadership, community service, and life skills.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

      <section className="py-16 bg-primary text-primary-foreground text-center">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <h2 className="font-display text-3xl md:text-4xl mb-4">
            Ready to join the SFVGA family?
          </h2>
          <p className="font-body opacity-90 mb-8 max-w-xl mx-auto">
            Current members are requested to be active and invite new members to
            enjoy the benefits of our culture, food, festivals, friendship, and fun.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
    </div>);

}
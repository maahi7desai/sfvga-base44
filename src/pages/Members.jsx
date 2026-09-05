import React from "react";
import { Link } from "react-router-dom";
import { FileText, FileCheck, CreditCard, Users, UserCircle, RefreshCw, Heart, BookOpen } from "lucide-react";

const PLANS = [
  { name: "New Family Membership", price: "$200", note: "For new families joining SFVGA" },
  { name: "Family Membership Renewal", price: "$140", note: "Annual renewal for existing families" },
  { name: "Age 75+ Membership Renewal", price: "$100", note: "For members aged 75 and above" },
  { name: "Individual Membership Renewal", price: "$75", note: "For individual members" },
  { name: "Student Membership Renewal", price: "$75", note: "With a valid student ID" },
];

const STEPS = [
  {
    icon: FileText,
    title: "Review & Accept",
    desc: "Review the Association By-Laws and accept the terms.",
  },
  {
    icon: FileCheck,
    title: "Fill the Form",
    desc: "Complete the SFVGA Membership Application Form (new and returning members).",
  },
  {
    icon: CreditCard,
    title: "Pay Dues via Zelle",
    desc: "Send membership dues to sfvgabod@gmail.com through Zelle in your online banking.",
  },
];

const DASHBOARD = [
  {
    icon: UserCircle,
    title: "Member Profile",
    desc: "Manage your account details, view membership status, and update family information.",
    cta: "Access Profile",
  },
  {
    icon: RefreshCw,
    title: "Renewal & Signup",
    desc: "Renew your membership or sign up new members with our online payment gateway.",
    cta: "Renew Membership",
  },
  {
    icon: Heart,
    title: "Youth & Volunteer Portal",
    desc: "Sign up for youth initiatives and volunteer for event committees.",
    cta: "Get Involved",
  },
  {
    icon: BookOpen,
    title: "Community Directory",
    desc: "Connect with fellow members through our member-only networking directory.",
    cta: "View Directory",
  },
];

export default function Members() {
  return (
    <div className="pt-20">
      <section className="bg-secondary text-secondary-foreground py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8 text-center">
          <h1 className="font-display text-4xl md:text-6xl mb-4">SFVGA Membership</h1>
          <p className="font-body text-lg opacity-85 max-w-2xl mx-auto">
            Membership is available to anyone who is referred by an existing
            member. Membership is now open for 2026.
          </p>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-[1000px] px-5 sm:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6 text-balance">
            Be part of a vibrant community
          </h2>
          <p className="font-body text-foreground/75 leading-relaxed max-w-2xl mx-auto">
            Current members are requested to be active within the association and
            invite new members to have their families enjoy the benefits of our
            culture, food, festivals, friendship, and fun with us.
          </p>
        </div>
      </section>

      {/* How to become a member */}
      <section className="py-16 md:py-24 bg-muted/40 pattern-diya">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <h2 className="font-display text-3xl md:text-4xl text-foreground text-center mb-12">
            To Become a Member
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {STEPS.map((s) => (
              <div
                key={s.title}
                className="bg-card border border-border rounded-lg p-8 text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-5">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-2xl text-foreground mb-3">{s.title}</h3>
                <p className="font-body text-sm text-foreground/70 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
          <p className="font-body text-sm text-foreground/60 mt-8 text-center max-w-2xl mx-auto">
            New Members: Please completely fill the application form then wait for
            approval before sending the membership fees.
          </p>
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
            {PLANS.map((p) => (
              <div
                key={p.name}
                className="bg-card border border-border rounded-lg p-7 flex flex-col"
              >
                <p className="font-body text-xs text-foreground/60 mb-2">{p.note}</p>
                <p className="font-display text-4xl text-primary mb-2">{p.price}</p>
                <h3 className="font-body text-base font-medium text-foreground">
                  {p.name}
                </h3>
              </div>
            ))}
          </div>
          <div className="mt-10 max-w-2xl mx-auto bg-card border border-border rounded-lg p-6 text-sm text-foreground/70 space-y-2">
            <p>• For membership form/dues postmarked after Nov 30th, include an additional $25.</p>
            <p>• No forms will be accepted after Dec 31st.</p>
            <p>• Married children must obtain a separate Membership.</p>
            <p>• Unmarried children are considered part of Membership.</p>
            <p>• Parents and unmarried family members living under the same roof are part of Membership.</p>
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
            {DASHBOARD.map((d) => (
              <div
                key={d.title}
                className="bg-card border border-border rounded-lg p-7 flex items-start gap-5"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary flex-shrink-0">
                  <d.icon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl text-foreground mb-2">{d.title}</h3>
                  <p className="font-body text-sm text-foreground/70 leading-relaxed mb-4">
                    {d.desc}
                  </p>
                  <Link
                    to="/login"
                    className="inline-flex items-center gap-2 font-body text-sm font-medium text-primary hover:text-accent transition-colors"
                  >
                    {d.cta} →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How SFVGA Works */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[900px] px-5 sm:px-8">
          <div className="flex items-center gap-3 mb-6">
            <Users className="h-7 w-7 text-primary" />
            <h2 className="font-display text-3xl md:text-4xl text-foreground">
              How SFVGA Works
            </h2>
          </div>
          <div className="font-body text-foreground/75 leading-relaxed space-y-4">
            <p>
              At the end of every year at the general meeting, we elect or nominate
              seven board members. These board members finalize about 8 to 12 events
              and the budget for the events for the coming year.
            </p>
            <p>
              The board creates committees of members for these events. Depending on
              the total number of members and events, there can be 5 to 10 members in
              each committee. Each SFVGA member family becomes part of at least one
              committee.
            </p>
            <p>
              The committees are responsible to organize and manage their assigned
              event. This way every family gets a chance to host and work alongside
              other committee members for one event, and attend and enjoy the remaining
              events in the year. The board provides help and liaison to each event
              committee.
            </p>
            <p>
              SFVGA membership is available to anyone who is referred by an existing
              member. You can become a member any time of the year. Membership is valid
              for the current calendar year.
            </p>
          </div>
          <p className="font-body text-sm text-foreground/60 mt-6">
            Please see the By-Laws for full details.
          </p>
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
          <a
            href="mailto:sfvgabod@gmail.com"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-body font-medium px-8 py-3.5 rounded-full hover:bg-background transition-colors"
          >
            Email us to apply
          </a>
        </div>
      </section>
    </div>
  );
}
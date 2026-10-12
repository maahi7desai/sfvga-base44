import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const PLANS = [
  { name: "New Family Membership", price: "$200", note: "For new families" },
  { name: "Family Membership Renewal", price: "$140", note: "Annual renewal" },
  { name: "Age 75+ Renewal", price: "$100", note: "Members aged 75+" },
  { name: "Individual Renewal", price: "$75", note: "Per individual" },
  { name: "Student Renewal", price: "$75", note: "With valid student ID" },
];

export default function MembershipTeaser() {
  return (
    <section className="py-20 md:py-28 bg-secondary text-secondary-foreground">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="text-center mb-12">
          <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-3">
            Membership
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-balance">
            Join our vibrant community
          </h2>
          <p className="font-body text-base mt-4 opacity-80 max-w-2xl mx-auto">
            Membership is open to anyone referred by an existing member, and is
            valid for the calendar year.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          {PLANS.map((p) => (
            <div
              key={p.name}
              className="bg-secondary-foreground/5 border border-secondary-foreground/15 rounded-lg p-6 text-center"
            >
              <p className="font-body text-xs opacity-70 mb-2">{p.note}</p>
              <p className="font-display text-3xl text-accent mb-2">{p.price}</p>
              <p className="font-body text-sm font-medium">{p.name}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/membership"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-body font-medium px-8 py-3.5 rounded-full hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            Become a Member
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
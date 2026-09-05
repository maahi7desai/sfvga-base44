import React, { useState } from "react";
import { Mail, MapPin, Phone, Send, Users, HelpCircle, Scale } from "lucide-react";

const BOARD = [
  { role: "President", name: "—" },
  { role: "Vice President", name: "—" },
  { role: "Secretary", name: "—" },
  { role: "Treasurer", name: "—" },
  { role: "Board Member", name: "—" },
  { role: "Board Member", name: "—" },
  { role: "Board Member", name: "—" },
];

const FAQS = [
  {
    q: "How do I become a member?",
    a: "SFVGA membership is available to anyone who is referred by an existing member. Review the by-laws, fill out the membership form, and send dues via Zelle to sfvgabod@gmail.com.",
  },
  {
    q: "What are the membership dues?",
    a: "New Family Membership is $200, Family Renewal is $140, Age 75+ Renewal is $100, and Individual/Student Renewal is $75 per calendar year.",
  },
  {
    q: "When is membership valid?",
    a: "Membership is valid for the current calendar year. You can join any time during the year. Forms postmarked after Nov 30th require an additional $25, and no forms are accepted after Dec 31st.",
  },
  {
    q: "Can I bring guests to events?",
    a: "Events are for members and invited guests. Membership is required to participate in most events.",
  },
  {
    q: "How are events organized?",
    a: "Seven board members are elected annually. They finalize 8–12 events and form committees of 5–10 members each. Every member family joins at least one committee.",
  },
];

const BYLAWS = [
  "Association By-Laws govern the structure, elections, and operations of SFVGA.",
  "Seven board members are elected or nominated at the year-end general meeting.",
  "The board finalizes events, budget, and committees for the coming year.",
  "Every member family participates in at least one event committee.",
  "Membership is by referral and valid for the calendar year.",
  "General meetings and minutes are shared with members periodically.",
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="pt-20">
      <section className="bg-secondary text-secondary-foreground py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8 text-center">
          <h1 className="font-display text-4xl md:text-6xl mb-4">Contact Us</h1>
          <p className="font-body text-lg opacity-85 max-w-2xl mx-auto">
            Have a question about membership or events? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact info + form */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-display text-3xl text-foreground mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary flex-shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-body font-medium text-foreground">Email</h3>
                    <a href="mailto:sfvgabod@gmail.com" className="font-body text-sm text-primary hover:text-accent">
                      sfvgabod@gmail.com
                    </a>
                    <p className="font-body text-xs text-foreground/60 mt-1">
                      For membership &amp; general inquiries
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary flex-shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-body font-medium text-foreground">Zelle Payments</h3>
                    <p className="font-body text-sm text-primary">sfvgabod@gmail.com</p>
                    <p className="font-body text-xs text-foreground/60 mt-1">
                      Available in your online banking
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary flex-shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-body font-medium text-foreground">Mailing Address</h3>
                    <p className="font-body text-sm text-foreground/70">Chatsworth, CA</p>
                    <p className="font-body text-xs text-foreground/60 mt-1">
                      San Fernando Valley, Southern California
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
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
                    className="mt-6 font-body text-sm font-medium text-primary hover:text-accent"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-card border border-border rounded-lg p-8 space-y-5">
                  <h2 className="font-display text-2xl text-foreground mb-2">Send a Message</h2>
                  <div>
                    <label className="font-body text-sm font-medium text-foreground block mb-1.5">
                      Name
                    </label>
                    <input
                      required
                      type="text"
                      className="w-full rounded-md border border-input bg-background px-4 py-2.5 font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <div>
                    <label className="font-body text-sm font-medium text-foreground block mb-1.5">
                      Email
                    </label>
                    <input
                      required
                      type="email"
                      className="w-full rounded-md border border-input bg-background px-4 py-2.5 font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <div>
                    <label className="font-body text-sm font-medium text-foreground block mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-md border border-input bg-background px-4 py-2.5 font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <div>
                    <label className="font-body text-sm font-medium text-foreground block mb-1.5">
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      className="w-full rounded-md border border-input bg-background px-4 py-2.5 font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-body font-medium px-6 py-3 rounded-full hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    <Send className="h-4 w-4" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Executive Board */}
      <section className="py-16 md:py-24 bg-muted/40 pattern-diya">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <div className="flex items-center gap-3 mb-3 justify-center">
            <Users className="h-7 w-7 text-primary" />
            <h2 className="font-display text-3xl md:text-4xl text-foreground">
              Executive Board &amp; Leadership
            </h2>
          </div>
          <p className="font-body text-foreground/70 text-center mb-12 max-w-xl mx-auto">
            Seven board members are elected annually at the general meeting to lead
            SFVGA and organize our events.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {BOARD.map((b) => (
              <div key={b.role} className="bg-card border border-border rounded-lg p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4 mx-auto">
                  <Users className="h-7 w-7" />
                </div>
                <p className="font-body text-xs tracking-wide uppercase text-accent font-medium mb-1">
                  {b.role}
                </p>
                <p className="font-body text-sm text-foreground/60">Committee Chair</p>
              </div>
            ))}
          </div>
          <p className="font-body text-xs text-foreground/50 text-center mt-8">
            Board member names updated annually. Contact us for current committee chairs.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[800px] px-5 sm:px-8">
          <div className="flex items-center gap-3 mb-3 justify-center">
            <HelpCircle className="h-7 w-7 text-primary" />
            <h2 className="font-display text-3xl md:text-4xl text-foreground">
              FAQs &amp; Guidelines
            </h2>
          </div>
          <p className="font-body text-foreground/70 text-center mb-12 max-w-xl mx-auto">
            Common questions regarding membership, event rules, and tickets.
          </p>
          <div className="space-y-4">
            {FAQS.map((f) => (
              <div key={f.q} className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-body font-medium text-foreground mb-2">{f.q}</h3>
                <p className="font-body text-sm text-foreground/70 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance & By-Laws */}
      <section className="py-16 md:py-24 bg-muted/40 pattern-diya">
        <div className="mx-auto max-w-[800px] px-5 sm:px-8">
          <div className="flex items-center gap-3 mb-3 justify-center">
            <Scale className="h-7 w-7 text-primary" />
            <h2 className="font-display text-3xl md:text-4xl text-foreground">
              Governance &amp; By-Laws
            </h2>
          </div>
          <p className="font-body text-foreground/70 text-center mb-12 max-w-xl mx-auto">
            Association by-laws and public meeting updates.
          </p>
          <ul className="space-y-4">
            {BYLAWS.map((point) => (
              <li
                key={point}
                className="flex items-start gap-3 font-body text-foreground/80 leading-relaxed"
              >
                <span className="mt-2 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
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

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-card border border-border rounded-lg p-8 text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-5">
              <Mail className="h-6 w-6" />
            </div>
            <h3 className="font-display text-xl text-foreground mb-2">Email</h3>
            <a
              href="mailto:sfvgabod@gmail.com"
              className="font-body text-primary hover:text-accent transition-colors"
            >
              sfvgabod@gmail.com
            </a>
            <p className="font-body text-sm text-foreground/60 mt-2">
              For membership & general inquiries
            </p>
          </div>
          <div className="bg-card border border-border rounded-lg p-8 text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-5">
              <Phone className="h-6 w-6" />
            </div>
            <h3 className="font-display text-xl text-foreground mb-2">Zelle Payments</h3>
            <p className="font-body text-primary">sfvgabod@gmail.com</p>
            <p className="font-body text-sm text-foreground/60 mt-2">
              Available in your online banking
            </p>
          </div>
          <div className="bg-card border border-border rounded-lg p-8 text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-5">
              <MapPin className="h-6 w-6" />
            </div>
            <h3 className="font-display text-xl text-foreground mb-2">Location</h3>
            <p className="font-body text-foreground/70">San Fernando Valley</p>
            <p className="font-body text-sm text-foreground/60 mt-2">
              Southern California
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
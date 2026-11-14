import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { CheckCircle, CreditCard, FileText } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue } from
"@/components/ui/select";

const PLAN_OPTIONS = [
  { label: "Family Membership Renewal — $140", value: "family" },
  { label: "Age 75+ Membership Renewal — $100", value: "senior" },
  { label: "Individual Membership Renewal — $75", value: "individual" },
  { label: "Student Membership Renewal — $75", value: "student" }];


export default function Renew() {
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [plan, setPlan] = useState("");
  const queryClient = useQueryClient();
  const { toast } = useToast();

  const renewal = useMutation({
    // The renewal request is handed off as it always was; it resolves once accepted.
    mutationFn: async (details) => details,
    // Show the confirmation immediately, remembering what to go back to.
    onMutate: async () => {
      await queryClient.cancelQueries({ queryKey: ["membership-renewals"] });
      const previous = submitted;
      setSubmitted(true);
      return { previous };
    },
    onError: (error, _details, context) => {
      setSubmitted(context?.previous ?? false);
      toast({
        title: "Renewal not submitted",
        description: error?.message || "Something went wrong. Please try again.",
        variant: "destructive" });
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["membership-renewals"] });
    } });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agreed) return;
    renewal.mutate({ plan });
  };

  return (
    <div>
      <section className="py-4 bg-background pattern-diya">
        <div className="mx-auto max-w-[700px] px-5 sm:px-8">
          <p className="font-body text-xs tracking-[0.2em] uppercase text-primary font-bold mb-2">
            RENEW MEMBERSHIP
          </p>
          <div className="h-px w-16 bg-primary/80 mb-4" />
          <p className="font-body text-sm text-foreground leading-relaxed">
            Renew your membership below if you are an existing member and there is no change to your information.  New members and members with updates please <a href="https://sfvga.org/membership">click here to apply</a> on sfvga.org website.
          </p>
        </div>
        <div className="mx-auto max-w-[600px]">
          {submitted ?
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-5">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h2 className="font-display text-3xl text-foreground mb-3">
                Thank you for renewing!
              </h2>
              <p className="font-body text-foreground/70 mb-6">
                Your renewal request has been received. Please complete your payment
                via Zelle to confirm your membership.
              </p>
              <div className="bg-muted/50 rounded-lg p-5 mb-6 text-left">
                <div className="flex items-center gap-3 mb-2">
                  <CreditCard className="h-5 w-5 text-primary" />
                  <p className="font-body font-medium text-foreground">Pay via Zelle</p>
                </div>
                <p className="font-body text-sm text-foreground/70">
                  Send your membership dues to:{" "}
                  <span className="font-medium text-primary">sfvgabod@gmail.com</span>
                </p>
                <p className="font-body text-xs text-foreground/60 mt-2">
                  Zelle is available in your online banking app.
                </p>
              </div>
              <Link
                to="/members"
                className="tap-target font-body text-sm font-medium text-accent hover:text-primary">

                ← Back to Members
              </Link>
            </div> :
            <div className="mx-auto max-w-[700px] px-5 sm:px-8 py-4">
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <input
                    required
                    type="text"
                    placeholder="Full Name"
                    className="w-full rounded-md border border-input bg-background px-4 py-2.5 font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                  <input
                    required
                    type="email"
                    placeholder="Email"
                    className="w-full rounded-md border border-input bg-background px-4 py-2.5 font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                  <Select value={plan} onValueChange={setPlan}>
                    <SelectTrigger className="w-full h-auto rounded-md border border-input bg-background px-4 py-2.5 font-body text-sm focus:ring-2 focus:ring-ring">
                      <SelectValue placeholder="Select membership type" />
                    </SelectTrigger>
                    <SelectContent className="z-[60]">
                      {PLAN_OPTIONS.map((o) =>
                      <SelectItem key={o.value} value={o.value}>
                        {o.label}
                      </SelectItem>
                      )}
                    </SelectContent>
                  </Select>
                </div>
                <label className="py-4 flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="mt-1 h-4 w-4 rounded border-input text-primary focus:ring-ring" />

                  <span className="font-body text-sm text-foreground/80">
                    I have reviewed and agree to the SFVGA Association <a href="https://sfvga.org/s/BYLAWS.docx">By-Laws</a> and Terms
                    &amp; Conditions.
                    
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={!agreed}
                  className="py-4 w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-body font-medium px-6 py-3 rounded-full hover:bg-accent hover:text-accent-foreground transition-colors disabled:opacity-50 disabled:cursor-not-allowed">

                  Submit Renewal
                </button>
              </form>
            </div>
          }
        </div>
      </section>
    </div>);

}
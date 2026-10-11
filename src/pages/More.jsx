import React from "react";
import { Link } from "react-router-dom";
import {
  Compass,
  Users,
  ClipboardList,
  Scale,
  ExternalLink,
  FileText,
} from "lucide-react";

const MISSION_POINTS = [
  "Celebrate our Indian festivals such as Navratri and Diwali.",
  "Organize family get-togethers with outings like camping, boat trips, and beach parties.",
  "Sharpen sportsmanship by organizing Sports Day, Kite Flying, and hiking.",
  "Show our talent by organizing and performing in cultural events.",
  "Satisfy our needs for Indian music, drama, and literature by inviting accomplished artists.",
  "Enjoy our Western orientation by celebrating Valentine's Day and Mother's Day.",
  "Meet, talk, socialize, make friends, contribute to worthy causes, and have fun.",
  "Facilitate our children and us to become lifelong friends.",
  "Last but not least, enjoy delicious Indian food at our events.",
];

const BOARD_ROLES = [
  {
    title: "President",
    items: [
      "Sets annual goals, ensuring events align with the mission.",
      "Oversees board effectiveness and resolves escalated issues.",
      "Serves as external representative and final decision authority.",
      "Leads strategic planning sessions and long-term vision development.",
      "Facilitates board meetings and ensures productive decision-making.",
      "Conducts annual performance review of board and committee outcomes.",
    ],
  },
  {
    title: "Vice President",
    items: [
      "Assumes duties of President when the President is unavailable.",
      "Handles disciplinary actions for non-conformance of bylaws.",
      "Sends post-event feedback and handles retrospectives as needed.",
      "Supports strategic planning and long-term organizational goals.",
      "Mentors new board members and committee leads.",
      "Facilitates collaboration across committees to ensure smooth operations.",
    ],
  },
  {
    title: "Secretary",
    items: [
      "Creates a yearly calendar of in-person and virtual meetings.",
      "Maintains official meeting minutes and governance documentation.",
      "Handles member communication for events from event chair/co-chair.",
      "Maintains and updates the organization's official records and archives.",
      "Assists in drafting official correspondence and announcements.",
      "Coordinates scheduling conflicts and ensures quorum for meetings.",
    ],
  },
  {
    title: "Treasurer",
    items: [
      "Oversees organizational budget, financial controls, and reporting.",
      "Approves event budgets and monitors financial health in AGM.",
      "Ensures compliance with non-profit financial regulations.",
      "Prepares monthly and quarterly financial statements for the board.",
      "Monitors cash flow and investment activities to ensure sustainability.",
      "Conducts periodic audits to ensure transparency and accountability.",
    ],
  },
  {
    title: "Youth Champion",
    items: [
      "Represents youth interests in planning and programming.",
      "Creates youth engagement with age-appropriate activities.",
      "Encourages youth participation and leadership development.",
      "Identifies trends and interests among youth to inform programs.",
      "Builds partnerships with schools and youth organizations.",
      "Develops mentorship opportunities connecting youth with senior members.",
      "Advocates for youth voices in board-level discussions and decisions.",
    ],
  },
  {
    title: "Innovation Catalyst",
    items: [
      "Streamlines manual processes, brings tech-driven innovation.",
      "Ensures consistent technology standards across events.",
      "Creates automation opportunities for optimal member experience.",
      "Evaluates emerging technologies for potential organizational adoption.",
      "Trains staff and volunteers on new digital tools and platforms.",
      "Collects and analyzes digital engagement metrics to improve processes.",
    ],
  },
  {
    title: "Senior Champion",
    items: [
      "Represents senior members' needs and considerations.",
      "Creates senior events that are budget and time friendly.",
      "Brings in insights and concerns, prevents mission drift.",
      "Develops wellness and educational programs for senior members.",
      "Fosters intergenerational activities to build community cohesion.",
      "Advocates for accessibility and inclusivity in all events.",
      "Monitors satisfaction and gathers feedback from senior participants regularly.",
    ],
  },
  {
    title: "Liaison",
    items: [
      "Serves as the connection between the committee and the Board.",
      "Ensures event alignment with board policies and goals.",
      "Escalates risks, approvals, and decisions to the Board.",
      "Facilitates regular communication between committees and the Board.",
      "Tracks action items from board meetings and ensures follow-up.",
      "Supports conflict resolution between committee members or departments.",
      "Assists in translating board directives into actionable plans for committees.",
    ],
  },
];

const COMMITTEE_ROLES = [
  {
    title: "Chair",
    items: [
      "Coordinates all event planning, execution, timelines, and tasks.",
      "Works with the full committee to define goals, scope, and timelines by consensus.",
      "Schedules and runs regular meetings to track progress and stay on course.",
      "Acts as the primary point of contact while promoting shared ownership.",
      "Ensures transparency through timely updates and open communication.",
    ],
  },
  {
    title: "Co-Chair",
    items: [
      "Supports the event chair and fills in as needed.",
      "Manages specific work streams (logistics, vendors, volunteers).",
      "Helps track progress and resolve operational issues.",
      "Assists in creating contingency plans for potential event challenges.",
      "Takes similar responsibility as chair and supports in case chair is unavailable.",
    ],
  },
  {
    title: "Committee Member",
    items: [
      "Executes assigned tasks (logistics, registration, setup, communications).",
      "Engages members and volunteers to support participation.",
      "Provides feedback and lessons learned after the event.",
    ],
  },
  {
    title: "Event Treasurer",
    items: [
      "Creates and manages the event budget and expense tracking.",
      "Handles payments, reimbursements, and financial reporting.",
      "Ensures expenses stay within approved limits.",
    ],
  },
];

const MINUTES = [
  { label: "2026 Q1", href: "https://sfvga.org/s/2026-Q1-Meeting-Minutes.docx", group: "Meeting Minutes" },
  { label: "2025 Jan–October", href: "https://sfvga.org/s/Meeting-Minutes-Quarterly.pdf", group: "Meeting Minutes" },
  { label: "01/13/2024", href: "https://sfvga.org/s/SFVGABOD_SMeeting01132024.pdf", group: "Meeting Minutes" },
  { label: "04/12/2024", href: "https://sfvga.org/s/2024-quarterly-meeting-minutes-april.docx", group: "Meeting Minutes" },
  { label: "07/17/2024", href: "https://sfvga.org/s/2024-Quarterly-meeting-minutes-july.docx", group: "Meeting Minutes" },
  { label: "09/18/2024", href: "https://sfvga.org/s/2024-Quarterly-meeting-minutes-Sept.docx", group: "Meeting Minutes" },
  { label: "AGM 2025", href: "https://sfvga.org/s/AGM-2025.pptx", group: "AGM" },
  { label: "AGM 2024", href: "https://sfvga.org/s/AGM-2024-Meeting-Minutes.pdf", group: "AGM" },
  { label: "AGM 2023", href: "https://sfvga.org/s/AGM-2023.pptx", group: "AGM" },
  { label: "AGM 2022", href: "https://sfvga.org/s/AGM-2022.pptx", group: "AGM" },
];

const SECTIONS = [
  { id: "mission", label: "Mission", icon: Compass },
  { id: "roles", label: "Roles", icon: Users },
  { id: "minutes", label: "Meeting Minutes", icon: ClipboardList },
  { id: "bylaws", label: "By Laws", icon: Scale },
];

export default function More() {
  const minutesGroups = [...new Set(MINUTES.map((m) => m.group))];

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-12 md:py-16 bg-muted/40 pattern-diya">
        <div className="mx-auto max-w-[900px] px-5 sm:px-8 text-center">
          <p className="font-body text-xs tracking-[0.2em] uppercase text-foreground/50 mb-2">
            Association
          </p>
          <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            More
          </h1>
          <p className="font-body text-foreground/70 max-w-xl mx-auto">
            Membership, donations, our history, and the ways to get in touch with us.
          </p>
        </div>
      </section>

      {/* Quick links */}
      <section className="py-10 md:py-14">
        <div className="mx-auto max-w-[900px] px-5 sm:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {SECTIONS.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="bg-card border border-border rounded-lg p-5 text-center hover:shadow-md transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-3">
                  <s.icon className="h-6 w-6" />
                </div>
                <p className="font-body text-sm font-medium text-foreground">
                  {s.label}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section id="mission" className="py-16 md:py-24 bg-muted/40">
        <div className="mx-auto max-w-[900px] px-5 sm:px-8">
          <div className="flex items-center gap-3 mb-3">
            <Compass className="h-7 w-7 text-primary" />
            <h2 className="font-display text-3xl md:text-4xl text-foreground">
              Our Mission
            </h2>
          </div>
          <p className="font-body text-foreground/75 leading-relaxed mb-8">
            We, friendly and accomplished Gujarati families living in the San Fernando
            Valley of Southern California, have created and are proud of our extended
            family — our SFVGA. Our mission is to preserve the cultural, social, and
            religious values, promote the educational and recreational experiences, and
            heritage of the Gujarati people living in Southern California.
          </p>
          <h3 className="font-display text-xl text-foreground mb-4">
            How SFVGA Accomplishes Its Mission
          </h3>
          <ul className="space-y-3">
            {MISSION_POINTS.map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                <span className="font-body text-sm text-foreground/75 leading-relaxed">
                  {point}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Link
              to="/members"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-body text-sm font-medium px-6 py-3 rounded-full hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Become a Member
            </Link>
          </div>
        </div>
      </section>

      {/* Roles */}
      <section id="roles" className="py-16 md:py-24">
        <div className="mx-auto max-w-[1000px] px-5 sm:px-8">
          <div className="flex items-center gap-3 mb-3">
            <Users className="h-7 w-7 text-primary" />
            <h2 className="font-display text-3xl md:text-4xl text-foreground">
              Board Roles &amp; Responsibilities
            </h2>
          </div>
          <p className="font-body text-foreground/70 mb-10 max-w-2xl">
            Seven board members are elected annually, each with defined responsibilities.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
            {BOARD_ROLES.map((role) => (
              <div key={role.title} className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-display text-lg text-primary mb-3">{role.title}</h3>
                <ul className="space-y-2">
                  {role.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1 w-1 rounded-full bg-accent flex-shrink-0" />
                      <span className="font-body text-sm text-foreground/70 leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h3 className="font-display text-2xl text-foreground mb-6">
            Event Committee Roles
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {COMMITTEE_ROLES.map((role) => (
              <div key={role.title} className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-display text-lg text-primary mb-3">{role.title}</h3>
                <ul className="space-y-2">
                  {role.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1 w-1 rounded-full bg-accent flex-shrink-0" />
                      <span className="font-body text-sm text-foreground/70 leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meeting Minutes */}
      <section id="minutes" className="py-16 md:py-24 bg-muted/40">
        <div className="mx-auto max-w-[900px] px-5 sm:px-8">
          <div className="flex items-center gap-3 mb-3">
            <ClipboardList className="h-7 w-7 text-primary" />
            <h2 className="font-display text-3xl md:text-4xl text-foreground">
              Board Meeting Minutes
            </h2>
          </div>
          <p className="font-body text-foreground/70 mb-10 max-w-xl">
            Official meeting minutes and annual general meeting records.
          </p>
          {minutesGroups.map((group) => (
            <div key={group} className="mb-8">
              <h3 className="font-display text-lg text-foreground mb-4">{group}</h3>
              <div className="space-y-3">
                {MINUTES.filter((m) => m.group === group).map((m) => (
                  <a
                    key={m.href}
                    href={m.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between bg-card border border-border rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center gap-3">
                      <FileText className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="font-body text-sm font-medium text-foreground">
                        {m.label}
                      </span>
                    </div>
                    <span className="font-body text-xs font-medium text-primary inline-flex items-center gap-1">
                      View
                      <ExternalLink className="h-3.5 w-3.5" />
                    </span>
                  </a>
                ))}
              </div>
            </div>
          ))}
          <a
            href="https://sfvga.org/board/meeting-minutes-archive"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-body text-sm font-medium text-primary hover:text-accent transition-colors"
          >
            View Archives
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* By-Laws */}
      <section id="bylaws" className="py-16 md:py-24">
        <div className="mx-auto max-w-[800px] px-5 sm:px-8 text-center">
          <div className="flex items-center gap-3 mb-3 justify-center">
            <Scale className="h-7 w-7 text-primary" />
            <h2 className="font-display text-3xl md:text-4xl text-foreground">
              Governance &amp; By-Laws
            </h2>
          </div>
          <p className="font-body text-foreground/70 mb-8 max-w-xl mx-auto">
            Association by-laws and governance details are available for review.
          </p>
          <a
            href="https://sfvga.org/s/BYLAWS.docx"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-body text-sm font-medium px-6 py-3 rounded-full hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <FileText className="h-4 w-4" />
            Download By-Laws
          </a>
        </div>
      </section>
    </div>
  );
}
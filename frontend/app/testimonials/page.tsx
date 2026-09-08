import type { Metadata } from "next";
import Image from "next/image";

import { CtaBand } from "@/components/edtech/cta-band";
import { Icon, type IconName } from "@/components/edtech/icons";
import { SectionHeader } from "@/components/edtech/section-header";
import { cn } from "@/src/lib/utils";

export const metadata: Metadata = {
  title: "Testimonials | BeFutureKids",
  description:
    "Principal, teacher, parent, and student testimonials from BeFutureKids school innovation labs.",
};

type TestimonialAudience = "principal" | "teacher" | "parent" | "student";

type Testimonial = {
  audience: TestimonialAudience;
  avatarTone: string;
  institution: string;
  location: string;
  name: string;
  quote: string;
  rating: number;
  result: string;
  role: string;
};

type TestimonialSectionData = {
  description: string;
  eyebrow: string;
  id: string;
  inverse?: boolean;
  items: Testimonial[];
  title: string;
};

type SuccessStory = {
  description: string;
  imageAlt: string;
  imagePosition: string;
  metric: string;
  school: string;
  title: string;
};

type VideoStory = {
  duration: string;
  imageAlt: string;
  imagePosition: string;
  institution: string;
  role: string;
  speaker: string;
  title: string;
};

const navItems = [
  { href: "#principals", label: "Principals" },
  { href: "#teachers", label: "Teachers" },
  { href: "#parents", label: "Parents" },
  { href: "#students", label: "Students" },
  { href: "#metrics", label: "Impact" },
];

const heroStats = [
  { label: "Average rating", value: "4.9/5" },
  { label: "Schools represented", value: "120+" },
  { label: "Student voices", value: "45K" },
];

const principalTestimonials: Testimonial[] = [
  {
    audience: "principal",
    avatarTone: "from-cyan-200 to-emerald-200",
    institution: "NorthStar Global School",
    location: "Bengaluru",
    name: "Dr. Meera Iyer",
    quote:
      "BeFutureKids helped us turn innovation from a promise into a weekly school experience. Parents now see confident students presenting real robotics, AI, and STEM work.",
    rating: 5,
    result: "Admissions showcase strengthened",
    role: "Principal",
  },
  {
    audience: "principal",
    avatarTone: "from-amber-200 to-cyan-200",
    institution: "Riverdale International",
    location: "Pune",
    name: "Arvind Menon",
    quote:
      "The launch process felt premium and organized. The lab was not just installed; our teachers were supported, our timetable was respected, and outcomes were visible early.",
    rating: 4.9,
    result: "30-day lab launch completed",
    role: "School Director",
  },
  {
    audience: "principal",
    avatarTone: "from-rose-200 to-amber-200",
    institution: "Future Valley Academy",
    location: "Hyderabad",
    name: "Nandita Rao",
    quote:
      "The biggest difference is confidence. Students can explain what they built, why it worked, and how they improved it. That is the kind of future-readiness schools need.",
    rating: 4.8,
    result: "Demo day participation doubled",
    role: "Academic Head",
  },
];

const teacherTestimonials: Testimonial[] = [
  {
    audience: "teacher",
    avatarTone: "from-emerald-200 to-cyan-200",
    institution: "Aurora Public School",
    location: "Mumbai",
    name: "Ritika Sharma",
    quote:
      "The facilitator guides are practical. I can run sessions with structure, still leave room for student curiosity, and assess progress without turning the lab into a lecture.",
    rating: 4.9,
    result: "Teacher readiness improved",
    role: "STEM Coordinator",
  },
  {
    audience: "teacher",
    avatarTone: "from-cyan-200 to-lime-200",
    institution: "Summit Heights School",
    location: "Chennai",
    name: "Joel Fernandes",
    quote:
      "Students who were quiet in regular classes became team leads during robotics builds. The projects give every learner a role and a reason to speak up.",
    rating: 5,
    result: "Higher lab participation",
    role: "Robotics Mentor",
  },
  {
    audience: "teacher",
    avatarTone: "from-violet-200 to-cyan-200",
    institution: "Greenfield World School",
    location: "Ahmedabad",
    name: "Farah Khan",
    quote:
      "The AI activities are age-appropriate and responsible. Students learn datasets, model behavior, and ethics through things they can actually discuss and demonstrate.",
    rating: 4.8,
    result: "AI literacy track adopted",
    role: "Computer Science Teacher",
  },
];

const parentTestimonials: Testimonial[] = [
  {
    audience: "parent",
    avatarTone: "from-amber-200 to-emerald-200",
    institution: "Parent community",
    location: "NorthStar Global School",
    name: "Priya Nair",
    quote:
      "My daughter came home explaining sensors and debugging like it was a story. The lab made technology feel creative, not intimidating.",
    rating: 5,
    result: "Visible confidence at home",
    role: "Parent of Grade 6 student",
  },
  {
    audience: "parent",
    avatarTone: "from-rose-200 to-cyan-200",
    institution: "Parent community",
    location: "Riverdale International",
    name: "Sanjay Kulkarni",
    quote:
      "The showcase was impressive because students were not reciting. They were demonstrating, answering questions, and showing how their ideas changed after testing.",
    rating: 4.9,
    result: "Stronger parent trust",
    role: "Parent of Grade 8 student",
  },
  {
    audience: "parent",
    avatarTone: "from-lime-200 to-cyan-200",
    institution: "Parent community",
    location: "Future Valley Academy",
    name: "Ayesha Siddiqui",
    quote:
      "The projects gave us a clear picture of what future skills mean. Coding, teamwork, presentation, and problem-solving all came together in one experience.",
    rating: 4.8,
    result: "Portfolio artifacts created",
    role: "Parent of Grade 7 student",
  },
];

const studentTestimonials: Testimonial[] = [
  {
    audience: "student",
    avatarTone: "from-cyan-200 to-emerald-200",
    institution: "Aurora Public School",
    location: "Grade 7",
    name: "Anika Shah",
    quote:
      "I used to think robotics was only about machines. Now I know it is also about planning, testing, fixing mistakes, and explaining your idea to a team.",
    rating: 5,
    result: "Robotics team captain",
    role: "Student Innovator",
  },
  {
    audience: "student",
    avatarTone: "from-amber-200 to-lime-200",
    institution: "Summit Heights School",
    location: "Grade 8",
    name: "Vihaan Reddy",
    quote:
      "My favorite project was training an AI model. It was exciting, but we also learned when AI can be wrong and why humans still need to think carefully.",
    rating: 4.9,
    result: "AI demo presenter",
    role: "AI Lab Student",
  },
  {
    audience: "student",
    avatarTone: "from-fuchsia-200 to-cyan-200",
    institution: "Greenfield World School",
    location: "Grade 6",
    name: "Sara Thomas",
    quote:
      "In coding lab, I made a game and then improved it after my friends tested it. Debugging felt hard first, but then it became the fun part.",
    rating: 4.8,
    result: "Game prototype completed",
    role: "Coding Lab Student",
  },
];

const testimonialSections: TestimonialSectionData[] = [
  {
    description:
      "Leadership voices focus on adoption, parent trust, teacher readiness, and how innovation becomes part of school identity.",
    eyebrow: "Principal testimonials",
    id: "principals",
    items: principalTestimonials,
    title: "School leaders see innovation becoming visible.",
  },
  {
    description:
      "Teacher feedback highlights session structure, confidence, classroom energy, and support that makes lab delivery sustainable.",
    eyebrow: "Teacher testimonials",
    id: "teachers",
    items: teacherTestimonials,
    title: "Teachers get a lab model they can actually run.",
  },
  {
    description:
      "Parents respond most strongly when they can see future skills through real student work, not only through school messaging.",
    eyebrow: "Parent testimonials",
    id: "parents",
    items: parentTestimonials,
    title: "Parents notice confidence, clarity, and creativity.",
  },
  {
    description:
      "Student voices bring the proof closest to the classroom: building, debugging, explaining, and discovering what they are capable of.",
    eyebrow: "Student testimonials",
    id: "students",
    inverse: true,
    items: studentTestimonials,
    title: "Students talk like makers, coders, and young innovators.",
  },
];

const successStories: SuccessStory[] = [
  {
    description:
      "A new robotics and STEM showcase format helped the school turn lab work into a premium admissions and parent-engagement asset.",
    imageAlt: "Students presenting a robotics project during a BeFutureKids success story",
    imagePosition: "object-[58%_48%]",
    metric: "2.4x parent event attendance",
    school: "NorthStar Global School",
    title: "From lab setup to a packed innovation open day",
  },
  {
    description:
      "Teacher onboarding, guided modules, and demo milestones helped coordinators launch future-skills sessions without operational friction.",
    imageAlt: "Teacher guiding students inside a futuristic innovation lab",
    imagePosition: "object-[42%_46%]",
    metric: "18 teachers enabled",
    school: "Riverdale International",
    title: "A confident teacher team in the first month",
  },
  {
    description:
      "Student teams used AI, coding, and robotics artifacts to build portfolio stories that were clear enough for leadership review.",
    imageAlt: "Students reviewing AI and coding portfolio work in a school lab",
    imagePosition: "object-[70%_45%]",
    metric: "80 showcase artifacts",
    school: "Future Valley Academy",
    title: "Student portfolios that made outcomes visible",
  },
];

const videoStories: VideoStory[] = [
  {
    duration: "02:18",
    imageAlt: "Principal video testimonial preview for BeFutureKids",
    imagePosition: "object-[52%_48%]",
    institution: "NorthStar Global School",
    role: "Principal",
    speaker: "Dr. Meera Iyer",
    title: "How the lab changed parent conversations",
  },
  {
    duration: "01:46",
    imageAlt: "Teacher video testimonial preview in a robotics lab",
    imagePosition: "object-[68%_50%]",
    institution: "Aurora Public School",
    role: "STEM Coordinator",
    speaker: "Ritika Sharma",
    title: "What makes sessions easier to teach",
  },
  {
    duration: "02:05",
    imageAlt: "Student video testimonial preview for coding and AI projects",
    imagePosition: "object-[40%_50%]",
    institution: "Summit Heights School",
    role: "Student Innovator",
    speaker: "Vihaan Reddy",
    title: "Building an AI project for demo day",
  },
];

const trustMetrics = [
  {
    label: "Leadership satisfaction",
    note: "from school check-ins after implementation",
    value: "96%",
  },
  {
    label: "Teacher readiness sessions",
    note: "delivered across lab and project modules",
    value: "900+",
  },
  {
    label: "Student projects showcased",
    note: "through demos, exhibitions, and competitions",
    value: "12K",
  },
  {
    label: "Average stakeholder rating",
    note: "across school, parent, teacher, and student voices",
    value: "4.9",
  },
];

const impactStats = [
  {
    label: "Schools reported stronger parent perception",
    progressClassName: "w-[94%]",
    value: "94%",
  },
  {
    label: "Teachers felt more confident running lab sessions",
    progressClassName: "w-[91%]",
    value: "91%",
  },
  {
    label: "Students completed at least one showcase artifact",
    progressClassName: "w-[88%]",
    value: "88%",
  },
  {
    label: "Leaders found outcomes easier to communicate",
    progressClassName: "w-[96%]",
    value: "96%",
  },
];

function IconBadge({
  className,
  icon,
}: {
  className?: string;
  icon: IconName;
}) {
  return (
    <span
      className={cn(
        "inline-flex h-12 w-12 items-center justify-center rounded-lg border",
        className ?? "border-white/[0.18] bg-white/[0.1] text-white",
      )}
    >
      <Icon className="h-5 w-5" name={icon} />
    </span>
  );
}

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);
}

function AvatarMark({
  name,
  tone,
}: {
  name: string;
  tone: string;
}) {
  return (
    <div
      aria-label={`${name} avatar`}
      className={cn(
        "flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br text-sm font-black text-[#071015] shadow-[0_14px_36px_rgba(15,23,42,0.12)]",
        tone,
      )}
      role="img"
    >
      {getInitials(name)}
    </div>
  );
}

function RatingMeter({
  inverse = false,
  rating,
}: {
  inverse?: boolean;
  rating: number;
}) {
  const filledBars = Math.round(rating);

  return (
    <div
      aria-label={`${rating} out of 5 rating`}
      className="flex items-center gap-3"
      role="img"
    >
      <span
        className={cn(
          "text-sm font-semibold",
          inverse ? "text-cyan-100" : "text-teal-800 dark:text-teal-400",
        )}
      >
        {rating.toFixed(1)}
      </span>
      <span className="flex gap-1" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, index) => (
          <span
            className={cn(
              "h-2 w-7 rounded-full",
              index < filledBars
                ? "bg-amber-400"
                : inverse
                  ? "bg-white/[0.18]"
                  : "bg-black/[0.1] dark:bg-white/[0.15]",
            )}
            key={index}
          />
        ))}
      </span>
    </div>
  );
}

function TestimonialCard({
  inverse = false,
  testimonial,
}: {
  inverse?: boolean;
  testimonial: Testimonial;
}) {
  return (
    <article
      className={cn(
        "rounded-lg border p-6 shadow-[0_18px_60px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1",
        inverse
          ? "border-white/[0.16] bg-white/[0.11] text-white shadow-[0_18px_70px_rgba(0,0,0,0.22)] backdrop-blur-md hover:border-white/[0.28] hover:bg-white/[0.15]"
          : "border-black/10 dark:border-slate-800 bg-white dark:bg-slate-900 text-[#071015] dark:text-white hover:bg-[#fdfefe] dark:hover:bg-slate-800/90 hover:shadow-[0_24px_80px_rgba(15,23,42,0.1)]",
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <AvatarMark name={testimonial.name} tone={testimonial.avatarTone} />
        <RatingMeter inverse={inverse} rating={testimonial.rating} />
      </div>
      <blockquote
        className={cn(
          "mt-6 text-base leading-8",
          inverse ? "text-white/[0.86]" : "text-[#33454c] dark:text-slate-300",
        )}
      >
        &quot;{testimonial.quote}&quot;
      </blockquote>
      <div className="mt-6 border-t pt-5 border-inherit">
        <p
          className={cn(
            "text-base font-semibold tracking-tight",
            inverse ? "text-white" : "text-[#071015] dark:text-white",
          )}
        >
          {testimonial.name}
        </p>
        <p
          className={cn(
            "mt-1 text-sm font-medium",
            inverse ? "text-cyan-100" : "text-teal-800 dark:text-cyan-400",
          )}
        >
          {testimonial.role}
        </p>
        <p
          className={cn(
            "mt-1 text-sm",
            inverse ? "text-white/[0.7]" : "text-[#4e5f66] dark:text-slate-400",
          )}
        >
          {testimonial.institution} · {testimonial.location}
        </p>
        <div
          className={cn(
            "mt-5 inline-flex rounded-full border px-3 py-1 text-xs font-semibold",
            inverse
              ? "border-white/[0.18] bg-white/[0.1] text-white"
              : "border-black/10 dark:border-slate-700 bg-[#e8fbf6] dark:bg-emerald-950/40 text-teal-800 dark:text-emerald-300",
          )}
        >
          {testimonial.result}
        </div>
      </div>
    </article>
  );
}

function TestimonialSection({
  section,
}: {
  section: TestimonialSectionData;
}) {
  return (
    <section
      className={cn(
        "px-4 py-20 sm:px-6 sm:py-24 lg:px-8",
        section.inverse
          ? "relative isolate overflow-hidden bg-[#071015] text-white"
          : section.id === "teachers"
            ? "bg-[#f6f8fb] dark:bg-[#0b101b]"
            : "bg-white dark:bg-[#090d16]",
      )}
      id={section.id}
    >
      {section.inverse ? (
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_0%,rgba(45,212,191,0.14),transparent_30%),radial-gradient(circle_at_86%_72%,rgba(244,114,182,0.08),transparent_32%),linear-gradient(135deg,#071015,#0d1412_50%,#11100b)]" />
      ) : null}
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.74fr_1.26fr] lg:items-start">
          <SectionHeader
            align="left"
            description={section.description}
            eyebrow={section.eyebrow}
            inverse={section.inverse}
            title={section.title}
          />
          <div className="grid gap-5 md:grid-cols-3">
            {section.items.map((testimonial) => (
              <TestimonialCard
                inverse={section.inverse}
                key={testimonial.name}
                testimonial={testimonial}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SuccessStoryCard({ story }: { story: SuccessStory }) {
  return (
    <article className="group overflow-hidden rounded-lg border border-black/10 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-[0_20px_80px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_100px_rgba(15,23,42,0.14)]">
      <div className="relative h-72 overflow-hidden bg-[#071015]">
        <Image
          alt={story.imageAlt}
          className={cn(
            "object-cover transition duration-700 group-hover:scale-105",
            story.imagePosition,
          )}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          src="/befuturekids-school-lab-hero.png"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050708]/[0.9] via-[#050708]/[0.16] to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-100">
            {story.school}
          </p>
          <p className="mt-2 rounded-full border border-white/[0.18] bg-[#061011]/[0.86] px-3 py-1 text-xs font-semibold text-white backdrop-blur-md w-fit">
            {story.metric}
          </p>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-semibold tracking-tight text-[#071015] dark:text-white">
          {story.title}
        </h3>
        <p className="mt-4 text-sm leading-7 text-[#3f5056] dark:text-slate-300">
          {story.description}
        </p>
      </div>
    </article>
  );
}

function VideoCard({ video }: { video: VideoStory }) {
  return (
    <article className="group overflow-hidden rounded-lg border border-white/[0.16] bg-white/[0.11] text-white shadow-[0_18px_70px_rgba(0,0,0,0.22)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-white/[0.28] hover:bg-white/[0.15]">
      <div className="relative h-72 overflow-hidden bg-[#050708]">
        <Image
          alt={video.imageAlt}
          className={cn(
            "object-cover transition duration-700 group-hover:scale-105",
            video.imagePosition,
          )}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          src="/befuturekids-school-lab-hero.png"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050708]/[0.9] via-[#050708]/[0.16] to-transparent" />
        <div className="absolute left-4 top-4 flex h-14 w-14 items-center justify-center rounded-full border border-white/[0.2] bg-white/[0.14] text-white shadow-[0_16px_50px_rgba(0,0,0,0.28)] backdrop-blur-md transition group-hover:scale-105">
          <Icon className="h-6 w-6 translate-x-0.5" name="play" />
        </div>
        <span className="absolute right-4 top-4 rounded-full border border-white/[0.18] bg-[#061011]/[0.86] px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
          {video.duration}
        </span>
      </div>
      <div className="p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-100">
          Video testimonial
        </p>
        <h3 className="mt-4 text-xl font-semibold tracking-tight text-white">
          {video.title}
        </h3>
        <p className="mt-4 text-sm font-semibold text-white">
          {video.speaker}
        </p>
        <p className="mt-1 text-sm text-white/[0.72]">
          {video.role} · {video.institution}
        </p>
      </div>
    </article>
  );
}

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f6f8fb] dark:bg-[#090d16] text-[#071015] dark:text-slate-100">
      <section className="relative isolate overflow-hidden bg-[#050708] px-4 pb-20 pt-5 text-white sm:px-6 sm:pb-24 lg:px-8">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_15%_18%,rgba(45,212,191,0.18),transparent_30%),radial-gradient(circle_at_82%_12%,rgba(250,204,21,0.1),transparent_28%),radial-gradient(circle_at_72%_84%,rgba(34,197,94,0.12),transparent_32%),linear-gradient(135deg,#050708,#0b100f_48%,#11100b)]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:64px_64px] opacity-[0.22] motion-safe:animate-[grid-drift_18s_linear_infinite]" />
        <div className="mx-auto max-w-7xl">
          <header className="flex items-center justify-between rounded-lg border border-white/[0.16] bg-[#071015]/[0.88] px-3 py-3 shadow-[0_16px_70px_rgba(0,0,0,0.28)] backdrop-blur-md">
            <a
              aria-label="BeFutureKids testimonials page"
              className="flex items-center gap-3 rounded-full pr-2 focus:outline-none focus:ring-2 focus:ring-cyan-200"
              href="/schools"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-sm font-black text-[#071015]">
                BF
              </span>
              <span className="hidden text-sm font-semibold tracking-tight text-white sm:inline">
                BeFutureKids
              </span>
            </a>
            <nav
              aria-label="Testimonials page navigation"
              className="hidden items-center gap-1 rounded-full border border-white/[0.16] bg-black/[0.32] p-1 xl:flex"
            >
              {navItems.map((item) => (
                <a
                  className="rounded-full px-4 py-2 text-sm font-medium text-white/[0.82] transition hover:bg-white/[0.12] hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-200"
                  href={item.href}
                  key={item.href}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <a
              className="inline-flex min-h-10 items-center justify-center gap-2 rounded-full bg-white px-4 text-sm font-semibold text-[#071015] transition hover:-translate-y-0.5 hover:bg-cyan-50 focus:outline-none focus:ring-2 focus:ring-cyan-200"
              href="#request-demo"
            >
              Demo
              <Icon className="h-4 w-4" name="arrowRight" />
            </a>
          </header>

          <div className="grid gap-10 pt-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:pt-20">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.18] bg-[#071015]/[0.76] px-3 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-50 shadow-[0_16px_60px_rgba(20,184,166,0.14)] backdrop-blur-md">
                <Icon className="h-4 w-4 text-emerald-200" name="users" />
                Voices from future-ready schools
              </div>
              <h1 className="mt-7 max-w-4xl text-balance text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
                Trust stories from schools building what comes next.
              </h1>
              <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-white/[0.84] sm:text-xl">
                Hear how principals, teachers, parents, and students experience
                BeFutureKids labs as a premium, practical, and visible
                future-skills advantage.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-[#071015] shadow-[0_22px_60px_rgba(255,255,255,0.18)] transition hover:-translate-y-0.5 hover:bg-cyan-50 focus:outline-none focus:ring-2 focus:ring-cyan-200 focus:ring-offset-2 focus:ring-offset-[#050708]"
                  href="#principals"
                >
                  Read Testimonials
                  <Icon className="h-4 w-4" name="arrowRight" />
                </a>
                <a
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/[0.18] px-6 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white/[0.45] hover:bg-white/[0.1] focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-[#050708]"
                  href="#success-stories"
                >
                  View Success Stories
                </a>
              </div>
              <dl className="mt-10 grid max-w-xl grid-cols-3 gap-3">
                {heroStats.map((stat) => (
                  <div
                    className="rounded-lg border border-white/[0.16] bg-[#071015]/[0.74] p-4 shadow-[0_14px_40px_rgba(0,0,0,0.22)] backdrop-blur-md"
                    key={stat.label}
                  >
                    <dt className="text-xs leading-5 text-white/[0.78]">
                      {stat.label}
                    </dt>
                    <dd className="mt-2 text-2xl font-semibold tracking-tight text-white">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 -z-10 rounded-lg bg-gradient-to-r from-cyan-300/[0.14] via-emerald-300/[0.1] to-amber-300/[0.12] blur-2xl" />
              <div className="relative min-h-[420px] overflow-hidden rounded-lg border border-white/[0.12] bg-white/[0.06] shadow-[0_35px_120px_rgba(0,0,0,0.38)] lg:min-h-[560px]">
                <Image
                  alt="Students, teachers, and school leaders sharing BeFutureKids innovation lab testimonials"
                  className="object-cover"
                  fill
                  priority
                  sizes="(min-width: 1024px) 52vw, 100vw"
                  src="/befuturekids-school-lab-hero.png"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050708]/[0.9] via-[#050708]/[0.16] to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 grid gap-3 sm:grid-cols-3">
                  {["Principals", "Teachers", "Students"].map((label) => (
                    <div
                      className="rounded-lg border border-white/20 bg-[#061011]/[0.86] p-4 shadow-[0_14px_45px_rgba(0,0,0,0.3)] backdrop-blur-md"
                      key={label}
                    >
                      <p className="text-xs text-white/[0.78]">
                        Testimonial voice
                      </p>
                      <p className="mt-1 text-sm font-semibold text-white">
                        {label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -right-2 top-10 hidden rounded-lg border border-white/[0.18] bg-[#071015]/[0.88] p-4 text-white shadow-[0_20px_80px_rgba(0,0,0,0.28)] backdrop-blur-md motion-safe:animate-[float-y_7s_ease-in-out_infinite] xl:block">
                <div className="flex items-center gap-3">
                  <IconBadge
                    className="border-amber-200/[0.35] bg-amber-300/[0.18] text-amber-50"
                    icon="award"
                  />
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/[0.76]">
                      Average rating
                    </p>
                    <p className="mt-1 text-lg font-semibold">4.9 out of 5</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {testimonialSections.map((section) => (
        <TestimonialSection key={section.id} section={section} />
      ))}

      <section
        className="bg-[#f6f8fb] dark:bg-[#0b101b] px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
        id="success-stories"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            description="These mock success stories are shaped around the outcomes school teams care about: adoption, parent confidence, teacher readiness, and student proof."
            eyebrow="Featured success stories"
            title="Proof points that make school innovation easier to believe."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {successStories.map((story) => (
              <SuccessStoryCard key={story.title} story={story} />
            ))}
          </div>
        </div>
      </section>

      <section
        className="relative isolate overflow-hidden bg-[#071015] px-4 py-20 text-white sm:px-6 sm:py-24 lg:px-8"
        id="videos"
      >
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_0%,rgba(45,212,191,0.14),transparent_30%),radial-gradient(circle_at_86%_72%,rgba(244,114,182,0.08),transparent_32%),linear-gradient(135deg,#071015,#0d1412_50%,#11100b)]" />
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.74fr_1.26fr] lg:items-start">
            <SectionHeader
              align="left"
              description="Static video cards create a polished media layer for future interviews, school walkthroughs, and student showcase reels."
              eyebrow="Video testimonial cards"
              inverse
              title="A media-ready layer for high-trust school stories."
            />
            <div className="grid gap-5 md:grid-cols-3">
              {videoStories.map((video) => (
                <VideoCard key={video.title} video={video} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative isolate overflow-hidden bg-[#071015] px-4 py-20 text-white sm:px-6 sm:py-24 lg:px-8"
        id="metrics"
      >
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_16%_8%,rgba(45,212,191,0.12),transparent_28%),radial-gradient(circle_at_82%_70%,rgba(250,204,21,0.08),transparent_30%),linear-gradient(135deg,#071015,#0b1415_46%,#10180f)]" />
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            description="Trust metrics help the testimonials page feel decision-ready for school owners, principals, and academic leadership teams."
            eyebrow="Trust metrics"
            inverse
            title="The testimonial layer is backed by measurable confidence signals."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {trustMetrics.map((metric) => (
              <div
                className="rounded-lg border border-white/[0.16] bg-white/[0.11] p-6 shadow-[0_18px_70px_rgba(0,0,0,0.22)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-white/[0.28] hover:bg-white/[0.15]"
                key={metric.label}
              >
                <p className="text-5xl font-semibold tracking-tight text-white">
                  {metric.value}
                </p>
                <p className="mt-4 text-base font-semibold text-white">
                  {metric.label}
                </p>
                <p className="mt-2 text-sm leading-6 text-white/[0.74]">
                  {metric.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-[#090d16] px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <SectionHeader
            align="left"
            description="Impact statistics summarize the testimonial story in a format that leadership teams can scan before requesting a demo."
            eyebrow="School impact statistics"
            title="A clear snapshot of how stakeholders experience the program."
          />
          <div className="grid gap-4">
            {impactStats.map((stat) => (
              <article
                className="rounded-lg border border-black/10 dark:border-slate-800 bg-[#f8fbfb] dark:bg-slate-900 p-6 shadow-[0_18px_60px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:bg-white dark:hover:bg-slate-800/80 hover:shadow-[0_24px_80px_rgba(15,23,42,0.1)]"
                key={stat.label}
              >
                <div className="flex items-center justify-between gap-4">
                  <h2 className="text-base font-semibold tracking-tight text-[#071015] dark:text-white">
                    {stat.label}
                  </h2>
                  <p className="text-2xl font-semibold tracking-tight text-teal-800 dark:text-teal-400">
                    {stat.value}
                  </p>
                </div>
                <div className="mt-5 h-2 overflow-hidden rounded-full bg-black/[0.08] dark:bg-slate-800">
                  <div
                    className={cn(
                      "h-full rounded-full bg-gradient-to-r from-teal-500 via-cyan-500 to-emerald-500",
                      stat.progressClassName,
                    )}
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div id="request-demo">
        <CtaBand
          description="Bring your leadership team a premium walkthrough of stakeholder testimonials, success stories, video formats, trust metrics, and the roadmap for turning lab outcomes into school-wide confidence."
          eyebrow="Request a school demo"
          primaryHref="mailto:schools@befuturekids.com?subject=Testimonials%20Demo%20Request"
          primaryLabel="Request a School Demo"
          secondaryHref="/gallery"
          secondaryLabel="View Gallery"
          title="Ready to create future-skills stories your whole school can stand behind?"
        />
      </div>
    </main>
  );
}

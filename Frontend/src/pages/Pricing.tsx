import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  GraduationCap,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  Zap,
} from "lucide-react"

const plans = {
  student: [
    {
      name: "Student Free",
      price: "Free",
      desc: "Best for students starting their job search.",
      badge: "Starter",
      features: [
        "Browse verified jobs",
        "Apply to limited jobs",
        "Create student profile",
        "Save favorite jobs",
        "Basic resume upload",
        "Email job alerts",
        "Access beginner-friendly opportunities",
      ],
    },

    {
      name: "Student Plus",
      price: "₹500",
      desc: "For active job seekers who want better tracking.",
      badge: "Popular",
      features: [
        "Unlimited job applications",
        "Application tracking",
        "Resume visibility boost",
        "Priority job recommendations",
        "Advanced job filters",
        "Skill-based recommendations",
        "Early access to selected openings",
      ],
    },

    {
      name: "Student Pro",
      price: "₹700",
      desc: "For students preparing seriously for placements.",
      badge: "Growth",
      features: [
        "Everything in Plus",
        "Profile improvement tips",
        "Early access to jobs",
        "Saved job collections",
        "AI-powered resume suggestions",
        "Portfolio profile highlighting",
        "Mock interview preparation resources",
      ],
    },

    {
      name: "Student Elite",
      price: "₹1200",
      desc: "For students who want maximum career support.",
      badge: "Advanced",
      features: [
        "Everything in Pro",
        "Premium profile badge",
        "Recruiter visibility",
        "Personalized career insights",
        "Priority application placement",
        "Direct recruiter connection requests",
        "Exclusive internship & placement opportunities",
      ],
    },
  ],

  recruiter: [
    {
      name: "Recruiter Free",
      price: "Free",
      desc: "For recruiters testing the platform.",
      badge: "Starter",
      features: [
        "Create company profile",
        "Post limited jobs",
        "View basic applicants",
        "Basic dashboard access",
        "Candidate profile previews",
        "Basic application management",
        "Company branding setup",
      ],
    },

    {
      name: "Recruiter Plus",
      price: "₹1500",
      desc: "For small teams hiring actively.",
      badge: "Popular",
      features: [
        "Post more jobs",
        "Manage applications",
        "Shortlist candidates",
        "Company branding",
        "Priority candidate listing",
        "Custom hiring workflow",
        "Interview scheduling tools",
      ],
    },

    {
      name: "Recruiter Pro",
      price: "₹3000",
      desc: "For growing companies with frequent hiring.",
      badge: "Growth",
      features: [
        "Everything in Plus",
        "Advanced applicant filtering",
        "Priority job visibility",
        "Recruiter dashboard analytics",
        "Team collaboration access",
        "AI candidate recommendations",
        "Bulk applicant management",
      ],
    },

    {
      name: "Recruiter Enterprise",
      price: "₹5000",
      desc: "For serious hiring teams and agencies.",
      badge: "Advanced",
      features: [
        "Everything in Pro",
        "Unlimited job posts",
        "Premium support",
        "Team hiring workflow",
        "Dedicated account manager",
        "Advanced hiring analytics",
        "Multi-recruiter access control",
      ],
    },
  ],
}

export default function Pricing() {
  const [activeRole, setActiveRole] = useState<"student" | "recruiter">(
    "student"
  )

  const activePlans = plans[activeRole]

  return (
    <section className="dark:dark-glass-bg relative min-h-screen overflow-hidden bg-[#fff8df] px-4 py-24 text-foreground sm:px-6 lg:px-8 dark:bg-background">
      <div className="absolute inset-0 bg-linear-to-br from-yellow-100 via-white to-orange-100 dark:hidden" />

      <div className="glow-bulb glow-cyan top-20 left-10 h-40 w-40" />
      <div className="glow-bulb glow-rose top-48 right-20 h-52 w-52" />
      <div className="glow-bulb glow-emerald bottom-20 left-1/2 h-44 w-44" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Hero */}
        <div className="mx-auto max-w-3xl text-center">
          <Badge className="mb-5 rounded-full border border-border bg-card px-4 py-2 font-mont text-sm text-foreground shadow-sm">
            <Sparkles className="mr-2 h-4 w-4 text-rose-500" />
            Flexible pricing for students and recruiters
          </Badge>

          <h1 className="font-unbounded text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Choose a plan that fits your{" "}
            <span className="bg-linear-to-r from-rose-500 via-orange-500 to-yellow-400 bg-clip-text text-transparent">
              hiring journey
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl font-mont text-base leading-7 text-muted-foreground sm:text-lg">
            Start free, then upgrade based on your career or hiring needs.
          </p>

          {/* Toggle */}
          <div className="mx-auto mt-8 flex w-full max-w-sm rounded-full border border-border bg-card p-1 shadow-xl shadow-yellow-500/10 dark:bg-white/[0.06]">
            <button
              onClick={() => setActiveRole("student")}
              className={`flex w-1/2 items-center justify-center gap-2 rounded-full px-4 py-3 font-mont text-sm font-semibold transition ${
                activeRole === "student"
                  ? "bg-foreground text-background shadow-md"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <GraduationCap className="h-4 w-4" />
              Student
            </button>

            <button
              onClick={() => setActiveRole("recruiter")}
              className={`flex w-1/2 items-center justify-center gap-2 rounded-full px-4 py-3 font-mont text-sm font-semibold transition ${
                activeRole === "recruiter"
                  ? "bg-foreground text-background shadow-md"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <BriefcaseBusiness className="h-4 w-4" />
              Recruiter
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {activePlans.map((plan, index) => (
            <Card
              key={plan.name}
              className={`group relative overflow-hidden rounded-[2rem] border-border bg-card/90 shadow-xl shadow-yellow-500/10 transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-yellow-500/20 dark:bg-white/[0.06] dark:shadow-black/40 dark:backdrop-blur-xl ${
                index === 1 ? "border-rose-500/40 ring-2 ring-rose-500/20" : ""
              }`}
            >
              <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-yellow-400/20 blur-3xl dark:bg-cyan-500/10" />

              <CardContent className="relative flex h-full flex-col p-6">
                <div className="mb-5 flex items-start justify-between gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-500/10 text-rose-600 dark:text-rose-300">
                    {activeRole === "student" ? (
                      <GraduationCap className="h-6 w-6" />
                    ) : (
                      <BriefcaseBusiness className="h-6 w-6" />
                    )}
                  </div>

                  <Badge
                    className={`rounded-full ${
                      index === 1
                        ? "bg-rose-500 text-white"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {plan.badge}
                  </Badge>
                </div>

                <h2 className="font-unbounded text-xl font-bold text-foreground">
                  {plan.name}
                </h2>

                <p className="mt-3 min-h-12 font-mont text-sm leading-6 text-muted-foreground">
                  {plan.desc}
                </p>

                <div className="mt-7">
                  <div className="flex items-end gap-2">
                    <span className="font-unbounded text-4xl font-bold text-foreground">
                      {plan.price}
                    </span>
                    {plan.price !== "Free" && (
                      <span className="pb-1 font-mont text-sm text-muted-foreground">
                        / month
                      </span>
                    )}
                  </div>
                </div>

                <div className="mt-7 space-y-4">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                      <span className="font-mont text-sm leading-6 text-muted-foreground">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <Button
                  className={`mt-6 h-12 w-full rounded-full font-mont ${
                    index === 1
                      ? "bg-rose-600 text-white hover:bg-rose-700"
                      : ""
                  }`}
                  variant={index === 1 ? "default" : "outline"}
                >
                  {plan.price === "Free" ? "Start Free" : "Upgrade Plan"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Feature Highlights */}
        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {[
            {
              icon: Zap,
              title: "Fast workflow",
              desc: "Move from discovery to action without complicated steps.",
            },
            {
              icon: ShieldCheck,
              title: "Role-based access",
              desc: "Separate experiences for students and recruiters.",
            },
            {
              icon: Users,
              title: "Built for scale",
              desc: "Designed to support users, companies, jobs, and applications.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-border bg-card/80 p-6 shadow-xl shadow-yellow-500/10 backdrop-blur-xl dark:bg-white/[0.05] dark:shadow-black/30"
            >
              <item.icon className="h-7 w-7 text-rose-500" />
              <h3 className="mt-5 font-unbounded text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-3 font-mont text-sm leading-6 text-muted-foreground">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Comparison */}
        <div className="mt-16 overflow-hidden rounded-[2rem] border border-border bg-card/90 shadow-xl shadow-yellow-500/10 backdrop-blur-xl dark:bg-white/[0.06] dark:shadow-black/40">
          <div className="border-b border-border p-6 sm:p-8">
            <Badge className="mb-4 rounded-full bg-rose-500/10 text-rose-500">
              <Star className="mr-2 h-4 w-4" />
              {activeRole === "student"
                ? "Student plan breakdown"
                : "Recruiter plan breakdown"}
            </Badge>

            <h2 className="font-unbounded text-2xl font-bold text-foreground sm:text-3xl">
              Compare what each tier gives you
            </h2>

            <p className="mt-3 font-mont text-sm text-muted-foreground">
              Higher plans unlock more control, better visibility, and a more
              professional workflow.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] text-left">
              <thead className="bg-muted/60">
                <tr>
                  <th className="px-6 py-4 font-mont text-sm font-semibold text-foreground">
                    Plan
                  </th>
                  <th className="px-6 py-4 font-mont text-sm font-semibold text-foreground">
                    Price
                  </th>
                  <th className="px-6 py-4 font-mont text-sm font-semibold text-foreground">
                    Best For
                  </th>
                  <th className="px-6 py-4 font-mont text-sm font-semibold text-foreground">
                    Key Benefit
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-border">
                {activePlans.map((plan) => (
                  <tr key={plan.name}>
                    <td className="px-6 py-4 font-mont text-sm font-semibold text-foreground">
                      {plan.name}
                    </td>
                    <td className="px-6 py-4 font-mont text-sm text-muted-foreground">
                      {plan.price}
                    </td>
                    <td className="px-6 py-4 font-mont text-sm text-muted-foreground">
                      {plan.desc}
                    </td>
                    <td className="px-6 py-4">
                      <Badge variant="secondary" className="rounded-full">
                        {plan.features[0]}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-[2rem] border border-border bg-linear-to-br from-yellow-100 via-card to-orange-100 p-8 text-center shadow-xl shadow-yellow-500/20 sm:p-10 dark:from-white/[0.08] dark:to-white/[0.03] dark:shadow-black/40">
          <h2 className="font-unbounded text-2xl font-bold text-foreground sm:text-3xl">
            Ready to start with Jobzy?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl font-mont text-sm leading-6 text-muted-foreground">
            Choose the free plan first, then upgrade when you need more power.
          </p>

          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Button className="h-12 rounded-full px-6 font-mont">
              Start Free
            </Button>

            <Button
              variant="outline"
              className="h-12 rounded-full px-6 font-mont"
            >
              View Dashboard
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

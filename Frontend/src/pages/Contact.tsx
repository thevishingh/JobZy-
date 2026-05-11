import { ArrowRight, Mail, MapPin, Phone, Building2, Clock } from "lucide-react"
import { Link } from "react-router-dom"

export default function Contact() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f8f4e8] text-foreground dark:bg-background dark:dark-glass-bg">
      <div className="glow-bulb glow-cyan left-10 top-20 h-40 w-40" />
      <div className="glow-bulb glow-rose right-20 top-48 h-52 w-52" />
      <div className="glow-bulb glow-emerald bottom-20 left-1/2 h-44 w-44" />

      <div className="relative z-10 mx-auto grid min-h-[80vh] max-w-7xl items-center gap-10 px-4 py-24 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="font-mont text-xs font-bold uppercase tracking-[0.28em] text-lime-600 dark:text-lime-300">
            Contact · Jobzy Support
          </p>

          <h1 className="mt-6 font-unbounded text-6xl font-bold leading-none tracking-tight text-foreground sm:text-7xl lg:text-8xl">
            Let&apos;s
            <span className="block font-serif italic text-lime-500 dark:text-lime-300">
              connect.
            </span>
          </h1>

          <p className="mt-8 max-w-xl font-mont text-base leading-8 text-muted-foreground">
            Have questions about hiring, job applications, company profiles, or
            recruiter access? Jobzy helps candidates and recruiters connect
            faster with a clean, modern job portal experience.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card/70 p-3 shadow-2xl shadow-yellow-500/10 backdrop-blur-xl dark:bg-white/[0.06] dark:shadow-black/50">
          <img
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1200&auto=format&fit=crop"
            alt="Jobzy hiring support team"
            className="h-[360px] w-full rounded-[1.5rem] object-cover"
          />

          <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/20 bg-black/45 p-5 text-white backdrop-blur-xl">
            <p className="font-unbounded text-lg">Modern hiring starts here</p>
            <p className="mt-2 font-mont text-sm text-white/70">
              Job search · Recruiter dashboard · Company management
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-10 border-y border-border">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-[1fr_1.1fr]">
          <div className="border-border px-4 py-16 sm:px-6 lg:border-r lg:px-12">
            <p className="max-w-xl font-mont text-sm leading-7 text-muted-foreground">
              Reach out to the Jobzy team for platform support, partnership
              inquiries, recruiter onboarding, job posting help, or candidate
              assistance.
            </p>

            <div className="mt-12 space-y-8">
              {[
                {
                  label: "Business Email",
                  value: "support@jobzy.com",
                  icon: Mail,
                  href: "mailto:support@jobzy.com",
                },
                {
                  label: "Office Location",
                  value: "Pune, India",
                  icon: MapPin,
                },
                {
                  label: "Support Hours",
                  value: "Mon–Sat · 10:00 AM – 7:00 PM",
                  icon: Clock,
                },
                {
                  label: "Recruiter Support",
                  value: "+91 98765 43210",
                  icon: Phone,
                  href: "tel:+919876543210",
                },
                {
                  label: "Company Type",
                  value: "Job Portal & Hiring Platform",
                  icon: Building2,
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="border-b border-border pb-6 last:border-b-0"
                >
                  <div className="mb-2 flex items-center gap-2">
                    <item.icon className="h-4 w-4 text-lime-500" />
                    <p className="font-mont text-[11px] font-bold uppercase tracking-[0.22em] text-muted-foreground">
                      {item.label}
                    </p>
                  </div>

                  {item.href ? (
                    <Link
                      to={item.href}
                      className="font-mont text-sm font-semibold text-foreground underline decoration-lime-400 underline-offset-4 transition hover:text-lime-500"
                    >
                      {item.value}
                    </Link>
                  ) : (
                    <p className="font-mont text-sm font-semibold text-foreground">
                      {item.value}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-8 inline-flex items-center gap-2 font-mont text-xs font-bold uppercase tracking-[0.18em] text-lime-500">
              <span className="h-2 w-2 rounded-full bg-lime-400" />
              Active support for candidates and recruiters
            </div>
          </div>

          <div className="px-4 py-16 sm:px-6 lg:px-12">
            <p className="mb-10 font-mont text-[11px] font-bold uppercase tracking-[0.22em] text-muted-foreground">
              Send a message
            </p>

            <form className="space-y-8">
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <label className="mb-3 block font-mont text-[11px] font-bold uppercase tracking-[0.22em] text-muted-foreground">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    className="w-full border-0 border-b border-border bg-transparent px-0 py-3 font-mont text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-lime-400"
                  />
                </div>

                <div>
                  <label className="mb-3 block font-mont text-[11px] font-bold uppercase tracking-[0.22em] text-muted-foreground">
                    Work Email
                  </label>
                  <input
                    type="email"
                    placeholder="you@company.com"
                    className="w-full border-0 border-b border-border bg-transparent px-0 py-3 font-mont text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-lime-400"
                  />
                </div>
              </div>

              <div>
                <label className="mb-3 block font-mont text-[11px] font-bold uppercase tracking-[0.22em] text-muted-foreground">
                  Inquiry Type
                </label>
                <input
                  type="text"
                  placeholder="Recruiter onboarding / Job support / Partnership / General"
                  className="w-full border-0 border-b border-border bg-transparent px-0 py-3 font-mont text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-lime-400"
                />
              </div>

              <div>
                <label className="mb-3 block font-mont text-[11px] font-bold uppercase tracking-[0.22em] text-muted-foreground">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell us how Jobzy can help you..."
                  className="w-full resize-none border-0 border-b border-border bg-transparent px-0 py-3 font-mont text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-lime-400"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full border border-lime-400 px-7 py-3 font-mont text-xs font-bold uppercase tracking-wide text-lime-500 transition hover:bg-lime-400 hover:text-black"
              >
                Send Message
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl gap-5 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
        {[
          {
            title: "For Candidates",
            desc: "Get help with job search, applications, profile setup, saved jobs, and role-based access.",
          },
          {
            title: "For Recruiters",
            desc: "Get support for company profiles, job posting, applicant tracking, and recruiter dashboards.",
          },
          {
            title: "For Businesses",
            desc: "Connect with Jobzy for hiring partnerships, platform demos, and long-term recruitment solutions.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="rounded-3xl border border-border bg-card/70 p-6 shadow-xl shadow-yellow-500/10 backdrop-blur-xl dark:bg-white/[0.06] dark:shadow-black/40"
          >
            <h3 className="font-unbounded text-lg font-semibold text-foreground">
              {item.title}
            </h3>
            <p className="mt-3 font-mont text-sm leading-6 text-muted-foreground">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
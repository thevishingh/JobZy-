import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  HandCoins,
  Rocket,
  Star,
  Users,
} from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"

// sample companies for the brand logo strip
const companies = [
  {
    name: "Google",
    logo: "https://cdn.flyonui.com/fy-assets/blocks/marketing-ui/brand-logo/google-logo.png",
  },
  {
    name: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
  {
    name: "HubSpot",
    logo: "https://cdn.flyonui.com/fy-assets/blocks/marketing-ui/brand-logo/hubspot-logo.png",
  },
  {
    name: "Walmart",
    logo: "https://cdn.flyonui.com/fy-assets/blocks/marketing-ui/brand-logo/walmart-logo.png",
  },
  {
    name: "Microsoft",
    logo: "https://cdn.flyonui.com/fy-assets/blocks/marketing-ui/brand-logo/microsoft-logo.png",
  },
  {
    name: "FedEx",
    logo: "https://cdn.flyonui.com/fy-assets/blocks/marketing-ui/brand-logo/fedex-logo.png",
  },
  {
    name: "Airbnb",
    logo: "https://cdn.flyonui.com/fy-assets/blocks/marketing-ui/brand-logo/airbnb-logo.png",
  },
  {
    name: "Adobe",
    logo: "https://cdn.flyonui.com/fy-assets/blocks/marketing-ui/brand-logo/adobe-logo.png",
  },
  {
    name: "Shopify",
    logo: "https://cdn.flyonui.com/fy-assets/blocks/marketing-ui/brand-logo/shopify-logo.png",
  },
  {
    name: "PayPal",
    logo: "https://cdn.flyonui.com/fy-assets/blocks/marketing-ui/brand-logo/paypal-logo.png",
  },
  {
    name: "Huawei",
    logo: "https://cdn.flyonui.com/fy-assets/blocks/marketing-ui/brand-logo/huawei-logo.png",
  },
  {
    name: "OLA",
    logo: "https://cdn.flyonui.com/fy-assets/blocks/marketing-ui/brand-logo/ola-logo.png",
  },
  {
    name: "Deloitte",
    logo: "https://cdn.flyonui.com/fy-assets/blocks/marketing-ui/brand-logo/deloitte-logo.png",
  },
  {
    name: "BookMyShow",
    logo: "https://cdn.flyonui.com/fy-assets/blocks/marketing-ui/brand-logo/bookmyshow-logo.png",
  },
  {
    name: "Gatsby",
    logo: "https://cdn.flyonui.com/fy-assets/blocks/marketing-ui/brand-logo/gatsby-logo.png",
  },
]

// sample testimonials for the testimonial section
const testimonials = [
  {
    name: "Craig Bator",
    role: "CEO & Co Founder",
    company: "Zendesk",
    image: "https://cdn.flyonui.com/fy-assets/avatar/avatar-17.png",
    review:
      "Jobzy helped us simplify our recruitment process and connect with quality candidates faster than ever.",
  },
  {
    name: "Martin Dorwart",
    role: "Product Manager",
    company: "Orbit",
    image: "https://cdn.flyonui.com/fy-assets/avatar/avatar-5.png",
    review:
      "The recruiter dashboard and job management experience feel smooth, modern, and extremely practical.",
  },
  {
    name: "Alexandra Lee",
    role: "Lead Developer",
    company: "TechNova",
    image: "https://cdn.flyonui.com/fy-assets/avatar/avatar-3.png",
    review:
      "From application tracking to company management, Jobzy creates a cleaner workflow for hiring teams.",
  },
  {
    name: "Jason Wu",
    role: "Product Designer",
    company: "InnovateX",
    image: "https://cdn.flyonui.com/fy-assets/avatar/avatar-12.png",
    review:
      "A beautifully designed hiring platform with strong usability and a premium modern experience.",
  },
]

export default function About() {
  // Testimonials state
  const [index, setIndex] = useState(0)

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  return (
    <section className="dark:dark-glass-bg relative min-h-screen overflow-hidden bg-[#faeffb] text-foreground dark:bg-background">
      <div className="glow-bulb glow-cyan top-20 left-10 h-40 w-40" />
      <div className="glow-bulb glow-rose top-48 right-20 h-52 w-52" />
      <div className="glow-bulb glow-emerald bottom-20 left-1/2 h-44 w-44" />
      {/* hero sectin */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-28 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="font-unbounded text-4xl leading-tight font-bold tracking-tight text-foreground sm:text-5xl lg:text-4xl">
            Everything You Need to{" "}
            <span className="bg-linear-to-r from-violet-500 via-rose-500 to-orange-400 bg-clip-text text-transparent">
              Hire & Grow
            </span>{" "}
            Smarter
          </h1>

          <p className="mx-auto mt-5 max-w-7xl font-mont text-sm leading-7 text-muted-foreground sm:text-base">
            Jobzy is a modern job portal built for students, recruiters, and
            companies to connect faster, manage hiring workflows, and discover
            better opportunities with confidence.
          </p>
        </div>

        {/* Visual Section */}
        <div className="max-w-9xl relative mx-auto mt-16">
          <div className="relative mx-auto flex min-h-[420px] items-end justify-center overflow-hidden rounded-[2rem] border border-border bg-white shadow-2xl shadow-violet-500/10 sm:min-h-130 dark:border-none dark:bg-transparent dark:shadow-none">
            {/* Rings */}
            <div className="absolute bottom-[-120px] h-[580px] w-[580px] rounded-full bg-violet-500/10 dark:bg-cyan-500/10" />
            <div className="absolute bottom-[-90px] h-[460px] w-[460px] rounded-full bg-violet-500/15 dark:bg-violet-500/15" />
            <div className="absolute bottom-[-50px] h-[340px] w-[340px] rounded-full bg-violet-500/20 dark:bg-cyan-400/10" />

            {/* Main Image */}
            <motion.img
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=900&auto=format&fit=crop"
              alt="Professional using Jobzy platform"
              className="relative z-10 h-[360px] w-[280px] rounded-t-[2rem] object-cover object-top sm:h-[460px] sm:w-[360px]"
            />

            {/* Floating Card Left */}
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-32 left-3 z-20 w-48 rounded-2xl border border-border bg-background/85 p-4 shadow-xl backdrop-blur-xl sm:left-10 dark:bg-black/40"
            >
              <div className="mb-3 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-violet-500/10 text-violet-500">
                  <Users className="h-4 w-4" />
                </div>
                <p className="font-mont text-xs font-semibold text-muted-foreground">
                  Candidates
                </p>
              </div>

              <h3 className="font-unbounded text-xl font-bold text-foreground">
                12,450+
              </h3>
              <p className="mt-1 font-mont text-xs text-muted-foreground">
                Active job seekers
              </p>
            </motion.div>

            {/* Floating Card Right */}
            <motion.div
              animate={{ y: [0, 14, 0] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-20 right-3 z-20 w-52 rounded-2xl border border-border bg-background/85 p-4 shadow-xl backdrop-blur-xl sm:right-10 dark:bg-black/40"
            >
              <div className="mb-3 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500">
                  <BriefcaseBusiness className="h-4 w-4" />
                </div>
                <p className="font-mont text-xs font-semibold text-muted-foreground">
                  Hiring Growth
                </p>
              </div>

              <h3 className="font-unbounded text-xl font-bold text-foreground">
                78% Faster
              </h3>
              <p className="mt-1 font-mont text-xs text-muted-foreground">
                Shortlist workflow
              </p>
            </motion.div>

            {/* Small Tags */}
            <motion.div
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute top-16 left-8 z-20 rounded-full bg-rose-500 px-4 py-2 font-mont text-xs font-semibold text-white shadow-xl"
            >
              Student
            </motion.div>

            <motion.div
              animate={{ x: [0, -10, 0] }}
              transition={{ duration: 3.4, repeat: Infinity }}
              className="absolute right-8 bottom-28 z-20 rounded-full bg-blue-500 px-4 py-2 font-mont text-xs font-semibold text-white shadow-xl"
            >
              Recruiter
            </motion.div>
          </div>
        </div>
      </div>
      {/* Brand Logo Strip */}
      <div className="relative z-20 mt-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-slate-200/70 bg-gradient-to-br from-white via-slate-50 to-slate-100 px-5 py-5 shadow-[0_16px_50px_rgba(15,23,42,0.06)] sm:px-6 lg:px-8 dark:border-white/10 dark:bg-[linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] dark:shadow-[0_18px_50px_rgba(0,0,0,0.35)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(244,114,182,0.08),transparent_22%),radial-gradient(circle_at_right,rgba(59,130,246,0.08),transparent_22%)] dark:bg-[radial-gradient(circle_at_left,rgba(244,114,182,0.10),transparent_22%),radial-gradient(circle_at_right,rgba(59,130,246,0.10),transparent_22%)]" />

            <div className="relative flex flex-col gap-5 lg:flex-row lg:items-center lg:gap-8">
              {/* Left content */}
              <div className="flex shrink-0 flex-col gap-3 lg:min-w-[280px]">
                <div className="inline-flex w-fit items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[11px] font-semibold tracking-[0.22em] text-emerald-700 uppercase dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-300">
                  Trusted by growing hiring teams
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-lg dark:bg-white dark:text-slate-900">
                    <Building2 className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">
                      Used by teams scaling faster
                    </p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      Startups, agencies, and enterprise hiring desks
                    </p>
                  </div>
                </div>
              </div>

              {/* Right marquee */}
              <div className="relative flex-1 overflow-hidden">
                <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-white via-white/90 to-transparent dark:from-[#0b1020] dark:via-[#0b1020]/80" />
                <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-white via-white/90 to-transparent dark:from-[#0b1020] dark:via-[#0b1020]/80" />

                <motion.div
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{
                    duration: 22,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="flex w-max items-center gap-4"
                >
                  {[...companies, ...companies].map((company, index) => (
                    <div
                      key={`${company.name}-${index}`}
                      className="flex min-w-[170px] items-center justify-center rounded-2xl border border-slate-200/80 bg-white/80 px-5 py-4 backdrop-blur-sm transition-colors duration-300 dark:border-white/10 dark:bg-white/[0.05]"
                    >
                      <img
                        src={company.logo}
                        alt={company.name}
                        className="max-h-8 w-auto object-contain transition duration-300 hover:scale-105 sm:max-h-9"
                      />
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 2nd section */}
      <section className="dark:dark-glass-bg relative overflow-hidden bg-[#fbf8ef] py-16 text-foreground lg:py-24 lg:pb-0 dark:bg-background">
        {/* <div className="glow-bulb glow-cyan top-20 left-10 h-40 w-40" />
        <div className="glow-bulb glow-rose top-48 right-20 h-52 w-52" /> */}

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left Content */}
            <div className="flex flex-col justify-center">
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-card shadow-xl shadow-yellow-500/10 dark:bg-white/[0.06] dark:shadow-black/40">
                <BriefcaseBusiness className="h-8 w-8 text-rose-500" />
              </div>

              <div className="max-w-xl">
                <p className="mb-4 font-mont text-xs font-bold tracking-[0.22em] text-rose-500 uppercase">
                  About Jobzy
                </p>

                <h2 className="font-unbounded text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                  Connecting talent with{" "}
                  <span className="bg-linear-to-r from-rose-500 via-orange-500 to-yellow-400 bg-clip-text text-transparent">
                    meaningful opportunities
                  </span>
                </h2>

                <p className="mt-6 font-mont text-base leading-8 text-muted-foreground">
                  Jobzy is a modern job portal designed to help students
                  discover better opportunities and recruiters manage hiring
                  with speed, clarity, and confidence. From job search to
                  company management, Jobzy brings the full hiring journey into
                  one clean platform.
                </p>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  {
                    icon: Users,
                    title: "Students",
                    text: "Find jobs faster",
                  },
                  {
                    icon: Building2,
                    title: "Companies",
                    text: "Build hiring presence",
                  },
                  {
                    icon: CheckCircle2,
                    title: "Recruiters",
                    text: "Manage applicants",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-border bg-card/80 p-4 shadow-sm backdrop-blur-xl dark:bg-white/[0.06]"
                  >
                    <item.icon className="mb-3 h-5 w-5 text-rose-500" />
                    <h3 className="font-unbounded text-sm font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-1 font-mont text-xs text-muted-foreground">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link
                  to="/jobs"
                  className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 font-mont text-sm font-semibold text-background transition hover:scale-105"
                >
                  Explore Jobs
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Right Image Grid */}
            <div className="flex items-center justify-center">
              <div className="-mx-4 flex items-center justify-center">
                <div className="flex flex-col items-end px-3">
                  <img
                    className="mb-6 h-28 w-28 rounded-3xl object-cover shadow-2xl shadow-yellow-500/10 sm:h-48 sm:w-48 xl:h-56 xl:w-56 dark:shadow-black/50"
                    src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    alt="Recruiters discussing hiring strategy"
                  />

                  <div className="relative">
                    <img
                      className="h-20 w-20 rounded-3xl object-cover shadow-2xl shadow-yellow-500/10 sm:h-32 sm:w-32 xl:h-40 xl:w-40 dark:shadow-black/50"
                      src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                      alt="Team reviewing applications"
                    />

                    <div className="absolute -bottom-4 -left-8 hidden rounded-2xl border border-border bg-card/90 px-4 py-3 shadow-xl backdrop-blur-xl sm:block dark:bg-black/40">
                      <p className="font-unbounded text-sm font-semibold text-foreground">
                        500+
                      </p>
                      <p className="font-mont text-xs text-muted-foreground">
                        Job listings
                      </p>
                    </div>
                  </div>
                </div>

                <div className="px-3">
                  <div className="relative">
                    <img
                      className="h-40 w-40 rounded-[2rem] object-cover shadow-2xl shadow-yellow-500/10 sm:h-64 sm:w-64 xl:h-80 xl:w-80 dark:shadow-black/50"
                      src="https://images.pexels.com/photos/3182739/pexels-photo-3182739.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                      alt="Professional hiring workspace"
                    />

                    <div className="absolute top-6 -right-4 rounded-2xl border border-border bg-card/90 px-4 py-3 shadow-xl backdrop-blur-xl dark:bg-black/40">
                      <p className="font-unbounded text-sm font-semibold text-foreground">
                        98%
                      </p>
                      <p className="font-mont text-xs text-muted-foreground">
                        Faster hiring flow
                      </p>
                    </div>

                    <div className="absolute -bottom-5 left-4 rounded-full border border-border bg-card/90 px-4 py-2 font-mont text-xs font-semibold text-rose-500 shadow-xl backdrop-blur-xl dark:bg-black/40">
                      Smart hiring platform
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Features */}
      <section className="dark:dark-glass-bg relative overflow-hidden bg-[#fffaf0] py-20 text-foreground dark:bg-background">
        <div className="glow-bulb glow-cyan bottom-20 left-10 h-40 w-40" />
        <div className="glow-bulb glow-rose top-48 right-20 h-52 w-52" />
        <div className="glow-bulb glow-emerald top-20 left-1/2 h-44 w-44" />

        <div className="absolute inset-0 bg-linear-to-br from-yellow-100/80 via-white to-orange-100/70 dark:hidden" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
            {/* Left Content */}
            <div>
              <span className="inline-flex rounded-full bg-violet-500/10 px-3 py-1 font-mont text-xs font-bold tracking-[0.16em] text-violet-600 uppercase dark:bg-violet-400/10 dark:text-violet-300">
                Features
              </span>

              <h2 className="mt-6 max-w-xl font-unbounded text-3xl leading-tight font-bold text-foreground sm:text-4xl lg:text-5xl">
                Smarter hiring, better jobs, and faster career growth
              </h2>

              <p className="mt-5 max-w-xl font-mont text-base leading-7 text-muted-foreground">
                Jobzy brings students, freelancers, recruiters, and companies
                into one modern hiring platform. Discover opportunities, manage
                job posts, track applicants, and build a stronger professional
                network.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  {
                    icon: BriefcaseBusiness,
                    title: "Hire Talent Faster",
                    desc: "Recruiters can post jobs, manage applicants, and shortlist candidates from one clean dashboard.",
                  },
                  {
                    icon: Rocket,
                    title: "Grow Your Career",
                    desc: "Students and job seekers can explore verified opportunities and apply with confidence.",
                  },
                  {
                    icon: HandCoins,
                    title: "Freelance & Earn",
                    desc: "Professionals can discover flexible work, project-based roles, and earning opportunities.",
                  },
                  {
                    icon: Building2,
                    title: "Company Presence",
                    desc: "Companies can create strong profiles and attract better candidates with a trusted brand identity.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="group rounded-2xl border border-border bg-card/80 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-yellow-500/10 dark:bg-white/[0.06] dark:hover:border-violet-300/30 dark:hover:shadow-black/40"
                  >
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10 text-violet-600 dark:text-violet-300">
                      <item.icon className="h-5 w-5" />
                    </div>

                    <h3 className="font-unbounded text-sm font-semibold text-foreground">
                      {item.title}
                    </h3>

                    <p className="mt-2 font-mont text-sm leading-6 text-muted-foreground">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="absolute inset-0 rounded-[2rem] bg-linear-to-br from-violet-500/20 via-cyan-500/10 to-rose-500/20 blur-3xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-border bg-white/70 p-4 shadow-2xl shadow-yellow-500/10 backdrop-blur-xl dark:bg-white/[0.06] dark:shadow-black/50">
                <img
                  src="https://cdn.flyonui.com/fy-assets/blocks/marketing-ui/features/features-28.png"
                  alt="Jobzy hiring dashboard features"
                  className="w-full rounded-[1.5rem] object-cover"
                />

                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  {[
                    { value: "2.5K+", label: "Jobs posted" },
                    { value: "800+", label: "Companies" },
                    { value: "12K+", label: "Applications" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-2xl border border-border bg-card/80 p-4 text-center dark:bg-black/30"
                    >
                      <p className="font-unbounded text-lg font-bold text-foreground">
                        {stat.value}
                      </p>
                      <p className="mt-1 font-mont text-xs text-muted-foreground">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Why jobzy */}
      <section className="dark:dark-glass-bg relative overflow-hidden bg-[#fffaf0] py-20 text-foreground dark:bg-background">
        {/* Light Mode Gradient */}
        <div className="absolute inset-0 bg-linear-to-br from-yellow-100/60 via-white to-orange-100/50 dark:hidden" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="mb-12 flex flex-col gap-6 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <span className="inline-flex rounded-full bg-violet-500/10 px-3 py-1 font-mont text-xs font-bold tracking-[0.18em] text-violet-600 uppercase dark:bg-violet-400/10 dark:text-violet-300">
                Why Jobzy
              </span>

              <h2 className="mt-5 font-unbounded text-3xl leading-tight font-bold text-foreground sm:text-4xl lg:text-5xl">
                Built for modern hiring and career growth
              </h2>
            </div>

            <div className="max-w-xl">
              <p className="font-mont text-base leading-7 text-muted-foreground">
                Jobzy helps students, recruiters, freelancers, and companies
                connect through a fast, clean, and scalable hiring platform.
              </p>

              <Link
                to="/jobs"
                className="mt-5 inline-flex items-center gap-2 font-mont text-sm font-semibold text-violet-600 transition hover:text-violet-700 dark:text-violet-300"
              >
                Explore opportunities
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Features */}
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {[
              {
                icon: Users,
                title: "Smart Job Discovery",
                desc: "Students can discover verified jobs, internships, and freelance opportunities faster.",
              },
              {
                icon: BriefcaseBusiness,
                title: "Recruiter Dashboard",
                desc: "Recruiters can manage job posts, applicants, and hiring workflows in one place.",
              },
              {
                icon: Building2,
                title: "Company Branding",
                desc: "Companies can build professional profiles to attract better candidates and visibility.",
              },
              {
                icon: Rocket,
                title: "Fast Hiring Process",
                desc: "Simplified application management helps reduce hiring time and improve productivity.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group rounded-3xl border border-border bg-card/80 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-violet-300/40 hover:shadow-2xl hover:shadow-violet-500/10 dark:bg-white/[0.06] dark:hover:shadow-black/40"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-600 dark:text-violet-300">
                  <item.icon className="h-6 w-6" />
                </div>

                <h3 className="font-unbounded text-lg font-semibold text-foreground">
                  {item.title}
                </h3>

                <p className="mt-3 font-mont text-sm leading-6 text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Stats */}
          <div className="mt-12 grid gap-5 rounded-[2rem] border border-border bg-card/70 p-6 shadow-xl shadow-violet-500/10 backdrop-blur-xl md:grid-cols-3 dark:bg-white/[0.05] dark:shadow-black/40">
            {[
              {
                value: "12K+",
                label: "Applications submitted",
              },
              {
                value: "800+",
                label: "Companies onboarded",
              },
              {
                value: "95%",
                label: "Faster hiring workflow",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-border bg-background/80 p-5 text-center dark:bg-black/20"
              >
                <BadgeCheck className="mx-auto h-6 w-6 text-violet-500" />

                <h4 className="mt-4 font-unbounded text-2xl font-bold text-foreground">
                  {item.value}
                </h4>

                <p className="mt-1 font-mont text-sm text-muted-foreground">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Testimonials */}
      <section className="dark:dark-glass-bg overflow-hidden bg-[#faf7ef] px-4 text-foreground sm:px-6 lg:px-8 dark:bg-background">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <span className="rounded-full bg-[#f2e6d8] px-4 py-1 font-mont text-xs font-semibold text-[#d36f47] dark:bg-orange-500/10 dark:text-orange-300">
                Testimonial
              </span>

              <h2 className="mt-5 font-unbounded text-3xl leading-tight font-bold text-foreground sm:text-4xl">
                Real Stories.{" "}
                <span className="underline decoration-[#d36f47] underline-offset-4">
                  Real People
                </span>
              </h2>

              <p className="mt-4 font-mont text-base text-muted-foreground">
                Check out what Jobzy users are saying about the platform.
              </p>
            </div>
          </div>

          <section className="dark:dark-glass-bg relative overflow-hidden bg-[#fbf8ef] py-20 dark:bg-background">
            {/* Glow Effects */}
            <div className="glow-bulb glow-cyan top-20 left-10 h-40 w-40" />
            <div className="glow-bulb glow-rose top-40 right-10 h-52 w-52" />

            <div className="absolute inset-0 bg-linear-to-br from-yellow-100/60 via-white/50 to-orange-100/60 dark:hidden" />

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-24">
                {/* Left Content */}
                <div className="max-w-md">
                  <div className="space-y-5">
                    <p className="font-mont text-sm font-semibold tracking-[0.18em] text-violet-600 uppercase dark:text-violet-300">
                      Real Customers
                    </p>

                    <h2 className="font-unbounded text-3xl leading-tight font-bold text-foreground sm:text-4xl">
                      Customers Feedback
                    </h2>

                    <p className="font-mont text-lg leading-8 text-muted-foreground">
                      From job discovery to recruiter workflows, here’s how
                      Jobzy is helping teams and candidates grow faster.
                    </p>
                  </div>

                  {/* Controls */}
                  <div className="mt-10 flex items-center gap-4">
                    <button
                      onClick={prevSlide}
                      className="flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-card text-foreground shadow-sm transition hover:-translate-y-1 hover:bg-violet-600 hover:text-white dark:bg-white/6"
                    >
                      <ArrowLeft className="h-5 w-5" />
                    </button>

                    <button
                      onClick={nextSlide}
                      className="flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-600 text-white shadow-lg shadow-violet-500/20 transition hover:-translate-y-1 hover:bg-violet-700"
                    >
                      <ArrowRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                {/* Testimonial Slider */}
                <div className="relative flex-1 overflow-hidden">
                  <motion.div
                    animate={{
                      x: `-${index * 100}%`,
                    }}
                    transition={{
                      duration: 0.5,
                      ease: "easeInOut",
                    }}
                    className="flex"
                  >
                    {testimonials.map((item, i) => (
                      <div key={i} className="w-full shrink-0 px-2 py-4">
                        <div
                          className={`rounded-[2rem] border border-border bg-card/80 p-8 shadow-xl shadow-yellow-500/10 transition-all duration-500 dark:bg-white/[0.06] dark:shadow-black/40 ${
                            i % 2 === 0 ? "-rotate-[2deg]" : "rotate-[2deg]"
                          } hover:rotate-0`}
                        >
                          {/* User */}
                          <div className="flex items-center gap-4">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="h-14 w-14 rounded-full object-cover"
                            />

                            <div>
                              <h4 className="font-unbounded text-sm font-semibold text-foreground">
                                {item.name}
                              </h4>

                              <p className="mt-1 font-mont text-sm text-muted-foreground">
                                {item.role} at{" "}
                                <span className="font-semibold text-foreground">
                                  {item.company}
                                </span>
                              </p>
                            </div>
                          </div>

                          {/* Stars */}
                          <div className="mt-6 flex items-center gap-1">
                            {[...Array(5)].map((_, idx) => (
                              <Star
                                key={idx}
                                className="h-5 w-5 fill-yellow-400 text-yellow-400"
                              />
                            ))}
                          </div>

                          {/* Review */}
                          <p className="mt-6 font-mont text-base leading-8 text-muted-foreground">
                            {item.review}
                          </p>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
      {/* CTA */}
      <section className="dark:dark-glass-bg relative overflow-hidden bg-[#fbf8ef] py-12 text-foreground dark:bg-background">
        {/* <div className="glow-bulb glow-cyan left-10 top-20 h-40 w-40" />
        <div className="glow-bulb glow-rose right-10 top-40 h-52 w-52" />
        <div className="glow-bulb glow-emerald bottom-10 left-1/2 h-40 w-40" /> */}

        <div className="absolute inset-0 bg-linear-to-br from-yellow-100/60 via-white/50 to-orange-100/60 dark:hidden" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div className="flex flex-col items-start gap-8">
              <div className="space-y-5">
                <span className="inline-flex rounded-full border border-border bg-card/80 px-4 py-1 font-mont text-xs font-semibold tracking-[0.18em] text-violet-600 uppercase shadow-sm dark:bg-white/[0.06] dark:text-violet-300">
                  About Jobzy
                </span>

                <h2 className="max-w-2xl font-unbounded text-3xl leading-tight font-bold text-foreground sm:text-4xl lg:text-5xl">
                  Building modern hiring experiences for students and recruiters
                </h2>

                <p className="max-w-2xl font-mont text-base leading-8 text-muted-foreground">
                  Jobzy helps candidates discover meaningful opportunities while
                  enabling recruiters and companies to manage jobs,
                  applications, and hiring workflows with confidence.
                </p>
              </div>

              <div className="grid w-full gap-4 sm:grid-cols-2">
                {[
                  "Smart job discovery",
                  "Recruiter dashboards",
                  "Application tracking",
                  "Company management",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-border bg-card/80 px-5 py-4 shadow-xl shadow-yellow-500/10 backdrop-blur-xl dark:bg-white/[0.06] dark:shadow-black/40"
                  >
                    <p className="font-mont text-sm font-medium text-foreground">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
                <button className="rounded-2xl bg-violet-600 px-7 py-3 font-mont text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:-translate-y-1 hover:bg-violet-700">
                  Explore Jobs
                </button>

                <button className="rounded-2xl border border-border bg-card px-7 py-3 font-mont text-sm font-semibold text-foreground transition hover:-translate-y-1 hover:bg-muted dark:bg-white/[0.06]">
                  Hire Talent
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 rounded-[2rem] bg-linear-to-br from-violet-500/20 via-cyan-500/10 to-pink-500/20 blur-3xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card/80 p-3 shadow-2xl shadow-yellow-500/10 dark:bg-white/[0.06] dark:shadow-black/50">
                <img
                  className="h-full w-full rounded-[1.5rem] object-cover"
                  src="https://pagedone.io/asset/uploads/1717751272.png"
                  alt="Jobzy platform"
                />

                <div className="absolute right-6 bottom-6 left-6 rounded-2xl border border-white/20 bg-black/50 px-5 py-4 backdrop-blur-xl sm:right-auto">
                  <p className="font-unbounded text-lg font-semibold text-white">
                    95% Faster Hiring
                  </p>
                  <p className="mt-1 font-mont text-sm text-white/70">
                    Simplified workflows for modern recruitment teams
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-24 overflow-hidden rounded-[2rem] border border-border bg-linear-to-br from-card via-yellow-50 to-orange-100 p-8 shadow-2xl shadow-yellow-500/20 dark:bg-linear-to-br dark:from-white/[0.08] dark:via-white/[0.05] dark:to-white/[0.03] dark:shadow-black/40">
            <div className="flex flex-col items-center justify-between gap-6 text-center lg:flex-row lg:text-left">
              <div>
                <h3 className="font-unbounded text-2xl font-bold text-foreground sm:text-3xl">
                  Start your hiring journey with Jobzy
                </h3>

                <p className="mt-3 max-w-2xl font-mont text-sm leading-7 text-muted-foreground">
                  Discover opportunities, connect with recruiters, and manage
                  hiring through a scalable platform built for growth.
                </p>
              </div>

              <button className="rounded-2xl bg-foreground px-8 py-4 font-mont text-sm font-semibold text-background transition hover:-translate-y-1">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}

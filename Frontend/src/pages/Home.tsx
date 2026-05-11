import CanvasTextDemo from "@/components/canvas-text-demo"
import CoverDemo from "@/components/cover-demo"
import BrandLogo from "@/components/shared/BrandLogo"
import LatestJobs from "@/components/shared/LatestJobs"
import { MarqueeDemo } from "@/components/shared/MarqueeDemo"
import { Highlighter } from "@/components/ui/highlighter"
import useGetAllJobs from "@/hooks/useGetAllJobs"
import { useAnimate } from "framer-motion"
import { motion } from "motion/react"
import {
  Bell, ArrowRight, Sparkles, CheckCircle2, Star, BadgeCheck, BriefcaseBusiness, Building2, Users, Apple,
  Download,
  Play,
  Smartphone,
} from "lucide-react"
import React, { useEffect } from "react"
import { Link } from "react-router-dom"

// categories

const categories = [
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "React Developer",
  "Next.js Developer",
  "UI/UX Designer",
  "Graphic Designer",
  "Digital Marketing",
  "SEO Specialist",
  "Content Writer",
  "HR Manager",
  "Recruitment Specialist",
  "Data Analyst",
  "Business Analyst",
  "Project Manager",
  "Product Manager",
  "Remote Jobs",
  "DevOps Engineer",
  "Mobile App Developer",
  "Software Tester",
  "Cyber Security Analyst",
  "Cloud Engineer",
  "Customer Support",
  "Sales Executive",
]

const Home: React.FC = () => {

  // get All jobs
  useGetAllJobs()

  // category animation
  const [scope, animate] = useAnimate()

  useEffect(() => {
    animate(
      scope.current,
      { x: ["0%", "-50%"] },
      {
        duration: 20,
        ease: "linear",
        repeat: Infinity,
      }
    )
  }, [animate, scope])

  return (
    <>
      {/* Hero section */}
      <section className="relative min-h-screen overflow-hidden bg-[#fbf7ef] text-foreground dark:bg-[#050509]">
        
        <div className="absolute inset-0">
          <div className="absolute left-[58%] top-[18%] h-[520px] w-[520px] rounded-full border border-orange-400/20" />
          <div className="absolute left-[62%] top-[24%] h-[400px] w-[400px] rounded-full border border-rose-400/20" />
          <div className="absolute left-[66%] top-[31%] h-[280px] w-[280px] rounded-full border border-violet-400/20" />

          <div className="absolute left-[58%] top-[18%] h-[520px] w-[520px] animate-ping rounded-full border border-orange-400/10" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(249,115,22,0.16),transparent_28%)] dark:bg-[radial-gradient(circle_at_75%_35%,rgba(249,115,22,0.18),transparent_30%)]" />
        </div>

        <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-4 py-24 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 font-mont text-xs font-bold uppercase tracking-[0.18em] text-orange-700 dark:bg-orange-500/10 dark:text-orange-300">
              <Sparkles className="h-4 w-4" />
              Modern Job Portal
            </div>

            <h1 className="font-unbounded text-4xl font-bold leading-tight tracking-tight text-[#393629] sm:text-5xl lg:text-5xl dark:text-white">
              Connecting talent
              <span className="bg-linear-to-r from-rose-500 via-orange-500 to-yellow-400 bg-clip-text text-transparent">
                &nbsp;with opportunity
              </span>
            </h1>

            <p className="mt-6 max-w-xl font-mont text-base leading-8 text-[#6b6658] dark:text-slate-400">
              Jobzy helps students discover better opportunities and recruiters
              manage hiring through a clean, fast, and professional platform.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/jobs"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#c65d3b] px-7 py-3.5 font-mont text-sm font-semibold text-white shadow-xl shadow-orange-500/20 transition hover:-translate-y-1 hover:bg-[#b65335]"
              >
                Explore Jobs
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                to="/signup"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[#c65d3b] bg-transparent px-7 py-3.5 font-mont text-sm font-semibold text-[#c65d3b] transition hover:-translate-y-1 hover:bg-[#c65d3b] hover:text-white dark:border-white/15 dark:text-white dark:hover:border-orange-400 dark:hover:bg-orange-500"
              >
                Hire Talent
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-8">
              {[
                {
                  brand: "Google",
                  rating: "4.8",
                  image:
                    "https://cdn.flyonui.com/fy-assets/blocks/marketing-ui/brand-logo/google-logo.png",
                },
                {
                  brand: "huawei",
                  rating: "4.9",
                  image:
                    "https://cdn.flyonui.com/fy-assets/blocks/marketing-ui/brand-logo/huawei-logo.png",
                },
              ].map((item) => (
                <div
                  key={item.brand}
                  className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-[#111118]"
                >
                  <img
                    src={item.image}
                    alt={item.brand}
                    className="h-5 w-auto object-contain sm:h-6"
                  />

                  <div>
                    <div className="flex items-center gap-1 font-mont text-sm text-[#393629] dark:text-white">
                      {item.rating}
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    </div>

                    <p className="font-mont text-[11px] text-[#6b6658] dark:text-slate-500">
                      Trusted Reviews
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[560px]">
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-2 top-10 z-20 rounded-2xl border border-orange-200 bg-white px-5 py-4 shadow-xl dark:border-white/10 dark:bg-[#111118]"
            >
              <p className="font-unbounded text-xl font-bold text-orange-600">
                200+
              </p>
              <p className="font-mont text-xs text-muted-foreground">
                Live Companies
              </p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute right-4 top-20 z-20 rounded-2xl border border-yellow-200 bg-white px-5 py-4 shadow-xl dark:border-white/10 dark:bg-[#111118]"
            >
              <p className="font-unbounded text-xl font-bold text-yellow-600">
                8+
              </p>
              <p className="font-mont text-xs text-muted-foreground">
                Hiring Flows
              </p>
            </motion.div>

            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-0 top-60 z-20 rounded-2xl border border-rose-200 bg-white px-5 py-4 shadow-xl dark:border-white/10 dark:bg-[#111118]"
            >
              <p className="font-unbounded text-xl font-bold text-rose-500">
                1K+
              </p>
              <p className="font-mont text-xs text-muted-foreground">
                Reviews
              </p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 14, 0] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-28 right-0 z-20 rounded-2xl border border-orange-200 bg-white px-5 py-4 shadow-xl dark:border-white/10 dark:bg-[#111118]"
            >
              <p className="font-unbounded text-xl font-bold text-orange-600">
                800+
              </p>
              <p className="font-mont text-xs text-muted-foreground">
                Recruiters
              </p>
            </motion.div>

            <div className="absolute inset-x-6 bottom-0 top-10 rounded-full bg-orange-100 dark:bg-orange-500/10" />
            <div className="absolute inset-x-16 bottom-10 top-24 rounded-full bg-rose-100 dark:bg-rose-500/10" />

            <img
              src="https://cdn.flyonui.com/fy-assets/blocks/marketing-ui/about/about-18.png"
              alt="Jobzy professional hiring platform"
              className="absolute bottom-0 left-1/2 z-10 h-[520px] w-[360px] -translate-x-1/2 rounded-t-[2rem] object-cover object-top"
            />

            <div className="absolute bottom-8 left-1/2 z-30 w-[85%] -translate-x-1/2 rounded-3xl bg-[#393629] p-5 text-white shadow-2xl dark:bg-black/80 dark:text-slate-950">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="font-unbounded text-white text-lg font-semibold">
                    Find the right opportunity
                  </p>
                  <p className="mt-1 font-mont text-sm text-white/60 dark:text-lime-500">
                    Jobs, companies, and applications in one place.
                  </p>
                </div>

                <CheckCircle2 className="h-8 w-8 text-lime-400" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section-2 */}
      <section className="relative overflow-hidden py-2">
        <div className="absolute inset-0 bg-[#fbf7ef] dark:bg-[#050509]" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="mx-auto max-w-375 font-unbounded text-3xl font-bold leading-[1.08] tracking-tight text-[#393629] dark:text-white sm:text-4xl md:text-5xl lg:text-[3.6rem] xl:text-[4.2rem]">
            Connecting{" "}
            <span className="inline-block bg-linear-to-r from-orange-500 via-amber-500 to-yellow-400 bg-clip-text text-transparent">
              talent
            </span>{" "}
            with companies building the{" "}
            <span className="inline-block bg-linear-to-r from-violet-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
              future
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl font-mont text-base leading-8 text-[#6b6658] dark:text-slate-400 sm:text-lg">
            Smarter hiring experiences for recruiters, startups, and modern teams.
          </p>
        </div>
      </section>
      {/* Animated chategories */}
      <section className="relative overflow-hidden bg-background py-12 text-foreground dark:bg-[#050509]">
        {/* Top Glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-52 w-52 -translate-x-1/2 rounded-full bg-orange-500/10 blur-3xl" />

        <div className="relative mx-auto w-full max-w-7xl overflow-hidden px-4 sm:px-6 lg:px-8">
          {/* Fade Sides */}
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-background to-transparent dark:from-[#050509]"
            aria-hidden="true"
          />

          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-background to-transparent dark:from-[#050509]"
            aria-hidden="true"
          />

          {/* Marquee */}
          <motion.div
            ref={scope}
            className="flex mt-2 w-max gap-4 will-change-transform"
          >
            {[...categories, ...categories].map((cat, idx) => (
              <button
                key={`${cat}-${idx}`}
                type="button"
                className="
            group shrink-0 rounded-2xl
            border border-slate-200/80
            bg-white/70
            px-6 py-3.5
            font-mont text-sm font-semibold
            text-slate-700
            shadow-sm
            backdrop-blur-xl
            transition-all duration-300

            hover:-translate-y-1
            hover:border-orange-300
            hover:bg-orange-50
            hover:shadow-xl
            hover:shadow-orange-500/10

            dark:border-white/10
            dark:bg-white/[0.04]
            dark:text-slate-200
            dark:hover:border-orange-400/40
            dark:hover:bg-orange-500/10
            dark:hover:shadow-orange-500/10
          "
              >
                <span className="transition-all duration-300 group-hover:bg-linear-to-r group-hover:from-orange-400 group-hover:to-yellow-300 group-hover:bg-clip-text group-hover:text-transparent">
                  {cat}
                </span>
              </button>
            ))}
          </motion.div>
        </div>
      </section>
      {/* Jobs opening */}
      <section className="relative overflow-hidden bg-[#fbf7ef] py-20 text-foreground dark:bg-[#050509]">
        {/* Background glow */}
        <div className="pointer-events-none absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-orange-500/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col gap-5 text-center lg:flex-row lg:items-end lg:justify-between lg:text-left">
            <div>
              <span className="inline-flex rounded-full border border-orange-200 bg-orange-50 px-4 py-1.5 font-mont text-xs font-semibold uppercase tracking-[0.18em] text-orange-600 dark:border-orange-500/20 dark:bg-orange-500/10 dark:text-orange-300">
                Featured Jobs
              </span>

              <h2 className="mt-5 font-unbounded text-3xl font-bold leading-tight text-[#393629] sm:text-4xl lg:text-5xl dark:text-white">
                Explore Latest & Top{" "}
                <span className="text-orange-500 dark:text-orange-400">
                  Opportunities
                </span>
              </h2>

              <p className="mt-4 max-w-2xl font-mont text-sm leading-7 text-[#6b6658] sm:text-base dark:text-slate-400">
                Discover handpicked roles from trusted companies and apply faster with
                Jobzy’s modern hiring experience.
              </p>
            </div>

            <button className="mx-auto rounded-2xl border border-[#c65d3b]/30 bg-white px-6 py-3 font-mont text-sm font-semibold text-[#393629] cursor-pointer shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#c65d3b] hover:shadow-xl lg:mx-0 dark:border-white/10 dark:bg-[#111118] dark:text-white dark:hover:border-orange-400">
              More Jobs
            </button>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white/70 p-4 shadow-2xl shadow-orange-500/10 dark:border-none dark:bg-transparent dark:shadow-none sm:p-6">

            <div className="mt-8">
              <LatestJobs />
            </div>
          </div>
        </div>
      </section>
      {/* Brands logo */}
      <BrandLogo />
      {/* Testimonials */}
      <section className="py-12 dark:bg-[#050509]">
        <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
          <div className="mb-4 inline-flex max-w-full items-center rounded-full border px-2.5 py-0.5 text-sm font-normal text-foreground transition-colors focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-none lg:mb-10 lg:py-2 lg:pr-5 lg:pl-2">
            <span className="mr-2 flex size-8 shrink-0 items-center justify-center rounded-full bg-zinc-100">
              <Bell className="size-4" />
            </span>

            <p className="truncate whitespace-nowrap">
              Trusted by professionals and recruiters across growing companies
            </p>
          </div>

          <h1 className="mb-6 font-unbounded text-4xl leading-none font-bold tracking-tighter md:text-[7vw] lg:text-8xl">
            <span className="mr-4 inline-block mr-3">Real</span>

            <Highlighter
              action="highlight"
              color="red"
              strokeWidth={2}
              animationDuration={1500}
              iterations={1}
              padding={4}
            >
              Talent
            </Highlighter>

            <br />

            <span className="mr-4 inline-block">Real Career</span>

            <Highlighter
              action="underline"
              color="#f59e0b"
              strokeWidth={2}
              animationDuration={1500}
              iterations={1}
              padding={4}
            >
              Growth
            </Highlighter>
          </h1>

          <p className="max-w-2xl font-mont text-zinc-600 md:text-[2vw] lg:text-xl">
            Thousands of candidates found better career opportunities through JobZy,
            while recruiters hired skilled talent faster with a smoother hiring
            experience.
          </p>
        </div>
        <MarqueeDemo />
      </section>
      {/* Why us */}
      <section className="relative overflow-hidden bg-[#fbf7ef] py-20 text-foreground dark:bg-[#050509]">
        <div className="pointer-events-none absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-orange-500/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <span className="inline-flex rounded-full bg-orange-500/10 px-4 py-1.5 font-mont text-xs font-semibold text-orange-600 dark:text-orange-300">
              Why Jobzy
            </span>

            <h2 className="mt-5 font-unbounded text-3xl font-bold text-[#393629] sm:text-4xl lg:text-5xl dark:text-white">
              Built to make hiring simple, fast, and trusted
            </h2>

            <p className="mt-4 font-mont text-base leading-7 text-[#6b6658] dark:text-slate-400">
              Jobzy helps candidates find better opportunities and gives recruiters
              a cleaner way to manage companies, jobs, and applicants.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {/* Card 1 */}
            <div className="relative overflow-hidden rounded-3xl bg-[#f5dada] p-6 shadow-sm dark:bg-[#111118]">
              <div className="grid min-h-[260px] gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
                <div>
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-orange-500 dark:bg-white/10">
                    <BriefcaseBusiness className="h-6 w-6" />
                  </div>

                  <h3 className="font-unbounded text-xl font-semibold text-[#393629] dark:text-white">
                    Hire smarter with less complexity
                  </h3>

                  <p className="mt-4 font-mont text-sm leading-6 text-[#6b6658] dark:text-slate-400">
                    Recruiters can post jobs, manage applicants, and track hiring
                    workflows from one focused dashboard.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/70 bg-white p-4 shadow-xl dark:border-white/10 dark:bg-black/30">
                  <div className="mb-3 h-3 w-20 rounded-full bg-orange-400/30" />
                  <div className="space-y-3">
                    {["Frontend Developer", "UI Designer", "Backend Engineer"].map(
                      (item) => (
                        <div
                          key={item}
                          className="flex items-center justify-between rounded-xl bg-[#fbf7ef] px-3 py-3 dark:bg-white/5"
                        >
                          <span className="font-mont text-xs font-medium text-[#393629] dark:text-white">
                            {item}
                          </span>
                          <BadgeCheck className="h-4 w-4 text-emerald-500" />
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative overflow-hidden rounded-3xl bg-[#eadfd4] p-6 shadow-sm dark:bg-[#111118]">
              <div className="mb-10 flex items-center justify-between rounded-2xl bg-white px-5 py-4 shadow-sm dark:bg-black/30">
                <div className="flex items-center gap-3">
                  <img
                    src="https://cdn.flyonui.com/fy-assets/avatar/avatar-5.png"
                    alt="Candidate"
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-unbounded text-sm font-semibold text-[#393629] dark:text-white">
                      Verified Candidate
                    </p>
                    <p className="font-mont text-xs text-[#6b6658] dark:text-slate-400">
                      Ready to interview
                    </p>
                  </div>
                </div>

                <span className="font-unbounded text-lg font-bold text-orange-600">
                  92%
                </span>
              </div>

              <h3 className="font-unbounded text-xl font-semibold text-[#393629] dark:text-white">
                Find talent that fits your team
              </h3>

              <p className="mt-4 font-mont text-sm leading-6 text-[#6b6658] dark:text-slate-400">
                Jobzy makes candidate discovery easier with clean profiles,
                relevant job matching, and faster applicant review.
              </p>
            </div>

            {/* Card 3 */}
            <div className="relative overflow-hidden rounded-3xl bg-[#e6e7d7] p-6 shadow-sm dark:bg-[#111118]">
              <div className="mb-10 flex -space-x-4">
                {[
                  "https://cdn.flyonui.com/fy-assets/avatar/avatar-17.png",
                  "https://cdn.flyonui.com/fy-assets/avatar/avatar-3.png",
                  "https://cdn.flyonui.com/fy-assets/avatar/avatar-12.png",
                  "https://cdn.flyonui.com/fy-assets/avatar/avatar-5.png",
                  "https://cdn.flyonui.com/fy-assets/avatar/avatar-8.png",
                ].map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt="Jobzy user"
                    className="h-14 w-14 rounded-full border-4 border-white object-cover dark:border-[#111118]"
                  />
                ))}
              </div>

              <h3 className="font-unbounded text-xl font-semibold text-[#393629] dark:text-white">
                Support every career journey
              </h3>

              <p className="mt-4 font-mont text-sm leading-6 text-[#6b6658] dark:text-slate-400">
                Students and professionals can explore roles, save opportunities,
                and apply with confidence through a simple experience.
              </p>
            </div>

            {/* Card 4 */}
            <div className="relative overflow-hidden rounded-3xl bg-[#f4ead6] p-6 shadow-sm dark:bg-[#111118]">
              <div className="grid min-h-[260px] gap-6 md:grid-cols-[1fr_0.8fr] md:items-end">
                <div>
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-orange-500 dark:bg-white/10">
                    <Building2 className="h-6 w-6" />
                  </div>

                  <h3 className="font-unbounded text-xl font-semibold text-[#393629] dark:text-white">
                    Build a stronger company presence
                  </h3>

                  <p className="mt-4 font-mont text-sm leading-6 text-[#6b6658] dark:text-slate-400">
                    Companies can showcase their brand, publish roles, and create
                    a professional hiring presence on Jobzy.
                  </p>
                </div>

                <div className="hidden justify-end md:flex">
                  <div className="flex h-40 w-40 items-center justify-center rounded-full bg-white shadow-xl dark:bg-black/30">
                    <Users className="h-16 w-16 text-orange-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA */}
      <section className="relative overflow-hidden bg-[#fbf7ef] py-20 text-foreground dark:bg-[#050509]">
        <div className="pointer-events-none absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-orange-500/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Details Section */}
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <span className="inline-flex rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-1.5 font-mont text-xs font-semibold uppercase tracking-[0.18em] text-orange-600 dark:text-orange-300">
                Built for growth
              </span>

              <h2 className="mt-5 max-w-2xl font-unbounded text-3xl font-bold leading-tight text-[#393629] sm:text-4xl lg:text-5xl dark:text-white">
                A better way to discover jobs and manage hiring
              </h2>

              <p className="mt-5 max-w-2xl font-mont text-base leading-8 text-[#6b6658] dark:text-slate-400">
                Jobzy brings candidates, recruiters, and companies into one
                modern platform with faster job discovery, cleaner workflows, and
                smarter hiring experiences.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  {
                    title: "For candidates",
                    desc: "Find jobs, save roles, and apply with confidence.",
                    icon: BadgeCheck,
                  },
                  {
                    title: "For recruiters",
                    desc: "Post jobs, review applicants, and hire faster.",
                    icon: BriefcaseBusiness,
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-[#111118]"
                  >
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-500">
                      <item.icon className="h-5 w-5" />
                    </div>

                    <h3 className="font-unbounded text-base font-semibold text-[#393629] dark:text-white">
                      {item.title}
                    </h3>

                    <p className="mt-2 font-mont text-sm leading-6 text-[#6b6658] dark:text-slate-400">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 rounded-[2rem] bg-orange-500/10 blur-3xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-3 shadow-2xl shadow-orange-500/10 dark:border-white/10 dark:bg-[#111118] dark:shadow-black/40">
                <img
                  className="h-72 w-full rounded-[1.5rem] object-cover sm:h-96"
                  src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                  alt="Jobzy hiring experience"
                />

                <div className="absolute bottom-6 left-6 right-6 rounded-3xl bg-[#393629] p-5 text-white shadow-xl dark:bg-white dark:text-slate-950">
                  <p className="font-unbounded text-lg font-semibold">
                    Hire smarter. Apply faster.
                  </p>
                  <p className="mt-1 font-mont text-sm text-white/70 dark:text-slate-500">
                    One platform for job discovery and recruitment workflows.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-20 overflow-hidden rounded-[2.5rem] border border-slate-200 bg-[#393629] p-6 shadow-2xl shadow-orange-500/20 dark:shadow-none dark:border-white/10 dark:bg-[#111118] sm:p-8 lg:p-10">
            <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.85fr]">
              <div>
                <span className="inline-flex rounded-full bg-white/10 px-4 py-1.5 font-mont text-xs font-semibold uppercase tracking-[0.18em] text-orange-300">
                  Jobzy mobile app
                </span>

                <h2 className="mt-5 max-w-2xl font-unbounded text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                  Take your hiring journey anywhere
                </h2>

                <p className="mt-5 max-w-2xl font-mont text-base leading-8 text-white/70">
                  Search jobs, track applications, review candidates, and stay
                  connected with hiring updates directly from your phone.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <button className="inline-flex items-center justify-center gap-3 rounded-2xl bg-white px-6 py-3.5 font-mont text-sm font-semibold text-[#393629] transition hover:-translate-y-1 hover:bg-orange-50">
                    <Apple className="h-5 w-5" />
                    Download for iOS
                  </button>

                  <button className="inline-flex items-center justify-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-6 py-3.5 font-mont text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-white/10">
                    <Play className="h-5 w-5" />
                    Download Android
                  </button>
                </div>
              </div>

              <div className="relative mx-auto w-full max-w-sm">
                <div className="absolute inset-0 rounded-full bg-orange-500/20 blur-3xl" />

                <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-5">
                  {/* Glow */}
                  <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-orange-500/10 blur-3xl" />

                  <div className="relative rounded-[1.5rem] bg-[#fbf7ef] p-6 text-[#393629] shadow-xl">
                    {/* Top */}
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-mont text-lg font-bold">
                          Your Hiring Dashboard
                        </p>

                        <p className="mt-1 font-mont text-xs text-[#6b6658]">
                          Everything you need in one place
                        </p>
                      </div>

                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500 text-white shadow-lg">
                        <BriefcaseBusiness className="h-6 w-6" />
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="mt-8 grid grid-cols-2 gap-4">
                      <div className="rounded-2xl bg-white p-4 shadow-sm">
                        <p className="font-mont text-xs text-[#6b6658]">
                          Active Applications
                        </p>

                        <h3 className="mt-2 font-unbounded text-2xl font-bold">
                          1.2K+
                        </h3>

                        <span className="mt-2 inline-flex rounded-full bg-emerald-100 px-2 py-1 font-mont text-[10px] font-semibold text-emerald-600">
                          +18% Growth
                        </span>
                      </div>

                      <div className="rounded-2xl bg-white p-4 shadow-sm">
                        <p className="font-mont text-xs text-[#6b6658]">
                          Recruiter Reach
                        </p>

                        <h3 className="mt-2 font-unbounded text-2xl font-bold">
                          850+
                        </h3>

                        <span className="mt-2 inline-flex rounded-full bg-orange-100 px-2 py-1 font-mont text-[10px] font-semibold text-orange-600">
                          Verified Companies
                        </span>
                      </div>
                    </div>

                    {/* Bottom Cards */}
                    <div className="mt-6 space-y-3">
                      {[
                        {
                          title: "Frontend Developer",
                          subtitle: "Google • Remote",
                        },
                        {
                          title: "UI/UX Designer",
                          subtitle: "Airbnb • Hybrid",
                        },
                        {
                          title: "React Engineer",
                          subtitle: "Stripe • Full Time",
                        },
                      ].map((job) => (
                        <div
                          key={job.title}
                          className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                        >
                          <div>
                            <p className="font-mont text-sm font-semibold text-[#393629]">
                              {job.title}
                            </p>

                            <p className="mt-1 font-mont text-[11px] text-[#6b6658]">
                              {job.subtitle}
                            </p>
                          </div>

                          <ArrowRight className="h-4 w-4 text-orange-500" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home

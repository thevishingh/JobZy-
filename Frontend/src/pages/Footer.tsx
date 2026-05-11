import TextHoverEffectDemo from "@/components/text-hover-effect-demo"
import {
  FaXTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6"
import { Link } from "react-router-dom"
import { ArrowUpRight, Sparkles } from "lucide-react"

export default function Footer() {
  const linkClass =
    "text-muted-foreground transition hover:text-foreground hover:translate-x-1 inline-block"

  const headingClass =
    "mb-5 font-mont text-xs font-extrabold uppercase tracking-[0.18em] text-foreground"

  return (
    <footer className="relative w-full overflow-hidden border-t border-border bg-background">
      <div className="absolute top-10 -left-32 h-72 w-72 rounded-full bg-red-500/10 blur-3xl" />
      <div className="absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* TOP GRID */}
        <div className="grid grid-cols-2 gap-3 gap-y-8 py-10 sm:grid-cols-4 lg:grid-cols-6">
          {/* LOGO + ABOUT */}
          <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
            <Link to="/" className="inline-flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-card shadow-sm">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-linear-to-br from-rose-500 via-orange-500 to-red-600">
                  <Sparkles className="h-4 w-4 text-white" />
                </div>
              </div>

              <div>
                <h2 className="font-unbounded text-2xl font-bold tracking-tight text-foreground">
                  Job<span className="text-red-500">Zy</span>
                </h2>
                <p className="font-mont text-[10px] font-semibold tracking-[0.25em] text-muted-foreground uppercase">
                  Career Platform
                </p>
              </div>
            </Link>

            <p className="py-6 font-mont text-sm leading-6 text-muted-foreground lg:max-w-xs">
              JobZy helps candidates discover better opportunities and
              recruiters manage hiring with a clean, modern, and powerful
              workflow.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-foreground px-5 py-2.5 font-mont text-xs font-semibold text-background transition hover:scale-105"
            >
              Contact Us
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* FOR CANDIDATES */}
          <div>
            <h4 className={headingClass}>For Candidates</h4>
            <ul className="space-y-4 font-mont text-sm">
              <li>
                <Link to="/jobs" className={linkClass}>
                  Browse Jobs
                </Link>
              </li>
              <li>
                <Link to="/saved-jobs" className={linkClass}>
                  Saved Jobs
                </Link>
              </li>
              <li>
                <Link to="/applications" className={linkClass}>
                  Applications
                </Link>
              </li>
              <li>
                <Link to="/profile" className={linkClass}>
                  Profile
                </Link>
              </li>
            </ul>
          </div>

          {/* FOR RECRUITERS */}
          <div>
            <h4 className={headingClass}>For Recruiters</h4>
            <ul className="space-y-4 font-mont text-sm">
              <li>
                <Link to="/post-job" className={linkClass}>
                  Post a Job
                </Link>
              </li>
              <li>
                <Link to="/manage-jobs" className={linkClass}>
                  Manage Jobs
                </Link>
              </li>
              <li>
                <Link to="/applicants" className={linkClass}>
                  Applicants
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className={linkClass}>
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className={headingClass}>Company</h4>
            <ul className="space-y-4 font-mont text-sm">
              <li>
                <Link to="/about" className={linkClass}>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className={linkClass}>
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/pricing" className={linkClass}>
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/contact" className={linkClass}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* RESOURCES */}
          <div>
            <h4 className={headingClass}>Resources</h4>
            <ul className="space-y-4 font-mont text-sm">
              <li>
                <Link to="/help-center" className={linkClass}>
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/faqs" className={linkClass}>
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className={linkClass}>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className={linkClass}>
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-border py-6">
          <div className="flex flex-col items-center justify-between gap-4 lg:flex-row">
            <span className="font-mont text-sm text-muted-foreground">
              © 2026 JobZy. All rights reserved.
            </span>

            <div className="flex space-x-3">
              <Link
                to="/x"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground transition hover:scale-110 hover:bg-muted"
              >
                <FaXTwitter />
              </Link>

              <Link
                to="/instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-pink-500 text-white transition hover:scale-110"
              >
                <FaInstagram />
              </Link>

              <Link
                to="/linkedin"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-white transition hover:scale-110"
              >
                <FaLinkedinIn />
              </Link>

              <Link
                to="/youtube"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-red-600 text-white transition hover:scale-110"
              >
                <FaYoutube />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <TextHoverEffectDemo />
    </footer>
  )
}

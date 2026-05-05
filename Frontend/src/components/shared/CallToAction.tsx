import React from "react"
import { Briefcase, Building2, Search } from "lucide-react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { FaApple, FaAndroid, FaWindows } from "react-icons/fa"

export default function CallToAction() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-28 lg:py-12">
      {/* Gradient Background */}
      {/* <div className="absolute inset-0 z-0 bg-radial from-red-100 via-white to-transparent" /> */}

      {/* Grid Background */}
      <svg
        className="absolute inset-0 z-0 h-full w-full opacity-10"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern
            id="smallGrid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="#000"
              strokeWidth="0.3"
            />
          </pattern>
        </defs>

        <rect width="100%" height="100%" fill="url(#smallGrid)" />
      </svg>

      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
        {/* Icon */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Briefcase className="mx-auto h-14 w-14 text-black" />
        </motion.div>

        {/* Heading */}
        <motion.h2
          className="mt-6 font-unbounded text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          Ready to Build Your Career with JobZy?
        </motion.h2>

        {/* Description */}
        <motion.p
          className="mx-auto mt-4 max-w-2xl font-mont text-lg text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Discover better job opportunities, connect with trusted companies, and
          take the next step toward your professional growth.
        </motion.p>

        {/* Download Buttons */}
        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <a
            href="#"
            className="flex shrink-0 items-center gap-2 rounded-xl bg-black px-6 py-3 text-white shadow-md transition hover:bg-gray-900"
          >
            <FaApple className="h-5 w-5" />
            Download for iOS
          </a>

          <a
            href="#"
            className="flex shrink-0 items-center gap-2 rounded-xl border-2 border-black px-6 py-3 text-black transition hover:bg-black hover:text-white"
          >
            <FaAndroid className="h-5 w-5" />
            Download for Android
          </a>

          <a
            href="#"
            className="flex shrink-0 items-center gap-2 rounded-xl border-2 border-black px-6 py-3 text-black transition hover:bg-black hover:text-white"
          >
            <FaWindows className="h-5 w-5" />
            Desktop App
          </a>
          <Link
            to="/jobs"
            className="flex items-center gap-2 rounded-xl bg-black px-6 py-3 text-white shadow-md transition hover:bg-gray-900 hover:shadow-xl"
          >
            <Search className="h-5 w-5" />
            Explore Jobs
          </Link>

          <Link
            to="/signup"
            className="flex items-center gap-2 rounded-xl border-2 border-black px-6 py-3 text-black transition hover:bg-black hover:text-white"
          >
            <Building2 className="h-5 w-5" />
            Create Account
          </Link>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 text-left sm:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="rounded-2xl bg-transparent border p-6 shadow-2xl">
            <h4 className="font-unbounded text-base font-medium text-amber-900 capitalize">
              Verified Job Openings
            </h4>
            <p className="mt-2 font-mont text-sm font-medium text-black">
              Apply to trusted companies with clear role, salary, and location
              details.
            </p>
          </div>

          <div className="rounded-2xl bg-transparent border p-6 shadow-2xl">
            <h4 className="font-unbounded text-base font-medium text-amber-900 capitalize">
              Faster Applications
            </h4>
            <p className="mt-2 font-mont text-sm font-medium text-black">
              Find relevant jobs quickly and apply with a smooth, simple
              experience.
            </p>
          </div>

          <div className="rounded-2xl bg-transparent border p-6 shadow-2xl">
            <h4 className="font-unbounded text-base font-medium text-amber-900 capitalize">
              Smart Hiring
            </h4>
            <p className="mt-2 font-mont text-sm font-medium text-black">
              Recruiters can discover skilled candidates and close positions
              faster.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

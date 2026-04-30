import CanvasTextDemo from "@/components/canvas-text-demo"
import CoverDemo from "@/components/cover-demo"
import BrandLogo from "@/components/shared/BrandLogo"
import CallToAction from "@/components/shared/CallToAction"
import LatestJobs from "@/components/shared/LatestJobs"
import { MarqueeDemo } from "@/components/shared/MarqueeDemo"
import { Highlighter } from "@/components/ui/highlighter"
import { Bell, CirclePlay } from "lucide-react"
import React from "react"
import { BiPlayCircle } from "react-icons/bi"
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

const Hero: React.FC = () => {
  return (
    <>
      <div className="bg-linear-to-b from-red-200 to-white">
        <section className="py-10 sm:py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div>
                <h1 className="text-4xl font-bold text-black sm:text-6xl lg:text-7xl">
                  Build Your Career with{" "}
                  <span className="relative inline-block">
                    <span className="absolute inset-x-0 bottom-0 border-b-18 border-red-600"></span>
                    <span className="relative">JobZy</span>
                  </span>
                </h1>

                <p className="mt-8 text-base text-gray-700 sm:text-xl">
                  JobZy connects talented professionals with top companies and
                  helps recruiters discover the right talent faster. From job
                  applications to smart hiring solutions, we make recruitment
                  simple, modern, and efficient.
                </p>

                <div className="mt-10 sm:flex sm:items-center sm:space-x-8">
                  <Link
                    to="/jobs"
                    title="Explore Jobs"
                    className="inline-flex items-center justify-center rounded-xl bg-black px-10 py-4 text-base font-semibold text-white transition-all duration-200 hover:opacity-90"
                    role="button"
                  >
                    Explore Jobs
                  </Link>

                  <a
                    href="#"
                    title="Watch Demo"
                    className="mt-6 inline-flex items-center text-base font-semibold text-gray-800 transition-all duration-200 hover:opacity-80 sm:mt-0"
                  >
                    <BiPlayCircle className="mr-3 h-10 w-10 text-red-500" />
                    Watch Demo
                  </a>
                </div>
              </div>

              <div>
                <img
                  className="w-full"
                  src="https://www.auraui.com/memeimage/hero25.png"
                  alt="JobZy Job Portal"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* section-2 */}
      <h1 className="mx-auto max-w-360 font-unbounded text-4xl leading-tight font-bold text-gray-900 sm:text-5xl lg:text-4xl">
        Connecting{" "}
        <Highlighter action="underline" color="#FF9800">
          job seekers
        </Highlighter>{" "}
        with companies that need{" "}
        <Highlighter action="highlight" color="#ffd1dc">
          skilled talent
        </Highlighter>
      </h1>
      {/* Animated chategories */}
      <section className="overflow-hidden py-10">
        <div className="relative w-full overflow-hidden">
          <div className="animate-marqueeee flex w-max gap-4">
            {[...categories, ...categories].map((item, index) => (
              <button
                key={index}
                type="button"
                className="shrink-0 cursor-pointer rounded-full border border-gray-400 from-lime-200 to-white px-6 py-3 font-clash text-sm font-medium text-gray-800 shadow-2xl transition hover:border-lime-300 hover:bg-red-50 hover:bg-linear-to-b"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </section>
      {/* Jobs opening */}
      <section className="bg-linear-to-t from-red-200 to-white">
        <CanvasTextDemo />
        <LatestJobs />
      </section>
      {/* Brands logo */}
      <section>
        <BrandLogo />
      </section>
      {/* Testimonials */}
      <section className="bg-linear-to-t from-red-200 to-white py-12">
        <div className="mx-auto pb-12 max-w-7xl">
          <div className="mb-4 inline-flex max-w-full items-center rounded-full border px-2.5 py-0.5 text-sm font-normal text-foreground transition-colors focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-none lg:mb-10 lg:py-2 lg:pr-5 lg:pl-2">
            <span className="mr-2 flex size-8 shrink-0 items-center justify-center rounded-full bg-zinc-100">
              <Bell className="size-4" />
            </span>

            <p className="truncate whitespace-nowrap">
              Trusted by professionals and recruiters across growing companies
            </p>
          </div>

          <h1 className="mb-6 font-unbounded text-4xl leading-none font-bold tracking-tighter md:text-[7vw] lg:text-8xl">
            Real Stories.
            <br />
            Real Career Growth.
          </h1>

          <p className="max-w-2xl font-mont text-zinc-600 md:text-[2vw] lg:text-xl">
            Discover how JobZy helps job seekers find better opportunities and
            helps companies hire the right talent faster with confidence.
          </p>
        </div>
        <MarqueeDemo />
      </section>
      {/* Why us */}
      <section className="bg-linear-to-t from-white to-red-200 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-10">
            <CoverDemo/>
            {/* Top Highlight */}
            <div className="grid grid-cols-1 items-stretch gap-4 lg:grid-cols-3">
              <img
                src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0"
                alt="Hiring process"
                className="h-72 w-full rounded-md object-cover lg:h-auto"
              />

              <div className="col-span-2 flex items-center justify-center rounded-lg border bg-white p-6 shadow-sm">
                <div className="flex flex-col gap-4">
                  <q className="font-unbounded text-xl font-medium lg:text-3xl">
                    JobZy simplifies hiring and job searching with a modern,
                    reliable platform designed for real-world career growth.
                  </q>

                  <div className="flex flex-col items-start">
                    <p className="font-medium">Trusted Platform</p>
                    <p className="text-gray-500">
                      Connecting professionals & companies
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
              <div className="rounded-2xl border bg-white shadow-2xl">
                <div className="p-6 font-mont text-gray-600">
                  <q>
                    Verified job listings ensure candidates apply to real
                    opportunities with trusted companies.
                  </q>
                </div>
                <div className="flex items-center p-6 pt-0">
                  <div className="text-sm">
                    <p className="font-clash font-medium">Verified Jobs</p>
                    <p className="font-clash text-gray-500">
                      Safe & reliable hiring
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border bg-white shadow-2xl">
                <div className="p-6 font-mont text-gray-600">
                  <q>
                    Apply to jobs quickly and track applications with a seamless
                    and user-friendly experience.
                  </q>
                </div>
                <div className="flex items-center p-6 pt-0">
                  <div className="text-sm">
                    <p className="font-clash font-medium">Easy Apply</p>
                    <p className="font-clash text-gray-500">
                      Faster job applications
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border bg-white shadow-2xl">
                <div className="p-6 font-mont text-gray-600">
                  <q>
                    Recruiters can find and hire the right talent faster with
                    streamlined tools and smart filtering.
                  </q>
                </div>
                <div className="flex items-center p-6 pt-0">
                  <div className="text-sm">
                    <p className="font-clash font-medium">Smart Hiring</p>
                    <p className="font-clash text-gray-500">
                      Efficient recruitment process
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA */}
      <CallToAction/>
    </>
  )
}

export default Hero

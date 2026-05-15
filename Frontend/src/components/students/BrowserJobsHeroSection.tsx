export default function BrowserJobsHeroSection() {
  return (
    <section className="overflow-hidden bg-[#fbf7ef] px-4 lg:py-32 py-22 sm:px-6 lg:px-8 dark:bg-[#050509]">
      <div className="mx-auto  max-w-7xl">
        {/* Hero */}
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center rounded-full border border-violet-200 bg-white p-1 shadow-sm dark:border-white/10 dark:bg-[#111118]">
              <span className="rounded-full bg-[#7047ff] px-4 py-1 font-unbounded text-xs font-medium text-white">
                Smart Hiring Platform
              </span>

              <span className="px-4 font-mont text-sm text-[#6b6658] dark:text-slate-400">
                Find Jobs & Hire Talent Faster
              </span>
            </div>

            {/* Heading */}
            <h1 className="mt-7 max-w-2xl font-unbounded text-4xl leading-tight font-semibold tracking-tight text-[#393629] sm:text-5xl lg:text-7xl dark:text-white">
              Helping You Build,
              <br />
              Grow & Succeed Faster
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-2xl font-mont text-base leading-8 text-[#6b6658] dark:text-slate-400">
              Discover top opportunities, connect with leading companies, and
              build your dream career with Jobzy. Whether you're a job seeker
              searching for the perfect role or a recruiter hiring exceptional
              talent, everything you need is in one place.
            </p>
          </div>

          {/* Right Side */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Floating Blur */}
            <div className="absolute top-0 -right-16 h-56 w-56 rounded-full bg-violet-500/20 blur-3xl" />

            {/* Image */}
            <img
              src="https://cdn.flyonui.com/fy-assets/blocks/marketing-ui/hero/hero-20.png"
              alt="Jobzy Hero"
              className="relative z-10 h-auto w-full max-w-130 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

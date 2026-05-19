import { ArrowRight, HardHat, ChevronRight } from "lucide-react"
import { Link, useParams } from "react-router-dom"
const ComingSoonConstruction = () => {
  const { feature } = useParams()

  const featureTitle = feature
    ? feature
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    : "This Feature"

  return (
    <>
      <section className="relative min-h-screen overflow-hidden bg-[#0b0d10] py-16 text-white lg:py-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.14),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.05),transparent_24%)]" />

        <div className="absolute inset-0 [background-image:linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:72px_72px] opacity-[0.06]" />

        <div className="absolute top-24 right-0 left-0 h-px bg-gradient-to-r from-transparent via-amber-400/20 to-transparent" />
        <div className="absolute right-0 bottom-20 left-0 h-px bg-gradient-to-r from-transparent via-amber-400/10 to-transparent" />

        <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid w-full items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="relative z-10">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-4 py-2 text-[11px] font-semibold tracking-[0.28em] text-amber-300 uppercase backdrop-blur">
                <HardHat className="h-4 w-4" />
                Premium build in progress
              </div>

              <h1 className="max-w-4xl font-unbounded text-4xl leading-[0.98] font-semibold tracking-tight text-white sm:text-5xl lg:text-7xl">
                {featureTitle} is currently under construction.
              </h1>

              <p className="mt-6 max-w-xl font-mont text-sm leading-7 text-slate-300 sm:text-base">
                The platform is under structured construction — sharper design,
                cleaner interactions, and a more polished experience are being
                assembled right now.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#notify"
                  className="group inline-flex items-center gap-2 rounded-full bg-amber-400 px-6 py-3 font-mont text-sm font-semibold text-black transition duration-300 hover:bg-amber-300"
                >
                  Notify me at launch
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>

                <Link
                  to="/"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 font-mont text-sm font-medium text-white transition hover:bg-white/[0.08]"
                >
                  Back to home
                </Link>
              </div>

              <div className="mt-10 space-y-4">
                <div className="flex items-start gap-3">
                  <ChevronRight className="mt-0.5 h-4 w-4 text-amber-300" />
                  <p className="font-mont text-sm text-slate-300">
                    New visual system with premium layout and richer
                    interactions
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <ChevronRight className="mt-0.5 h-4 w-4 text-amber-300" />
                  <p className="font-mont text-sm text-slate-300">
                    Faster, cleaner browsing experience with stronger product
                    clarity
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <ChevronRight className="mt-0.5 h-4 w-4 text-amber-300" />
                  <p className="font-mont text-sm text-slate-300">
                    Launch updates and early access for users on the waitlist
                  </p>
                </div>
              </div>

              <div
                id="notify"
                className="mt-10 max-w-xl rounded-[28px] border border-white/10 bg-white/[0.04] p-4 shadow-[0_20px_70px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-5"
              >
                <label className="mb-3 block font-mont text-[11px] font-semibold tracking-[0.24em] text-slate-400 uppercase">
                  Join the waitlist
                </label>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="h-12 flex-1 rounded-full border border-white/10 bg-black/20 px-5 font-mont text-sm text-white outline-none placeholder:text-slate-500 focus:border-amber-400/60"
                  />
                  <button className="h-12 rounded-full bg-white px-6 font-mont text-sm font-semibold text-black transition hover:bg-amber-300">
                    Get notified
                  </button>
                </div>
              </div>
            </div>

            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 rounded-[40px] bg-[linear-gradient(180deg,rgba(251,191,36,0.08),rgba(255,255,255,0.02))] blur-3xl" />

              <div className="relative w-full max-w-[760px] rounded-[36px] border border-white/10 bg-[#11141a]/90 p-5 shadow-[0_30px_120px_rgba(0,0,0,0.55)] backdrop-blur-xl sm:p-8">
                <div className="mb-5 flex items-center justify-between border-b border-dashed border-amber-400/20 pb-4">
                  <div>
                    <p className="font-mont text-[11px] tracking-[0.22em] text-amber-300 uppercase">
                      Construction scene
                    </p>
                    <h2 className="mt-2 font-mont text-2xl font-bold text-white">
                      Building the experience
                    </h2>
                  </div>

                  <div className="relative flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                    <span className="font-mont text-xs tracking-[0.18em] text-slate-400 uppercase">
                      Active
                    </span>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#0b0e13] p-4 sm:p-6">
                  <div className="absolute inset-0 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.07]" />

                  <div className="relative h-[420px] w-full">
                    <div className="absolute top-0 left-[12%] h-24 w-px bg-white/15" />
                    <div className="absolute top-20 left-[12%] h-6 w-6 animate-bounce rounded-full border-2 border-amber-300 bg-amber-400/20" />
                    <div className="absolute top-[104px] left-[11.2%] h-10 w-10 rounded-full border border-amber-300/30" />

                    <svg
                      viewBox="0 0 800 500"
                      className="absolute inset-0 h-full w-full"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M90 80H360"
                        stroke="rgba(255,255,255,0.14)"
                        strokeWidth="8"
                        strokeLinecap="round"
                      />
                      <path
                        d="M350 80L430 140"
                        stroke="rgba(255,255,255,0.14)"
                        strokeWidth="8"
                        strokeLinecap="round"
                      />
                      <path
                        d="M150 140V320"
                        stroke="rgba(255,255,255,0.14)"
                        strokeWidth="8"
                      />
                      <path
                        d="M280 140V320"
                        stroke="rgba(255,255,255,0.14)"
                        strokeWidth="8"
                      />
                      <path
                        d="M150 140H280"
                        stroke="rgba(255,255,255,0.14)"
                        strokeWidth="8"
                      />
                      <path
                        d="M150 230H280"
                        stroke="rgba(255,255,255,0.14)"
                        strokeWidth="8"
                      />
                      <path
                        d="M150 320H280"
                        stroke="rgba(255,255,255,0.14)"
                        strokeWidth="8"
                      />

                      <path
                        d="M430 140L520 140"
                        stroke="rgba(251,191,36,0.75)"
                        strokeWidth="6"
                        strokeLinecap="round"
                      >
                        <animate
                          attributeName="stroke-dasharray"
                          values="0,200;60,140;0,200"
                          dur="4s"
                          repeatCount="indefinite"
                        />
                      </path>

                      <rect
                        x="470"
                        y="170"
                        width="170"
                        height="110"
                        rx="18"
                        fill="rgba(255,255,255,0.04)"
                        stroke="rgba(255,255,255,0.08)"
                      />
                      <rect
                        x="490"
                        y="192"
                        width="130"
                        height="10"
                        rx="5"
                        fill="rgba(251,191,36,0.85)"
                      >
                        <animate
                          attributeName="width"
                          values="40;130;80;130"
                          dur="5s"
                          repeatCount="indefinite"
                        />
                      </rect>
                      <rect
                        x="490"
                        y="218"
                        width="100"
                        height="8"
                        rx="4"
                        fill="rgba(255,255,255,0.18)"
                      />
                      <rect
                        x="490"
                        y="238"
                        width="84"
                        height="8"
                        rx="4"
                        fill="rgba(255,255,255,0.12)"
                      />
                      <rect
                        x="490"
                        y="258"
                        width="110"
                        height="8"
                        rx="4"
                        fill="rgba(255,255,255,0.12)"
                      />

                      <rect
                        x="60"
                        y="364"
                        width="680"
                        height="18"
                        rx="9"
                        fill="rgba(255,255,255,0.08)"
                      />
                      <path
                        d="M0 382H800"
                        stroke="rgba(251,191,36,0.18)"
                        strokeWidth="2"
                        strokeDasharray="8 10"
                      />
                    </svg>

                    <div className="absolute bottom-[84px] left-[18%] flex items-end gap-14">
                      <div className="worker worker-one relative h-24 w-12">
                        <div className="absolute top-0 left-2 h-6 w-6 rounded-full bg-amber-300" />
                        <div className="absolute top-5 left-1.5 h-3 w-7 rounded-t-full bg-amber-400" />
                        <div className="absolute top-8 left-0 h-9 w-10 rounded-xl bg-[#f3f4f6]" />
                        <div className="absolute top-[18px] left-[2px] h-2 w-10 rounded-full bg-amber-500" />
                        <div className="absolute top-[44px] left-1 h-10 w-2 origin-top animate-[armSwing_1.2s_ease-in-out_infinite] rounded-full bg-slate-300" />
                        <div className="absolute top-[44px] right-1 h-10 w-2 origin-top animate-[armSwingAlt_1.2s_ease-in-out_infinite] rounded-full bg-slate-300" />
                        <div className="absolute top-[78px] left-3 h-12 w-2 origin-top animate-[legWalk_1s_ease-in-out_infinite] rounded-full bg-slate-400" />
                        <div className="absolute top-[78px] right-3 h-12 w-2 origin-top animate-[legWalkAlt_1s_ease-in-out_infinite] rounded-full bg-slate-400" />
                        <div className="absolute top-[52px] left-[35px] h-1.5 w-12 origin-left animate-[hammerHit_1.1s_ease-in-out_infinite] rounded-full bg-amber-300" />
                      </div>

                      <div className="worker worker-two relative h-24 w-12 translate-y-1">
                        <div className="absolute top-0 left-2 h-6 w-6 rounded-full bg-amber-300" />
                        <div className="absolute top-5 left-1.5 h-3 w-7 rounded-t-full bg-amber-400" />
                        <div className="absolute top-8 left-0 h-9 w-10 rounded-xl bg-[#dbeafe]" />
                        <div className="absolute top-[44px] left-1 h-10 w-2 origin-top animate-[armRaise_1.6s_ease-in-out_infinite] rounded-full bg-slate-300" />
                        <div className="absolute top-[44px] right-1 h-10 w-2 origin-top animate-[armRaiseAlt_1.6s_ease-in-out_infinite] rounded-full bg-slate-300" />
                        <div className="absolute top-[78px] left-3 h-12 w-2 origin-top animate-[legWalkAlt_1s_ease-in-out_infinite] rounded-full bg-slate-400" />
                        <div className="absolute top-[78px] right-3 h-12 w-2 origin-top animate-[legWalk_1s_ease-in-out_infinite] rounded-full bg-slate-400" />
                      </div>

                      <div className="relative h-20 w-20">
                        <div className="absolute bottom-0 left-2 h-10 w-14 rounded-md border border-white/10 bg-white/5" />
                        <div className="absolute bottom-8 left-5 h-3 w-8 animate-pulse rounded-sm bg-amber-300/80" />
                      </div>
                    </div>

                    <div className="absolute top-4 right-0 left-0 flex justify-end">
                      <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 font-mont text-[11px] tracking-[0.18em] text-slate-300 uppercase">
                        Launching soon
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-5 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <p className="font-mont text-[11px] tracking-[0.18em] text-slate-500 uppercase">
                      Status
                    </p>
                    <p className="mt-2 font-mont text-base font-semibold text-white">
                      Assembly phase
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <p className="font-mont text-[11px] tracking-[0.18em] text-slate-500 uppercase">
                      Focus
                    </p>
                    <p className="mt-2 font-mont text-base font-semibold text-white">
                      Motion & polish
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <p className="font-mont text-[11px] tracking-[0.18em] text-slate-500 uppercase">
                      Access
                    </p>
                    <p className="mt-2 font-mont text-base font-semibold text-white">
                      Waitlist only
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes armSwing {
          0%, 100% { transform: rotate(18deg); }
          50% { transform: rotate(72deg); }
        }

        @keyframes armSwingAlt {
          0%, 100% { transform: rotate(-10deg); }
          50% { transform: rotate(18deg); }
        }

        @keyframes hammerHit {
          0%, 100% { transform: rotate(12deg) translateX(0); }
          50% { transform: rotate(-30deg) translateX(2px); }
        }

        @keyframes legWalk {
          0%, 100% { transform: rotate(18deg); }
          50% { transform: rotate(-12deg); }
        }

        @keyframes legWalkAlt {
          0%, 100% { transform: rotate(-16deg); }
          50% { transform: rotate(14deg); }
        }

        @keyframes armRaise {
          0%, 100% { transform: rotate(10deg); }
          50% { transform: rotate(-55deg); }
        }

        @keyframes armRaiseAlt {
          0%, 100% { transform: rotate(-8deg); }
          50% { transform: rotate(40deg); }
        }

        .worker {
          filter: drop-shadow(0 10px 16px rgba(0, 0, 0, 0.35));
        }

        @media (prefers-reduced-motion: reduce) {
          .worker,
          .worker * {
            animation: none !important;
          }
        }
      `}</style>
    </>
  )
}

export default ComingSoonConstruction

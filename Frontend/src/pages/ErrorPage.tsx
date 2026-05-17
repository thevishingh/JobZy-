import { Link, useNavigate } from "react-router-dom"
import { ArrowLeft, Compass, Home, SearchSlash } from "lucide-react"

// interface
interface User {
  name: string
  role: string
}

interface ErrorPageProps {
  user: User
}

export default function ErrorPage({ user }: ErrorPageProps) {
  const navigate = useNavigate()

  const getAccessibleRoute = () => {
    if (!user) return "/"
    if (user.role === "student") return "/jobs"
    if (user.role === "recruiter") return "/admin/companies"
    return "/"
  }

  const handleGoBack = () => {
    if (window.history.length > 1) {
      navigate(-1)
    } else {
      navigate(getAccessibleRoute(), { replace: true })
    }
  }

  return (
    <main className="min-h-screen overflow-hidden bg-slate-50 px-4 py-6 text-slate-900 transition-colors duration-300 sm:px-6 lg:px-8 dark:bg-[#070b14] dark:text-white">
      <div className="mx-auto flex min-h-[calc(100vh-3rem)] max-w-7xl items-center">
        <section className="relative grid w-full overflow-hidden rounded-[32px] border border-slate-200/70 bg-white shadow-[0_20px_80px_rgba(15,23,42,0.08)] lg:grid-cols-2 dark:border-white/10 dark:bg-white/[0.03] dark:shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(244,114,182,0.10),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.10),transparent_30%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(236,72,153,0.10),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.08),transparent_25%)]" />

          {/* Left Content */}
          <div className="relative z-10 flex flex-col justify-center px-6 py-12 sm:px-10 lg:px-14 lg:py-16">
            <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-rose-200 bg-rose-50 px-3 py-1 text-xs font-semibold tracking-[0.25em] text-rose-600 uppercase dark:border-rose-500/20 dark:bg-rose-500/10 dark:text-rose-300">
              <SearchSlash className="h-3.5 w-3.5" />
              404 Error
            </div>

            <h1 className="max-w-xl text-5xl font-black tracking-tight text-slate-900 sm:text-6xl lg:text-7xl dark:text-white">
              This route
              <span className="block bg-gradient-to-r from-rose-500 via-fuchsia-500 to-blue-500 bg-clip-text text-transparent">
                does not exist
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg dark:text-slate-300">
              The page you are trying to open may have been removed, renamed, or
              is not available for your account right now. Use one of the
              actions below to continue safely.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={handleGoBack}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
              >
                <ArrowLeft className="h-4 w-4" />
                Go back
              </button>

              <Link
                to={getAccessibleRoute()}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-700 transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10"
              >
                <Home className="h-4 w-4" />
                Go to valid page
              </Link>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200/80 bg-slate-50/80 p-4 dark:border-white/10 dark:bg-white/[0.04]">
                <p className="text-sm font-semibold text-slate-900 dark:text-white">
                  Smart fallback
                </p>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                  We route users to a page they can actually access.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200/80 bg-slate-50/80 p-4 dark:border-white/10 dark:bg-white/[0.04]">
                <p className="text-sm font-semibold text-slate-900 dark:text-white">
                  Theme aware
                </p>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                  Designed to feel polished in both light and dark mode.
                </p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative flex min-h-[340px] items-center justify-center px-6 py-10 sm:px-10 lg:min-h-full lg:px-12">
            <div className="relative w-full max-w-xl">
              <div className="absolute top-10 -left-6 h-28 w-28 rounded-full bg-pink-300/30 blur-3xl dark:bg-pink-500/10" />
              <div className="absolute -right-4 bottom-6 h-32 w-32 rounded-full bg-blue-300/30 blur-3xl dark:bg-blue-500/10" />

              <div className="relative overflow-hidden rounded-[28px] border border-slate-200/80 bg-gradient-to-br from-white via-slate-50 to-sky-50 p-5 shadow-[0_20px_60px_rgba(37,99,235,0.10)] sm:p-6 dark:border-white/10 dark:bg-[linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] dark:shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(96,165,250,0.18),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(244,114,182,0.16),transparent_28%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.18),transparent_25%),radial-gradient(circle_at_bottom_left,rgba(236,72,153,0.14),transparent_25%)]" />

                <div className="relative z-10">
                  <div className="mb-4 flex items-center justify-between rounded-2xl border border-white/50 bg-white/80 px-4 py-3 backdrop-blur dark:border-white/10 dark:bg-white/[0.04]">
                    <div>
                      <p className="text-xs font-medium tracking-[0.25em] text-slate-400 uppercase dark:text-slate-500">
                        Navigation status
                      </p>
                      <p className="mt-1 text-sm font-semibold text-slate-900 dark:text-white">
                        Destination unavailable
                      </p>
                    </div>
                    <div className="rounded-xl bg-rose-100 p-3 text-rose-600 dark:bg-rose-500/10 dark:text-rose-300">
                      <Compass className="h-5 w-5" />
                    </div>
                  </div>

                  <div className="grid gap-4">
                    <div className="rounded-3xl border border-slate-200/70 bg-white/90 p-5 backdrop-blur dark:border-white/10 dark:bg-white/[0.04]">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                            Requested path
                          </p>
                          <p className="mt-2 text-lg font-bold text-slate-900 dark:text-white">
                            /unknown-route
                          </p>
                        </div>
                        <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700 dark:bg-amber-500/10 dark:text-amber-300">
                          Missing
                        </span>
                      </div>

                      <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-white/10">
                        <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-rose-500 via-fuchsia-500 to-blue-500" />
                      </div>

                      <div className="mt-4 grid grid-cols-3 gap-3">
                        <div className="rounded-2xl bg-slate-100 p-3 dark:bg-white/[0.04]">
                          <p className="text-xs text-slate-500 dark:text-slate-400">
                            Status
                          </p>
                          <p className="mt-1 text-sm font-semibold text-slate-900 dark:text-white">
                            404
                          </p>
                        </div>
                        <div className="rounded-2xl bg-slate-100 p-3 dark:bg-white/[0.04]">
                          <p className="text-xs text-slate-500 dark:text-slate-400">
                            Access
                          </p>
                          <p className="mt-1 text-sm font-semibold text-slate-900 dark:text-white">
                            Blocked
                          </p>
                        </div>
                        <div className="rounded-2xl bg-slate-100 p-3 dark:bg-white/[0.04]">
                          <p className="text-xs text-slate-500 dark:text-slate-400">
                            Fallback
                          </p>
                          <p className="mt-1 text-sm font-semibold text-slate-900 dark:text-white">
                            Ready
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-center rounded-3xl border border-dashed border-slate-300 bg-white/70 px-6 py-8 text-center dark:border-white/10 dark:bg-white/[0.03]">
                      <div className="relative w-full max-w-sm">
                        <div className="absolute top-8 left-8 h-20 w-20 rounded-full bg-rose-300/20 blur-3xl dark:bg-rose-500/10" />
                        <div className="absolute right-6 bottom-6 h-20 w-20 rounded-full bg-blue-300/20 blur-3xl dark:bg-blue-500/10" />

                        <div className="relative rounded-[28px] border border-slate-200/80 bg-gradient-to-br from-white via-slate-50 to-slate-100 p-6 shadow-[0_10px_40px_rgba(15,23,42,0.08)] dark:border-white/10 dark:bg-[linear-gradient(135deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))]">
                          <svg
                            viewBox="0 0 360 220"
                            className="mx-auto w-full max-w-[300px]"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="235"
                              y="58"
                              width="78"
                              height="92"
                              rx="22"
                              className="fill-slate-100 stroke-slate-300 dark:fill-slate-900 dark:stroke-slate-700"
                              strokeWidth="3"
                            />
                            <circle
                              cx="262"
                              cy="92"
                              r="8"
                              className="fill-slate-400 dark:fill-slate-500"
                            />
                            <circle
                              cx="286"
                              cy="92"
                              r="8"
                              className="fill-slate-400 dark:fill-slate-500"
                            />
                            <rect
                              x="255"
                              y="118"
                              width="38"
                              height="8"
                              rx="4"
                              className="fill-slate-300 dark:fill-slate-700"
                            />

                            <path
                              d="M240 106C198 112 170 126 143 152"
                              stroke="currentColor"
                              strokeWidth="6"
                              strokeLinecap="round"
                              className="text-slate-400 dark:text-slate-500"
                              strokeDasharray="10 10"
                            >
                              <animate
                                attributeName="stroke-dashoffset"
                                values="0;-40"
                                dur="2s"
                                repeatCount="indefinite"
                              />
                            </path>

                            <g className="animate-pulse">
                              <path
                                d="M183 126L194 118"
                                stroke="#f43f5e"
                                strokeWidth="4"
                                strokeLinecap="round"
                              />
                              <path
                                d="M186 136L199 140"
                                stroke="#f59e0b"
                                strokeWidth="4"
                                strokeLinecap="round"
                              />
                              <path
                                d="M190 122L192 108"
                                stroke="#3b82f6"
                                strokeWidth="4"
                                strokeLinecap="round"
                              />
                            </g>

                            <g className="origin-center animate-[plugFloat_3s_ease-in-out_infinite]">
                              <rect
                                x="102"
                                y="142"
                                width="44"
                                height="28"
                                rx="10"
                                className="fill-slate-900 dark:fill-white"
                              />
                              <rect
                                x="111"
                                y="132"
                                width="5"
                                height="14"
                                rx="2"
                                className="fill-slate-700 dark:fill-slate-300"
                              />
                              <rect
                                x="128"
                                y="132"
                                width="5"
                                height="14"
                                rx="2"
                                className="fill-slate-700 dark:fill-slate-300"
                              />
                              <path
                                d="M102 156C84 155 71 160 58 172"
                                stroke="currentColor"
                                strokeWidth="6"
                                strokeLinecap="round"
                                className="text-slate-700 dark:text-slate-300"
                              />
                            </g>

                            <text
                              x="36"
                              y="48"
                              className="fill-slate-500 dark:fill-slate-400"
                              style={{ fontSize: "16px", fontWeight: 700 }}
                            >
                              connection lost
                            </text>
                          </svg>

                          <p className="mt-4 text-sm font-medium text-slate-500 dark:text-slate-400">
                            We could not match this route to an active screen.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

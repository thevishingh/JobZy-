import React from "react"
import { Link, useNavigate } from "react-router-dom"

export default function ErrorPage({ user }) {
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
    <main className="relative overflow-hidden bg-white px-6 py-16 dark:bg-zinc-950">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(244,63,94,0.10),transparent_35%)] dark:bg-[radial-gradient(circle_at_top,rgba(244,63,94,0.12),transparent_30%)]" />

      <div className="mx-auto grid min-h-[calc(100vh-8rem)] max-w-6xl items-center gap-14 lg:grid-cols-2">
        <div className="order-2 text-center lg:order-1 lg:text-left">
          <p className="mb-3 text-sm font-semibold tracking-[0.35em] text-rose-500 uppercase dark:text-rose-400">
            Error 404
          </p>

          <h1 className="text-6xl font-black tracking-tight text-zinc-900 sm:text-7xl lg:text-8xl dark:text-white">
            Power cut.
          </h1>

          <h2 className="mt-3 text-2xl font-bold text-zinc-700 sm:text-3xl dark:text-zinc-200">
            This page has gone offline
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-zinc-600 lg:mx-0 dark:text-zinc-400">
            Looks like our little troublemaker pulled the wire from the board,
            so this page is no longer reachable. You can go back or jump to a
            page that is available for your account.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:items-start">
            <button
              onClick={handleGoBack}
              className="inline-flex h-12 items-center justify-center rounded-xl bg-rose-500 px-6 text-sm font-semibold text-white shadow-lg shadow-rose-500/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-rose-600 dark:hover:bg-rose-400"
            >
              Go back
            </button>

            <Link
              to={getAccessibleRoute()}
              className="inline-flex h-12 items-center justify-center rounded-xl border border-zinc-200 bg-zinc-50 px-6 text-sm font-semibold text-zinc-700 transition-all duration-200 hover:-translate-y-0.5 hover:border-rose-300 hover:text-rose-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:border-rose-500 dark:hover:text-rose-400"
            >
              Go to valid page
            </Link>
          </div>
        </div>

        <div className="order-1 flex justify-center lg:order-2">
          <div className="relative w-full max-w-xl">
            <div className="absolute top-10 left-10 h-24 w-24 animate-pulse rounded-full bg-rose-200/60 blur-3xl dark:bg-rose-500/10" />
            <div className="absolute right-10 bottom-10 h-24 w-24 animate-pulse rounded-full bg-amber-200/50 blur-3xl dark:bg-amber-500/10" />

            <div className="relative rounded-[2rem] border border-zinc-200 bg-gradient-to-br from-white to-zinc-50 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)] dark:border-zinc-800 dark:from-zinc-900 dark:to-zinc-950 dark:shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
              <svg
                viewBox="0 0 700 520"
                className="h-full w-full"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="40"
                  y="420"
                  width="620"
                  height="14"
                  rx="7"
                  className="fill-zinc-200 dark:fill-zinc-800"
                />

                <rect
                  x="455"
                  y="85"
                  width="150"
                  height="170"
                  rx="24"
                  className="fill-zinc-100 stroke-zinc-300 dark:fill-zinc-900 dark:stroke-zinc-700"
                  strokeWidth="3"
                />
                <circle
                  cx="505"
                  cy="135"
                  r="16"
                  className="animate-pulse fill-emerald-400 dark:fill-emerald-500"
                />
                <circle
                  cx="555"
                  cy="135"
                  r="16"
                  className="fill-rose-400 dark:fill-rose-500"
                />
                <rect
                  x="490"
                  y="180"
                  width="80"
                  height="24"
                  rx="12"
                  className="fill-zinc-300 dark:fill-zinc-700"
                />
                <rect
                  x="488"
                  y="220"
                  width="84"
                  height="12"
                  rx="6"
                  className="fill-zinc-200 dark:fill-zinc-800"
                />

                <path
                  d="M490 232C420 250 385 280 348 334"
                  stroke="currentColor"
                  strokeWidth="6"
                  strokeLinecap="round"
                  className="text-zinc-400 dark:text-zinc-500"
                  strokeDasharray="12 14"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    values="0;-52"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </path>

                <path
                  d="M348 334C330 350 310 352 292 340"
                  stroke="currentColor"
                  strokeWidth="6"
                  strokeLinecap="round"
                  className="text-rose-500 dark:text-rose-400"
                />

                <g className="origin-bottom animate-[float_3s_ease-in-out_infinite]">
                  <ellipse
                    cx="245"
                    cy="412"
                    rx="92"
                    ry="18"
                    className="fill-zinc-200/80 dark:fill-zinc-800/80"
                  />

                  <path
                    d="M190 330C190 286 220 255 264 255C308 255 338 286 338 330V362C338 398 309 422 264 422C219 422 190 398 190 362V330Z"
                    className="fill-amber-200 dark:fill-amber-300"
                  />

                  <circle
                    cx="225"
                    cy="252"
                    r="34"
                    className="fill-amber-200 dark:fill-amber-300"
                  />
                  <circle
                    cx="303"
                    cy="252"
                    r="34"
                    className="fill-amber-200 dark:fill-amber-300"
                  />

                  <circle
                    cx="225"
                    cy="252"
                    r="15"
                    className="fill-rose-200 dark:fill-rose-100"
                  />
                  <circle
                    cx="303"
                    cy="252"
                    r="15"
                    className="fill-rose-200 dark:fill-rose-100"
                  />

                  <circle cx="245" cy="320" r="9" className="fill-zinc-900" />
                  <circle cx="289" cy="320" r="9" className="fill-zinc-900" />

                  <path
                    d="M248 356C258 365 272 365 282 356"
                    stroke="#18181B"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />

                  <path
                    d="M340 340C372 328 390 310 408 288"
                    stroke="currentColor"
                    strokeWidth="8"
                    strokeLinecap="round"
                    className="text-amber-300 dark:text-amber-200"
                  />

                  <rect
                    x="401"
                    y="272"
                    width="18"
                    height="30"
                    rx="6"
                    transform="rotate(28 401 272)"
                    className="fill-zinc-800 dark:fill-zinc-100"
                  />

                  <path
                    d="M180 355C160 340 144 332 126 327"
                    stroke="currentColor"
                    strokeWidth="8"
                    strokeLinecap="round"
                    className="text-amber-300 dark:text-amber-200"
                  />
                  <path
                    d="M136 327C114 306 97 287 84 262"
                    stroke="currentColor"
                    strokeWidth="7"
                    strokeLinecap="round"
                    className="text-amber-300 dark:text-amber-200"
                  />
                  <path
                    d="M84 262C75 245 78 228 96 221"
                    stroke="currentColor"
                    strokeWidth="7"
                    strokeLinecap="round"
                    className="text-amber-300 dark:text-amber-200"
                  />
                </g>

                <g className="animate-pulse">
                  <path
                    d="M334 336L357 327"
                    stroke="#FB7185"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  <path
                    d="M336 348L362 356"
                    stroke="#F59E0B"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  <path
                    d="M344 322L347 302"
                    stroke="#F43F5E"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </g>

                <text
                  x="452"
                  y="52"
                  className="fill-zinc-400 dark:fill-zinc-500"
                  style={{ fontSize: "18px", fontWeight: 700 }}
                >
                  control board
                </text>

                <text
                  x="82"
                  y="110"
                  className="fill-zinc-500 dark:fill-zinc-400"
                  style={{ fontSize: "22px", fontWeight: 800 }}
                >
                  4
                </text>
                <text
                  x="118"
                  y="110"
                  className="fill-zinc-500 dark:fill-zinc-400"
                  style={{ fontSize: "22px", fontWeight: 800 }}
                >
                  0
                </text>
                <text
                  x="154"
                  y="110"
                  className="fill-zinc-500 dark:fill-zinc-400"
                  style={{ fontSize: "22px", fontWeight: 800 }}
                >
                  4
                </text>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </main>
  )
}

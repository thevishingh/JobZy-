import { setAuthUser, setLoading } from "@/redux/authSlice"
import { USER_API_END_POINT } from "@/utils/constant"
import axios from "axios"
import { useForm } from "react-hook-form"
import { FaCheckCircle, FaEnvelope, FaLock, FaGoogle } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "@/redux/store"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "sonner"
import { Loader2 } from "lucide-react"

type LoginFormData = {
  email: string
  password: string
  role: "student" | "recruiter"
}

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm<LoginFormData>({
    defaultValues: {
      email: "",
      password: "",
      role: "student",
    },
  })

  //navigate
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { loading } = useSelector((store: RootState) => store.auth)
  const selectedRole = watch("role")

  // Voice welcome function
  const speakWelcome = (name: string) => {
    const message = new SpeechSynthesisUtterance(`Hello ${name}, welcome back`)

    const voices = window.speechSynthesis.getVoices()

    // try to find a female-like English voice
    const femaleVoice = voices.find(
      (voice) =>
        voice.name.includes("Female") ||
        voice.name.includes("Google UK English Female") ||
        voice.name.includes("Samantha") ||
        voice.name.includes("Zira")
    )

    if (femaleVoice) {
      message.voice = femaleVoice
    }

    message.rate = 1
    message.pitch = 1.1
    message.volume = 1

    window.speechSynthesis.speak(message)
  }

  const onSubmit = async (data: LoginFormData) => {
    try {
      dispatch(setLoading(true))
      const response = await axios.post(`${USER_API_END_POINT}/login`, data, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })

      if (response.data.success) {
        dispatch(setAuthUser(response.data.user))
        toast.success(response.data.message)
        const userName = response.data.user?.fullName || "User"
        speakWelcome(userName)
        navigate("/")
      }
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Login failed")
    } finally {
      dispatch(setLoading(false))
    }
  }
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#2a6240c0] text-white">
      <div className="absolute inset-0">
        <div className="absolute -top-32 left-[-10%] h-80 w-80 rounded-full bg-cyan-200/20 blur-3xl" />
        <div className="blur-4xl absolute right-[-8%] bottom-[-8%] h-96 w-96 rounded-full bg-fuchsia-200/10" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.78)_0%,rgba(255,255,255,0.56)_12%,rgba(17,22,42,0.10)_30%,rgba(11,16,32,0.88)_58%,rgba(11,16,32,1)_100%)]" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid w-full gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <div className="hidden lg:flex lg:flex-col lg:justify-between">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-3 rounded-full border border-emerald-300/70 bg-white/75 px-4 py-2.5 shadow-[0_10px_35px_rgba(16,185,129,0.16)] backdrop-blur-xl">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
                </span>

                <span className="font-mont text-xs font-semibold tracking-[0.22em] text-slate-800 uppercase">
                  Smart hiring hub
                </span>
              </div>

              <h1 className="mt-8 max-w-lg font-unbounded text-4xl leading-tight text-white xl:text-5xl">
                A sharper way to access your hiring workspace.
              </h1>

              <p className="mt-5 max-w-md font-mont text-base leading-7 text-white/65">
                Sign in to manage applications, track interviews, and move
                faster with a cleaner workflow built for students and
                recruiters.
              </p>

              <div className="mt-10 grid max-w-lg grid-cols-1 gap-4 sm:grid-cols-2">
                {[
                  "Track applications in one place",
                  "Review candidate flow faster",
                  "Switch between student and recruiter",
                  "Designed for focused hiring workflows",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md"
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-cyan-400/15 text-cyan-300">
                        <FaCheckCircle className="h-4 w-4" />
                      </div>
                      <p className="font-mont text-sm leading-6 text-white/80">
                        {item}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 flex items-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
              <img
                src="https://www.auraui.com/memeimage/girl-working.jpg"
                alt="Women working"
                className="h-16 w-16 rounded-2xl object-cover"
              />
              <div>
                <p className="font-mont text-sm font-medium text-white/90">
                  Built for modern job workflows
                </p>
                <p className="mt-1 font-mont text-sm text-white/60">
                  Minimal friction, clearer decisions, smoother sign in.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-xl overflow-hidden rounded-[32px] border border-white/10 bg-white/8 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent" />
              <div className="p-6 sm:p-8 lg:p-10">
                <div className="mb-8">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="font-mont text-xs tracking-[0.22em] text-cyan-300/80 uppercase">
                        Welcome back
                      </p>
                      <h2 className="mt-3 font-unbounded text-3xl leading-tight text-white sm:text-[2rem]">
                        Sign in to <span className="text-cyan-300">JobZy</span>
                      </h2>
                    </div>

                    <div className="hidden h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10 sm:flex">
                      <FaLock className="text-cyan-200" />
                    </div>
                  </div>

                  <p className="mt-3 font-mont text-sm text-white/60">
                    Don&apos;t have an account?{" "}
                    <Link
                      to="/signup"
                      className="font-semibold text-cyan-300 transition hover:text-cyan-200"
                    >
                      Create one
                    </Link>
                  </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block font-mont text-xs tracking-[0.18em] text-white/55 uppercase"
                      >
                        Email
                      </label>
                      <div className="relative">
                        <FaEnvelope className="absolute top-1/2 left-4 -translate-y-1/2 text-white/35" />
                        <input
                          type="email"
                          id="email"
                          placeholder="you@example.com"
                          className="w-full rounded-2xl border border-white/10 bg-white/5 py-3.5 pr-4 pl-11 font-mont text-sm text-white transition outline-none placeholder:text-white/30 focus:border-cyan-300/60 focus:bg-white/8 focus:ring-4 focus:ring-cyan-400/10"
                          {...register("email", {
                            required: "Email is required",
                            pattern: {
                              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                              message: "Please enter a valid email address",
                            },
                          })}
                        />
                      </div>
                      {errors.email && (
                        <p className="mt-2 pl-1 font-mont text-sm text-rose-300">
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="password"
                        className="mb-2 block font-mont text-xs tracking-[0.18em] text-white/55 uppercase"
                      >
                        Password
                      </label>
                      <div className="relative">
                        <FaLock className="absolute top-1/2 left-4 -translate-y-1/2 text-white/35" />
                        <input
                          type="password"
                          id="password"
                          placeholder="Enter password"
                          className="w-full rounded-2xl border border-white/10 bg-white/5 py-3.5 pr-4 pl-11 font-mont text-sm text-white transition outline-none placeholder:text-white/30 focus:border-cyan-300/60 focus:bg-white/8 focus:ring-4 focus:ring-cyan-400/10"
                          {...register("password", {
                            required: "Password is required",
                            minLength: {
                              value: 6,
                              message: "Password must be at least 6 characters",
                            },
                          })}
                        />
                      </div>
                      {errors.password && (
                        <p className="mt-2 pl-1 font-mont text-sm text-rose-300">
                          {errors.password.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <p className="mb-3 font-mont text-xs tracking-[0.18em] text-white/55 uppercase">
                      Select role
                    </p>

                    <div className="grid grid-cols-2 gap-3">
                      <label
                        className={`group relative cursor-pointer overflow-hidden rounded-2xl border px-4 py-3.5 text-center font-mont text-sm font-medium transition ${
                          selectedRole === "student"
                            ? "border-cyan-300/60 bg-cyan-400/15 text-cyan-200 shadow-[0_0_0_1px_rgba(103,232,249,0.18)]"
                            : "border-white/10 bg-white/5 text-white/75 hover:border-white/20 hover:bg-white/8"
                        }`}
                      >
                        <input
                          type="radio"
                          value="student"
                          className="hidden"
                          {...register("role", {
                            required: "Please select a role",
                          })}
                        />
                        <span className="relative z-10">Student</span>
                      </label>

                      <label
                        className={`group relative cursor-pointer overflow-hidden rounded-2xl border px-4 py-3.5 text-center font-mont text-sm font-medium transition ${
                          selectedRole === "recruiter"
                            ? "border-cyan-300/60 bg-cyan-400/15 text-cyan-200 shadow-[0_0_0_1px_rgba(103,232,249,0.18)]"
                            : "border-white/10 bg-white/5 text-white/75 hover:border-white/20 hover:bg-white/8"
                        }`}
                      >
                        <input
                          type="radio"
                          value="recruiter"
                          className="hidden"
                          {...register("role", {
                            required: "Please select a role",
                          })}
                        />
                        <span className="relative z-10">Recruiter</span>
                      </label>
                    </div>

                    {errors.role && (
                      <p className="mt-2 pl-1 font-mont text-sm text-rose-300">
                        {errors.role.message}
                      </p>
                    )}
                  </div>

                  <div className="flex items-center justify-end">
                    <Link
                      to="/forgot-password"
                      className="font-mont text-sm font-medium text-cyan-300 transition hover:text-cyan-200"
                    >
                      Forgot password?
                    </Link>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full cursor-pointer rounded-2xl bg-white px-6 py-3.5 font-unbounded text-sm font-semibold text-slate-950 transition duration-300 hover:bg-cyan-200 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isSubmitting ? "Logging in..." : "Log in"}
                  </button>
                </form>

                <div className="mt-7">
                  <div className="relative mb-5">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-white/10" />
                    </div>
                    <div className="relative flex justify-center">
                      <span className="rounded-full border border-white/10 bg-[#11192d] px-3 py-1 font-mont text-[11px] tracking-[0.18em] text-white/45 uppercase">
                        Or continue with
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    disabled={loading}
                    className="flex w-full items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-3.5 font-mont text-sm font-medium text-white transition duration-300 hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        <span>Signing in...</span>
                      </>
                    ) : (
                      <>
                        <FaGoogle className="h-5 w-5 text-cyan-300" />
                        <span>Sign in with Google</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login

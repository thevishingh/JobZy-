import { useForm } from "react-hook-form"
import { FaCheckCircle, FaEnvelope, FaLock, FaGoogle } from "react-icons/fa"
import { Link } from "react-router-dom"

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

  const selectedRole = watch("role")

  const onSubmit = async (data: LoginFormData) => {
    console.log("Login Form Data:", data)
    alert(`Logged in as ${data.role}`)
  }

  return (
    <section className="relative min-h-screen bg-transparent">
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
        <div className="relative hidden items-end bg-gray-900/90 px-6 pt-60 pb-16 lg:flex lg:pb-24">
          <img
            src="https://www.auraui.com/memeimage/girl-working.jpg"
            alt="Women working"
            className="absolute inset-0 h-full w-full object-cover object-top opacity-80"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />

          <div className="relative z-10 max-w-2xl">
            <h3 className="font-unbounded text-4xl font-bold text-white drop-shadow-lg sm:text-5xl">
              Welcome back to{" "}
              <span className="font-clash text-red-500 underline underline-offset-4">
                JobZy
              </span>
              <br className="hidden xl:block" />
              find jobs and hire smarter
            </h3>

            <ul className="mt-10 grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
              {[
                "Apply to top jobs",
                "Recruiter dashboard",
                "Track applications",
                "Easy profile management",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 font-mont text-lg font-medium text-white"
                >
                  <FaCheckCircle className="h-5 w-5 text-orange-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="relative flex items-center justify-center bg-linear-to-br from-white via-red-100 to-white px-4 py-12 sm:px-6 lg:px-8">
          <div className="w-full max-w-2xl rounded-3xl bg-white/70 p-8 shadow-xl backdrop-blur-xl lg:p-10">
            <h2 className="font-unbounded text-3xl font-bold text-gray-900 sm:text-4xl">
              Sign in to{" "}
              <span className="font-mont text-red-600 underline underline-offset-4">
                JobZy
              </span>
            </h2>

            <p className="mt-2 font-mont text-sm text-gray-600">
              Don&apos;t have an account?{" "}
              <Link
                to="/signup"
                className="font-medium text-red-600 transition hover:underline"
              >
                Create one
              </Link>
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <div className="relative">
                    <FaEnvelope className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-500" />
                    <input
                      type="email"
                      id="email"
                      placeholder="Email Address"
                      className="w-full rounded-2xl border border-gray-200 bg-white py-3.5 pr-4 pl-11 font-mont text-sm text-black outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-200"
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
                    <p className="mt-1 pl-1 font-mont text-sm text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <div className="relative">
                    <FaLock className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-500" />
                    <input
                      type="password"
                      id="password"
                      placeholder="Password"
                      className="w-full rounded-2xl border border-gray-200 bg-white py-3.5 pr-4 pl-11 font-mont text-sm text-black outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-200"
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
                    <p className="mt-1 pl-1 font-mont text-sm text-red-500">
                      {errors.password.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <p className="mb-3 pl-1 font-mont text-sm font-medium text-gray-700">
                  Select Role
                </p>

                <div className="grid grid-cols-2 gap-3">
                  <label
                    className={`cursor-pointer rounded-2xl border px-4 py-3 text-center font-mont text-sm font-medium transition ${
                      selectedRole === "student"
                        ? "border-red-500 bg-red-50 text-red-700 ring-2 ring-red-200"
                        : "border-gray-200 bg-white text-gray-700 hover:border-red-300"
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
                    Student
                  </label>

                  <label
                    className={`cursor-pointer rounded-2xl border px-4 py-3 text-center font-mont text-sm font-medium transition ${
                      selectedRole === "recruiter"
                        ? "border-red-500 bg-red-50 text-red-700 ring-2 ring-red-200"
                        : "border-gray-200 bg-white text-gray-700 hover:border-red-300"
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
                    Recruiter
                  </label>
                </div>

                {errors.role && (
                  <p className="mt-1 pl-1 font-mont text-sm text-red-500">
                    {errors.role.message}
                  </p>
                )}
              </div>

              <div className="flex justify-end">
                <Link
                  to="/forgot-password"
                  className="font-mont text-sm font-medium text-red-600 transition hover:underline"
                >
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full cursor-pointer rounded-2xl bg-black py-3.5 px-6 font-unbounded font-semibold text-white shadow-lg transition-all duration-300 hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? "Logging in..." : "Log in"}
              </button>
            </form>

            <div className="mt-6">
              <div className="relative mb-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white px-3 font-mont text-gray-500">
                    Or continue with
                  </span>
                </div>
              </div>

              <button
                type="button"
                className="flex w-full cursor-pointer items-center justify-center gap-3 rounded-2xl border border-gray-200 bg-white py-3.5 px-6 font-unbounded text-gray-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
              >
                <FaGoogle className="h-5 w-5 text-rose-500" />
                Sign in with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login
import { useForm } from "react-hook-form"
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaPhone,
  FaGoogle,
  FaCheckCircle,
  FaImage,
} from "react-icons/fa"
import { Link, useNavigate } from "react-router-dom"
import type { RootState } from "@/redux/store"
import axios from "axios"
import { USER_API_END_POINT } from "@/utils/constant"
import { toast } from "sonner"
import { useState } from "react"
import { useSelector } from "react-redux"
import { Loader2 } from "lucide-react"

type RegisterFormData = {
  fullName: string
  email: string
  password: string
  phoneNumber: string
  profilePhoto: FileList
  role: "student" | "recruiter"
}

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
    reset,
  } = useForm<RegisterFormData>({
    defaultValues: {
      role: "student",
    },
  })
  const [previewImage, setPreviewImage] = useState<string | null>(null)
  // naviagate
  const navigate = useNavigate()
  const { loading } = useSelector((store: RootState) => store.auth)

  const selectedRole = watch("role")

  const onSubmit = async (data: RegisterFormData) => {
    try {
      const formData = new FormData()

      formData.append("fullName", data.fullName)
      formData.append("email", data.email)
      formData.append("password", data.password)
      formData.append("phoneNumber", data.phoneNumber)
      formData.append("role", data.role)
      formData.append("file", data.profilePhoto[0])

      const response = await axios.post(
        `${USER_API_END_POINT}/register`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      )

      if (response.data.success) {
        toast.success(response.data.message)
        navigate("/login")
      }
      reset()
      setPreviewImage(null)
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Something went wrong")
    }
  }

  return (
    // <section className="min-h-screen bg-transparent">
    //   <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
    //     <div className="relative hidden items-end bg-gray-900/90 px-6 pt-60 pb-16 lg:flex lg:pb-24">
    //       <img
    //         src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
    //         alt="JobZy register"
    //         className="absolute inset-0 h-full w-full object-cover opacity-75"
    //       />
    //       <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent" />

    //       <div className="relative z-10 max-w-2xl">
    //         <h3 className="font-unbounded text-4xl font-bold text-white drop-shadow-lg sm:text-5xl">
    //           Start your journey with{" "}
    //           <span className="font-clash text-red-500 underline underline-offset-4">
    //             JobZy
    //           </span>
    //           <br className="hidden xl:block" />
    //           connect, apply, and grow smarter
    //         </h3>

    //         <ul className="mt-10 grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
    //           {[
    //             "Apply to top companies",
    //             "Create your smart profile",
    //             "Track application status",
    //             "Hire the right talent",
    //           ].map((item, i) => (
    //             <li
    //               key={i}
    //               className="flex items-center gap-3 font-mont text-lg font-medium text-white"
    //             >
    //               <FaCheckCircle className="h-5 w-5 text-orange-500" />
    //               {item}
    //             </li>
    //           ))}
    //         </ul>
    //       </div>
    //     </div>

    //     <div className="relative flex items-center justify-center bg-linear-to-br from-white via-red-100 to-white px-4 py-12 sm:px-6 lg:px-8">
    //       <div className="w-full max-w-2xl rounded-3xl bg-white/70 p-8 shadow-xl backdrop-blur-xl lg:p-10">
    //         <h2 className="font-unbounded text-3xl font-bold text-gray-900 sm:text-4xl">
    //           Create{" "}
    //           <span className="font-mont text-red-600 underline underline-offset-4">
    //             JobZy
    //           </span>{" "}
    //           Account
    //         </h2>

    //         <p className="mt-2 font-mont text-sm text-gray-600">
    //           Already have an account?{" "}
    //           <Link
    //             to="/login"
    //             className="font-medium text-red-600 transition hover:underline"
    //           >
    //             Login
    //           </Link>
    //         </p>

    //         <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5">
    //           <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
    //             <div>
    //               <div className="relative">
    //                 <FaUser className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-500" />
    //                 <input
    //                   type="text"
    //                   placeholder="Full Name"
    //                   className="w-full rounded-2xl border border-gray-200 bg-white py-3.5 pr-4 pl-11 font-mont text-sm text-black transition outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200"
    //                   {...register("fullName", {
    //                     required: "Full name is required",
    //                   })}
    //                 />
    //               </div>
    //               {errors.fullName && (
    //                 <p className="mt-1 pl-1 font-mont text-sm text-red-500">
    //                   {errors.fullName.message}
    //                 </p>
    //               )}
    //             </div>

    //             <div>
    //               <div className="relative">
    //                 <FaEnvelope className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-500" />
    //                 <input
    //                   type="email"
    //                   placeholder="Email"
    //                   className="w-full rounded-2xl border border-gray-200 bg-white py-3.5 pr-4 pl-11 font-mont text-sm text-black transition outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200"
    //                   {...register("email", {
    //                     required: "Email is required",
    //                     pattern: {
    //                       value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    //                       message: "Enter a valid email address",
    //                     },
    //                   })}
    //                 />
    //               </div>
    //               {errors.email && (
    //                 <p className="mt-1 pl-1 font-mont text-sm text-red-500">
    //                   {errors.email.message}
    //                 </p>
    //               )}
    //             </div>
    //           </div>

    //           <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
    //             <div>
    //               <div className="relative">
    //                 <FaLock className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-500" />
    //                 <input
    //                   type="password"
    //                   placeholder="Password"
    //                   className="w-full rounded-2xl border border-gray-200 bg-white py-3.5 pr-4 pl-11 font-mont text-sm text-black transition outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200"
    //                   {...register("password", {
    //                     required: "Password is required",
    //                     minLength: {
    //                       value: 6,
    //                       message: "Password must be at least 6 characters",
    //                     },
    //                   })}
    //                 />
    //               </div>
    //               {errors.password && (
    //                 <p className="mt-1 pl-1 font-mont text-sm text-red-500">
    //                   {errors.password.message}
    //                 </p>
    //               )}
    //             </div>

    //             <div>
    //               <div className="relative">
    //                 <FaPhone className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-500" />
    //                 <input
    //                   type="tel"
    //                   placeholder="Phone Number"
    //                   className="w-full rounded-2xl border border-gray-200 bg-white py-3.5 pr-4 pl-11 font-mont text-sm text-black transition outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200"
    //                   {...register("phoneNumber", {
    //                     required: "Phone number is required",
    //                     pattern: {
    //                       value: /^[0-9]{10}$/,
    //                       message: "Enter a valid 10-digit phone number",
    //                     },
    //                   })}
    //                 />
    //               </div>
    //               {errors.phoneNumber && (
    //                 <p className="mt-1 pl-1 font-mont text-sm text-red-500">
    //                   {errors.phoneNumber.message}
    //                 </p>
    //               )}
    //             </div>
    //           </div>

    //           <div>
    //             <p className="mb-3 pl-1 font-mont text-sm font-medium text-gray-700">
    //               Profile Picture
    //             </p>

    //             <label className="flex cursor-pointer items-center gap-4 rounded-2xl border border-gray-200 bg-white px-5 py-4 transition hover:border-red-400 hover:bg-red-50">
    //               <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-red-100">
    //                 {previewImage ? (
    //                   <img
    //                     src={previewImage}
    //                     alt="Profile Preview"
    //                     className="h-full w-full object-cover"
    //                   />
    //                 ) : (
    //                   <FaImage className="text-lg text-red-500" />
    //                 )}
    //               </div>

    //               <div className="flex-1">
    //                 <p className="font-mont text-sm font-medium text-gray-800">
    //                   Upload Profile Photo
    //                 </p>

    //                 <p className="font-mont text-xs text-gray-500">
    //                   {watch("profilePhoto")?.[0]?.name
    //                     ? watch("profilePhoto")[0].name
    //                     : "JPG, PNG or JPEG"}
    //                 </p>
    //               </div>

    //               <span className="rounded-xl bg-black px-4 py-2 font-mont text-xs font-medium text-white">
    //                 {watch("profilePhoto")?.[0] ? "Selected" : "Choose File"}
    //               </span>

    //               <input
    //                 type="file"
    //                 accept="image/*"
    //                 className="hidden"
    //                 {...register("profilePhoto", {
    //                   required: "Profile photo is required",
    //                   onChange: (e) => {
    //                     const file = e.target.files?.[0]
    //                     if (file) {
    //                       setPreviewImage(URL.createObjectURL(file))
    //                     }
    //                   },
    //                 })}
    //               />
    //             </label>

    //             {errors.profilePhoto && (
    //               <p className="mt-1 pl-1 font-mont text-sm text-red-500">
    //                 {errors.profilePhoto.message}
    //               </p>
    //             )}
    //           </div>

    //           <div>
    //             <p className="mb-3 pl-1 font-mont text-sm font-medium text-gray-700">
    //               Select Role
    //             </p>

    //             <div className="grid grid-cols-2 gap-3">
    //               <label
    //                 className={`cursor-pointer rounded-2xl border px-4 py-3 text-center font-mont text-sm font-medium transition ${
    //                   selectedRole === "student"
    //                     ? "border-red-500 bg-red-50 text-red-700 ring-2 ring-red-200"
    //                     : "border-gray-200 bg-white text-gray-700 hover:border-red-300"
    //                 }`}
    //               >
    //                 <input
    //                   type="radio"
    //                   value="student"
    //                   className="hidden"
    //                   {...register("role")}
    //                 />
    //                 Student
    //               </label>

    //               <label
    //                 className={`cursor-pointer rounded-2xl border px-4 py-3 text-center font-mont text-sm font-medium transition ${
    //                   selectedRole === "recruiter"
    //                     ? "border-red-500 bg-red-50 text-red-700 ring-2 ring-red-200"
    //                     : "border-gray-200 bg-white text-gray-700 hover:border-red-300"
    //                 }`}
    //               >
    //                 <input
    //                   type="radio"
    //                   value="recruiter"
    //                   className="hidden"
    //                   {...register("role")}
    //                 />
    //                 Recruiter
    //               </label>
    //             </div>
    //           </div>

    //           <button
    //             type="submit"
    //             disabled={isSubmitting}
    //             className="w-full cursor-pointer rounded-2xl bg-black px-6 py-3.5 font-unbounded font-semibold text-white shadow-lg transition-all duration-300 hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
    //           >
    //             {isSubmitting ? "Creating..." : "Create Account"}
    //           </button>
    //         </form>

    //         <div className="mt-6">
    //           <div className="relative mb-4">
    //             <div className="absolute inset-0 flex items-center">
    //               <div className="w-full border-t border-gray-200"></div>
    //             </div>
    //             <div className="relative flex justify-center text-xs uppercase">
    //               <span className="bg-white px-3 font-mont text-gray-500">
    //                 Or continue with
    //               </span>
    //             </div>
    //           </div>

    //           <button
    //             type="button"
    //             disabled={loading}
    //             className="flex w-full items-center justify-center gap-3 rounded-2xl border border-gray-200 bg-white px-6 py-3.5 font-unbounded text-gray-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-70"
    //           >
    //             {loading ? (
    //               <>
    //                 <Loader2 className="h-5 w-5 animate-spin" />
    //                 <span>Signing in...</span>
    //               </>
    //             ) : (
    //               <>
    //                 <FaGoogle className="h-5 w-5 text-rose-500" />
    //                 <span>Sign in with Google</span>
    //               </>
    //             )}
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <>
   <section className="relative py-12 min-h-screen overflow-hidden bg-[#0a0a0f]">
    {/* ── Animated background ── */}
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_-20%_50%,rgba(16,185,129,0.12),transparent),radial-gradient(ellipse_60%_80%_at_120%_30%,rgba(6,182,212,0.08),transparent)]" />
      <div className="absolute top-[10%] left-[5%] h-72 w-72 rounded-full bg-emerald-500/10 blur-[100px] animate-[pulse_6s_ease-in-out_infinite]" />
      <div className="absolute bottom-[15%] left-[15%] h-48 w-48 rounded-full bg-cyan-400/8 blur-[80px] animate-[pulse_8s_ease-in-out_2s_infinite]" />
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
    </div>

    <div className="relative mx-auto grid min-h-screen max-w-7xl lg:grid-cols-[1fr_1.1fr]">

      {/* ══ LEFT PANEL ══ */}
      <div className="hidden lg:flex lg:flex-col lg:justify-center lg:px-16 lg:py-20">

        <div className="mb-10 inline-flex w-fit items-center gap-2.5 rounded-full border border-emerald-500/25 bg-emerald-500/8 px-4 py-2 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          <span className="font-mono text-[11px] font-medium tracking-[0.2em] text-emerald-400 uppercase">
            Now Hiring · 2,400+ Jobs Live
          </span>
        </div>

        <h1 className="font-unbounded text-[3.2rem] font-bold leading-[1.1] text-white">
          Your career{" "}
          <span className="relative inline-block">
            <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              starts
            </span>
            <span className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 opacity-60" />
          </span>{" "}
          here.
        </h1>

        <p className="mt-6 max-w-sm font-mont text-base leading-7 text-slate-400">
          Join thousands of students and recruiters building meaningful
          connections on JobZy — the premium platform for modern hiring.
        </p>

        <div className="mt-10 flex items-center gap-8">
          {[
            { val: "12K+", label: "Students" },
            { val: "800+", label: "Recruiters" },
            { val: "94%", label: "Placement Rate" },
          ].map((s, i) => (
            <div key={i} className="flex flex-col">
              <span className="font-unbounded text-2xl font-bold text-white">{s.val}</span>
              <span className="mt-0.5 font-mont text-xs text-slate-500">{s.label}</span>
            </div>
          ))}
        </div>

        <div className="mt-10 space-y-3">
          {[
            "Smooth profile creation in under 2 minutes",
            "Premium file upload with instant preview",
            "Smart role-based onboarding flow",
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 rounded-2xl border border-white/5 bg-white/[0.03] px-4 py-3.5 backdrop-blur-sm transition duration-300 hover:border-emerald-500/20 hover:bg-emerald-500/5"
            >
              <span className="text-xs text-emerald-400">✦</span>
              <p className="font-mont text-sm text-slate-300">{item}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-white/5 bg-white/[0.02] p-5 backdrop-blur-sm">
          <p className="font-mont text-sm italic leading-6 text-slate-400">
            "Got placed within 3 weeks of signing up. The cleanest job platform I've ever used."
          </p>
          <div className="mt-3 flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-cyan-500 text-xs font-bold text-black">
              R
            </div>
            <div>
              <p className="font-mont text-xs font-semibold text-white">Rohan Mehta</p>
              <p className="font-mont text-[10px] text-slate-500">Software Engineer · Hired via JobZy</p>
            </div>
          </div>
        </div>
      </div>

      {/* ══ RIGHT PANEL — FORM ══ */}
      <div className="flex items-center justify-center px-4 py-12 sm:px-8 lg:px-12 lg:py-20">
        <div className="w-full max-w-[480px]">
          <div className="relative overflow-hidden rounded-[28px] border border-white/8 bg-white/[0.04] shadow-[0_0_80px_rgba(16,185,129,0.06),0_40px_80px_rgba(0,0,0,0.4)] backdrop-blur-2xl">

            <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent" />
            <div className="absolute -top-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-emerald-400/6 blur-3xl" />

            <div className="relative p-7 sm:p-9">

              <div className="mb-8">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/8 px-3 py-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span className="font-mono text-[10px] tracking-[0.2em] text-emerald-400 uppercase">
                    Create Account
                  </span>
                </div>

                <h2 className="font-unbounded text-3xl font-bold text-white">
                  Join{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                    JobZy
                  </span>
                </h2>

                <p className="mt-2 font-mont text-sm text-slate-500">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="font-semibold text-emerald-400 transition hover:text-emerald-300"
                  >
                    Sign in →
                  </Link>
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

                <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                  <div>
                    <div className="group relative">
                      <FaUser className="absolute top-1/2 left-3.5 -translate-y-1/2 text-[13px] text-slate-600 transition group-focus-within:text-emerald-400" />
                      <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full rounded-2xl border border-white/8 bg-white/[0.05] py-3 pr-4 pl-9 font-mont text-sm text-white outline-none placeholder:text-slate-600 transition focus:border-emerald-500/50 focus:bg-white/[0.08] focus:ring-2 focus:ring-emerald-500/15"
                        {...register("fullName", { required: "Full name is required" })}
                      />
                    </div>
                    {errors.fullName && (
                      <p className="mt-1 pl-1 font-mont text-xs text-rose-400">{errors.fullName.message}</p>
                    )}
                  </div>

                  <div>
                    <div className="group relative">
                      <FaEnvelope className="absolute top-1/2 left-3.5 -translate-y-1/2 text-[13px] text-slate-600 transition group-focus-within:text-emerald-400" />
                      <input
                        type="email"
                        placeholder="Email"
                        className="w-full rounded-2xl border border-white/8 bg-white/[0.05] py-3 pr-4 pl-9 font-mont text-sm text-white outline-none placeholder:text-slate-600 transition focus:border-emerald-500/50 focus:bg-white/[0.08] focus:ring-2 focus:ring-emerald-500/15"
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "Enter a valid email address",
                          },
                        })}
                      />
                    </div>
                    {errors.email && (
                      <p className="mt-1 pl-1 font-mont text-xs text-rose-400">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                  <div>
                    <div className="group relative">
                      <FaLock className="absolute top-1/2 left-3.5 -translate-y-1/2 text-[13px] text-slate-600 transition group-focus-within:text-emerald-400" />
                      <input
                        type="password"
                        placeholder="Password"
                        className="w-full rounded-2xl border border-white/8 bg-white/[0.05] py-3 pr-4 pl-9 font-mont text-sm text-white outline-none placeholder:text-slate-600 transition focus:border-emerald-500/50 focus:bg-white/[0.08] focus:ring-2 focus:ring-emerald-500/15"
                        {...register("password", {
                          required: "Password is required",
                          minLength: { value: 6, message: "Password must be at least 6 characters" },
                        })}
                      />
                    </div>
                    {errors.password && (
                      <p className="mt-1 pl-1 font-mont text-xs text-rose-400">{errors.password.message}</p>
                    )}
                  </div>

                  <div>
                    <div className="group relative">
                      <FaPhone className="absolute top-1/2 left-3.5 -translate-y-1/2 text-[13px] text-slate-600 transition group-focus-within:text-emerald-400" />
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        className="w-full rounded-2xl border border-white/8 bg-white/[0.05] py-3 pr-4 pl-9 font-mont text-sm text-white outline-none placeholder:text-slate-600 transition focus:border-emerald-500/50 focus:bg-white/[0.08] focus:ring-2 focus:ring-emerald-500/15"
                        {...register("phoneNumber", {
                          required: "Phone number is required",
                          pattern: {
                            value: /^[0-9]{10}$/,
                            message: "Enter a valid 10-digit phone number",
                          },
                        })}
                      />
                    </div>
                    {errors.phoneNumber && (
                      <p className="mt-1 pl-1 font-mont text-xs text-rose-400">{errors.phoneNumber.message}</p>
                    )}
                  </div>
                </div>

                {/* Profile Picture */}
                <div>
                  <label className="group flex cursor-pointer items-center gap-4 rounded-2xl border border-white/8 bg-white/[0.04] px-4 py-3.5 transition duration-300 hover:border-emerald-500/30 hover:bg-white/[0.07]">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 ring-1 ring-white/10">
                      {previewImage ? (
                        <img src={previewImage} alt="Profile Preview" className="h-full w-full object-cover" />
                      ) : (
                        <FaImage className="text-sm text-emerald-400" />
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <p className="font-mont text-sm font-semibold text-white">Profile Photo</p>
                      <p className="font-mont text-xs text-slate-600 truncate">
                        {watch("profilePhoto")?.[0]?.name
                          ? watch("profilePhoto")[0].name
                          : "JPG, PNG or JPEG · Max 5MB"}
                      </p>
                    </div>

                    <span className="shrink-0 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 font-mono text-[10px] font-semibold tracking-wider text-emerald-400 uppercase transition group-hover:bg-emerald-500/20">
                      {watch("profilePhoto")?.[0] ? "✓ Done" : "Upload"}
                    </span>

                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      {...register("profilePhoto", {
                        required: "Profile photo is required",
                        onChange: (e) => {
                          const file = e.target.files?.[0]
                          if (file) {
                            setPreviewImage(URL.createObjectURL(file))
                          }
                        },
                      })}
                    />
                  </label>
                  {errors.profilePhoto && (
                    <p className="mt-1 pl-1 font-mont text-xs text-rose-400">{errors.profilePhoto.message}</p>
                  )}
                </div>

                {/* Role */}
                <div>
                  <p className="mb-2.5 pl-1 font-mont text-xs font-semibold tracking-wide text-slate-500 uppercase">
                    I am a —
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    <label
                      className={`relative cursor-pointer overflow-hidden rounded-2xl border px-4 py-4 text-center transition duration-300 ${
                        selectedRole === "student"
                          ? "border-emerald-500/50 bg-emerald-500/10"
                          : "border-white/8 bg-white/[0.03] hover:border-white/15 hover:bg-white/[0.06]"
                      }`}
                    >
                      {selectedRole === "student" && (
                        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent" />
                      )}
                      <input type="radio" value="student" className="hidden" {...register("role")} />
                      <div className="flex flex-col items-center gap-1.5">
                        <span className="text-xl">🎓</span>
                        <span className={`font-mont text-sm font-semibold ${selectedRole === "student" ? "text-emerald-400" : "text-slate-400"}`}>
                          Student
                        </span>
                      </div>
                    </label>

                    <label
                      className={`relative cursor-pointer overflow-hidden rounded-2xl border px-4 py-4 text-center transition duration-300 ${
                        selectedRole === "recruiter"
                          ? "border-emerald-500/50 bg-emerald-500/10"
                          : "border-white/8 bg-white/[0.03] hover:border-white/15 hover:bg-white/[0.06]"
                      }`}
                    >
                      {selectedRole === "recruiter" && (
                        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent" />
                      )}
                      <input type="radio" value="recruiter" className="hidden" {...register("role")} />
                      <div className="flex flex-col items-center gap-1.5">
                        <span className="text-xl">💼</span>
                        <span className={`font-mont text-sm font-semibold ${selectedRole === "recruiter" ? "text-emerald-400" : "text-slate-400"}`}>
                          Recruiter
                        </span>
                      </div>
                    </label>
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative w-full overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-500 to-cyan-500 px-6 py-4 font-unbounded text-sm font-semibold text-black shadow-[0_8px_32px_rgba(16,185,129,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(16,185,129,0.5)] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] transition-transform duration-700 group-hover:translate-x-[100%]" />
                  <span className="relative">{isSubmitting ? "Creating account…" : "Create Account →"}</span>
                </button>
              </form>

              {/* Divider */}
              <div className="my-5 flex items-center gap-4">
                <div className="h-px flex-1 bg-white/8" />
                <span className="font-mono text-[10px] tracking-[0.2em] text-slate-600 uppercase">or</span>
                <div className="h-px flex-1 bg-white/8" />
              </div>

              {/* Google */}
              <button
                type="button"
                disabled={loading}
                className="flex w-full items-center justify-center gap-3 rounded-2xl border border-white/8 bg-white/[0.04] px-6 py-3.5 font-mont text-sm font-medium text-slate-300 transition-all duration-300 hover:border-white/15 hover:bg-white/[0.08] hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin text-emerald-400" />
                    <span>Signing in…</span>
                  </>
                ) : (
                  <>
                    <FaGoogle className="h-4 w-4 text-rose-400" />
                    <span>Continue with Google</span>
                  </>
                )}
              </button>

              <p className="mt-5 text-center font-mont text-[11px] text-slate-600">
                By signing up you agree to our{" "}
                <span className="cursor-pointer text-slate-500 transition hover:text-emerald-400">Terms</span>{" "}
                &{" "}
                <span className="cursor-pointer text-slate-500 transition hover:text-emerald-400">Privacy Policy</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    </>
  )
}

export default Register

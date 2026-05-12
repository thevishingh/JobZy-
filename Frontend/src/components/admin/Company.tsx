import { useForm } from "react-hook-form"
import {
  ArrowRight,
  Building2,
  FilePlus2,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Plus,
  Loader2,
} from "lucide-react"
import CompanyTable from "./CompanyTable"
import { useNavigate } from "react-router-dom"
import { Highlighter } from "../ui/highlighter"
import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import axios from "axios"
import { COMPANY_API_END_POINT } from "@/utils/constant"
import { toast } from "sonner"
import { useDispatch } from "react-redux"

// interface for form data
type CompanyFormData = {
  companyName: string
}

const brandLogos = [
  {
    name: "Airbnb",
    logo: "https://logo.clearbit.com/airbnb.com",
  },
  {
    name: "Stripe",
    logo: "https://logo.clearbit.com/stripe.com",
  },
  {
    name: "Spotify",
    logo: "https://logo.clearbit.com/spotify.com",
  },
  {
    name: "Notion",
    logo: "https://logo.clearbit.com/notion.so",
  },
]

export default function Company() {
  // navigate
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()

  // form state
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CompanyFormData>({
    defaultValues: {
      companyName: "",
    },
  })

  // form submission handler
  const onSubmit = async (data: CompanyFormData) => {
    try {
      const response = await axios.post(
        `${COMPANY_API_END_POINT}/register`,
        {
          name: data.companyName,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      )

      if (response?.data?.success) {
        dispatch({ type: "company/add", payload: response.data.company })

        toast.success(response.data.message || "Company created successfully!")

        const companyId = response?.data?.company?._id

        reset()
        setOpen(false)

        if (companyId) {
          navigate(`/admin/companies/details-update/${companyId}`)
        }
      }
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Failed to create company")
    }
  }

  // main render
  return (
    <section className="min-h-screen bg-[#fbf7ef] px-4 py-20 text-[#393629] sm:px-6 md:py-16 lg:px-8 lg:py-24 dark:bg-[#050509] dark:text-white">
      {/* Hero */}
      <div className="mx-auto max-w-7xl">
        <div className="relative mb-10 overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-5 shadow-2xl shadow-orange-500/10 sm:p-8 lg:p-10 dark:border-white/10 dark:bg-[#111118]">
          <div className="pointer-events-none absolute top-0 right-0 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />

          <div className="relative grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-orange-500/10 px-4 py-2 font-mont text-xs font-semibold tracking-[0.18em] text-orange-600 uppercase dark:text-orange-300">
                <Sparkles className="h-4 w-4" />
                Recruiter Workspace
              </div>

              <h1 className="font-unbounded text-3xl leading-tight font-bold sm:text-4xl lg:text-5xl">
                Manage companies and build your
                <Highlighter action="highlight" color="orange">
                  <span className="mx-2 text-black">trusted network</span>
                </Highlighter>
                for job posting
              </h1>

              <p className="mt-5 max-w-2xl font-mont text-sm leading-7 text-[#6b6658] sm:text-base dark:text-slate-400">
                Create company profiles, organize recruiter-owned businesses,
                and keep hiring brands ready for job posting on Jobzy.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <button
                  onClick={() => navigate("/admin/companies/new")}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#c65d3b] px-5 py-3 font-mont text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-[#b65335]"
                >
                  <FilePlus2 className="h-4 w-4" />
                  Add New Company
                  <ArrowRight className="h-4 w-4" />
                </button>

                <button className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-[#fbf7ef] px-5 py-3 font-mont text-sm font-semibold text-[#393629] transition hover:-translate-y-1 hover:border-orange-300 dark:border-white/10 dark:bg-[#050509] dark:text-white">
                  <Search className="h-4 w-4" />
                  Explore Companies
                </button>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {[
                  {
                    icon: Building2,
                    value: "120+",
                    label: "Company profiles",
                  },
                  {
                    icon: ShieldCheck,
                    value: "Verified",
                    label: "Recruiter-owned data",
                  },
                  {
                    icon: Sparkles,
                    value: "Ready",
                    label: "For job publishing",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-slate-200 bg-[#fbf7ef] p-4 dark:border-white/10 dark:bg-[#050509]"
                  >
                    <item.icon className="mb-3 h-5 w-5 text-orange-500" />
                    <h3 className="font-unbounded text-lg font-semibold">
                      {item.value}
                    </h3>
                    <p className="font-mont text-sm text-[#6b6658] dark:text-slate-400">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.7rem] border border-slate-200 bg-[#fbf7ef] p-4 shadow-xl dark:border-white/10 dark:bg-[#050509]">
              <img
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1200&auto=format&fit=crop"
                alt="Recruiter company management"
                className="h-56 w-full rounded-2xl object-cover sm:h-72 lg:h-80"
              />

              <div className="mt-5">
                <h2 className="font-unbounded text-xl font-semibold">
                  Trusted company network
                </h2>
                <p className="mt-2 font-mont text-sm leading-6 text-[#6b6658] dark:text-slate-400">
                  Keep brand details, locations, websites, and recruiter
                  ownership organized in one place.
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  {brandLogos.map((brand) => (
                    <div
                      key={brand.name}
                      className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 dark:border-white/10 dark:bg-[#111118]"
                    >
                      <img
                        src={brand.logo}
                        alt={brand.name}
                        className="h-5 w-5 rounded-full object-cover"
                      />
                      <span className="font-mont text-xs font-medium text-[#393629] dark:text-white">
                        {brand.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filter + Table */}
      <div className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-xl shadow-orange-500/10 sm:p-6 lg:p-8 dark:border-white/10 dark:bg-[#111118]">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-unbounded text-xl font-semibold sm:text-2xl">
              Listed Companies
            </h2>
            <p className="mt-1 font-mont text-sm text-[#6b6658] dark:text-slate-400">
              View, filter, and manage recruiter company profiles on Jobzy.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-[#fbf7ef] px-4 py-2.5 dark:border-white/10 dark:bg-[#111118]">
              <SlidersHorizontal className="h-4 w-4 text-orange-500" />

              <select
                id="companyFilter"
                className="w-full bg-transparent font-unbounded text-xs font-medium text-[#393629] outline-none sm:w-44 dark:text-white [&>option]:bg-white [&>option]:text-[#393629] dark:[&>option]:bg-[#111118] dark:[&>option]:text-white"
              >
                <option value="">All Companies</option>
                <option value="recent">Recently Added</option>
                <option value="oldest">Oldest First</option>
                <option value="a-z">Name A-Z</option>
                <option value="z-a">Name Z-A</option>
              </select>
            </div>

            <button
              className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-[#c65d3b] px-5 py-2.5 font-mont text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-[#b65335] sm:w-auto"
              onClick={() => setOpen(true)}
            >
              <FilePlus2 className="h-4 w-4" />
              Add Company
            </button>
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogContent className="overflow-hidden rounded-[28px] border border-border bg-background p-0 text-foreground shadow-[0_24px_80px_rgba(15,23,42,0.16)] sm:max-w-lg dark:bg-[#050509] dark:shadow-[0_24px_80px_rgba(0,0,0,0.55)]">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="relative">
                    <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-orange-500/10 via-rose-500/5 to-transparent dark:from-orange-500/12 dark:via-rose-500/8 dark:to-transparent" />

                    <DialogHeader className="relative border-b border-border px-6 pt-6 pb-5">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#c65d3b]/10 text-[#c65d3b] dark:bg-[#c65d3b]/15 dark:text-orange-300">
                        <Building2 className="h-5 w-5" />
                      </div>

                      <DialogTitle className="font-unbounded text-xl leading-tight text-slate-900 dark:text-white">
                        <Highlighter action="underline" color="orange">
                          Create Company Profile
                        </Highlighter>
                      </DialogTitle>

                      <DialogDescription className="mt-2 max-w-sm font-mont text-sm leading-6 text-muted-foreground dark:text-slate-400">
                        Create a company profile so you can manage openings,
                        hiring details, and recruiter activity in one place.
                      </DialogDescription>
                    </DialogHeader>

                    <div className="space-y-6 px-6 py-6">
                      <div className="space-y-2.5">
                        <Label
                          htmlFor="companyName"
                          className="font-mont text-sm font-semibold text-slate-800 dark:text-slate-200"
                        >
                          Company Name
                        </Label>

                        <div className="relative">
                          <Building2 className="pointer-events-none absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-slate-400 dark:text-slate-500" />

                          <Input
                            id="companyName"
                            placeholder="Enter company name"
                            className={`h-12 rounded-2xl border-border bg-background pl-11 font-mont shadow-sm transition focus-visible:ring-2 focus-visible:ring-[#c65d3b]/30 dark:bg-[#0b0b10] dark:text-white dark:placeholder:text-slate-500 ${
                              errors.companyName
                                ? "border-red-500 focus-visible:ring-red-200"
                                : ""
                            }`}
                            {...register("companyName", {
                              required: "Company name is required",
                              minLength: {
                                value: 2,
                                message:
                                  "Company name must be at least 2 characters",
                              },
                              maxLength: {
                                value: 60,
                                message:
                                  "Company name must be under 60 characters",
                              },
                            })}
                          />
                        </div>

                        {errors.companyName ? (
                          <p className="font-mont text-xs text-red-500">
                            {errors.companyName.message}
                          </p>
                        ) : (
                          <p className="font-mont text-xs leading-5 text-muted-foreground dark:text-slate-500">
                            Use the official company or brand name to keep your
                            listings professional and searchable.
                          </p>
                        )}
                      </div>

                      <div className="rounded-2xl border border-border bg-muted/40 px-4 py-3 dark:bg-white/5">
                        <p className="font-mont text-xs leading-5 text-muted-foreground dark:text-slate-400">
                          You can update branding, location, and hiring details
                          after creating the company.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col-reverse gap-3 border-t border-border px-6 py-5 sm:flex-row sm:items-center sm:justify-end">
                      <Button
                        type="button"
                        variant="outline"
                        disabled={isSubmitting}
                        onClick={() => {
                          reset()
                          setOpen(false)
                        }}
                        className="h-11 cursor-pointer rounded-full border-border px-5 font-unbounded text-sm"
                      >
                        Cancel
                      </Button>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="h-11 cursor-pointer rounded-full bg-[#c65d3b] px-5 font-unbounded text-sm font-semibold text-white shadow-lg shadow-[#c65d3b]/20 transition hover:bg-[#b65335] disabled:cursor-not-allowed disabled:opacity-70"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Saving...
                          </>
                        ) : (
                          <>
                            <Plus className="mr-2 h-4 w-4" />
                            Save Company
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        {/* company table */}
        <CompanyTable />
      </div>
    </section>
  )
}

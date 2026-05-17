import {
  ShieldCheck,
  Lock,
  Eye,
  Database,
  FileText,
  UserCheck,
  ChevronRight,
} from "lucide-react"

const privacySections = [
  {
    id: "information-we-collect",
    icon: Database,
    title: "Information We Collect",
    content:
      "We may collect account details, profile information, resume data, job preferences, application activity, employer profile data, and communication records when you use Jobzy.",
  },
  {
    id: "how-we-use-information",
    icon: FileText,
    title: "How We Use Information",
    content:
      "We use your information to create and manage accounts, improve job matching, process applications, personalize recommendations, support employers and candidates, and maintain platform security.",
  },
  {
    id: "profile-visibility",
    icon: Eye,
    title: "Profile Visibility",
    content:
      "Depending on your settings, your profile, resume, and application-related details may be visible to verified employers, recruiters, or only to you. You can control visibility settings where available.",
  },
  {
    id: "sharing-and-disclosure",
    icon: UserCheck,
    title: "Sharing and Disclosure",
    content:
      "We may share relevant information with hiring companies, service providers, compliance authorities, or legal entities where required to operate the platform, prevent misuse, or comply with applicable laws.",
  },
  {
    id: "data-security",
    icon: Lock,
    title: "Data Security",
    content:
      "We apply reasonable administrative, technical, and organizational safeguards to help protect personal information from unauthorized access, misuse, loss, or disclosure.",
  },
  {
    id: "your-rights",
    icon: ShieldCheck,
    title: "Your Privacy Rights",
    content:
      "You may request access, correction, deletion, or restriction of certain personal information, subject to applicable law and operational requirements.",
  },
]

const JobzyPrivacyPage = () => {
  return (
    <section className="relative overflow-hidden bg-[#f6f1e8] px-4 py-12 py-32 sm:px-6 lg:px-8 dark:bg-[#0f1115]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 right-0 left-0 h-64 bg-gradient-to-b from-emerald-100/40 to-transparent dark:from-emerald-900/10" />
        <div className="absolute top-24 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full border border-emerald-900/10 dark:border-white/5" />
        <div className="absolute top-16 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full border border-emerald-900/5 dark:border-white/5" />
        <div className="absolute inset-0 [background-image:linear-gradient(rgba(15,23,42,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.16)_1px,transparent_1px)] [background-size:72px_72px] opacity-[0.05]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-14">
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-[28px] border border-[#ddd2c2] bg-white/80 p-6 shadow-[0_20px_60px_rgba(38,30,20,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04]">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-900/10 bg-emerald-50 px-3 py-2 text-xs font-semibold tracking-[0.18em] text-[#0d5d52] uppercase dark:border-emerald-400/20 dark:bg-emerald-500/10 dark:text-emerald-300">
                <ShieldCheck className="h-4 w-4" />
                Privacy center
              </div>

              <h2 className="font-unbounded text-2xl leading-tight text-[#1f1a14] dark:text-white">
                Jobzy Privacy Policy
              </h2>

              <p className="mt-4 font-mont text-sm leading-7 text-[#6f6557] dark:text-slate-300">
                Learn what data Jobzy collects, why it is used, how it may be
                shared, and the choices available to users.
              </p>

              <div className="mt-6 space-y-2">
                {privacySections.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="flex items-center justify-between rounded-2xl border border-transparent px-3 py-3 font-mont text-sm text-[#3f3a31] transition hover:border-[#e8dccb] hover:bg-[#f8f4ee] dark:text-slate-200 dark:hover:border-white/10 dark:hover:bg-white/[0.04]"
                  >
                    <span>{item.title}</span>
                    <ChevronRight className="h-4 w-4 opacity-60" />
                  </a>
                ))}
              </div>
            </div>
          </aside>

          <main className="min-w-0">
            <div className="rounded-[32px] border border-[#ded3c4] bg-white/85 p-6 shadow-[0_30px_80px_rgba(38,30,20,0.08)] backdrop-blur-xl sm:p-8 lg:p-10 dark:border-white/10 dark:bg-white/[0.04]">
              <div className="border-b border-dashed border-[#dbcdbb] pb-8 dark:border-white/10">
                <p className="font-mont text-xs font-semibold tracking-[0.2em] text-[#0d5d52] uppercase dark:text-emerald-300">
                  Trust & transparency
                </p>

                <h1 className="mt-4 max-w-4xl font-unbounded text-3xl leading-tight text-[#1f1a14] sm:text-5xl dark:text-white">
                  Privacy Policy for the Jobzy platform
                </h1>

                <p className="mt-5 max-w-3xl font-mont text-sm leading-7 text-[#6d6457] sm:text-base dark:text-slate-300">
                  This page explains how Jobzy handles personal information
                  across candidate accounts, employer accounts, resumes, job
                  applications, communications, and platform operations.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="rounded-full border border-[#dfd3c2] bg-[#f7f2ea] px-4 py-2 font-mont text-xs font-medium text-[#5a5247] dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300">
                    Last updated: May 2026
                  </span>
                  <span className="rounded-full border border-[#dfd3c2] bg-[#f7f2ea] px-4 py-2 font-mont text-xs font-medium text-[#5a5247] dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300">
                    Applies to candidates & employers
                  </span>
                </div>
              </div>

              <div className="mt-10 space-y-6">
                {privacySections.map((item) => {
                  const Icon = item.icon
                  return (
                    <section
                      key={item.id}
                      id={item.id}
                      className="rounded-[26px] border border-[#e6dbcc] bg-[#fcfaf7] p-5 sm:p-6 dark:border-white/10 dark:bg-white/[0.03]"
                    >
                      <div className="flex items-start gap-4">
                        <div className="mt-1 text-[#0d5d52] dark:text-emerald-300">
                          <Icon className="h-5 w-5" />
                        </div>

                        <div>
                          <h2 className="font-mont text-lg font-bold text-[#221d17] dark:text-white">
                            {item.title}
                          </h2>
                          <p className="mt-3 font-mont text-sm leading-7 text-[#6a6154] sm:text-[15px] dark:text-slate-300">
                            {item.content}
                          </p>
                        </div>
                      </div>
                    </section>
                  )
                })}
              </div>

              <section className="mt-8 rounded-[28px] border border-emerald-900/10 bg-emerald-50/70 p-6 dark:border-emerald-400/20 dark:bg-emerald-500/10">
                <h2 className="font-mont text-lg font-bold text-[#153d37] dark:text-emerald-200">
                  Contact for privacy requests
                </h2>
                <p className="mt-3 max-w-2xl font-mont text-sm leading-7 text-[#46615d] dark:text-slate-300">
                  For questions about this policy or requests related to your
                  data, provide your official support or privacy contact details
                  here, such as a support email or privacy team address.
                </p>
              </section>
            </div>
          </main>
        </div>
      </div>
    </section>
  )
}

export default JobzyPrivacyPage

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Mail,
  Phone,
  ExternalLink,
  Download,
  GraduationCap,
  CalendarDays,
  Sparkles,
  BadgeCheck,
} from "lucide-react"

type ApplicantProfileModalProps = {
  open: boolean
  setOpen: (open: boolean) => void
  application: any
}

const ApplicantProfileModal = ({
  open,
  setOpen,
  application,
}: ApplicantProfileModalProps) => {
  const applicant = application?.applicant
  const profile = applicant?.profile

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="scrollbar-thin max-h-[92vh] overflow-y-auto rounded-[30px] border border-[#e8e1d4] bg-[#fcfaf6] p-0 shadow-[0_30px_80px_rgba(28,25,23,0.16)] scrollbar-thumb-[#d4ccbd] scrollbar-track-transparent hover:scrollbar-thumb-[#bdb39f] sm:max-w-4xl dark:border-white/10 dark:bg-[#0a0a0b] dark:scrollbar-thumb-white/10 dark:hover:scrollbar-thumb-white/20">
        <div className="relative overflow-hidden rounded-t-[30px] border-b border-[#ece3d3] bg-[radial-gradient(circle_at_top_left,rgba(30,122,102,0.18),transparent_38%),linear-gradient(135deg,#1f3b34_0%,#14211d_38%,#101514_100%)] px-6 py-7 text-white sm:px-8 sm:py-8 dark:border-white/10">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute -top-16 right-0 h-44 w-44 rounded-full border border-white/10" />
            <div className="absolute bottom-0 left-10 h-28 w-28 rounded-full border border-white/10" />
          </div>

          <DialogHeader className="relative">
            <div className="flex items-center gap-2 text-emerald-200/90">
              <Sparkles className="h-4 w-4" />
              <span className="text-[11px] font-semibold tracking-[0.22em] uppercase">
                Candidate Overview
              </span>
            </div>

            <DialogTitle className="mt-3 font-unbounded text-2xl font-semibold tracking-tight sm:text-3xl">
              Applicant Profile
            </DialogTitle>
          </DialogHeader>

          <div className="relative mt-7 flex flex-col gap-5 sm:flex-row sm:items-start">
            <Avatar className="h-24 w-24 shrink-0 border-[3px] border-white/20 shadow-xl sm:h-28 sm:w-28">
              <AvatarImage src={profile?.profilePicture} />
              <AvatarFallback className="bg-white font-unbounded text-2xl font-semibold text-[#173c34]">
                {applicant?.fullName?.charAt(0) || "A"}
              </AvatarFallback>
            </Avatar>

            <div className="min-w-0 flex-1">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0">
                  <h2 className="font-unbounded text-2xl font-semibold tracking-tight capitalize sm:text-3xl">
                    {applicant?.fullName || "Unknown Applicant"}
                  </h2>

                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/10 px-3 py-1 font-mont text-xs font-medium text-white/90 backdrop-blur">
                      <BadgeCheck className="h-3.5 w-3.5 text-emerald-300" />
                      {application?.status || "Pending"}
                    </span>

                    {application?.job?.title && (
                      <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 font-mont text-xs font-medium text-white/75 backdrop-blur">
                        Applied for {application.job.title}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <p className="mt-4 max-w-2xl font-unbounded text-sm leading-7 text-white/78 sm:text-[15px]">
                {profile?.bio || "No bio available."}
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-7 p-6 sm:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[22px] border border-[#ebe4d8] bg-white p-4 shadow-sm dark:border-white/10 dark:bg-white/[0.03]">
              <div className="flex items-start gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300">
                  <Mail className="h-5 w-5" />
                </div>

                <div className="min-w-0">
                  <p className="font-unbounded text-[11px] font-semibold tracking-[0.18em] text-[#8a7f6d] uppercase dark:text-slate-400">
                    Email
                  </p>
                  <p className="mt-1 font-unbounded text-sm font-medium break-all text-[#221f1a] dark:text-white">
                    {applicant?.email || "N/A"}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[22px] border border-[#ebe4d8] bg-white p-4 shadow-sm dark:border-white/10 dark:bg-white/[0.03]">
              <div className="flex items-start gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-300">
                  <Phone className="h-5 w-5" />
                </div>

                <div>
                  <p className="font-unbounded text-[11px] font-semibold tracking-[0.18em] text-[#8a7f6d] uppercase dark:text-slate-400">
                    Contact
                  </p>
                  <p className="mt-1 font-unbounded text-sm font-medium text-[#221f1a] dark:text-white">
                    {applicant?.phoneNumber || "N/A"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <section>
            <h3 className="font-unbounded text-lg font-semibold tracking-tight text-[#221f1a] dark:text-white">
              Skills
            </h3>

            <div className="mt-4 flex flex-wrap gap-2.5">
              {profile?.skills?.length > 0 ? (
                profile.skills.map((skill: string) => (
                  <span
                    key={skill}
                    className="cursor-pointer rounded-xl border border-violet-200 px-3.5 py-2 font-unbounded text-xs font-medium text-[#7047ff] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md dark:border-violet-500/20 dark:bg-violet-500/10 dark:text-violet-300 dark:hover:text-lime-600"
                  >
                    {skill}
                  </span>
                ))
              ) : (
                <p className="text-sm text-[#7b7263] dark:text-slate-400">
                  No skills added.
                </p>
              )}
            </div>
          </section>

          <section>
            <h3 className="text-lg font-semibold font-unbounded tracking-tight text-[#221f1a] dark:text-white">
              Education
            </h3>

            <div className="mt-4 space-y-3">
              {profile?.education?.length > 0 ? (
                profile.education.map((edu: any) => (
                  <div
                    key={edu._id}
                    className="rounded-[22px] border border-[#ebe4d8] bg-white p-4 shadow-sm dark:border-white/10 dark:bg-white/3"
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#f5efe5] text-[#7a5c2e] dark:bg-white/10 dark:text-amber-200">
                        <GraduationCap className="h-5 w-5" />
                      </div>

                      <div className="min-w-0">
                        <p className="text-sm font-semibold font-unbounded text-[#221f1a] dark:text-white">
                          {edu.degree || "Degree not added"}
                        </p>

                        <p className="mt-1 text-xs font-unbounded text-[#7b7263] dark:text-slate-400">
                          {edu.institution || "Institution not added"}
                        </p>

                        <div className="mt-2 flex font-unbounded items-center gap-2 text-xs text-[#8a7f6d] dark:text-slate-400">
                          <CalendarDays className="h-4 w-4" />
                          {edu.startDate
                            ? new Date(edu.startDate).toLocaleDateString()
                            : "N/A"}{" "}
                          -{" "}
                          {edu.endDate
                            ? new Date(edu.endDate).toLocaleDateString()
                            : "Present"}
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-sm font-unbounded text-[#7b7263] dark:text-slate-400">
                  No education details added.
                </p>
              )}
            </div>
          </section>

          <div className="flex flex-col gap-3 border-t border-[#efe6d8] pt-6 sm:flex-row dark:border-white/10">
            {profile?.resume && (
              <a
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#173c34] px-5 py-3 text-sm font-medium font-unbounded text-white transition hover:bg-[#0f2f28]"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            )}

            {profile?.website && (
              <a
                href={profile.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#d9cfbe] bg-white font-unbounded px-5 py-3 text-sm font-medium text-[#173c34] transition hover:bg-[#f6f1e8] dark:border-white/10 dark:bg-white/[0.03] dark:text-white dark:hover:bg-white/[0.06]"
              >
                <ExternalLink className="h-4 w-4" />
                Visit Portfolio
              </a>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default ApplicantProfileModal

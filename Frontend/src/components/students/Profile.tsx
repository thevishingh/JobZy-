import { useSelector } from "react-redux"
import type { RootState } from "@/redux/store"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  Briefcase,
  Building2,
  CalendarDays,
  FileText,
  GraduationCap,
  Mail,
  Pencil,
  Phone,
  User,
  Globe,
} from "lucide-react"
import AppliedJobsTable from "../students/AppliedJobsTable"
import UpdateProfileModal from "./UpdateProfileModal"
import { useState } from "react"

export default function Profile() {
  const { user } = useSelector((store: RootState) => store.auth)
  const [open, setOpen] = useState(false)
  const skills = user?.profile?.skills || []
  const education = user?.profile?.education || []

  return (
    <>
      <section className="min-h-screen bg-[#fbf7ef] px-4 py-28 text-[#393629] sm:px-6 lg:px-8 dark:bg-[#050509] dark:text-white">
        <div className="mx-auto max-w-7xl">
          <Card className="overflow-hidden rounded-[2rem] border-slate-200 bg-white shadow-2xl shadow-orange-500/10 dark:border-white/10 dark:bg-[#111118]">
            <div className="relative h-40 bg-linear-to-r from-orange-200 via-rose-100 to-yellow-100 sm:h-48 dark:from-orange-500/20 dark:via-rose-500/10 dark:to-yellow-500/10">
              <div className="absolute top-8 right-10 h-32 w-32 rounded-full bg-orange-500/20 blur-3xl" />
            </div>

            <CardContent className="-mt-16 px-5 pb-8 sm:px-8">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-end">
                  <Avatar className="h-32 w-32 border-4 border-white shadow-xl dark:border-[#111118]">
                    <AvatarImage
                      src={user?.profile?.profilePicture}
                      alt={user?.fullName}
                    />
                    <AvatarFallback className="bg-orange-500 text-3xl font-bold text-white">
                      {user?.fullName?.charAt(0)?.toUpperCase() || "U"}
                    </AvatarFallback>
                  </Avatar>

                  <div className="text-center sm:text-left">
                    <h1 className="font-unbounded text-2xl font-bold sm:text-4xl">
                      {user?.fullName || "User Name"}
                    </h1>

                    <p className="mt-4 max-w-xl font-unbounded text-sm leading-6 text-[#6b6658] dark:text-slate-400">
                      {user?.profile?.bio || "No bio added yet."}
                    </p>

                    <Badge className="mt-3 rounded-full bg-orange-500/10 px-4 py-1 font-mont text-orange-600 hover:bg-orange-500/10 dark:text-orange-300">
                      {user?.role || "student"}
                    </Badge>
                  </div>
                </div>

                <Button
                  className="cursor-pointer rounded-2xl bg-[#c65d3b] px-6 font-mont text-white shadow-lg shadow-orange-500/20 hover:bg-[#b65335]"
                  onClick={() => setOpen(true)}
                >
                  <Pencil className="mr-2 h-4 w-4" />
                  Edit Profile
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="space-y-6 lg:col-span-1">
              <Card className="rounded-[2rem] border-slate-200 bg-white shadow-xl shadow-orange-500/5 dark:border-white/10 dark:bg-[#111118]">
                <CardHeader>
                  <CardTitle className="font-unbounded text-lg">
                    Contact Details
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <InfoItem icon={Mail} label="Email" value={user?.email} />
                  <InfoItem
                    icon={Phone}
                    label="Phone"
                    value={user?.phoneNumber}
                  />
                  <InfoItem icon={User} label="Role" value={user?.role} />

                  {user?.profile?.website && (
                    <InfoItem
                      icon={Globe}
                      label="Website"
                      value={user.profile.website}
                    />
                  )}

                  {user?.role === "recruiter" && (
                    <InfoItem
                      icon={Building2}
                      label="Company"
                      value={user?.profile?.companyName || "Not added"}
                    />
                  )}
                </CardContent>
              </Card>

              <Card className="rounded-[2rem] border-slate-200 bg-white shadow-xl shadow-orange-500/5 dark:border-white/10 dark:bg-[#111118]">
                <CardHeader>
                  <CardTitle className="font-unbounded text-lg">
                    Resume
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  {user?.profile?.resume ? (
                    <a
                      href={user.profile.resume}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between rounded-2xl border border-slate-200 bg-[#fbf7ef] p-4 transition hover:border-orange-300 hover:bg-orange-50 dark:border-white/10 dark:bg-[#050509] dark:hover:bg-orange-500/10"
                    >
                      <div className="flex items-center gap-3">
                        <div className="rounded-xl bg-orange-500/10 p-3 text-orange-500">
                          <FileText className="h-5 w-5" />
                        </div>

                        <div>
                          <p className="font-mont text-sm font-semibold">
                            {user?.profile?.resumeFileName || "View Resume"}
                          </p>
                          <p className="font-mont text-xs text-[#6b6658] dark:text-slate-400">
                            Click to open resume
                          </p>
                        </div>
                      </div>
                    </a>
                  ) : (
                    <p className="font-mont text-sm text-[#6b6658] dark:text-slate-400">
                      No resume uploaded yet.
                    </p>
                  )}
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6 lg:col-span-2">
              <Card className="rounded-[2rem] border-slate-200 bg-white shadow-xl shadow-orange-500/5 dark:border-white/10 dark:bg-[#111118]">
                <CardHeader>
                  <CardTitle className="font-unbounded text-lg">
                    Skills
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  {skills.length > 0 ? (
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill: string, index: number) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="rounded-full bg-orange-500/10 px-4 py-2 font-mont text-sm text-orange-700 dark:text-orange-300"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  ) : (
                    <p className="font-mont text-sm text-[#6b6658] dark:text-slate-400">
                      No skills added yet.
                    </p>
                  )}
                </CardContent>
              </Card>

              <Card className="rounded-[2rem] border-slate-200 bg-white shadow-xl shadow-orange-500/5 dark:border-white/10 dark:bg-[#111118]">
                <CardHeader>
                  <CardTitle className="font-unbounded text-lg">
                    Education
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  {education.length > 0 ? (
                    education.map((edu: any, index: number) => (
                      <div key={index}>
                        <div className="rounded-2xl border border-slate-200 bg-[#fbf7ef] p-5 dark:border-white/10 dark:bg-[#050509]">
                          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                            <div className="flex gap-4">
                              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-500">
                                <GraduationCap className="h-6 w-6" />
                              </div>

                              <div>
                                <h3 className="font-mont text-base font-semibold">
                                  {edu.degree || "Degree not added"}
                                </h3>

                                <p className="mt-1 font-mont text-sm text-[#6b6658] dark:text-slate-400">
                                  {edu.institution || "Institution not added"}
                                </p>
                              </div>
                            </div>

                            <div className="flex items-center gap-2 rounded-full bg-white px-3 py-1 font-mont text-xs text-[#6b6658] dark:bg-white/10 dark:text-slate-400">
                              <CalendarDays className="h-3.5 w-3.5" />
                              {formatDate(edu.startDate)} -{" "}
                              {formatDate(edu.endDate)}
                            </div>
                          </div>
                        </div>

                        {index !== education.length - 1 && (
                          <Separator className="my-4" />
                        )}
                      </div>
                    ))
                  ) : (
                    <p className="font-mont text-sm text-[#6b6658] dark:text-slate-400">
                      No education added yet.
                    </p>
                  )}
                </CardContent>
              </Card>

              <Card className="rounded-[2rem] border-slate-200 bg-white shadow-xl shadow-orange-500/5 dark:border-white/10 dark:bg-[#111118]">
                <CardHeader>
                  <CardTitle className="font-unbounded text-lg">
                    Profile Overview
                  </CardTitle>
                </CardHeader>

                <CardContent className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <OverviewCard
                    icon={Briefcase}
                    label="Account Type"
                    value={user?.role || "Student"}
                  />
                  <OverviewCard
                    icon={FileText}
                    label="Resume"
                    value={user?.profile?.resume ? "Uploaded" : "Not Uploaded"}
                  />
                  <OverviewCard
                    icon={GraduationCap}
                    label="Education"
                    value={`${education.length} Added`}
                  />
                  <OverviewCard
                    icon={User}
                    label="Skills"
                    value={`${skills.length} Added`}
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <AppliedJobsTable />
      <UpdateProfileModal open={open} setOpen={setOpen} />
    </>
  )
}

function InfoItem({
  icon: Icon,
  label,
  value,
}: {
  icon: any
  label: string
  value?: string | number
}) {
  return (
    <div className="flex items-start gap-3 rounded-2xl bg-[#fbf7ef] p-4 dark:bg-[#050509]">
      <div className="rounded-xl bg-white p-2 text-orange-500 shadow-sm dark:bg-white/10">
        <Icon className="h-4 w-4" />
      </div>

      <div className="min-w-0">
        <p className="font-mont text-xs text-[#6b6658] dark:text-slate-400">
          {label}
        </p>
        <p className="truncate font-mont text-sm font-medium text-[#393629] dark:text-white">
          {value || "Not added"}
        </p>
      </div>
    </div>
  )
}

function OverviewCard({
  icon: Icon,
  label,
  value,
}: {
  icon: any
  label: string
  value: string
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-[#fbf7ef] p-5 dark:border-white/10 dark:bg-[#050509]">
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-orange-500 shadow-sm dark:bg-white/10">
        <Icon className="h-5 w-5" />
      </div>

      <p className="font-mont text-sm text-[#6b6658] dark:text-slate-400">
        {label}
      </p>
      <h3 className="mt-1 font-mont text-lg font-semibold text-[#393629] dark:text-white">
        {value}
      </h3>
    </div>
  )
}

function formatDate(date?: string) {
  if (!date) return "Present"

  return new Date(date).toLocaleDateString("en-IN", {
    month: "short",
    year: "numeric",
  })
}

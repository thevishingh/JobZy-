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
import { Link } from "react-router-dom"
import AppliedJobsTable from "./AppliedJobsTable"
import UpdateProfileModal from "./UpdateProfileModal"
import { useState } from "react"

export default function Profile() {
  const { user } = useSelector((store: RootState) => store.auth)
  const [open, setOpen] = useState(false)
  const skills = user?.profile?.skills || []
  const education = user?.profile?.education || []

  return (
    <>
      <section className="min-h-screen bg-top px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Card className="overflow-hidden rounded-3xl border-gray-200 shadow-xl">
            <div className="h-36 bg-linear-to-r from-lime-100 via-rose-100 to-orange-200 sm:h-44" />

            <CardContent className="-mt-16 px-5 pb-8 sm:px-8">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-end">
                  <Avatar className="h-32 w-32 border-4 border-white shadow-lg">
                    <AvatarImage
                      src={user?.profile?.profilePicture}
                      alt={user?.fullName}
                    />
                    <AvatarFallback className="text-3xl font-bold">
                      {user?.fullName?.charAt(0)?.toUpperCase() || "U"}
                    </AvatarFallback>
                  </Avatar>

                  <div className="text-center sm:text-left">
                    <h1 className="font-mont text-2xl font-bold text-gray-900 sm:text-4xl">
                      {user?.fullName || "User Name"}
                    </h1>

                    <p className="mt-2 font-mont text-sm text-gray-500">
                      {user?.profile?.bio || "No bio added yet."}
                    </p>

                    <Badge className="mt-3 rounded-full bg-red-100 px-4 py-1 text-red-700 hover:bg-red-100">
                      {user?.role || "student"}
                    </Badge>
                  </div>
                </div>

                <Button
                  className="cursor-pointer rounded-md py-2 bg-black px-6 font-mont text-white hover:bg-gray-800"
                  onClick={() => setOpen(true)}
                >
                  <Pencil className="mr-1 h-4 w-4" />
                  Edit Profile
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="space-y-6 lg:col-span-1">
              <Card className="rounded-3xl border-gray-200 shadow-sm">
                <CardHeader>
                  <CardTitle className="font-mont text-lg">
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

              <Card className="rounded-3xl border-gray-200 shadow-sm">
                <CardHeader>
                  <CardTitle className="font-mont text-lg">Resume</CardTitle>
                </CardHeader>

                <CardContent>
                  {user?.profile?.resume ? (
                    <a
                      href={user.profile.resume}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between rounded-2xl border border-gray-200 bg-gray-50 p-4 transition hover:border-red-300 hover:bg-red-50"
                    >
                      <div className="flex items-center gap-3">
                        <div className="rounded-xl bg-red-100 p-3 text-red-600">
                          <FileText className="h-5 w-5" />
                        </div>

                        <div>
                          <p className="font-mont text-sm font-semibold text-gray-900">
                            {user?.profile?.resumeFileName || "View Resume"}
                          </p>
                          <p className="font-mont text-xs text-gray-500">
                            Click to open resume
                          </p>
                        </div>
                      </div>
                    </a>
                  ) : (
                    <p className="font-mont text-sm text-gray-500">
                      No resume uploaded yet.
                    </p>
                  )}
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6 lg:col-span-2">
              <Card className="rounded-3xl border-gray-200 shadow-sm">
                <CardHeader>
                  <CardTitle className="font-mont text-lg">Skills</CardTitle>
                </CardHeader>

                <CardContent>
                  {skills.length > 0 ? (
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill: string, index: number) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="rounded-full bg-red-50 px-4 py-2 font-mont text-sm text-red-700"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  ) : (
                    <p className="font-mont text-sm text-gray-500">
                      No skills added yet.
                    </p>
                  )}
                </CardContent>
              </Card>

              <Card className="rounded-3xl border-gray-200 shadow-sm">
                <CardHeader>
                  <CardTitle className="font-mont text-lg">Education</CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  {education.length > 0 ? (
                    education.map((edu: any, index: number) => (
                      <div key={index}>
                        <div className="rounded-2xl border border-gray-200 bg-white p-5">
                          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                            <div className="flex gap-4">
                              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-red-100 text-red-600">
                                <GraduationCap className="h-6 w-6" />
                              </div>

                              <div>
                                <h3 className="font-mont text-base font-semibold text-gray-900">
                                  {edu.degree || "Degree not added"}
                                </h3>

                                <p className="mt-1 font-mont text-sm text-gray-600">
                                  {edu.institution || "Institution not added"}
                                </p>
                              </div>
                            </div>

                            <div className="flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 font-mont text-xs text-gray-600">
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
                    <p className="font-mont text-sm text-gray-500">
                      No education added yet.
                    </p>
                  )}
                </CardContent>
              </Card>

              <Card className="rounded-3xl border-gray-200 shadow-sm">
                <CardHeader>
                  <CardTitle className="font-mont text-lg">
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
    <div className="flex items-start gap-3 rounded-2xl bg-gray-50 p-4">
      <div className="rounded-xl bg-white p-2 text-red-600 shadow-sm">
        <Icon className="h-4 w-4" />
      </div>

      <div className="min-w-0">
        <p className="font-mont text-xs text-gray-500">{label}</p>
        <p className="truncate font-mont text-sm font-medium text-gray-900">
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
    <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-red-600 shadow-sm">
        <Icon className="h-5 w-5" />
      </div>

      <p className="font-mont text-sm text-gray-500">{label}</p>
      <h3 className="mt-1 font-mont text-lg font-semibold text-gray-900">
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

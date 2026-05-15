import { useEffect, type Dispatch, type SetStateAction } from "react"
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "@/redux/store"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

import {
  Upload,
  UserRound,
  Briefcase,
  GraduationCap,
  Loader2,
} from "lucide-react"
import axios from "axios"
import { USER_API_END_POINT } from "@/utils/constant"
import { setAuthUser } from "@/redux/authSlice"

type UpdateProfileModalProps = {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}

type UpdateProfileFormData = {
  fullName: string
  phoneNumber: string
  bio: string
  skills: string
  institution: string
  degree: string
  startDate: string
  endDate: string
  website: string
  resume: FileList
}

export default function UpdateProfileModal({
  open,
  setOpen,
}: UpdateProfileModalProps) {
  const { user } = useSelector((store: RootState) => store.auth)
  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { isSubmitting },
  } = useForm<UpdateProfileFormData>()

  useEffect(() => {
    const education = user?.profile?.education?.[0]

    reset({
      fullName: user?.fullName || "",
      phoneNumber: user?.phoneNumber || "",
      bio: user?.profile?.bio || "",
      skills: user?.profile?.skills?.join(", ") || "",
      institution: education?.institution || "",
      degree: education?.degree || "",
      startDate: education?.startDate
        ? new Date(education.startDate).toISOString().split("T")[0]
        : "",
      endDate: education?.endDate
        ? new Date(education.endDate).toISOString().split("T")[0]
        : "",
      website: user?.profile?.website || "",
    })
  }, [user, reset])

  const selectedResume = watch("resume")?.[0]

  const onSubmit = async (data: UpdateProfileFormData) => {
    const formData = new FormData()

    formData.append("fullName", data.fullName)
    formData.append("phoneNumber", data.phoneNumber)
    formData.append("bio", data.bio)
    formData.append("skills", data.skills)
    formData.append("institution", data.institution)
    formData.append("degree", data.degree)
    formData.append("startDate", data.startDate)
    formData.append("endDate", data.endDate)
    formData.append("website", data.website)

    if (data.resume?.[0]) {
      formData.append("file", data.resume[0])
    }

    try {
      const response = await axios.post(
        `${USER_API_END_POINT}/profile/update`,
        formData,
        {
          withCredentials: true,
        }
      )

      if (response.data.success) {
        dispatch(setAuthUser(response.data.user))
        toast.success(response.data.message || "Profile updated successfully")
        setOpen(false)
      }
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Failed to update profile")
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-h-[90vh] overflow-y-auto rounded-[2rem] border-slate-200 bg-[#fbf7ef] p-0 text-[#393629] shadow-2xl shadow-orange-500/10 sm:max-w-3xl dark:border-white/10 dark:bg-[#050509] dark:text-white">
        <DialogHeader className="relative overflow-hidden border-b border-slate-200 px-6 py-6 dark:border-white/10">
          <div className="absolute right-8 top-4 h-24 w-24 rounded-full bg-orange-500/10 blur-3xl" />

          <div className="relative">
            <span className="inline-flex rounded-full bg-orange-500/10 px-3 py-1 font-mont text-xs font-semibold uppercase tracking-[0.18em] text-orange-600 dark:text-orange-300">
              Profile Setup
            </span>

            <DialogTitle className="mt-3 font-unbounded text-2xl font-bold">
              Update Profile
            </DialogTitle>

            <p className="mt-2 font-mont text-sm leading-6 text-[#6b6658] dark:text-slate-400">
              Keep your Jobzy profile updated to improve applications and
              recruiter visibility.
            </p>
          </div>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-7 px-6 py-6">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div className="space-y-2">
              <Label className="font-mont text-[#393629] dark:text-white">
                Full Name
              </Label>
              <Input
                placeholder="Enter your full name"
                className="rounded-2xl border-slate-200 bg-white font-mont dark:border-white/10 dark:bg-[#111118]"
                {...register("fullName")}
              />
            </div>

            <div className="space-y-2">
              <Label className="font-mont text-[#393629] dark:text-white">
                Phone Number
              </Label>
              <Input
                placeholder="Enter phone number"
                className="rounded-2xl border-slate-200 bg-white font-mont dark:border-white/10 dark:bg-[#111118]"
                {...register("phoneNumber")}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label className="flex items-center gap-2 font-mont text-[#393629] dark:text-white">
              <UserRound className="h-4 w-4 text-orange-500" />
              Bio
            </Label>

            <Textarea
              placeholder="Write a short professional bio..."
              className="min-h-28 resize-none rounded-2xl border-slate-200 bg-white font-mont dark:border-white/10 dark:bg-[#111118]"
              {...register("bio")}
            />
          </div>

          <div className="space-y-2">
            <Label className="flex items-center gap-2 font-mont text-[#393629] dark:text-white">
              <Briefcase className="h-4 w-4 text-orange-500" />
              Skills
            </Label>

            <Input
              placeholder="React, TypeScript, Redux, Node.js"
              className="rounded-2xl border-slate-200 bg-white font-mont dark:border-white/10 dark:bg-[#111118]"
              {...register("skills")}
            />

            <p className="font-mont text-xs text-[#6b6658] dark:text-slate-400">
              Add skills separated by comma.
            </p>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-[#111118]">
            <Label className="mb-4 flex items-center gap-2 font-mont text-[#393629] dark:text-white">
              <GraduationCap className="h-4 w-4 text-orange-500" />
              Education
            </Label>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <Input
                placeholder="Institution name"
                className="rounded-2xl border-slate-200 bg-[#fbf7ef] font-mont dark:border-white/10 dark:bg-[#050509]"
                {...register("institution")}
              />

              <Input
                placeholder="Degree / Course"
                className="rounded-2xl border-slate-200 bg-[#fbf7ef] font-mont dark:border-white/10 dark:bg-[#050509]"
                {...register("degree")}
              />

              <Input
                type="date"
                className="rounded-2xl border-slate-200 bg-[#fbf7ef] font-mont dark:border-white/10 dark:bg-[#050509]"
                {...register("startDate")}
              />

              <Input
                type="date"
                className="rounded-2xl border-slate-200 bg-[#fbf7ef] font-mont dark:border-white/10 dark:bg-[#050509]"
                {...register("endDate")}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label className="font-mont text-[#393629] dark:text-white">
              Portfolio / Website
            </Label>

            <Input
              placeholder="https://your-portfolio.com"
              className="rounded-2xl border-slate-200 bg-white font-mont dark:border-white/10 dark:bg-[#111118]"
              {...register("website")}
            />
          </div>

          <div className="space-y-3">
            <Label className="font-mont text-[#393629] dark:text-white">
              Resume
            </Label>

            <label className="flex cursor-pointer flex-col gap-4 rounded-[2rem] border border-dashed border-slate-300 bg-white p-5 transition hover:border-orange-400 hover:bg-orange-50 sm:flex-row sm:items-center sm:justify-between dark:border-white/10 dark:bg-[#111118] dark:hover:bg-orange-500/10">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-orange-500/10 p-3 text-orange-500">
                  <Upload className="h-5 w-5" />
                </div>

                <div>
                  <p className="font-mont text-sm font-semibold text-[#393629] dark:text-white">
                    {selectedResume
                      ? selectedResume.name
                      : user?.profile?.resumeFileName || "Upload Resume"}
                  </p>

                  <p className="font-mont text-xs text-[#6b6658] dark:text-slate-400">
                    PDF, DOC or DOCX
                  </p>
                </div>
              </div>

              <span className="w-fit rounded-full bg-[#393629] px-4 py-2 font-mont text-xs text-white dark:bg-white dark:text-[#111118]">
                {selectedResume ? "Selected" : "Choose File"}
              </span>

              <input
                type="file"
                accept=".pdf,.doc,.docx"
                className="hidden"
                {...register("resume")}
              />
            </label>
          </div>

          <div className="flex flex-col-reverse gap-3 border-t border-slate-200 pt-5 sm:flex-row sm:justify-end dark:border-white/10">
            <Button
              type="button"
              variant="outline"
              disabled={isSubmitting}
              onClick={() => setOpen(false)}
              className="rounded-full border-slate-200 bg-white px-6 font-mont text-[#393629] dark:border-white/10 dark:bg-[#111118] dark:text-white"
            >
              Cancel
            </Button>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="rounded-full bg-[#c65d3b] px-8 font-mont text-white hover:bg-[#b65335] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Saving...
                </>
              ) : (
                "Save Changes"
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

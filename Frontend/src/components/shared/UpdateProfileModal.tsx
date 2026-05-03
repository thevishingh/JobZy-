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
      <DialogContent className="max-h-[90vh] overflow-y-auto rounded-3xl border-gray-200 bg-bottom p-0 sm:max-w-3xl">
        <DialogHeader className="border-b px-6 py-5">
          <DialogTitle className="font-mont text-2xl font-bold text-gray-900">
            Update Profile
          </DialogTitle>

          <p className="font-mont text-sm text-gray-500">
            Complete your profile to improve your job application strength.
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-7 px-6 py-6">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div className="space-y-2">
              <Label className="font-mont">Full Name</Label>
              <Input
                placeholder="Enter your full name"
                className="rounded-xl"
                {...register("fullName")}
              />
            </div>

            <div className="space-y-2">
              <Label className="font-mont">Phone Number</Label>
              <Input
                placeholder="Enter phone number"
                className="rounded-xl"
                {...register("phoneNumber")}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label className="flex items-center gap-2 font-mont">
              <UserRound className="h-4 w-4 text-red-500" />
              Bio
            </Label>

            <Textarea
              placeholder="Write a short professional bio..."
              className="min-h-28 resize-none rounded-xl"
              {...register("bio")}
            />
          </div>

          <div className="space-y-2">
            <Label className="flex items-center gap-2 font-mont">
              <Briefcase className="h-4 w-4 text-red-500" />
              Skills
            </Label>

            <Input
              placeholder="React, TypeScript, Redux, Node.js"
              className="rounded-xl"
              {...register("skills")}
            />

            <p className="font-mont text-xs text-gray-500">
              Add skills separated by comma.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
            <Label className="mb-4 flex items-center gap-2 font-mont">
              <GraduationCap className="h-4 w-4 text-red-500" />
              Education
            </Label>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <Input
                placeholder="Institution name"
                className="rounded-xl bg-white"
                {...register("institution")}
              />

              <Input
                placeholder="Degree / Course"
                className="rounded-xl bg-white"
                {...register("degree")}
              />

              <Input
                type="date"
                className="rounded-xl bg-white"
                {...register("startDate")}
              />

              <Input
                type="date"
                className="rounded-xl bg-white"
                {...register("endDate")}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label className="font-mont">Portfolio / Website</Label>

            <Input
              placeholder="https://your-portfolio.com"
              className="rounded-xl"
              {...register("website")}
            />
          </div>

          <div className="space-y-3">
            <Label className="font-mont">Resume</Label>

            <label className="flex cursor-pointer items-center justify-between gap-4 rounded-2xl border border-dashed border-gray-300 bg-gray-50 p-5 transition hover:border-red-400 hover:bg-red-50">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-white p-3 text-red-500 shadow-sm">
                  <Upload className="h-5 w-5" />
                </div>

                <div>
                  <p className="font-mont text-sm font-semibold text-gray-800">
                    {selectedResume
                      ? selectedResume.name
                      : user?.profile?.resumeFileName || "Upload Resume"}
                  </p>

                  <p className="font-mont text-xs text-gray-500">
                    PDF, DOC or DOCX
                  </p>
                </div>
              </div>

              <span className="rounded-full bg-black px-4 py-2 font-mont text-xs text-white">
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

          <div className="flex flex-col-reverse gap-3 border-t pt-5 sm:flex-row sm:justify-end">
            <Button
              type="button"
              variant="outline"
              disabled={isSubmitting}
              onClick={() => setOpen(false)}
              className="rounded-full px-6 font-mont"
            >
              Cancel
            </Button>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="rounded-full bg-black px-8 font-mont text-white hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-70"
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

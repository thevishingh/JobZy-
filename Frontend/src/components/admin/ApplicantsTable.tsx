import { useMemo, useState } from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  BadgeCheck,
  ChevronLeft,
  ChevronRight,
  CircleDashed,
  Download,
  Eye,
  MoreHorizontal,
  XCircle,
} from "lucide-react"
import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "@/redux/store"
import ApplicantProfileModal from "./ApplicantProfileModal"
import { toast } from "sonner"
import axios from "axios"
import { APPLICATION_API_END_POINT } from "@/utils/constant"
import { Highlighter } from "../ui/highlighter"
import { setApplicants } from "@/redux/applicationSlice"
import { setAllAppliedJobs } from "@/redux/jobSlice"

const ITEMS_PER_PAGE = 10

const ApplicantsTable = () => {
  const [selectedApplication, setSelectedApplication] = useState<any>(null)
  const [profileModalOpen, setProfileModalOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [statusFilter, setStatusFilter] = useState("")
  const [sortBy, setSortBy] = useState("")

  // getting All Applied jobs
  const { allAppliedJobs } = useSelector((store: RootState) => store.job)
  const dispatch = useDispatch()

  const { applicants = [] } = useSelector(
    (store: RootState) => store.application
  )
  // getting job for job title
  const { singleJob } = useSelector((store: RootState) => store.job)

  const filteredApplicants = useMemo(() => {
    let data = [...applicants]

    if (statusFilter && statusFilter !== "all") {
      data = data.filter(
        (item: any) => item.status?.toLowerCase() === statusFilter.toLowerCase()
      )
    }

    if (sortBy) {
      data.sort((a: any, b: any) => {
        const dateA = new Date(a.createdAt).getTime()
        const dateB = new Date(b.createdAt).getTime()

        if (sortBy === "newest") return dateB - dateA
        if (sortBy === "oldest") return dateA - dateB

        const nameA = a.applicant?.fullName || ""
        const nameB = b.applicant?.fullName || ""

        if (sortBy === "az") return nameA.localeCompare(nameB)
        if (sortBy === "za") return nameB.localeCompare(nameA)

        return 0
      })
    }

    return data
  }, [applicants, statusFilter, sortBy])

  const totalPages = Math.ceil(filteredApplicants.length / ITEMS_PER_PAGE)

  const paginatedApplicants = filteredApplicants.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  )

  const handleStatusChange = (value: string | null) => {
    setStatusFilter(value ?? "all")
    setCurrentPage(1)
  }

  const handleSortChange = (value: string | null) => {
    setSortBy(value ?? "newest")
    setCurrentPage(1)
  }

  // status update handler
  const statusHandler = async (status: string, id: string) => {
    try {
      const response = await axios.post(
        `${APPLICATION_API_END_POINT}/status/${id}/update`,
        { status },
        { withCredentials: true }
      )

      if (response.data.success) {
        toast.success(response.data.message)

        // recruiter applicants table update
        dispatch(
          setApplicants(
            applicants.map((item: any) =>
              item._id === id ? { ...item, status: status.toLowerCase() } : item
            )
          )
        )

        // student applied jobs table update
        dispatch(
          setAllAppliedJobs(
            allAppliedJobs.map((item: any) =>
              item._id === id ? { ...item, status: status.toLowerCase() } : item
            )
          )
        )
      }
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "Something went wrong")
    }
  }

  return (
    <div className="mt-10 overflow-hidden rounded-[24px] border border-[#ece7ff] bg-white shadow-sm dark:border-white/10 dark:bg-[#050509]">
      <div className="flex flex-col gap-5 border-b border-[#f1edf9] p-6 lg:flex-row lg:items-center lg:justify-between dark:border-white/10">
        <div>
          <p className="font-mont text-xs font-semibold tracking-[0.22em] text-[#7047ff] uppercase">
            Candidates
          </p>

          <h2 className="mt-1 font-unbounded text-2xl font-semibold tracking-tight text-[#2f2b3a] dark:text-white">
            Applicants for &nbsp;
            <Highlighter action="highlight" color="#F45B26">
              <span className="p-2 text-black">{singleJob?.title}</span>
            </Highlighter>
          </h2>

          <p className="mt-2 font-unbounded text-sm text-[#6b6658] dark:text-slate-400">
            Review and manage candidates who applied for this position.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Select value={statusFilter} onValueChange={handleStatusChange}>
            <SelectTrigger className="w-full rounded-full border-[#ece7ff] bg-[#fbfaff] font-unbounded text-sm capitalize sm:w-52 dark:border-white/10 dark:bg-[#0b0b12]">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>

            <SelectContent className="font-unbounded capitalize dark:border-white/10 dark:bg-[#0b0b12]">
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="accepted">Accepted</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="rejected">Rejected</SelectItem>
            </SelectContent>
          </Select>

          <Select value={sortBy} onValueChange={handleSortChange}>
            <SelectTrigger className="w-full rounded-full border-[#ece7ff] bg-[#fbfaff] font-unbounded text-sm capitalize sm:w-52 dark:border-white/10 dark:bg-[#0b0b12]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>

            <SelectContent className="dark:border-white/10 dark:bg-[#0b0b12]">
              <SelectItem value="newest">Newest First</SelectItem>
              <SelectItem value="oldest">Oldest First</SelectItem>
              <SelectItem value="az">A - Z</SelectItem>
              <SelectItem value="za">Z - A</SelectItem>
            </SelectContent>
          </Select>

          <div className="rounded-full bg-[#f3f1ff] px-4 py-2 text-center font-unbounded text-sm font-medium text-[#7047ff] dark:bg-violet-500/10 dark:text-violet-300">
            {filteredApplicants.length} Applicants
          </div>
        </div>
      </div>

      <div className="w-full overflow-x-auto">
        <Table className="min-w-237.5">
          <TableHeader>
            <TableRow className="border-[#f1edf9] hover:bg-transparent dark:border-white/10">
              <TableHead className="h-14 pl-6 font-unbounded font-semibold text-[#6b6658] dark:text-slate-400">
                Full Name
              </TableHead>
              <TableHead className="font-unbounded font-semibold text-[#6b6658] dark:text-slate-400">
                Email
              </TableHead>
              <TableHead className="font-unbounded font-semibold text-[#6b6658] dark:text-slate-400">
                Contact
              </TableHead>
              <TableHead className="font-unbounded font-semibold text-[#6b6658] dark:text-slate-400">
                Resume
              </TableHead>
              <TableHead className="font-unbounded font-semibold text-[#6b6658] dark:text-slate-400">
                Status
              </TableHead>
              <TableHead className="font-unbounded font-semibold text-[#6b6658] dark:text-slate-400">
                Applied Date
              </TableHead>
              <TableHead className="pr-6 text-right font-unbounded font-semibold text-[#6b6658] dark:text-slate-400">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {paginatedApplicants.length > 0 ? (
              paginatedApplicants.map((application: any) => {
                const applicant = application.applicant

                return (
                  <TableRow
                    key={application._id}
                    className="border-[#f5f2fb] transition hover:bg-[#faf8ff] dark:border-white/5 dark:hover:bg-white/2"
                  >
                    <TableCell className="pl-6">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-11 w-11 border border-[#ece7ff]">
                          <AvatarImage
                            src={applicant?.profile?.profilePicture}
                          />
                          <AvatarFallback>
                            {applicant?.fullName?.charAt(0) || "A"}
                          </AvatarFallback>
                        </Avatar>

                        <div>
                          <p className="font-medium text-[#2f2b3a] dark:text-white">
                            {applicant?.fullName || "Unknown Applicant"}
                          </p>

                          <p className="max-w-45 truncate font-unbounded text-xs text-[#6b6658] dark:text-slate-400">
                            {applicant?.profile?.bio || "Applicant"}
                          </p>
                        </div>
                      </div>
                    </TableCell>

                    <TableCell className="font-unbounded text-[#5f6270] dark:text-slate-300">
                      {applicant?.email || "N/A"}
                    </TableCell>

                    <TableCell className="font-unbounded text-[#5f6270] dark:text-slate-300">
                      {applicant?.phoneNumber || "N/A"}
                    </TableCell>

                    <TableCell>
                      {applicant?.profile?.resume ? (
                        <a
                          href={applicant.profile.resume}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex w-fit items-center gap-2 rounded-full bg-[#f3f1ff] px-4 py-2 font-unbounded text-sm font-medium text-[#7047ff] transition hover:bg-[#ebe6ff] dark:bg-violet-500/10 dark:text-violet-300"
                        >
                          <Download className="h-4 w-4" />
                          Resume
                        </a>
                      ) : (
                        <button className="flex cursor-not-allowed items-center gap-2 rounded-full bg-[#f3f1ff] px-4 py-2 font-unbounded text-sm font-medium text-[#7047ff] opacity-60 dark:bg-violet-500/10 dark:text-violet-300">
                          <Download className="h-4 w-4" />
                          No Resume
                        </button>
                      )}
                    </TableCell>

                    <TableCell>
                      {application?.status === "accepted" ? (
                        <div className="flex w-fit items-center gap-2 rounded-full bg-emerald-100 px-3 py-1.5 font-unbounded text-xs font-semibold text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300">
                          <BadgeCheck className="h-4 w-4" />
                          Accepted
                        </div>
                      ) : application?.status === "rejected" ? (
                        <div className="flex w-fit items-center gap-2 rounded-full bg-red-100 px-3 py-1.5 font-unbounded text-xs font-semibold text-red-700 dark:bg-red-500/10 dark:text-red-300">
                          <XCircle className="h-4 w-4" />
                          Rejected
                        </div>
                      ) : application?.status === "under review" ? (
                        <div className="flex w-fit items-center gap-2 rounded-full bg-sky-100 px-3 py-1.5 font-unbounded text-xs font-semibold text-sky-700 dark:bg-sky-500/10 dark:text-sky-300">
                          <Eye className="h-4 w-4" />
                          Under Review
                        </div>
                      ) : (
                        <div className="flex w-fit items-center gap-2 rounded-full bg-orange-100 px-3 py-1.5 font-unbounded text-xs font-semibold text-orange-700 dark:bg-orange-500/10 dark:text-orange-300">
                          <CircleDashed className="h-4 w-4" />
                          Applied
                        </div>
                      )}
                    </TableCell>

                    <TableCell className="font-unbounded text-[#5f6270] dark:text-slate-300">
                      {application.createdAt
                        ? new Date(application.createdAt).toLocaleDateString()
                        : "N/A"}
                    </TableCell>

                    <TableCell className="pr-6 text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger className="rounded-full p-2 transition hover:bg-[#f3f1ff] dark:hover:bg-white/10">
                          <MoreHorizontal className="h-5 w-5 cursor-pointer text-[#6b6658] dark:text-slate-300" />
                        </DropdownMenuTrigger>

                        <DropdownMenuContent
                          align="end"
                          className="w-52 border-[#ece7ff] bg-white dark:border-white/10 dark:bg-[#0b0b12]"
                        >
                          <DropdownMenuItem
                            className="cursor-pointer font-unbounded"
                            onClick={() => {
                              setSelectedApplication(application)
                              setProfileModalOpen(true)
                            }}
                          >
                            <Eye className="mr-2 h-4 w-4" />
                            View Profile
                          </DropdownMenuItem>

                          <DropdownMenuItem
                            onClick={() =>
                              statusHandler("Accepted", application._id)
                            }
                            className="cursor-pointer font-unbounded text-emerald-600 focus:text-emerald-600 dark:text-emerald-400"
                          >
                            <BadgeCheck className="mr-2 h-4 w-4" />
                            Accept Application
                          </DropdownMenuItem>

                          <DropdownMenuItem
                            onClick={() =>
                              statusHandler("Rejected", application._id)
                            }
                            className="cursor-pointer font-unbounded text-red-500 focus:text-red-500"
                          >
                            <XCircle className="mr-2 h-4 w-4" />
                            Reject Application
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={() =>
                              statusHandler("under review", application._id)
                            }
                            className="cursor-pointer font-unbounded text-sky-600 focus:text-sky-600 dark:text-sky-400"
                          >
                            <Eye className="mr-2 h-4 w-4" />
                            Under Review
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                )
              })
            ) : (
              <TableRow>
                <TableCell
                  colSpan={7}
                  className="h-32 text-center font-unbounded text-sm text-[#6b6658] dark:text-slate-400"
                >
                  No applicants found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div className="flex flex-col gap-4 border-t border-[#f1edf9] p-5 sm:flex-row sm:items-center sm:justify-between dark:border-white/10">
        <p className="font-unbounded text-sm text-[#6b6658] dark:text-slate-400">
          Showing {paginatedApplicants.length} of {filteredApplicants.length}{" "}
          applicants
        </p>

        <div className="flex items-center gap-2">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#ece7ff] transition hover:bg-[#f3f1ff] disabled:cursor-not-allowed disabled:opacity-40 dark:border-white/10 dark:hover:bg-white/10"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          <span className="font-unbounded text-sm text-[#2f2b3a] dark:text-white">
            Page {currentPage} of {totalPages || 1}
          </span>

          <button
            disabled={currentPage === totalPages || totalPages === 0}
            onClick={() => setCurrentPage((prev) => prev + 1)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#ece7ff] transition hover:bg-[#f3f1ff] disabled:cursor-not-allowed disabled:opacity-40 dark:border-white/10 dark:hover:bg-white/10"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
      <ApplicantProfileModal
        open={profileModalOpen}
        setOpen={setProfileModalOpen}
        application={selectedApplication}
      />
    </div>
  )
}

export default ApplicantsTable

import { Bookmark } from "lucide-react"
import { Button } from "../ui/button"
import { Avatar, AvatarImage } from "../ui/avatar"
import { Badge } from "../ui/badge"
import { useNavigate } from "react-router-dom"

export default function singleJobs() {
  const navigate = useNavigate();
  const jobId = "123"; // Replace with actual job ID
  return (
    <>
      <section className="w-full max-w-sm rounded-2xl border border-gray-200 bg-[#f4ecec] p-5 shadow-2xl transition hover:shadow-md">
        {/* Top Row */}
        <div className="flex items-center font-mont justify-between text-sm text-gray-500">
          <p>2 days ago</p>

          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 rounded-full border-gray-200 hover:bg-gray-100"
          >
            <Bookmark className="h-4 w-4" />
          </Button>
        </div>

        {/* Company Info */}
        <div className="mt-4 flex items-center gap-3">
          <Avatar className="h-10 w-10 shrink-0 border border-gray-200 bg-white sm:h-12 sm:w-12">
            <AvatarImage
              src="https://imgs.search.brave.com/QZ2Z405V1M2v62vtIGbpijY8RkcKaqMNSpxKmfxzpIQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzc1L2Fk/LzI1Lzc1YWQyNTVl/YmJmNDdmOTQ5YTc5/ZWZhMjZlMjhjYmJl/LmpwZw"
              className="object-cover"
            />
          </Avatar>

          <div className="min-w-0">
            <h1 className="truncate text-sm font-mont font-semibold text-gray-900 sm:text-base">
              Company Name
            </h1>
            <p className="text-xs text-gray-500 upp font-unbounded sm:text-sm">India</p>
          </div>
        </div>
        <div className="">
          <h1 className=" font-inter capitalize">title</h1>
          <p className=" font-inter">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam,
            quidem.
          </p>
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <Badge className="rounded-full font-inter bg-red-100 px-3 py-1 text-xs font-medium text-red-600">
            12 position
          </Badge>
          <Badge className="rounded-full font-inter bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-600">
            part time
          </Badge>
          <Badge className="rounded-full font-inter bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-700">
            24 LPA
          </Badge>
        </div>
        <div className="mt-4 flex font-mont items-center gap-4">
          <Button onClick={() => navigate(`/job-details/${jobId}`)} className="cursor-pointer">
            Details
          </Button>
          <Button className="cursor-pointer">Save for later</Button>
        </div>
      </section>
    </>
  )
}

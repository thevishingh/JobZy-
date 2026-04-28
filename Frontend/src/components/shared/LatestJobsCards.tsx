// LatestJobsCards.tsx

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Bookmark, Briefcase, IndianRupee, MapPin } from "lucide-react"

type JobProps = {
  job: {
    title: string
    company: string
    location: string
    jobType: string
    positions: string
    salary: string
    description: string
  }
}

export default function LatestJobsCards({ job }: JobProps) {
  return (
    <Card className="group rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <CardHeader className="space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50">
            <Briefcase className="h-6 w-6 text-red-500" />
          </div>

          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="rounded-full"
          >
            <Bookmark className="h-5 w-5 text-gray-500" />
          </Button>
        </div>

        <div>
          <h3 className="font-unbounded text-xl font-semibold text-gray-900">
            {job.title}
          </h3>

          <p className="mt-1 font-mont text-sm text-gray-500">{job.company}</p>
        </div>
      </CardHeader>

      <CardContent className="space-y-5">
        <div className="flex items-center gap-2 font-mont text-sm text-gray-600">
          <MapPin className="h-4 w-4 text-gray-400" />
          {job.location}
        </div>

        <div className="flex flex-wrap gap-2">
          <Badge className="rounded-full bg-green-50 px-3 py-1 text-green-700 hover:bg-green-50">
            {job.jobType}
          </Badge>

          <Badge className="rounded-full bg-blue-50 px-3 py-1 text-blue-700 hover:bg-blue-50">
            {job.positions}
          </Badge>

          <Badge className="rounded-full bg-orange-50 px-3 py-1 text-orange-700 hover:bg-orange-50">
            <IndianRupee className="mr-1 h-3 w-3" />
            {job.salary}
          </Badge>
        </div>

        <p className="line-clamp-2 font-mont text-sm leading-6 text-gray-600">
          {job.description}
        </p>
      </CardContent>

      <CardFooter className="flex items-center justify-between border-t px-6 pt-5">
        <p className="font-mont text-xs text-gray-500">Posted 2 days ago</p>

        <Button className="rounded-full bg-black px-5 font-mont text-white hover:bg-gray-900">
          View Details
        </Button>
      </CardFooter>
    </Card>
  )
}

// LatestJobsCards.tsx

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Bookmark, Briefcase, IndianRupee, MapPin } from "lucide-react"

type JobProps = {
  job: {
    title: string
    company: {
      _id?: string
      name?: string
    }
    location: string
    jobType: string
    positions: string | number
    salary: string
    description: string
  }
}

export default function LatestJobsCards({ job }: JobProps) {
  return (
    <Card className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-orange-500/10 dark:border-white/10 dark:bg-[#111118] dark:hover:shadow-black/40">
      <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-orange-500/10 blur-3xl dark:bg-orange-500/5" />

      <CardHeader className="relative space-y-5">
        <div className="flex items-start justify-between gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-500">
            <Briefcase className="h-6 w-6" />
          </div>

          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="rounded-full text-muted-foreground transition hover:bg-orange-500/10 hover:text-orange-500"
          >
            <Bookmark className="h-5 w-5" />
          </Button>
        </div>

        <div>
          <h3 className="line-clamp-1 font-unbounded text-xl font-semibold text-[#393629] dark:text-white">
            {job.title}
          </h3>

          <p className="mt-1 font-mont text-sm text-[#6b6658] dark:text-slate-400">
            {job.company?.name || "Company"}
          </p>
        </div>
      </CardHeader>

      <CardContent className="relative space-y-5">
        <div className="flex items-center gap-2 font-mont text-sm text-[#6b6658] dark:text-slate-400">
          <MapPin className="h-4 w-4 text-orange-500" />
          {job.location}
        </div>

        <div className="flex flex-wrap gap-2">
          <Badge className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 font-mont text-emerald-700 hover:bg-emerald-500/10 dark:text-emerald-300">
            {job.jobType}
          </Badge>

          <Badge className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 font-mont text-blue-700 hover:bg-blue-500/10 dark:text-blue-300">
            {job.positions} Positions
          </Badge>

          <Badge className="rounded-full border border-orange-500/20 bg-orange-500/10 px-3 py-1 font-mont text-orange-700 hover:bg-orange-500/10 dark:text-orange-300">
            <IndianRupee className="mr-1 h-3 w-3" />
            {job.salary}
          </Badge>
        </div>

        <p className="line-clamp-2 font-mont text-sm leading-6 text-[#6b6658] dark:text-slate-400">
          {job.description}
        </p>
      </CardContent>

      <CardFooter className="relative flex items-center justify-between border-t border-slate-200 px-6 pt-5 dark:border-white/10">
        <p className="font-mont text-xs text-[#6b6658] dark:text-slate-500">
          Posted 2 days ago
        </p>

        <Button className="rounded-full bg-[#393629] px-5 font-mont text-white transition hover:bg-[#c65d3b] dark:bg-white dark:text-slate-950 dark:hover:bg-orange-400">
          View Details
        </Button>
      </CardFooter>
    </Card>
  )
}

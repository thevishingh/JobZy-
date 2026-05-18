import { Bookmark, BriefcaseBusiness, MapPin, ArrowUpRight } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

type DummyJob = {
  id: number
  title: string
  company: string
  location: string
  type: string
  positions: string
  salary: string
  description: string
  posted: string
}

export default function DummyJobCard({ job }: { job: DummyJob }) {
  const navigate = useNavigate()

  return (
    <Card className="group relative mt-3 overflow-hidden rounded-[2rem] border border-[#e8dece] bg-[#fcfaf6] shadow-[0_10px_30px_rgba(33,28,22,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(33,28,22,0.10)] dark:border-white/10 dark:bg-[#111315]">
      <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#eef4f1] to-transparent dark:from-white/[0.03]" />

      <CardContent className="relative p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#d9e5df] bg-[#edf5f1] text-[#1b5a4e] dark:border-white/10 dark:bg-white/[0.04] dark:text-emerald-300">
              <BriefcaseBusiness size={18} />
            </div>

            <div>
              <p className="font-mont text-[10px] font-semibold tracking-[0.18em] text-[#8b7f70] uppercase dark:text-slate-500">
                Featured role
              </p>
            </div>
          </div>

          <button className="flex h-9 w-9 items-center justify-center rounded-full border border-transparent text-[#8f8578] transition hover:border-[#e7dccb] hover:bg-white hover:text-[#1b5a4e] dark:text-slate-500 dark:hover:border-white/10 dark:hover:bg-white/[0.04] dark:hover:text-white">
            <Bookmark size={17} />
          </button>
        </div>

        <div className="mt-5">
          <h3 className="font-unbounded text-lg leading-snug font-semibold text-[#211c16] dark:text-white">
            {job.title}
          </h3>

          <p className="mt-1.5 font-mont text-sm font-medium text-[#6e665a] dark:text-slate-400">
            {job.company}
          </p>
        </div>

        <div className="mt-4 flex items-center gap-2 font-mont text-sm text-[#786f62] dark:text-slate-400">
          <MapPin size={15} className="text-[#1b5a4e] dark:text-emerald-300" />
          <span>{job.location}</span>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          <span className="rounded-full border border-[#d9e5df] bg-[#eef5f1] px-3 py-1 font-mont text-xs font-medium text-[#1b5a4e] dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-300">
            {job.type}
          </span>

          <span className="rounded-full border border-[#eadfce] bg-[#f7f1e7] px-3 py-1 font-mont text-xs font-medium text-[#7b5d30] dark:border-amber-500/20 dark:bg-amber-500/10 dark:text-amber-300">
            {job.positions}
          </span>

          <span className="rounded-full border border-[#e4ddd1] bg-white px-3 py-1 font-mont text-xs font-semibold text-[#3b342b] dark:border-white/10 dark:bg-white/[0.04] dark:text-white">
            {job.salary}
          </span>
        </div>

        <p className="mt-5 line-clamp-2 font-mont text-sm leading-6 text-[#6f6659] dark:text-slate-400">
          {job.description}
        </p>
      </CardContent>

      <CardFooter className="flex items-center justify-between border-t border-slate-200 bg-slate-50 px-5 py-4 dark:border-white/10 dark:bg-white/[0.03]">
        <p className="font-mont text-xs text-[#8a8072] dark:text-slate-500">
          {job.posted}
        </p>

        <Button
          onClick={() => navigate("/login")}
          className="group/button h-10 cursor-pointer rounded-full bg-[#1c4f45] px-4 text-sm text-white hover:bg-[#143d35] dark:bg-white dark:text-black dark:hover:bg-[#e8e3d9]"
        >
          View Details
          <ArrowUpRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5" />
        </Button>
      </CardFooter>
    </Card>
  )
}

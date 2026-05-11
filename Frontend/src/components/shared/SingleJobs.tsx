import { Bookmark } from "lucide-react";
import { Button } from "../ui/button";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { useNavigate } from "react-router-dom";

type SingleJobsProps = {
  job: any;
};

export default function SingleJobs({ job }: SingleJobsProps) {
  const navigate = useNavigate();

  const getDaysAgo = (dateString: string) => {
    const postedDate = new Date(dateString);
    const today = new Date();

    const utcPosted = Date.UTC(
      postedDate.getFullYear(),
      postedDate.getMonth(),
      postedDate.getDate()
    );

    const utcToday = Date.UTC(
      today.getFullYear(),
      today.getMonth(),
      today.getDate()
    );

    const diffInDays = Math.floor(
      (utcToday - utcPosted) / (1000 * 60 * 60 * 24)
    );

    return Math.max(0, diffInDays);
  };

  const postedDaysAgo = job?.createdAt ? getDaysAgo(job.createdAt) : null;

  const postedLabel =
    postedDaysAgo === null
      ? "N/A"
      : postedDaysAgo === 0
        ? "Today"
        : postedDaysAgo === 1
          ? "1 day ago"
          : `${postedDaysAgo} days ago`;

  return (
    <section className="group relative w-full overflow-hidden rounded-[2rem] border border-slate-200 bg-white mt-2 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-orange-500/10 dark:border-white/10 dark:bg-[#111118] dark:hover:shadow-black/40">
      <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-orange-500/10 blur-3xl" />

      {/* Top Row */}
      <div className="relative flex items-center justify-between font-mont text-sm text-[#6b6658] dark:text-slate-400">
        <p>{postedLabel}</p>

        <Button
          variant="outline"
          size="icon"
          className="h-9 w-9 rounded-full border-slate-200 bg-white text-[#6b6658] transition hover:border-orange-300 hover:bg-orange-50 hover:text-orange-500 dark:border-white/10 dark:bg-[#181820] dark:text-slate-300 dark:hover:border-orange-400/40 dark:hover:bg-orange-500/10"
        >
          <Bookmark className="h-4 w-4" />
        </Button>
      </div>

      {/* Company Info */}
      <div className="relative mt-5 flex items-center gap-3">
        <Avatar className="h-12 w-12 shrink-0 border border-slate-200 bg-white shadow-sm dark:border-white/10 dark:bg-white/5">
          <AvatarImage
            src={job?.company?.logo || ""}
            className="object-cover"
          />
        </Avatar>

        <div className="min-w-0">
          <h1 className="truncate font-mont text-sm font-semibold text-[#393629] sm:text-base dark:text-white">
            {job?.company?.name}
          </h1>

          <p className="font-mont text-xs text-[#6b6658] sm:text-sm dark:text-slate-400">
            {job?.location}
          </p>
        </div>
      </div>

      {/* Job Info */}
      <div className="relative mt-5">
        <h1 className="line-clamp-1 font-unbounded text-lg font-semibold capitalize text-[#393629] dark:text-white">
          {job?.title}
        </h1>

        <p className="mt-3 line-clamp-2 font-mont text-sm leading-6 text-[#6b6658] dark:text-slate-400">
          {job?.description}
        </p>
      </div>

      {/* Badges */}
      <div className="relative mt-5 flex flex-wrap items-center gap-2">
        <Badge className="rounded-full border border-rose-500/20 bg-rose-500/10 px-3 py-1 font-mont text-xs font-medium text-rose-600 hover:bg-rose-500/10 dark:text-rose-300">
          {job?.position} Positions
        </Badge>

        <Badge className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 font-mont text-xs font-medium text-emerald-600 hover:bg-emerald-500/10 dark:text-emerald-300">
          {job?.jobType}
        </Badge>

        <Badge className="rounded-full border border-orange-500/20 bg-orange-500/10 px-3 py-1 font-mont text-xs font-medium text-orange-700 hover:bg-orange-500/10 dark:text-orange-300">
          {job?.salary} LPA
        </Badge>
      </div>

      {/* Actions */}
      <div className="relative mt-6 flex flex-col gap-3 font-mont sm:flex-row">
        <Button
          onClick={() => navigate(`/job-details/${job?._id}`)}
          className="w-full cursor-pointer rounded-full bg-[#393629] px-5 text-white transition hover:bg-[#c65d3b] sm:w-auto dark:bg-white dark:text-[#111118] dark:hover:bg-orange-300"
        >
          Details
        </Button>

        <Button
          variant="outline"
          className="w-full cursor-pointer rounded-full border-slate-200 bg-white px-5 text-[#393629] transition hover:border-orange-300 hover:bg-orange-50 hover:text-orange-600 sm:w-auto dark:border-white/10 dark:bg-[#181820] dark:text-white dark:hover:border-orange-400/40 dark:hover:bg-orange-500/10"
        >
          Save for later
        </Button>
      </div>
    </section>
  );
}
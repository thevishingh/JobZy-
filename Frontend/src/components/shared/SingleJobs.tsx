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
    <section className="w-full max-w-sm rounded-2xl border border-gray-200 bg-[#f4ecec] p-5 shadow-2xl transition hover:shadow-md">
      {/* Top Row */}
      <div className="flex items-center justify-between font-mont text-sm text-gray-500">
        <p>{postedLabel}</p>

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
            src={job?.company?.logo || ""}
            className="object-cover"
          />
        </Avatar>

        <div className="min-w-0">
          <h1 className="truncate font-mont text-sm font-semibold text-gray-900 sm:text-base">
            {job?.company?.name}
          </h1>

          <p className="font-unbounded text-xs text-gray-500 sm:text-sm">
            {job?.location}
          </p>
        </div>
      </div>

      {/* Job Info */}
      <div className="mt-4">
        <h1 className="font-inter text-lg font-semibold text-gray-900 capitalize">
          {job?.title}
        </h1>

        <p className="mt-2 line-clamp-2 font-inter text-sm text-gray-600">
          {job?.description}
        </p>
      </div>

      {/* Badges */}
      <div className="mt-4 flex flex-wrap items-center gap-2">
        <Badge className="rounded-full bg-red-100 px-3 py-1 font-inter text-xs font-medium text-red-600">
          {job?.position} Positions
        </Badge>

        <Badge className="rounded-full bg-emerald-100 px-3 py-1 font-inter text-xs font-medium text-emerald-600">
          {job?.jobType}
        </Badge>

        <Badge className="rounded-full bg-yellow-100 px-3 py-1 font-inter text-xs font-medium text-yellow-700">
          {job?.salary} LPA
        </Badge>
      </div>

      {/* Actions */}
      <div className="mt-4 flex items-center gap-4 font-mont">
        <Button
          onClick={() => navigate(`/job-details/${job?._id}`)}
          className="cursor-pointer"
        >
          Details
        </Button>

        <Button className="cursor-pointer">Save for later</Button>
      </div>
    </section>
  );
}
import { useParams } from "react-router-dom";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";
import {
  Briefcase,
  Building2,
  CalendarDays,
  IndianRupee,
  MapPin,
  Users,
  Clock,
  CheckCircle,
  ArrowUpRight,
  Sparkles,
  Layers3,
} from "lucide-react";
import React, { useEffect } from "react";
import axios from "axios";
import { APPLICATION_API_END_POINT, JOB_API_END_POINT } from "@/utils/constant";
import { setSingleJobs } from "@/redux/jobSlice";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/redux/store";
import { toast } from "sonner";

export default function JobsDetails() {

  const { id } = useParams();
  const dispatch = useDispatch();

  const { singleJob } = useSelector((store: RootState) => store.job);
  const { user } = useSelector((store: RootState) => store.auth);

  // const isApplied =
  //   singleJob?.applications?.some((application: any) => {
  //     const applicantId =
  //       typeof application.applicant === "object"
  //         ? application.applicant?._id
  //         : application.applicant;

  //     return applicantId?.toString() === user?._id;
  //   }) || false;

  // is user already applied for the job
  const isInitialApplied =
    singleJob?.applications?.some((application) => {
      const applicantId =
        typeof application.applicant === "object"
          ? application.applicant?._id
          : application.applicant;

      return applicantId?.toString() === user?._id?.toString();
    }) || false;
  const [isApplied, setisApplied] = React.useState(isInitialApplied);

  // get single job details
  useEffect(() => {
    const fetchSingleJobs = async () => {
      try {
        const response = await axios.get(`${JOB_API_END_POINT}/get/${id}`, {
          withCredentials: true,
        });

        if (response.data.success) {
          dispatch(setSingleJobs(response.data.job));
          setisApplied(
            response.data.job.applications?.some((application) => {
              const applicantId =
                typeof application.applicant === "object"
                  ? application.applicant?._id
                  : application.applicant;
              return applicantId?.toString() === user?._id?.toString();
            }) || false
          ); // set initial application status
        }

        console.log("applications:", response.data.job.applications);
        console.log("user id:", user?._id);
      } catch (error) {
        console.log(error);
      }
    };

    fetchSingleJobs();
  }, [id, dispatch, user?._id]);

  if (!singleJob) {
    return (
      <section className="relative min-h-screen overflow-hidden bg-transparent px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto flex min-h-[80vh] max-w-7xl items-center justify-center">
          <div className="rounded-[28px] border border-white/10 bg-white/5 px-8 py-10 text-center shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
            <div className="mx-auto mb-4 h-14 w-14 animate-pulse rounded-2xl bg-gradient-to-br from-fuchsia-500/20 to-cyan-500/20" />
            <p className="font-mont text-sm tracking-wide text-white/70">
              Loading job details...
            </p>
          </div>
        </div>
      </section>
    );
  }

  const totalOpenings = singleJob?.position || "N/A";
  const totalApplications = singleJob?.applications?.length || 0;

  // handling Apply jobs
  const applyJobhandler = async () => {
    try {

      const response = await axios.get(
        `${APPLICATION_API_END_POINT}/apply/${id}`,
        {
          withCredentials: true,
        }
      );

      if (response.data.success) {
        setisApplied(true); // update local state to reflect the application status
        const updatedSingleJob = {
          ...singleJob,
          applications: [...singleJob.applications, { applicant: user._id }],
        };
        toast.success("Applied successfully!");
        dispatch(setSingleJobs(updatedSingleJob)); // real time update ui 
      }

    } catch (error) {

      toast.error(
        "Failed to apply for the job. Please try again."
      );

    }
  };

  return (
    <>
    {/* hero */}
      
      {/* job details */}
      <section className="relative min-h-screen overflow-hidden bg-transparent px-4 py-22 sm:px-6 lg:px-8 lg:p-28">

        {/* Ambient blur orbs */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-[-80px] top-10 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
          <div className="absolute right-[-60px] top-24 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
          <div className="absolute bottom-10 left-1/3 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl space-y-6">
          {/* Hero Section */}
          <Card className="overflow-hidden rounded-[32px] border border-white/10 bg-[#0f1117]/70 text-white shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-[1.35fr_380px]">
                {/* Left */}
                <div className="p-6 sm:p-8 lg:p-10">
                  <div className="mb-5 flex flex-wrap items-center gap-2">
                    <Badge className="rounded-full border border-white/10 bg-white/10 px-3 py-1 font-mont text-xs font-medium text-white hover:bg-white/10">
                      {singleJob?.jobType}
                    </Badge>

                    <Badge className="rounded-full border border-fuchsia-400/20 bg-fuchsia-500/15 px-3 py-1 font-mont text-xs font-medium text-fuchsia-200 hover:bg-fuchsia-500/15">
                      <Sparkles className="mr-1 h-3.5 w-3.5" />
                      Urgent Hiring
                    </Badge>
                  </div>

                  <div className="space-y-4">
                    <h1 className="max-w-3xl font-unbounded text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                      {singleJob?.title}
                    </h1>

                    <div className="flex flex-wrap items-center gap-3 text-sm text-white/70">
                      <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 font-mont">
                        <Building2 className="h-4 w-4 text-cyan-300" />
                        {singleJob?.company?.name || "Company"}
                      </span>

                      <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 font-mont">
                        <MapPin className="h-4 w-4 text-fuchsia-300" />
                        {singleJob?.location}
                      </span>

                      <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 font-mont">
                        <Clock className="h-4 w-4 text-violet-300" />
                        {singleJob?.experience || "N/A"}
                      </span>
                    </div>

                    <p className="max-w-2xl font-mont text-sm leading-7 text-white/60 sm:text-[15px]">
                      A refined opportunity page with clear role expectations,
                      structured highlights, and a focused application experience.
                    </p>
                  </div>

                  <div className="mt-8 grid grid-cols-2 font-mont gap-3 sm:grid-cols-3 xl:grid-cols-5">
                    <StatCard
                      icon={IndianRupee}
                      label="Salary"
                      value={`${singleJob?.salary || "N/A"} LPA`}
                      iconClass="text-emerald-300"
                    />
                    <StatCard
                      icon={Users}
                      label="Total Openings"
                      value={`${totalOpenings}`}
                      iconClass="text-cyan-300"
                    />
                    <StatCard
                      icon={Layers3}
                      label="Applications"
                      value={`${totalApplications}`}
                      iconClass="text-fuchsia-300"
                    />
                    <StatCard
                      icon={Briefcase}
                      label="Job Type"
                      value={singleJob?.jobType || "N/A"}
                      iconClass="text-violet-300"
                    />
                    <StatCard
                      icon={CalendarDays}
                      label="Posted"
                      value={
                        singleJob?.createdAt
                          ? new Date(singleJob.createdAt).toLocaleDateString(
                            "en-GB",
                            {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                            }
                          )
                          : "N/A"
                      }
                      iconClass="text-amber-300"
                    />
                  </div>
                </div>

                {/* Right apply panel */}
                <div className="border-t border-white/10 bg-white/5 p-6 sm:p-8 lg:border-l lg:border-t-0">
                  <div className="space-y-5 lg:sticky lg:top-24">
                    <div className="rounded-[28px] border border-white/10 bg-[#141822]/80 p-5 shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl">
                      <p className="font-unbounded text-xs uppercase tracking-[0.2em] text-white/40">
                        Application Panel
                      </p>

                      <h2 className="mt-3 font-unbounded text-2xl font-bold text-white">
                        {isApplied ? "Already Applied" : "Apply for this position"}
                      </h2>

                      <p className="mt-2 font-mont text-sm leading-6 text-white/60">
                        Review the job details and submit your application to move
                        forward in the hiring process.
                      </p>

                      <Button
                        disabled={isApplied}
                        onClick={applyJobhandler}
                        className={`mt-5 h-12 w-full rounded-full border-0 font-unbounded text-sm font-medium transition ${isApplied
                          ? "cursor-not-allowed bg-emerald-300 text-black hover:bg-emerald-300"
                          : "bg-linear-to-r from-fuchsia-500 to-cyan-500 text-white hover:opacity-90"
                          }`}
                      >
                        {isApplied ? "Already Applied" : "Apply Now"}

                        {!isApplied && (
                          <ArrowUpRight className="ml-2 h-4 w-4" />
                        )}
                      </Button>
                    </div>

                    <div className="rounded-[28px] border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                      <p className="mb-4 font-unbounded text-sm font-semibold text-white">
                        Quick Snapshot
                      </p>

                      <div className="space-y-3">
                        <MiniInfo
                          label="Company"
                          value={singleJob?.company?.name || "Company"}
                        />
                        <MiniInfo
                          label="Location"
                          value={singleJob?.location || "N/A"}
                        />
                        <MiniInfo
                          label="Openings"
                          value={`${singleJob?.position || "N/A"}`}
                        />
                        <MiniInfo
                          label="Applications"
                          value={`${totalApplications}`}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Content area */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_360px]">
            {/* Left content */}
            <div className="space-y-6">
              <GlassSection title="Job Description">
                <p className="font-unbounded text-sm leading-7 text-white/70 sm:text-[15px]">
                  {singleJob?.description}
                </p>
              </GlassSection>

              <GlassSection title="Responsibilities">
                <ul className="space-y-3">
                  {(
                    singleJob?.responsibilities || [
                      "Build responsive user interfaces using React and Tailwind CSS.",
                      "Convert designs into reusable components.",
                      "Integrate REST APIs efficiently.",
                      "Improve performance and accessibility.",
                    ]
                  ).map((item: string, index: number) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 backdrop-blur-lg"
                    >
                      <div className="mt-0.5 rounded-full bg-emerald-500/15 p-1.5">
                        <CheckCircle className="h-4 w-4 shrink-0 text-emerald-300" />
                      </div>
                      <span className="font-unbounded text-sm leading-6 text-white/75">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </GlassSection>

              <GlassSection title="Required Skills">
                <div className="flex flex-wrap gap-2.5">
                  {(singleJob?.requirements || []).map((skill: string) => (
                    <Badge
                      key={skill}
                      className="rounded-full border border-cyan-400/15 bg-cyan-400/10 px-4 py-2 font-unbounded text-sm font-medium text-cyan-100 hover:bg-cyan-400/15"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </GlassSection>
            </div>

            {/* Right sidebar */}
            <div className="space-y-6">
              <GlassSidebarCard title="Job Overview">
                <div className="space-y-3">
                  <OverviewItem
                    icon={Briefcase}
                    label="Job Type"
                    value={singleJob?.jobType || "N/A"}
                    color="text-violet-300"
                  />
                  <OverviewItem
                    icon={IndianRupee}
                    label="Salary"
                    value={`${singleJob?.salary || "N/A"} LPA`}
                    color="text-emerald-300"
                  />
                  <OverviewItem
                    icon={Users}
                    label="Total Openings"
                    value={`${singleJob?.position || "N/A"} Openings`}
                    color="text-cyan-300"
                  />
                  <OverviewItem
                    icon={Layers3}
                    label="Applications"
                    value={`${totalApplications} Applied`}
                    color="text-fuchsia-300"
                  />
                  <OverviewItem
                    icon={Clock}
                    label="Experience"
                    value={singleJob?.experience || "N/A"}
                    color="text-amber-300"
                  />
                  <OverviewItem
                    icon={CalendarDays}
                    label="Posted On"
                    value={
                      singleJob?.createdAt
                        ? new Date(singleJob.createdAt).toLocaleDateString(
                          "en-GB",
                          {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          }
                        )
                        : "N/A"
                    }
                    color="text-rose-300"
                  />
                </div>
              </GlassSidebarCard>

              <GlassSidebarCard title="Company Info">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 font-unbounded items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-cyan-300 backdrop-blur-lg">
                    <Building2 className="h-7 w-7" />
                  </div>

                  <div>
                    <h3 className="font-unbounded text-base font-semibold text-white">
                      {singleJob?.company?.name || "Company"}
                    </h3>
                    <p className="font-mont text-sm text-white/50">
                      Software Company
                    </p>
                  </div>
                </div>

                <Separator className="my-5 bg-white/10" />

                <p className="font-mont text-sm leading-7 text-white/65">
                  A modern hiring platform helping candidates find better
                  opportunities and companies hire the right talent faster.
                </p>

                <Button
                  variant="outline"
                  className="mt-5 h-11 w-full rounded-full border-white/15 bg-white/5 font-unbounded text-white hover:bg-white/10 hover:text-white"
                >
                  View Company
                </Button>
              </GlassSidebarCard>

              <Card className="overflow-hidden rounded-[28px] border border-white/10 bg-[#0f1117]/80 text-white shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
                <CardContent className="relative p-6">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.16),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(34,211,238,0.12),transparent_30%)]" />

                  <div className="relative">
                    <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1">
                      <p className="font-unbounded text-[11px] uppercase tracking-[0.2em] text-white/55">
                        Career Move
                      </p>
                    </div>

                    <h3 className="mt-4 font-unbounded text-2xl font-semibold leading-tight text-white">
                      Ready to apply?
                    </h3>

                    <p className="mt-3 max-w-xs font-mont text-sm leading-6 text-white/65">
                      Submit your application and take the next step toward your next role.
                    </p>

                    <div className="mt-6 flex items-center gap-3">
                      <Button className="h-11 rounded-full bg-white px-5 font-unbounded text-sm font-medium text-black hover:bg-white/90">
                        Apply Now
                      </Button>

                      <Button
                        variant="outline"
                        className="h-11 font-unbounded rounded-full border-white/15 bg-white/5 px-5 text-sm text-white hover:bg-white/10 hover:text-white"
                      >
                        Save Job
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function StatCard({
  icon: Icon,
  label,
  value,
  iconClass,
}: {
  icon: any;
  label: string;
  value: string;
  iconClass?: string;
}) {
  return (
    <div className="rounded-[24px] border border-white/10 bg-white/5 p-4 shadow-[0_6px_30px_rgba(0,0,0,0.2)] backdrop-blur-xl">
      <div
        className={`mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 ${iconClass}`}
      >
        <Icon className="h-4 w-4" />
      </div>
      <p className="font-mont text-xs uppercase tracking-[0.14em] text-white/40">
        {label}
      </p>
      <p className="mt-1 font-unbounded text-sm font-semibold text-white">
        {value}
      </p>
    </div>
  );
}

function MiniInfo({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-[#161a24]/70 px-4 py-3">
      <p className="font-unbounded text-sm text-lime-500/50">{label}</p>
      <p className="font-unbounded text-sm font-semibold text-white">{value}</p>
    </div>
  );
}

function GlassSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Card className="rounded-[30px] border border-white/10 bg-[#0f1117]/70 text-white shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
      <CardHeader className="pb-3">
        <CardTitle className="font-unbounded text-xl text-white">{title}</CardTitle>
      </CardHeader>
      <CardContent className="font-mont">{children}</CardContent>
    </Card>
  );
}

function GlassSidebarCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Card className="rounded-[30px] border border-white/10 bg-[#0f1117]/70 text-white shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
      <CardHeader className="pb-3">
        <CardTitle className="font-mont text-xl text-white">{title}</CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}

function OverviewItem({
  icon: Icon,
  label,
  value,
  color,
}: {
  icon: any;
  label: string;
  value: string;
  color?: string;
}) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-lg">
      <div
        className={`flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 ${color}`}
      >
        <Icon className="h-5 w-5" />
      </div>

      <div>
        <p className="font-mont text-xs uppercase tracking-[0.14em] text-white/40">
          {label}
        </p>
        <h4 className="font-mont text-sm font-semibold text-white">{value}</h4>
      </div>
    </div>
  );
}
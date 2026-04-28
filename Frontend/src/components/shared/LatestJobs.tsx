import React from "react"
import LatestJobsCards from "./LatestJobsCards"

const jobs = [
  {
    title: "Frontend Developer",
    company: "TechNova Solutions",
    location: "Pune, Maharashtra",
    jobType: "Full Time",
    positions: "2 Positions",
    salary: "6-8 LPA",
    description: "React, TypeScript, Tailwind CSS, and modern UI development.",
  },
  {
    title: "Backend Developer",
    company: "CodeCraft Labs",
    location: "Bangalore, Karnataka",
    jobType: "Full Time",
    positions: "3 Positions",
    salary: "7-10 LPA",
    description: "Node.js, Express, MongoDB, and API development.",
  },
  {
    title: "UI/UX Designer",
    company: "Pixel Studio",
    location: "Mumbai, Maharashtra",
    jobType: "Remote",
    positions: "1 Position",
    salary: "5-7 LPA",
    description: "Figma, wireframing, prototyping, and design systems.",
  },
  {
    title: "DevOps Engineer",
    company: "CloudSphere",
    location: "Hyderabad, Telangana",
    jobType: "Full Time",
    positions: "2 Positions",
    salary: "8-12 LPA",
    description: "AWS, Docker, CI/CD pipelines, and server deployment.",
  },
  {
    title: "Digital Marketing",
    company: "GrowthX Media",
    location: "Delhi, India",
    jobType: "Part Time",
    positions: "2 Positions",
    salary: "4-6 LPA",
    description: "SEO, Google Ads, content marketing, and campaigns.",
  },
  {
    title: "Full Stack Developer",
    company: "NextWave Tech",
    location: "Remote",
    jobType: "Remote",
    positions: "4 Positions",
    salary: "9-14 LPA",
    description: "MERN stack, Next.js, authentication, and deployment.",
  },
]

export default function LatestJobs() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {jobs.slice(0, 6).map((job, index) => (
          <LatestJobsCards key={index} job={job} />
        ))}
      </div>
    </section>
  )
}
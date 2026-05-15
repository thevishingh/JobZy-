import { Search } from "lucide-react"
import { Link } from "react-router-dom"
import SingleJobs from "./singleJobs"

export default function BrowseJobs() {
  const randomJobs = [1, 2, 3, 4,5,6,7,8,9]

  return (
    <section className="w-full bg-top py-10 px-4 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="flex flex-col items-center justify-center text-center">

          <h1 className="mb-8 max-w-6xl text-center font-unbounded text-4xl leading-none font-semibold tracking-tight text-gray-900 md:text-7xl">
            Discover jobs that match your skills, goals, and future
          </h1>
        </div>
      </div>
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mont text-sm font-medium text-red-600">
              Browse Jobs
            </p>

            <h1 className="font-mont text-base font-bold text-gray-900 sm:text-3xl">
              Search Results ({randomJobs.length})
            </h1>
          </div>

          <p className="font-mont text-sm text-gray-500">
            Showing latest matched opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {randomJobs.map((job) => (
            <SingleJobs key={job} />
          ))}
        </div>
      </div>
    </section>
  )
}

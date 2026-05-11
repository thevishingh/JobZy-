import React from "react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { SlidersHorizontal } from "lucide-react"

// data
const filterData = [
  {
    filterType: "Location",
    options: ["Pune", "Mumbai", "Bangalore", "Delhi", "Hyderabad"],
  },
  {
    filterType: "Industry",
    options: ["IT", "Finance", "Healthcare", "Education", "E-commerce"],
  },
  {
    filterType: "Salary",
    options: ["0-3 LPA", "3-6 LPA", "6-10 LPA", "10-20 LPA", "20+ LPA"],
  },
]

export default function FilterCards() {
  return (
    <section className="w-full">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-500">
          <SlidersHorizontal className="h-5 w-5" />
        </div>

        <div>
          <h1 className="font-mont text-lg font-semibold text-[#393629] dark:text-white">
            Filter Jobs
          </h1>
          <p className="mt-1 font-mont text-xs text-[#6b6658] dark:text-slate-400">
            Refine opportunities
          </p>
        </div>
      </div>

      <div className="mt-5 h-px w-full bg-slate-200 dark:bg-white/10" />

      <div className="mt-6 space-y-6">
        {filterData.map((filter) => (
          <div
            key={filter.filterType}
            className="rounded-2xl border border-slate-200 bg-[#fbf7ef] p-4 dark:border-white/10 dark:bg-[#050509]"
          >
            <h2 className="mb-4 font-mont text-xs font-bold uppercase tracking-[0.18em] text-orange-600 dark:text-orange-300">
              {filter.filterType}
            </h2>

            <RadioGroup defaultValue={filter.options[0]} className="space-y-2">
              {filter.options.map((option) => (
                <div
                  key={option}
                  className="group flex items-center space-x-3 rounded-xl px-3 py-2 transition hover:bg-white dark:hover:bg-white/6"
                >
                  <RadioGroupItem
                    value={option}
                    id={`${filter.filterType}-${option}`}
                    className="border-slate-400 text-orange-500 data-[state=checked]:border-orange-500 data-[state=checked]:bg-orange-500 dark:border-slate-600"
                  />

                  <Label
                    htmlFor={`${filter.filterType}-${option}`}
                    className="cursor-pointer font-mont text-sm font-medium text-[#393629] transition group-hover:text-orange-600 dark:text-slate-300 dark:group-hover:text-orange-300"
                  >
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        ))}
      </div>
    </section>
  )
}
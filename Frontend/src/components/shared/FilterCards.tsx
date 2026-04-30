import React from "react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

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
    <section className="">
      <div>
        <h1 className="font-unbounded text-lg font-semibold text-gray-900">
          Filter Jobs
        </h1>
        <hr className="mt-3 border-gray-900" />
      </div>

      <div className="mt-5 space-y-6">
        {filterData.map((filter) => (
          <div key={filter.filterType}>
            <h2 className="mb-3 font-mont text-sm font-semibold text-gray-800 uppercase">
              {filter.filterType}
            </h2>

            <RadioGroup defaultValue={filter.options[0]} className="space-y-2">
              {filter.options.map((option) => (
                <div key={option} className="flex items-center space-x-2">
                  <RadioGroupItem
                    value={option}
                    id={`${filter.filterType}-${option}`}
                    className="border-gray-400 data-[state=checked]:border-black data-[state=checked]:bg-black"
                  />
                  <Label htmlFor={`${filter.filterType}-${option}`}>
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

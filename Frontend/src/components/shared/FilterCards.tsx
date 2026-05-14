import {
  SlidersHorizontal,
  MapPin,
  BriefcaseBusiness,
  IndianRupee,
  Clock,
  Layers,
  Code2,
  Building2,
  Laptop2,
  GraduationCap,
  BadgeCheck,
  CalendarDays,
  Gift,
  Users,
} from "lucide-react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

const filterData = [
  {
    filterType: "Location",
    icon: MapPin,
    options: [
      "Pune",
      "Mumbai",
      "Bangalore",
      "Delhi",
      "Hyderabad",
      "Chennai",
      "Noida",
      "Gurgaon",
      "Kolkata",
      "Ahmedabad",
      "Remote",
      "Work From Office",
    ],
  },

  {
    filterType: "Industry",
    icon: BriefcaseBusiness,
    options: [
      "IT",
      "Finance",
      "Healthcare",
      "Education",
      "E-commerce",
      "Design",
      "Marketing",
      "Real Estate",
      "Automobile",
      "Gaming",
      "Cyber Security",
      "AI & ML",
    ],
  },

  {
    filterType: "Salary",
    icon: IndianRupee,
    options: [
      "0-3 LPA",
      "3-6 LPA",
      "6-10 LPA",
      "10-20 LPA",
      "20-30 LPA",
      "30+ LPA",
    ],
  },

  {
    filterType: "Job Type",
    icon: Layers,
    options: [
      "full-time",
      "part-time",
      "contract",
      "internship",
      "remote",
      "hybrid",
      "freelance",
    ],
  },

  {
    filterType: "Experience",
    icon: Clock,
    options: [
      "Fresher",
      "0-1 Year",
      "1-2 Years",
      "2-4 Years",
      "4-6 Years",
      "6-8 Years",
      "8+ Years",
    ],
  },

  {
    filterType: "Skills",
    icon: Code2,
    options: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Tailwind CSS",
      "Redux Toolkit",
      "AWS",
      "Docker",
      "Kubernetes",
      "Java",
    ],
  },

  {
    filterType: "Company",
    icon: Building2,
    options: [
      "TCS",
      "Infosys",
      "Wipro",
      "Tech Mahindra",
      "Accenture",
      "Capgemini",
      "Cognizant",
      "HCL",
      "Zoho",
      "Startup",
    ],
  },

  {
    filterType: "Work Mode",
    icon: Laptop2,
    options: ["Remote", "Hybrid", "On-site", "Flexible"],
  },

  {
    filterType: "Education",
    icon: GraduationCap,
    options: [
      "B.Tech / B.E.",
      "M.Tech",
      "BCA",
      "MCA",
      "Bachelor's Degree",
      "Master's Degree",
      "Diploma",
    ],
  },

  {
    filterType: "Seniority",
    icon: BadgeCheck,
    options: ["Intern", "Junior", "Mid-Level", "Senior", "Lead", "Manager"],
  },

  {
    filterType: "Date Posted",
    icon: CalendarDays,
    options: [
      "Last 24 Hours",
      "Last 3 Days",
      "Last 7 Days",
      "Last 14 Days",
      "Last 30 Days",
    ],
  },

  {
    filterType: "Benefits",
    icon: Gift,
    options: [
      "Health Insurance",
      "Paid Leave",
      "Flexible Hours",
      "WFH Allowance",
      "Stock Options",
      "Free Meals",
      "Learning Budget",
    ],
  },

  {
    filterType: "Team Size",
    icon: Users,
    options: [
      "1-10 Employees",
      "11-50 Employees",
      "51-200 Employees",
      "201-500 Employees",
      "500+ Employees",
    ],
  },
]

export default function FilterCards() {
  return (
    <section className="scrollbar-thin scrollbar-track-transparent scrollbar-thumb-orange-400/40 hover:scrollbar-thumb-orange-400 h-[72vh] overflow-y-auto rounded-[1.5rem] border border-slate-200 bg-[#fbf7ef] p-4 dark:border-white/10 dark:bg-[#050509]">
      <div className="mb-4 flex items-center gap-2 border-b border-slate-200 pb-3 dark:border-white/10">
        <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500">
          <SlidersHorizontal className="h-4 w-4" />
        </div>

        <div>
          <h1 className="font-unbounded text-sm font-semibold text-[#393629] dark:text-white">
            Filters
          </h1>

          <p className="font-mont text-[11px] text-[#6b6658] dark:text-slate-400">
            Refine jobs quickly
          </p>
        </div>
      </div>

      <Accordion type="multiple" className="space-y-2">
        {filterData.map((filter) => {
          const Icon = filter.icon

          return (
            <AccordionItem
              key={filter.filterType}
              value={filter.filterType}
              className="rounded-2xl border border-slate-200 bg-white px-3 dark:border-white/10 dark:bg-[#111118]"
            >
              <AccordionTrigger className="cursor-pointer py-3 hover:no-underline">
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-orange-500/10 text-orange-500">
                    <Icon className="h-3.5 w-3.5" />
                  </div>

                  <span className="font-unbounded text-xs font-semibold text-[#393629] capitalize dark:text-white">
                    {filter.filterType}
                  </span>
                </div>
              </AccordionTrigger>

              <AccordionContent className="pb-3">
                <RadioGroup
                  defaultValue={filter.options[0]}
                  className="space-y-1"
                >
                  {filter.options.map((option) => (
                    <div
                      key={option}
                      className="group flex items-center gap-2 rounded-lg px-2 py-1.5 transition hover:bg-[#fbf7ef] dark:hover:bg-white/5"
                    >
                      <RadioGroupItem
                        value={option}
                        id={`${filter.filterType}-${option}`}
                        className="h-3.5 w-3.5 border-slate-400 text-orange-500 data-[state=checked]:border-orange-500 data-[state=checked]:bg-orange-500 dark:border-slate-600"
                      />

                      <Label
                        htmlFor={`${filter.filterType}-${option}`}
                        className="cursor-pointer font-unbounded text-xs font-medium text-[#393629] dark:text-slate-300"
                      >
                        {option}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </AccordionContent>
            </AccordionItem>
          )
        })}
      </Accordion>
    </section>
  )
}

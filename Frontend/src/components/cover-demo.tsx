import React from "react"
import { Cover } from "@/components/ui/cover"

export default function CoverDemo() {
  return (
    <div>
      <h1 className="foext relative z-20 mx-auto mt-6 max-w-7xl bg-linear-to-r from-red-500 via-orange-800 to-yellow-200 bg-clip-text text-center font-unbounded text-4xl font-semibold text-transparent md:text-4xl lg:text-6xl">
        Build your career with <Cover>confidence</Cover>
      </h1>
      <p className="mx-auto mt-4 max-w-xl text-center text-sm leading-6 text-black sm:text-base md:max-w-7xl md:text-xl font-mont capitalize font-medium">
        Discover opportunities that match your skills and connect with companies
        that value your talent all in one place.
      </p>
    </div>
  )
}

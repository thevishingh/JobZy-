"use client"

import { cn } from "@/lib/utils"
import { CanvasText } from "@/components/ui/canvas-text"

export default function CanvasTextDemo() {
  return (
    <div className="px-4 py-8 sm:px-6 lg:px-8">
      <h2
        className={cn(
          "mx-auto max-w-7xl font-unbounded whitespace-nowrap text-center text-2xl font-bold tracking-tight text-neutral-700 sm:text-4xl md:text-5xl lg:text-6xl dark:text-neutral-700"
        )}
      >
        Explore Latest & Top{" "}
        <CanvasText
          text="Job Openings"
          backgroundClassName="bg-green-500 dark:bg-green-600"
          colors={[
            "rgba(34, 197, 94, 1)",
            "rgba(34, 197, 94, 0.9)",
            "rgba(34, 197, 94, 0.8)",
            "rgba(34, 197, 94, 0.7)",
            "rgba(34, 197, 94, 0.6)",
            "rgba(34, 197, 94, 0.5)",
            "rgba(34, 197, 94, 0.4)",
            "rgba(34, 197, 94, 0.3)",
            "rgba(34, 197, 94, 0.2)",
            "rgba(34, 197, 94, 0.1)",
          ]}
          lineGap={4}
          animationDuration={20}
        />
      </h2>
    </div>
  )
}
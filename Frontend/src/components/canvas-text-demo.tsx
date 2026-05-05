"use client"

import { cn } from "@/lib/utils"
import { CanvasText } from "@/components/ui/canvas-text"

export default function CanvasTextDemo() {
  return (
    <div className="w-full overflow-hidden px-4 py-8 sm:px-6 lg:px-8">
      <h2
        className={cn(
          "mx-auto max-w-7xl text-center font-unbounded text-3xl font-bold tracking-tight text-neutral-700 sm:text-4xl md:text-5xl lg:text-6xl dark:text-neutral-700"
        )}
      >
        <span className="block">Explore Latest & Top</span>

        <span className="mt-2 block break-words">
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
        </span>
      </h2>
    </div>
  )
}
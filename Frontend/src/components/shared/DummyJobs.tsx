import DummyJobCard from "./DummyJobCard"
import { dummyJobs } from "@/data/dummyJobs"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function DummyJobs() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent className="-ml-2">
        {dummyJobs.slice(0, 6).map((job) => (
          <CarouselItem
            key={job.id}
            className="pl-4 md:basis-1/2 lg:basis-[38%] xl:basis-1/3"
          >
            <DummyJobCard job={job} />
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className="mt-8 flex items-center justify-center gap-4">
        <CarouselPrevious className="static cursor-pointer translate-y-0" />
        <CarouselNext className="static cursor-pointer translate-y-0" />
      </div>
    </Carousel>
  )
}

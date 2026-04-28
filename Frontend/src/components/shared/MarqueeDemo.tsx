import { cn } from "@/lib/utils"
import { Marquee } from "@/components/ui/marquee"

const reviews = [
  {
    name: "Rahul Sharma",
    username: "@rahuldev",
    body: "JobZy helped me discover relevant frontend jobs and get interview calls faster than usual.",
    img: "https://avatar.vercel.sh/rahul",
  },
  {
    name: "Priya Mehta",
    username: "@priyahr",
    body: "As a recruiter, JobZy makes it easier to find skilled candidates and manage hiring efficiently.",
    img: "https://avatar.vercel.sh/priya",
  },
  {
    name: "Arjun Patel",
    username: "@arjunfullstack",
    body: "The job listings feel clean, verified, and matched with my skills. The experience is very smooth.",
    img: "https://avatar.vercel.sh/arjun",
  },
  {
    name: "Sneha Kapoor",
    username: "@sneharecruits",
    body: "JobZy helped our team connect with quality applicants and close positions much faster.",
    img: "https://avatar.vercel.sh/sneha",
  },
  {
    name: "Vikram Singh",
    username: "@vikramcodes",
    body: "I found better opportunities with clear salary, role, and company details. Very useful for job seekers.",
    img: "https://avatar.vercel.sh/vikram",
  },
  {
    name: "Neha Joshi",
    username: "@nehamarketing",
    body: "JobZy feels modern, professional, and simple. It makes job search less confusing and more focused.",
    img: "https://avatar.vercel.sh/neha",
  },
]

const firstRow = reviews.slice(0, reviews.length / 2)
// const secondRow = reviews.slice(reviews.length / 2)

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string
  name: string
  username: string
  body: string
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/10 bg-gray-950/1 hover:bg-gray-950/5",
        // dark styles
        "dark:border-gray-500/10 dark:bg-gray-500/10 dark:hover:bg-gray-500/15"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-black font-mont ">
            {name}
          </figcaption>
          <p className="text-xs font-medium font-inter text-black ">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm font-mont">{body}</blockquote>
    </figure>
  )
}

export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l from-background"></div> */}
    </div>
  )
}

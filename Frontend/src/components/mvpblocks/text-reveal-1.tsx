import { TextReveal } from "@/components/ui/text-reveal"
import { cn } from "@/lib/utils"

export default function TextRevealLetters() {
  return (
    <TextReveal
      className={cn(
        "from-foreground bg-clip-text font-unbounded text-5xl text-black"
      )}
      from="bottom"
      split="letter"
    >
      Success is not final, failure is not fatal it is the courage to continue
      that counts
    </TextReveal>
  )
}

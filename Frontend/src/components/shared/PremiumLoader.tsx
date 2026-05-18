export default function PremiumLoader() {
  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <div className="flex items-center justify-center gap-3 rounded-2xl border border-border bg-background px-6 py-5 shadow-2xl">
        <div className="h-5 w-5 animate-bounce rounded-full bg-gradient-to-r from-red-500 to-orange-500 shadow-[0_0_15px_rgba(239,68,68,0.8)]"></div>

        <div className="h-5 w-5 animate-bounce rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 shadow-[0_0_15px_rgba(251,191,36,0.8)] [animation-delay:0.15s]"></div>

        <div className="h-5 w-5 animate-bounce rounded-full bg-gradient-to-r from-red-500 to-pink-500 shadow-[0_0_15px_rgba(236,72,153,0.8)] [animation-delay:0.3s]"></div>

        <span className="ml-2 text-sm font-medium text-muted-foreground">
          Loading...
        </span>
      </div>
    </div>
  )
}

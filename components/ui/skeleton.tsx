import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-muted", className)}
      {...props}
    />
  )
}

export { Skeleton }

// Preset skeleton components for common use cases
export function CardSkeleton() {
  return (
    <div className="rounded-2xl bg-card shadow-sm overflow-hidden border border-slate-100">
      <Skeleton className="w-full h-60" />
      <div className="p-5 space-y-3">
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
      </div>
    </div>
  )
}

export function HeroSkeleton() {
  return (
    <div className="w-full h-[80vh] min-h-[600px] max-h-[900px] bg-muted animate-pulse" />
  )
}

export function TestimonialSkeleton() {
  return (
    <div className="flex-shrink-0 w-[350px] rounded-2xl border bg-card p-6 shadow-sm">
      <div className="flex items-center gap-3 mb-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2 flex-1">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-3 w-20" />
        </div>
      </div>
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-3/4" />
    </div>
  )
}

export function BlogSkeleton() {
  return (
    <div className="rounded-2xl bg-card shadow-sm overflow-hidden border border-slate-100">
      <Skeleton className="w-full h-48" />
      <div className="p-6 space-y-3">
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-4/5" />
        <Skeleton className="h-4 w-24 mt-4" />
      </div>
    </div>
  )
}

import { cn } from "@/lib/utils"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

export interface TestimonialAuthor {
  name: string
  handle?: string
  avatar: string
}

export interface TestimonialCardProps {
  author: TestimonialAuthor
  text: string
  href?: string
  className?: string
}

export function TestimonialCard({ author, text, href, className }: TestimonialCardProps) {
  const Card: any = href ? "a" : "div"

  return (
    <Card
      {...(href ? { href, target: "_blank", rel: "noreferrer" } : {})}
      className={cn(
        "flex flex-col rounded-lg border-t",
        "bg-gradient-to-b from-muted/50 to-muted/10",
        "p-4 sm:p-6 text-start",
        "hover:from-muted/60 hover:to-muted/20",
        "w-[280px] sm:w-[320px] flex-shrink-0",
        "transition-colors duration-300",
        "touch-manipulation", // Better touch handling on mobile
        className,
      )}
    >
      <div className="flex items-center gap-3">
        <Avatar className="h-10 w-10 sm:h-12 sm:w-12 flex-shrink-0">
          <AvatarImage src={author.avatar || "/placeholder.svg"} alt={author.name} />
        </Avatar>
        <div className="flex flex-col items-start min-w-0 flex-1">
          <h3 className="text-sm sm:text-md font-semibold leading-none truncate w-full">{author.name}</h3>
          {/* 5-star rating */}
          <div className="flex items-center gap-0.5 mt-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-2.5 w-2.5 sm:h-3 sm:w-3 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
        </div>
      </div>
      <p className="mt-3 sm:mt-4 text-sm sm:text-md text-muted-foreground leading-relaxed line-clamp-4">{text}</p>
    </Card>
  )
}

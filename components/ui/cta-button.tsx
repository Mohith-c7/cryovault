import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface CTAButtonProps {
  href: string
  children: React.ReactNode
  variant?: "primary" | "secondary"
  className?: string
}

export function CTAButton({ href, children, variant = "primary", className = "" }: CTAButtonProps) {
  const baseStyles = "group inline-flex items-center gap-2 rounded-full px-8 py-4 font-bold shadow-lg transition-all duration-300"
  
  const variantStyles = {
    primary: "bg-primary text-white hover:shadow-xl",
    secondary: "bg-gradient-to-r from-white to-gray-100 text-gray-900 border-2 border-gray-200 hover:border-gray-300 hover:shadow-xl"
  }

  return (
    <Link
      href={href}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
      <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  )
}

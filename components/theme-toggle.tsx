'use client'

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="h-9 w-9 rounded-full bg-muted animate-pulse" />
    )
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="group relative h-9 w-9 rounded-full bg-muted hover:bg-muted/80 transition-all duration-300 flex items-center justify-center overflow-hidden"
      aria-label="Toggle theme"
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all duration-500 dark:-rotate-90 dark:scale-0 text-amber-500" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all duration-500 dark:rotate-0 dark:scale-100 text-blue-500" />
      
      {/* Ripple effect on click */}
      <span className="absolute inset-0 rounded-full bg-primary/20 scale-0 group-active:scale-100 transition-transform duration-300" />
    </button>
  )
}

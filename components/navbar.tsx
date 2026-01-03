'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState, useRef, useEffect } from "react"
import { ChevronDown } from "lucide-react"

export function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = (menuLabel: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setOpenMenu(menuLabel)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenMenu(null)
    }, 150) // 150ms delay before closing
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const menuItems = [
    {
      label: "Who we are",
      items: [
        { label: "About Us", href: "/about" },
        { label: "Accreditations", href: "/accreditations" },
        { label: "Leadership", href: "/leadership" },
      ],
    },
    {
      label: "What we offer",
      items: [
        { label: "Stem Cell banking", href: "/stem-cell-banking" },
        { label: "Plans & pricing", href: "/pricing" },
        { label: "Appointment", href: "/appointment" },
        { label: "Information Kit", href: "/information-kit" },
      ],
    },
    {
      label: "Insights",
      items: [
        { label: "Blogs", href: "/blogs" },
        { label: "Pregnancy Diet Chart", href: "/pregnancy-diet" },
        { label: "Immunization Chart", href: "/immunization-chart" },
      ],
    },
    {
      label: "Media",
      items: [
        { label: "Images", href: "/gallery" },
        { label: "Videos", href: "/videos" },
      ],
    },
    {
      label: "Work with us",
      items: [
        { label: "Careers", href: "/careers" },
        { label: "Franchise", href: "/franchise" },
      ],
    },
  ]

  return (
    <header className="w-full sticky top-0 z-[99999] bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
      <nav className="mx-auto max-w-7xl px-4 md:px-6" aria-label="Primary">
        <div className="flex items-center justify-between" style={{ height: "84px" }}>
          {/* Left: Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2" aria-label="CryoVault home">
              <img
                src="/logo-cryovault.jpg"
                alt="CryoVault Logo"
                className="h-[60px] w-auto"
                width="216"
                height="60"
              />
            </Link>
          </div>

          {/* Center: Menu */}
          <div className="flex items-center gap-1">
            {menuItems.map((menu) => (
              <div
                key={menu.label}
                className="relative"
                onMouseEnter={() => handleMouseEnter(menu.label)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`
                    relative inline-flex items-center gap-1 px-4 py-2 text-sm font-semibold
                    transition-colors duration-200
                    ${openMenu === menu.label ? 'text-primary' : 'text-foreground hover:text-primary'}
                    after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-primary
                    after:transition-all after:duration-200
                    ${openMenu === menu.label ? 'after:w-full' : 'hover:after:w-full'}
                  `}
                >
                  {menu.label}
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${openMenu === menu.label ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown Menu */}
                {openMenu === menu.label && (
                  <div className="absolute left-0 top-full pt-2 z-[99999]">
                    <div className="w-56 bg-background border border-border rounded-lg shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
                      <ul className="py-2">
                        {menu.items.map((item) => (
                          <li key={item.label}>
                            <Link
                              href={item.href}
                              className="block px-4 py-2.5 text-sm font-medium text-foreground hover:text-primary hover:bg-muted/50 transition-colors"
                              onClick={() => setOpenMenu(null)}
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Contact Link (no dropdown) */}
            <Link
              href="/contact"
              className="
                relative inline-flex items-center px-4 py-2 text-sm font-semibold
                text-foreground hover:text-primary transition-colors duration-200
                after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-primary
                hover:after:w-full after:transition-all after:duration-200
              "
            >
              Contact
            </Link>
          </div>

          {/* Right: Login */}
          <div className="flex items-center justify-end gap-3">
            <Button
              variant="default"
              asChild
              className="bg-primary text-primary-foreground hover:opacity-90 font-semibold leading-7 py-6 px-8 hover-lift"
            >
              <Link href="/login">Login</Link>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  )
}

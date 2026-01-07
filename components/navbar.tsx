'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState, useRef, useEffect } from "react"
import { ChevronDown, Menu, X } from "lucide-react"

export function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
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

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
    setOpenMenu(null)
  }

  const toggleMobileSubmenu = (menuLabel: string) => {
    setOpenMenu(openMenu === menuLabel ? null : menuLabel)
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuOpen && !(event.target as Element).closest('nav')) {
        setMobileMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [mobileMenuOpen])

  const menuItems = [
    {
      label: "Who we are",
      items: [
        { label: "About Us", href: "/about" },
        { label: "Accreditations", href: "/accreditations" },
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
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8" aria-label="Primary">
        <div className="flex items-center justify-between h-16 sm:h-20 md:h-[84px]">
          {/* Left: Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link href="/" className="flex items-center gap-2" aria-label="CryoVault home">
              <img
                src="/logo-cryovault.png"
                alt="CryoVault Logo"
                className="h-10 sm:h-12 md:h-[60px] w-auto"
                width="216"
                height="60"
              />
            </Link>
          </div>

          {/* Desktop Menu - Hidden on mobile */}
          <div className="hidden lg:flex items-center gap-1">
            {menuItems.map((menu) => (
              <div
                key={menu.label}
                className="relative"
                onMouseEnter={() => handleMouseEnter(menu.label)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`
                    relative inline-flex items-center gap-1 px-3 xl:px-4 py-2 text-sm font-semibold
                    transition-colors duration-200
                    ${openMenu === menu.label ? 'text-primary' : 'text-foreground hover:text-primary'}
                    after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-primary
                    after:transition-all after:duration-200
                    ${openMenu === menu.label ? 'after:w-full' : 'hover:after:w-full'}
                  `}
                >
                  <span className="truncate">{menu.label}</span>
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 flex-shrink-0 ${openMenu === menu.label ? 'rotate-180' : ''}`} />
                </button>

                {/* Desktop Dropdown Menu */}
                {openMenu === menu.label && (
                  <div className="absolute left-0 top-full pt-2 z-[99999]">
                    <div className="w-56 bg-background border border-border rounded-lg shadow-xl animate-in fade-in slide-in-from-top-2 duration-200 overflow-hidden">
                      <ul className="py-1">
                        {menu.items.map((item) => (
                          <li key={item.label} className="mx-1">
                            <Link
                              href={item.href}
                              className="block px-3 py-2.5 text-sm font-medium text-foreground hover:text-primary hover:bg-muted/50 transition-colors rounded-md"
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

            {/* Desktop Contact Link */}
            <Link
              href="/contact"
              className="
                relative inline-flex items-center px-3 xl:px-4 py-2 text-sm font-semibold
                text-foreground hover:text-primary transition-colors duration-200
                after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-primary
                hover:after:w-full after:transition-all after:duration-200
              "
            >
              Contact
            </Link>
          </div>

          {/* Right: Login + Mobile Menu Button */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Login Button - Responsive */}
            <Button
              variant="default"
              asChild
              className="bg-primary text-primary-foreground hover:opacity-90 font-semibold py-2 px-3 sm:py-3 sm:px-4 md:py-6 md:px-8 text-xs sm:text-sm md:text-base hover-lift"
            >
              <Link href="/login">Login</Link>
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-foreground hover:text-primary hover:bg-muted/50 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute left-0 right-0 top-full bg-background border-b border-border shadow-lg max-h-[calc(100vh-4rem)] overflow-y-auto">
            <div className="px-4 py-4 space-y-2">
              {menuItems.map((menu) => (
                <div key={menu.label} className="space-y-2">
                  <button
                    onClick={() => toggleMobileSubmenu(menu.label)}
                    className={`
                      w-full flex items-center justify-between px-3 py-3 text-left font-semibold rounded-lg transition-colors
                      ${openMenu === menu.label ? 'text-primary bg-primary/10' : 'text-foreground hover:text-primary hover:bg-muted/50'}
                    `}
                  >
                    <span>{menu.label}</span>
                    <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${openMenu === menu.label ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {/* Mobile Submenu */}
                  {openMenu === menu.label && (
                    <div className="pl-4 space-y-1 animate-in slide-in-from-top-2 duration-200">
                      {menu.items.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          className="block px-3 py-2.5 text-sm text-muted-foreground hover:text-primary hover:bg-muted/30 rounded-md transition-colors"
                          onClick={closeMobileMenu}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Mobile Contact Link */}
              <Link
                href="/contact"
                className="block w-full px-3 py-3 text-left font-semibold text-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-colors"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

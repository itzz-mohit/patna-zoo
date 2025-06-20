"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import Link from "next/link"
import { Menu, ChevronDown } from "lucide-react"
import { MobileNav } from "@/components/mobile-nav"
import { cn } from "@/lib/utils"

// Grouped menu structure definition
const menuItems = [
  {
    title: "About",
    href: "/about",
    groups: [
      {
        title: "Our Story",
        items: [
          { title: "History & Legacy", href: "/about/history" },
          { title: "Director's Message", href: "/about/directors-message" },
        ],
      },
      {
        title: "Resources",
        items: [
          { title: "Gallery", href: "/about/gallery" },
          { title: "Zoo Map", href: "/about/map" },
        ],
      },
    ],
  },
  {
    title: "Plan a Visit",
    href: "/visit",
    groups: [
      {
        title: "Visitor Guide",
        items: [
          { title: "Tickets & Timings", href: "/visit/tickets" },
          { title: "Rules & Safety Guidelines", href: "/visit/rules" },
        ],
      },
      {
        title: "Trip Tools",
        items: [
          { title: "Location & How to Reach", href: "/visit/location" },
          { title: "Facilities", href: "/visit/facilities" },
        ],
      },
    ],
  },
  {
    title: "What's Here",
    href: "/animals",
    groups: [
      {
        title: "Wildlife",
        items: [
          { title: "Animals", href: "/animals" },
          { title: "Birds", href: "/animals?category=birds" },
          { title: "Reptiles", href: "/animals?category=reptiles" },
        ],
      },
      {
        title: "Nature",
        items: [{ title: "Plants & Flora", href: "/botanical" }],
      },
    ],
  },
  {
    title: "Zoo Experience",
    href: "/experience",
    groups: [
      {
        title: "Dining & Shopping",
        items: [
          { title: "Mayur Canteen", href: "/experience/mayur-canteen" },
          { title: "Souvenir Shop", href: "/experience/souvenir-shop" },
        ],
      },
      {
        title: "Attractions",
        items: [
          { title: "Jal Udyan", href: "/experience/jal-udyan" },
          { title: "Shishu Udyan", href: "/experience/shishu-udyan" },
          { title: "Toy Train", href: "/experience/toy-train" },
          { title: "Boating / Lake", href: "/experience/boating-lake" },
          { title: "3D Theater", href: "/experience/3d-theater" },
        ],
      },
      {
        title: "Zoo Features",
        items: [
          { title: "Nature Library", href: "/experience/nature-library" },
          { title: "Rhino Breeding Center", href: "/experience/rhino-breeding-center" },
          { title: "Photo Services", href: "/experience/photo-services" },
          { title: "Rose Garden", href: "/experience/rose-garden" },
          { title: "Golf Carts", href: "/experience/golf-carts" },
        ],
      },
    ],
  },
  {
    title: "Programs & Updates",
    href: "/programs",
    groups: [
      {
        title: "Get Involved",
        items: [
          { title: "Adopt an Animal", href: "/programs/adopt-an-animal" },
          { title: "Breeding Programs", href: "/programs/breeding" },
        ],
      },
      {
        title: "Latest News",
        items: [
          { title: "Live Tenders", href: "/programs/tenders" },
          { title: "News Update", href: "/programs/news" },
        ],
      },
    ],
  },
]

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null)
  const [isHoveringDropdown, setIsHoveringDropdown] = useState(false)
  const [isHoveringMenuItem, setIsHoveringMenuItem] = useState(false)

  const navRef = useRef<HTMLElement>(null)
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})
  const menuItemRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})

  // Handle scroll effect for sticky header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Clear timeout helper
  const clearHoverTimeout = useCallback(() => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout)
      setHoverTimeout(null)
    }
  }, [hoverTimeout])

  // Close dropdown with delay
  const scheduleClose = useCallback(() => {
    clearHoverTimeout()
    const timeout = setTimeout(() => {
      if (!isHoveringDropdown && !isHoveringMenuItem) {
        setActiveMenu(null)
      }
    }, 300) // Increased delay for better UX
    setHoverTimeout(timeout)
  }, [clearHoverTimeout, isHoveringDropdown, isHoveringMenuItem])

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (activeMenu && navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveMenu(null)
        setIsHoveringDropdown(false)
        setIsHoveringMenuItem(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [activeMenu])

  // Global mouse move handler for better hover detection
  useEffect(() => {
    const handleGlobalMouseMove = (event: MouseEvent) => {
      if (!activeMenu) return

      const navElement = navRef.current
      const activeDropdown = dropdownRefs.current[activeMenu]
      const activeMenuItem = menuItemRefs.current[activeMenu]

      if (!navElement || !activeDropdown || !activeMenuItem) return

      // Get bounding rectangles
      const navRect = navElement.getBoundingClientRect()
      const dropdownRect = activeDropdown.getBoundingClientRect()
      const menuItemRect = activeMenuItem.getBoundingClientRect()

      // Create buffer zones
      const bufferZone = 20 // pixels
      const expandedNavRect = {
        left: navRect.left - bufferZone,
        right: navRect.right + bufferZone,
        top: navRect.top - bufferZone,
        bottom: Math.max(navRect.bottom, dropdownRect.bottom) + bufferZone,
      }

      // Check if mouse is within the expanded navigation area
      const isInNavArea =
        event.clientX >= expandedNavRect.left &&
        event.clientX <= expandedNavRect.right &&
        event.clientY >= expandedNavRect.top &&
        event.clientY <= expandedNavRect.bottom

      // Create a triangular safe zone for diagonal movement
      const isInTriangleZone = isPointInTriangle(
        { x: event.clientX, y: event.clientY },
        { x: menuItemRect.left, y: menuItemRect.bottom },
        { x: menuItemRect.right, y: menuItemRect.bottom },
        { x: dropdownRect.left, y: dropdownRect.top },
      )

      if (!isInNavArea && !isInTriangleZone) {
        scheduleClose()
      } else {
        clearHoverTimeout()
      }
    }

    if (activeMenu) {
      document.addEventListener("mousemove", handleGlobalMouseMove, { passive: true })
    }

    return () => {
      document.removeEventListener("mousemove", handleGlobalMouseMove)
    }
  }, [activeMenu, scheduleClose, clearHoverTimeout])

  // Helper function to check if point is in triangle (for diagonal movement)
  const isPointInTriangle = (
    point: { x: number; y: number },
    a: { x: number; y: number },
    b: { x: number; y: number },
    c: { x: number; y: number },
  ) => {
    const denom = (b.y - c.y) * (a.x - c.x) + (c.x - b.x) * (a.y - c.y)
    if (Math.abs(denom) < 0.001) return false

    const alpha = ((b.y - c.y) * (point.x - c.x) + (c.x - b.x) * (point.y - c.y)) / denom
    const beta = ((c.y - a.y) * (point.x - c.x) + (a.x - c.x) * (point.y - c.y)) / denom
    const gamma = 1 - alpha - beta

    return alpha >= 0 && beta >= 0 && gamma >= 0
  }

  // Menu item hover handlers
  const handleMenuItemEnter = useCallback(
    (title: string) => {
      clearHoverTimeout()
      setIsHoveringMenuItem(true)
      setActiveMenu(title)
    },
    [clearHoverTimeout],
  )

  const handleMenuItemLeave = useCallback(() => {
    setIsHoveringMenuItem(false)
    scheduleClose()
  }, [scheduleClose])

  // Dropdown hover handlers
  const handleDropdownEnter = useCallback(() => {
    clearHoverTimeout()
    setIsHoveringDropdown(true)
  }, [clearHoverTimeout])

  const handleDropdownLeave = useCallback(() => {
    setIsHoveringDropdown(false)
    scheduleClose()
  }, [scheduleClose])

  // Keyboard navigation support
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key === "Escape") {
      setActiveMenu(null)
      setIsHoveringDropdown(false)
      setIsHoveringMenuItem(false)
    }
  }, [])

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown)
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [handleKeyDown])

  return (
    <>
      <div className="bg-zoo-teal-900/90 text-white/60 py-1.5 px-4 flex justify-between items-center text-xs relative">
        <div className="flex-1"></div>
        <div className="flex-grow text-center flex flex-col md:flex-row justify-center items-center gap-1 max-w-3xl mx-auto">
          <div className="font-medium">Sanjay Gandhi Biological Park</div>
          <div className="hidden md:block mx-1">•</div>
          <div>Opening times today: 10am - 6pm (Last entry at 5pm)</div>
        </div>
        <div className="flex-1 flex justify-end">
          <button
            className="text-white/70 hover:text-white transition-colors"
            aria-label="Close notification"
            onClick={() => {
              const banner = document.querySelector(".bg-zoo-teal-900/90")
              if (banner) banner.classList.add("hidden")
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>

      <header className={cn("fixed left-0 right-0 z-50 transition-all duration-300", isScrolled ? "top-0" : "top-8")}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav
            ref={navRef}
            className="bg-white/95 backdrop-blur-md rounded-full px-6 py-3 flex items-center justify-between transition-all duration-300 shadow-lg border border-white/20"
          >
            <Link href="/" className="flex items-center gap-2 z-10">
              <div className="w-12 h-12 bg-zoo-teal-700 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <div>
                <div className="font-heading text-2xl leading-none text-zoo-teal-700">Patna</div>
                <div className="font-heading text-2xl leading-none text-zoo-teal-700">Zoo</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1 relative">
              {menuItems.map((item) => (
                <div
                  key={item.title}
                  className="relative"
                  ref={(el) => (menuItemRefs.current[item.title] = el)}
                  onMouseEnter={() => handleMenuItemEnter(item.title)}
                  onMouseLeave={handleMenuItemLeave}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "px-4 py-2 rounded-full flex items-center gap-1 transition-all duration-200 text-zoo-teal-700 hover:text-zoo-teal-500 hover:bg-zoo-teal-50/80",
                      activeMenu === item.title && "bg-zoo-teal-50/80 text-zoo-teal-500",
                    )}
                    onFocus={() => handleMenuItemEnter(item.title)}
                  >
                    <span className="font-medium text-sm">{item.title}</span>
                    {item.groups && (
                      <ChevronDown
                        className={cn(
                          "w-4 h-4 transition-transform duration-200",
                          activeMenu === item.title && "rotate-180",
                        )}
                      />
                    )}
                  </Link>

                  {/* Grouped Dropdown Menu */}
                  {item.groups && (
                    <div
                      ref={(el) => (dropdownRefs.current[item.title] = el)}
                      className={cn(
                        "absolute top-full left-1/2 transform -translate-x-1/2 mt-1 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-gray-100/50 overflow-hidden transition-all duration-300 ease-out",
                        activeMenu === item.title
                          ? "opacity-100 scale-100 translate-y-0 pointer-events-auto visible"
                          : "opacity-0 scale-95 -translate-y-2 pointer-events-none invisible",
                        item.groups.length <= 2 ? "w-96" : "w-[600px]",
                      )}
                      onMouseEnter={handleDropdownEnter}
                      onMouseLeave={handleDropdownLeave}
                      style={{
                        // Add a small bridge to prevent gaps
                        paddingTop: "4px",
                        marginTop: "-4px",
                      }}
                    >
                      {/* Invisible bridge to prevent hover gaps */}
                      <div className="absolute -top-1 left-0 right-0 h-2 bg-transparent" />

                      <div className={cn("p-6 grid gap-8", item.groups.length <= 2 ? "grid-cols-2" : "grid-cols-3")}>
                        {item.groups.map((group) => (
                          <div key={group.title} className="space-y-3">
                            <h3 className="font-semibold text-zoo-teal-800 text-sm uppercase tracking-wide border-b border-gray-100 pb-2">
                              {group.title}
                            </h3>
                            <div className="space-y-1">
                              {group.items.map((subItem) => (
                                <Link
                                  key={subItem.title}
                                  href={subItem.href}
                                  className="block px-3 py-2 text-zoo-teal-600 hover:text-zoo-teal-800 hover:bg-zoo-teal-50/60 rounded-md transition-all duration-200 text-sm font-medium group"
                                  onClick={() => {
                                    setActiveMenu(null)
                                    setIsHoveringDropdown(false)
                                    setIsHoveringMenuItem(false)
                                  }}
                                >
                                  <span className="group-hover:translate-x-1 transition-transform duration-200 inline-block">
                                    {subItem.title}
                                  </span>
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}

              <Link
                href="/tickets"
                className="ml-4 bg-zoo-yellow-600 hover:bg-zoo-yellow-500 text-zoo-teal-900 font-bold text-sm px-6 py-2 rounded-full transition-all duration-200 hover:scale-105 hover:shadow-md"
              >
                BOOK TICKETS
              </Link>
            </div>

            {/* Mobile Navigation */}
            <div className="lg:hidden flex items-center gap-3">
              <Link
                href="/tickets"
                className="bg-zoo-yellow-600 hover:bg-zoo-yellow-500 text-zoo-teal-900 font-bold text-sm px-4 py-2 rounded-full transition-colors"
              >
                TICKETS
              </Link>
              <button
                className="p-2 rounded-full transition-colors bg-zoo-teal-600 hover:bg-zoo-teal-500 text-white"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu className="w-5 h-5" />
                <span className="sr-only">Menu</span>
              </button>
            </div>
          </nav>
        </div>
      </header>

      <MobileNav isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} menuItems={menuItems} />
    </>
  )
}

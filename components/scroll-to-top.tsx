"use client"

import { useState, useEffect } from "react"
import { ArrowUp } from "lucide-react"
import { cn } from "@/lib/utils"

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down a bit (300px)
      // This is more standard than waiting until halfway
      if (document.documentElement.scrollTop > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    // Throttle scroll events for better performance
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          toggleVisibility()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <button
      className={cn(
        "fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50",
        "w-10 h-10 sm:w-12 sm:h-12", // Smaller on mobile
        "bg-zoo-yellow-600 hover:bg-zoo-yellow-500 text-zoo-teal-900",
        "rounded-full shadow-lg transition-all duration-300 flex items-center justify-center group",
        "hover:scale-110 hover:shadow-xl",
        "focus:outline-none focus:ring-2 focus:ring-zoo-yellow-600 focus:ring-offset-2 focus:ring-offset-zoo-teal-700",
        isVisible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-2 pointer-events-none",
      )}
      onClick={scrollToTop}
      aria-label="Scroll to top"
      title="Back to top"
    >
      <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 group-hover:-translate-y-0.5" />
    </button>
  )
}

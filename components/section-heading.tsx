"use client"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  title: string
  subtitle?: string
  align?: "left" | "center" | "right"
  className?: string
}

export function SectionHeading({ title, subtitle, align = "center", className }: SectionHeadingProps) {
  const headingRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 },
    )

    if (headingRef.current) {
      observer.observe(headingRef.current)
    }

    return () => {
      if (headingRef.current) {
        observer.unobserve(headingRef.current)
      }
    }
  }, [])

  const alignClasses = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  }

  return (
    <div className={cn("max-w-2xl mb-8 sm:mb-12 animate-on-scroll", alignClasses[align], className)} ref={headingRef}>
      <h2 className="font-heading responsive-text-5xl text-white mb-3 sm:mb-4">{title}</h2>
      {subtitle && <p className="responsive-text-xl text-white/80">{subtitle}</p>}
    </div>
  )
}

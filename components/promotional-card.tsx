"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface PromotionalCardProps {
  title: string
  subtitle?: string
  image: string
  href: string
  accentColor?: string
  className?: string
}

export function PromotionalCard({
  title,
  subtitle,
  image,
  href,
  accentColor = "text-zoo-yellow-600",
  className,
}: PromotionalCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

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

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current)
      }
    }
  }, [])

  return (
    <Link href={href} className={cn("zoo-card group block animate-on-scroll", className)} ref={cardRef}>
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="zoo-card-overlay">
          <h3 className="font-heading text-2xl md:text-3xl mb-1">
            {title.split(" ").map((word, i) => (
              <span key={i} className={i % 2 === 1 ? accentColor : ""}>
                {word}{" "}
              </span>
            ))}
          </h3>
          {subtitle && <p className="text-white/90">{subtitle}</p>}
        </div>
      </div>
    </Link>
  )
}

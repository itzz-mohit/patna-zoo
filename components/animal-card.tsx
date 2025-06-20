"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface AnimalCardProps {
  name: string
  species: string
  category: string
  image: string
  slug: string
  className?: string
}

export function AnimalCard({ name, species, category, image, slug, className }: AnimalCardProps) {
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
    <Link href={`/animals/${slug}`} className={cn("block zoo-card group animate-on-scroll", className)} ref={cardRef}>
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <Badge
          className={`absolute top-3 right-3 sm:top-4 sm:right-4 text-white border-none uppercase tracking-wide font-heading responsive-text-xs font-bold px-2 py-1 sm:px-3 sm:py-1 ${
            category === "Mammals"
              ? "bg-orange-500"
              : category === "Birds"
                ? "bg-sky-500"
                : category === "Reptiles"
                  ? "bg-emerald-500"
                  : "bg-zoo-teal-600"
          }`}
        >
          {category}
        </Badge>
        <div className="zoo-card-overlay">
          <h3 className="font-heading responsive-text-xl sm:responsive-text-2xl text-white">{name}</h3>
          <p className="text-white/80 responsive-text-sm italic leading-relaxed">{species}</p>
        </div>
      </div>
    </Link>
  )
}

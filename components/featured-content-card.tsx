"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface FeaturedContentCardProps {
  title: string
  subtitle?: string
  description: string
  image: string
  href: string
  buttonText: string
  className?: string
  useBackgroundImage?: boolean
}

export function FeaturedContentCard({
  title,
  subtitle,
  description,
  image,
  href,
  buttonText,
  className,
  useBackgroundImage = false,
}: FeaturedContentCardProps) {
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

  if (useBackgroundImage) {
    return (
      <div className={cn("zoo-container animate-on-scroll", className)} ref={cardRef}>
        <div className="relative overflow-hidden rounded-3xl h-96 md:h-[500px]">
          {/* Background Image */}
          <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />

          {/* Overlay */}
          <div className="absolute inset-0"></div>

          {/* Content positioned at bottom */}
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-12">
            <div className="max-w-2xl">
              <h2 className="font-heading responsive-text-5xl md:responsive-text-6xl text-white mb-3 sm:mb-4">
                {title}
                {subtitle && (
                  <>
                    <br />
                    <span className="text-zoo-yellow-600 responsive-text-4xl md:responsive-text-5xl">{subtitle}</span>
                  </>
                )}
              </h2>
              <p className="text-white/90 content-text-large mb-4 sm:mb-6 description-text">{description}</p>
              <Link href={href} className="zoo-button-primary">
                {buttonText}
              </Link>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-8 right-8 w-24 h-24 bg-white/10 rounded-full"></div>
          <div className="absolute top-20 right-20 w-16 h-16 bg-zoo-yellow-600/20 rounded-full"></div>
        </div>
      </div>
    )
  }

  // Original layout for other uses
  return (
    <div className={cn("zoo-container animate-on-scroll", className)} ref={cardRef}>
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-orange-400 to-yellow-500 p-6 sm:p-8 md:p-12">
        <div className="relative z-10 grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
          <div>
            <h2 className="font-heading responsive-text-4xl md:responsive-text-5xl text-white mb-3 sm:mb-4">
              {title}
              {subtitle && (
                <>
                  <br />
                  <span className="responsive-text-3xl md:responsive-text-4xl">{subtitle}</span>
                </>
              )}
            </h2>
            <p className="text-white/90 content-text-large mb-4 sm:mb-6 description-text">{description}</p>
            <Link href={href} className="zoo-button-primary">
              {buttonText}
            </Link>
          </div>
          <div className="relative h-64 md:h-80">
            <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover rounded-2xl" />
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-8 right-8 w-24 h-24 bg-white/20 rounded-full"></div>
        <div className="absolute bottom-8 left-8 w-16 h-16 bg-white/10 rounded-full"></div>
      </div>
    </div>
  )
}

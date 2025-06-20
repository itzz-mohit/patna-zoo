"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface Event {
  id: number
  title: string
  description: string
  image: string
  href: string
  buttonText: string
}

interface EventsCarouselProps {
  events: Event[]
  backgroundImage: string
}

export function EventsCarousel({ events, backgroundImage }: EventsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 },
    )

    if (carouselRef.current) {
      observer.observe(carouselRef.current)
    }

    return () => {
      if (carouselRef.current) {
        observer.unobserve(carouselRef.current)
      }
    }
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % events.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + events.length) % events.length)
  }

  const currentEvent = events[currentIndex]

  return (
    <section className="py-16 bg-zoo-teal-700" ref={carouselRef}>
      <div className="zoo-container">
        <div
          className={cn(
            "text-center mb-12 transition-all duration-1000",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          <h2 className="font-heading text-4xl md:text-5xl text-white mb-4">What's on at the zoo?</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            We have a year-round programme of events to experience the zoo in exciting new ways. Join us, and explore.
          </p>
        </div>

        {/* Carousel Container with Background */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl">
            {/* Background Image - only for carousel container */}
            <div className="absolute inset-0">
              <Image src={backgroundImage || "/placeholder.svg"} alt="Zoo background" fill className="object-cover" />
              {/* <div className="absolute inset-0 bg-zoo-teal-700/80"></div> */}
            </div>

            {/* Navigation Buttons - positioned outside the card area */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Carousel Content */}
            <div className="relative z-20 py-16 px-8 md:px-16">
              <div className="flex items-center justify-center min-h-[400px]">
                {/* Event Card */}
                <div
                  className={cn(
                    "transition-all duration-700",
                    isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95",
                  )}
                >
                  <div className="bg-white rounded-3xl p-8 max-w-md mx-auto shadow-2xl transform transition-all duration-500 hover:scale-105">
                    <div className="relative h-48 mb-6 rounded-2xl overflow-hidden">
                      <Image
                        src={currentEvent?.image || "/placeholder.svg"}
                        alt={currentEvent?.title || "Event"}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <h3 className="font-heading text-2xl md:text-3xl text-zoo-teal-700 mb-4">{currentEvent?.title}</h3>

                    <p className="text-zoo-teal-600 mb-6 leading-relaxed">{currentEvent?.description}</p>

                    <Link
                      href={currentEvent?.href || "#"}
                      className="inline-block bg-zoo-teal-700 hover:bg-zoo-teal-600 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300"
                    >
                      {currentEvent?.buttonText || "Learn More"}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dots Indicator - positioned below the carousel */}
          <div className="flex justify-center mt-8 gap-2">
            {events.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  index === currentIndex ? "bg-zoo-yellow-600 scale-125" : "bg-white/40 hover:bg-white/60",
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { useCallback, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import useEmblaCarousel from "embla-carousel-react"
import AutoPlay from "embla-carousel-autoplay"

interface CarouselImage {
  id: number
  src: string
  alt: string
  title: string
  subtitle?: string
}

interface ImageCarouselProps {
  images: CarouselImage[]
  autoSlide?: boolean
  slideInterval?: number
}

export function ImageCarousel({ images, autoSlide = true, slideInterval = 4000 }: ImageCarouselProps) {
  const autoplayRef = useRef(
    AutoPlay({
      delay: slideInterval,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
      stopOnFocusIn: false,
    }),
  )

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      containScroll: "trimSnaps",
      dragFree: false,
      slidesToScroll: 1,
      skipSnaps: false,
    },
    autoSlide ? [autoplayRef.current] : [],
  )

  const onSelect = useCallback(() => {
    if (!emblaApi) return
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", onSelect)
  }, [emblaApi, onSelect])

  // Create slides with proper looping
  const slides = [...images, ...images, ...images] // Triple for smooth infinite scroll

  return (
    <section className="py-8 bg-zoo-teal-700 overflow-hidden mt-0 relative z-10">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container flex">
          {slides.map((image, index) => (
            <div key={`${image.id}-${index}`} className="embla__slide flex-none w-56 mx-2 first:ml-4 last:mr-4">
              <Link href={`/animals/${image.id}`} className="block hover:scale-105 transition-transform duration-300">
                <div className="relative aspect-[180/227] rounded-lg overflow-hidden">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="224px"
                  />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .embla {
          overflow: hidden;
        }
        .embla__container {
          display: flex;
          touch-action: pan-y pinch-zoom;
        }
        .embla__slide {
          transform: translate3d(0, 0, 0);
          flex: 0 0 auto;
          min-width: 0;
        }
      `}</style>
    </section>
  )
}

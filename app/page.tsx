"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { AnimalCard } from "@/components/animal-card"
import { SectionHeading } from "@/components/section-heading"
import { NewsletterSignup } from "@/components/newsletter-signup"
import { FeaturedContentCard } from "@/components/featured-content-card"
import { EventsCarousel } from "@/components/events-carousel"
import { ImageCarousel } from "@/components/image-carousel"
import { PriorityPopup } from "@/components/priority-popup"

export default function HomePage() {
  const [currentFactIndex, setCurrentFactIndex] = useState(0)

  // Daily fun facts with dynamic links
  const funFacts = [
    {
      fact: "Tigers have a unique set of stripes, just like human fingerprints! No two tigers have the same stripe pattern, making each one completely unique in the wild.",
      subject: "Royal Bengal Tiger",
      link: "/animals/royal-bengal-tiger",
      type: "animal",
    },
    {
      fact: "Elephants can hear sounds from up to 6 miles away through vibrations in the ground detected by their feet and trunk.",
      subject: "Indian Elephant",
      link: "/animals/indian-elephant",
      type: "animal",
    },
    {
      fact: "Peacocks don't actually have blue feathers! Their brilliant blue color comes from microscopic structures that reflect light, creating an optical illusion.",
      subject: "Peacock",
      link: "/animals/peacock",
      type: "animal",
    },
    {
      fact: "The Banyan tree can live for over 1,000 years and a single tree can spread across several acres, creating its own forest ecosystem.",
      subject: "Banyan Tree",
      link: "/plants/banyan-tree",
      type: "plant",
    },
    {
      fact: "Lotus flowers can regulate their temperature, staying warm even in cold weather to attract pollinators.",
      subject: "Lotus",
      link: "/plants/lotus",
      type: "plant",
    },
    {
      fact: "Gharials are one of the most critically endangered crocodilians in the world, with fewer than 200 breeding adults left in the wild.",
      subject: "Gharial",
      link: "/animals/gharial",
      type: "animal",
    },
    {
      fact: "Neem trees are known as 'nature's pharmacy' because every part of the tree has medicinal properties and can treat over 40 different ailments.",
      subject: "Neem Tree",
      link: "/plants/neem-tree",
      type: "plant",
    },
  ]

  // Get current day of year to determine which fact to show
  useEffect(() => {
    const now = new Date()
    const start = new Date(now.getFullYear(), 0, 0)
    const diff = now - start
    const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24))
    setCurrentFactIndex(dayOfYear % funFacts.length)
  }, [])

  const currentFact = funFacts[currentFactIndex]

  // Animation observer for scroll animations
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

    const animatedElements = document.querySelectorAll(".animate-on-scroll")
    animatedElements.forEach((el) => observer.observe(el))

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  const featuredAnimals = [
    {
      id: 1,
      name: "INDIAN HIPPOPOTAMUS",
      species: "Panthera tigris tigris",
      image: "/images/meet-animals/a1.jpg",
      category: "Mammals",
      slug: "royal-bengal-tiger",
    },
    {
      id: 2,
      name: "Indian Elephant",
      species: "Elephas maximus indicus",
      image: "/images/meet-animals/a2.jpg",
      category: "Mammals",
      slug: "indian-elephant",
    },
    {
      id: 3,
      name: "Spotted Deer",
      species: "Axis axis",
      image: "/images/meet-animals/a3.jpg",
      category: "Mammals",
      slug: "spotted-deer",
    },
    {
      id: 4,
      name: "Himalayan Black Bear",
      species: "Ursus thibetanus laniger",
      image: "/images/meet-animals/a4.jpg",
      category: "Mammals",
      slug: "himalayan-black-bear",
    },
  ]

  const carouselEvents = [
    {
      id: 1,
      title: "Zoo Awareness Week",
      description:
        "Join us for a week of fun and learning as we celebrate the amazing animals at Patna Zoo and the importance of conservation.",
      image: "/images/7e879b3e250e020505554420ddb55411.jpg",
      href: "/events/zoo-awareness-week",
      buttonText: "Learn more",
    },
    {
      id: 2,
      title: "Animal Feeding Time",
      description:
        "Watch our zookeepers feed some of the zoo's most popular animals and learn about their diets and habits.",
      image: "/images/d2.jpg",
      href: "/events/animal-feeding",
      buttonText: "See schedule",
    },
    {
      id: 3,
      title: "Conservation Talk Series",
      description:
        "Join our experts for an in-depth discussion about wildlife conservation efforts in Bihar and how you can make a difference.",
      image: "/images/d3.jpg",
      href: "/events/conservation-talks",
      buttonText: "Learn more",
    },
  ]

  const carouselImages = [
    {
      id: 1,
      src: "/images/slider/c2.png",
      alt: "Tiger habitat",
      title: "Tiger Territory",
      subtitle: "Home to our Royal Bengal Tigers",
    },
    {
      id: 2,
      src: "/images/slider/c1.png",
      alt: "Elephant sanctuary",
      title: "Elephant Sanctuary",
      subtitle: "Watch our gentle giants",
    },
    {
      id: 3,
      src: "/images/slider/c3.png",
      alt: "Bird aviary",
      title: "Tropical Aviary",
      subtitle: "Colorful birds from around the world",
    },
    {
      id: 4,
      src: "/images/slider/c4.png",
      alt: "Reptile house",
      title: "Reptile House",
      subtitle: "Fascinating cold-blooded creatures",
    },
    {
      id: 5,
      src: "/images/slider/c5.png",
      alt: "Primate section",
      title: "Primate Paradise",
      subtitle: "Our closest animal relatives",
    },
    {
      id: 6,
      src: "/images/slider/c6.png",
      alt: "Aquatic animals",
      title: "Aquatic Zone",
      subtitle: "Underwater wonders",
    },
    {
      id: 7,
      src: "/images/slider/c9.png",
      alt: "Aquatic animals",
      title: "Aquatic Zone",
      subtitle: "Underwater wonders",
    },
    {
      id: 8,
      src: "/images/slider/c7.png",
      alt: "Aquatic animals",
      title: "Aquatic Zone",
      subtitle: "Underwater wonders",
    },
    {
      id: 9,
      src: "/images/slider/c8.png",
      alt: "Aquatic animals",
      title: "Aquatic Zone",
      subtitle: "Underwater wonders",
    },
  ]

  return (
    <>
      <Navbar />

      {/* Full-screen Priority Popup */}
      <PriorityPopup />

      <main>
        <HeroSection
          images={["/images/hero/s1.jpg", "/images/hero/s2.jpg"]} // Use carousel on home page
          height="large"
        />

        {/* Image Carousel */}
        <ImageCarousel images={carouselImages} />

        {/* Priority Section - appears above "Explore the Wildlife of Bihar" */}
        <PriorityPopup asSection={true} />

        {/* Featured Content Card - Heart of India with background image */}
        <section className="py-16 bg-zoo-teal-700">
          <FeaturedContentCard
            title="Explore the Wildlife of Bihar"
            subtitle="Discover local species"
            description="Discover the diverse wildlife of Bihar, including native species and conservation efforts specific to the region. Learn about the unique ecosystems and the animals that call them home."
            image="/images/bg2.png"
            href="/exhibits/bihar-wildlife"
            buttonText="FIND OUT MORE"
            useBackgroundImage={true}
          />
        </section>

        {/* Fun Fact of the Day - Positioned after Explore Wildlife section */}
        <section className="py-16 bg-zoo-teal-600">
          <div className="zoo-container">
            <div className="max-w-5xl mx-auto animate-on-scroll">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 bg-zoo-yellow-500 text-zoo-teal-800 px-4 py-2 rounded-full font-heading font-bold text-sm uppercase tracking-wide mb-6">
                  <span>🌟</span>
                  Fun Fact of the Day
                </div>
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white mb-2">DID YOU KNOW?</h2>
              </div>

              <div className="relative">
                {/* Large decorative quotation mark */}
                <div className="absolute -top-4 -left-4 md:-top-8 md:-left-8 text-zoo-yellow-400/30 text-8xl md:text-9xl lg:text-[12rem] font-serif leading-none pointer-events-none select-none">
                  "
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 relative">
                  <div className="relative z-10">
                    <p className="text-xl md:text-2xl lg:text-3xl text-white leading-relaxed mb-8 font-light">
                      {currentFact.fact}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                      <div className="text-zoo-yellow-400">
                        <span className="font-heading text-lg md:text-xl">— {currentFact.subject}</span>
                      </div>

                      <Link href={currentFact.link} className="zoo-button-primary inline-flex items-center gap-2 group">
                        KNOW MORE
                        <svg
                          className="w-4 h-4 transition-transform group-hover:translate-x-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Animals */}
        <section className="py-16 bg-zoo-teal-700">
          <div className="zoo-container">
            <SectionHeading
              title="MEET OUR AMAZING ANIMALS"
              subtitle="Discover the incredible wildlife that calls Patna Zoo home"
            />

            <div className="relative mb-12">
              <div
                ref={(el) => {
                  if (el) {
                    let isDragging = false
                    let startX = 0
                    let startY = 0
                    let scrollLeft = 0
                    let velocity = 0
                    let lastX = 0
                    let lastTime = 0
                    let animationId = null
                    const dragThreshold = 10
                    let hasMoved = false
                    let clickPrevented = false

                    // Function to update active dot based on scroll position
                    const updateActiveDot = () => {
                      if (window.innerWidth >= 640) return // Only on mobile

                      const scrollPosition = el.scrollLeft
                      const cardWidth = el.querySelector(".animal-card")?.offsetWidth || 0
                      const gap = 24 // 6 * 4px (gap-6)
                      const itemWidth = cardWidth + gap
                      const activeIndex = Math.round(scrollPosition / itemWidth)

                      const dots = document.querySelectorAll(".pagination-dot")
                      dots.forEach((dot, index) => {
                        if (index === activeIndex) {
                          dot.classList.remove("bg-white/40")
                          dot.classList.add("bg-white", "scale-125")
                        } else {
                          dot.classList.remove("bg-white", "scale-125")
                          dot.classList.add("bg-white/40")
                        }
                      })
                    }

                    // Scroll to specific slide
                    const scrollToSlide = (index) => {
                      const cardWidth = el.querySelector(".animal-card")?.offsetWidth || 0
                      const gap = 24
                      const itemWidth = cardWidth + gap
                      const targetScroll = index * itemWidth

                      el.style.scrollBehavior = "smooth"
                      el.scrollLeft = targetScroll

                      setTimeout(() => {
                        el.style.scrollBehavior = "auto"
                      }, 500)
                    }

                    // Momentum scrolling function
                    const momentumScroll = () => {
                      if (Math.abs(velocity) > 0.5) {
                        el.scrollLeft += velocity
                        velocity *= 0.95

                        if (el.scrollLeft <= 0) {
                          el.scrollLeft = 0
                          velocity = 0
                        } else if (el.scrollLeft >= el.scrollWidth - el.clientWidth) {
                          el.scrollLeft = el.scrollWidth - el.clientWidth
                          velocity = 0
                        }

                        animationId = requestAnimationFrame(momentumScroll)
                      } else {
                        updateActiveDot()
                      }
                    }

                    // Mouse events
                    const handleMouseDown = (e) => {
                      if (window.innerWidth >= 640) return

                      isDragging = true
                      hasMoved = false
                      clickPrevented = false
                      startX = e.pageX
                      startY = e.pageY
                      scrollLeft = el.scrollLeft
                      lastX = e.pageX
                      lastTime = Date.now()
                      velocity = 0

                      if (animationId) {
                        cancelAnimationFrame(animationId)
                        animationId = null
                      }

                      el.style.cursor = "grabbing"
                      el.style.scrollBehavior = "auto"
                    }

                    const handleMouseMove = (e) => {
                      if (!isDragging || window.innerWidth >= 640) return

                      const currentX = e.pageX
                      const currentTime = Date.now()
                      const deltaX = currentX - startX
                      const deltaY = e.pageY - startY

                      if (!hasMoved && (Math.abs(deltaX) > dragThreshold || Math.abs(deltaY) > dragThreshold)) {
                        hasMoved = true
                        if (Math.abs(deltaY) > Math.abs(deltaX)) {
                          isDragging = false
                          el.style.cursor = "grab"
                          return
                        }
                      }

                      if (hasMoved) {
                        clickPrevented = true
                        e.preventDefault()

                        const timeDelta = currentTime - lastTime
                        if (timeDelta > 0) {
                          velocity = ((currentX - lastX) / timeDelta) * -16
                        }

                        let newScrollLeft = scrollLeft - deltaX

                        if (newScrollLeft < 0) {
                          newScrollLeft = newScrollLeft * 0.3
                        } else if (newScrollLeft > el.scrollWidth - el.clientWidth) {
                          const overflow = newScrollLeft - (el.scrollWidth - el.clientWidth)
                          newScrollLeft = el.scrollWidth - el.clientWidth + overflow * 0.3
                        }

                        el.scrollLeft = newScrollLeft
                        lastX = currentX
                        lastTime = currentTime
                      }
                    }

                    const handleMouseUp = (e) => {
                      if (!isDragging) return

                      isDragging = false
                      el.style.cursor = "grab"
                      el.style.scrollBehavior = "smooth"

                      if (hasMoved && Math.abs(velocity) > 1) {
                        momentumScroll()
                      } else {
                        updateActiveDot()
                      }

                      // Prevent click only if we actually dragged
                      if (clickPrevented) {
                        setTimeout(() => {
                          clickPrevented = false
                        }, 10)
                      }
                    }

                    // Touch events
                    const handleTouchStart = (e) => {
                      if (window.innerWidth >= 640) return

                      const touch = e.touches[0]
                      isDragging = true
                      hasMoved = false
                      clickPrevented = false
                      startX = touch.pageX
                      startY = touch.pageY
                      scrollLeft = el.scrollLeft
                      lastX = touch.pageX
                      lastTime = Date.now()
                      velocity = 0

                      if (animationId) {
                        cancelAnimationFrame(animationId)
                        animationId = null
                      }

                      el.style.scrollBehavior = "auto"
                    }

                    const handleTouchMove = (e) => {
                      if (!isDragging || window.innerWidth >= 640) return

                      const touch = e.touches[0]
                      const currentX = touch.pageX
                      const currentTime = Date.now()
                      const deltaX = currentX - startX
                      const deltaY = touch.pageY - startY

                      if (!hasMoved && (Math.abs(deltaX) > dragThreshold || Math.abs(deltaY) > dragThreshold)) {
                        hasMoved = true
                        if (Math.abs(deltaY) > Math.abs(deltaX)) {
                          isDragging = false
                          return
                        }
                      }

                      if (hasMoved) {
                        clickPrevented = true
                        e.preventDefault()

                        const timeDelta = currentTime - lastTime
                        if (timeDelta > 0) {
                          velocity = ((currentX - lastX) / timeDelta) * -16
                        }

                        let newScrollLeft = scrollLeft - deltaX

                        if (newScrollLeft < 0) {
                          newScrollLeft = newScrollLeft * 0.3
                        } else if (newScrollLeft > el.scrollWidth - el.clientWidth) {
                          const overflow = newScrollLeft - (el.scrollWidth - el.clientWidth)
                          newScrollLeft = el.scrollWidth - el.clientWidth + overflow * 0.3
                        }

                        el.scrollLeft = newScrollLeft
                        lastX = currentX
                        lastTime = currentTime
                      }
                    }

                    const handleTouchEnd = (e) => {
                      if (!isDragging) return

                      isDragging = false
                      el.style.scrollBehavior = "smooth"

                      if (hasMoved && Math.abs(velocity) > 1) {
                        momentumScroll()
                      } else {
                        updateActiveDot()
                      }

                      if (clickPrevented) {
                        setTimeout(() => {
                          clickPrevented = false
                        }, 10)
                      }
                    }

                    // Handle clicks on animal cards
                    const handleClick = (e) => {
                      if (clickPrevented) {
                        e.preventDefault()
                        e.stopPropagation()
                        return false
                      }
                    }

                    // Scroll event to update dots
                    const handleScroll = () => {
                      if (!isDragging) {
                        updateActiveDot()
                      }
                    }

                    // Add event listeners
                    el.addEventListener("mousedown", handleMouseDown)
                    el.addEventListener("mousemove", handleMouseMove)
                    el.addEventListener("mouseup", handleMouseUp)
                    el.addEventListener("mouseleave", handleMouseUp)
                    el.addEventListener("touchstart", handleTouchStart, { passive: false })
                    el.addEventListener("touchmove", handleTouchMove, { passive: false })
                    el.addEventListener("touchend", handleTouchEnd, { passive: false })
                    el.addEventListener("click", handleClick, { capture: true })
                    el.addEventListener("scroll", handleScroll, { passive: true })

                    if (window.innerWidth < 640) {
                      el.style.cursor = "grab"
                    }

                    // Initial dot update
                    setTimeout(updateActiveDot, 100)

                    // Cleanup function
                    return () => {
                      if (animationId) {
                        cancelAnimationFrame(animationId)
                      }
                      el.removeEventListener("mousedown", handleMouseDown)
                      el.removeEventListener("mousemove", handleMouseMove)
                      el.removeEventListener("mouseup", handleMouseUp)
                      el.removeEventListener("mouseleave", handleMouseUp)
                      el.removeEventListener("touchstart", handleTouchStart)
                      el.removeEventListener("touchmove", handleTouchMove)
                      el.removeEventListener("touchend", handleTouchEnd)
                      el.removeEventListener("click", handleClick, { capture: true })
                      el.removeEventListener("scroll", handleScroll)
                    }
                  }
                }}
                className="flex overflow-x-auto pb-4 sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 scrollbar-hide pl-4 pr-4 sm:pl-0 sm:pr-0"
                style={{
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                  userSelect: "none",
                  WebkitUserSelect: "none",
                  touchAction: "pan-y pinch-zoom",
                }}
              >
                {featuredAnimals.map((animal, index) => (
                  <AnimalCard
                    key={animal.id}
                    name={animal.name}
                    species={animal.species}
                    category={animal.category}
                    image={animal.image}
                    slug={animal.slug}
                    className={`flex-shrink-0 w-[75%] sm:w-auto snap-start animal-card ${`stagger-${index + 1}`}`}
                  />
                ))}
              </div>

              {/* Interactive Pagination dots - only visible on mobile */}
              <div className="flex justify-center mt-4 gap-2 sm:hidden">
                {featuredAnimals.map((_, index) => (
                  <button
                    key={index}
                    className="w-3 h-3 rounded-full bg-white/40 hover:bg-white/60 transition-all duration-200 pagination-dot"
                    onClick={(e) => {
                      e.preventDefault()
                      const container = e.target.closest(".relative").querySelector(".flex.overflow-x-auto")
                      const cardWidth = container.querySelector(".animal-card")?.offsetWidth || 0
                      const gap = 24
                      const itemWidth = cardWidth + gap
                      const targetScroll = index * itemWidth

                      container.style.scrollBehavior = "smooth"
                      container.scrollLeft = targetScroll

                      setTimeout(() => {
                        container.style.scrollBehavior = "auto"
                      }, 500)
                    }}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Sneak peek indicators - only visible on mobile */}
              <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-4 bg-gradient-to-r from-zoo-teal-700 to-transparent h-full sm:hidden pointer-events-none"></div>
              <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-4 bg-gradient-to-l from-zoo-teal-700 to-transparent h-full sm:hidden pointer-events-none"></div>
            </div>

            <div className="text-center">
              <Link href="/animals" className="zoo-button-primary">
                EXPLORE ALL ANIMALS
              </Link>
            </div>
          </div>
        </section>

        {/* Events Carousel */}
        <EventsCarousel events={carouselEvents} backgroundImage="/images/bg.png" />

        {/* Conservation Section */}
        <section className="py-16 bg-zoo-teal-800">
          <div className="zoo-container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-on-scroll">
                <h2 className="font-heading text-4xl md:text-5xl text-white mb-6">SAVING BIHAR'S WILDLIFE</h2>
                <p className="text-white/80 text-lg mb-6">
                  Our conservation efforts are focused on protecting the unique wildlife of Bihar and Eastern India.
                  From the Gangetic River Dolphin to the endangered vultures, we're working to ensure these species
                  thrive.
                </p>
                <p className="text-white/80 text-lg mb-8">
                  Through community-based conservation programs and partnerships with local organizations, we're making
                  a real difference in preserving Bihar's natural heritage.
                </p>
                <Link href="/conservation" className="zoo-button-primary">
                  DISCOVER OUR WORK
                </Link>
              </div>

              <div className="relative h-96 rounded-lg overflow-hidden animate-on-scroll stagger-2">
                <Image src="/images/s1111.png" alt="Conservation work" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Adopt an Animal CTA */}
        <section className="py-16 bg-zoo-teal-700">
          <FeaturedContentCard
            title="Make a Difference Today"
            subtitle="Adopt an Animal"
            description="Support our conservation efforts by adopting one of our amazing animals. Your contribution helps provide food, medical care, and habitat improvements while supporting wildlife conservation programs across Bihar."
            image="/images/meet-animals/a1.jpg"
            href="/programs/adopt-an-animal"
            buttonText="ADOPT AN ANIMAL"
            useBackgroundImage={false}
          />
        </section>

        {/* Visit CTA */}
        <section className="py-16 bg-gradient-to-r from-zoo-teal-600 to-zoo-teal-700">
          <div className="zoo-container">
            <div className="text-center max-w-2xl mx-auto animate-on-scroll">
              <h2 className="font-heading text-4xl md:text-5xl text-white mb-6">VISIT YOUR FAVOURITE ANIMALS</h2>
              <p className="text-xl text-white/80 mb-8">
                Book your visit today and experience the wonder of wildlife up close. Every ticket helps support our
                conservation efforts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/tickets" className="zoo-button-primary">
                  BOOK TICKETS
                </Link>
                <Link href="/visit" className="zoo-button-secondary">
                  PLAN YOUR VISIT
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 bg-zoo-teal-700">
          <div className="zoo-container">
            <div className="max-w-3xl mx-auto animate-on-scroll">
              <NewsletterSignup />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

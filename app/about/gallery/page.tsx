"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { X } from "lucide-react"

export default function GalleryPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Gallery categories and images
  const galleryCategories = [
    {
      id: "animals",
      name: "Animals",
      images: [
        { src: "/placeholder.svg?height=600&width=800", alt: "Tiger at Patna Zoo", caption: "Royal Bengal Tiger" },
        { src: "/placeholder.svg?height=600&width=800", alt: "Elephant at Patna Zoo", caption: "Indian Elephant" },
        {
          src: "/placeholder.svg?height=600&width=800",
          alt: "Rhinoceros at Patna Zoo",
          caption: "One-horned Rhinoceros",
        },
        { src: "/placeholder.svg?height=600&width=800", alt: "Deer at Patna Zoo", caption: "Spotted Deer" },
        { src: "/placeholder.svg?height=600&width=800", alt: "Bear at Patna Zoo", caption: "Sloth Bear" },
        { src: "/placeholder.svg?height=600&width=800", alt: "Crocodile at Patna Zoo", caption: "Marsh Crocodile" },
        { src: "/placeholder.svg?height=600&width=800", alt: "Peacock at Patna Zoo", caption: "Indian Peacock" },
        { src: "/placeholder.svg?height=600&width=800", alt: "Monkey at Patna Zoo", caption: "Rhesus Macaque" },
      ],
    },
    {
      id: "birds",
      name: "Birds",
      images: [
        { src: "/placeholder.svg?height=600&width=800", alt: "Peacock at Patna Zoo", caption: "Indian Peacock" },
        {
          src: "/placeholder.svg?height=600&width=800",
          alt: "Hornbill at Patna Zoo",
          caption: "Great Indian Hornbill",
        },
        { src: "/placeholder.svg?height=600&width=800", alt: "Flamingo at Patna Zoo", caption: "Greater Flamingo" },
        { src: "/placeholder.svg?height=600&width=800", alt: "Pelican at Patna Zoo", caption: "Spot-billed Pelican" },
        { src: "/placeholder.svg?height=600&width=800", alt: "Stork at Patna Zoo", caption: "Painted Stork" },
        { src: "/placeholder.svg?height=600&width=800", alt: "Parrot at Patna Zoo", caption: "Alexandrine Parakeet" },
      ],
    },
    {
      id: "facilities",
      name: "Facilities",
      images: [
        { src: "/placeholder.svg?height=600&width=800", alt: "Zoo entrance", caption: "Main Entrance" },
        { src: "/placeholder.svg?height=600&width=800", alt: "Education center", caption: "Education Center" },
        { src: "/placeholder.svg?height=600&width=800", alt: "Toy train", caption: "Toy Train" },
        { src: "/placeholder.svg?height=600&width=800", alt: "Lake view", caption: "Boating Lake" },
        { src: "/placeholder.svg?height=600&width=800", alt: "Children's park", caption: "Shishu Udyan" },
        { src: "/placeholder.svg?height=600&width=800", alt: "Food court", caption: "Mayur Canteen" },
        { src: "/placeholder.svg?height=600&width=800", alt: "Souvenir shop", caption: "Souvenir Shop" },
        { src: "/placeholder.svg?height=600&width=800", alt: "Rose garden", caption: "Rose Garden" },
      ],
    },
    {
      id: "events",
      name: "Events",
      images: [
        {
          src: "/placeholder.svg?height=600&width=800",
          alt: "Wildlife Week celebration",
          caption: "Wildlife Week Celebration",
        },
        { src: "/placeholder.svg?height=600&width=800", alt: "School visit", caption: "School Educational Visit" },
        {
          src: "/placeholder.svg?height=600&width=800",
          alt: "Conservation workshop",
          caption: "Conservation Workshop",
        },
        {
          src: "/placeholder.svg?height=600&width=800",
          alt: "Animal feeding demonstration",
          caption: "Animal Feeding Demonstration",
        },
        { src: "/placeholder.svg?height=600&width=800", alt: "Veterinary camp", caption: "Veterinary Health Camp" },
        {
          src: "/placeholder.svg?height=600&width=800",
          alt: "Tree plantation drive",
          caption: "Tree Plantation Drive",
        },
      ],
    },
    {
      id: "historical",
      name: "Historical",
      images: [
        { src: "/placeholder.svg?height=600&width=800", alt: "Zoo inauguration", caption: "Zoo Inauguration (1973)" },
        {
          src: "/placeholder.svg?height=600&width=800",
          alt: "First tiger enclosure",
          caption: "First Tiger Enclosure (1975)",
        },
        { src: "/placeholder.svg?height=600&width=800", alt: "Early visitors", caption: "Early Visitors (1980s)" },
        {
          src: "/placeholder.svg?height=600&width=800",
          alt: "Construction of education center",
          caption: "Construction of Education Center (1995)",
        },
        {
          src: "/placeholder.svg?height=600&width=800",
          alt: "First breeding success",
          caption: "First Breeding Success - Tiger Cubs (1985)",
        },
        { src: "/placeholder.svg?height=600&width=800", alt: "Zoo expansion", caption: "Zoo Expansion (2000)" },
      ],
    },
  ]

  return (
    <>
      <Navbar />

      <main>
        <HeroSection
          title="GALLERY"
          subtitle="Explore Patna Zoo through our lens"
          backgroundImage="/images/header/animal-bg.png"
          height="medium"
        />

        {/* Gallery Section */}
        <section className="py-16 bg-zoo-teal-700">
          <div className="zoo-container">
            <div
              className={`text-center mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <h2 className="font-heading text-4xl md:text-5xl text-white mb-4">VISUAL JOURNEY</h2>
              <p className="text-xl text-white/80">
                Discover the beauty and diversity of Patna Zoo through our collection of photographs
              </p>
            </div>

            <Tabs defaultValue="animals" className="w-full">
              <TabsList className="w-full flex overflow-x-auto mb-8 bg-white/10 border-white/20 p-1 rounded-lg">
                {galleryCategories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="flex-1 text-white data-[state=active]:bg-zoo-yellow-600 data-[state=active]:text-zoo-teal-900"
                  >
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>

              {galleryCategories.map((category) => (
                <TabsContent key={category.id} value={category.id} className="mt-0">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {category.images.map((image, index) => (
                      <Dialog key={index}>
                        <DialogTrigger asChild>
                          <div
                            className={`relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer transition-all duration-500 hover:scale-105 animate-on-scroll ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                            onClick={() => setSelectedImage(image.src)}
                          >
                            <Image
                              src={image.src || "/placeholder.svg"}
                              alt={image.alt}
                              fill
                              className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-zoo-teal-900/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                              <p className="text-white font-medium">{image.caption}</p>
                            </div>
                          </div>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
                          <div className="relative">
                            <button
                              onClick={() => setSelectedImage(null)}
                              className="absolute top-2 right-2 w-8 h-8 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center z-10"
                            >
                              <X className="w-5 h-5 text-white" />
                            </button>
                            <div className="relative aspect-video">
                              <Image
                                src={image.src || "/placeholder.svg"}
                                alt={image.alt}
                                fill
                                className="object-contain"
                              />
                            </div>
                            <div className="bg-zoo-teal-800/90 p-4">
                              <p className="text-white font-medium">{image.caption}</p>
                              <p className="text-white/70 text-sm">{image.alt}</p>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Featured Photo */}
        <section className="py-16 bg-zoo-teal-800">
          <div className="zoo-container">
            <div className="text-center mb-12 animate-on-scroll">
              <h2 className="font-heading text-4xl md:text-5xl text-white mb-4">PHOTO OF THE MONTH</h2>
              <p className="text-xl text-white/80">Highlighting exceptional moments captured at Patna Zoo</p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative aspect-[16/9] rounded-lg overflow-hidden animate-on-scroll">
                <Image
                  src="/placeholder.svg?height=900&width=1600"
                  alt="Featured photo - Tiger cooling off in water"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zoo-teal-900/80 to-transparent flex flex-col justify-end p-6">
                  <h3 className="font-heading text-2xl text-white mb-2">Summer Splash</h3>
                  <p className="text-white/90">A Royal Bengal Tiger cooling off in the water during a hot summer day</p>
                  <p className="text-zoo-yellow-600 mt-2">Photo by: Rahul Singh, June 2023</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Photo Submission */}
        <section className="py-16 bg-zoo-teal-700">
          <div className="zoo-container">
            <div className="max-w-3xl mx-auto text-center animate-on-scroll">
              <h2 className="font-heading text-4xl md:text-5xl text-white mb-6">SHARE YOUR MEMORIES</h2>
              <p className="text-xl text-white/80 mb-8">
                Have you captured a special moment at Patna Zoo? Share your photos with us for a chance to be featured
                in our gallery.
              </p>
              <button className="zoo-button-primary">SUBMIT YOUR PHOTOS</button>
              <p className="text-white/70 mt-4 text-sm">
                By submitting, you agree to our photo usage policy and confirm that you own the rights to the submitted
                images.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

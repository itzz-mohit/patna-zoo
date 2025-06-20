"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Clock, MapPin, Users, Wifi, Coffee } from "lucide-react"
import { ImageGallery } from "@/components/image-gallery"

export default function NatureLibraryPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const libraryCollections = [
    {
      title: "Wildlife & Conservation",
      description: "Comprehensive collection of books on wildlife conservation, animal behavior, and biodiversity",
      books: "500+ titles",
      languages: "Hindi, English",
      highlights: ["Endangered Species", "Conservation Success Stories", "Wildlife Photography Books"],
    },
    {
      title: "Flora & Botany",
      description: "Extensive botanical collection covering plant species, medicinal plants, and forest ecology",
      books: "300+ titles",
      languages: "Hindi, English",
      highlights: ["Medicinal Plants of Bihar", "Forest Ecology", "Plant Identification Guides"],
    },
    {
      title: "Environmental Science",
      description: "Academic and research materials on environmental science, climate change, and sustainability",
      books: "400+ titles",
      languages: "English, Hindi",
      highlights: ["Climate Change Studies", "Sustainable Development", "Environmental Policy"],
    },
    {
      title: "Children's Nature Books",
      description: "Engaging books for young readers about animals, nature, and environmental awareness",
      books: "200+ titles",
      languages: "Hindi, English",
      highlights: ["Picture Books", "Activity Books", "Nature Stories"],
    },
  ]

  const facilities = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Extensive Collection",
      description: "Over 1,400 books on wildlife, conservation, botany, and environmental science",
    },
    {
      icon: <Wifi className="w-6 h-6" />,
      title: "Digital Resources",
      description: "Free Wi-Fi, computers for research, and access to online databases",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Study Spaces",
      description: "Quiet reading areas, group study rooms, and comfortable seating arrangements",
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: "Reading Lounge",
      description: "Comfortable lounge area with refreshments and peaceful garden views",
    },
  ]

  const services = [
    {
      title: "Research Assistance",
      description: "Professional librarians available to help with research and finding resources",
      availability: "Tuesday - Sunday, 10 AM - 4 PM",
    },
    {
      title: "Educational Programs",
      description: "Regular workshops, book readings, and environmental awareness programs",
      availability: "Weekly programs for schools and groups",
    },
    {
      title: "Digital Archive",
      description: "Access to rare books, research papers, and historical documents in digital format",
      availability: "Available during library hours",
    },
    {
      title: "Inter-library Loans",
      description: "Access to books from other libraries and research institutions",
      availability: "By appointment",
    },
  ]

  const galleryImages = [
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Library reading area",
      title: "Peaceful Reading Environment",
      description: "Quiet study spaces with natural lighting and garden views",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Book collection shelves",
      title: "Extensive Book Collection",
      description: "Over 1,400 books on nature, wildlife, and conservation",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Children's reading corner",
      title: "Children's Section",
      description: "Dedicated area for young readers with nature-themed books",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Digital research station",
      title: "Digital Resources",
      description: "Computer stations with internet access and research databases",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Group study room",
      title: "Study Rooms",
      description: "Private spaces for group discussions and collaborative learning",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Library workshop session",
      title: "Educational Programs",
      description: "Regular workshops and educational sessions for visitors",
    },
  ]

  return (
    <>
      <Navbar />

      <main>
        <HeroSection
          title="NATURE LIBRARY"
          subtitle="A treasure trove of knowledge about wildlife and conservation"
          backgroundImage="/images/header/animal-bg.png"
          height="medium"
        />

        {/* Introduction */}
        <section className="py-16 bg-zoo-teal-700">
          <div className="zoo-container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div
                className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                <h2 className="font-heading text-4xl md:text-5xl text-white mb-6">KNOWLEDGE SANCTUARY</h2>
                <p className="text-white/90 text-lg mb-4">
                  Our Nature Library serves as a comprehensive resource center dedicated to wildlife conservation,
                  environmental science, and natural history. With over 1,400 carefully curated books, journals, and
                  digital resources, it's a haven for researchers, students, and nature enthusiasts.
                </p>
                <p className="text-white/90 text-lg mb-4">
                  From rare botanical texts to the latest conservation research, our collection spans multiple languages
                  and covers diverse topics. The library also features comfortable reading spaces, digital research
                  stations, and regular educational programs to foster learning and environmental awareness.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-zoo-yellow-600" />
                    <span className="text-white">Open: 9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-zoo-yellow-600" />
                    <span className="text-white">Education Complex</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-zoo-yellow-600" />
                    <span className="text-white">1,400+ Books</span>
                  </div>
                </div>
              </div>

              <div
                className={`relative h-96 rounded-lg overflow-hidden transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Nature Library interior with books and reading area"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-zoo-teal-900/80 to-transparent p-6">
                  <p className="text-white/90 text-sm">
                    Peaceful learning environment with extensive nature collection
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Library Collections */}
        <section className="py-16 bg-zoo-teal-800">
          <div className="zoo-container">
            <div
              className={`text-center mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <h2 className="font-heading text-4xl md:text-5xl text-white mb-4">OUR COLLECTIONS</h2>
              <p className="text-xl text-white/80">
                Discover our comprehensive library of nature and conservation resources
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {libraryCollections.map((collection, index) => (
                <Card
                  key={index}
                  className={`bg-white/10 border-white/20 text-white transition-all duration-500 hover:scale-105 animate-on-scroll ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <CardTitle className="font-heading text-xl">{collection.title}</CardTitle>
                    <div className="flex gap-2">
                      <Badge className="bg-zoo-yellow-600 text-zoo-teal-900 text-xs">{collection.books}</Badge>
                      <Badge className="bg-white/20 text-white text-xs">{collection.languages}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/80 text-sm mb-4">{collection.description}</p>
                    <div>
                      <p className="font-medium text-zoo-yellow-600 text-sm mb-2">Featured Topics:</p>
                      <ul className="space-y-1">
                        {collection.highlights.map((highlight, highlightIndex) => (
                          <li key={highlightIndex} className="text-white/70 text-xs flex items-center gap-2">
                            <div className="w-1 h-1 bg-zoo-yellow-600 rounded-full"></div>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Facilities */}
        <section className="py-16 bg-zoo-teal-700">
          <div className="zoo-container">
            <div
              className={`text-center mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <h2 className="font-heading text-4xl md:text-5xl text-white mb-4">LIBRARY FACILITIES</h2>
              <p className="text-xl text-white/80">Modern amenities for comfortable learning and research</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {facilities.map((facility, index) => (
                <Card
                  key={index}
                  className={`bg-white/10 border-white/20 text-white text-center transition-all duration-500 hover:scale-105 animate-on-scroll ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="text-zoo-yellow-600 mb-4 flex justify-center">{facility.icon}</div>
                    <h3 className="font-heading text-lg mb-2">{facility.title}</h3>
                    <p className="text-white/80 text-sm">{facility.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 bg-zoo-teal-800">
          <div className="zoo-container">
            <div
              className={`text-center mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <h2 className="font-heading text-4xl md:text-5xl text-white mb-4">LIBRARY SERVICES</h2>
              <p className="text-xl text-white/80">Professional services to support your research and learning</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className={`bg-white/10 border-white/20 text-white animate-on-scroll ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <h3 className="font-heading text-lg mb-2 text-zoo-yellow-600">{service.title}</h3>
                    <p className="text-white/80 text-sm mb-3">{service.description}</p>
                    <p className="text-zoo-yellow-600 text-xs">{service.availability}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-16 bg-zoo-teal-700">
          <div className="zoo-container">
            <div
              className={`text-center mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <h2 className="font-heading text-4xl md:text-5xl text-white mb-4">LIBRARY GALLERY</h2>
              <p className="text-xl text-white/80">Explore our peaceful learning spaces and facilities</p>
            </div>

            <ImageGallery images={galleryImages} />
          </div>
        </section>

        {/* Hours & Guidelines */}
        <section className="py-16 bg-zoo-teal-800">
          <div className="zoo-container">
            <div className="grid md:grid-cols-2 gap-12">
              <Card
                className={`bg-white/10 border-white/20 text-white animate-on-scroll ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                <CardHeader>
                  <CardTitle className="font-heading text-2xl flex items-center gap-2">
                    <Clock className="w-6 h-6 text-zoo-yellow-600" />
                    Operating Hours
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Tuesday - Sunday</span>
                    <span className="text-zoo-yellow-600">9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Research Assistance</span>
                    <span className="text-zoo-yellow-600">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Monday</span>
                    <Badge variant="destructive" className="bg-red-500">
                      Closed
                    </Badge>
                  </div>
                  <div className="pt-4 border-t border-white/20">
                    <p className="text-white/80 text-sm">
                      <strong>Note:</strong> Library membership available for regular visitors and researchers
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card
                className={`bg-white/10 border-white/20 text-white animate-on-scroll stagger-2 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                <CardHeader>
                  <CardTitle className="font-heading text-2xl flex items-center gap-2">
                    <MapPin className="w-6 h-6 text-zoo-yellow-600" />
                    Location & Guidelines
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="font-medium mb-1">Location</p>
                    <p className="text-white/80">Education complex, adjacent to the visitor center</p>
                  </div>
                  <div>
                    <p className="font-medium mb-1">Library Rules</p>
                    <p className="text-white/80">
                      Maintain silence, no food/drinks in reading areas, handle books with care
                    </p>
                  </div>
                  <div>
                    <p className="font-medium mb-1">Membership</p>
                    <p className="text-white/80">Free membership for students, researchers, and regular visitors</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

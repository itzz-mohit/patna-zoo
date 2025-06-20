"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Flower2, Clock, MapPin, Heart, Camera, Leaf } from "lucide-react"
import { ImageGallery } from "@/components/image-gallery"

export default function RoseGardenPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const gardenCategories = [
    {
      id: "varieties",
      name: "Rose Varieties",
      items: [
        {
          name: "Hybrid Tea Roses",
          description: "Classic large-flowered roses with elegant form",
          colors: "Red, Pink, White, Yellow",
          season: "Year-round",
          count: "150+ varieties",
        },
        {
          name: "Floribunda Roses",
          description: "Cluster-flowering roses with abundant blooms",
          colors: "Mixed colors",
          season: "Spring to Fall",
          count: "80+ varieties",
        },
        {
          name: "Climbing Roses",
          description: "Vigorous roses perfect for arches and walls",
          colors: "Red, Pink, White",
          season: "Spring peak",
          count: "45+ varieties",
        },
        {
          name: "Miniature Roses",
          description: "Compact roses perfect for borders and containers",
          colors: "All colors",
          season: "Year-round",
          count: "60+ varieties",
        },
        {
          name: "Shrub Roses",
          description: "Hardy, disease-resistant landscape roses",
          colors: "Mixed varieties",
          season: "Extended bloom",
          count: "70+ varieties",
        },
        {
          name: "Heritage Roses",
          description: "Historic and antique rose varieties",
          colors: "Traditional colors",
          season: "Spring to Summer",
          count: "35+ varieties",
        },
      ],
    },
    {
      id: "seasons",
      name: "Seasonal Blooms",
      items: [
        {
          name: "Spring Season",
          description: "Peak blooming period with maximum variety",
          timing: "March - May",
          highlights: "New growth, fresh blooms",
          bestTime: "Early morning visits",
        },
        {
          name: "Summer Season",
          description: "Continuous blooming with heat-tolerant varieties",
          timing: "June - August",
          highlights: "Fragrant evening blooms",
          bestTime: "Evening visits recommended",
        },
        {
          name: "Monsoon Season",
          description: "Lush foliage with selective blooming",
          timing: "July - September",
          highlights: "Fresh green growth",
          bestTime: "Post-rain visits",
        },
        {
          name: "Winter Season",
          description: "Pruning season with winter-hardy varieties",
          timing: "December - February",
          highlights: "Garden maintenance, planning",
          bestTime: "Midday visits",
        },
        {
          name: "Festival Seasons",
          description: "Special displays during festivals",
          timing: "Diwali, Valentine's Day",
          highlights: "Themed arrangements",
          bestTime: "All day",
        },
        {
          name: "Rose Festival",
          description: "Annual celebration of roses",
          timing: "February - March",
          highlights: "Competitions, workshops",
          bestTime: "Weekend events",
        },
      ],
    },
    {
      id: "features",
      name: "Garden Features",
      items: [
        {
          name: "Rose Arches",
          description: "Beautiful climbing rose archways",
          location: "Main pathway",
          specialty: "Photo opportunities",
          maintenance: "Regular pruning",
        },
        {
          name: "Meditation Corner",
          description: "Peaceful seating area surrounded by roses",
          location: "Garden center",
          specialty: "Quiet reflection",
          maintenance: "Daily care",
        },
        {
          name: "Heritage Section",
          description: "Historic and rare rose varieties",
          location: "North section",
          specialty: "Educational displays",
          maintenance: "Special care",
        },
        {
          name: "Fragrance Garden",
          description: "Highly scented rose varieties",
          location: "East corner",
          specialty: "Aromatic experience",
          maintenance: "Organic methods",
        },
        {
          name: "Color Zones",
          description: "Roses arranged by color themes",
          location: "Throughout garden",
          specialty: "Visual impact",
          maintenance: "Seasonal rotation",
        },
        {
          name: "Children's Section",
          description: "Safe, low-maintenance rose varieties",
          location: "Near playground",
          specialty: "Educational tours",
          maintenance: "Child-safe practices",
        },
      ],
    },
    {
      id: "activities",
      name: "Garden Activities",
      items: [
        {
          name: "Guided Tours",
          description: "Expert-led tours of the rose garden",
          duration: "45 minutes",
          timing: "10 AM, 3 PM daily",
          price: "₹50 per person",
        },
        {
          name: "Photography Workshops",
          description: "Learn rose photography techniques",
          duration: "2 hours",
          timing: "Weekends only",
          price: "₹300 per person",
        },
        {
          name: "Gardening Workshops",
          description: "Rose cultivation and care techniques",
          duration: "3 hours",
          timing: "Monthly sessions",
          price: "₹500 per person",
        },
        {
          name: "Rose Festival Events",
          description: "Annual celebration with competitions",
          duration: "Full day",
          timing: "February-March",
          price: "Free entry",
        },
        {
          name: "School Programs",
          description: "Educational programs for students",
          duration: "1 hour",
          timing: "Weekdays only",
          price: "₹25 per student",
        },
        {
          name: "Wedding Photography",
          description: "Professional photo sessions in the garden",
          duration: "2-4 hours",
          timing: "By appointment",
          price: "₹2000+ per session",
        },
      ],
    },
  ]

  const facilities = [
    {
      icon: <Flower2 className="w-6 h-6" />,
      title: "400+ Rose Varieties",
      description: "Extensive collection of roses from around the world in various colors and forms",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Romantic Setting",
      description: "Perfect location for couples, weddings, and special occasions",
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Photography Paradise",
      description: "Stunning backdrops and natural lighting for professional photography",
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "Organic Gardening",
      description: "Eco-friendly practices and sustainable gardening methods",
    },
  ]

  const galleryImages = [
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Colorful rose garden in full bloom",
      title: "Rose Garden in Bloom",
      description: "Spectacular display of roses in peak season",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Rose archway with climbing roses",
      title: "Rose Archways",
      description: "Beautiful climbing roses creating natural arches",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Visitors enjoying the fragrance garden",
      title: "Fragrance Garden",
      description: "Visitors experiencing the aromatic rose varieties",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Heritage roses section",
      title: "Heritage Collection",
      description: "Rare and historic rose varieties",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Rose festival celebration",
      title: "Rose Festival",
      description: "Annual celebration with competitions and displays",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Meditation corner in rose garden",
      title: "Peaceful Meditation",
      description: "Quiet corner for reflection among roses",
    },
  ]

  return (
    <>
      <Navbar />

      <main>
        <HeroSection
          title="ROSE GARDEN"
          subtitle="A fragrant paradise with over 400 varieties of roses"
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
                <h2 className="font-heading text-4xl md:text-5xl text-white mb-6">GARDEN OF LOVE</h2>
                <p className="text-white/90 text-lg mb-4">
                  Step into our enchanting Rose Garden, home to over 400 varieties of roses from around the world. This
                  beautifully landscaped garden offers a sensory experience with vibrant colors, intoxicating
                  fragrances, and peaceful surroundings.
                </p>
                <p className="text-white/90 text-lg mb-4">
                  From classic hybrid teas to climbing roses that create natural archways, our garden showcases the
                  diversity and beauty of the queen of flowers. Perfect for romantic walks, photography, and peaceful
                  meditation.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-zoo-yellow-600" />
                    <span className="text-white">Open: 6:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-zoo-yellow-600" />
                    <span className="text-white">Western Section</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Flower2 className="w-5 h-5 text-zoo-yellow-600" />
                    <span className="text-white">400+ Varieties</span>
                  </div>
                </div>
              </div>

              <div
                className={`relative h-96 rounded-lg overflow-hidden transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Beautiful rose garden"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-zoo-teal-900/80 to-transparent p-6">
                  <p className="text-white/90 text-sm">Spectacular rose garden with hundreds of varieties</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Garden Features */}
        <section className="py-16 bg-zoo-teal-800">
          <div className="zoo-container">
            <div
              className={`text-center mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <h2 className="font-heading text-4xl md:text-5xl text-white mb-4">GARDEN HIGHLIGHTS</h2>
              <p className="text-xl text-white/80">Discover the beauty and diversity of our rose collection</p>
            </div>

            <Tabs defaultValue="varieties" className="max-w-6xl mx-auto">
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 bg-white/10 border-white/20 mb-8">
                {gardenCategories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="text-white data-[state=active]:bg-zoo-yellow-600 data-[state=active]:text-zoo-teal-900"
                  >
                    {category.name.split(" ")[0]}
                  </TabsTrigger>
                ))}
              </TabsList>

              {gardenCategories.map((category) => (
                <TabsContent key={category.id} value={category.id}>
                  <Card className="bg-white/10 border-white/20 text-white">
                    <CardHeader>
                      <CardTitle className="font-heading text-2xl text-center">{category.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-4">
                        {category.items.map((item, index) => (
                          <div key={index} className="flex justify-between items-start p-4 bg-white/5 rounded-lg">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="font-medium">{item.name}</span>
                                <Badge className="bg-pink-500 text-white text-xs px-2 py-0.5">
                                  <Flower2 className="w-3 h-3 mr-1" />
                                  BLOOM
                                </Badge>
                              </div>
                              <p className="text-white/70 text-sm mb-1">{item.description}</p>
                              {item.colors && <p className="text-zoo-yellow-600 text-xs">Colors: {item.colors}</p>}
                              {item.season && <p className="text-zoo-yellow-600 text-xs">Season: {item.season}</p>}
                              {item.timing && <p className="text-zoo-yellow-600 text-xs">Timing: {item.timing}</p>}
                              {item.location && (
                                <p className="text-zoo-yellow-600 text-xs">Location: {item.location}</p>
                              )}
                              {item.duration && (
                                <p className="text-zoo-yellow-600 text-xs">Duration: {item.duration}</p>
                              )}
                            </div>
                            {item.count && (
                              <div className="text-right ml-4">
                                <span className="text-sm font-bold text-zoo-yellow-600">{item.count}</span>
                              </div>
                            )}
                            {item.price && (
                              <div className="text-right ml-4">
                                <span className="text-lg font-bold text-zoo-yellow-600">{item.price}</span>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Facilities */}
        <section className="py-16 bg-zoo-teal-700">
          <div className="zoo-container">
            <div
              className={`text-center mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <h2 className="font-heading text-4xl md:text-5xl text-white mb-4">WHY VISIT ROSE GARDEN</h2>
              <p className="text-xl text-white/80">Experience the beauty and tranquility of our rose paradise</p>
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

        {/* Gallery */}
        <section className="py-16 bg-zoo-teal-800">
          <div className="zoo-container">
            <div
              className={`text-center mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <h2 className="font-heading text-4xl md:text-5xl text-white mb-4">ROSE GARDEN GALLERY</h2>
              <p className="text-xl text-white/80">Explore the stunning beauty of our rose collection</p>
            </div>

            <ImageGallery images={galleryImages} />
          </div>
        </section>

        {/* Location & Hours */}
        <section className="py-16 bg-zoo-teal-700">
          <div className="zoo-container">
            <div className="grid md:grid-cols-2 gap-12">
              <Card
                className={`bg-white/10 border-white/20 text-white animate-on-scroll ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                <CardHeader>
                  <CardTitle className="font-heading text-2xl flex items-center gap-2">
                    <Clock className="w-6 h-6 text-zoo-yellow-600" />
                    Garden Hours
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Summer (Apr-Sep)</span>
                    <span className="text-zoo-yellow-600">6:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Winter (Oct-Mar)</span>
                    <span className="text-zoo-yellow-600">6:30 AM - 5:30 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Monday</span>
                    <Badge variant="destructive" className="bg-red-500">
                      Closed
                    </Badge>
                  </div>
                  <div className="pt-4 border-t border-white/20">
                    <p className="text-white/80 text-sm">
                      <strong>Best Time:</strong> Early morning or late afternoon for optimal fragrance and lighting
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
                    Location & Events
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="font-medium mb-1">Location</p>
                    <p className="text-white/80">Western section of Patna Zoo, near the botanical area</p>
                  </div>
                  <div>
                    <p className="font-medium mb-1">Peak Season</p>
                    <p className="text-white/80">February to April for maximum blooms and fragrance</p>
                  </div>
                  <div>
                    <p className="font-medium mb-1">Special Events</p>
                    <p className="text-white/80">Annual Rose Festival, photography workshops, and guided tours</p>
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

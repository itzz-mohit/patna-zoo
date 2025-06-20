"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Waves, Clock, MapPin, Droplets, Fish, TreePine } from "lucide-react"
import { ImageGallery } from "@/components/image-gallery"

export default function JalUdyanPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const waterFeatures = [
    {
      id: "fountains",
      name: "Water Fountains",
      features: [
        {
          name: "Musical Fountain",
          description: "Synchronized water and light show with music",
          timing: "Every 30 minutes",
          active: true,
        },
        {
          name: "Dancing Fountain",
          description: "Dynamic water patterns with colorful LED lights",
          timing: "Continuous",
          active: true,
        },
        { name: "Cascade Fountain", description: "Multi-tiered waterfall effect", timing: "Continuous", active: true },
        {
          name: "Mist Fountain",
          description: "Fine water mist for cooling effect",
          timing: "Peak hours",
          active: true,
        },
        {
          name: "Interactive Fountain",
          description: "Motion-sensor activated water jets",
          timing: "10 AM - 5 PM",
          active: true,
        },
        {
          name: "Garden Fountain",
          description: "Traditional fountain surrounded by flowers",
          timing: "Continuous",
          active: true,
        },
      ],
    },
    {
      id: "ponds",
      name: "Water Bodies",
      features: [
        {
          name: "Lotus Pond",
          description: "Beautiful lotus flowers and water lilies",
          season: "Monsoon to Winter",
          active: true,
        },
        { name: "Fish Pond", description: "Ornamental fish viewing area", timing: "All day", active: true },
        {
          name: "Reflection Pool",
          description: "Calm water surface for peaceful meditation",
          timing: "Sunrise to Sunset",
          active: true,
        },
        {
          name: "Children's Splash Pool",
          description: "Safe shallow water play area for kids",
          timing: "10 AM - 4 PM",
          active: true,
        },
        {
          name: "Koi Pond",
          description: "Japanese-style pond with colorful Koi fish",
          timing: "All day",
          active: true,
        },
        { name: "Water Garden", description: "Aquatic plants and water features", season: "Year-round", active: true },
      ],
    },
    {
      id: "activities",
      name: "Water Activities",
      features: [
        {
          name: "Boat Rides",
          description: "Pedal boats and row boats available",
          timing: "9 AM - 5 PM",
          price: "₹50 per 30 min",
        },
        {
          name: "Fish Feeding",
          description: "Feed the fish in designated ponds",
          timing: "10 AM - 4 PM",
          price: "₹10 per packet",
        },
        {
          name: "Water Photography",
          description: "Professional photography sessions",
          timing: "By appointment",
          price: "₹500 per hour",
        },
        {
          name: "Nature Walks",
          description: "Guided walks around water features",
          timing: "Morning & Evening",
          price: "Free",
        },
        {
          name: "Meditation Sessions",
          description: "Peaceful meditation by the water",
          timing: "6 AM - 8 AM",
          price: "Free",
        },
        {
          name: "Educational Tours",
          description: "Learn about aquatic ecosystems",
          timing: "School hours",
          price: "₹20 per student",
        },
      ],
    },
    {
      id: "plants",
      name: "Aquatic Flora",
      features: [
        {
          name: "Water Lilies",
          description: "Various species of beautiful water lilies",
          season: "Monsoon to Winter",
          active: true,
        },
        {
          name: "Lotus Flowers",
          description: "Sacred lotus in different colors",
          season: "June to November",
          active: true,
        },
        { name: "Water Hyacinth", description: "Purple flowering aquatic plants", season: "Monsoon", active: true },
        { name: "Cattails", description: "Tall marsh plants around pond edges", season: "Year-round", active: true },
        {
          name: "Water Ferns",
          description: "Floating ferns for natural filtration",
          season: "Year-round",
          active: true,
        },
        {
          name: "Bamboo Groves",
          description: "Bamboo plantations near water bodies",
          season: "Year-round",
          active: true,
        },
      ],
    },
  ]

  const facilities = [
    {
      icon: <Waves className="w-6 h-6" />,
      title: "Natural Water Features",
      description: "Multiple fountains, ponds, and water bodies creating a serene environment",
    },
    {
      icon: <Fish className="w-6 h-6" />,
      title: "Aquatic Life",
      description: "Diverse fish species and aquatic animals in natural habitats",
    },
    {
      icon: <TreePine className="w-6 h-6" />,
      title: "Lush Greenery",
      description: "Beautiful landscaping with aquatic plants and surrounding gardens",
    },
    {
      icon: <Droplets className="w-6 h-6" />,
      title: "Clean Environment",
      description: "Well-maintained water quality and eco-friendly practices",
    },
  ]

  const galleryImages = [
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Musical fountain show",
      title: "Musical Fountain Show",
      description: "Spectacular water and light display",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Lotus pond in bloom",
      title: "Lotus Pond",
      description: "Beautiful lotus flowers in full bloom",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Children playing in splash pool",
      title: "Children's Splash Pool",
      description: "Safe water play area for kids",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Koi fish swimming",
      title: "Koi Fish Pond",
      description: "Colorful Koi fish in crystal clear water",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Peaceful meditation area",
      title: "Meditation Garden",
      description: "Tranquil space for reflection and peace",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Water garden landscape",
      title: "Water Garden",
      description: "Beautifully landscaped aquatic garden",
    },
  ]

  return (
    <>
      <Navbar />

      <main>
        <HeroSection
          title="JAL UDYAN"
          subtitle="A serene water garden paradise in the heart of the zoo"
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
                <h2 className="font-heading text-4xl md:text-5xl text-white mb-6">WATER WONDERLAND</h2>
                <p className="text-white/90 text-lg mb-4">
                  Jal Udyan is a magnificent water garden that offers visitors a peaceful retreat with its stunning
                  collection of fountains, ponds, and aquatic life. This beautifully landscaped area combines natural
                  water features with artistic design elements.
                </p>
                <p className="text-white/90 text-lg mb-4">
                  From musical fountains that dance to rhythm to serene lotus ponds that bloom with vibrant colors, Jal
                  Udyan provides a perfect escape from the bustling city life. Enjoy boat rides, feed the fish, or
                  simply relax by the water's edge.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-zoo-yellow-600" />
                    <span className="text-white">Open: 6:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-zoo-yellow-600" />
                    <span className="text-white">Eastern Section</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Waves className="w-5 h-5 text-zoo-yellow-600" />
                    <span className="text-white">Multiple Water Features</span>
                  </div>
                </div>
              </div>

              <div
                className={`relative h-96 rounded-lg overflow-hidden transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Jal Udyan water garden"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-zoo-teal-900/80 to-transparent p-6">
                  <p className="text-white/90 text-sm">Peaceful water garden with musical fountains</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Water Features */}
        <section className="py-16 bg-zoo-teal-800">
          <div className="zoo-container">
            <div
              className={`text-center mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <h2 className="font-heading text-4xl md:text-5xl text-white mb-4">WATER FEATURES</h2>
              <p className="text-xl text-white/80">Discover the beauty of our aquatic attractions</p>
            </div>

            <Tabs defaultValue="fountains" className="max-w-6xl mx-auto">
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 bg-white/10 border-white/20 mb-8">
                {waterFeatures.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="text-white data-[state=active]:bg-zoo-yellow-600 data-[state=active]:text-zoo-teal-900"
                  >
                    {category.name.split(" ")[0]}
                  </TabsTrigger>
                ))}
              </TabsList>

              {waterFeatures.map((category) => (
                <TabsContent key={category.id} value={category.id}>
                  <Card className="bg-white/10 border-white/20 text-white">
                    <CardHeader>
                      <CardTitle className="font-heading text-2xl text-center">{category.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-4">
                        {category.features.map((feature, index) => (
                          <div key={index} className="flex justify-between items-start p-4 bg-white/5 rounded-lg">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="font-medium">{feature.name}</span>
                                {feature.active && (
                                  <Badge className="bg-green-500 text-white text-xs px-2 py-0.5">
                                    <Waves className="w-3 h-3 mr-1" />
                                    ACTIVE
                                  </Badge>
                                )}
                              </div>
                              <p className="text-white/70 text-sm mb-1">{feature.description}</p>
                              {feature.timing && (
                                <p className="text-zoo-yellow-600 text-xs">Timing: {feature.timing}</p>
                              )}
                              {feature.season && (
                                <p className="text-zoo-yellow-600 text-xs">Season: {feature.season}</p>
                              )}
                            </div>
                            {feature.price && (
                              <div className="text-right ml-4">
                                <span className="text-lg font-bold text-zoo-yellow-600">{feature.price}</span>
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
              <h2 className="font-heading text-4xl md:text-5xl text-white mb-4">WHY VISIT JAL UDYAN</h2>
              <p className="text-xl text-white/80">Experience the tranquility of our water garden paradise</p>
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
              <h2 className="font-heading text-4xl md:text-5xl text-white mb-4">JAL UDYAN GALLERY</h2>
              <p className="text-xl text-white/80">Explore the beauty of our water garden through images</p>
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
                    Operating Hours
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Summer (Apr-Sep)</span>
                    <span className="text-zoo-yellow-600">6:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Winter (Oct-Mar)</span>
                    <span className="text-zoo-yellow-600">5:30 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Monday</span>
                    <Badge variant="destructive" className="bg-red-500">
                      Closed
                    </Badge>
                  </div>
                  <div className="pt-4 border-t border-white/20">
                    <p className="text-white/80 text-sm">
                      <strong>Note:</strong> Musical fountain shows every 30 minutes during peak hours
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
                    Location & Activities
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="font-medium mb-1">Location</p>
                    <p className="text-white/80">Eastern section of Patna Zoo, near the main entrance</p>
                  </div>
                  <div>
                    <p className="font-medium mb-1">Best Time to Visit</p>
                    <p className="text-white/80">Early morning or evening for peaceful experience</p>
                  </div>
                  <div>
                    <p className="font-medium mb-1">Special Features</p>
                    <p className="text-white/80">Musical fountain shows, boat rides, and meditation areas</p>
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

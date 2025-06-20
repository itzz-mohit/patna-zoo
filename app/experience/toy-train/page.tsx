"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Train, Clock, MapPin, Star, Users, Ticket } from "lucide-react"
import { ImageGallery } from "@/components/image-gallery"

export default function ToyTrainPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const trainInfo = [
    {
      id: "route",
      name: "Route & Stops",
      items: [
        {
          name: "Main Entrance Station",
          time: "Start",
          description: "Journey begins at the main entrance plaza",
          highlight: true,
        },
        {
          name: "Tiger Enclosure Stop",
          time: "3 min",
          description: "View the majestic Bengal tigers",
          highlight: false,
        },
        {
          name: "Elephant Habitat",
          time: "6 min",
          description: "Watch elephants in their spacious home",
          highlight: true,
        },
        {
          name: "Bird Aviary Junction",
          time: "9 min",
          description: "Colorful birds and exotic species",
          highlight: false,
        },
        {
          name: "Deer Park Station",
          time: "12 min",
          description: "Peaceful deer grazing in open meadows",
          highlight: false,
        },
        {
          name: "Return to Main Station",
          time: "15 min",
          description: "Complete the scenic loop journey",
          highlight: true,
        },
      ],
    },
    {
      id: "schedule",
      name: "Daily Schedule",
      items: [
        { name: "First Train", time: "9:00 AM", description: "Start your day with a scenic ride", highlight: true },
        {
          name: "Morning Rides",
          time: "9:30 AM - 12:00 PM",
          description: "Every 30 minutes during morning hours",
          highlight: false,
        },
        {
          name: "Lunch Break",
          time: "12:00 PM - 1:00 PM",
          description: "Train maintenance and staff break",
          highlight: false,
        },
        {
          name: "Afternoon Rides",
          time: "1:00 PM - 4:30 PM",
          description: "Every 30 minutes during afternoon",
          highlight: false,
        },
        { name: "Evening Rides", time: "4:30 PM - 5:30 PM", description: "Final rides of the day", highlight: false },
        { name: "Last Train", time: "5:30 PM", description: "Don't miss the final journey", highlight: true },
      ],
    },
    {
      id: "pricing",
      name: "Ticket Pricing",
      items: [
        { name: "Adult Ticket", time: "₹30", description: "Single journey for adults (13+ years)", highlight: true },
        { name: "Child Ticket", time: "₹20", description: "Single journey for children (3-12 years)", highlight: true },
        {
          name: "Senior Citizen",
          time: "₹25",
          description: "Discounted rate for seniors (60+ years)",
          highlight: false,
        },
        {
          name: "Group Booking (10+)",
          time: "₹25",
          description: "Special rate for groups of 10 or more adults",
          highlight: false,
        },
        { name: "School Groups", time: "₹15", description: "Educational trips for school children", highlight: false },
        { name: "Family Package", time: "₹100", description: "2 adults + 2 children combo offer", highlight: true },
      ],
    },
    {
      id: "features",
      name: "Train Features",
      items: [
        {
          name: "Electric Engine",
          time: "Eco-friendly",
          description: "Clean electric power with zero emissions",
          highlight: true,
        },
        {
          name: "Comfortable Seating",
          time: "40 passengers",
          description: "Cushioned seats with safety barriers",
          highlight: false,
        },
        {
          name: "Audio Commentary",
          time: "Multi-language",
          description: "Informative commentary in Hindi and English",
          highlight: true,
        },
        {
          name: "Safety Features",
          time: "Certified",
          description: "Emergency brakes and trained operators",
          highlight: false,
        },
        {
          name: "Weather Protection",
          time: "All seasons",
          description: "Covered coaches for rain and sun protection",
          highlight: false,
        },
        {
          name: "Photography Stops",
          time: "Scenic views",
          description: "Perfect spots for memorable photos",
          highlight: true,
        },
      ],
    },
  ]

  const trainFeatures = [
    {
      icon: <Train className="w-6 h-6" />,
      title: "Scenic Journey",
      description: "15-minute ride through the most beautiful parts of the zoo",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Family Friendly",
      description: "Perfect for all ages with comfortable seating and safety features",
    },
    {
      icon: <Ticket className="w-6 h-6" />,
      title: "Affordable Rates",
      description: "Reasonable pricing with special discounts for groups and families",
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Educational Experience",
      description: "Learn about animals and conservation during your journey",
    },
  ]

  return (
    <>
      <Navbar />

      <main>
        <HeroSection
          title="TOY TRAIN"
          subtitle="A delightful journey through the heart of the zoo"
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
                <h2 className="font-heading text-4xl md:text-5xl text-white mb-6">ALL ABOARD THE ADVENTURE</h2>
                <p className="text-white/90 text-lg mb-4">
                  Experience the magic of Patna Zoo from a unique perspective aboard our charming toy train. This
                  15-minute scenic journey takes you through the most spectacular areas of the zoo, offering comfortable
                  seating and informative commentary about the wildlife you'll encounter.
                </p>
                <p className="text-white/90 text-lg mb-4">
                  Perfect for families, elderly visitors, and anyone who wants to explore the zoo in comfort, our
                  electric train provides an eco-friendly way to see the major attractions while learning about
                  conservation efforts and animal care.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-zoo-yellow-600" />
                    <span className="text-white">Every 30 minutes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-zoo-yellow-600" />
                    <span className="text-white">Main Entrance Station</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Train className="w-5 h-5 text-zoo-yellow-600" />
                    <span className="text-white">15-minute Journey</span>
                  </div>
                </div>
              </div>

              <div
                className={`relative h-96 rounded-lg overflow-hidden transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Toy train at Patna Zoo"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-zoo-teal-900/80 to-transparent p-6">
                  <p className="text-white/90 text-sm">Comfortable and scenic journey through the zoo</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Train Information */}
        <section className="py-16 bg-zoo-teal-800">
          <div className="zoo-container">
            <div
              className={`text-center mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <h2 className="font-heading text-4xl md:text-5xl text-white mb-4">TRAIN INFORMATION</h2>
              <p className="text-xl text-white/80">Everything you need to know for your journey</p>
            </div>

            <Tabs defaultValue="route" className="max-w-6xl mx-auto">
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 bg-white/10 border-white/20 mb-8">
                {trainInfo.map((info) => (
                  <TabsTrigger
                    key={info.id}
                    value={info.id}
                    className="text-white data-[state=active]:bg-zoo-yellow-600 data-[state=active]:text-zoo-teal-900"
                  >
                    {info.name.split(" ")[0]}
                  </TabsTrigger>
                ))}
              </TabsList>

              {trainInfo.map((info) => (
                <TabsContent key={info.id} value={info.id}>
                  <Card className="bg-white/10 border-white/20 text-white">
                    <CardHeader>
                      <CardTitle className="font-heading text-2xl text-center">{info.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-4">
                        {info.items.map((item, index) => (
                          <div key={index} className="flex justify-between items-start p-4 bg-white/5 rounded-lg">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="font-medium">{item.name}</span>
                                {item.highlight && (
                                  <Badge className="bg-zoo-yellow-600 text-zoo-teal-900 text-xs px-2 py-0.5">
                                    <Star className="w-3 h-3 mr-1" />
                                    HIGHLIGHT
                                  </Badge>
                                )}
                              </div>
                              <p className="text-white/70 text-sm">{item.description}</p>
                            </div>
                            <div className="text-right ml-4">
                              <span className="text-lg font-bold text-zoo-yellow-600">{item.time}</span>
                            </div>
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

        {/* Train Features */}
        <section className="py-16 bg-zoo-teal-700">
          <div className="zoo-container">
            <div
              className={`text-center mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <h2 className="font-heading text-4xl md:text-5xl text-white mb-4">WHY RIDE OUR TRAIN</h2>
              <p className="text-xl text-white/80">Comfort, convenience, and conservation education</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {trainFeatures.map((feature, index) => (
                <Card
                  key={index}
                  className={`bg-white/10 border-white/20 text-white text-center transition-all duration-500 hover:scale-105 animate-on-scroll ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="text-zoo-yellow-600 mb-4 flex justify-center">{feature.icon}</div>
                    <h3 className="font-heading text-lg mb-2">{feature.title}</h3>
                    <p className="text-white/80 text-sm">{feature.description}</p>
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
              <h2 className="font-heading text-4xl md:text-5xl text-white mb-4">TRAIN GALLERY</h2>
              <p className="text-xl text-white/80">See the train and the beautiful journey it offers</p>
            </div>

            <ImageGallery
              images={[
                {
                  src: "/placeholder.svg?height=400&width=600",
                  alt: "Toy train at main station",
                  title: "Main Station",
                  description: "The journey begins at our beautifully designed main station",
                },
                {
                  src: "/placeholder.svg?height=400&width=600",
                  alt: "Train passing tiger enclosure",
                  title: "Tiger Enclosure View",
                  description: "Get close-up views of majestic tigers during the journey",
                },
                {
                  src: "/placeholder.svg?height=400&width=600",
                  alt: "Comfortable train interior",
                  title: "Comfortable Seating",
                  description: "Cushioned seats with safety features for all passengers",
                },
                {
                  src: "/placeholder.svg?height=400&width=600",
                  alt: "Train route through zoo",
                  title: "Scenic Route",
                  description: "Beautiful landscapes and animal habitats along the way",
                },
                {
                  src: "/placeholder.svg?height=400&width=600",
                  alt: "Families enjoying train ride",
                  title: "Family Fun",
                  description: "Perfect activity for families with children of all ages",
                },
                {
                  src: "/placeholder.svg?height=400&width=600",
                  alt: "Train at elephant habitat",
                  title: "Elephant Habitat Stop",
                  description: "Watch elephants in their natural-like environment",
                },
              ]}
            />
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
                    Operating Schedule
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">First Train</span>
                    <span className="text-zoo-yellow-600">9:00 AM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Last Train</span>
                    <span className="text-zoo-yellow-600">5:30 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Frequency</span>
                    <span className="text-zoo-yellow-600">Every 30 minutes</span>
                  </div>
                  <div className="pt-4 border-t border-white/20">
                    <p className="text-white/80 text-sm">
                      <strong>Note:</strong> Service may be suspended during heavy rain or maintenance
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
                    Booking & Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="font-medium mb-1">Ticket Counter</p>
                    <p className="text-white/80">Located at the main entrance station</p>
                  </div>
                  <div>
                    <p className="font-medium mb-1">Capacity</p>
                    <p className="text-white/80">40 passengers per journey</p>
                  </div>
                  <div>
                    <p className="font-medium mb-1">Special Services</p>
                    <p className="text-white/80">Group bookings, wheelchair accessibility available</p>
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

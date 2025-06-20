"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Car, Clock, MapPin, Users, Zap, Shield } from "lucide-react"
import { ImageGallery } from "@/components/image-gallery"

export default function GolfCartsPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const cartCategories = [
    {
      id: "rentals",
      name: "Cart Rentals",
      items: [
        {
          name: "Standard 4-Seater",
          price: 300,
          description: "Comfortable electric cart for small families",
          duration: "Per hour",
          capacity: "4 adults",
          features: "Basic comfort, storage basket",
        },
        {
          name: "Family 6-Seater",
          price: 450,
          description: "Spacious cart perfect for larger families",
          duration: "Per hour",
          capacity: "6 adults",
          features: "Extra comfort, larger storage",
        },
        {
          name: "Accessible Cart",
          price: 350,
          description: "Wheelchair accessible with special features",
          duration: "Per hour",
          capacity: "4 adults + wheelchair",
          features: "Ramp access, safety straps",
        },
        {
          name: "Half-Day Rental",
          price: 1200,
          description: "4-hour rental with flexible timing",
          duration: "4 hours",
          capacity: "4-6 adults",
          features: "Extended use, priority booking",
        },
        {
          name: "Full-Day Rental",
          price: 2000,
          description: "Complete day rental for thorough exploration",
          duration: "8 hours",
          capacity: "4-6 adults",
          features: "All-day access, premium service",
        },
        {
          name: "Group Package",
          price: 2500,
          description: "Multiple carts for large groups",
          duration: "Per hour",
          capacity: "20+ people",
          features: "Bulk discount, group coordination",
        },
      ],
    },
    {
      id: "routes",
      name: "Tour Routes",
      items: [
        {
          name: "Complete Zoo Tour",
          description: "Comprehensive tour covering all major attractions",
          duration: "3-4 hours",
          distance: "8 km",
          highlights: "All animal sections, gardens, facilities",
          difficulty: "Easy",
        },
        {
          name: "Express Animal Tour",
          description: "Quick tour focusing on popular animals",
          duration: "1.5 hours",
          distance: "4 km",
          highlights: "Big cats, elephants, primates",
          difficulty: "Easy",
        },
        {
          name: "Garden Tour",
          description: "Scenic route through botanical areas",
          duration: "2 hours",
          distance: "5 km",
          highlights: "Rose garden, Jal Udyan, plant collections",
          difficulty: "Easy",
        },
        {
          name: "Photography Route",
          description: "Best spots for wildlife and nature photography",
          duration: "2.5 hours",
          distance: "6 km",
          highlights: "Scenic viewpoints, animal enclosures",
          difficulty: "Moderate",
        },
        {
          name: "Educational Circuit",
          description: "Focus on conservation and educational displays",
          duration: "2 hours",
          distance: "4.5 km",
          highlights: "Breeding centers, information boards",
          difficulty: "Easy",
        },
        {
          name: "Custom Route",
          description: "Personalized route based on your interests",
          duration: "Flexible",
          distance: "Variable",
          highlights: "Your choice of attractions",
          difficulty: "Variable",
        },
      ],
    },
    {
      id: "features",
      name: "Cart Features",
      items: [
        {
          name: "Eco-Friendly Power",
          description: "100% electric vehicles with zero emissions",
          benefit: "Environmental protection",
          maintenance: "Solar charging stations",
          warranty: "Full service included",
        },
        {
          name: "Safety Features",
          description: "Comprehensive safety equipment and protocols",
          benefit: "Secure transportation",
          maintenance: "Regular safety checks",
          warranty: "Insurance covered",
        },
        {
          name: "Comfort Amenities",
          description: "Cushioned seats, weather protection, storage",
          benefit: "Comfortable journey",
          maintenance: "Daily cleaning",
          warranty: "Comfort guarantee",
        },
        {
          name: "GPS Navigation",
          description: "Built-in navigation system with route guidance",
          benefit: "Easy navigation",
          maintenance: "Updated maps",
          warranty: "Technical support",
        },
        {
          name: "Audio Guide",
          description: "Multilingual audio commentary system",
          benefit: "Educational experience",
          maintenance: "Content updates",
          warranty: "Audio quality assured",
        },
        {
          name: "Emergency Support",
          description: "24/7 emergency assistance and breakdown service",
          benefit: "Peace of mind",
          maintenance: "Rapid response team",
          warranty: "Complete coverage",
        },
      ],
    },
    {
      id: "booking",
      name: "Booking Info",
      items: [
        {
          name: "Online Booking",
          price: 0,
          description: "Book in advance through our website",
          discount: "10% early bird discount",
          validity: "24 hours cancellation",
          payment: "Multiple payment options",
        },
        {
          name: "Walk-in Rental",
          price: 50,
          description: "On-spot rental subject to availability",
          discount: "No advance discount",
          validity: "Same day only",
          payment: "Cash or card accepted",
        },
        {
          name: "Group Booking",
          price: 0,
          description: "Special rates for groups of 10+ people",
          discount: "15-25% group discount",
          validity: "Flexible terms",
          payment: "Corporate billing available",
        },
        {
          name: "Season Pass",
          price: 5000,
          description: "Unlimited cart access for 3 months",
          discount: "Best value option",
          validity: "90 days from purchase",
          payment: "One-time payment",
        },
        {
          name: "Student Discount",
          price: 0,
          description: "Special rates for students with valid ID",
          discount: "20% student discount",
          validity: "Valid ID required",
          payment: "Student verification needed",
        },
        {
          name: "Senior Citizen",
          price: 0,
          description: "Discounted rates for senior citizens",
          discount: "25% senior discount",
          validity: "Age verification required",
          payment: "Special consideration",
        },
      ],
    },
  ]

  const facilities = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Eco-Friendly Electric",
      description: "100% electric vehicles with zero emissions and solar charging stations",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Multiple Capacity Options",
      description: "Carts available for 4-6 people with accessibility options",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Safety First",
      description: "Comprehensive safety features and regular maintenance checks",
    },
    {
      icon: <Car className="w-6 h-6" />,
      title: "Comfortable Ride",
      description: "Cushioned seats, weather protection, and smooth operation",
    },
  ]

  const galleryImages = [
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Family enjoying golf cart tour",
      title: "Family Cart Tours",
      description: "Comfortable transportation for the whole family",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Electric golf cart at charging station",
      title: "Eco-Friendly Carts",
      description: "100% electric vehicles with solar charging",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Accessible golf cart with ramp",
      title: "Accessible Options",
      description: "Wheelchair accessible carts available",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Golf cart on scenic zoo route",
      title: "Scenic Routes",
      description: "Beautiful pathways throughout the zoo",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Group of golf carts for large families",
      title: "Group Rentals",
      description: "Multiple carts for large groups and events",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Golf cart rental station",
      title: "Rental Station",
      description: "Convenient pickup and drop-off locations",
    },
  ]

  return (
    <>
      <Navbar />

      <main>
        <HeroSection
          title="GOLF CARTS"
          subtitle="Comfortable and eco-friendly transportation around the zoo"
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
                <h2 className="font-heading text-4xl md:text-5xl text-white mb-6">COMFORTABLE EXPLORATION</h2>
                <p className="text-white/90 text-lg mb-4">
                  Explore Patna Zoo in comfort and style with our eco-friendly electric golf carts. Perfect for
                  families, elderly visitors, and anyone who wants to cover more ground while conserving energy for
                  enjoying the attractions.
                </p>
                <p className="text-white/90 text-lg mb-4">
                  Our fleet of well-maintained electric carts offers a quiet, emission-free way to navigate the zoo's
                  extensive pathways. Choose from various cart sizes and tour routes to customize your perfect zoo
                  experience.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-zoo-yellow-600" />
                    <span className="text-white">Available: 9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-zoo-yellow-600" />
                    <span className="text-white">Multiple Pickup Points</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-zoo-yellow-600" />
                    <span className="text-white">100% Electric</span>
                  </div>
                </div>
              </div>

              <div
                className={`relative h-96 rounded-lg overflow-hidden transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Electric golf cart at Patna Zoo"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-zoo-teal-900/80 to-transparent p-6">
                  <p className="text-white/90 text-sm">Eco-friendly electric carts for comfortable zoo exploration</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cart Services */}
        <section className="py-16 bg-zoo-teal-800">
          <div className="zoo-container">
            <div
              className={`text-center mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <h2 className="font-heading text-4xl md:text-5xl text-white mb-4">CART SERVICES</h2>
              <p className="text-xl text-white/80">Choose the perfect cart and route for your zoo adventure</p>
            </div>

            <Tabs defaultValue="rentals" className="max-w-6xl mx-auto">
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 bg-white/10 border-white/20 mb-8">
                {cartCategories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="text-white data-[state=active]:bg-zoo-yellow-600 data-[state=active]:text-zoo-teal-900"
                  >
                    {category.name.split(" ")[0]}
                  </TabsTrigger>
                ))}
              </TabsList>

              {cartCategories.map((category) => (
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
                                <Badge className="bg-green-500 text-white text-xs px-2 py-0.5">
                                  <Car className="w-3 h-3 mr-1" />
                                  ECO
                                </Badge>
                              </div>
                              <p className="text-white/70 text-sm mb-1">{item.description}</p>
                              {item.duration && (
                                <p className="text-zoo-yellow-600 text-xs">Duration: {item.duration}</p>
                              )}
                              {item.capacity && (
                                <p className="text-zoo-yellow-600 text-xs">Capacity: {item.capacity}</p>
                              )}
                              {item.features && <p className="text-white/60 text-xs">Features: {item.features}</p>}
                              {item.distance && (
                                <p className="text-zoo-yellow-600 text-xs">Distance: {item.distance}</p>
                              )}
                              {item.highlights && (
                                <p className="text-white/60 text-xs">Highlights: {item.highlights}</p>
                              )}
                              {item.benefit && <p className="text-zoo-yellow-600 text-xs">Benefit: {item.benefit}</p>}
                              {item.discount && <p className="text-green-400 text-xs">Offer: {item.discount}</p>}
                            </div>
                            {item.price !== undefined && item.price > 0 && (
                              <div className="text-right ml-4">
                                <span className="text-lg font-bold text-zoo-yellow-600">₹{item.price}</span>
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
              <h2 className="font-heading text-4xl md:text-5xl text-white mb-4">WHY CHOOSE OUR CARTS</h2>
              <p className="text-xl text-white/80">Experience comfort, safety, and environmental responsibility</p>
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
              <h2 className="font-heading text-4xl md:text-5xl text-white mb-4">CART GALLERY</h2>
              <p className="text-xl text-white/80">See our fleet and facilities in action</p>
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
                    <span className="font-medium">Tuesday - Sunday</span>
                    <span className="text-zoo-yellow-600">9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Monday</span>
                    <Badge variant="destructive" className="bg-red-500">
                      Closed
                    </Badge>
                  </div>
                  <div className="pt-4 border-t border-white/20">
                    <p className="text-white/80 text-sm">
                      <strong>Note:</strong> Last rental 2 hours before zoo closing time
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
                    Pickup Locations
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="font-medium mb-1">Main Entrance</p>
                    <p className="text-white/80">Primary rental station with full fleet</p>
                  </div>
                  <div>
                    <p className="font-medium mb-1">Central Plaza</p>
                    <p className="text-white/80">Mid-zoo pickup point for convenience</p>
                  </div>
                  <div>
                    <p className="font-medium mb-1">Booking</p>
                    <p className="text-white/80">Online booking recommended, walk-ins welcome</p>
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

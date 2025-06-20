"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { EventsCarousel } from "@/components/events-carousel"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, MapPin, Users, Star } from "lucide-react"

export default function EventsPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const upcomingEvents = [
    {
      id: 1,
      title: "Wildlife Conservation Week",
      date: "June 15-21, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Main Amphitheater",
      description:
        "A week-long celebration of wildlife conservation with expert talks, interactive workshops, and special animal presentations.",
      image: "/placeholder.svg?height=300&width=400",
      category: "Education",
      featured: true,
      price: "Free with admission",
      capacity: "200 people",
    },
    {
      id: 2,
      title: "Night Safari Experience",
      date: "Every Saturday in June",
      time: "7:00 PM - 9:00 PM",
      location: "Throughout Zoo",
      description: "Experience the zoo after dark and discover how animals behave when the sun goes down.",
      image: "/placeholder.svg?height=300&width=400",
      category: "Experience",
      featured: true,
      price: "₹500 per person",
      capacity: "50 people",
    },
    {
      id: 3,
      title: "Photography Workshop",
      date: "June 10, 2025",
      time: "9:00 AM - 12:00 PM",
      location: "Various locations",
      description: "Learn wildlife photography techniques from professional photographers.",
      image: "/placeholder.svg?height=300&width=400",
      category: "Workshop",
      featured: false,
      price: "₹1,200 per person",
      capacity: "20 people",
    },
    {
      id: 4,
      title: "Children's Zoo Camp",
      date: "June 25-27, 2025",
      time: "9:00 AM - 3:00 PM",
      location: "Education Center",
      description: "Three-day camp for children aged 8-12 to learn about animal care and conservation.",
      image: "/placeholder.svg?height=300&width=400",
      category: "Education",
      featured: false,
      price: "₹2,500 per child",
      capacity: "30 children",
    },
    {
      id: 5,
      title: "Keeper for a Day",
      date: "July 5, 2025",
      time: "8:00 AM - 4:00 PM",
      location: "Behind the scenes",
      description: "Shadow our animal keepers and learn what it takes to care for zoo animals.",
      image: "/placeholder.svg?height=300&width=400",
      category: "Experience",
      featured: false,
      price: "₹3,000 per person",
      capacity: "10 people",
    },
    {
      id: 6,
      title: "World Elephant Day Celebration",
      date: "August 12, 2025",
      time: "10:00 AM - 5:00 PM",
      location: "Elephant Habitat",
      description: "Special activities and presentations celebrating our elephant conservation efforts.",
      image: "/placeholder.svg?height=300&width=400",
      category: "Celebration",
      featured: true,
      price: "Free with admission",
      capacity: "Unlimited",
    },
  ]

  const pastEvents = [
    {
      id: 7,
      title: "Earth Day Festival",
      date: "April 22, 2024",
      description: "Celebrated Earth Day with environmental workshops and tree planting activities.",
      image: "/placeholder.svg?height=300&width=400",
      category: "Celebration",
    },
    {
      id: 8,
      title: "Tiger Conservation Symposium",
      date: "March 15, 2024",
      description: "International experts discussed tiger conservation strategies and success stories.",
      image: "/placeholder.svg?height=300&width=400",
      category: "Education",
    },
    {
      id: 9,
      title: "Winter Wildlife Festival",
      date: "December 20-22, 2023",
      description: "Three-day festival showcasing how animals adapt to winter conditions.",
      image: "/placeholder.svg?height=300&width=400",
      category: "Festival",
    },
  ]

  const carouselEvents = [
    {
      id: 1,
      title: "Summer Camp Registration",
      description:
        "Register now for our exciting summer camps designed for young wildlife enthusiasts. Limited spots available!",
      image: "/placeholder.svg?height=300&width=400",
      href: "/events/summer-camp",
      buttonText: "Register now",
    },
    {
      id: 2,
      title: "VIP Behind-the-Scenes Tours",
      description: "Get exclusive access to areas normally closed to the public and meet our animal care team.",
      image: "/placeholder.svg?height=300&width=400",
      href: "/events/vip-tours",
      buttonText: "Book tour",
    },
    {
      id: 3,
      title: "Annual Fundraising Gala",
      description:
        "Join us for an elegant evening supporting wildlife conservation. Dinner, auction, and entertainment included.",
      image: "/placeholder.svg?height=300&width=400",
      href: "/events/fundraising-gala",
      buttonText: "Get tickets",
    },
  ]

  const getCategoryColor = (category: string) => {
    const colors = {
      Education: "bg-blue-500",
      Experience: "bg-green-500",
      Workshop: "bg-purple-500",
      Celebration: "bg-orange-500",
      Festival: "bg-pink-500",
    }
    return colors[category as keyof typeof colors] || "bg-gray-500"
  }

  return (
    <>
      <Navbar />

      <main>
        <HeroSection
          title="EVENTS & EXPERIENCES"
          subtitle="Discover exciting programs and special events throughout the year"
          backgroundImage="/images/header/animal-bg.png"
          primaryCta={{ text: "VIEW CALENDAR", href: "#events" }}
          height="medium"
        />

        {/* Featured Events Carousel */}
        <EventsCarousel events={carouselEvents} backgroundImage="/placeholder.svg?height=600&width=1920" />

        {/* Events Tabs */}
        <section id="events" className="py-16 bg-zoo-teal-700">
          <div className="zoo-container">
            <div
              className={`text-center mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <h2 className="font-heading text-4xl md:text-5xl text-white mb-4">ALL EVENTS</h2>
              <p className="text-xl text-white/80">Browse our upcoming and past events</p>
            </div>

            <Tabs defaultValue="upcoming" className="max-w-6xl mx-auto">
              <TabsList className="grid w-full grid-cols-2 bg-white/10 border-white/20">
                <TabsTrigger
                  value="upcoming"
                  className="text-white data-[state=active]:bg-zoo-yellow-600 data-[state=active]:text-zoo-teal-900"
                >
                  Upcoming Events
                </TabsTrigger>
                <TabsTrigger
                  value="past"
                  className="text-white data-[state=active]:bg-zoo-yellow-600 data-[state=active]:text-zoo-teal-900"
                >
                  Past Events
                </TabsTrigger>
              </TabsList>

              <TabsContent value="upcoming" className="mt-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {upcomingEvents.map((event, index) => (
                    <Card
                      key={event.id}
                      className={`bg-white border-none overflow-hidden transition-all duration-500 hover:scale-105 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <div className="relative h-48">
                        <Image
                          src={event.image || "/placeholder.svg"}
                          alt={event.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-4 left-4 flex gap-2">
                          <Badge className={`${getCategoryColor(event.category)} text-white border-none`}>
                            {event.category}
                          </Badge>
                          {event.featured && (
                            <Badge className="bg-zoo-yellow-600 text-zoo-teal-900 border-none">
                              <Star className="w-3 h-3 mr-1" />
                              Featured
                            </Badge>
                          )}
                        </div>
                      </div>

                      <CardHeader>
                        <CardTitle className="font-heading text-xl text-zoo-teal-700">{event.title}</CardTitle>
                      </CardHeader>

                      <CardContent className="space-y-3">
                        <div className="flex items-center gap-2 text-zoo-teal-600 text-sm">
                          <Calendar className="w-4 h-4" />
                          <span>{event.date}</span>
                        </div>

                        <div className="flex items-center gap-2 text-zoo-teal-600 text-sm">
                          <Clock className="w-4 h-4" />
                          <span>{event.time}</span>
                        </div>

                        <div className="flex items-center gap-2 text-zoo-teal-600 text-sm">
                          <MapPin className="w-4 h-4" />
                          <span>{event.location}</span>
                        </div>

                        <div className="flex items-center gap-2 text-zoo-teal-600 text-sm">
                          <Users className="w-4 h-4" />
                          <span>{event.capacity}</span>
                        </div>

                        <p className="text-zoo-teal-600 text-sm leading-relaxed">{event.description}</p>

                        <div className="flex justify-between items-center pt-4">
                          <span className="font-bold text-zoo-teal-700">{event.price}</span>
                          <Button className="bg-zoo-yellow-600 hover:bg-zoo-yellow-500 text-zoo-teal-900">
                            Register
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="past" className="mt-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {pastEvents.map((event, index) => (
                    <Card
                      key={event.id}
                      className={`bg-white/10 border-white/20 text-white overflow-hidden transition-all duration-500 hover:scale-105 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <div className="relative h-48">
                        <Image
                          src={event.image || "/placeholder.svg"}
                          alt={event.title}
                          fill
                          className="object-cover opacity-80"
                        />
                        <Badge
                          className={`absolute top-4 left-4 ${getCategoryColor(event.category)} text-white border-none`}
                        >
                          {event.category}
                        </Badge>
                      </div>

                      <CardHeader>
                        <CardTitle className="font-heading text-xl">{event.title}</CardTitle>
                        <div className="flex items-center gap-2 text-white/80 text-sm">
                          <Calendar className="w-4 h-4" />
                          <span>{event.date}</span>
                        </div>
                      </CardHeader>

                      <CardContent>
                        <p className="text-white/80 text-sm leading-relaxed">{event.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Event Categories */}
        <section className="py-16 bg-zoo-teal-800">
          <div className="zoo-container">
            <div
              className={`text-center mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <h2 className="font-heading text-4xl md:text-5xl text-white mb-4">EVENT CATEGORIES</h2>
              <p className="text-xl text-white/80">Find events that match your interests</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  category: "Educational Programs",
                  description: "Learn about wildlife conservation, animal behavior, and environmental science",
                  icon: "🎓",
                  count: "12 upcoming",
                },
                {
                  category: "Special Experiences",
                  description: "Behind-the-scenes tours, animal encounters, and exclusive access events",
                  icon: "⭐",
                  count: "8 upcoming",
                },
                {
                  category: "Workshops & Classes",
                  description: "Hands-on learning experiences for all ages and skill levels",
                  icon: "🔧",
                  count: "6 upcoming",
                },
                {
                  category: "Seasonal Celebrations",
                  description: "Holiday events, festivals, and seasonal animal activities",
                  icon: "🎉",
                  count: "4 upcoming",
                },
                {
                  category: "Conservation Events",
                  description: "Fundraising galas, awareness campaigns, and volunteer opportunities",
                  icon: "🌱",
                  count: "5 upcoming",
                },
                {
                  category: "Family Programs",
                  description: "Activities designed for families with children of all ages",
                  icon: "👨‍👩‍👧‍👦",
                  count: "10 upcoming",
                },
              ].map((category, index) => (
                <Card
                  key={index}
                  className={`bg-white/10 border-white/20 text-white transition-all duration-500 hover:scale-105 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="text-4xl mb-2">{category.icon}</div>
                    <CardTitle className="font-heading text-xl">{category.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/80 mb-4">{category.description}</p>
                    <Badge className="bg-zoo-yellow-600 text-zoo-teal-900 border-none">{category.count}</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 bg-gradient-to-r from-zoo-teal-600 to-zoo-teal-700">
          <div className="zoo-container">
            <div className="text-center max-w-2xl mx-auto">
              <div
                className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                <h2 className="font-heading text-4xl md:text-5xl text-white mb-6">NEVER MISS AN EVENT</h2>
                <p className="text-xl text-white/80 mb-8">
                  Subscribe to our newsletter to receive updates about upcoming events, special programs, and exclusive
                  opportunities.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/newsletter" className="zoo-button-primary">
                    SUBSCRIBE TO NEWSLETTER
                  </Link>
                  <Link href="/calendar" className="zoo-button-secondary">
                    VIEW FULL CALENDAR
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

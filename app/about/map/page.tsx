"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, MapPin, Utensils, Accessibility, Baby, Info, X, Clock } from "lucide-react"

export default function ZooMapPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeZone, setActiveZone] = useState<string | null>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const zoneInfo = {
    entrance: {
      name: "Main Entrance",
      description: "Ticket counters, information desk, and security checkpoint.",
      facilities: ["Ticket Counter", "Information Desk", "Security", "First Aid"],
    },
    mammals: {
      name: "Mammal Zone",
      description: "Home to tigers, elephants, bears, and other mammals.",
      animals: ["Royal Bengal Tiger", "Indian Elephant", "Sloth Bear", "Leopard", "Himalayan Black Bear"],
    },
    birds: {
      name: "Aviary Zone",
      description: "A diverse collection of native and exotic bird species.",
      animals: ["Indian Peacock", "Great Indian Hornbill", "Flamingo", "Pelican", "Stork"],
    },
    reptiles: {
      name: "Reptile House",
      description: "Indoor and outdoor exhibits featuring various reptile species.",
      animals: ["King Cobra", "Indian Python", "Marsh Crocodile", "Monitor Lizard", "Indian Star Tortoise"],
    },
    aquatic: {
      name: "Aquatic Zone",
      description: "Exhibits featuring aquatic animals and a boating lake.",
      animals: ["Gharial", "Turtles", "Fish Species", "Waterfowl"],
    },
    children: {
      name: "Children's Area",
      description: "Shishu Udyan with play equipment and educational activities.",
      facilities: ["Play Equipment", "Picnic Area", "Educational Displays", "Toy Train Station"],
    },
    food: {
      name: "Food & Rest Area",
      description: "Mayur Canteen and rest areas for visitors.",
      facilities: ["Mayur Canteen", "Seating Areas", "Water Fountains", "Restrooms"],
    },
    garden: {
      name: "Botanical Garden",
      description: "Rose Garden and plant exhibits showcasing local flora.",
      features: ["Rose Garden", "Medicinal Plants", "Native Trees", "Butterfly Garden"],
    },
  }

  return (
    <>
      <Navbar />

      <main>
        <HeroSection
          title="ZOO MAP"
          subtitle="Navigate your way around Patna Zoo"
          backgroundImage="/images/header/animal-bg.png"
          height="medium"
        />

        {/* Interactive Map Section */}
        <section className="py-16 bg-zoo-teal-700">
          <div className="zoo-container">
            <div
              className={`text-center mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <h2 className="font-heading text-4xl md:text-5xl text-white mb-4">EXPLORE OUR ZOO</h2>
              <p className="text-xl text-white/80">Plan your visit with our interactive map</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Map Legend and Info */}
              <div
                className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                <Card className="bg-white/10 border-white/20 text-white mb-6">
                  <CardContent className="p-6">
                    <h3 className="font-heading text-2xl mb-4">MAP LEGEND</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                        <span>Entrance & Exit</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                        <span>Mammal Zone</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                        <span>Aviary Zone</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                        <span>Reptile House</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 bg-cyan-500 rounded-full"></div>
                        <span>Aquatic Zone</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                        <span>Children's Area</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                        <span>Food & Rest Area</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 bg-emerald-500 rounded-full"></div>
                        <span>Botanical Garden</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 border-white/20 text-white mb-6">
                  <CardContent className="p-6">
                    <h3 className="font-heading text-2xl mb-4">FACILITIES</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center gap-2">
                        <Utensils className="w-5 h-5 text-zoo-yellow-600" />
                        <span>Food Court</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-zoo-yellow-600" />
                        <span>Information</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Accessibility className="w-5 h-5 text-zoo-yellow-600" />
                        <span>Restrooms</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Baby className="w-5 h-5 text-zoo-yellow-600" />
                        <span>Baby Care</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Info className="w-5 h-5 text-zoo-yellow-600" />
                        <span>First Aid</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="space-y-4">
                  <Button className="w-full flex items-center gap-2 bg-zoo-yellow-600 hover:bg-zoo-yellow-500 text-zoo-teal-900">
                    <Download className="w-5 h-5" />
                    <span>Download PDF Map</span>
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-white text-white hover:bg-white hover:text-zoo-teal-700"
                  >
                    Print Map
                  </Button>
                </div>
              </div>

              {/* Interactive Map */}
              <div className="lg:col-span-2">
                <div
                  className={`relative rounded-lg overflow-hidden transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                >
                  {/* Map Image */}
                  <div className="relative aspect-[4/3] bg-zoo-teal-600">
                    <Image
                      src="/placeholder.svg?height=900&width=1200"
                      alt="Patna Zoo Map"
                      fill
                      className="object-cover"
                    />

                    {/* Interactive Hotspots */}
                    <div
                      className="absolute top-[15%] left-[10%] w-8 h-8 bg-red-500 rounded-full cursor-pointer hover:scale-125 transition-transform"
                      onClick={() => setActiveZone("entrance")}
                    ></div>

                    <div
                      className="absolute top-[30%] left-[40%] w-8 h-8 bg-orange-500 rounded-full cursor-pointer hover:scale-125 transition-transform"
                      onClick={() => setActiveZone("mammals")}
                    ></div>

                    <div
                      className="absolute top-[20%] right-[20%] w-8 h-8 bg-blue-500 rounded-full cursor-pointer hover:scale-125 transition-transform"
                      onClick={() => setActiveZone("birds")}
                    ></div>

                    <div
                      className="absolute bottom-[30%] left-[30%] w-8 h-8 bg-green-500 rounded-full cursor-pointer hover:scale-125 transition-transform"
                      onClick={() => setActiveZone("reptiles")}
                    ></div>

                    <div
                      className="absolute bottom-[20%] right-[30%] w-8 h-8 bg-cyan-500 rounded-full cursor-pointer hover:scale-125 transition-transform"
                      onClick={() => setActiveZone("aquatic")}
                    ></div>

                    <div
                      className="absolute top-[60%] left-[20%] w-8 h-8 bg-purple-500 rounded-full cursor-pointer hover:scale-125 transition-transform"
                      onClick={() => setActiveZone("children")}
                    ></div>

                    <div
                      className="absolute top-[40%] right-[40%] w-8 h-8 bg-yellow-500 rounded-full cursor-pointer hover:scale-125 transition-transform"
                      onClick={() => setActiveZone("food")}
                    ></div>

                    <div
                      className="absolute bottom-[40%] right-[10%] w-8 h-8 bg-emerald-500 rounded-full cursor-pointer hover:scale-125 transition-transform"
                      onClick={() => setActiveZone("garden")}
                    ></div>
                  </div>

                  {/* Zone Information Overlay */}
                  {activeZone && (
                    <div className="absolute bottom-0 left-0 right-0 bg-zoo-teal-900/90 p-4 animate-fade-in">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-heading text-xl text-white mb-1">
                            {zoneInfo[activeZone as keyof typeof zoneInfo].name}
                          </h3>
                          <p className="text-white/80 text-sm mb-2">
                            {zoneInfo[activeZone as keyof typeof zoneInfo].description}
                          </p>

                          {/* Display animals or facilities based on zone type */}
                          {(zoneInfo[activeZone as keyof typeof zoneInfo] as any).animals && (
                            <div>
                              <p className="text-zoo-yellow-600 font-medium text-sm">Featured Animals:</p>
                              <p className="text-white/80 text-sm">
                                {(zoneInfo[activeZone as keyof typeof zoneInfo] as any).animals.join(", ")}
                              </p>
                            </div>
                          )}

                          {(zoneInfo[activeZone as keyof typeof zoneInfo] as any).facilities && (
                            <div>
                              <p className="text-zoo-yellow-600 font-medium text-sm">Facilities:</p>
                              <p className="text-white/80 text-sm">
                                {(zoneInfo[activeZone as keyof typeof zoneInfo] as any).facilities.join(", ")}
                              </p>
                            </div>
                          )}

                          {(zoneInfo[activeZone as keyof typeof zoneInfo] as any).features && (
                            <div>
                              <p className="text-zoo-yellow-600 font-medium text-sm">Features:</p>
                              <p className="text-white/80 text-sm">
                                {(zoneInfo[activeZone as keyof typeof zoneInfo] as any).features.join(", ")}
                              </p>
                            </div>
                          )}
                        </div>
                        <button className="text-white/80 hover:text-white" onClick={() => setActiveZone(null)}>
                          <X className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Instructions */}
                <div className="mt-4 text-white/80 text-center text-sm">
                  Click on the colored dots to learn more about each area of the zoo
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Suggested Routes */}
        <section className="py-16 bg-zoo-teal-800">
          <div className="zoo-container">
            <div className="text-center mb-12 animate-on-scroll">
              <h2 className="font-heading text-4xl md:text-5xl text-white mb-4">SUGGESTED ROUTES</h2>
              <p className="text-xl text-white/80">Optimize your visit with these recommended pathways</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Family Route",
                  duration: "3-4 hours",
                  highlights: ["Children's Area", "Elephant Enclosure", "Toy Train", "Aquatic Zone", "Food Court"],
                  description:
                    "Perfect for families with children, focusing on interactive experiences and kid-friendly animals.",
                },
                {
                  title: "Express Route",
                  duration: "1.5-2 hours",
                  highlights: ["Tiger Enclosure", "Elephant Area", "Bird Aviary", "Reptile House"],
                  description:
                    "See the most popular animals in a shorter timeframe, ideal for visitors with limited time.",
                },
                {
                  title: "Nature Lover's Route",
                  duration: "4-5 hours",
                  highlights: ["Botanical Garden", "Bird Aviary", "Aquatic Zone", "Native Species Area"],
                  description:
                    "Focus on plants, birds, and the natural environment with plenty of time for observation.",
                },
                {
                  title: "Photography Route",
                  duration: "3-4 hours",
                  highlights: ["Scenic Viewpoints", "Tiger Enclosure", "Bird Aviary", "Rose Garden"],
                  description: "Designed for photography enthusiasts with the best photo opportunities and lighting.",
                },
                {
                  title: "Conservation Route",
                  duration: "3-4 hours",
                  highlights: ["Endangered Species", "Breeding Centers", "Education Center", "Conservation Exhibits"],
                  description: "Learn about our conservation efforts and see endangered species in our care.",
                },
                {
                  title: "Accessibility Route",
                  duration: "2-3 hours",
                  highlights: ["Paved Pathways", "Rest Areas", "Accessible Viewing Points"],
                  description:
                    "A route designed for visitors with mobility challenges, using the most accessible paths.",
                },
              ].map((route, index) => (
                <Card
                  key={index}
                  className={`bg-white/10 border-white/20 text-white transition-all duration-500 hover:scale-105 animate-on-scroll ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <h3 className="font-heading text-xl mb-2">{route.title}</h3>
                    <div className="flex items-center gap-2 mb-3">
                      <Clock className="w-4 h-4 text-zoo-yellow-600" />
                      <span className="text-zoo-yellow-600 text-sm">{route.duration}</span>
                    </div>
                    <p className="text-white/80 text-sm mb-4">{route.description}</p>
                    <div>
                      <p className="text-white font-medium text-sm mb-2">Highlights:</p>
                      <ul className="space-y-1">
                        {route.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-center gap-2 text-white/80 text-sm">
                            <div className="w-1.5 h-1.5 bg-zoo-yellow-600 rounded-full"></div>
                            <span>{highlight}</span>
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

        {/* Visit Planning */}
        <section className="py-16 bg-zoo-teal-700">
          <div className="zoo-container">
            <div className="text-center max-w-3xl mx-auto animate-on-scroll">
              <h2 className="font-heading text-4xl md:text-5xl text-white mb-6">PLAN YOUR VISIT</h2>
              <p className="text-xl text-white/80 mb-8">
                Make the most of your day at Patna Zoo with our visitor resources
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <Link href="/visit/tickets" className="zoo-button-primary">
                  BUY TICKETS
                </Link>
                <Link href="/visit" className="zoo-button-secondary">
                  VISITOR INFORMATION
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Baby, Clock, MapPin, Star, Users, Shield } from "lucide-react"
import { ImageGallery } from "@/components/image-gallery"

export default function ShishuUdyanPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const playAreas = [
    {
      id: "toddlers",
      name: "Toddler Zone (1-3 years)",
      items: [
        {
          name: "Soft Play Area",
          age: "1-3 years",
          description: "Safe foam structures for crawling and climbing",
          safety: true,
        },
        { name: "Sensory Garden", age: "1-3 years", description: "Touch-friendly plants and textures", safety: true },
        { name: "Mini Slides", age: "1-3 years", description: "Low-height slides with safety barriers", safety: true },
        { name: "Sand Pit", age: "1-3 years", description: "Clean sand play area with toys", safety: true },
        { name: "Water Play", age: "1-3 years", description: "Shallow water features for splashing", safety: true },
        {
          name: "Animal Sounds Corner",
          age: "1-3 years",
          description: "Interactive buttons with animal sounds",
          safety: true,
        },
      ],
    },
    {
      id: "preschool",
      name: "Preschool Area (3-6 years)",
      items: [
        {
          name: "Adventure Playground",
          age: "3-6 years",
          description: "Climbing frames and rope bridges",
          safety: true,
        },
        {
          name: "Nature Trail",
          age: "3-6 years",
          description: "Child-friendly walking path with animal facts",
          safety: false,
        },
        {
          name: "Mini Zoo Corner",
          age: "3-6 years",
          description: "Small animals like rabbits and guinea pigs",
          safety: true,
        },
        { name: "Art & Craft Station", age: "3-6 years", description: "Supervised creative activities", safety: false },
        {
          name: "Story Circle",
          age: "3-6 years",
          description: "Daily storytelling sessions about animals",
          safety: false,
        },
        {
          name: "Butterfly Garden",
          age: "3-6 years",
          description: "Enclosed garden with colorful butterflies",
          safety: true,
        },
      ],
    },
    {
      id: "school",
      name: "School Age (6-12 years)",
      items: [
        {
          name: "Adventure Course",
          age: "6-12 years",
          description: "Challenging obstacle course with safety gear",
          safety: true,
        },
        {
          name: "Junior Naturalist Program",
          age: "6-12 years",
          description: "Educational activities about wildlife",
          safety: false,
        },
        { name: "Tree House", age: "6-12 years", description: "Elevated play structure with slides", safety: true },
        {
          name: "Animal Care Experience",
          age: "6-12 years",
          description: "Learn to feed and care for friendly animals",
          safety: true,
        },
        {
          name: "Nature Photography",
          age: "6-12 years",
          description: "Basic photography skills with disposable cameras",
          safety: false,
        },
        {
          name: "Environmental Games",
          age: "6-12 years",
          description: "Fun games teaching conservation",
          safety: false,
        },
      ],
    },
    {
      id: "activities",
      name: "Special Activities",
      items: [
        {
          name: "Weekend Puppet Shows",
          age: "All ages",
          description: "Educational puppet shows about wildlife",
          safety: false,
        },
        {
          name: "Birthday Celebrations",
          age: "All ages",
          description: "Special birthday party packages",
          safety: false,
        },
        { name: "Summer Camps", age: "5-12 years", description: "Week-long nature and wildlife camps", safety: true },
        {
          name: "School Field Trips",
          age: "All ages",
          description: "Educational programs for school groups",
          safety: true,
        },
        {
          name: "Parent-Child Activities",
          age: "All ages",
          description: "Bonding activities for families",
          safety: false,
        },
        {
          name: "Festival Celebrations",
          age: "All ages",
          description: "Special events during festivals",
          safety: false,
        },
      ],
    },
  ]

  const gardenFeatures = [
    {
      icon: <Baby className="w-6 h-6" />,
      title: "Age-Appropriate Design",
      description: "Separate zones designed specifically for different age groups",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Safety First",
      description: "All equipment meets international safety standards with trained supervision",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Educational Programs",
      description: "Learning activities that connect children with nature and wildlife",
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Interactive Experiences",
      description: "Hands-on activities that make learning fun and memorable",
    },
  ]

  return (
    <>
      <Navbar />

      <main>
        <HeroSection
          title="SHISHU UDYAN"
          subtitle="A magical playground where children connect with nature"
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
                <h2 className="font-heading text-4xl md:text-5xl text-white mb-6">CHILDREN'S PARADISE</h2>
                <p className="text-white/90 text-lg mb-4">
                  Shishu Udyan is a specially designed children's garden that combines fun, learning, and nature
                  exploration. Our safe and engaging environment helps children develop a love for wildlife and
                  environmental conservation from an early age.
                </p>
                <p className="text-white/90 text-lg mb-4">
                  With age-appropriate play areas, educational activities, and interactive experiences, children can
                  explore, learn, and play while parents relax knowing their little ones are in a secure, supervised
                  environment.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-zoo-yellow-600" />
                    <span className="text-white">Open: 9:00 AM - 5:30 PM</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-zoo-yellow-600" />
                    <span className="text-white">Near Children's Zoo</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-zoo-yellow-600" />
                    <span className="text-white">Supervised Play Areas</span>
                  </div>
                </div>
              </div>

              <div
                className={`relative h-96 rounded-lg overflow-hidden transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Children playing in Shishu Udyan"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-zoo-teal-900/80 to-transparent p-6">
                  <p className="text-white/90 text-sm">Children enjoying safe and educational play activities</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Play Areas */}
        <section className="py-16 bg-zoo-teal-800">
          <div className="zoo-container">
            <div
              className={`text-center mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <h2 className="font-heading text-4xl md:text-5xl text-white mb-4">PLAY AREAS & ACTIVITIES</h2>
              <p className="text-xl text-white/80">Age-appropriate fun and learning experiences</p>
            </div>

            <Tabs defaultValue="toddlers" className="max-w-6xl mx-auto">
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 bg-white/10 border-white/20 mb-8">
                {playAreas.map((area) => (
                  <TabsTrigger
                    key={area.id}
                    value={area.id}
                    className="text-white data-[state=active]:bg-zoo-yellow-600 data-[state=active]:text-zoo-teal-900 text-xs"
                  >
                    {area.name.split(" ")[0]}
                  </TabsTrigger>
                ))}
              </TabsList>

              {playAreas.map((area) => (
                <TabsContent key={area.id} value={area.id}>
                  <Card className="bg-white/10 border-white/20 text-white">
                    <CardHeader>
                      <CardTitle className="font-heading text-2xl text-center">{area.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-4">
                        {area.items.map((item, index) => (
                          <div key={index} className="flex justify-between items-start p-4 bg-white/5 rounded-lg">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="font-medium">{item.name}</span>
                                {item.safety && (
                                  <Badge className="bg-green-500 text-white text-xs px-2 py-0.5">
                                    <Shield className="w-3 h-3 mr-1" />
                                    SAFE
                                  </Badge>
                                )}
                              </div>
                              <p className="text-white/70 text-sm mb-1">{item.description}</p>
                              <p className="text-zoo-yellow-600 text-xs font-medium">{item.age}</p>
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

        {/* Garden Features */}
        <section className="py-16 bg-zoo-teal-700">
          <div className="zoo-container">
            <div
              className={`text-center mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <h2 className="font-heading text-4xl md:text-5xl text-white mb-4">WHY CHOOSE SHISHU UDYAN</h2>
              <p className="text-xl text-white/80">Safe, educational, and fun for the whole family</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {gardenFeatures.map((feature, index) => (
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
              <h2 className="font-heading text-4xl md:text-5xl text-white mb-4">GARDEN GALLERY</h2>
              <p className="text-xl text-white/80">See children enjoying our safe and fun activities</p>
            </div>

            <ImageGallery
              images={[
                {
                  src: "/placeholder.svg?height=400&width=600",
                  alt: "Toddler play area",
                  title: "Toddler Play Area",
                  description: "Safe soft play structures for our youngest visitors",
                },
                {
                  src: "/placeholder.svg?height=400&width=600",
                  alt: "Adventure playground",
                  title: "Adventure Playground",
                  description: "Exciting climbing frames and slides for older children",
                },
                {
                  src: "/placeholder.svg?height=400&width=600",
                  alt: "Nature learning activities",
                  title: "Nature Learning",
                  description: "Educational activities connecting children with wildlife",
                },
                {
                  src: "/placeholder.svg?height=400&width=600",
                  alt: "Butterfly garden",
                  title: "Butterfly Garden",
                  description: "Enclosed garden where children can observe butterflies",
                },
                {
                  src: "/placeholder.svg?height=400&width=600",
                  alt: "Art and craft activities",
                  title: "Creative Activities",
                  description: "Supervised art and craft sessions for all ages",
                },
                {
                  src: "/placeholder.svg?height=400&width=600",
                  alt: "Family enjoying together",
                  title: "Family Fun",
                  description: "Parents and children enjoying quality time together",
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
                    Operating Hours
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Tuesday - Sunday</span>
                    <span className="text-zoo-yellow-600">9:00 AM - 5:30 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Monday</span>
                    <Badge variant="destructive" className="bg-red-500">
                      Closed
                    </Badge>
                  </div>
                  <div className="pt-4 border-t border-white/20">
                    <p className="text-white/80 text-sm">
                      <strong>Note:</strong> Adult supervision required for children under 8 years
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
                    Location & Safety
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="font-medium mb-1">Location</p>
                    <p className="text-white/80">Adjacent to the children's zoo, easily accessible</p>
                  </div>
                  <div>
                    <p className="font-medium mb-1">Safety Features</p>
                    <p className="text-white/80">Trained staff, first aid station, secure boundaries</p>
                  </div>
                  <div>
                    <p className="font-medium mb-1">Special Programs</p>
                    <p className="text-white/80">Birthday parties, school trips, summer camps available</p>
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

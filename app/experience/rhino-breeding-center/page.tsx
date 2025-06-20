"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, Clock, MapPin, Shield, Baby, Users } from "lucide-react"
import { ImageGallery } from "@/components/image-gallery"

export default function RhinoBreedingCenterPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const programCategories = [
    {
      id: "breeding",
      name: "Breeding Program",
      activities: [
        {
          name: "Genetic Diversity Management",
          description: "Maintaining healthy genetic diversity through careful breeding pair selection",
          status: "Ongoing",
          success: "85% success rate",
          details: "Scientific breeding protocols ensure genetic health of offspring",
        },
        {
          name: "Artificial Insemination",
          description: "Advanced reproductive techniques to increase breeding success",
          status: "Active",
          success: "3 successful births",
          details: "State-of-the-art veterinary facilities support reproductive health",
        },
        {
          name: "Pregnancy Monitoring",
          description: "24/7 monitoring of pregnant females with veterinary care",
          status: "Continuous",
          success: "100% survival rate",
          details: "Regular ultrasounds and health checkups ensure safe pregnancies",
        },
      ],
    },
    {
      id: "conservation",
      name: "Conservation Efforts",
      activities: [
        {
          name: "Habitat Restoration",
          description: "Creating natural habitat conditions for optimal breeding environment",
          status: "Phase 2",
          area: "15 acres",
          details: "Native vegetation and water sources replicate wild conditions",
        },
        {
          name: "Research Collaboration",
          description: "Partnership with international conservation organizations",
          status: "Active",
          partners: "5 institutions",
          details: "Sharing knowledge and best practices with global rhino conservation network",
        },
        {
          name: "Anti-Poaching Awareness",
          description: "Educational programs about rhino conservation and anti-poaching efforts",
          status: "Ongoing",
          reach: "10,000+ visitors",
          details: "Raising awareness about threats to wild rhino populations",
        },
      ],
    },
    {
      id: "research",
      name: "Research Programs",
      activities: [
        {
          name: "Behavioral Studies",
          description: "Studying rhino behavior patterns to improve breeding success",
          status: "Year 3",
          publications: "12 papers",
          details: "Understanding social dynamics and mating behaviors",
        },
        {
          name: "Nutrition Research",
          description: "Optimizing diet for breeding adults and growing calves",
          status: "Ongoing",
          improvements: "25% better health",
          details: "Specialized diets based on wild rhino nutrition patterns",
        },
        {
          name: "Health Monitoring",
          description: "Comprehensive health tracking using latest veterinary technology",
          status: "Daily",
          technology: "Digital health records",
          details: "Preventive healthcare ensures optimal breeding conditions",
        },
      ],
    },
    {
      id: "education",
      name: "Educational Programs",
      activities: [
        {
          name: "School Visits",
          description: "Educational tours for students about rhino conservation",
          frequency: "Weekly",
          participants: "500+ students/month",
          details: "Interactive sessions about endangered species protection",
        },
        {
          name: "Researcher Training",
          description: "Training programs for wildlife conservation professionals",
          frequency: "Quarterly",
          participants: "20+ professionals",
          details: "Hands-on training in breeding and conservation techniques",
        },
        {
          name: "Public Awareness",
          description: "Community outreach programs about rhino conservation",
          frequency: "Monthly",
          reach: "2,000+ people",
          details: "Building local support for conservation efforts",
        },
      ],
    },
  ]

  const facilities = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Specialized Care",
      description: "Dedicated veterinary team with expertise in rhino reproduction and health care",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure Environment",
      description: "24/7 security monitoring and protected habitat ensuring safety of breeding pairs",
    },
    {
      icon: <Baby className="w-6 h-6" />,
      title: "Nursery Facilities",
      description: "Specialized nursery areas for newborn calves with climate control and monitoring",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Team",
      description: "International team of rhino specialists, veterinarians, and conservation biologists",
    },
  ]

  const achievements = [
    {
      title: "Successful Births",
      number: "12",
      description: "Healthy rhino calves born since program inception",
      period: "2018-2024",
    },
    {
      title: "Breeding Pairs",
      number: "6",
      description: "Active breeding pairs in the program",
      period: "Current",
    },
    {
      title: "Survival Rate",
      number: "100%",
      description: "Calf survival rate in first year",
      period: "2022-2024",
    },
    {
      title: "Research Papers",
      number: "25",
      description: "Published research contributions to rhino conservation",
      period: "2020-2024",
    },
  ]

  const galleryImages = [
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Rhino mother with calf",
      title: "Mother and Calf",
      description: "Successful breeding result - healthy mother and newborn calf",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Rhino breeding facility",
      title: "Breeding Facility",
      description: "State-of-the-art facilities designed for optimal breeding conditions",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Veterinary examination",
      title: "Veterinary Care",
      description: "Regular health checkups ensure optimal breeding health",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Natural habitat enclosure",
      title: "Natural Habitat",
      description: "Spacious enclosures replicate natural rhino habitat conditions",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Research team at work",
      title: "Research Team",
      description: "International experts working on rhino conservation research",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Educational program session",
      title: "Education Programs",
      description: "Teaching visitors about rhino conservation importance",
    },
  ]

  return (
    <>
      <Navbar />

      <main>
        <HeroSection
          title="RHINO BREEDING CENTER"
          subtitle="Pioneering conservation through successful breeding programs"
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
                <h2 className="font-heading text-4xl md:text-5xl text-white mb-6">CONSERVATION THROUGH BREEDING</h2>
                <p className="text-white/90 text-lg mb-4">
                  Our Rhino Breeding Center stands as a beacon of hope for one of the world's most endangered species.
                  Established in 2018, this state-of-the-art facility has successfully bred 12 healthy rhino calves,
                  contributing significantly to the global conservation efforts for the Greater One-Horned Rhinoceros.
                </p>
                <p className="text-white/90 text-lg mb-4">
                  Through advanced reproductive techniques, comprehensive veterinary care, and international
                  collaboration, we're not just breeding rhinos – we're securing their future. Our program combines
                  cutting-edge science with traditional conservation wisdom to create optimal conditions for these
                  magnificent creatures to thrive.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-zoo-yellow-600" />
                    <span className="text-white">Visits: 10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-zoo-yellow-600" />
                    <span className="text-white">Eastern Section</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Heart className="w-5 h-5 text-zoo-yellow-600" />
                    <span className="text-white">12 Successful Births</span>
                  </div>
                </div>
              </div>

              <div
                className={`relative h-96 rounded-lg overflow-hidden transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Rhino mother with calf in breeding center"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-zoo-teal-900/80 to-transparent p-6">
                  <p className="text-white/90 text-sm">Successful breeding program ensuring species conservation</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Program Categories */}
        <section className="py-16 bg-zoo-teal-800">
          <div className="zoo-container">
            <div
              className={`text-center mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <h2 className="font-heading text-4xl md:text-5xl text-white mb-4">OUR PROGRAMS</h2>
              <p className="text-xl text-white/80">Comprehensive approach to rhino conservation and breeding</p>
            </div>

            <Tabs defaultValue="breeding" className="max-w-6xl mx-auto">
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 bg-white/10 border-white/20 mb-8">
                {programCategories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="text-white data-[state=active]:bg-zoo-yellow-600 data-[state=active]:text-zoo-teal-900"
                  >
                    {category.name.split(" ")[0]}
                  </TabsTrigger>
                ))}
              </TabsList>

              {programCategories.map((category) => (
                <TabsContent key={category.id} value={category.id}>
                  <Card className="bg-white/10 border-white/20 text-white">
                    <CardHeader>
                      <CardTitle className="font-heading text-2xl text-center">{category.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {category.activities.map((activity, index) => (
                          <div key={index} className="p-4 bg-white/5 rounded-lg">
                            <div className="flex justify-between items-start mb-2">
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                  <span className="font-medium text-lg">{activity.name}</span>
                                  <Badge className="bg-green-500 text-white text-xs px-2 py-0.5">
                                    {activity.status}
                                  </Badge>
                                </div>
                                <p className="text-white/70 text-sm mb-2">{activity.description}</p>
                                <p className="text-white/60 text-xs">{activity.details}</p>
                              </div>
                            </div>
                            <div className="flex flex-wrap gap-4 mt-3 text-xs text-zoo-yellow-600">
                              {activity.success && <span>Success: {activity.success}</span>}
                              {activity.area && <span>Area: {activity.area}</span>}
                              {activity.partners && <span>Partners: {activity.partners}</span>}
                              {activity.reach && <span>Reach: {activity.reach}</span>}
                              {activity.publications && <span>Publications: {activity.publications}</span>}
                              {activity.improvements && <span>Improvements: {activity.improvements}</span>}
                              {activity.technology && <span>Technology: {activity.technology}</span>}
                              {activity.frequency && <span>Frequency: {activity.frequency}</span>}
                              {activity.participants && <span>Participants: {activity.participants}</span>}
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

        {/* Achievements */}
        <section className="py-16 bg-zoo-teal-700">
          <div className="zoo-container">
            <div
              className={`text-center mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <h2 className="font-heading text-4xl md:text-5xl text-white mb-4">OUR ACHIEVEMENTS</h2>
              <p className="text-xl text-white/80">Measurable success in rhino conservation efforts</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <Card
                  key={index}
                  className={`bg-white/10 border-white/20 text-white text-center transition-all duration-500 hover:scale-105 animate-on-scroll ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="text-4xl font-bold text-zoo-yellow-600 mb-2">{achievement.number}</div>
                    <h3 className="font-heading text-lg mb-2">{achievement.title}</h3>
                    <p className="text-white/80 text-sm mb-2">{achievement.description}</p>
                    <p className="text-zoo-yellow-600 text-xs">{achievement.period}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Facilities */}
        <section className="py-16 bg-zoo-teal-800">
          <div className="zoo-container">
            <div
              className={`text-center mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <h2 className="font-heading text-4xl md:text-5xl text-white mb-4">WORLD-CLASS FACILITIES</h2>
              <p className="text-xl text-white/80">Advanced infrastructure supporting successful breeding programs</p>
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
        <section className="py-16 bg-zoo-teal-700">
          <div className="zoo-container">
            <div
              className={`text-center mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <h2 className="font-heading text-4xl md:text-5xl text-white mb-4">CENTER GALLERY</h2>
              <p className="text-xl text-white/80">Witness the success of our rhino breeding program</p>
            </div>

            <ImageGallery images={galleryImages} />
          </div>
        </section>

        {/* Visit Information */}
        <section className="py-16 bg-zoo-teal-800">
          <div className="zoo-container">
            <div className="grid md:grid-cols-2 gap-12">
              <Card
                className={`bg-white/10 border-white/20 text-white animate-on-scroll ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                <CardHeader>
                  <CardTitle className="font-heading text-2xl flex items-center gap-2">
                    <Clock className="w-6 h-6 text-zoo-yellow-600" />
                    Visiting Hours
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Guided Tours</span>
                    <span className="text-zoo-yellow-600">10:00 AM, 2:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Self-Guided Visits</span>
                    <span className="text-zoo-yellow-600">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Research Visits</span>
                    <span className="text-zoo-yellow-600">By Appointment</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Monday</span>
                    <Badge variant="destructive" className="bg-red-500">
                      Closed
                    </Badge>
                  </div>
                  <div className="pt-4 border-t border-white/20">
                    <p className="text-white/80 text-sm">
                      <strong>Note:</strong> Advance booking required for guided tours and research visits
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
                    <p className="text-white/80">Eastern section of the zoo, accessible via the conservation trail</p>
                  </div>
                  <div>
                    <p className="font-medium mb-1">Visitor Guidelines</p>
                    <p className="text-white/80">Maintain quiet, no flash photography, follow guide instructions</p>
                  </div>
                  <div>
                    <p className="font-medium mb-1">Best Viewing Times</p>
                    <p className="text-white/80">Early morning and late afternoon when rhinos are most active</p>
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

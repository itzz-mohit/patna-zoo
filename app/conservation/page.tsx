"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { FeaturedContentCard } from "@/components/featured-content-card"
import { SectionHeading } from "@/components/section-heading"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Heart, Globe, Users, TreePine, Shield, Award } from "lucide-react"

export default function ConservationPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const conservationStats = [
    {
      icon: <Shield className="w-8 h-8" />,
      number: "12",
      label: "Species Protected",
      description: "Endangered species in our breeding programs",
    },
    {
      icon: <TreePine className="w-8 h-8" />,
      number: "10,000",
      label: "Trees Planted",
      description: "In habitat restoration projects in Bihar",
    },
    {
      icon: <Users className="w-8 h-8" />,
      number: "5,000",
      label: "Students Educated",
      description: "Through our education programs annually",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      number: "3",
      label: "Regional Projects",
      description: "Conservation initiatives in Eastern India",
    },
  ]

  const projects = [
    {
      title: "Tiger Conservation in Valmiki",
      description:
        "Supporting tiger conservation efforts in Valmiki National Park, Bihar, through anti-poaching and habitat management.",
      image: "/placeholder.svg?height=300&width=400",
      status: "Active",
      progress: 75,
      location: "Valmiki National Park, Bihar",
    },
    {
      title: "Gangetic Dolphin Conservation",
      description: "Working to protect the endangered Gangetic River Dolphin in the Ganges River.",
      image: "/placeholder.svg?height=300&width=400",
      status: "Active",
      progress: 60,
      location: "Ganges River, Bihar",
    },
    {
      title: "Bird Conservation Program",
      description: "Protecting migratory birds and their habitats in Bihar.",
      image: "/placeholder.svg?height=300&width=400",
      status: "Active",
      progress: 85,
      location: "Kabar Tal Wetland",
    },
    {
      title: "Crocodile Conservation",
      description: "Conservation of crocodiles in Bihar.",
      image: "/placeholder.svg?height=300&width=400",
      status: "Active",
      progress: 45,
      location: "Bihar Rivers",
    },
  ]

  const achievements = [
    {
      year: "2023",
      title: "Increased Tiger Population",
      description: "Significant increase in tiger numbers in Valmiki National Park",
      icon: <Award className="w-6 h-6" />,
    },
    {
      year: "2022",
      title: "Successful Dolphin Rescue",
      description: "Rescued and released several Gangetic dolphins back into the river",
      icon: <Shield className="w-6 h-6" />,
    },
    {
      year: "2021",
      title: "Education Program Expansion",
      description: "Reached 5,000 students through conservation education in Bihar schools",
      icon: <Users className="w-6 h-6" />,
    },
    {
      year: "2020",
      title: "Wetland Restoration",
      description: "Restored critical wetland habitat for migratory birds",
      icon: <TreePine className="w-6 h-6" />,
    },
  ]

  return (
    <>
      <Navbar />

      <main>
        <HeroSection
          title="CONSERVATION IN ACTION"
          subtitle="Protecting wildlife and preserving nature for future generations"
          backgroundImage="/images/header/animal-bg.png"
          primaryCta={{ text: "SUPPORT OUR WORK", href: "/support" }}
          secondaryCta={{ text: "LEARN MORE", href: "#projects" }}
          height="large"
        />

        {/* Conservation Stats */}
        <section className="py-16 bg-zoo-teal-700">
          <div className="zoo-container">
            <div
              className={`text-center mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <h2 className="font-heading text-4xl md:text-5xl text-white mb-4">OUR IMPACT</h2>
              <p className="text-xl text-white/80">Making a difference through conservation action</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {conservationStats.map((stat, index) => (
                <Card
                  key={index}
                  className={`bg-white/10 border-white/20 text-white text-center transition-all duration-500 hover:scale-105 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="text-zoo-yellow-600 mx-auto mb-2">{stat.icon}</div>
                    <div className="text-4xl font-bold text-zoo-yellow-600">{stat.number}</div>
                    <CardTitle className="font-heading text-xl">{stat.label}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/80 text-sm">{stat.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-16 bg-zoo-teal-800">
          <div className="zoo-container">
            <div className="max-w-4xl mx-auto text-center">
              <div
                className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                <Heart className="w-16 h-16 text-zoo-yellow-600 mx-auto mb-6" />
                <h2 className="font-heading text-4xl md:text-5xl text-white mb-6">OUR MISSION</h2>
                <p className="text-xl text-white/90 leading-relaxed mb-8">
                  At Patna Zoo, we are committed to wildlife conservation, education, and research. Our mission is to
                  inspire people to care about animals and the natural world while actively working to protect
                  endangered species and their habitats. Through our conservation programs, we aim to ensure that future
                  generations can experience the wonder of wildlife.
                </p>
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div>
                    <Shield className="w-12 h-12 text-zoo-yellow-600 mx-auto mb-4" />
                    <h3 className="font-heading text-xl text-white mb-2">PROTECT</h3>
                    <p className="text-white/80">
                      Safeguarding endangered species through breeding and habitat conservation
                    </p>
                  </div>
                  <div>
                    <Users className="w-12 h-12 text-zoo-yellow-600 mx-auto mb-4" />
                    <h3 className="font-heading text-xl text-white mb-2">EDUCATE</h3>
                    <p className="text-white/80">Inspiring the next generation of conservationists through education</p>
                  </div>
                  <div>
                    <Globe className="w-12 h-12 text-zoo-yellow-600 mx-auto mb-4" />
                    <h3 className="font-heading text-xl text-white mb-2">CONNECT</h3>
                    <p className="text-white/80">Building global partnerships for wildlife conservation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Conservation Projects */}
        <section id="projects" className="py-16 bg-zoo-teal-700">
          <div className="zoo-container">
            <SectionHeading
              title="ACTIVE CONSERVATION PROJECTS"
              subtitle="Our ongoing efforts to protect endangered species and their habitats"
            />

            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className={`bg-white border-none overflow-hidden transition-all duration-500 hover:scale-105 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="relative h-48">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <Badge className="absolute top-4 right-4 bg-green-500 text-white border-none">
                      {project.status}
                    </Badge>
                  </div>

                  <CardHeader>
                    <CardTitle className="font-heading text-xl text-zoo-teal-700">{project.title}</CardTitle>
                    <p className="text-zoo-teal-600 text-sm">{project.location}</p>
                  </CardHeader>

                  <CardContent>
                    <p className="text-zoo-teal-600 mb-4">{project.description}</p>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-zoo-teal-600">Progress</span>
                        <span className="text-zoo-teal-700 font-medium">{project.progress}%</span>
                      </div>
                      <Progress value={project.progress} className="h-2" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Conservation Story */}
        <section className="py-16 bg-zoo-teal-700">
          <FeaturedContentCard
            title="Success Story"
            subtitle="Gharial Recovery"
            description="Our gharial breeding program has successfully increased the population of this critically endangered species by 40% over the past five years. Through careful breeding, habitat restoration, and community engagement, we've released over 200 gharials back into the wild."
            image="/placeholder.svg?height=400&width=600"
            href="/conservation/gharial-program"
            buttonText="READ FULL STORY"
          />
        </section>

        {/* Achievements Timeline */}
        <section className="py-16 bg-zoo-teal-800">
          <div className="zoo-container">
            <SectionHeading title="CONSERVATION ACHIEVEMENTS" subtitle="Milestones in our conservation journey" />

            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className={`flex gap-6 items-start transition-all duration-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-zoo-yellow-600 rounded-full flex items-center justify-center">
                        <div className="text-zoo-teal-900">{achievement.icon}</div>
                      </div>
                    </div>

                    <div className="flex-1">
                      <Card className="bg-white/10 border-white/20 text-white">
                        <CardHeader>
                          <div className="flex items-center gap-4">
                            <Badge className="bg-zoo-yellow-600 text-zoo-teal-900 border-none">
                              {achievement.year}
                            </Badge>
                            <CardTitle className="font-heading text-xl">{achievement.title}</CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-white/80">{achievement.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-zoo-teal-600 to-zoo-teal-700">
          <div className="zoo-container">
            <div className="text-center max-w-3xl mx-auto">
              <div
                className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                <h2 className="font-heading text-4xl md:text-5xl text-white mb-6">JOIN OUR CONSERVATION EFFORTS</h2>
                <p className="text-xl text-white/80 mb-8">
                  Every action counts in the fight to protect wildlife. Whether through adoption, donation, or
                  volunteering, you can make a real difference in conservation efforts.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/support/adopt" className="zoo-button-primary">
                    ADOPT AN ANIMAL
                  </Link>
                  <Link href="/support/donate" className="zoo-button-secondary">
                    MAKE A DONATION
                  </Link>
                  <Link href="/support/volunteer" className="zoo-button-secondary">
                    VOLUNTEER WITH US
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

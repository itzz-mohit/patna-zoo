"use client"

import { useState, useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Shield, AlertTriangle, Camera, Utensils, Users, Heart, Leaf, Info } from "lucide-react"

export default function RulesPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const safetyRules = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Maintain Safe Distance",
      description: "Stay behind barriers and maintain a safe distance from all animal enclosures.",
      importance: "critical",
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Do Not Feed Animals",
      description: "Feeding animals is strictly prohibited and can be harmful to their health.",
      importance: "critical",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Supervise Children",
      description: "Children must be supervised by adults at all times throughout the zoo.",
      importance: "critical",
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: "No Flash Photography",
      description: "Flash photography can disturb animals. Use natural light only.",
      importance: "important",
    },
    {
      icon: <Utensils className="w-6 h-6" />,
      title: "Dispose Waste Properly",
      description: "Use designated bins to keep the zoo clean and safe for animals.",
      importance: "important",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Respect Wildlife",
      description: "Do not make loud noises or try to get animals' attention.",
      importance: "important",
    },
  ]

  const generalGuidelines = [
    {
      category: "Entry & Exit",
      rules: [
        "Valid tickets required for entry",
        "Last entry 1 hour before closing",
        "Re-entry not permitted with same ticket",
        "Children under 3 years enter free",
      ],
    },
    {
      category: "Photography",
      rules: [
        "Personal photography allowed",
        "No flash near animals",
        "Commercial photography requires permit",
        "Drone photography prohibited",
      ],
    },
    {
      category: "Food & Beverages",
      rules: [
        "Outside food discouraged",
        "Water bottles permitted",
        "No alcohol allowed",
        "Food available at Mayur Canteen",
      ],
    },
    {
      category: "Behavior",
      rules: [
        "Maintain peaceful environment",
        "No running or shouting",
        "Follow staff instructions",
        "Respect other visitors",
      ],
    },
  ]

  const prohibitedItems = [
    "Weapons of any kind",
    "Alcohol and drugs",
    "Large bags and backpacks",
    "Professional camera equipment (without permit)",
    "Pets (except service animals)",
    "Balloons and kites",
    "Musical instruments",
    "Smoking materials",
  ]

  const emergencyProcedures = [
    {
      situation: "Medical Emergency",
      action: "Contact nearest zoo staff immediately. First aid stations available at entrance and central area.",
    },
    {
      situation: "Lost Child",
      action: "Report to information desk or any zoo staff. Lost child announcements will be made.",
    },
    {
      situation: "Animal Incident",
      action: "Do not approach. Alert zoo staff immediately. Follow evacuation instructions if given.",
    },
    {
      situation: "Weather Emergency",
      action: "Seek shelter in covered areas. Follow staff guidance for evacuation if necessary.",
    },
  ]

  return (
    <>
      <Navbar />

      <main>
        <HeroSection
          title="RULES & SAFETY GUIDELINES"
          subtitle="Ensuring a safe and enjoyable experience for all visitors"
          backgroundImage="/images/header/animal-bg.png"
          height="medium"
        />

        {/* Safety Rules */}
        <section className="py-16 bg-zoo-teal-700">
          <div className="zoo-container">
            <div
              className={`text-center mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <h2 className="font-heading text-4xl md:text-5xl text-white mb-4">SAFETY FIRST</h2>
              <p className="text-xl text-white/80">Essential rules for your safety and the welfare of our animals</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {safetyRules.map((rule, index) => (
                <Card
                  key={index}
                  className={`bg-white/10 border-white/20 text-white transition-all duration-500 hover:scale-105 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="text-zoo-yellow-600">{rule.icon}</div>
                      <Badge
                        className={
                          rule.importance === "critical" ? "bg-red-500 text-white" : "bg-orange-500 text-white"
                        }
                      >
                        {rule.importance === "critical" ? "CRITICAL" : "IMPORTANT"}
                      </Badge>
                    </div>
                    <CardTitle className="font-heading text-xl">{rule.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/80">{rule.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* General Guidelines */}
        <section className="py-16 bg-zoo-teal-800">
          <div className="zoo-container">
            <div
              className={`text-center mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <h2 className="font-heading text-4xl md:text-5xl text-white mb-4">VISITOR GUIDELINES</h2>
              <p className="text-xl text-white/80">Detailed guidelines for a pleasant zoo experience</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {generalGuidelines.map((section, index) => (
                <Card
                  key={index}
                  className={`bg-white/10 border-white/20 text-white ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <CardHeader>
                    <CardTitle className="font-heading text-2xl flex items-center gap-2">
                      <Leaf className="w-6 h-6 text-zoo-yellow-600" />
                      {section.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {section.rules.map((rule, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-zoo-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-white/90">{rule}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Prohibited Items */}
        <section className="py-16 bg-zoo-teal-700">
          <div className="zoo-container">
            <div className="max-w-4xl mx-auto">
              <div
                className={`text-center mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                <h2 className="font-heading text-4xl md:text-5xl text-white mb-4">PROHIBITED ITEMS</h2>
                <p className="text-xl text-white/80">Items not allowed inside the zoo premises</p>
              </div>

              <Alert className="bg-red-500/20 border-red-500/50 mb-8">
                <AlertTriangle className="h-4 w-4 text-red-400" />
                <AlertDescription className="text-white">
                  Security checks are conducted at the entrance. Prohibited items will be confiscated and may not be
                  returned.
                </AlertDescription>
              </Alert>

              <Card className="bg-white/10 border-white/20 text-white">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    {prohibitedItems.map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-sm font-bold">✕</span>
                        </div>
                        <span className="text-white/90">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Emergency Procedures */}
        <section className="py-16 bg-zoo-teal-800">
          <div className="zoo-container">
            <div
              className={`text-center mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <h2 className="font-heading text-4xl md:text-5xl text-white mb-4">EMERGENCY PROCEDURES</h2>
              <p className="text-xl text-white/80">Know what to do in case of emergencies</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {emergencyProcedures.map((procedure, index) => (
                <Card
                  key={index}
                  className={`bg-white/10 border-white/20 text-white ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <CardTitle className="font-heading text-xl flex items-center gap-2">
                      <Info className="w-5 h-5 text-zoo-yellow-600" />
                      {procedure.situation}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/80">{procedure.action}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Alert className="bg-zoo-yellow-600/20 border-zoo-yellow-600/50 max-w-2xl mx-auto">
                <Info className="h-4 w-4 text-zoo-yellow-600" />
                <AlertDescription className="text-white">
                  <strong>Emergency Contact:</strong> For immediate assistance, contact zoo security at +91 7070707070
                  or approach any zoo staff member.
                </AlertDescription>
              </Alert>
            </div>
          </div>
        </section>

        {/* Consequences */}
        <section className="py-16 bg-zoo-teal-700">
          <div className="zoo-container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-heading text-4xl md:text-5xl text-white mb-6">RULE VIOLATIONS</h2>
              <p className="text-xl text-white/80 mb-8">
                Violations of zoo rules may result in immediate removal from the premises without refund. Serious
                violations may lead to legal action.
              </p>
              <div className="bg-white/10 rounded-lg p-6">
                <h3 className="font-heading text-2xl text-white mb-4">Remember</h3>
                <p className="text-white/90">
                  These rules exist to protect you, other visitors, and our animals. By following them, you help us
                  maintain a safe and enjoyable environment for everyone. Thank you for your cooperation!
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

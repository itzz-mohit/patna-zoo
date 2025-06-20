"use client"

import { useState, useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Car, Bus, Train, Plane, Navigation, Clock, Phone } from "lucide-react"

export default function LocationPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const transportOptions = [
    {
      icon: <Car className="w-8 h-8" />,
      title: "By Car",
      description: "Drive to Bailey Road, Patna. Free parking available at the zoo entrance.",
      details: [
        "From Patna Junction: 15 minutes via Bailey Road",
        "From Patna Airport: 25 minutes via NH-83",
        "Free parking for 200+ vehicles",
        "Separate parking for buses and cars",
      ],
    },
    {
      icon: <Bus className="w-8 h-8" />,
      title: "By Bus",
      description: "Regular city bus services operate along Bailey Road with direct stops at the zoo.",
      details: [
        "Bus routes: 12, 15, 23, 45 stop at Patna Zoo",
        "Frequency: Every 10-15 minutes",
        "Fare: ₹10-15 from city center",
        "Nearest stop: Patna Zoo Bus Stand",
      ],
    },
    {
      icon: <Train className="w-8 h-8" />,
      title: "By Train",
      description: "Patna Junction is the nearest railway station, well connected to major cities.",
      details: [
        "Distance from Patna Junction: 8 km",
        "Auto-rickshaw fare: ₹80-100",
        "Taxi fare: ₹150-200",
        "Journey time: 20-30 minutes",
      ],
    },
    {
      icon: <Plane className="w-8 h-8" />,
      title: "By Air",
      description: "Jay Prakash Narayan International Airport is the nearest airport.",
      details: [
        "Distance from airport: 12 km",
        "Taxi fare: ₹250-350",
        "Pre-paid taxi available",
        "Journey time: 30-40 minutes",
      ],
    },
  ]

  const landmarks = [
    { name: "Patna Junction Railway Station", distance: "8 km", direction: "Southeast" },
    { name: "Gandhi Maidan", distance: "6 km", direction: "South" },
    { name: "Patna Museum", distance: "4 km", direction: "South" },
    { name: "Boring Road", distance: "3 km", direction: "Southwest" },
    { name: "Kankarbagh", distance: "5 km", direction: "West" },
    { name: "Danapur", distance: "12 km", direction: "West" },
  ]

  return (
    <>
      <Navbar />

      <main>
        <HeroSection
          title="LOCATION & HOW TO REACH"
          subtitle="Find your way to Patna Zoo with ease"
          backgroundImage="/images/header/animal-bg.png"
          height="medium"
        />

        {/* Address & Quick Info */}
        <section className="py-16 bg-zoo-teal-700">
          <div className="zoo-container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div
                className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                <h2 className="font-heading text-4xl md:text-5xl text-white mb-6">FIND US</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-zoo-yellow-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-heading text-xl text-white mb-2">Address</h3>
                      <p className="text-white/90">
                        Sanjay Gandhi Biological Park
                        <br />
                        Bailey Road, Patna
                        <br />
                        Bihar 800014, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-zoo-yellow-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-heading text-xl text-white mb-2">Contact</h3>
                      <p className="text-white/90">
                        Phone: +91 7070707070
                        <br />
                        Email: info@patnazoo.in
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-zoo-yellow-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-heading text-xl text-white mb-2">Opening Hours</h3>
                      <p className="text-white/90">
                        Tuesday - Sunday: 10:00 AM - 6:00 PM
                        <br />
                        Monday: Closed (except holidays)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={`relative h-96 rounded-lg overflow-hidden transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                <div className="w-full h-full bg-zoo-teal-600 flex items-center justify-center rounded-lg">
                  <div className="text-center text-white">
                    <MapPin className="w-16 h-16 mx-auto mb-4" />
                    <p className="text-lg font-medium">Interactive Map</p>
                    <p className="text-sm opacity-80">Sanjay Gandhi Biological Park</p>
                    <p className="text-sm opacity-80">Bailey Road, Patna</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Transportation Options */}
        <section className="py-16 bg-zoo-teal-800">
          <div className="zoo-container">
            <div
              className={`text-center mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <h2 className="font-heading text-4xl md:text-5xl text-white mb-4">HOW TO REACH</h2>
              <p className="text-xl text-white/80">Multiple convenient ways to reach Patna Zoo</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {transportOptions.map((option, index) => (
                <Card
                  key={index}
                  className={`bg-white/10 border-white/20 text-white transition-all duration-500 hover:scale-105 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="text-zoo-yellow-600">{option.icon}</div>
                      <div>
                        <CardTitle className="font-heading text-2xl">{option.title}</CardTitle>
                        <p className="text-white/80">{option.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {option.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-zoo-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-white/90 text-sm">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Nearby Landmarks */}
        <section className="py-16 bg-zoo-teal-700">
          <div className="zoo-container">
            <div
              className={`text-center mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <h2 className="font-heading text-4xl md:text-5xl text-white mb-4">NEARBY LANDMARKS</h2>
              <p className="text-xl text-white/80">Navigate using these well-known locations</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {landmarks.map((landmark, index) => (
                <Card
                  key={index}
                  className={`bg-white/10 border-white/20 text-white text-center transition-all duration-500 hover:scale-105 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <Navigation className="w-8 h-8 text-zoo-yellow-600 mx-auto mb-3" />
                    <h3 className="font-heading text-lg mb-2">{landmark.name}</h3>
                    <p className="text-zoo-yellow-600 font-medium">{landmark.distance}</p>
                    <p className="text-white/80 text-sm">{landmark.direction}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Directions & Tips */}
        <section className="py-16 bg-zoo-teal-800">
          <div className="zoo-container">
            <div className="grid md:grid-cols-2 gap-12">
              <Card
                className={`bg-white/10 border-white/20 text-white ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                <CardHeader>
                  <CardTitle className="font-heading text-2xl">Travel Tips</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-zoo-yellow-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-zoo-teal-900 text-sm font-bold">1</span>
                    </div>
                    <p className="text-white/90">
                      <strong>Best Time to Travel:</strong> Avoid peak hours (8-10 AM, 5-7 PM) for smoother traffic
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-zoo-yellow-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-zoo-teal-900 text-sm font-bold">2</span>
                    </div>
                    <p className="text-white/90">
                      <strong>Parking:</strong> Arrive early during weekends and holidays for better parking spots
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-zoo-yellow-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-zoo-teal-900 text-sm font-bold">3</span>
                    </div>
                    <p className="text-white/90">
                      <strong>Public Transport:</strong> City buses are the most economical option during peak hours
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-zoo-yellow-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-zoo-teal-900 text-sm font-bold">4</span>
                    </div>
                    <p className="text-white/90">
                      <strong>Navigation:</strong> Use "Patna Chidiya Ghar" as destination in GPS apps
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card
                className={`bg-white/10 border-white/20 text-white ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                <CardHeader>
                  <CardTitle className="font-heading text-2xl">Accessibility</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-zoo-yellow-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-zoo-teal-900 text-sm font-bold">♿</span>
                    </div>
                    <p className="text-white/90">
                      <strong>Wheelchair Access:</strong> Main pathways are paved and accessible
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-zoo-yellow-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-zoo-teal-900 text-sm font-bold">P</span>
                    </div>
                    <p className="text-white/90">
                      <strong>Accessible Parking:</strong> Reserved spots available near the entrance
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-zoo-yellow-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-zoo-teal-900 text-sm font-bold">🚻</span>
                    </div>
                    <p className="text-white/90">
                      <strong>Facilities:</strong> Accessible restrooms and seating areas throughout the zoo
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-zoo-yellow-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-zoo-teal-900 text-sm font-bold">ℹ</span>
                    </div>
                    <p className="text-white/90">
                      <strong>Assistance:</strong> Staff available to help visitors with special needs
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-zoo-teal-600 to-zoo-teal-700">
          <div className="zoo-container">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="font-heading text-4xl md:text-5xl text-white mb-6">PLAN YOUR JOURNEY</h2>
              <p className="text-xl text-white/80 mb-8">
                Ready to visit? Check our opening hours and ticket prices before you travel.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <Button className="zoo-button-primary">VIEW TICKETS & TIMINGS</Button>
                <Button className="zoo-button-secondary">DOWNLOAD MAP</Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

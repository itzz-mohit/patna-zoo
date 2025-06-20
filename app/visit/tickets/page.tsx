"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Clock, Users, CreditCard, Ticket, AlertCircle, Car, Camera } from "lucide-react"

export default function TicketsPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const ticketTypes = [
    {
      id: "standard",
      name: "Standard Entry",
      description: "Regular zoo admission",
      prices: [
        { category: "Adult", price: 50, note: "" },
        { category: "Child", price: 20, note: "" },
      ],
    },
    {
      id: "group",
      name: "Group Pricing",
      description: "For 10+ visitors",
      prices: [
        { category: "Adult (min 10)", price: 25, note: "" },
        { category: "Child (min 10)", price: 5, note: "" },
      ],
    },
    {
      id: "jan1st",
      name: "January 1st Special",
      description: "Special pricing for New Year's Day",
      prices: [
        { category: "Adult", price: 100, note: "" },
        { category: "Child", price: 50, note: "" },
      ],
    },
    {
      id: "other",
      name: "Other Attractions",
      description: "Additional attractions within the zoo",
      prices: [
        { category: "Aquarium (Adult)", price: 10, note: "" },
        { category: "Aquarium (Child)", price: 5, note: "" },
        { category: "Children Park (Adult)", price: 10, note: "" },
        { category: "Children Park (Child)", price: 5, note: "" },
        { category: "Boating (2-seater)", price: 80, note: "" },
        { category: "Boating (4-seater)", price: 100, note: "" },
      ],
    },
  ]

  const paymentMethods = [
    { name: "Cash", icon: "💵", description: "Pay at the entrance counter" },
    { name: "UPI", icon: "📱", description: "Scan QR code for instant payment" },
    { name: "Card", icon: "💳", description: "Debit/Credit cards accepted" },
    { name: "Online", icon: "🌐", description: "Book tickets online (Coming Soon)" },
  ]

  return (
    <>
      <Navbar />

      <main>
        <HeroSection
          title="TICKETS & TIMINGS"
          subtitle="Plan your visit with our pricing and schedule information"
          backgroundImage="/images/header/animal-bg.png"
          height="medium"
        />

        {/* Opening Hours */}
        <section className="py-16 bg-zoo-teal-700">
          <div className="zoo-container">
            <div
              className={`text-center mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <h2 className="font-heading text-4xl md:text-5xl text-white mb-4">OPENING HOURS</h2>
              <p className="text-xl text-white/80">Plan your visit around our operating schedule</p>
            </div>

            <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
              <Card
                className={`bg-white/10 border-white/20 text-white transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Clock className="w-8 h-8 text-zoo-yellow-600" />
                    <CardTitle className="font-heading text-2xl">Seasonal Timings</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">1st Oct - 31st March</span>
                    <span className="text-zoo-yellow-600">5:30 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">1st April - 30th September</span>
                    <span className="text-zoo-yellow-600">6:00 AM - 6:00 PM</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Ticket Pricing */}
        <section className="py-16 bg-zoo-teal-800">
          <div className="zoo-container">
            <div
              className={`text-center mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <h2 className="font-heading text-4xl md:text-5xl text-white mb-4">TICKET PRICES</h2>
              <p className="text-xl text-white/80">Choose the right ticket for your visit</p>
            </div>

            <Tabs defaultValue="standard" className="max-w-6xl mx-auto">
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 bg-white/10 border-white/20 mb-8">
                {ticketTypes.map((type) => (
                  <TabsTrigger
                    key={type.id}
                    value={type.id}
                    className="text-white data-[state=active]:bg-zoo-yellow-600 data-[state=active]:text-zoo-teal-900"
                  >
                    {type.name}
                  </TabsTrigger>
                ))}
              </TabsList>

              {ticketTypes.map((type) => (
                <TabsContent key={type.id} value={type.id}>
                  <Card className="bg-white/10 border-white/20 text-white">
                    <CardHeader>
                      <CardTitle className="font-heading text-2xl text-center">{type.name}</CardTitle>
                      <p className="text-white/80 text-center">{type.description}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {type.prices.map((price, index) => (
                          <div key={index} className="flex justify-between items-center p-4 bg-white/5 rounded-lg">
                            <div>
                              <span className="font-medium">{price.category}</span>
                              {price.note && <p className="text-white/70 text-sm">{price.note}</p>}
                            </div>
                            <div className="text-right">
                              <span className="text-2xl font-bold text-zoo-yellow-600">
                                {price.price === 0 ? "FREE" : `₹${price.price}`}
                              </span>
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

        {/* Parking Charges */}
        <section className="py-16 bg-zoo-teal-700">
          <div className="zoo-container">
            <div
              className={`text-center mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <h2 className="font-heading text-4xl md:text-5xl text-white mb-4">PARKING CHARGES</h2>
              <p className="text-xl text-white/80">Parking fees for different vehicles</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card
                className={`bg-white/10 border-white/20 text-white text-center transition-all duration-500 hover:scale-105 animate-on-scroll ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">
                    <Car />
                  </div>
                  <h3 className="font-heading text-xl mb-2">Two Wheeler</h3>
                  <p className="text-white/80 text-sm">₹20</p>
                </CardContent>
              </Card>
              <Card
                className={`bg-white/10 border-white/20 text-white text-center transition-all duration-500 hover:scale-105 animate-on-scroll ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">
                    <Car />
                  </div>
                  <h3 className="font-heading text-xl mb-2">Four Wheeler</h3>
                  <p className="text-white/80 text-sm">₹50</p>
                </CardContent>
              </Card>
              <Card
                className={`bg-white/10 border-white/20 text-white text-center transition-all duration-500 hover:scale-105 animate-on-scroll ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">
                    <Car />
                  </div>
                  <h3 className="font-heading text-xl mb-2">Bus/Truck</h3>
                  <p className="text-white/80 text-sm">₹100</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Camera Ticket Prices */}
        <section className="py-16 bg-zoo-teal-800">
          <div className="zoo-container">
            <div
              className={`text-center mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <h2 className="font-heading text-4xl md:text-5xl text-white mb-4">CAMERA CHARGES</h2>
              <p className="text-xl text-white/80">Fees for bringing cameras</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card
                className={`bg-white/10 border-white/20 text-white text-center transition-all duration-500 hover:scale-105 animate-on-scroll ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">
                    <Camera />
                  </div>
                  <h3 className="font-heading text-xl mb-2">Still Camera</h3>
                  <p className="text-white/80 text-sm">₹50</p>
                </CardContent>
              </Card>
              <Card
                className={`bg-white/10 border-white/20 text-white text-center transition-all duration-500 hover:scale-105 animate-on-scroll ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">
                    <Camera />
                  </div>
                  <h3 className="font-heading text-xl mb-2">Video Camera</h3>
                  <p className="text-white/80 text-sm">₹100</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Cloak Room Fees */}
        <section className="py-16 bg-zoo-teal-700">
          <div className="zoo-container">
            <div
              className={`text-center mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <h2 className="font-heading text-4xl md:text-5xl text-white mb-4">CLOAK ROOM FEES</h2>
              <p className="text-xl text-white/80">Charges for cloak room services</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card
                className={`bg-white/10 border-white/20 text-white text-center transition-all duration-500 hover:scale-105 animate-on-scroll ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                <CardContent className="p-6">
                  <h3 className="font-heading text-xl mb-2">Per Item</h3>
                  <p className="text-white/80 text-sm">₹10</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Entry Pass Fees */}
        <section className="py-16 bg-zoo-teal-800">
          <div className="zoo-container">
            <div
              className={`text-center mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <h2 className="font-heading text-4xl md:text-5xl text-white mb-4">ENTRY PASS FEES</h2>
              <p className="text-xl text-white/80">Fees for extended entry passes</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card
                className={`bg-white/10 border-white/20 text-white text-center transition-all duration-500 hover:scale-105 animate-on-scroll ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                <CardContent className="p-6">
                  <h3 className="font-heading text-xl mb-2">3 Months</h3>
                  <p className="text-white/80 text-sm">₹500</p>
                </CardContent>
              </Card>
              <Card
                className={`bg-white/10 border-white/20 text-white text-center transition-all duration-500 hover:scale-105 animate-on-scroll ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                <CardContent className="p-6">
                  <h3 className="font-heading text-xl mb-2">6 Months</h3>
                  <p className="text-white/80 text-sm">₹800</p>
                </CardContent>
              </Card>
              <Card
                className={`bg-white/10 border-white/20 text-white text-center transition-all duration-500 hover:scale-105 animate-on-scroll ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                <CardContent className="p-6">
                  <h3 className="font-heading text-xl mb-2">1 Year</h3>
                  <p className="text-white/80 text-sm">₹1200</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Payment Methods */}
        <section className="py-16 bg-zoo-teal-700">
          <div className="zoo-container">
            <div
              className={`text-center mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <h2 className="font-heading text-4xl md:text-5xl text-white mb-4">PAYMENT OPTIONS</h2>
              <p className="text-xl text-white/80">Multiple convenient ways to pay for your tickets</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {paymentMethods.map((method, index) => (
                <Card
                  key={index}
                  className={`bg-white/10 border-white/20 text-white text-center transition-all duration-500 hover:scale-105 animate-on-scroll ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">{method.icon}</div>
                    <h3 className="font-heading text-xl mb-2">{method.name}</h3>
                    <p className="text-white/80 text-sm">{method.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Online Booking Notice */}
        <section className="py-16 bg-zoo-teal-800">
          <div className="zoo-container">
            <Card className="bg-gradient-to-r from-orange-500 to-yellow-500 border-none text-white max-w-4xl mx-auto">
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <AlertCircle className="w-8 h-8" />
                  <h3 className="font-heading text-2xl">ONLINE BOOKING COMING SOON</h3>
                </div>
                <p className="text-lg mb-6">
                  We're working on an online ticket booking system to make your visit planning even easier. For now,
                  tickets are available at the zoo entrance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-white text-orange-600 hover:bg-gray-100">
                    <CreditCard className="w-5 h-5 mr-2" />
                    Notify Me When Available
                  </Button>
                  <Link href="/contact" className="zoo-button-secondary">
                    Contact for Group Bookings
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Important Information */}
        <section className="py-16 bg-zoo-teal-700">
          <div className="zoo-container">
            <div
              className={`text-center mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <h2 className="font-heading text-4xl md:text-5xl text-white mb-4">IMPORTANT INFORMATION</h2>
              <p className="text-xl text-white/80">Please read before your visit</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card
                className={`bg-white/10 border-white/20 text-white animate-on-scroll ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                <CardHeader>
                  <CardTitle className="font-heading text-xl flex items-center gap-2">
                    <Ticket className="w-6 h-6 text-zoo-yellow-600" />
                    Ticket Policies
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-zoo-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-white/90">Tickets are valid only for the date of purchase</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-zoo-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-white/90">No refunds or exchanges on purchased tickets</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-zoo-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-white/90">Children below 3 years enter free with valid age proof</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-zoo-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-white/90">
                      Group bookings must be made 24 hours in advance and are restricted on January 1st
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-zoo-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-white/90">On January 1st, tickets are available only at the counter</p>
                  </div>
                </CardContent>
              </Card>

              <Card
                className={`bg-white/10 border-white/20 text-white animate-on-scroll stagger-2 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                <CardHeader>
                  <CardTitle className="font-heading text-xl flex items-center gap-2">
                    <Users className="w-6 h-6 text-zoo-yellow-600" />
                    Visitor Guidelines
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-zoo-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-white/90">Maintain safe distance from animal enclosures</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-zoo-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-white/90">Do not feed animals unless in designated areas</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-zoo-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-white/90">Photography allowed, flash prohibited near animals</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-zoo-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-white/90">Keep the zoo clean - use designated waste bins</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-zoo-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-white/90">Follow staff instructions at all times</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-zoo-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-white/90">
                      A fine of ₹500 will be imposed for damaging zoo property or harming wildlife
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
            <div className="text-center max-w-3xl mx-auto animate-on-scroll">
              <h2 className="font-heading text-4xl md:text-5xl text-white mb-6">READY TO VISIT?</h2>
              <p className="text-xl text-white/80 mb-8">
                Plan your perfect day at Patna Zoo with our visitor resources
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <Link href="/visit" className="zoo-button-primary">
                  PLAN YOUR VISIT
                </Link>
                <Link href="/about/map" className="zoo-button-secondary">
                  VIEW ZOO MAP
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

"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock, MessageSquare, Users, Calendar } from "lucide-react"

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Address",
      details: ["Sanjay Gandhi Biological Park", "Bailey Road, Patna", "Bihar 800014, India"],
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: ["+91 7070707070", "+91 8080808080 (Education)", "+91 9090909090 (Events)"],
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: ["info@patnazoo.in", "education@patnazoo.in", "events@patnazoo.in"],
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Office Hours",
      details: ["Monday - Friday: 9:00 AM - 5:00 PM", "Saturday: 9:00 AM - 1:00 PM", "Sunday: Closed"],
    },
  ]

  const departments = [
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "General Inquiries",
      description: "Questions about visiting, tickets, and general information",
      contact: "info@patnazoo.in",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Education & Conservation",
      description: "School programs, conservation efforts, and research",
      contact: "education@patnazoo.in",
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Events & Marketing",
      description: "Special events, sponsorships, and media inquiries",
      contact: "events@patnazoo.in",
    },
  ]

  return (
    <>
      <Navbar />

      <main>
        <HeroSection
          title="CONTACT US"
          subtitle="Get in touch with our team for any questions or assistance"
          backgroundImage="/images/header/animal-bg.png"
          height="medium"
        />

        {/* Contact Information */}
        <section className="py-16 bg-zoo-teal-700">
          <div className="zoo-container">
            <div
              className={`text-center mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <h2 className="font-heading text-4xl md:text-5xl text-white mb-4">GET IN TOUCH</h2>
              <p className="text-xl text-white/80">We're here to help with any questions about your visit</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className={`bg-white/10 border-white/20 text-white transition-all duration-500 hover:scale-105 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="text-zoo-yellow-600 mb-2">{info.icon}</div>
                    <CardTitle className="font-heading text-xl">{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-white/80 text-sm mb-1">
                        {detail}
                      </p>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Contact Form */}
            <div className="grid lg:grid-cols-2 gap-12">
              <div
                className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
              >
                <h3 className="font-heading text-3xl text-white mb-6">SEND US A MESSAGE</h3>
                <Card className="bg-white border-none">
                  <CardContent className="p-6">
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-zoo-teal-700 font-medium mb-2">Name *</label>
                          <Input
                            type="text"
                            value={formData.name}
                            onChange={(e) => handleInputChange("name", e.target.value)}
                            className="border-zoo-teal-200 focus:border-zoo-teal-500"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-zoo-teal-700 font-medium mb-2">Email *</label>
                          <Input
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            className="border-zoo-teal-200 focus:border-zoo-teal-500"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-zoo-teal-700 font-medium mb-2">Phone</label>
                          <Input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                            className="border-zoo-teal-200 focus:border-zoo-teal-500"
                          />
                        </div>
                        <div>
                          <label className="block text-zoo-teal-700 font-medium mb-2">Subject *</label>
                          <Select
                            value={formData.subject}
                            onValueChange={(value) => handleInputChange("subject", value)}
                          >
                            <SelectTrigger className="border-zoo-teal-200 focus:border-zoo-teal-500">
                              <SelectValue placeholder="Select a subject" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="general">General Inquiry</SelectItem>
                              <SelectItem value="tickets">Tickets & Pricing</SelectItem>
                              <SelectItem value="education">Education Programs</SelectItem>
                              <SelectItem value="events">Events & Experiences</SelectItem>
                              <SelectItem value="group">Group Bookings</SelectItem>
                              <SelectItem value="feedback">Feedback</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-zoo-teal-700 font-medium mb-2">Message *</label>
                        <Textarea
                          value={formData.message}
                          onChange={(e) => handleInputChange("message", e.target.value)}
                          className="border-zoo-teal-200 focus:border-zoo-teal-500 min-h-32"
                          placeholder="Please provide details about your inquiry..."
                          required
                        />
                      </div>

                      <Button type="submit" className="w-full zoo-button-primary">
                        SEND MESSAGE
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Departments */}
              <div
                className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
              >
                <h3 className="font-heading text-3xl text-white mb-6">DEPARTMENTS</h3>
                <div className="space-y-4">
                  {departments.map((dept, index) => (
                    <Card key={index} className="bg-white/10 border-white/20 text-white">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="text-zoo-yellow-600 flex-shrink-0">{dept.icon}</div>
                          <div>
                            <h4 className="font-heading text-xl mb-2">{dept.title}</h4>
                            <p className="text-white/80 text-sm mb-3">{dept.description}</p>
                            <a
                              href={`mailto:${dept.contact}`}
                              className="text-zoo-yellow-600 hover:text-zoo-yellow-500 text-sm font-medium"
                            >
                              {dept.contact}
                            </a>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-zoo-teal-800">
          <div className="zoo-container">
            <div
              className={`text-center mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <h2 className="font-heading text-4xl md:text-5xl text-white mb-4">FIND US</h2>
              <p className="text-xl text-white/80">
                Located in the heart of Patna, easily accessible by public transport
              </p>
            </div>

            <Card className="bg-white border-none overflow-hidden">
              <CardContent className="p-0">
                <div className="h-96 bg-gray-200 flex items-center justify-center">
                  <div className="text-center text-gray-600">
                    <MapPin className="w-16 h-16 mx-auto mb-4" />
                    <p className="text-lg font-medium">Interactive Map</p>
                    <p className="text-sm">Sanjay Gandhi Biological Park, Bailey Road, Patna</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-heading text-lg text-zoo-teal-700 mb-2">By Car</h4>
                      <p className="text-zoo-teal-600 text-sm">
                        Free parking available at Gate No. 1 & 2. Follow Bailey Road from Patna city center.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-heading text-lg text-zoo-teal-700 mb-2">By Bus</h4>
                      <p className="text-zoo-teal-600 text-sm">
                        Take any bus going towards Bailey Road and alight at Patna Zoo Bus Stop.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-heading text-lg text-zoo-teal-700 mb-2">By Auto/Taxi</h4>
                      <p className="text-zoo-teal-600 text-sm">
                        Easily available from any location in Patna. Just ask for "Patna Chidiya Ghar".
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-zoo-teal-700">
          <div className="zoo-container">
            <div
              className={`text-center mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <h2 className="font-heading text-4xl md:text-5xl text-white mb-4">QUICK ANSWERS</h2>
              <p className="text-xl text-white/80">Common questions and immediate answers</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  question: "What are your opening hours?",
                  answer: "Tuesday-Sunday: 10 AM - 6 PM. Closed Mondays except holidays.",
                },
                {
                  question: "How much do tickets cost?",
                  answer: "Adults: ₹150, Children: ₹75, Seniors: ₹100. Children under 3 are free.",
                },
                {
                  question: "Can I bring food?",
                  answer: "Yes, outside food is allowed. We also have restaurants and cafes on-site.",
                },
                {
                  question: "Is parking available?",
                  answer: "Yes, free parking is available for all visitors.",
                },
                {
                  question: "Are pets allowed?",
                  answer: "Only service animals are permitted. Pets are not allowed for animal safety.",
                },
                {
                  question: "Do you offer group discounts?",
                  answer: "Yes, groups of 10+ receive special rates. Contact us for details.",
                },
              ].map((faq, index) => (
                <Card
                  key={index}
                  className={`bg-white/10 border-white/20 text-white transition-all duration-500 hover:scale-105 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <CardTitle className="font-heading text-lg">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/80 text-sm">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

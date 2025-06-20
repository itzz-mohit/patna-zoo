"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Utensils,
  Car,
  Accessibility,
  Baby,
  Camera,
  ShoppingBag,
  MapPin,
  Wifi,
  Phone,
  Heart,
  Users,
  Gamepad2,
} from "lucide-react"

export default function FacilitiesPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const facilityCategories = [
    {
      id: "dining",
      name: "Dining & Food",
      facilities: [
        {
          name: "Mayur Canteen",
          description: "Main restaurant serving vegetarian Indian cuisine",
          features: ["100% Vegetarian", "Air Conditioned", "80 Seating Capacity", "Hygienic Preparation"],
          location: "Central Area",
          hours: "10:00 AM - 5:30 PM",
          icon: <Utensils className="w-6 h-6" />,
        },
        {
          name: "Food Stalls",
          description: "Quick snacks and beverages throughout the zoo",
          features: ["Street Food", "Ice Cream", "Cold Drinks", "Fresh Juices"],
          location: "Multiple Locations",
          hours: "10:00 AM - 5:30 PM",
          icon: <ShoppingBag className="w-6 h-6" />,
        },
      ],
    },
    {
      id: "accessibility",
      name: "Accessibility",
      facilities: [
        {
          name: "Wheelchair Access",
          description: "Accessible pathways and facilities for visitors with mobility needs",
          features: ["Paved Pathways", "Ramps Available", "Accessible Restrooms", "Reserved Parking"],
          location: "Throughout Zoo",
          hours: "During Zoo Hours",
          icon: <Accessibility className="w-6 h-6" />,
        },
        {
          name: "Assistance Services",
          description: "Staff assistance for visitors with special needs",
          features: ["Trained Staff", "Wheelchair Rental", "Guide Assistance", "Emergency Support"],
          location: "Information Desk",
          hours: "During Zoo Hours",
          icon: <Heart className="w-6 h-6" />,
        },
      ],
    },
    {
      id: "family",
      name: "Family Services",
      facilities: [
        {
          name: "Baby Care Facilities",
          description: "Facilities for families with young children",
          features: ["Changing Stations", "Nursing Area", "High Chairs", "Baby Stroller Parking"],
          location: "Near Restrooms",
          hours: "During Zoo Hours",
          icon: <Baby className="w-6 h-6" />,
        },
        {
          name: "Children's Play Area",
          description: "Shishu Udyan - dedicated play area for children",
          features: ["Safe Play Equipment", "Shaded Seating", "Picnic Tables", "Educational Games"],
          location: "Shishu Udyan",
          hours: "10:00 AM - 5:30 PM",
          icon: <Gamepad2 className="w-6 h-6" />,
        },
      ],
    },
    {
      id: "services",
      name: "General Services",
      facilities: [
        {
          name: "Parking",
          description: "Free parking facilities for all visitors",
          features: ["Car Parking", "Bus Parking", "Motorcycle Parking", "Security Surveillance"],
          location: "Main Entrance",
          hours: "9:30 AM - 6:30 PM",
          icon: <Car className="w-6 h-6" />,
        },
        {
          name: "Information Services",
          description: "Visitor information and assistance",
          features: ["Maps & Brochures", "Lost & Found", "Emergency Contact", "Tour Information"],
          location: "Main Entrance",
          hours: "During Zoo Hours",
          icon: <MapPin className="w-6 h-6" />,
        },
        {
          name: "Photography Services",
          description: "Professional photography and souvenir photos",
          features: ["Family Photos", "Animal Backdrops", "Instant Printing", "Digital Copies"],
          location: "Multiple Locations",
          hours: "10:00 AM - 5:00 PM",
          icon: <Camera className="w-6 h-6" />,
        },
      ],
    },
  ]

  const amenities = [
    {
      icon: <Wifi className="w-8 h-8" />,
      title: "Free WiFi",
      description: "Complimentary internet access at main areas",
      availability: "Limited Areas",
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Emergency Contact",
      description: "24/7 emergency assistance available",
      availability: "Always Available",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Group Services",
      description: "Special arrangements for large groups",
      availability: "Advance Booking",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "First Aid",
      description: "Medical assistance and first aid stations",
      availability: "During Zoo Hours",
    },
  ]

  return (
    <>
      <Navbar />

      <main>
        <HeroSection
          title="FACILITIES & AMENITIES"
          subtitle="Everything you need for a comfortable and enjoyable visit"
          backgroundImage="/images/header/animal-bg.png"
          height="medium"
        />

        {/* Overview */}
        <section className="py-16 bg-zoo-teal-700">
          <div className="zoo-container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div
                className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                <h2 className="font-heading text-4xl md:text-5xl text-white mb-6">VISITOR COMFORT</h2>
                <p className="text-white/90 text-lg mb-4">
                  Patna Zoo is committed to providing a comfortable and accessible experience for all visitors. Our
                  comprehensive facilities ensure that families, individuals, and groups of all ages can enjoy their
                  visit to the fullest.
                </p>
                <p className="text-white/90 text-lg mb-4">
                  From dining options and accessibility features to family services and emergency support, we've
                  thoughtfully designed our amenities to meet diverse visitor needs while maintaining the highest
                  standards of cleanliness and safety.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-zoo-yellow-600">15+</div>
                    <p className="text-white/80 text-sm">Facilities Available</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-zoo-yellow-600">100%</div>
                    <p className="text-white/80 text-sm">Accessible Pathways</p>
                  </div>
                </div>
              </div>

              <div
                className={`relative h-96 rounded-lg overflow-hidden transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Zoo facilities overview"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-zoo-teal-900/80 to-transparent p-6">
                  <p className="text-white/90 text-sm">Modern facilities for visitor comfort</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Facilities by Category */}
        <section className="py-16 bg-zoo-teal-800">
          <div className="zoo-container">
            <div
              className={`text-center mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <h2 className="font-heading text-4xl md:text-5xl text-white mb-4">OUR FACILITIES</h2>
              <p className="text-xl text-white/80">Comprehensive amenities for every visitor's needs</p>
            </div>

            <Tabs defaultValue="dining" className="max-w-6xl mx-auto">
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 bg-white/10 border-white/20 mb-8">
                {facilityCategories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="text-white data-[state=active]:bg-zoo-yellow-600 data-[state=active]:text-zoo-teal-900"
                  >
                    {category.name.split(" ")[0]}
                  </TabsTrigger>
                ))}
              </TabsList>

              {facilityCategories.map((category) => (
                <TabsContent key={category.id} value={category.id}>
                  <div className="grid md:grid-cols-2 gap-6">
                    {category.facilities.map((facility, index) => (
                      <Card
                        key={index}
                        className="bg-white/10 border-white/20 text-white transition-all duration-500 hover:scale-105"
                      >
                        <CardHeader>
                          <div className="flex items-center gap-3 mb-2">
                            <div className="text-zoo-yellow-600">{facility.icon}</div>
                            <Badge className="bg-zoo-yellow-600 text-zoo-teal-900">{facility.location}</Badge>
                          </div>
                          <CardTitle className="font-heading text-xl">{facility.name}</CardTitle>
                          <p className="text-white/80">{facility.description}</p>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div>
                              <h4 className="font-medium text-white mb-2">Features:</h4>
                              <div className="grid grid-cols-2 gap-2">
                                {facility.features.map((feature, idx) => (
                                  <div key={idx} className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-zoo-yellow-600 rounded-full"></div>
                                    <span className="text-white/80 text-sm">{feature}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                            <div className="flex justify-between items-center pt-2 border-t border-white/20">
                              <span className="text-white/70 text-sm">Hours:</span>
                              <span className="text-zoo-yellow-600 text-sm font-medium">{facility.hours}</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Additional Amenities */}
        <section className="py-16 bg-zoo-teal-700">
          <div className="zoo-container">
            <div
              className={`text-center mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <h2 className="font-heading text-4xl md:text-5xl text-white mb-4">ADDITIONAL AMENITIES</h2>
              <p className="text-xl text-white/80">Extra services to enhance your zoo experience</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {amenities.map((amenity, index) => (
                <Card
                  key={index}
                  className={`bg-white/10 border-white/20 text-white text-center transition-all duration-500 hover:scale-105 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="text-zoo-yellow-600 mb-4 flex justify-center">{amenity.icon}</div>
                    <h3 className="font-heading text-lg mb-2">{amenity.title}</h3>
                    <p className="text-white/80 text-sm mb-3">{amenity.description}</p>
                    <Badge className="bg-zoo-yellow-600/20 text-zoo-yellow-600 border-zoo-yellow-600/50">
                      {amenity.availability}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Facility Map */}
        <section className="py-16 bg-zoo-teal-800">
          <div className="zoo-container">
            <div
              className={`text-center mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <h2 className="font-heading text-4xl md:text-5xl text-white mb-4">FACILITY LOCATIONS</h2>
              <p className="text-xl text-white/80">Find facilities easily with our interactive map</p>
            </div>

            <Card className="bg-white/10 border-white/20 text-white overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-96 bg-zoo-teal-600 flex items-center justify-center">
                  <div className="text-center text-white">
                    <MapPin className="w-16 h-16 mx-auto mb-4" />
                    <p className="text-lg font-medium">Interactive Facility Map</p>
                    <p className="text-sm opacity-80">Locate all amenities and services</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-heading text-lg text-white mb-2">Near Entrance</h4>
                      <ul className="text-white/80 text-sm space-y-1">
                        <li>• Information Desk</li>
                        <li>• Parking Area</li>
                        <li>• First Aid Station</li>
                        <li>• Ticket Counter</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-heading text-lg text-white mb-2">Central Area</h4>
                      <ul className="text-white/80 text-sm space-y-1">
                        <li>• Mayur Canteen</li>
                        <li>• Restrooms</li>
                        <li>• Souvenir Shop</li>
                        <li>• Photography Services</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-heading text-lg text-white mb-2">Throughout Zoo</h4>
                      <ul className="text-white/80 text-sm space-y-1">
                        <li>• Drinking Water</li>
                        <li>• Seating Areas</li>
                        <li>• Waste Bins</li>
                        <li>• Information Boards</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact for Special Needs */}
        <section className="py-16 bg-zoo-teal-700">
          <div className="zoo-container">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="font-heading text-4xl md:text-5xl text-white mb-6">SPECIAL ASSISTANCE</h2>
              <p className="text-xl text-white/80 mb-8">
                Need special accommodations or have specific requirements? Our team is here to help make your visit
                comfortable and enjoyable.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <a href="/contact" className="zoo-button-primary">
                  CONTACT US
                </a>
                <a href="tel:+917070707070" className="zoo-button-secondary">
                  CALL FOR ASSISTANCE
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

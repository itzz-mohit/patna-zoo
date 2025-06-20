"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Camera, Clock, MapPin, Star, Users, Award } from "lucide-react"
import { ImageGallery } from "@/components/image-gallery"

export default function PhotoServicesPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const serviceCategories = [
    {
      id: "packages",
      name: "Photo Packages",
      items: [
        {
          name: "Family Package",
          price: 1500,
          description: "Professional family photoshoot with 20 edited photos",
          duration: "2 hours",
          includes: "Digital copies, 1 printed album",
        },
        {
          name: "Couple Package",
          price: 1200,
          description: "Romantic couple session with wildlife backdrop",
          duration: "1.5 hours",
          includes: "15 edited photos, digital gallery",
        },
        {
          name: "Premium Package",
          price: 2500,
          description: "Complete zoo experience with professional photographer",
          duration: "4 hours",
          includes: "50+ photos, premium album, USB drive",
        },
        {
          name: "Group Package",
          price: 2000,
          description: "Perfect for school trips and large groups",
          duration: "3 hours",
          includes: "Group photos, individual shots, CD/DVD",
        },
        {
          name: "Wildlife Focus",
          price: 1800,
          description: "Specialized wildlife photography session",
          duration: "2.5 hours",
          includes: "Animal interaction photos, nature shots",
        },
        {
          name: "Birthday Special",
          price: 1600,
          description: "Birthday celebration photography package",
          duration: "2 hours",
          includes: "Cake cutting, party moments, decorations",
        },
      ],
    },
    {
      id: "workshops",
      name: "Photography Workshops",
      items: [
        {
          name: "Wildlife Photography",
          price: 800,
          description: "Learn professional wildlife photography techniques",
          duration: "4 hours",
          includes: "Equipment guidance, editing tips",
        },
        {
          name: "Photography Basics",
          price: 500,
          description: "Introduction to photography for beginners",
          duration: "2 hours",
          includes: "Camera settings, composition rules",
        },
        {
          name: "Advanced Techniques",
          price: 1000,
          description: "Master advanced photography skills",
          duration: "6 hours",
          includes: "Lighting, post-processing, portfolio review",
        },
        {
          name: "Mobile Photography",
          price: 300,
          description: "Create stunning photos with your smartphone",
          duration: "1.5 hours",
          includes: "Apps, editing techniques, tips",
        },
        {
          name: "Nature Photography",
          price: 600,
          description: "Capture the beauty of flora and fauna",
          duration: "3 hours",
          includes: "Macro techniques, natural lighting",
        },
        {
          name: "Portrait Photography",
          price: 700,
          description: "Master the art of portrait photography",
          duration: "3 hours",
          includes: "Posing, lighting, expression guidance",
        },
      ],
    },
    {
      id: "services",
      name: "Additional Services",
      items: [
        {
          name: "Instant Photography",
          price: 100,
          description: "Quick photo sessions with instant prints",
          duration: "15 minutes",
          includes: "2 printed photos, digital copy",
        },
        {
          name: "Photo Editing",
          price: 50,
          description: "Professional editing of your existing photos",
          duration: "Per photo",
          includes: "Color correction, enhancement",
        },
        {
          name: "Custom Albums",
          price: 800,
          description: "Personalized photo albums and scrapbooks",
          duration: "3-5 days",
          includes: "Design, printing, binding",
        },
        {
          name: "Digital Gallery",
          price: 200,
          description: "Online gallery for sharing and downloading",
          duration: "Lifetime access",
          includes: "Password protection, download rights",
        },
        {
          name: "Video Services",
          price: 1500,
          description: "Professional videography services",
          duration: "2 hours",
          includes: "Edited video, background music",
        },
        {
          name: "Drone Photography",
          price: 2000,
          description: "Aerial photography and videography",
          duration: "1 hour",
          includes: "HD footage, edited photos/videos",
        },
      ],
    },
    {
      id: "products",
      name: "Photo Products",
      items: [
        {
          name: "4x6 Prints",
          price: 15,
          description: "Standard photo prints on premium paper",
          duration: "Same day",
          includes: "Glossy or matte finish",
        },
        {
          name: "8x10 Prints",
          price: 50,
          description: "Large format prints for framing",
          duration: "Same day",
          includes: "High-quality paper, protective sleeve",
        },
        {
          name: "Canvas Prints",
          price: 500,
          description: "Gallery-wrapped canvas prints",
          duration: "2-3 days",
          includes: "Various sizes, ready to hang",
        },
        {
          name: "Photo Mugs",
          price: 200,
          description: "Personalized mugs with your photos",
          duration: "1 day",
          includes: "Dishwasher safe, gift box",
        },
        {
          name: "Photo Keychains",
          price: 100,
          description: "Acrylic keychains with your favorite photos",
          duration: "Same day",
          includes: "Durable material, clear image",
        },
        {
          name: "Photo Calendars",
          price: 400,
          description: "Custom calendars with your photos",
          duration: "2-3 days",
          includes: "12 months, spiral bound",
        },
      ],
    },
  ]

  const facilities = [
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Professional Equipment",
      description: "High-end cameras, lenses, and lighting equipment for stunning photos",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Photographers",
      description: "Experienced photographers specializing in wildlife and nature photography",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Custom Products",
      description: "Wide range of photo products and personalized gifts",
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Quality Guarantee",
      description: "100% satisfaction guarantee with professional editing and printing",
    },
  ]

  const galleryImages = [
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Professional wildlife photography session",
      title: "Wildlife Photography",
      description: "Capturing amazing moments with animals",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Family photo session at the zoo",
      title: "Family Sessions",
      description: "Creating lasting memories for families",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Photography workshop in progress",
      title: "Photography Workshops",
      description: "Learning professional techniques",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Custom photo products display",
      title: "Photo Products",
      description: "Personalized gifts and keepsakes",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Professional photo editing setup",
      title: "Photo Editing",
      description: "Professional editing and enhancement",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Instant photo printing service",
      title: "Instant Printing",
      description: "Quick photo printing services",
    },
  ]

  return (
    <>
      <Navbar />

      <main>
        <HeroSection
          title="PHOTO SERVICES"
          subtitle="Capture your zoo memories with professional photography"
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
                <h2 className="font-heading text-4xl md:text-5xl text-white mb-6">PROFESSIONAL PHOTOGRAPHY</h2>
                <p className="text-white/90 text-lg mb-4">
                  Capture your unforgettable moments at Patna Zoo with our professional photography services. Our
                  experienced photographers specialize in wildlife, family, and nature photography, ensuring you take
                  home stunning memories of your visit.
                </p>
                <p className="text-white/90 text-lg mb-4">
                  From family portraits with exotic animals to wildlife photography workshops, we offer comprehensive
                  services to suit every need. Our state-of-the-art equipment and expert editing ensure high-quality
                  results every time.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-zoo-yellow-600" />
                    <span className="text-white">Available: 10:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-zoo-yellow-600" />
                    <span className="text-white">Multiple Locations</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Camera className="w-5 h-5 text-zoo-yellow-600" />
                    <span className="text-white">Professional Equipment</span>
                  </div>
                </div>
              </div>

              <div
                className={`relative h-96 rounded-lg overflow-hidden transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Professional photography session"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-zoo-teal-900/80 to-transparent p-6">
                  <p className="text-white/90 text-sm">Professional photography services at Patna Zoo</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 bg-zoo-teal-800">
          <div className="zoo-container">
            <div
              className={`text-center mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <h2 className="font-heading text-4xl md:text-5xl text-white mb-4">OUR SERVICES</h2>
              <p className="text-xl text-white/80">Professional photography services for every occasion</p>
            </div>

            <Tabs defaultValue="packages" className="max-w-6xl mx-auto">
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 bg-white/10 border-white/20 mb-8">
                {serviceCategories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="text-white data-[state=active]:bg-zoo-yellow-600 data-[state=active]:text-zoo-teal-900"
                  >
                    {category.name.split(" ")[0]}
                  </TabsTrigger>
                ))}
              </TabsList>

              {serviceCategories.map((category) => (
                <TabsContent key={category.id} value={category.id}>
                  <Card className="bg-white/10 border-white/20 text-white">
                    <CardHeader>
                      <CardTitle className="font-heading text-2xl text-center">{category.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-4">
                        {category.items.map((item, index) => (
                          <div key={index} className="flex justify-between items-start p-4 bg-white/5 rounded-lg">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="font-medium">{item.name}</span>
                                <Badge className="bg-zoo-yellow-600 text-zoo-teal-900 text-xs px-2 py-0.5">
                                  <Camera className="w-3 h-3 mr-1" />
                                  PRO
                                </Badge>
                              </div>
                              <p className="text-white/70 text-sm mb-1">{item.description}</p>
                              <p className="text-zoo-yellow-600 text-xs">Duration: {item.duration}</p>
                              <p className="text-white/60 text-xs">Includes: {item.includes}</p>
                            </div>
                            <div className="text-right ml-4">
                              <span className="text-lg font-bold text-zoo-yellow-600">₹{item.price}</span>
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

        {/* Facilities */}
        <section className="py-16 bg-zoo-teal-700">
          <div className="zoo-container">
            <div
              className={`text-center mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <h2 className="font-heading text-4xl md:text-5xl text-white mb-4">WHY CHOOSE OUR SERVICES</h2>
              <p className="text-xl text-white/80">Professional quality and exceptional service guaranteed</p>
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
        <section className="py-16 bg-zoo-teal-800">
          <div className="zoo-container">
            <div
              className={`text-center mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <h2 className="font-heading text-4xl md:text-5xl text-white mb-4">OUR WORK GALLERY</h2>
              <p className="text-xl text-white/80">See examples of our professional photography services</p>
            </div>

            <ImageGallery images={galleryImages} />
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
                    Service Hours
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Tuesday - Sunday</span>
                    <span className="text-zoo-yellow-600">10:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Monday</span>
                    <Badge variant="destructive" className="bg-red-500">
                      Closed
                    </Badge>
                  </div>
                  <div className="pt-4 border-t border-white/20">
                    <p className="text-white/80 text-sm">
                      <strong>Note:</strong> Advance booking recommended for packages and workshops
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
                    Booking & Contact
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="font-medium mb-1">Main Studio</p>
                    <p className="text-white/80">Near main entrance, visitor information center</p>
                  </div>
                  <div>
                    <p className="font-medium mb-1">Booking</p>
                    <p className="text-white/80">Online booking available, walk-ins welcome</p>
                  </div>
                  <div>
                    <p className="font-medium mb-1">Special Offers</p>
                    <p className="text-white/80">Group discounts and seasonal packages available</p>
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

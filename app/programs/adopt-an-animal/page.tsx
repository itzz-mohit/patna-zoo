import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ImageGallery } from "@/components/image-gallery"
import { Download, Heart, Gift, Users, Camera, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "Adopt an Animal - Patna Zoo",
  description:
    "Support wildlife conservation by adopting an animal at Patna Zoo. Help provide care and support for our amazing animals.",
}

export default function AdoptAnimalPage() {
  const adoptionPackages = [
    {
      category: "Big Cats",
      animals: [
        {
          name: "Royal Bengal Tiger",
          species: "Panthera tigris tigris",
          image: "/images/meet-animals/a1.jpg",
          monthlyFee: "₹5,000",
          yearlyFee: "₹50,000",
          benefits: ["Certificate of Adoption", "Monthly Updates", "Free Zoo Entry", "Meet & Greet Session"],
        },
        {
          name: "Asiatic Lion",
          species: "Panthera leo persica",
          image: "/images/meet-animals/a2.jpg",
          monthlyFee: "₹4,500",
          yearlyFee: "₹45,000",
          benefits: ["Certificate of Adoption", "Monthly Updates", "Free Zoo Entry", "Photo Session"],
        },
      ],
    },
    {
      category: "Elephants",
      animals: [
        {
          name: "Indian Elephant",
          species: "Elephas maximus indicus",
          image: "/images/meet-animals/a3.jpg",
          monthlyFee: "₹8,000",
          yearlyFee: "₹80,000",
          benefits: ["Certificate of Adoption", "Weekly Updates", "VIP Zoo Access", "Feeding Experience"],
        },
      ],
    },
    {
      category: "Primates",
      animals: [
        {
          name: "Rhesus Macaque",
          species: "Macaca mulatta",
          image: "/images/meet-animals/a4.jpg",
          monthlyFee: "₹2,000",
          yearlyFee: "₹20,000",
          benefits: ["Certificate of Adoption", "Monthly Updates", "Free Zoo Entry", "Educational Materials"],
        },
      ],
    },
    {
      category: "Birds",
      animals: [
        {
          name: "Peacock",
          species: "Pavo cristatus",
          image: "/placeholder.svg?height=300&width=400",
          monthlyFee: "₹1,500",
          yearlyFee: "₹15,000",
          benefits: ["Certificate of Adoption", "Monthly Updates", "Free Zoo Entry", "Bird Watching Session"],
        },
      ],
    },
  ]

  const galleryImages = [
    {
      id: 1,
      src: "/images/meet-animals/a1.jpg",
      alt: "Adoption ceremony",
      title: "Adoption Ceremony",
      subtitle: "Meet your adopted animal",
    },
    {
      id: 2,
      src: "/images/meet-animals/a2.jpg",
      alt: "Animal care",
      title: "Daily Care",
      subtitle: "Professional animal care",
    },
    {
      id: 3,
      src: "/images/meet-animals/a3.jpg",
      alt: "Conservation work",
      title: "Conservation",
      subtitle: "Supporting wildlife protection",
    },
    {
      id: 4,
      src: "/images/meet-animals/a4.jpg",
      alt: "Educational programs",
      title: "Education",
      subtitle: "Learning about wildlife",
    },
  ]

  return (
    <>
      <Navbar />

      <main>
        <HeroSection
          images={["/images/hero/s1.jpg"]}
          title="ADOPT AN ANIMAL"
          subtitle="Support Wildlife Conservation"
          height="medium"
        />

        {/* Introduction */}
        <section className="py-16 bg-zoo-teal-700">
          <div className="zoo-container">
            <div className="max-w-4xl mx-auto text-center animate-on-scroll">
              <h2 className="font-heading text-3xl md:text-4xl text-white mb-6">Make a Lasting Impact</h2>
              <p className="text-lg text-white/90 mb-8 leading-relaxed">
                By adopting an animal at Patna Zoo, you become a vital part of our conservation mission. Your support
                helps provide nutritious food, medical care, habitat improvements, and contributes to wildlife
                conservation programs across Bihar and beyond.
              </p>

              {/* Download PDF Section */}
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 mb-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="text-left">
                    <h3 className="font-heading text-xl text-white mb-2">Complete Adoption Guide</h3>
                    <p className="text-white/80">
                      Download our comprehensive guide with detailed information about adoption packages, benefits, and
                      the adoption process.
                    </p>
                  </div>
                  <Link
                    href="/downloads/adoption-guide.pdf"
                    className="flex items-center gap-2 bg-zoo-yellow-600 hover:bg-zoo-yellow-500 text-zoo-teal-900 px-6 py-3 rounded-lg font-heading font-bold transition-colors duration-200"
                  >
                    <Download className="w-5 h-5" />
                    DOWNLOAD PDF
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Adoption Packages */}
        <section className="py-16 bg-zoo-teal-800">
          <div className="zoo-container">
            <div className="text-center mb-12 animate-on-scroll">
              <h2 className="font-heading text-3xl md:text-4xl text-white mb-4">ADOPTION PACKAGES</h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                Choose from our variety of adoption packages and become a guardian of wildlife conservation.
              </p>
            </div>

            <Tabs defaultValue="Big Cats" className="w-full">
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8 bg-white/10 border-white/20">
                {adoptionPackages.map((category) => (
                  <TabsTrigger
                    key={category.category}
                    value={category.category}
                    className="text-white data-[state=active]:bg-zoo-yellow-600 data-[state=active]:text-zoo-teal-900 hover:text-zoo-yellow-600 transition-colors"
                  >
                    {category.category}
                  </TabsTrigger>
                ))}
              </TabsList>

              {adoptionPackages.map((category) => (
                <TabsContent key={category.category} value={category.category}>
                  <div className="grid md:grid-cols-2 gap-8">
                    {category.animals.map((animal, index) => (
                      <Card
                        key={animal.name}
                        className={`overflow-hidden animate-on-scroll stagger-${index + 1} bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/15 transition-all duration-300`}
                      >
                        <div className="relative h-64">
                          <Image
                            src={animal.image || "/placeholder.svg"}
                            alt={animal.name}
                            fill
                            className="object-cover"
                          />
                          <Badge className="absolute top-4 right-4 bg-zoo-yellow-600 text-zoo-teal-900 hover:bg-zoo-yellow-500">
                            {category.category}
                          </Badge>
                        </div>
                        <div className="p-6">
                          <h3 className="font-heading text-xl text-white mb-2">{animal.name}</h3>
                          <p className="text-white/70 italic mb-4">{animal.species}</p>

                          <div className="grid grid-cols-2 gap-4 mb-6">
                            <div className="text-center p-4 bg-white/10 rounded-lg border border-white/20">
                              <div className="font-heading text-lg text-white">Monthly</div>
                              <div className="text-2xl font-bold text-zoo-yellow-600">{animal.monthlyFee}</div>
                            </div>
                            <div className="text-center p-4 bg-zoo-yellow-600/20 rounded-lg border border-zoo-yellow-600/30">
                              <div className="font-heading text-lg text-white">Yearly</div>
                              <div className="text-2xl font-bold text-zoo-yellow-600">{animal.yearlyFee}</div>
                            </div>
                          </div>

                          <div className="mb-6">
                            <h4 className="font-heading text-sm text-white mb-3 uppercase tracking-wide">
                              Adoption Benefits
                            </h4>
                            <ul className="space-y-2">
                              {animal.benefits.map((benefit, idx) => (
                                <li key={idx} className="flex items-center gap-2 text-sm text-white/80">
                                  <Heart className="w-4 h-4 text-zoo-yellow-600 flex-shrink-0" />
                                  {benefit}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <button className="w-full bg-zoo-yellow-600 hover:bg-zoo-yellow-500 text-zoo-teal-900 px-6 py-3 rounded-lg font-heading font-bold transition-colors duration-200">
                            ADOPT {animal.name.toUpperCase()}
                          </button>
                        </div>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-zoo-teal-700">
          <div className="zoo-container">
            <div className="text-center mb-12 animate-on-scroll">
              <h2 className="font-heading text-3xl md:text-4xl text-white mb-4">HOW ADOPTION WORKS</h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                Simple steps to become an animal guardian and support conservation efforts.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  icon: Heart,
                  title: "Choose Your Animal",
                  description: "Select an animal from our adoption packages that resonates with you.",
                },
                {
                  step: "2",
                  icon: Gift,
                  title: "Select Package",
                  description: "Choose between monthly or yearly adoption packages based on your preference.",
                },
                {
                  step: "3",
                  icon: Users,
                  title: "Complete Adoption",
                  description: "Fill out the adoption form and complete the payment process securely.",
                },
                {
                  step: "4",
                  icon: Award,
                  title: "Receive Benefits",
                  description: "Get your adoption certificate and start enjoying exclusive benefits.",
                },
              ].map((item, index) => (
                <Card
                  key={item.step}
                  className={`text-center animate-on-scroll stagger-${index + 1} bg-white/10 backdrop-blur-sm border-white/20 text-white p-6 hover:bg-white/15 transition-all duration-300`}
                >
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-zoo-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <item.icon className="w-8 h-8 text-zoo-teal-900" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center text-zoo-teal-900 font-bold text-sm shadow-md">
                      {item.step}
                    </div>
                  </div>
                  <h3 className="font-heading text-lg text-white mb-3">{item.title}</h3>
                  <p className="text-white/80 text-sm leading-relaxed">{item.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-16 bg-zoo-teal-800">
          <div className="zoo-container">
            <div className="text-center mb-12 animate-on-scroll">
              <h2 className="font-heading text-3xl md:text-4xl text-white mb-4">ADOPTION GALLERY</h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                See the impact of animal adoption and the joy it brings to both animals and adopters.
              </p>
            </div>

            <ImageGallery images={galleryImages} />
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-zoo-teal-700">
          <div className="zoo-container">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <Card className="p-8 animate-on-scroll bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/15 transition-all duration-300">
                <div className="w-16 h-16 bg-zoo-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <Heart className="w-8 h-8 text-zoo-teal-900" />
                </div>
                <h3 className="font-heading text-xl text-white mb-3">Adoption Coordinator</h3>
                <p className="text-white/80 mb-4">Get personalized assistance with your adoption process.</p>
                <p className="text-zoo-yellow-600 font-semibold">adoption@patnazoo.gov.in</p>
              </Card>

              <Card className="p-8 animate-on-scroll stagger-2 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/15 transition-all duration-300">
                <div className="w-16 h-16 bg-zoo-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <Users className="w-8 h-8 text-zoo-teal-900" />
                </div>
                <h3 className="font-heading text-xl text-white mb-3">Group Adoptions</h3>
                <p className="text-white/80 mb-4">Special packages for schools, corporations, and organizations.</p>
                <p className="text-zoo-yellow-600 font-semibold">+91 612 2234567</p>
              </Card>

              <Card className="p-8 animate-on-scroll stagger-3 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/15 transition-all duration-300">
                <div className="w-16 h-16 bg-zoo-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <Camera className="w-8 h-8 text-zoo-teal-900" />
                </div>
                <h3 className="font-heading text-xl text-white mb-3">Visit Your Animal</h3>
                <p className="text-white/80 mb-4">
                  Schedule special visits and photo sessions with your adopted animal.
                </p>
                <p className="text-zoo-yellow-600 font-semibold">visits@patnazoo.gov.in</p>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

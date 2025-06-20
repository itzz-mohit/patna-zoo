"use client"

import { useState, useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export default function FAQsPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const faqCategories = [
    {
      id: "general",
      name: "General Information",
      faqs: [
        {
          question: "What are the zoo's opening hours?",
          answer:
            "Patna Zoo is open Tuesday to Sunday from 10:00 AM to 6:00 PM. Last entry is at 5:00 PM. The zoo is closed on Mondays except for public holidays.",
        },
        {
          question: "How much do tickets cost?",
          answer:
            "Adult tickets cost ₹50, children (3-17 years) ₹25, seniors (60+) ₹30, and students ₹30 with valid ID. Children under 3 years enter free. Foreign visitors pay ₹100 for adults and ₹50 for children.",
        },
        {
          question: "Where is Patna Zoo located?",
          answer:
            "Sanjay Gandhi Biological Park is located on Bailey Road, Patna, Bihar 800014. It's easily accessible by public transport and has parking facilities available.",
        },
        {
          question: "Can I bring my own food?",
          answer:
            "Outside food is generally discouraged to maintain cleanliness and prevent animal feeding by visitors. However, small quantities of water are permitted. Food is available at Mayur Canteen inside the zoo.",
        },
        {
          question: "Is photography allowed?",
          answer:
            "Yes, photography is allowed throughout the zoo. However, flash photography is prohibited near animals as it can disturb them. Professional photography requires a special permit.",
        },
      ],
    },
    {
      id: "visiting",
      name: "Planning Your Visit",
      faqs: [
        {
          question: "How long does a typical visit take?",
          answer:
            "A typical visit lasts 2-3 hours, but allow more time if you wish to see all the animals and exhibits at a relaxed pace. The zoo covers 153 acres, so comfortable walking shoes are recommended.",
        },
        {
          question: "What should I bring for my visit?",
          answer:
            "Bring comfortable walking shoes, sun protection (hat, sunscreen), water bottle, and camera. During summer, carry extra water and wear light-colored clothing.",
        },
        {
          question: "Are there guided tours available?",
          answer:
            "Yes, guided tours are available for groups. Please contact the zoo administration in advance to arrange guided tours. Educational tours for schools can also be arranged.",
        },
        {
          question: "What's the best time to visit?",
          answer:
            "Early morning (10-11 AM) or late afternoon (4-5 PM) are the best times as animals are more active during cooler parts of the day. Avoid midday during summer months.",
        },
        {
          question: "Can I visit during monsoon season?",
          answer:
            "Yes, the zoo remains open during monsoon season. However, some outdoor activities may be limited during heavy rainfall. Check weather conditions before your visit.",
        },
      ],
    },
    {
      id: "facilities",
      name: "Facilities & Services",
      faqs: [
        {
          question: "Is the zoo wheelchair accessible?",
          answer:
            "While efforts are made to provide accessibility, some areas may have limited access due to terrain. The main pathways are paved, and there are accessible restrooms available.",
        },
        {
          question: "Are there restrooms available?",
          answer:
            "Yes, clean restroom facilities are available at multiple locations throughout the zoo, including near the entrance, Mayur Canteen, and children's area.",
        },
        {
          question: "Where can I eat inside the zoo?",
          answer:
            "Mayur Canteen offers a variety of vegetarian Indian food, snacks, and beverages. It's located in the central area of the zoo and operates during zoo hours.",
        },
        {
          question: "Is parking available?",
          answer:
            "Yes, free parking is available for visitors near the main entrance. The parking area can accommodate cars, motorcycles, and buses.",
        },
        {
          question: "Are there baby changing facilities?",
          answer:
            "Basic baby care facilities are available near the restrooms. However, it's recommended to bring your own baby care supplies.",
        },
      ],
    },
    {
      id: "animals",
      name: "Animals & Conservation",
      faqs: [
        {
          question: "What animals can I see at Patna Zoo?",
          answer:
            "Patna Zoo houses over 100 species including Royal Bengal Tigers, Indian Elephants, Sloth Bears, various bird species, reptiles, and many native animals of Bihar and Eastern India.",
        },
        {
          question: "Can I feed the animals?",
          answer:
            "No, visitors are strictly prohibited from feeding animals. This is for the safety of both animals and visitors. Animals are fed a carefully planned diet by trained keepers.",
        },
        {
          question: "What conservation work does the zoo do?",
          answer:
            "Patna Zoo participates in breeding programs for endangered species, conducts research, and runs education programs. We focus particularly on species native to Bihar and Eastern India.",
        },
        {
          question: "Are there animal shows or demonstrations?",
          answer:
            "The zoo occasionally organizes educational demonstrations and feeding sessions. Check with the information desk for current schedules during your visit.",
        },
        {
          question: "What happens to animals during extreme weather?",
          answer:
            "Animals have access to sheltered areas during extreme weather. During very hot days, many animals rest in shaded areas and are more active during cooler hours.",
        },
      ],
    },
    {
      id: "groups",
      name: "Groups & Education",
      faqs: [
        {
          question: "Do you offer group discounts?",
          answer:
            "Yes, groups of 15 or more people receive special rates. School groups pay ₹20 per student and adult groups pay ₹40 per person. Advance booking is required.",
        },
        {
          question: "How do I book a school trip?",
          answer:
            "Contact the zoo's education department at least 24 hours in advance. Provide details about group size, age of students, and preferred date. Educational materials can be arranged.",
        },
        {
          question: "Are there educational programs available?",
          answer:
            "Yes, we offer various educational programs including wildlife awareness sessions, conservation talks, and interactive workshops for different age groups.",
        },
        {
          question: "Can we organize birthday parties at the zoo?",
          answer:
            "Special arrangements can be made for birthday parties and celebrations. Contact the administration for details about packages and availability.",
        },
        {
          question: "Do you provide educational materials?",
          answer:
            "Yes, educational brochures, activity sheets, and information about animals are available. Teachers can request specific materials for their curriculum needs.",
        },
      ],
    },
    {
      id: "safety",
      name: "Safety & Rules",
      faqs: [
        {
          question: "What safety measures should I follow?",
          answer:
            "Maintain safe distance from enclosures, don't climb barriers, supervise children at all times, don't tease animals, and follow all posted signs and staff instructions.",
        },
        {
          question: "Are pets allowed in the zoo?",
          answer:
            "No, pets are not allowed inside the zoo for the safety of both zoo animals and visitor pets. Only service animals are permitted with proper documentation.",
        },
        {
          question: "What should I do in case of emergency?",
          answer:
            "In case of emergency, immediately contact the nearest zoo staff member or security personnel. First aid facilities are available, and emergency contact numbers are posted throughout the zoo.",
        },
        {
          question: "Are there any age restrictions for certain areas?",
          answer:
            "Most areas are suitable for all ages. However, parents should supervise young children closely, especially near water features and in crowded areas.",
        },
        {
          question: "What items are prohibited inside the zoo?",
          answer:
            "Prohibited items include weapons, alcohol, drugs, large bags, professional photography equipment without permit, and any items that could harm animals or visitors.",
        },
      ],
    },
  ]

  // Filter FAQs based on search term
  const filteredCategories = faqCategories
    .map((category) => ({
      ...category,
      faqs: category.faqs.filter(
        (faq) =>
          faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    }))
    .filter((category) => category.faqs.length > 0)

  return (
    <>
      <Navbar />

      <main>
        <HeroSection
          title="FREQUENTLY ASKED QUESTIONS"
          subtitle="Find answers to common questions about visiting Patna Zoo"
          backgroundImage="/images/header/animal-bg.png"
          height="medium"
        />

        {/* Search */}
        <section className="py-8 bg-zoo-teal-800">
          <div className="zoo-container">
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zoo-teal-400 w-5 h-5" />
                <Input
                  placeholder="Search FAQs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-zoo-teal-600 border-zoo-teal-500 text-white placeholder-zoo-teal-300"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 bg-zoo-teal-700">
          <div className="zoo-container">
            <div
              className={`text-center mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <h2 className="font-heading text-4xl md:text-5xl text-white mb-4">FIND YOUR ANSWERS</h2>
              <p className="text-xl text-white/80">Everything you need to know for a perfect zoo visit</p>
            </div>

            <div className="max-w-6xl mx-auto">
              <Tabs defaultValue="general" className="w-full">
                <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 bg-white/10 border-white/20 mb-8">
                  {faqCategories.map((category) => (
                    <TabsTrigger
                      key={category.id}
                      value={category.id}
                      className="text-white data-[state=active]:bg-zoo-yellow-600 data-[state=active]:text-zoo-teal-900 text-xs lg:text-sm"
                    >
                      {category.name.split(" ")[0]}
                    </TabsTrigger>
                  ))}
                </TabsList>

                {(searchTerm ? filteredCategories : faqCategories).map((category) => (
                  <TabsContent key={category.id} value={category.id}>
                    <div className="space-y-4">
                      <h3 className="font-heading text-2xl text-white mb-6">{category.name}</h3>

                      {category.faqs.length === 0 ? (
                        <div className="text-center py-8">
                          <p className="text-white/80">No FAQs found matching your search.</p>
                        </div>
                      ) : (
                        <Accordion type="single" collapsible className="space-y-4">
                          {category.faqs.map((faq, index) => (
                            <AccordionItem
                              key={index}
                              value={`${category.id}-${index}`}
                              className="bg-white/10 rounded-lg border-white/20 px-6"
                            >
                              <AccordionTrigger className="text-white hover:text-zoo-yellow-600 text-left">
                                {faq.question}
                              </AccordionTrigger>
                              <AccordionContent className="text-white/80 pb-4">{faq.answer}</AccordionContent>
                            </AccordionItem>
                          ))}
                        </Accordion>
                      )}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </div>
        </section>

        {/* Contact for More Help */}
        <section className="py-16 bg-zoo-teal-800">
          <div className="zoo-container">
            <div className="text-center max-w-3xl mx-auto animate-on-scroll">
              <h2 className="font-heading text-4xl md:text-5xl text-white mb-6">STILL HAVE QUESTIONS?</h2>
              <p className="text-xl text-white/80 mb-8">
                Can't find what you're looking for? Our team is here to help with any additional questions about your
                visit.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <a href="/contact" className="zoo-button-primary">
                  CONTACT US
                </a>
                <a href="tel:+917070707070" className="zoo-button-secondary">
                  CALL US
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

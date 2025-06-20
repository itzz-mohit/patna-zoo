"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { AnimalCard } from "@/components/animal-card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Search, Filter } from "lucide-react"

export default function AnimalsPage() {
  const searchParams = useSearchParams()
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  // Apply filter from URL params on page load
  useEffect(() => {
    const categoryParam = searchParams.get("category")
    if (categoryParam && ["mammals", "birds", "reptiles"].includes(categoryParam.toLowerCase())) {
      setSelectedCategory(
        categoryParam.toLowerCase() === "mammals"
          ? "Mammals"
          : categoryParam.toLowerCase() === "birds"
            ? "Birds"
            : "Reptiles",
      )
    }
  }, [searchParams])

  const animals = [
    {
      id: 1,
      name: "Royal Bengal Tiger",
      species: "Panthera tigris tigris",
      category: "Mammals",
      image: "/images/meet-animals/tiger.jpg",
      slug: "royal-bengal-tiger",
    },
    {
      id: 2,
      name: "Indian Elephant",
      species: "Elephas maximus indicus",
      category: "Mammals",
      image: "/images/meet-animals/a4.jpg",
      slug: "indian-elephant",
    },
    {
      id: 3,
      name: "Peacock",
      species: "Pavo cristatus",
      category: "Birds",
      image: "/images/meet-animals/a5.jpg",
      slug: "peacock",
    },
    {
      id: 4,
      name: "King Cobra",
      species: "Ophiophagus hannah",
      category: "Reptiles",
      image: "/images/meet-animals/king-cobra.jpg",
      slug: "king-cobra",
    },
    {
      id: 5,
      name: "Spotted Deer",
      species: "Axis axis",
      category: "Mammals",
      image: "/images/meet-animals/a2.jpg",
      slug: "spotted-deer",
    },
    {
      id: 6,
      name: "Indian Rhinoceros",
      species: "Rhinoceros unicornis",
      category: "Mammals",
      image: "/images/meet-animals/rhino.jpg",
      slug: "indian-rhinoceros",
    },
    {
      id: 7,
      name: "Cheetah",
      species: "Acinonyx jubatus",
      category: "Mammals",
      image: "/images/meet-animals/cheetah.jpg",
      slug: "cheetah",
    },
    {
      id: 8,
      name: "Gharial",
      species: "Gavialis gangeticus",
      category: "Reptiles",
      image: "/images/meet-animals/croc.jpg",
      slug: "gharial",
    },
    {
      id: 9,
      name: "Sambar Deer",
      species: "Rusa unicolor",
      category: "Mammals",
      image: "/placeholder.svg?height=400&width=400",
      slug: "sambar-deer",
    },
    {
      id: 10,
      name: "Nilgai",
      species: "Boselaphus tragocamelus",
      category: "Mammals",
      image: "/placeholder.svg?height=400&width=400",
      slug: "nilgai",
    },
    {
      id: 11,
      name: "Wild Boar",
      species: "Sus scrofa",
      category: "Mammals",
      image: "/placeholder.svg?height=400&width=400",
      slug: "wild-boar",
    },
    {
      id: 12,
      name: "Indian Roller",
      species: "Coracias benghalensis",
      category: "Birds",
      image: "/placeholder.svg?height=400&width=400",
      slug: "indian-roller",
    },
    {
      id: 13,
      name: "Lesser Adjutant Stork",
      species: "Leptoptilos javanicus",
      category: "Birds",
      image: "/placeholder.svg?height=400&width=400",
      slug: "lesser-adjutant-stork",
    },
    {
      id: 14,
      name: "Painted Stork",
      species: "Mycteria leucocephala",
      category: "Birds",
      image: "/placeholder.svg?height=400&width=400",
      slug: "painted-stork",
    },
    {
      id: 15,
      name: "Indian Python",
      species: "Python molurus",
      category: "Reptiles",
      image: "/placeholder.svg?height=400&width=400",
      slug: "indian-python",
    },
    {
      id: 16,
      name: "Monitor Lizard",
      species: "Varanus bengalensis",
      category: "Reptiles",
      image: "/placeholder.svg?height=400&width=400",
      slug: "monitor-lizard",
    },
  ]

  const categories = ["all", "Mammals", "Birds", "Reptiles"]

  const filteredAnimals = animals.filter((animal) => {
    const matchesSearch =
      animal.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      animal.species.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || animal.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  // Animation observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 },
    )

    const animatedElements = document.querySelectorAll(".animate-on-scroll")
    animatedElements.forEach((el) => observer.observe(el))

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  // Get page title based on filter
  const getPageTitle = () => {
    if (selectedCategory === "Birds") return "BIRDS"
    if (selectedCategory === "Reptiles") return "REPTILES"
    if (selectedCategory === "Mammals") return "MAMMALS"
    return "ANIMALS"
  }

  const getPageSubtitle = () => {
    if (selectedCategory === "Birds") return "Discover the beautiful birds that call Patna Zoo home"
    if (selectedCategory === "Reptiles") return "Meet the fascinating reptiles at Patna Zoo"
    if (selectedCategory === "Mammals") return "Explore the amazing mammals at Patna Zoo"
    return "Discover the amazing animals that call Patna Zoo home"
  }

  return (
    <>
      <Navbar />

      <main>
        <HeroSection
          title={getPageTitle()}
          subtitle={getPageSubtitle()}
          backgroundImage="/images/header/animal-bg.png"
          height="medium"
        />

        {/* Filters */}
        <section className="py-8 bg-zoo-teal-800">
          <div className="zoo-container">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zoo-teal-400 w-5 h-5" />
                  <Input
                    placeholder="Search animals..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-zoo-teal-600 border-zoo-teal-500 text-white placeholder-zoo-teal-300 w-full sm:w-80"
                  />
                </div>

                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="bg-zoo-teal-600 border-zoo-teal-500 text-white w-full sm:w-48">
                    <Filter className="w-4 h-4 mr-2" />
                    <SelectValue placeholder="Animal group" />
                  </SelectTrigger>
                  <SelectContent className="bg-zoo-teal-600 border-zoo-teal-500">
                    {categories.map((category) => (
                      <SelectItem key={category} value={category} className="text-white hover:bg-zoo-teal-500">
                        {category === "all" ? "All Animals" : category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button
                variant="outline"
                className="border-zoo-yellow-600 text-zoo-yellow-600 hover:bg-zoo-yellow-600 hover:text-zoo-teal-900"
                onClick={() => {
                  setSearchTerm("")
                  setSelectedCategory("all")
                }}
              >
                CLEAR ALL FILTERS
              </Button>
            </div>
          </div>
        </section>

        {/* Animals Grid */}
        <section className="py-16 bg-zoo-teal-700">
          <div className="zoo-container">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredAnimals.map((animal, index) => (
                <AnimalCard
                  key={animal.id}
                  name={animal.name}
                  species={animal.species}
                  category={animal.category}
                  image={animal.image}
                  slug={animal.slug}
                  className={`stagger-${(index % 5) + 1}`}
                />
              ))}
            </div>

            {filteredAnimals.length === 0 && (
              <div className="text-center py-16 animate-fade-in">
                <p className="text-white text-xl mb-4">No animals found matching your search criteria.</p>
                <Button
                  onClick={() => {
                    setSearchTerm("")
                    setSelectedCategory("all")
                  }}
                  className="bg-zoo-yellow-600 hover:bg-zoo-yellow-500 text-zoo-teal-900"
                >
                  CLEAR FILTERS
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

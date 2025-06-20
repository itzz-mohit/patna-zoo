"use client";

import { useState, useEffect } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { PlantCard } from "@/components/plant-card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Search, Filter } from "lucide-react";
import { plantData } from "@/utils/plantsDetails";

export default function PlantsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const plants = [
    {
      id: 1,
      name: "Banyan Tree",
      species: "Ficus benghalensis",
      category: "Trees",
      image: "/placeholder.svg?height=400&width=400",
      slug: "banyan-tree",
      height: "20-25m",
      bloomingSeason: "Year-round",
      medicinal: true,
    },
    {
      id: 2,
      name: "Neem Tree",
      species: "Azadirachta indica",
      category: "Trees",
      image: "/placeholder.svg?height=400&width=400",
      slug: "neem-tree",
      height: "15-20m",
      bloomingSeason: "March-May",
      medicinal: true,
    },
    {
      id: 3,
      name: "Marigold",
      species: "Tagetes erecta",
      category: "Flowers",
      image: "/placeholder.svg?height=400&width=400",
      slug: "marigold",
      height: "30-90cm",
      bloomingSeason: "October-March",
      medicinal: false,
    },
    {
      id: 4,
      name: "Rose",
      species: "Rosa indica",
      category: "Flowers",
      image: "/placeholder.svg?height=400&width=400",
      slug: "rose",
      height: "1-2m",
      bloomingSeason: "November-April",
      medicinal: true,
    },
    {
      id: 5,
      name: "Bamboo",
      species: "Bambusa vulgaris",
      category: "Grasses",
      image: "/placeholder.svg?height=400&width=400",
      slug: "bamboo",
      height: "10-20m",
      bloomingSeason: "Rarely flowers",
      medicinal: true,
    },
    {
      id: 6,
      name: "Tulsi",
      species: "Ocimum tenuiflorum",
      category: "Herbs",
      image: "/placeholder.svg?height=400&width=400",
      slug: "tulsi",
      height: "30-60cm",
      bloomingSeason: "July-September",
      medicinal: true,
    },
    {
      id: 7,
      name: "Mango Tree",
      species: "Mangifera indica",
      category: "Trees",
      image: "/placeholder.svg?height=400&width=400",
      slug: "mango-tree",
      height: "10-40m",
      bloomingSeason: "December-April",
      medicinal: true,
    },
    {
      id: 8,
      name: "Lotus",
      species: "Nelumbo nucifera",
      category: "Aquatic",
      image: "/placeholder.svg?height=400&width=400",
      slug: "lotus",
      height: "Above water surface",
      bloomingSeason: "June-September",
      medicinal: true,
    },
    {
      id: 9,
      name: "Bougainvillea",
      species: "Bougainvillea spectabilis",
      category: "Flowers",
      image: "/placeholder.svg?height=400&width=400",
      slug: "bougainvillea",
      height: "1-12m",
      bloomingSeason: "Year-round",
      medicinal: false,
    },
    {
      id: 10,
      name: "Aloe Vera",
      species: "Aloe barbadensis",
      category: "Succulents",
      image: "/placeholder.svg?height=400&width=400",
      slug: "aloe-vera",
      height: "60-100cm",
      bloomingSeason: "February-March",
      medicinal: true,
    },
    {
      id: 11,
      name: "Jasmine",
      species: "Jasminum officinale",
      category: "Flowers",
      image: "/placeholder.svg?height=400&width=400",
      slug: "jasmine",
      height: "1-3m",
      bloomingSeason: "June-September",
      medicinal: true,
    },
    {
      id: 12,
      name: "Peepal Tree",
      species: "Ficus religiosa",
      category: "Trees",
      image: "/placeholder.svg?height=400&width=400",
      slug: "peepal-tree",
      height: "20-30m",
      bloomingSeason: "April-May",
      medicinal: true,
    },
  ];

  const categories = [
    "all",
    "Trees",
    "Flowers",
    "Herbs",
    "Grasses",
    "Aquatic",
    "Succulents",
  ];

  const filteredPlants = plants.filter((plant) => {
    const matchesSearch =
      plant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      plant.species.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || plant.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Animation observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    const animatedElements = document.querySelectorAll(".animate-on-scroll");
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      <Navbar />

      <main>
        <HeroSection
          title="PLANTS & FLORA"
          subtitle="Explore the diverse plant life and botanical wonders at Patna Zoo"
          backgroundImage="/images/header/plant-bg.png"
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
                    placeholder="Search plants..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-zoo-teal-600 border-zoo-teal-500 text-white placeholder-zoo-teal-300 w-full sm:w-80"
                  />
                </div>

                <Select
                  value={selectedCategory}
                  onValueChange={setSelectedCategory}
                >
                  <SelectTrigger className="bg-zoo-teal-600 border-zoo-teal-500 text-white w-full sm:w-48">
                    <Filter className="w-4 h-4 mr-2" />
                    <SelectValue placeholder="Plant type" />
                  </SelectTrigger>
                  <SelectContent className="bg-zoo-teal-600 border-zoo-teal-500">
                    {categories.map((category) => (
                      <SelectItem
                        key={category}
                        value={category}
                        className="text-white hover:bg-zoo-teal-500"
                      >
                        {category === "all" ? "All Plants" : category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button
                variant="outline"
                className="border-zoo-yellow-600 text-zoo-yellow-600 hover:bg-zoo-yellow-600 hover:text-zoo-teal-900"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                }}
              >
                CLEAR ALL FILTERS
              </Button>
            </div>
          </div>
        </section>

        {/* Plants Grid */}
        <section className="py-16 bg-zoo-teal-700">
          <div className="zoo-container">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {plantData.map((plant, index) => (
                <PlantCard
                  key={plant.id}
                  name={plant.name}
                  scientificName={plant.scientificName}
                  image={plant.imageName}
                  slug={plant.slug}
                  className={`stagger-${(index % 5) + 1}`}
                />
              ))}
            </div>

            {filteredPlants.length === 0 && (
              <div className="text-center py-16 animate-fade-in">
                <p className="text-white text-xl mb-4">
                  No plants found matching your search criteria.
                </p>
                <Button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("all");
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
  );
}

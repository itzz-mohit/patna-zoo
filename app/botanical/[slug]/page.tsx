"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowLeft,
  MapPin,
  Calendar,
  Ruler,
  Heart,
  Leaf,
  Sun,
  Droplets,
} from "lucide-react";
import { plantData } from "@/utils/plantsDetails";
import Image from "next/image";
import Link from "next/link";

export default function PlantDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const plantDetails = plantData.find((item) => item.slug === slug);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [plant, setPlant] = useState<any>(null);

  // useEffect(() => {
  //   // In a real app, you'd fetch this data from an API
  //   const plantData = plantsData[slug as keyof typeof plantsData];
  //   if (plantData) {
  //     setPlant(plantData);
  //   }
  // }, [slug]);

  if (!plantDetails) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-zoo-teal-700 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-2xl font-bold mb-4">Plant not found</h1>
            <Link href="/plants">
              <Button className="bg-zoo-yellow-600 hover:bg-zoo-yellow-500 text-zoo-teal-900">
                Back to Plants
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-zoo-teal-700 mt-28 ">
        {/* Breadcrumb */}
        {/* <div className="bg-zoo-teal-800 py-4">
          <div className="zoo-container">
            <Link
              href="/plants"
              className="inline-flex items-center text-zoo-yellow-600 hover:text-zoo-yellow-500 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Plants
            </Link>
          </div>
        </div> */}

        <div className="zoo-container py-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src={
                    `/images/plant-images/${plantDetails.imageName}` ||
                    "/placeholder.svg"
                  }
                  alt={plantDetails.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Plant Information */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  {/* <Badge
                    className={`text-white border-none uppercase tracking-wide font-heading text-sm font-bold px-3 py-1 ${
                      plant.category === "Trees"
                        ? "bg-green-600"
                        : plant.category === "Flowers"
                        ? "bg-pink-500"
                        : plant.category === "Herbs"
                        ? "bg-emerald-500"
                        : plant.category === "Grasses"
                        ? "bg-lime-500"
                        : plant.category === "Aquatic"
                        ? "bg-blue-500"
                        : plant.category === "Succulents"
                        ? "bg-teal-500"
                        : "bg-zoo-teal-600"
                    }`}
                  >
                    {plant.category}
                  </Badge> */}

                  <Badge className="bg-red-500 text-white">
                    {plantDetails.family}
                  </Badge>
                </div>

                <h1 className="text-5xl font-heading font-bold text-white my-4">
                  {plantDetails.name}
                </h1>
                {/* <p className="text-zoo-yellow-600 text-xl italic mb-4">
                  {plantDetails.scientificName}
                </p>
                <p className="text-zoo-yellow-600 text-xl italic mb-4">
                  {plantDetails.commonNames}
                </p>
                <p className="text-zoo-yellow-600 text-xl italic mb-4">
                  {plantDetails.origin}
                </p>
                <p className="text-white/80 text-lg leading-relaxed">
                  {plantDetails.appearance}
                </p> */}
                <div>
                  <div className="flex gap-2">
                    <p className="text-white text-lg font-semibold">
                      Scientific:
                    </p>
                    <p className="text-zoo-yellow-600 text-lg  italic">
                      {plantDetails.scientificName}
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <p className="text-white text-lg font-semibold">
                      Common:
                    </p>
                    <p className="text-zoo-yellow-600 text-lg italic">
                      {plantDetails.commonNames}
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <p className="text-white text-lg font-semibold">Origin:</p>
                    <p className="text-zoo-yellow-600 text-lg italic">
                      {plantDetails.origin}
                    </p>
                  </div>

                  <div className="mt-5">
                    {/* <p className="text-white text-2xl font-semibold">Appearance:</p> */}
                    <p className="text-white/80 text-lg leading-relaxed">
                      {plantDetails.appearance}
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Facts */}
              {/* <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6">
                  <h3 className="text-white font-heading text-xl mb-4">
                    Quick Facts
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2 text-white/80">
                      <Ruler className="w-4 h-4 text-zoo-yellow-600" />
                      <span className="text-sm">Height: {plant.height}</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/80">
                      <Calendar className="w-4 h-4 text-zoo-yellow-600" />
                      <span className="text-sm">
                        Blooms: {plant.bloomingSeason}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-white/80">
                      <Sun className="w-4 h-4 text-zoo-yellow-600" />
                      <span className="text-sm">{plant.sunlight}</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/80">
                      <Droplets className="w-4 h-4 text-zoo-yellow-600" />
                      <span className="text-sm">{plant.watering}</span>
                    </div>
                  </div>
                </CardContent>
              </Card> */}

              {/* Visit Information */}
              {/* <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6">
                  <h3 className="text-white font-heading text-xl mb-4">
                    Visit Information
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-zoo-yellow-600 mt-0.5" />
                      <div>
                        <p className="text-white font-medium">Location</p>
                        <p className="text-white/80 text-sm">
                          {plant.location}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Calendar className="w-4 h-4 text-zoo-yellow-600 mt-0.5" />
                      <div>
                        <p className="text-white font-medium">
                          Best Viewing Time
                        </p>
                        <p className="text-white/80 text-sm">
                          {plant.bestViewingTime}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card> */}
            </div>
          </div>

          {/* Detailed Information */}
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            {/* Uses */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                <h3 className="text-white font-heading text-xl mb-4">Uses</h3>
                <div>
                  {plantDetails.uses.map((use: string, index: number) => (
                    <div key={index} className="flex items-start gap-2 ">
                      <Leaf className="w-6 h-6 text-zoo-yellow-600 mt-0.5 flex-shrink-0" />
                      <p className="text-white/80 ">{use}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Environmental Benefits */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                <h3 className="text-white font-heading text-xl mb-4">
                  Environmental Benefits
                </h3>
                <div>
                  {plantDetails.environmentalBenefits.map(
                    (environmentalBenefit: string, index: number) => (
                      <div key={index} className="flex items-start gap-2 ">
                        <Leaf className="w-6 h-6 text-zoo-yellow-600 mt-0.5 flex-shrink-0" />
                        <p className="text-white/80 ">{environmentalBenefit}</p>
                      </div>
                    )
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Uses */}
          {/* <Card className="mt-8 bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-6">
              <h3 className="text-white font-heading text-xl mb-4">Uses</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {plantDetails.uses.map((fact: string, index: number) => (
                  <div key={index} className="flex items-start gap-2">
                    <Leaf className="w-4 h-4 text-zoo-yellow-600 mt-0.5 flex-shrink-0" />
                    <p className="text-white/80 text-sm">{fact}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card> */}

          {/* Environmental Benefits */}
          {/* <Card className="mt-8 bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-6">
              <h3 className="text-white font-heading text-xl mb-4">
                Environmental Benefits
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {plantDetails.environmentalBenefits.map(
                  (fact: string, index: number) => (
                    <div key={index} className="flex items-start gap-2">
                      <Leaf className="w-4 h-4 text-zoo-yellow-600 mt-0.5 flex-shrink-0" />
                      <p className="text-white/80 text-sm">{fact}</p>
                    </div>
                  )
                )}
              </div>
            </CardContent>
          </Card> */}

          {/* Fun Fact of the Day - Positioned after Explore Wildlife section */}
          <section className="py-16">
            <div className="zoo-container">
              <div className="max-w-5xl mx-auto animate-on-scroll">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-2 bg-zoo-yellow-500 text-zoo-teal-800 px-4 py-2 rounded-full font-heading font-bold text-sm uppercase tracking-wide mb-6">
                    <span>🌟</span>
                    Fun Fact of the Day
                  </div>
                  <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white mb-2">
                    DID YOU KNOW?
                  </h2>
                </div>

                <div className="relative">
                  {/* Large decorative quotation mark */}
                  <div className="absolute -top-4 -left-4 md:-top-8 md:-left-8 text-zoo-yellow-400/30 text-8xl md:text-9xl lg:text-[12rem] font-serif leading-none pointer-events-none select-none">
                    "
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 relative">
                    <div className="relative z-10">
                      <p className="text-xl md:text-2xl lg:text-3xl text-white leading-relaxed mb-8 font-light">
                        {plantDetails.funFact}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <h3 className="text-white font-heading text-2xl mb-4">
              Plan Your Visit
            </h3>
            <p className="text-white/80 mb-6">
              Come and see this amazing plant species in person at Patna Zoo
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={plantDetails.wikipediaUrl}>
                <Button
                  variant="outline"
                  className="hover:border-white hover:text-white bg-white text-zoo-teal-900 px-8 py-3"
                >
                  EXPLORE MORE
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Leaf, Heart } from "lucide-react";

interface PlantCardProps {
  name: string;
  scientificName: string;
  slug: string;
  image: string;
  className?: string;
}

export function PlantCard({
  name,
  scientificName,
  slug,
  image,
  className,
}: PlantCardProps) {
  const cardRef = useRef<HTMLAnchorElement>(null);

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

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <Link
      href={`/botanical/${slug}`}
      className={cn("block zoo-card group animate-on-scroll", className)}
      ref={cardRef}
    >
      <div className="relative aspect-square overflow-hidden">
        <Image
          // src={image || "/placeholder.svg"}
          src={`/images/plant-images/${image}`||"/placeholder.svg"}
          alt={name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* <Badge
          className={`absolute top-3 right-3 sm:top-4 sm:right-4 text-white border-none uppercase tracking-wide font-heading responsive-text-xs font-bold px-2 py-1 sm:px-3 sm:py-1 ${
            category === "Trees"
              ? "bg-green-600"
              : category === "Flowers"
              ? "bg-pink-500"
              : category === "Herbs"
              ? "bg-emerald-500"
              : category === "Grasses"
              ? "bg-lime-500"
              : category === "Aquatic"
              ? "bg-blue-500"
              : category === "Succulents"
              ? "bg-teal-500"
              : "bg-zoo-teal-600"
          }`}
        >
          {category}
        </Badge> */}

        {/* <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
          <Heart className="w-5 h-5 text-red-500 fill-red-500" />
        </div> */}

        <div className="zoo-card-overlay">
          <h3 className="font-heading responsive-text-xl sm:responsive-text-2xl text-white">
            {name}
          </h3>
          <p className="text-white/80 responsive-text-sm italic leading-relaxed mb-2">
            {scientificName}
          </p>
          {/* <div className="flex items-center gap-2 text-white/70 responsive-text-xs">
            <Leaf className="w-3 h-3" />
            <span>Height: {height}</span>
          </div>
          <div className="text-white/70 responsive-text-xs mt-1">
            Blooms: {bloomingSeason}
          </div> */}
        </div>
      </div>
    </Link>
  );
}

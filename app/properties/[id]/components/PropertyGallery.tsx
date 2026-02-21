"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Expand } from "lucide-react";

// Dummy extra images using same property image repeated with different indices
// Replace with real images later
const getImages = (mainImage: string) => [
  mainImage,
  "/images/properties/property-2.jpg",
  "/images/properties/property-3.jpg",
  "/images/properties/property-4.jpg",
  "/images/properties/property-1.jpg",
  "/images/properties/property-2.jpg",
  "/images/properties/property-3.jpg",
];

const MAX_VISIBLE_THUMBS = 5;

export default function PropertyGallery({ image, title }: { image: string; title: string }) {
  const images = getImages(image);
  const [active, setActive] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const visibleThumbs = showAll ? images : images.slice(0, MAX_VISIBLE_THUMBS);
  const hiddenCount = images.length - MAX_VISIBLE_THUMBS;

  const prev = () => setActive((p) => (p === 0 ? images.length - 1 : p - 1));
  const next = () => setActive((p) => (p === images.length - 1 ? 0 : p + 1));

  return (
    <div className="flex flex-col gap-3">

      {/* Main Image */}
      <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-muted group">
        <img
          src={images[active]}
          alt={title}
          className="w-full h-full object-cover transition-all duration-500"
        />

        {/* Prev / Next */}
        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground shadow-md opacity-0 group-hover:opacity-100 transition-all duration-200 hover:bg-background"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground shadow-md opacity-0 group-hover:opacity-100 transition-all duration-200 hover:bg-background"
        >
          <ChevronRight size={18} />
        </button>

        {/* Counter badge */}
        <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white text-xs font-body">
          {active + 1} / {images.length}
        </div>

        {/* Expand icon */}
        <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-200">
          <Expand size={14} />
        </div>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2 flex-wrap">
        {visibleThumbs.map((img, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`relative w-16 h-14 sm:w-20 sm:h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 shrink-0 ${
              active === i
                ? "border-primary shadow-md scale-105"
                : "border-transparent hover:border-border"
            }`}
          >
            <img
              src={img}
              alt={`Thumbnail ${i + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}

        {/* Show more button */}
        {!showAll && hiddenCount > 0 && (
          <button
            onClick={() => setShowAll(true)}
            className="w-16 h-14 sm:w-20 sm:h-16 rounded-lg border-2 border-border bg-muted flex flex-col items-center justify-center gap-0.5 hover:bg-muted/70 transition-all duration-200 shrink-0"
          >
            <span className="font-display text-lg font-semibold text-foreground leading-none">
              +{hiddenCount}
            </span>
            <span className="text-[9px] font-body text-muted-foreground uppercase tracking-wide">
              more
            </span>
          </button>
        )}
      </div>
    </div>
  );
}
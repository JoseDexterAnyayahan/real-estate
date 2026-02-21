"use client";

import Link from "next/link";
import { MapPin, BedDouble, Bath, Maximize2, ArrowUpRight } from "lucide-react";
import { properties, formatPrice, type Property } from "@/lib/data/properties";

const featured = properties.filter((p) => p.featured);

function PropertyCard({ property }: { property: Property }) {
  return (
    <Link
      href={`/properties/${property.id}`}
      className="group block bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          <span
            className={`px-3 py-1 rounded-full text-xs font-body font-medium tracking-wide ${
              property.status === "For Sale"
                ? "bg-primary text-primary-foreground"
                : "bg-accent text-accent-foreground"
            }`}
          >
            {property.status}
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-body font-medium tracking-wide bg-black/40 text-white backdrop-blur-sm">
            {property.type}
          </span>
        </div>

        {/* Price tag */}
        <div className="absolute bottom-3 right-3">
          <span className="px-4 py-1.5 rounded-full text-sm font-body font-semibold bg-background/90 text-foreground backdrop-blur-sm shadow-md">
            {formatPrice(property.price, property.status)}
          </span>
        </div>

        {/* View Details overlay on hover */}
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all duration-500 flex items-center justify-center">
          <span className="px-5 py-2 rounded-full bg-background/0 group-hover:bg-background text-foreground text-xs font-body font-semibold tracking-widest uppercase opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-400 shadow-lg">
            View Details
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">

        {/* Location */}
        <div className="flex items-center gap-1.5 text-muted-foreground mb-2">
          <MapPin size={12} className="shrink-0" />
          <span className="text-xs font-body tracking-wide truncate">
            {property.location}
          </span>
        </div>

        {/* Title + Arrow */}
        <div className="flex items-start justify-between gap-2 mb-3">
          <h3 className="font-display text-xl text-foreground group-hover:text-primary transition-colors duration-200 leading-snug">
            {property.title}
          </h3>
          <div className="shrink-0 w-7 h-7 rounded-full border border-border flex items-center justify-center text-muted-foreground group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 mt-0.5">
            <ArrowUpRight size={13} />
          </div>
        </div>

        {/* Description */}
        <p className="text-xs font-body text-muted-foreground leading-relaxed line-clamp-2 mb-4">
          {property.description}
        </p>

        {/* Divider */}
        <div className="border-t border-border mb-3" />

        {/* Specs */}
        <div className="flex items-center gap-4">
          {property.bedrooms > 0 && (
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <BedDouble size={13} />
              <span className="text-xs font-body">{property.bedrooms} Beds</span>
            </div>
          )}
          {property.bathrooms > 0 && (
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <Bath size={13} />
              <span className="text-xs font-body">{property.bathrooms} Baths</span>
            </div>
          )}
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <Maximize2 size={13} />
            <span className="text-xs font-body">{property.area} sqm</span>
          </div>
        </div>

      </div>
    </Link>
  );
}

export default function FeaturedProperties() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-3">
              Handpicked For You
            </p>
            <h2 className="font-display text-4xl sm:text-5xl text-foreground font-light leading-tight">
              Featured <span className="italic">Properties</span>
            </h2>
            <p className="font-body text-muted-foreground text-sm mt-3 max-w-md">
              A curated selection of premium listings across the Philippines —
              from city condos to suburban family homes.
            </p>
          </div>

          <Link
            href="/properties"
            className="group inline-flex items-center gap-2 text-sm font-body font-medium text-primary hover:gap-3 transition-all duration-200 shrink-0"
          >
            View All Properties
            <ArrowUpRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-16 rounded-2xl bg-primary p-10 flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute -right-10 -top-10 w-48 h-48 rounded-full bg-white/5 pointer-events-none" />
          <div className="absolute -right-4 -bottom-10 w-32 h-32 rounded-full bg-white/5 pointer-events-none" />

          <div className="relative z-10 text-center sm:text-left">
            <h3 className="font-display text-3xl text-primary-foreground font-light mb-1">
              Have a Property to List?
            </h3>
            <p className="font-body text-primary-foreground/70 text-sm">
              Reach thousands of qualified buyers and renters across the Philippines.
            </p>
          </div>

          <Link
            href="/list-property"
            className="relative z-10 shrink-0 px-8 py-3 bg-accent hover:bg-accent/90 text-accent-foreground rounded-xl font-body font-medium text-sm transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
          >
            List Your Property
          </Link>
        </div>

      </div>
    </section>
  );
}
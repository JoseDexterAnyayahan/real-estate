import Link from "next/link";
import { MapPin, BedDouble, Bath, Maximize2, ArrowUpRight } from "lucide-react";
import { formatPrice, type Property } from "@/lib/data/properties";

export default function PropertyCard({ property }: { property: Property }) {
  return (
    <Link
      href={`/properties/${property.id}`}
      className="group flex flex-col bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/3] shrink-0">
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

        {/* Price */}
        <div className="absolute bottom-3 right-3">
          <span className="px-4 py-1.5 rounded-full text-sm font-body font-semibold bg-background/90 text-foreground backdrop-blur-sm shadow-md">
            {formatPrice(property.price, property.status)}
          </span>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all duration-500 flex items-center justify-center">
          <span className="px-5 py-2 rounded-full bg-background/0 group-hover:bg-background text-foreground text-xs font-body font-semibold tracking-widest uppercase opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
            View Details
          </span>
        </div>
      </div>

      {/* Content — flex column so specs always stick to bottom */}
      <div className="flex flex-col flex-1 p-5">
        {/* Location */}
        <div className="flex items-center gap-1.5 text-muted-foreground mb-2">
          <MapPin size={12} className="shrink-0" />
          <span className="text-xs font-body tracking-wide truncate">
            {property.location}
          </span>
        </div>

        {/* Title + Arrow */}
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-display text-xl text-foreground group-hover:text-primary transition-colors duration-200 leading-snug line-clamp-2 min-h-[3.5rem]">
            {property.title}
          </h3>
          <div className="shrink-0 w-7 h-7 rounded-full border border-border flex items-center justify-center text-muted-foreground group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 mt-0.5">
            <ArrowUpRight size={13} />
          </div>
        </div>

        {/* Description — fixed height so it never shifts layout */}
        <p className="text-xs font-body text-muted-foreground leading-relaxed line-clamp-2 mb-4 min-h-[2.5rem]">
          {property.description}
        </p>

        {/* Spacer — pushes specs to bottom */}
        <div className="flex-1" />

        {/* Divider */}
        <div className="border-t border-border mb-3" />

        {/* Specs — always at bottom */}
        <div className="flex items-center gap-4">
          {property.bedrooms > 0 && (
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <BedDouble size={13} />
              <span className="text-xs font-body">
                {property.bedrooms} Beds
              </span>
            </div>
          )}
          {property.bathrooms > 0 && (
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <Bath size={13} />
              <span className="text-xs font-body">
                {property.bathrooms} Baths
              </span>
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

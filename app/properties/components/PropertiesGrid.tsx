"use client";

import { useSearchParams } from "next/navigation";
import { properties } from "@/lib/data/properties";
import PropertyCard from "./PropertyCard";
import { Building2 } from "lucide-react";

export default function PropertiesGrid() {
  const searchParams = useSearchParams();

  const status = searchParams.get("status") || "";
  const city = searchParams.get("city") || "";
  const type = searchParams.get("type") || "";
  const minPrice = searchParams.get("minPrice") || "";
  const maxPrice = searchParams.get("maxPrice") || "";
  const id = searchParams.get("id") || "";

  const filtered = properties.filter((p) => {
    if (id && !p.id.toLowerCase().includes(id.toLowerCase())) return false;
    if (status && p.status !== status) return false;
    if (city && p.city !== city) return false;
    if (type && p.type !== type) return false;
    if (minPrice && p.price < parseInt(minPrice)) return false;
    if (maxPrice && p.price > parseInt(maxPrice)) return false;
    return true;
  });

  return (
    <div className="flex flex-col gap-6">

      {/* Results Count */}
      <div className="flex items-center justify-between">
        <p className="font-body text-sm text-muted-foreground">
          Showing{" "}
          <span className="font-semibold text-foreground">{filtered.length}</span>{" "}
          {filtered.length === 1 ? "property" : "properties"}
          {status && <span> · <span className="text-primary">{status}</span></span>}
          {city && <span> · <span className="text-primary">{city}</span></span>}
          {type && <span> · <span className="text-primary">{type}</span></span>}
        </p>

        {/* Sort — UI only for now */}
        <select className="text-xs font-body text-muted-foreground bg-transparent border border-border rounded-lg px-3 py-2 focus:outline-none cursor-pointer hover:border-primary/50 transition-colors duration-200">
          <option>Newest First</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Area: Largest</option>
        </select>
      </div>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {filtered.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-24 gap-4 text-center">
          <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
            <Building2 size={24} className="text-muted-foreground" />
          </div>
          <div>
            <p className="font-display text-2xl text-foreground font-light mb-1">
              No properties found
            </p>
            <p className="font-body text-sm text-muted-foreground">
              Try adjusting your filters to see more results.
            </p>
          </div>
        </div>
      )}

    </div>
  );
}
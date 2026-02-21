import { MapPin, BedDouble, Bath, Maximize2, Tag, Hash, Calendar } from "lucide-react";
import { type Property, formatPrice } from "@/lib/data/properties";

export default function PropertyDetails({ property }: { property: Property }) {
  const specs = [
    ...(property.bedrooms > 0
      ? [{ icon: BedDouble, label: "Bedrooms", value: `${property.bedrooms}` }]
      : []),
    ...(property.bathrooms > 0
      ? [{ icon: Bath, label: "Bathrooms", value: `${property.bathrooms}` }]
      : []),
    { icon: Maximize2, label: "Floor Area", value: `${property.area} sqm` },
    { icon: Tag, label: "Status", value: property.status },
    { icon: Hash, label: "Property ID", value: property.id.toUpperCase() },
    { icon: Calendar, label: "Listed", value: "February 2025" },
  ];

  return (
    <div className="flex flex-col gap-8 mt-8">

      {/* Title + Price */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-border">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className={`px-3 py-1 rounded-full text-xs font-body font-medium ${
              property.status === "For Sale"
                ? "bg-primary/10 text-primary"
                : "bg-accent/20 text-accent-foreground"
            }`}>
              {property.status}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-body font-medium bg-muted text-muted-foreground">
              {property.type}
            </span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl text-foreground font-light leading-tight">
            {property.title}
          </h1>
          <div className="flex items-center gap-1.5 mt-2 text-muted-foreground">
            <MapPin size={13} />
            <span className="font-body text-sm">{property.location}</span>
          </div>
        </div>
        <div className="shrink-0 text-right">
          <p className="font-body text-xs text-muted-foreground uppercase tracking-widest mb-1">
            {property.status === "For Rent" ? "Monthly Rent" : "Selling Price"}
          </p>
          <p className="font-display text-3xl sm:text-4xl text-primary font-semibold">
            {formatPrice(property.price, property.status)}
          </p>
        </div>
      </div>

      {/* Specs Grid */}
      <div>
        <h2 className="font-display text-xl text-foreground mb-4">
          Property Details
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {specs.map((spec) => {
            const Icon = spec.icon;
            return (
              <div
                key={spec.label}
                className="flex items-start gap-3 p-4 rounded-xl bg-muted/50 border border-border"
              >
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Icon size={14} className="text-primary" />
                </div>
                <div>
                  <p className="text-[10px] font-body uppercase tracking-widest text-muted-foreground">
                    {spec.label}
                  </p>
                  <p className="font-body text-sm font-medium text-foreground mt-0.5">
                    {spec.value}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Description */}
      <div>
        <h2 className="font-display text-xl text-foreground mb-3">
          About This Property
        </h2>
        <p className="font-body text-sm text-muted-foreground leading-relaxed">
          {property.description}
        </p>
        <p className="font-body text-sm text-muted-foreground leading-relaxed mt-3">
          This property is located in one of the most sought-after areas in {property.city},
          offering easy access to major roads, commercial establishments, schools, and lifestyle
          hubs. Whether you are looking for a primary residence or a sound investment, this
          property presents exceptional value.
        </p>
      </div>

      {/* Location */}
      <div>
        <h2 className="font-display text-xl text-foreground mb-3">
          Location
        </h2>
        <div className="w-full h-56 rounded-xl bg-muted border border-border flex items-center justify-center">
          <p className="font-body text-sm text-muted-foreground">
            Map embed — {property.location}
          </p>
        </div>
      </div>

    </div>
  );
}
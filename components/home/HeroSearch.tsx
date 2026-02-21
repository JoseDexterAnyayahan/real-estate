"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, MapPin, Home, DollarSign, Hash, X } from "lucide-react";
import { cities, propertyTypes } from "@/lib/data/properties";

const minPrices = [
  { label: "Any", value: "" },
  { label: "₱1M", value: "1000000" },
  { label: "₱3M", value: "3000000" },
  { label: "₱5M", value: "5000000" },
  { label: "₱10M", value: "10000000" },
  { label: "₱20M", value: "20000000" },
];

const maxPrices = [
  { label: "Any", value: "" },
  { label: "₱5M", value: "5000000" },
  { label: "₱10M", value: "10000000" },
  { label: "₱20M", value: "20000000" },
  { label: "₱50M", value: "50000000" },
  { label: "₱100M+", value: "100000000" },
];

function FilterField({
  label,
  icon: Icon,
  children,
}: {
  label: string;
  icon: React.ElementType;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      <label className="text-[10px] font-body tracking-widest uppercase text-muted-foreground">
        {label}
      </label>
      <div className="flex items-center gap-2 border border-border rounded-lg px-3 py-2.5 hover:border-primary/50 transition-colors duration-200 bg-background">
        <Icon size={13} className="text-muted-foreground shrink-0" />
        {children}
      </div>
    </div>
  );
}

export default function HeroSearch() {
  const router = useRouter();
  const [status, setStatus] = useState<"For Sale" | "For Rent">("For Sale");
  const [city, setCity] = useState("");
  const [type, setType] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [propertyId, setPropertyId] = useState("");

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (status) params.set("status", status);
    if (city) params.set("city", city);
    if (type) params.set("type", type);
    if (minPrice) params.set("minPrice", minPrice);
    if (maxPrice) params.set("maxPrice", maxPrice);
    if (propertyId) params.set("id", propertyId);
    router.push(`/properties?${params.toString()}`);
  };

  const handleClear = () => {
    setCity("");
    setType("");
    setMinPrice("");
    setMaxPrice("");
    setPropertyId("");
    setStatus("For Sale");
  };

  const selectClass =
    "w-full bg-transparent text-sm font-body text-foreground focus:outline-none cursor-pointer";

  return (
    <section className="relative w-full">
      {/* ── Hero Image Block ── */}
      <div className="relative w-full h-[45vh] sm:h-[52vh] lg:h-[58vh] min-h-[300px] overflow-hidden">
        <img
          src="/images/hero/hero.jpg"
          alt="Hero background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/10" />

        {/* Grain */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "128px 128px",
          }}
        />

        {/* Hero Text */}
        <div className="absolute bottom-8 sm:bottom-10 left-0 right-0 px-4 sm:px-8 lg:px-0">
          <div className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8">
            <p className="font-body text-[9px] sm:text-[10px] tracking-[0.4em] uppercase text-white/50 mb-1.5 sm:mb-2">
              Premium Real Estate Philippines
            </p>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-6xl text-white font-light leading-tight">
              Property <span className="italic">Search</span>
            </h1>
          </div>
        </div>
      </div>

      {/* ── Floating Search Bar ── */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-background shadow-2xl border border-border -mt-8 sm:-mt-10 rounded-xl overflow-hidden">
          {/* Status Tabs */}
          <div className="flex border-b border-border">
            {(["For Sale", "For Rent"] as const).map((s) => (
              <button
                key={s}
                onClick={() => setStatus(s)}
                className={`flex-1 sm:flex-none px-5 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-sm font-body font-medium tracking-wide transition-all duration-200 border-b-2 -mb-px ${
                  status === s
                    ? "border-primary text-primary"
                    : "border-transparent text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                {s}
              </button>
            ))}
          </div>

          {/* Filter Fields */}
          <div className="p-4 sm:p-5 lg:p-6">
            {/* Row 1: ID + Location + Type (all screens get 1 col, tablet gets 3 col, desktop stays inline) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {/* Property ID */}
              <FilterField label="Property ID" icon={Hash}>
                <input
                  type="text"
                  placeholder="Any"
                  value={propertyId}
                  onChange={(e) => setPropertyId(e.target.value)}
                  className={selectClass + " placeholder:text-muted-foreground"}
                />
              </FilterField>

              {/* Location */}
              <FilterField label="Location" icon={MapPin}>
                <select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className={selectClass}
                >
                  <option value="">Any</option>
                  {cities.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </FilterField>

              {/* Property Type */}
              <FilterField label="Property Type" icon={Home}>
                <select
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className={selectClass}
                >
                  <option value="">Any</option>
                  {propertyTypes.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </FilterField>

              {/* Min Price */}
              {/* Min Price */}
              <FilterField
                label="Min. Price"
                icon={() => (
                  <span className="text-muted-foreground text-sm font-body shrink-0">
                    ₱
                  </span>
                )}
              >
                <select
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                  className={selectClass}
                >
                  {minPrices.map((p) => (
                    <option key={p.value} value={p.value}>
                      {p.label}
                    </option>
                  ))}
                </select>
              </FilterField>

              {/* Max Price */}
              <FilterField
                label="Max. Price"
                icon={() => (
                  <span className="text-muted-foreground text-sm font-body shrink-0">
                    ₱
                  </span>
                )}
              >
                <select
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  className={selectClass}
                >
                  {maxPrices.map((p) => (
                    <option key={p.value} value={p.value}>
                      {p.label}
                    </option>
                  ))}
                </select>
              </FilterField>
            </div>

            {/* Action Buttons — always full width on mobile, right-aligned on larger */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-2 mt-4">
              <button
                onClick={handleClear}
                className="flex items-center justify-center gap-1.5 px-5 py-2.5 text-sm font-body font-medium text-muted-foreground hover:text-foreground border border-border hover:border-foreground/30 rounded-lg transition-all duration-200 w-full sm:w-auto"
              >
                <X size={13} />
                Clear
              </button>
              <button
                onClick={handleSearch}
                className="flex items-center justify-center gap-2 px-8 py-2.5 bg-foreground hover:bg-foreground/90 text-background rounded-lg font-body font-semibold text-sm tracking-wide transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 w-full sm:w-auto"
              >
                <Search size={14} />
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Stats Row ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-10 mb-4">
        <div className="flex flex-wrap items-center gap-6 sm:gap-10">
          {[
            { value: "500+", label: "Properties Listed" },
            { value: "12", label: "Cities Covered" },
            { value: "98%", label: "Client Satisfaction" },
          ].map((stat, i) => (
            <div key={stat.label} className="flex items-center gap-6 sm:gap-10">
              <div>
                <p className="font-display text-2xl sm:text-3xl text-foreground font-semibold">
                  {stat.value}
                </p>
                <p className="font-body text-[10px] sm:text-xs text-muted-foreground tracking-widest uppercase mt-0.5">
                  {stat.label}
                </p>
              </div>
              {i < 2 && (
                <div className="w-px h-8 sm:h-10 bg-border hidden sm:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

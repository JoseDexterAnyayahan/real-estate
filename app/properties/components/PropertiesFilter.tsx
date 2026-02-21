"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { Search, X, SlidersHorizontal } from "lucide-react";
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

const selectClass =
  "w-full bg-transparent text-sm font-body text-foreground focus:outline-none cursor-pointer";

const fieldWrap =
  "flex items-center gap-2 border border-border rounded-lg px-3 py-2.5 hover:border-primary/50 focus-within:border-primary transition-colors duration-200 bg-background";

export default function PropertiesFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [mobileOpen, setMobileOpen] = useState(false);

  const [status, setStatus] = useState(searchParams.get("status") || "");
  const [city, setCity] = useState(searchParams.get("city") || "");
  const [type, setType] = useState(searchParams.get("type") || "");
  const [minPrice, setMinPrice] = useState(searchParams.get("minPrice") || "");
  const [maxPrice, setMaxPrice] = useState(searchParams.get("maxPrice") || "");

  const applyFilters = () => {
    const params = new URLSearchParams();
    if (status) params.set("status", status);
    if (city) params.set("city", city);
    if (type) params.set("type", type);
    if (minPrice) params.set("minPrice", minPrice);
    if (maxPrice) params.set("maxPrice", maxPrice);
    router.push(`/properties?${params.toString()}`);
    setMobileOpen(false);
  };

  const clearFilters = () => {
    setStatus("");
    setCity("");
    setType("");
    setMinPrice("");
    setMaxPrice("");
    router.push("/properties");
    setMobileOpen(false);
  };

  const hasFilters = status || city || type || minPrice || maxPrice;

  const FilterContent = (
    <div className="flex flex-col gap-5">

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <SlidersHorizontal size={14} className="text-primary" />
          <span className="font-body text-sm font-semibold text-foreground">Filters</span>
        </div>
        {hasFilters && (
          <button
            onClick={clearFilters}
            className="flex items-center gap-1 text-xs font-body text-muted-foreground hover:text-destructive transition-colors duration-200"
          >
            <X size={11} />
            Clear all
          </button>
        )}
      </div>

      {/* Status */}
      <div className="flex flex-col gap-2">
        <label className="text-[10px] font-body tracking-widest uppercase text-muted-foreground">
          Listing Type
        </label>
        <div className="flex flex-col gap-1.5">
          {["", "For Sale", "For Rent"].map((s) => (
            <button
              key={s}
              onClick={() => setStatus(s)}
              className={`text-left px-3 py-2 rounded-lg text-sm font-body transition-all duration-200 ${
                status === s
                  ? "bg-primary text-primary-foreground font-medium"
                  : "text-foreground hover:bg-muted"
              }`}
            >
              {s === "" ? "All" : s}
            </button>
          ))}
        </div>
      </div>

      <div className="border-t border-border" />

      {/* Location */}
      <div className="flex flex-col gap-2">
        <label className="text-[10px] font-body tracking-widest uppercase text-muted-foreground">
          Location
        </label>
        <div className={fieldWrap}>
          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className={selectClass}
          >
            <option value="">Any Location</option>
            {cities.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Property Type */}
      <div className="flex flex-col gap-2">
        <label className="text-[10px] font-body tracking-widest uppercase text-muted-foreground">
          Property Type
        </label>
        <div className="flex flex-col gap-1.5">
          {["", ...propertyTypes].map((t) => (
            <button
              key={t}
              onClick={() => setType(t)}
              className={`text-left px-3 py-2 rounded-lg text-sm font-body transition-all duration-200 ${
                type === t
                  ? "bg-primary text-primary-foreground font-medium"
                  : "text-foreground hover:bg-muted"
              }`}
            >
              {t === "" ? "All Types" : t}
            </button>
          ))}
        </div>
      </div>

      <div className="border-t border-border" />

      {/* Price Range */}
      <div className="flex flex-col gap-3">
        <label className="text-[10px] font-body tracking-widest uppercase text-muted-foreground">
          Price Range
        </label>
        <div className="flex flex-col gap-2">
          <div className={fieldWrap}>
            <span className="text-muted-foreground text-sm shrink-0">₱</span>
            <select
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              className={selectClass}
            >
              {minPrices.map((p) => (
                <option key={p.value} value={p.value}>{p.label}</option>
              ))}
            </select>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex-1 h-px bg-border" />
            <span className="text-xs font-body text-muted-foreground">to</span>
            <div className="flex-1 h-px bg-border" />
          </div>
          <div className={fieldWrap}>
            <span className="text-muted-foreground text-sm shrink-0">₱</span>
            <select
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className={selectClass}
            >
              {maxPrices.map((p) => (
                <option key={p.value} value={p.value}>{p.label}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Apply */}
      <button
        onClick={applyFilters}
        className="w-full flex items-center justify-center gap-2 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-body font-medium text-sm transition-all duration-200 shadow-sm hover:shadow-md"
      >
        <Search size={14} />
        Apply Filters
      </button>

    </div>
  );

  return (
    <>
      {/* Mobile Toggle */}
      <div className="lg:hidden mb-4">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex items-center gap-2 px-4 py-2.5 border border-border rounded-xl text-sm font-body font-medium text-foreground hover:bg-muted transition-all duration-200"
        >
          <SlidersHorizontal size={14} />
          {mobileOpen ? "Hide Filters" : "Show Filters"}
          {hasFilters && (
            <span className="w-5 h-5 rounded-full bg-primary text-primary-foreground text-[10px] flex items-center justify-center font-semibold">
              {[status, city, type, minPrice, maxPrice].filter(Boolean).length}
            </span>
          )}
        </button>

        {/* Mobile Filter Panel */}
        <div
          className={`overflow-hidden transition-all duration-500 ${
            mobileOpen ? "max-h-screen opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-card border border-border rounded-2xl p-5">
            {FilterContent}
          </div>
        </div>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden lg:block sticky top-28 bg-card border border-border rounded-2xl p-5">
        {FilterContent}
      </div>
    </>
  );
}
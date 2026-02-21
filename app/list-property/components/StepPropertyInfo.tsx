import {
  Home,
  MapPin,
  Link as LinkIcon,
  Tag,
  BedDouble,
  Bath,
  Maximize2,
  PhilippinePeso,
  FileText,
} from "lucide-react";
import { propertyTypes, cities } from "@/lib/data/properties";

export type PropertyInfoData = {
  title: string;
  type: string;
  status: string;
  city: string;
  address: string;
  googleLink: string;
  price: string;
  bedrooms: string;
  bathrooms: string;
  area: string;
  description: string;
};

type Props = {
  data: PropertyInfoData;
  onChange: (data: PropertyInfoData) => void;
};

const fieldWrap =
  "flex items-center gap-2.5 border border-border rounded-xl px-4 py-3 hover:border-primary/50 focus-within:border-primary transition-colors duration-200 bg-background";

const inputClass =
  "w-full bg-transparent text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none";

const selectClass =
  "w-full bg-transparent text-sm font-body text-foreground focus:outline-none cursor-pointer";

const label =
  "text-[10px] font-body tracking-widest uppercase text-muted-foreground mb-1.5 block";

export default function StepPropertyInfo({ data, onChange }: Props) {
  const set =
    (key: keyof PropertyInfoData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      onChange({ ...data, [key]: e.target.value });

  return (
    <div className="flex flex-col gap-5">
      <div>
        <h2 className="font-display text-2xl text-foreground font-light mb-1">
          Property Information
        </h2>
        <p className="font-body text-sm text-muted-foreground">
          Provide accurate details to attract the right buyers or renters.
        </p>
      </div>

      {/* Title */}
      <div>
        <label className={label}>Property Title</label>
        <div className={fieldWrap}>
          <Home size={14} className="text-muted-foreground shrink-0" />
          <input
            type="text"
            placeholder="e.g. The Viera Residences"
            value={data.title}
            onChange={set("title")}
            className={inputClass}
          />
        </div>
      </div>

      {/* Type + Status */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={label}>Property Type</label>
          <div className={fieldWrap}>
            <Home size={14} className="text-muted-foreground shrink-0" />
            <select value={data.type} onChange={set("type")} className={selectClass}>
              <option value="">Select Type</option>
              {propertyTypes.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <label className={label}>Listing Status</label>
          <div className={fieldWrap}>
            <Tag size={14} className="text-muted-foreground shrink-0" />
            <select value={data.status} onChange={set("status")} className={selectClass}>
              <option value="">Select Status</option>
              <option value="For Sale">For Sale</option>
              <option value="For Rent">For Rent</option>
            </select>
          </div>
        </div>
      </div>

      {/* City */}
      <div>
        <label className={label}>City / Municipality</label>
        <div className={fieldWrap}>
          <MapPin size={14} className="text-muted-foreground shrink-0" />
          <select value={data.city} onChange={set("city")} className={selectClass}>
            <option value="">Select City</option>
            {cities.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Full Address */}
      <div>
        <label className={label}>Full Property Address</label>
        <div className={fieldWrap}>
          <MapPin size={14} className="text-muted-foreground shrink-0" />
          <input
            type="text"
            placeholder="e.g. 123 Rizal St., Barangay Poblacion, Makati City"
            value={data.address}
            onChange={set("address")}
            className={inputClass}
          />
        </div>
      </div>

      {/* Google / Waze Link */}
      <div>
        <label className={label}>Google Maps or Waze Link</label>
        <div className={fieldWrap}>
          <LinkIcon size={14} className="text-muted-foreground shrink-0" />
          <input
            type="url"
            placeholder="https://maps.google.com/..."
            value={data.googleLink}
            onChange={set("googleLink")}
            className={inputClass}
          />
        </div>
        <p className="text-[11px] font-body text-muted-foreground mt-1.5 ml-1">
          Paste the share link from Google Maps or Waze for exact location.
        </p>
      </div>

      {/* Price */}
      <div>
        <label className={label}>Asking Price</label>
        <div className={fieldWrap}>
          <span className="text-muted-foreground text-sm font-body shrink-0">₱</span>
          <input
            type="number"
            placeholder="e.g. 5000000"
            value={data.price}
            onChange={set("price")}
            className={inputClass}
          />
        </div>
      </div>

      {/* Beds / Baths / Area */}
      <div className="grid grid-cols-3 gap-4">
        <div>
          <label className={label}>Bedrooms</label>
          <div className={fieldWrap}>
            <BedDouble size={14} className="text-muted-foreground shrink-0" />
            <input
              type="number"
              placeholder="0"
              value={data.bedrooms}
              onChange={set("bedrooms")}
              className={inputClass}
              min="0"
            />
          </div>
        </div>
        <div>
          <label className={label}>Bathrooms</label>
          <div className={fieldWrap}>
            <Bath size={14} className="text-muted-foreground shrink-0" />
            <input
              type="number"
              placeholder="0"
              value={data.bathrooms}
              onChange={set("bathrooms")}
              className={inputClass}
              min="0"
            />
          </div>
        </div>
        <div>
          <label className={label}>Area (sqm)</label>
          <div className={fieldWrap}>
            <Maximize2 size={14} className="text-muted-foreground shrink-0" />
            <input
              type="number"
              placeholder="0"
              value={data.area}
              onChange={set("area")}
              className={inputClass}
              min="0"
            />
          </div>
        </div>
      </div>

      {/* Description */}
      <div>
        <label className={label}>Property Description</label>
        <div className="border border-border rounded-xl px-4 py-3 hover:border-primary/50 focus-within:border-primary transition-colors duration-200 bg-background">
          <div className="flex gap-2.5">
            <FileText size={14} className="text-muted-foreground shrink-0 mt-0.5" />
            <textarea
              placeholder="Describe your property — key features, nearby establishments, unique selling points..."
              value={data.description}
              onChange={set("description")}
              rows={5}
              className={inputClass + " resize-none"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
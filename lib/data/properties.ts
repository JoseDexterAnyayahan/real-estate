export type Property = {
  id: string;
  title: string;
  location: string;
  city: string;
  type: "House" | "Condo" | "Lot" | "Townhouse" | "Commercial";
  status: "For Sale" | "For Rent";
  price: number;
  bedrooms: number;
  bathrooms: number;
  area: number; // in sqm
  image: string;
  featured: boolean;
  description: string;
};

export const properties: Property[] = [
  {
    id: "prop-001",
    title: "The Viera Residences",
    location: "Alabang, Muntinlupa",
    city: "Muntinlupa",
    type: "House",
    status: "For Sale",
    price: 18500000,
    bedrooms: 4,
    bathrooms: 3,
    area: 280,
    image: "/images/properties/property-1.jpg",
    featured: true,
    description:
      "A stunning modern residence nestled in the heart of Alabang. Featuring high ceilings, premium finishes, and a landscaped garden perfect for entertaining.",
  },
  {
    id: "prop-002",
    title: "Azure Sky Tower Unit 12B",
    location: "BGC, Taguig",
    city: "Taguig",
    type: "Condo",
    status: "For Sale",
    price: 9800000,
    bedrooms: 2,
    bathrooms: 2,
    area: 78,
    image: "/images/properties/property-2.jpg",
    featured: true,
    description:
      "Live above the city in this sleek BGC condo with panoramic skyline views, fully fitted kitchen, and access to world-class amenities.",
  },
  {
    id: "prop-003",
    title: "Serrano Heritage Home",
    location: "Kapitolyo, Pasig",
    city: "Pasig",
    type: "Townhouse",
    status: "For Rent",
    price: 45000,
    bedrooms: 3,
    bathrooms: 2,
    area: 160,
    image: "/images/properties/property-3.jpg",
    featured: true,
    description:
      "A beautifully maintained townhouse in a quiet Kapitolyo enclave. Close to dining, cafes, and major roads. Ideal for young families.",
  },
  {
    id: "prop-004",
    title: "Northfield Garden Estate",
    location: "Sta. Rosa, Laguna",
    city: "Laguna",
    type: "House",
    status: "For Sale",
    price: 12200000,
    bedrooms: 5,
    bathrooms: 4,
    area: 380,
    image: "/images/properties/property-4.jpg",
    featured: true,
    description:
      "Expansive family home in a gated community with lush garden, private pool, and a 3-car garage. The perfect retreat from city life.",
  },
  {
    id: "prop-005",
    title: "Lumiere Loft Makati",
    location: "Legazpi Village, Makati",
    city: "Makati",
    type: "Condo",
    status: "For Rent",
    price: 60000,
    bedrooms: 1,
    bathrooms: 1,
    area: 52,
    image: "/images/properties/property-1.jpg",
    featured: false,
    description:
      "Chic loft-style condo in the vibrant Legazpi Village. Walking distance to galleries, restaurants, and weekend markets.",
  },
  {
    id: "prop-006",
    title: "Prime Corner Lot — Novaliches",
    location: "Novaliches, Quezon City",
    city: "Quezon City",
    type: "Lot",
    status: "For Sale",
    price: 4500000,
    bedrooms: 0,
    bathrooms: 0,
    area: 220,
    image: "/images/properties/property-2.jpg",
    featured: false,
    description:
      "Strategically located corner lot along a main road in Novaliches. Ideal for commercial or residential development.",
  },
];

export const formatPrice = (price: number, status: "For Sale" | "For Rent") => {
  const formatted = new Intl.NumberFormat("en-PH", {
    style: "currency",
    currency: "PHP",
    maximumFractionDigits: 0,
  }).format(price);

  return status === "For Rent" ? `${formatted}/mo` : formatted;
};

export const cities = [...new Set(properties.map((p) => p.city))];
export const propertyTypes = [...new Set(properties.map((p) => p.type))];
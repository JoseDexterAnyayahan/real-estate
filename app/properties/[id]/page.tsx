import { notFound } from "next/navigation";
import { properties } from "@/lib/data/properties";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PropertyGallery from "./components/PropertyGallery";
import PropertyDetails from "./components/PropertyDetails";
import PropertyInquiryForm from "./components/PropertyInquiryForm";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default async function PropertyPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const property = properties.find((p) => p.id === id);

  if (!property) notFound();

  return (
    <>
      {/* Gradient overlay for light mode — makes navbar text visible */}
      <div className="fixed top-0 left-0 right-0 h-28 z-40 bg-gradient-to-b from-black/30 to-transparent pointer-events-none dark:hidden" />

      <Navbar />

      <main className="min-h-screen bg-background pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Back Link */}
          <Link
            href="/properties"
            className="inline-flex items-center gap-2 text-sm font-body text-muted-foreground hover:text-foreground transition-colors duration-200 mb-6 group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform duration-200" />
            Back to Properties
          </Link>

          {/* Main Layout */}
          <div className="flex flex-col lg:flex-row gap-8">

            {/* Left — 70% */}
            <div className="w-full lg:w-[68%]">
              <PropertyGallery image={property.image} title={property.title} />
              <PropertyDetails property={property} />
            </div>

            {/* Right — 30% */}
            <div className="w-full lg:w-[32%]">
              <PropertyInquiryForm propertyTitle={property.title} />
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
import { Suspense } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PropertiesHero from "./components/PropertiesHero";
import PropertiesFilter from "./components/PropertiesFilter";
import PropertiesGrid from "./components/PropertiesGrid";

export default function PropertiesPage() {
  return (
    <>
     <div className="fixed top-0 left-0 right-0 h-28 z-40 bg-gradient-to-b from-black/30 to-transparent pointer-events-none dark:hidden" />
      <Navbar />

      {/* Hero */}
      <div className="pt-20">
        <PropertiesHero />
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 pb-24">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Sidebar Filter — 25% */}
          <aside className="w-full lg:w-[260px] shrink-0">
            <Suspense>
              <PropertiesFilter />
            </Suspense>
          </aside>

          {/* Grid — remaining width */}
          <div className="flex-1 min-w-0">
            <Suspense>
              <PropertiesGrid />
            </Suspense>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
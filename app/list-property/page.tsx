"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StepIndicator from "./components/StepIndicator";
import StepPersonal, { type PersonalData } from "./components/StepPersonal";
import StepPropertyInfo, { type PropertyInfoData } from "./components/StepPropertyInfo";
import StepDocuments, { type DocumentsData } from "./components/StepDocuments";
import StepReview from "./components/StepReview";
import { ArrowLeft, ArrowRight, Send } from "lucide-react";

export default function ListPropertyPage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const [personal, setPersonal] = useState<PersonalData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    reason: "",
  });

  const [propertyInfo, setPropertyInfo] = useState<PropertyInfoData>({
    title: "",
    type: "",
    status: "",
    city: "",
    address: "",
    googleLink: "",
    price: "",
    bedrooms: "",
    bathrooms: "",
    area: "",
    description: "",
  });

  const [documents, setDocuments] = useState<DocumentsData>({
    propertyImages: [],
    titleDeed: null,
    taxDeclaration: null,
    validId: null,
    otherDocs: [],
  });

  const handleSubmit = () => {
    console.log("Submitted:", { personal, propertyInfo, documents });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-background flex items-center justify-center px-4 pt-20 pb-20">
          <div className="max-w-md w-full text-center flex flex-col items-center gap-6">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
              <Send size={32} className="text-primary" />
            </div>
            <div>
              <h2 className="font-display text-3xl text-foreground font-light mb-2">
                Submission Received!
              </h2>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                Thank you for listing your property with MVP Properties. Our team will
                review your submission and reach out within 24–48 hours.
              </p>
            </div>
            <a
              href="/"
              className="px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-body font-medium text-sm transition-all duration-200 shadow-md"
            >
              Back to Home
            </a>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      {/* Page Header */}
      <div className="relative w-full h-40 sm:h-48 overflow-hidden">
        <img
          src="/images/hero/hero.jpg"
          alt="List Property"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/20" />
        <div className="absolute bottom-6 left-0 right-0 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <p className="font-body text-[9px] tracking-[0.4em] uppercase text-white/50 mb-1">
              MVP Properties
            </p>
            <h1 className="font-display text-3xl sm:text-4xl text-white font-light">
              List Your <span className="italic">Property</span>
            </h1>
          </div>
        </div>
      </div>

      <main className="bg-background py-12 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">

          <StepIndicator current={step} />

          {/* Step Content */}
          <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-sm mb-6">
            {step === 1 && (
              <StepPersonal data={personal} onChange={setPersonal} />
            )}
            {step === 2 && (
              <StepPropertyInfo data={propertyInfo} onChange={setPropertyInfo} />
            )}
            {step === 3 && (
              <StepDocuments data={documents} onChange={setDocuments} />
            )}
            {step === 4 && (
              <StepReview
                personal={personal}
                property={propertyInfo}
                documents={documents}
              />
            )}
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between gap-4">
            <button
              onClick={() => setStep((s) => s - 1)}
              disabled={step === 1}
              className="flex items-center gap-2 px-6 py-3 border border-border rounded-xl font-body font-medium text-sm text-foreground hover:bg-muted transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <ArrowLeft size={15} />
              Previous
            </button>

            {step < 4 ? (
              <button
                onClick={() => setStep((s) => s + 1)}
                className="flex items-center gap-2 px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-body font-medium text-sm transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
              >
                Next Step
                <ArrowRight size={15} />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="flex items-center gap-2 px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-body font-medium text-sm transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
              >
                <Send size={15} />
                Submit Listing
              </button>
            )}
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
import { MapPin, BedDouble, Bath, Maximize2, FileText, CheckCircle2 } from "lucide-react";
import type { PersonalData } from "./StepPersonal";
import type { PropertyInfoData } from "./StepPropertyInfo";
import type { DocumentsData } from "./StepDocuments";

type Props = {
  personal: PersonalData;
  property: PropertyInfoData;
  documents: DocumentsData;
};

function ReviewRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-1 py-3 border-b border-border last:border-0">
      <span className="text-[10px] font-body tracking-widest uppercase text-muted-foreground sm:w-40 shrink-0">
        {label}
      </span>
      <span className="font-body text-sm text-foreground">{value || "—"}</span>
    </div>
  );
}

function ReviewSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-card border border-border rounded-2xl overflow-hidden">
      <div className="px-5 py-3.5 border-b border-border bg-muted/30">
        <p className="font-body text-sm font-semibold text-foreground">{title}</p>
      </div>
      <div className="px-5">{children}</div>
    </div>
  );
}

export default function StepReview({ personal, property, documents }: Props) {
  const totalDocs = [
    documents.titleDeed,
    documents.taxDeclaration,
    documents.validId,
    ...documents.otherDocs,
  ].filter(Boolean).length;

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="font-display text-2xl text-foreground font-light mb-1">
          Review Your Submission
        </h2>
        <p className="font-body text-sm text-muted-foreground">
          Please review all information before submitting. Our team will contact you within 24–48 hours.
        </p>
      </div>

      {/* Personal */}
      <ReviewSection title="Personal Information">
        <ReviewRow label="Name" value={`${personal.firstName} ${personal.lastName}`} />
        <ReviewRow label="Email" value={personal.email} />
        <ReviewRow label="Phone" value={personal.phone} />
        <ReviewRow label="Address" value={personal.address} />
        <ReviewRow label="Reason" value={personal.reason} />
      </ReviewSection>

      {/* Property */}
      <ReviewSection title="Property Information">
        <ReviewRow label="Title" value={property.title} />
        <ReviewRow label="Type" value={property.type} />
        <ReviewRow label="Status" value={property.status} />
        <ReviewRow label="City" value={property.city} />
        <ReviewRow label="Address" value={property.address} />
        <ReviewRow label="Map Link" value={property.googleLink} />
        <ReviewRow
          label="Price"
          value={
            property.price
              ? `₱${parseInt(property.price).toLocaleString("en-PH")}`
              : ""
          }
        />
        <ReviewRow label="Bedrooms" value={property.bedrooms} />
        <ReviewRow label="Bathrooms" value={property.bathrooms} />
        <ReviewRow label="Area" value={property.area ? `${property.area} sqm` : ""} />
        <ReviewRow label="Description" value={property.description} />
      </ReviewSection>

      {/* Documents Summary */}
      <ReviewSection title="Uploaded Documents">
        <div className="py-3 flex flex-col gap-2">
          {[
            { label: "Property Photos", count: documents.propertyImages.length },
            { label: "Title / CCT / TCT", count: documents.titleDeed ? 1 : 0 },
            { label: "Tax Declaration", count: documents.taxDeclaration ? 1 : 0 },
            { label: "Valid ID", count: documents.validId ? 1 : 0 },
            { label: "Other Documents", count: documents.otherDocs.length },
          ].map((doc) => (
            <div key={doc.label} className="flex items-center justify-between py-1">
              <div className="flex items-center gap-2">
                <FileText size={13} className="text-muted-foreground" />
                <span className="font-body text-sm text-foreground">{doc.label}</span>
              </div>
              <span
                className={`font-body text-xs px-2.5 py-1 rounded-full ${
                  doc.count > 0
                    ? "bg-primary/10 text-primary font-medium"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {doc.count > 0 ? `${doc.count} file${doc.count > 1 ? "s" : ""}` : "None"}
              </span>
            </div>
          ))}
        </div>
      </ReviewSection>

      {/* Final Notice */}
      <div className="flex items-start gap-3 px-4 py-4 bg-primary/5 border border-primary/20 rounded-xl">
        <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
        <p className="font-body text-xs text-foreground leading-relaxed">
          By submitting, you confirm that all information provided is accurate and truthful.
          MVP Properties reserves the right to verify all documents before listing.
          You will receive a confirmation email within 24–48 hours.
        </p>
      </div>
    </div>
  );
}
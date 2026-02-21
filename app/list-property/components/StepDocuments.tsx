"use client";

import { useState, useRef } from "react";
import {
  Upload,
  X,
  FileText,
  ImageIcon,
  ShieldCheck,
  Camera,
} from "lucide-react";

export type DocumentsData = {
  propertyImages: File[];
  titleDeed: File | null;
  taxDeclaration: File | null;
  validId: File | null;
  otherDocs: File[];
};

type Props = {
  data: DocumentsData;
  onChange: (data: DocumentsData) => void;
};

function FileUploadZone({
  label,
  hint,
  accept,
  multiple,
  files,
  icon: Icon,
  onAdd,
  onRemove,
}: {
  label: string;
  hint: string;
  accept: string;
  multiple?: boolean;
  files: (File | null)[];
  icon: React.ElementType;
  onAdd: (files: File[]) => void;
  onRemove: (index: number) => void;
}) {
  const ref = useRef<HTMLInputElement>(null);
  const [dragging, setDragging] = useState(false);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    const dropped = Array.from(e.dataTransfer.files);
    if (dropped.length) onAdd(dropped);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = Array.from(e.target.files || []);
    if (selected.length) onAdd(selected);
    e.target.value = "";
  };

  const validFiles = files.filter(Boolean) as File[];

  return (
    <div className="flex flex-col gap-2">
      <label className="text-[10px] font-body tracking-widest uppercase text-muted-foreground">
        {label}
      </label>

      {/* Drop zone */}
      <div
        onClick={() => ref.current?.click()}
        onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
        onDragLeave={() => setDragging(false)}
        onDrop={handleDrop}
        className={`relative flex flex-col items-center justify-center gap-3 border-2 border-dashed rounded-xl p-6 cursor-pointer transition-all duration-200 ${
          dragging
            ? "border-primary bg-primary/5"
            : "border-border hover:border-primary/50 hover:bg-muted/30"
        }`}
      >
        <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
          <Icon size={18} className="text-muted-foreground" />
        </div>
        <div className="text-center">
          <p className="font-body text-sm text-foreground font-medium">
            Click or drag to upload
          </p>
          <p className="font-body text-xs text-muted-foreground mt-0.5">{hint}</p>
        </div>
        <input
          ref={ref}
          type="file"
          accept={accept}
          multiple={multiple}
          onChange={handleChange}
          className="hidden"
        />
      </div>

      {/* Uploaded files */}
      {validFiles.length > 0 && (
        <div className="flex flex-col gap-2 mt-1">
          {validFiles.map((file, i) => (
            <div
              key={i}
              className="flex items-center justify-between gap-3 px-3 py-2.5 bg-muted/50 border border-border rounded-lg"
            >
              <div className="flex items-center gap-2 min-w-0">
                <FileText size={13} className="text-primary shrink-0" />
                <span className="font-body text-xs text-foreground truncate">
                  {file.name}
                </span>
                <span className="font-body text-xs text-muted-foreground shrink-0">
                  {(file.size / 1024 / 1024).toFixed(1)} MB
                </span>
              </div>
              <button
                type="button"
                onClick={() => onRemove(i)}
                className="shrink-0 w-6 h-6 rounded-full hover:bg-destructive/10 hover:text-destructive text-muted-foreground flex items-center justify-center transition-colors duration-200"
              >
                <X size={12} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function StepDocuments({ data, onChange }: Props) {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="font-display text-2xl text-foreground font-light mb-1">
          Documents & Photos
        </h2>
        <p className="font-body text-sm text-muted-foreground">
          Upload all required documents and property photos. All files are kept confidential.
        </p>
      </div>

      {/* Notice */}
      <div className="flex items-start gap-3 px-4 py-3.5 bg-primary/5 border border-primary/20 rounded-xl">
        <ShieldCheck size={16} className="text-primary shrink-0 mt-0.5" />
        <p className="font-body text-xs text-foreground leading-relaxed">
          Your documents are encrypted and only accessible to our verified agents.
          We do not share your information with third parties.
        </p>
      </div>

      {/* Property Photos */}
      <FileUploadZone
        label="Property Photos *"
        hint="Upload up to 20 photos. JPG, PNG accepted. Max 5MB each."
        accept="image/*"
        multiple
        icon={Camera}
        files={data.propertyImages}
        onAdd={(files) =>
          onChange({ ...data, propertyImages: [...data.propertyImages, ...files] })
        }
        onRemove={(i) =>
          onChange({
            ...data,
            propertyImages: data.propertyImages.filter((_, idx) => idx !== i),
          })
        }
      />

      {/* Title Deed */}
      <FileUploadZone
        label="Transfer Certificate of Title (TCT) or Condominium Certificate of Title (CCT) *"
        hint="PDF or image. Max 10MB."
        accept=".pdf,image/*"
        icon={FileText}
        files={[data.titleDeed]}
        onAdd={(files) => onChange({ ...data, titleDeed: files[0] })}
        onRemove={() => onChange({ ...data, titleDeed: null })}
      />

      {/* Tax Declaration */}
      <FileUploadZone
        label="Tax Declaration *"
        hint="Latest tax declaration document. PDF or image."
        accept=".pdf,image/*"
        icon={FileText}
        files={[data.taxDeclaration]}
        onAdd={(files) => onChange({ ...data, taxDeclaration: files[0] })}
        onRemove={() => onChange({ ...data, taxDeclaration: null })}
      />

      {/* Valid ID */}
      <FileUploadZone
        label="Valid Government-Issued ID *"
        hint="Accepted: Passport, Driver's License, SSS, UMID, PhilHealth. Max 5MB."
        accept="image/*,.pdf"
        icon={ShieldCheck}
        files={[data.validId]}
        onAdd={(files) => onChange({ ...data, validId: files[0] })}
        onRemove={() => onChange({ ...data, validId: null })}
      />

      {/* Other Documents */}
      <FileUploadZone
        label="Other Supporting Documents (Optional)"
        hint="Deed of Sale, SPA, floor plans, etc. PDF or image."
        accept=".pdf,image/*"
        multiple
        icon={ImageIcon}
        files={data.otherDocs}
        onAdd={(files) =>
          onChange({ ...data, otherDocs: [...data.otherDocs, ...files] })
        }
        onRemove={(i) =>
          onChange({
            ...data,
            otherDocs: data.otherDocs.filter((_, idx) => idx !== i),
          })
        }
      />
    </div>
  );
}
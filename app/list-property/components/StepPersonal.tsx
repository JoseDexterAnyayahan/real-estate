import { User, Mail, Phone, MapPin, MessageSquare } from "lucide-react";

export type PersonalData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  reason: string;
};

type Props = {
  data: PersonalData;
  onChange: (data: PersonalData) => void;
};

const fieldWrap =
  "flex items-center gap-2.5 border border-border rounded-xl px-4 py-3 hover:border-primary/50 focus-within:border-primary transition-colors duration-200 bg-background";

const inputClass =
  "w-full bg-transparent text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none";

const label =
  "text-[10px] font-body tracking-widest uppercase text-muted-foreground mb-1.5 block";

export default function StepPersonal({ data, onChange }: Props) {
  const set = (key: keyof PersonalData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      onChange({ ...data, [key]: e.target.value });

  return (
    <div className="flex flex-col gap-5">
      <div>
        <h2 className="font-display text-2xl text-foreground font-light mb-1">
          Personal Information
        </h2>
        <p className="font-body text-sm text-muted-foreground">
          Tell us about yourself so we can get in touch.
        </p>
      </div>

      {/* Name Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={label}>First Name</label>
          <div className={fieldWrap}>
            <User size={14} className="text-muted-foreground shrink-0" />
            <input
              type="text"
              placeholder="e.g. Juan"
              value={data.firstName}
              onChange={set("firstName")}
              className={inputClass}
            />
          </div>
        </div>
        <div>
          <label className={label}>Last Name</label>
          <div className={fieldWrap}>
            <User size={14} className="text-muted-foreground shrink-0" />
            <input
              type="text"
              placeholder="e.g. Dela Cruz"
              value={data.lastName}
              onChange={set("lastName")}
              className={inputClass}
            />
          </div>
        </div>
      </div>

      {/* Email */}
      <div>
        <label className={label}>Email Address</label>
        <div className={fieldWrap}>
          <Mail size={14} className="text-muted-foreground shrink-0" />
          <input
            type="email"
            placeholder="e.g. juan@gmail.com"
            value={data.email}
            onChange={set("email")}
            className={inputClass}
          />
        </div>
      </div>

      {/* Phone */}
      <div>
        <label className={label}>Phone Number</label>
        <div className={fieldWrap}>
          <Phone size={14} className="text-muted-foreground shrink-0" />
          <input
            type="tel"
            placeholder="e.g. 09924401097"
            value={data.phone}
            onChange={set("phone")}
            className={inputClass}
          />
        </div>
      </div>

      {/* Address */}
      <div>
        <label className={label}>Your Current Address</label>
        <div className={fieldWrap}>
          <MapPin size={14} className="text-muted-foreground shrink-0" />
          <input
            type="text"
            placeholder="e.g. 123 Rizal St., Makati City"
            value={data.address}
            onChange={set("address")}
            className={inputClass}
          />
        </div>
      </div>

      {/* Reason */}
      <div>
        <label className={label}>Reason for Listing</label>
        <div className="border border-border rounded-xl px-4 py-3 hover:border-primary/50 focus-within:border-primary transition-colors duration-200 bg-background">
          <div className="flex gap-2.5">
            <MessageSquare size={14} className="text-muted-foreground shrink-0 mt-0.5" />
            <textarea
              placeholder="e.g. I am selling this property to fund my retirement..."
              value={data.reason}
              onChange={set("reason")}
              rows={4}
              className={inputClass + " resize-none"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
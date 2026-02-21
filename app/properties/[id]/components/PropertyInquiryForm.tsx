"use client";

import { useState } from "react";
import {
  HelpCircle,
  CalendarCheck,
  User,
  Mail,
  Phone,
  MessageSquare,
  Send,
  Calendar,
  Clock,
} from "lucide-react";

type Tab = "inquiry" | "appointment";

export default function PropertyInquiryForm({ propertyTitle }: { propertyTitle: string }) {
  const [tab, setTab] = useState<Tab>("inquiry");
  const [form, setForm] = useState({
    lastName: "",
    firstName: "",
    email: "",
    phone: "",
    message: "",
    date: "",
    time: "",
  });

  const set = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const handleSubmit = () => {
    console.log("Submitted:", { tab, ...form });
  };

  const inputClass =
    "w-full bg-transparent text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none";

  const fieldClass =
    "flex flex-col gap-1 w-full";

  const fieldLabel =
    "text-[10px] font-body tracking-widest uppercase text-muted-foreground";

  const fieldWrap =
    "flex items-center gap-2.5 border border-border rounded-lg px-3.5 py-3 hover:border-primary/50 focus-within:border-primary transition-colors duration-200 bg-background";

  return (
    <div className="sticky top-24 bg-background border border-border rounded-2xl overflow-hidden shadow-xl">

      {/* Tabs */}
      <div className="flex border-b border-border">
        <button
          onClick={() => setTab("inquiry")}
          className={`flex-1 flex items-center justify-center gap-2 px-4 py-3.5 text-sm font-body font-medium transition-all duration-200 border-b-2 -mb-px ${
            tab === "inquiry"
              ? "border-primary text-primary bg-background"
              : "border-transparent text-muted-foreground hover:text-foreground hover:bg-muted/40"
          }`}
        >
          <HelpCircle size={14} />
          Inquiry
        </button>
        <button
          onClick={() => setTab("appointment")}
          className={`flex-1 flex items-center justify-center gap-2 px-4 py-3.5 text-sm font-body font-medium transition-all duration-200 border-b-2 -mb-px ${
            tab === "appointment"
              ? "border-primary text-primary bg-background"
              : "border-transparent text-muted-foreground hover:text-foreground hover:bg-muted/40"
          }`}
        >
          <CalendarCheck size={14} />
          Appointment
        </button>
      </div>

      {/* Form Header */}
      <div className="px-5 pt-5 pb-3 flex items-start gap-3 border-b border-border">
        <div className="w-9 h-9 rounded-full border-2 border-foreground flex items-center justify-center shrink-0">
          {tab === "inquiry" ? (
            <HelpCircle size={16} className="text-foreground" />
          ) : (
            <CalendarCheck size={16} className="text-foreground" />
          )}
        </div>
        <div>
          <p className="font-body font-semibold text-sm text-foreground">
            {tab === "inquiry" ? "Send Inquiry" : "Book a Viewing"}
          </p>
          <p className="font-body text-xs text-muted-foreground mt-0.5">
            {tab === "inquiry"
              ? "Need clarifications about this property?"
              : `Schedule a viewing for ${propertyTitle}`}
          </p>
        </div>
      </div>

      {/* Fields */}
      <div className="px-5 py-4 flex flex-col gap-3">

        {/* Last Name */}
        <div className={fieldClass}>
          <label className={fieldLabel}>Last Name</label>
          <div className={fieldWrap}>
            <User size={13} className="text-muted-foreground shrink-0" />
            <input
              type="text"
              placeholder="e.g. Dela Cruz"
              value={form.lastName}
              onChange={set("lastName")}
              className={inputClass}
            />
          </div>
        </div>

        {/* First Name */}
        <div className={fieldClass}>
          <label className={fieldLabel}>First Name</label>
          <div className={fieldWrap}>
            <User size={13} className="text-muted-foreground shrink-0" />
            <input
              type="text"
              placeholder="e.g. Juan"
              value={form.firstName}
              onChange={set("firstName")}
              className={inputClass}
            />
          </div>
        </div>

        {/* Email */}
        <div className={fieldClass}>
          <label className={fieldLabel}>Email</label>
          <div className={fieldWrap}>
            <Mail size={13} className="text-muted-foreground shrink-0" />
            <input
              type="email"
              placeholder="e.g. juan@gmail.com"
              value={form.email}
              onChange={set("email")}
              className={inputClass}
            />
          </div>
        </div>

        {/* Phone */}
        <div className={fieldClass}>
          <label className={fieldLabel}>Phone Number</label>
          <div className={fieldWrap}>
            <Phone size={13} className="text-muted-foreground shrink-0" />
            <input
              type="tel"
              placeholder="e.g. 09924401097"
              value={form.phone}
              onChange={set("phone")}
              className={inputClass}
            />
          </div>
        </div>

        {/* Appointment-only fields */}
        {tab === "appointment" && (
          <>
            <div className={fieldClass}>
              <label className={fieldLabel}>Preferred Date</label>
              <div className={fieldWrap}>
                <Calendar size={13} className="text-muted-foreground shrink-0" />
                <input
                  type="date"
                  value={form.date}
                  onChange={set("date")}
                  className={inputClass}
                />
              </div>
            </div>

            <div className={fieldClass}>
              <label className={fieldLabel}>Preferred Time</label>
              <div className={fieldWrap}>
                <Clock size={13} className="text-muted-foreground shrink-0" />
                <select
                  value={form.time}
                  onChange={set("time")}
                  className={inputClass + " cursor-pointer"}
                >
                  <option value="">Select a time</option>
                  <option>9:00 AM</option>
                  <option>10:00 AM</option>
                  <option>11:00 AM</option>
                  <option>1:00 PM</option>
                  <option>2:00 PM</option>
                  <option>3:00 PM</option>
                  <option>4:00 PM</option>
                </select>
              </div>
            </div>
          </>
        )}

        {/* Message */}
        <div className={fieldClass}>
          <label className={fieldLabel}>Message</label>
          <div className="border border-border rounded-lg px-3.5 py-3 hover:border-primary/50 focus-within:border-primary transition-colors duration-200 bg-background">
            <div className="flex gap-2.5">
              <MessageSquare size={13} className="text-muted-foreground shrink-0 mt-0.5" />
              <textarea
                placeholder="Leave us a message..."
                value={form.message}
                onChange={set("message")}
                rows={3}
                className={inputClass + " resize-none"}
              />
            </div>
          </div>
        </div>

        {/* Submit */}
        <button
          onClick={handleSubmit}
          className="w-full flex items-center justify-center gap-2 py-3.5 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-body font-semibold text-sm tracking-widest uppercase transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 mt-1"
        >
          <Send size={14} />
          {tab === "inquiry" ? "Send Inquiry" : "Book Appointment"}
        </button>

      </div>
    </div>
  );
}
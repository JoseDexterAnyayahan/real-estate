import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, MessageCircle } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Properties", href: "/properties" },
  { label: "List a Property", href: "/list-property" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const propertyLinks = [
  { label: "Houses for Sale", href: "/properties?type=House&status=For+Sale" },
  { label: "Condos for Sale", href: "/properties?type=Condo&status=For+Sale" },
  { label: "Lots for Sale", href: "/properties?type=Lot&status=For+Sale" },
  { label: "For Rent", href: "/properties?status=For+Rent" },
  { label: "Townhouses", href: "/properties?type=Townhouse" },
];

const socials = [
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: Facebook,
    color: "hover:text-[#1877F2]",
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: Instagram,
    color: "hover:text-[#E1306C]",
  },
  {
    label: "YouTube",
    href: "https://youtube.com",
    icon: Youtube,
    color: "hover:text-[#FF0000]",
  },
  {
    label: "Viber",
    href: "viber://chat?number=+639000000000",
    icon: MessageCircle,
    color: "hover:text-[#7360F2]",
  },
];

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12 pb-12 border-b border-background/10">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <div className="flex flex-col leading-none">
                <span className="font-display text-3xl font-light text-background">
                  MVP
                </span>
                <span className="text-[9px] font-body tracking-[0.3em] uppercase text-background/40">
                  Properties
                </span>
              </div>
            </Link>
            <p className="font-body text-sm text-background/50 leading-relaxed mb-6">
              Your trusted partner in finding premium real estate across the Philippines. From city condos to family homes.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-3">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={`w-8 h-8 rounded-lg bg-background/10 flex items-center justify-center text-background/60 transition-all duration-200 hover:bg-background/20 ${social.color}`}
                  >
                    <Icon size={15} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigate */}
          <div>
            <p className="font-body text-[10px] tracking-[0.25em] uppercase text-background/40 mb-5">
              Navigate
            </p>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-background/60 hover:text-background transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Properties */}
          <div>
            <p className="font-body text-[10px] tracking-[0.25em] uppercase text-background/40 mb-5">
              Browse
            </p>
            <ul className="flex flex-col gap-3">
              {propertyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-background/60 hover:text-background transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-body text-[10px] tracking-[0.25em] uppercase text-background/40 mb-5">
              Get In Touch
            </p>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href="tel:+639000000000"
                  className="flex items-start gap-3 group"
                >
                  <div className="w-7 h-7 rounded-lg bg-background/10 flex items-center justify-center shrink-0 group-hover:bg-background/20 transition-colors duration-200">
                    <Phone size={13} className="text-background/60" />
                  </div>
                  <div>
                    <p className="font-body text-[10px] text-background/40 uppercase tracking-widest mb-0.5">
                      Phone
                    </p>
                    <p className="font-body text-sm text-background/70 group-hover:text-background transition-colors duration-200">
                      +63 900 000 0000
                    </p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@mvpproperties.ph"
                  className="flex items-start gap-3 group"
                >
                  <div className="w-7 h-7 rounded-lg bg-background/10 flex items-center justify-center shrink-0 group-hover:bg-background/20 transition-colors duration-200">
                    <Mail size={13} className="text-background/60" />
                  </div>
                  <div>
                    <p className="font-body text-[10px] text-background/40 uppercase tracking-widest mb-0.5">
                      Email
                    </p>
                    <p className="font-body text-sm text-background/70 group-hover:text-background transition-colors duration-200">
                      hello@mvpproperties.ph
                    </p>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-background/10 flex items-center justify-center shrink-0">
                  <MapPin size={13} className="text-background/60" />
                </div>
                <div>
                  <p className="font-body text-[10px] text-background/40 uppercase tracking-widest mb-0.5">
                    Office
                  </p>
                  <p className="font-body text-sm text-background/70">
                    Metro Manila, Philippines
                  </p>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-background/30">
            © {new Date().getFullYear()} MVP Properties. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="font-body text-xs text-background/30 hover:text-background/60 transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="font-body text-xs text-background/30 hover:text-background/60 transition-colors duration-200">
              Terms of Service
            </a>
            <p className="font-body text-xs text-background/30">
              Built for premium living.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
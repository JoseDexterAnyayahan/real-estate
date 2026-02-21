"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "@/components/providers/ThemeProvider";
import { Sun, Moon, Menu, X, Phone, CalendarCheck } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Properties", href: "/properties" },
  { label: "List a Property", href: "/list-property" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-background ${
          isScrolled
            ? "shadow-sm border-b border-border"
            : "border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <Link href="/" className="flex flex-col leading-none group shrink-0">
              <span className="font-display text-2xl font-semibold tracking-wide text-foreground transition-colors duration-300 group-hover:text-primary">
                MVP
              </span>
              <span className="text-[9px] font-body tracking-[0.3em] uppercase text-primary">
                Properties
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative font-body text-sm font-medium text-foreground px-4 py-2 rounded-lg hover:bg-muted hover:text-primary transition-all duration-200 group"
                >
                  {link.label}
                  <span className="absolute bottom-1 left-4 right-4 h-px bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </Link>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="hidden md:flex items-center gap-3">

              {/* Phone */}
              <a
                href="tel:+639000000000"
                className="flex items-center gap-2 text-sm font-body text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                <Phone size={13} />
                <span>+63 900 000 0000</span>
              </a>

              {/* Divider */}
              <div className="w-px h-5 bg-border" />

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-200"
              >
                {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
              </button>

              {/* Book a Viewing CTA */}
              <Link
                href="/book-viewing"
                className="flex items-center gap-2 px-5 py-2.5 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-body font-medium text-sm transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
              >
                <CalendarCheck size={14} />
                Book a Viewing
              </Link>
            </div>

            {/* Mobile Right */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-200"
              >
                {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
              </button>

              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                aria-label="Toggle menu"
                className="p-2 rounded-lg text-foreground hover:bg-muted transition-all duration-200"
              >
                {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out border-t border-border bg-background ${
            isMobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col px-6 py-6 gap-1">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                className="font-body text-sm font-medium text-foreground hover:text-primary hover:bg-muted px-3 py-3 rounded-lg transition-all duration-200"
                style={{
                  transitionDelay: isMobileOpen ? `${i * 40}ms` : "0ms",
                }}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile CTA */}
            <div className="flex flex-col gap-3 pt-4 mt-2 border-t border-border">
              <a
                href="tel:+639000000000"
                className="flex items-center gap-2 text-sm font-body text-muted-foreground hover:text-primary px-3 py-2 transition-colors duration-200"
              >
                <Phone size={13} />
                <span>+63 900 000 0000</span>
              </a>

              <Link
                href="/book-viewing"
                onClick={() => setIsMobileOpen(false)}
                className="flex items-center justify-center gap-2 px-5 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-body font-medium text-sm transition-all duration-200 shadow-sm"
              >
                <CalendarCheck size={14} />
                Book a Viewing
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
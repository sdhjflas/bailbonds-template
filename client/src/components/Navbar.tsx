/*
 * DESIGN: Velocity Minimalism — Navbar
 * Sticky, minimal, with multi-page navigation
 * Customized for Bail America Liberty
 */
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";
import { useLocation } from "wouter";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => location === href;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl border-b border-blue-200/20 shadow-sm"
            : "bg-white/80 backdrop-blur-md border-b border-blue-200/10"
        }`}
      >
        <div className="container flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
              <span className="text-white font-display font-bold text-sm">B</span>
            </div>
            <span className="font-display font-bold text-lg tracking-tight text-[#0D0D0D]">
              Bail America
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
            className={`px-3 py-2 font-body text-sm font-medium transition-all duration-200 rounded-lg ${
              isActive(link.href)
                ? "bg-blue-100 text-blue-600"
                : "text-[#0D0D0D]/70 hover:text-[#0D0D0D] hover:bg-[#0D0D0D]/5"
            }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+19363341110"
            className="flex items-center gap-2 font-body text-sm font-semibold transition-colors text-blue-600 hover:text-blue-700"
            >
              <Phone size={15} strokeWidth={2.5} />
              (936) 334-1110
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
        className="lg:hidden p-2 rounded-lg transition-colors text-[#0D0D0D]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-b border-blue-200/20 shadow-lg"
          >
            <div className="container py-6 flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-2.5 font-body text-base font-medium rounded-lg transition-colors ${
                    isActive(link.href)
                      ? "bg-blue-100 text-blue-600"
                      : "text-[#0D0D0D]/70 hover:text-[#0D0D0D] hover:bg-[#0D0D0D]/5"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 border-t border-blue-200/20 mt-2">
                <a
                  href="tel:+19363341110"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-blue-600 text-white font-body text-sm font-semibold rounded-lg"
                >
                  <Phone size={15} strokeWidth={2} />
                  Call (936) 334-1110
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

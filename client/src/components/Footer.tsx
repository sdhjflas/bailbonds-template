/*
 * DESIGN: Velocity Minimalism — Footer
 * Dark background, clean grid layout, cobalt accent links
 * Customized for Bail America Liberty
 */
import { Phone, Mail, MapPin, Shield } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0A0A0F] text-white">
      <div className="container py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#1A56DB] flex items-center justify-center">
                <span className="text-white font-display font-bold text-sm">B</span>
              </div>
              <span className="font-display font-bold text-lg text-white">
                Bail America <span className="text-[#3B82F6]">Liberty</span>
              </span>
            </div>
            <p className="font-body text-sm text-white/45 leading-relaxed mb-5">
              Licensed bail bondsmen serving Liberty County with speed, discretion, and care — 24 hours a day, 365 days a year.
            </p>
            <div className="flex items-center gap-2">
              <Shield size={13} className="text-[#3B82F6]" />
              <span className="font-body text-xs text-white/40">Licensed · Bonded · Insured</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-body font-semibold text-white text-sm uppercase tracking-widest mb-4">
              Services
            </h4>
            <ul className="space-y-2.5">
              {[
                "Felony Bonds",
                "Misdemeanor Bonds",
                "Traffic Bonds",
                "Mobile Bonds",
                "Surety Bonds",
                "Appearance Bonds",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="/services"
                    className="font-body text-sm text-white/45 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-body font-semibold text-white text-sm uppercase tracking-widest mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "About Us", href: "/about" },
                { label: "How It Works", href: "/how-it-works" },
                { label: "Services", href: "/services" },
                { label: "Contact", href: "/contact" },
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="font-body text-sm text-white/45 hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body font-semibold text-white text-sm uppercase tracking-widest mb-4">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+19363341110"
                  className="flex items-start gap-3 group"
                >
                  <Phone size={14} className="text-[#3B82F6] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-body text-xs text-white/35 uppercase tracking-wider mb-0.5">Phone</p>
                    <p className="font-body text-sm text-white/70 group-hover:text-white transition-colors">
                      (936) 334-1110
                    </p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="mailto:bamerica_lib@yahoo.com"
                  className="flex items-start gap-3 group"
                >
                  <Mail size={14} className="text-[#3B82F6] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-body text-xs text-white/35 uppercase tracking-wider mb-0.5">Email</p>
                    <p className="font-body text-sm text-white/70 group-hover:text-white transition-colors">
                      bamerica_lib@yahoo.com
                    </p>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <MapPin size={14} className="text-[#3B82F6] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-body text-xs text-white/35 uppercase tracking-wider mb-0.5">Office</p>
                    <p className="font-body text-sm text-white/70">
                      2317 Beaumont Ave<br />
                      Liberty, TX 77575
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-white/30">
            © {year} Bail America Liberty. All rights reserved. License #BL001.
          </p>
          <p className="font-body text-xs text-white/20">
            Not legal advice. For informational purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
}

import { useParams } from "wouter";
import { BusinessProvider, useBusiness } from "@/contexts/BusinessContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoogleMap from "@/components/GoogleMap";
import { motion } from "framer-motion";
import {
  ArrowRight, Zap, Shield, Clock, CheckCircle2, Star,
  Phone, Mail, MapPin, ChevronDown,
} from "lucide-react";
import { useState } from "react";

const HERO_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663521884016/8pyMy429fFWbVGQ5BPDWMT/hero-main-6R2gXDNyxvdQEm2WsQNbe9.webp";

function PreviewContent() {
  const { data, loading, error } = useBusiness();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-500 font-body">Loading your preview…</p>
        </div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md px-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-3">Preview not found</h1>
          <p className="text-gray-500">This preview link may have expired or doesn't exist.</p>
        </div>
      </div>
    );
  }

  const { business, stats, services, testimonials, faqs, maps_query } = data;
  const displayName = business.name;
  const location = `${business.city}, ${business.state}`;
  const heroSubtitle = business.tagline || `Fast, professional bail bonds in ${location}. We're here 24/7 to help get your loved one home.`;

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={HERO_IMG} alt="Background" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </div>
        <div className="relative z-10 container py-20">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-6">
                <Shield size={13} className="text-blue-400" />
                <span className="font-body text-xs text-white/80 font-medium">Licensed Bail Bondsman · {location}</span>
              </div>
              <h1 className="font-display font-bold text-white leading-[1.1] mb-6" style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}>
                {displayName}
              </h1>
              <p className="font-body text-lg text-white/80 leading-relaxed max-w-xl mb-8">
                {heroSubtitle}
              </p>
              <div className="flex flex-wrap gap-4">
                <a href={`tel:${business.phone}`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-body font-semibold rounded-xl hover:bg-blue-700 transition-colors">
                  <Phone size={16} /> Call Now
                </a>
                <a href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md text-white border border-white/20 font-body font-semibold rounded-xl hover:bg-white/20 transition-colors">
                  Get Help Now <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-[#0A0A0F]">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                <div className="font-display font-bold text-white text-3xl lg:text-4xl mb-1">{s.value}</div>
                <div className="font-body text-sm text-white/45">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 lg:py-28">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: "Lightning Fast", desc: "Average 2-hour release from local jails" },
              { icon: Shield, title: "Fully Licensed", desc: `Licensed in ${business.state} — bonded & insured` },
              { icon: Clock, title: "24/7 Available", desc: "We answer every call, day or night" },
            ].map(({ icon: Icon, title, desc }, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                  <Icon size={22} className="text-blue-600" />
                </div>
                <h3 className="font-display font-bold text-[#0D0D0D] text-lg mb-2">{title}</h3>
                <p className="font-body text-sm text-[#0D0D0D]/60">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="container">
          <div className="text-center mb-14">
            <h2 className="font-display font-bold text-[#0D0D0D] text-3xl lg:text-4xl mb-4">Our Services</h2>
            <p className="font-body text-[#0D0D0D]/60 max-w-xl mx-auto">
              We handle all types of bail bonds so you can focus on what matters — your family.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {services.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.04 }}
                className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100">
                <CheckCircle2 size={16} className="text-blue-600 flex-shrink-0" />
                <span className="font-body text-sm font-medium text-[#0D0D0D]">{s}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {testimonials.length > 0 && (
        <section className="py-20 lg:py-28">
          <div className="container">
            <div className="text-center mb-14">
              <h2 className="font-display font-bold text-[#0D0D0D] text-3xl lg:text-4xl mb-4">What Clients Say</h2>
              {business.reviews > 0 && (
                <p className="font-body text-[#0D0D0D]/60">
                  {business.rating.toFixed(1)} ★ average · {business.reviews} Google reviews
                </p>
              )}
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-2xl border border-gray-100 bg-gray-50">
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} size={14} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="font-body text-sm text-[#0D0D0D]/70 leading-relaxed mb-4">"{t.text}"</p>
                  <p className="font-body text-sm font-semibold text-[#0D0D0D]">{t.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* About — only shown if real about text was extracted */}
      {business.about && (
        <section className="py-20 lg:py-28">
          <div className="container max-w-3xl text-center">
            <h2 className="font-display font-bold text-[#0D0D0D] text-3xl lg:text-4xl mb-6">About {displayName}</h2>
            <p className="font-body text-lg text-[#0D0D0D]/70 leading-relaxed">{business.about}</p>
          </div>
        </section>
      )}

      {/* FAQ */}
      {faqs.length > 0 && (
        <section className="py-20 lg:py-28 bg-gray-50">
          <div className="container max-w-3xl">
            <div className="text-center mb-14">
              <h2 className="font-display font-bold text-[#0D0D0D] text-3xl lg:text-4xl mb-4">Common Questions</h2>
              <p className="font-body text-[#0D0D0D]/60">About bail bonds in {location}</p>
            </div>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left">
                    <span className="font-body font-medium text-[#0D0D0D]">{faq.q}</span>
                    <ChevronDown size={18} className={`text-gray-400 flex-shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-5">
                      <p className="font-body text-sm text-[#0D0D0D]/70 leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact */}
      <section id="contact" className="py-20 lg:py-28">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-display font-bold text-[#0D0D0D] text-3xl lg:text-4xl mb-8">Get in Touch</h2>
              <div className="space-y-5">
                <a href={`tel:${business.phone}`} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                    <Phone size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="font-body text-xs text-[#0D0D0D]/50 uppercase tracking-wider mb-0.5">Phone</p>
                    <p className="font-body font-semibold text-[#0D0D0D]">{business.phone}</p>
                  </div>
                </a>
                {business.email && (
                  <a href={`mailto:${business.email}`} className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                      <Mail size={20} className="text-blue-600" />
                    </div>
                    <div>
                      <p className="font-body text-xs text-[#0D0D0D]/50 uppercase tracking-wider mb-0.5">Email</p>
                      <p className="font-body font-semibold text-[#0D0D0D]">{business.email}</p>
                    </div>
                  </a>
                )}
                {business.address && (
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                      <MapPin size={20} className="text-blue-600" />
                    </div>
                    <div>
                      <p className="font-body text-xs text-[#0D0D0D]/50 uppercase tracking-wider mb-0.5">Address</p>
                      <p className="font-body font-semibold text-[#0D0D0D]">{business.address}, {location}</p>
                    </div>
                  </div>
                )}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                    <Clock size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="font-body text-xs text-[#0D0D0D]/50 uppercase tracking-wider mb-0.5">Hours</p>
                    <p className="font-body font-semibold text-[#0D0D0D]">{business.hours || "Open 24/7 · 365 Days a Year"}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden h-80">
              <GoogleMap query={maps_query} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-[#0A0A0F]">
        <div className="container text-center">
          <h2 className="font-display font-bold text-white text-2xl lg:text-3xl mb-4">
            Need Bail Help Right Now?
          </h2>
          <p className="font-body text-white/60 mb-8">We answer 24/7 — call us and we'll start immediately.</p>
          <a href={`tel:${business.phone}`}
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-body font-bold rounded-xl hover:bg-blue-700 transition-colors text-lg">
            <Phone size={20} /> {business.phone}
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default function Preview() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug || "";

  return (
    <BusinessProvider slug={slug}>
      <PreviewContent />
    </BusinessProvider>
  );
}

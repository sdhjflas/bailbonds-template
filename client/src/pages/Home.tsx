/*
 * DESIGN: Velocity Minimalism — Home Page
 * Modern, sleek, cutting-edge SaaS aesthetic
 * Customized for Bail America Liberty
 */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowRight, Zap, Shield, Clock, CheckCircle2 } from "lucide-react";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663521884016/8pyMy429fFWbVGQ5BPDWMT/hero-main-6R2gXDNyxvdQEm2WsQNbe9.webp";

const features = [
  { icon: Zap, title: "Lightning Fast", desc: "Average 2-hour release time" },
  { icon: Shield, title: "Fully Licensed", desc: "Liberty County, Texas licensed" },
  { icon: Clock, title: "24/7 Available", desc: "Open every day, all year long" },
];

const stats = [
  { value: "18+", label: "Years Experience" },
  { value: "2 Hours", label: "Average Release" },
  { value: "24/7", label: "Always Available" },
  { value: "100%", label: "Dedicated Service" },
];

const services = [
  "Felony Bonds",
  "Misdemeanor Bonds",
  "Traffic Bonds",
  "Mobile Bonds",
  "Surety Bonds",
  "Appearance Bonds",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img src={HERO_IMG} alt="City skyline" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 container py-20">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="font-body text-xs font-semibold text-white/90 uppercase tracking-wide">
                Available 24/7 — Call Now
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display font-bold text-white leading-[1.1] mb-6"
              style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)" }}
            >
              Fast Release.
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
                Freedom Restored.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-body text-lg text-white/75 leading-relaxed mb-10 max-w-2xl"
            >
              Licensed bail bondsmen serving Liberty County with unbeatable prices and fastest service. We handle the paperwork — you focus on your family.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="tel:+19363341110"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-blue-600 hover:bg-blue-700 text-white font-body font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Call (936) 334-1110
              </a>
              <a
                href="/how-it-works"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/25 text-white font-body font-semibold rounded-xl transition-all duration-200 group"
              >
                How It Works
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-white to-blue-50/30">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mx-auto mb-4">
                  <Icon size={24} className="text-blue-600" strokeWidth={1.8} />
                </div>
                <h3 className="font-display font-bold text-[#0D0D0D] text-lg mb-2">{title}</h3>
                <p className="font-body text-sm text-[#0D0D0D]/60">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 lg:py-28 bg-[#0D0D0D]">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="font-display font-bold text-white text-4xl mb-2">{stat.value}</div>
                <p className="font-body text-xs text-white/50 uppercase tracking-widest">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 lg:py-28">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="font-display font-bold text-[#0D0D0D] text-4xl mb-4">
              Every Type of Bail Bond
            </h2>
            <p className="font-body text-lg text-[#0D0D0D]/60 max-w-2xl">
              From felony charges to traffic violations — we handle all types of bonds with expertise and care.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, i) => (
              <motion.a
                key={service}
                href="/services"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group p-5 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100/50 border border-blue-200/50 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <span className="font-body font-semibold text-[#0D0D0D]">{service}</span>
                  <ArrowRight size={16} className="text-blue-600 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 text-center"
          >
            <a
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-body font-semibold rounded-lg transition-colors"
            >
              Explore All Services
              <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-28 bg-blue-50/50">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display font-bold text-[#0D0D0D] text-4xl mb-16 text-center"
          >
            Why Choose Bail America?
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              "Licensed in Liberty County",
              "Average 2-hour release",
              "Flexible payment plans",
              "24/7 availability",
              "No hidden fees",
              "Bilingual support",
              "Professional service",
              "Compassionate approach",
            ].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="flex items-center gap-3"
              >
                <CheckCircle2 size={20} className="text-blue-600 flex-shrink-0" />
                <span className="font-body text-[#0D0D0D]/75">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display font-bold text-white text-4xl mb-4">
              Need Help Right Now?
            </h2>
            <p className="font-body text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Call us 24/7 — we're here to help your family get released fast.
            </p>
            <a
              href="tel:+19363341110"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-body font-semibold rounded-lg hover:bg-blue-50 transition-colors text-lg"
            >
              Call (936) 334-1110
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

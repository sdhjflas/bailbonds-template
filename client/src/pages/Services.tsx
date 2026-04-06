/*
 * DESIGN: Velocity Minimalism — Services Page
 * Comprehensive service offerings with clear categorization
 * CONTENT: Actual data from Bail America Liberty Services page
 */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const allServices = [
  "Appeal Bonds",
  "Appearance Bonds",
  "Bail Bonds Information",
  "Felony Bonds",
  "Fugitive Bonds",
  "Misdemeanor Bonds",
  "Mobile Bonds (We Come to You)",
  "Non-Arrest Bonds",
  "Notary Public",
  "Surety Bonds",
  "Traffic Bonds",
  "Warrants",
];

export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center pt-32 pb-20 overflow-hidden bg-gradient-to-b from-blue-50 to-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="font-display font-bold text-[#0D0D0D] leading-[1.1] mb-6" style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}>
              Bail Bonds Services
            </h1>
            <p className="font-body text-lg text-[#0D0D0D]/70 leading-relaxed max-w-2xl">
              We handle all types of bail bonds including the following. Whatever your situation, Bail America is here to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* All Services */}
      <section className="py-20 lg:py-28">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display font-bold text-[#0D0D0D] text-4xl mb-4">
              Complete List of Services
            </h2>
            <p className="font-body text-lg text-[#0D0D0D]/60 max-w-2xl mx-auto">
              From felony bonds to traffic violations, we have the expertise to handle your bail bonds needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {allServices.map((service, i) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                className="p-5 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100/50 border border-blue-200/50 hover:border-blue-300 hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-blue-600 flex-shrink-0" />
                  <span className="font-body font-semibold text-[#0D0D0D]">{service}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 lg:py-28 bg-blue-50/50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display font-bold text-[#0D0D0D] text-4xl mb-4">
              Quick Categories
            </h2>
            <p className="font-body text-lg text-[#0D0D0D]/60 max-w-2xl mx-auto">
              The most common types of bonds we handle
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { title: "Felony Bail Bonds", desc: "We handle all types of felony charges with experienced professionals" },
              { title: "Misdemeanor Bail Bonds", desc: "Quick and efficient service for misdemeanor charges" },
              { title: "Traffic Bonds", desc: "Fast processing for traffic violations and DUI charges" },
            ].map((category, i) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-white border border-blue-200/50 hover:shadow-lg transition-all"
              >
                <h3 className="font-display font-bold text-[#0D0D0D] text-xl mb-3">
                  {category.title}
                </h3>
                <p className="font-body text-[#0D0D0D]/70 leading-relaxed">
                  {category.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-28">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display font-bold text-[#0D0D0D] text-4xl mb-4">
              Why Choose Bail America?
            </h2>
            <p className="font-body text-lg text-[#0D0D0D]/60 max-w-2xl mx-auto">
              Our commitment to quality service sets us apart
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              "Low Payment Plans",
              "Immediate Release When Bond Posts",
              "Fastest Bail Bonds Service",
              "Available All Day Every Day 24/7/365",
              "Professional Liberty Bondsmen",
              "Experienced Staff",
              "Bilingual Support",
              "No Hidden Fees",
            ].map((benefit, i) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="flex items-center gap-3"
              >
                <CheckCircle2 size={20} className="text-blue-600 flex-shrink-0" />
                <span className="font-body text-[#0D0D0D]/75">{benefit}</span>
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
              Need a Specific Bond Type?
            </h2>
            <p className="font-body text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Call us today to discuss your situation and get the help you need.
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

/*
 * DESIGN: Velocity Minimalism — Contact Page
 * Professional contact information with multiple ways to reach us
 * Customized for Bail America Liberty
 */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";

export default function Contact() {
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
              Contact Bail America Liberty
            </h1>
            <p className="font-body text-lg text-[#0D0D0D]/70 leading-relaxed max-w-2xl">
              We're here 24/7 to help. Reach out to us by phone, email, or visit our office in Liberty, Texas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 lg:py-28">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-display font-bold text-[#0D0D0D] text-3xl mb-8">
                Get in Touch
              </h2>

              <div className="space-y-8">
                {/* Phone */}
                <motion.a
                  href="tel:+19363341110"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="flex items-start gap-4 p-6 rounded-2xl bg-blue-50 border border-blue-200/50 hover:border-blue-300 hover:shadow-lg transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-700 transition-colors">
                    <Phone size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-[#0D0D0D] text-lg mb-1">
                      Call Us
                    </h3>
                    <p className="font-body text-[#0D0D0D]/70 mb-2">
                      Available 24/7, 365 days a year
                    </p>
                    <p className="font-body font-semibold text-blue-600 group-hover:text-blue-700">
                      (936) 334-1110
                    </p>
                  </div>
                </motion.a>

                {/* Email */}
                <motion.a
                  href="mailto:bamerica_lib@yahoo.com"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="flex items-start gap-4 p-6 rounded-2xl bg-blue-50 border border-blue-200/50 hover:border-blue-300 hover:shadow-lg transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-700 transition-colors">
                    <Mail size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-[#0D0D0D] text-lg mb-1">
                      Email Us
                    </h3>
                    <p className="font-body text-[#0D0D0D]/70 mb-2">
                      Send us a message anytime
                    </p>
                    <p className="font-body font-semibold text-blue-600 group-hover:text-blue-700">
                      bamerica_lib@yahoo.com
                    </p>
                  </div>
                </motion.a>

                {/* Address */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex items-start gap-4 p-6 rounded-2xl bg-blue-50 border border-blue-200/50"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-[#0D0D0D] text-lg mb-1">
                      Visit Us
                    </h3>
                    <p className="font-body text-[#0D0D0D]/70 leading-relaxed">
                      2317 Beaumont Ave<br />
                      Liberty, TX 77575
                    </p>
                  </div>
                </motion.div>

                {/* Hours */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex items-start gap-4 p-6 rounded-2xl bg-blue-50 border border-blue-200/50"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center flex-shrink-0">
                    <Clock size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-[#0D0D0D] text-lg mb-1">
                      Hours
                    </h3>
                    <p className="font-body text-[#0D0D0D]/70">
                      Open 24/7, 365 Days a Year
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Service Areas */}
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-display font-bold text-[#0D0D0D] text-3xl mb-8">
                Service Areas
              </h2>
              <p className="font-body text-[#0D0D0D]/70 mb-6 leading-relaxed">
                We serve all jails in Liberty County, Texas, including:
              </p>

              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  "Liberty",
                  "Hardin",
                  "Kenefick",
                  "Dayton Lakes",
                  "Dayton",
                  "Daisetta",
                  "Plum Grove",
                  "North Cleveland",
                  "Cleveland",
                  "Devers",
                  "Ames",
                  "All Liberty County Jails",
                ].map((area, i) => (
                  <motion.div
                    key={area}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.03 }}
                    className="flex items-center gap-2 p-3 rounded-lg bg-blue-50 border border-blue-200/50"
                  >
                    <MessageSquare size={16} className="text-blue-600 flex-shrink-0" />
                    <span className="font-body text-sm text-[#0D0D0D]">{area}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100/50 border border-blue-200/50"
              >
                <p className="font-body text-[#0D0D0D]/70 leading-relaxed">
                  <span className="font-semibold text-[#0D0D0D]">Mobile Bonds Available:</span> If you can't come to our office, we come to you! Our mobile bonding service brings the convenience of bail bonding directly to you.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="py-20 lg:py-28 bg-blue-50/50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="font-display font-bold text-[#0D0D0D] text-4xl mb-4">
              Don't Wait — We're Ready to Help
            </h2>
            <p className="font-body text-lg text-[#0D0D0D]/70 mb-8 leading-relaxed">
              Being arrested is stressful and confusing. Our professional bondsmen are standing by 24/7 to answer your questions and help you through the bail bonds process.
            </p>
            <a
              href="tel:+19363341110"
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-body font-semibold rounded-lg transition-colors text-lg"
            >
              <Phone size={20} />
              Call Now: (936) 334-1110
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

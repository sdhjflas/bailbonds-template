/*
 * DESIGN: Velocity Minimalism — About Page
 * Professional, trustworthy, experience-focused
 * CONTENT: Actual data from Bail America Liberty About Us page
 */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Award, Users, Heart, Zap } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center pt-32 pb-20 overflow-hidden bg-gradient-to-b from-blue-50 to-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="font-display font-bold text-[#0D0D0D] leading-[1.1] mb-6" style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}>
              About Bail America
            </h1>
            <p className="font-body text-lg text-[#0D0D0D]/70 leading-relaxed max-w-2xl">
              The owner of Bail America Bail Bonds has been in the bail bonds business for over 18 years with extensive experience in how jails handle arrested individuals and the bail bonds process.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bail Bonds Experience */}
      <section className="py-20 lg:py-28">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-display font-bold text-[#0D0D0D] text-3xl mb-6">
                Bail Bonds Experience
              </h2>
              <div className="space-y-4 font-body text-[#0D0D0D]/70 leading-relaxed">
                <p>
                  The owner of Bail America Bail Bonds has been in the bail bonds business for over 18 years. He has a lot of experience in how jails handle people who have been arrested. He is very knowledgeable about getting a person released from jail, and how the bail bonds process works.
                </p>
                <p>
                  He has a strong work ethic and is dedicated to helping his clients have the best bonding experience possible during such a difficult time.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100/50 border border-blue-200/50"
            >
              <Award size={48} className="text-blue-600 mb-4" />
              <h3 className="font-display font-bold text-[#0D0D0D] text-2xl mb-3">
                18+ Years
              </h3>
              <p className="font-body text-[#0D0D0D]/70">
                Extensive experience in the bail bonds business and jail procedures
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Best Customer Service */}
      <section className="py-20 lg:py-28 bg-blue-50/50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="font-display font-bold text-[#0D0D0D] text-4xl mb-4">
              Proud to Offer the Best Customer Service
            </h2>
            <p className="font-body text-lg text-[#0D0D0D]/60 max-w-2xl">
              Our commitment to excellence in every interaction
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-2xl bg-white border border-blue-200/50 hover:shadow-lg transition-all"
            >
              <Users size={32} className="text-blue-600 mb-4" />
              <h3 className="font-display font-bold text-[#0D0D0D] text-xl mb-3">
                Experienced Staff
              </h3>
              <p className="font-body text-[#0D0D0D]/70 leading-relaxed">
                At Bail America Bail Bonds, we take pride in providing the best customer service possible. Our office staff is experienced in the bail bonds process. They are very knowledgeable about jail and court procedures.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-8 rounded-2xl bg-white border border-blue-200/50 hover:shadow-lg transition-all"
            >
              <Heart size={32} className="text-blue-600 mb-4" />
              <h3 className="font-display font-bold text-[#0D0D0D] text-xl mb-3">
                Always Available
              </h3>
              <p className="font-body text-[#0D0D0D]/70 leading-relaxed">
                Our bondsmen and staff are always available to assist you with any questions you might have during the whole process. We're here to help you navigate this difficult time with compassion and expertise.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* There For You */}
      <section className="py-20 lg:py-28">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h2 className="font-display font-bold text-[#0D0D0D] text-4xl mb-6">
              We are There for You Every Step of the Way
            </h2>
            <div className="space-y-6 font-body text-[#0D0D0D]/70 leading-relaxed">
              <p>
                We are fortunate to have many other employees that work hard to make your bail bonds experience as pleasant and easy as possible. We walk our clients through the entire bail bonds process so they understand fully what is going to happen each step of the way.
              </p>
              <p>
                Let Bail America help you during this difficult time. A bail bond professional is standing by to assist you at <span className="font-semibold text-[#0D0D0D]">(936) 334-1110.</span>
              </p>
            </div>
          </motion.div>
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
              Ready to Work With Us?
            </h2>
            <p className="font-body text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Contact us today to learn more about our services or to get help right now.
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

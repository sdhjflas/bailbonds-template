/*
 * DESIGN: Velocity Minimalism — About Page
 * Professional, trustworthy, experience-focused
 * Customized for Bail America Liberty
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
              About Bail America Liberty
            </h1>
            <p className="font-body text-lg text-[#0D0D0D]/70 leading-relaxed max-w-2xl">
              With over 18 years of experience in the bail bonds industry, we've dedicated ourselves to providing fast, compassionate service to families in Liberty County when they need it most.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
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
                Our Story
              </h2>
              <div className="space-y-4 font-body text-[#0D0D0D]/70 leading-relaxed">
                <p>
                  The owner of Bail America Liberty has been in the bail bonds business for over 18 years, bringing extensive experience in how jails handle arrested individuals and the bail process.
                </p>
                <p>
                  With deep knowledge of getting people released from jail and how the bail bonds process works, we've built a reputation for strong work ethic and dedication to helping our clients have the best bonding experience possible during such a difficult time.
                </p>
                <p>
                  We understand that being arrested is stressful and confusing. That's why we walk our clients through every step of the bail bonds process so they understand fully what will happen and what to expect.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { icon: Award, label: "18+ Years", desc: "Industry Experience" },
                { icon: Users, label: "Expert", desc: "Professional Staff" },
                { icon: Heart, label: "Compassionate", desc: "Dedicated Service" },
                { icon: Zap, label: "Fast", desc: "2-Hour Average" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="p-6 rounded-2xl bg-blue-50 border border-blue-200/50 text-center"
                >
                  <item.icon size={28} className="text-blue-600 mx-auto mb-3" />
                  <div className="font-display font-bold text-[#0D0D0D] text-lg mb-1">{item.label}</div>
                  <p className="font-body text-sm text-[#0D0D0D]/60">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              What We Stand For
            </h2>
            <p className="font-body text-lg text-[#0D0D0D]/60 max-w-2xl mx-auto">
              Our core values guide everything we do for our clients
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Best Customer Service",
                desc: "We take pride in providing the best customer service possible. Our office staff is experienced in the bail bonds process and knowledgeable about jail and court procedures.",
              },
              {
                title: "Professional Excellence",
                desc: "Our bondsmen and staff are always available to assist you with any questions during the entire process. We're committed to making your experience as smooth as possible.",
              },
              {
                title: "There for You",
                desc: "We have many dedicated employees who work hard to make your bail bonds experience as pleasant and easy as possible. You're not alone in this process.",
              },
            ].map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-white border border-blue-200/50 hover:shadow-lg transition-all"
              >
                <h3 className="font-display font-bold text-[#0D0D0D] text-xl mb-3">
                  {value.title}
                </h3>
                <p className="font-body text-[#0D0D0D]/70 leading-relaxed">
                  {value.desc}
                </p>
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

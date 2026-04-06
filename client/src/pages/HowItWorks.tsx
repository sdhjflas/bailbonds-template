/*
 * DESIGN: Velocity Minimalism — How It Works Page
 * Step-by-step process explanation with clear visual hierarchy
 * Customized for Bail America Liberty
 */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowDown, CheckCircle2 } from "lucide-react";

const steps = [
  {
    number: "1",
    title: "Arrest & Bail Set",
    desc: "When a person is arrested and taken to jail, a bail amount is set by the court. This amount must be posted for the person to be released.",
  },
  {
    number: "2",
    title: "Contact Us",
    desc: "If you cannot pay the full bail amount, contact Bail America Liberty. Our professional bondsmen are standing by 24/7 to help you.",
  },
  {
    number: "3",
    title: "Bail Hearing (if needed)",
    desc: "For serious crimes, a bail hearing may be required. A judge will decide if bail can be posted and the amount. We'll guide you through this process.",
  },
  {
    number: "4",
    title: "Post Bond",
    desc: "We post a surety bond to the court as insurance that the person will appear for their court hearing. You pay only a percentage of the bail amount.",
  },
  {
    number: "5",
    title: "Release",
    desc: "Once the bond is posted, the person is released from jail immediately. Average release time is about 2 hours.",
  },
  {
    number: "6",
    title: "Court Appearance",
    desc: "The person must appear at all scheduled court hearings. If they fail to appear, the bond is forfeited and a warrant is issued.",
  },
];

export default function HowItWorks() {
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
              How the Bail Bonds Process Works
            </h1>
            <p className="font-body text-lg text-[#0D0D0D]/70 leading-relaxed max-w-2xl">
              Understanding the bail bonds process can help ease your stress during a difficult time. Here's how we help you get your loved one released quickly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 lg:py-28">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className="flex gap-6 mb-8">
                  {/* Step Number */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center">
                      <span className="font-display font-bold text-white text-2xl">{step.number}</span>
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className="flex-1 pt-2">
                    <h3 className="font-display font-bold text-[#0D0D0D] text-xl mb-2">
                      {step.title}
                    </h3>
                    <p className="font-body text-[#0D0D0D]/70 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>

                {/* Arrow between steps */}
                {i < steps.length - 1 && (
                  <div className="flex justify-center mb-8">
                    <motion.div
                      animate={{ y: [0, 8, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowDown size={24} className="text-blue-400" />
                    </motion.div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Points */}
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
              Important Things to Know
            </h2>
            <p className="font-body text-lg text-[#0D0D0D]/60 max-w-2xl mx-auto">
              Understanding these key points will help you navigate the bail bonds process
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "What is a Bail Bond?",
                desc: "A bail bond is a surety bond that is paid to the court as insurance that the person will appear for their court hearing.",
              },
              {
                title: "Why Use a Bail Bondsman?",
                desc: "If you cannot pay the full bail amount, a bail bondsman posts the bond for you. You pay only a percentage of the bail amount.",
              },
              {
                title: "Immediate vs. Serious Crimes",
                desc: "For less serious crimes, bail can be set immediately. For serious crimes, a bail hearing is required before bail can be set.",
              },
              {
                title: "What if They Don't Appear?",
                desc: "If the person fails to appear in court, the bond is forfeited and a warrant is issued for their arrest.",
              },
              {
                title: "Average Release Time",
                desc: "Once the bond is posted with the court, release typically happens within 2 hours, depending on jail processing.",
              },
              {
                title: "We're Here to Help",
                desc: "Our experienced bondsmen will walk you through every step and answer all your questions during this difficult time.",
              },
            ].map((point, i) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="p-6 rounded-2xl bg-white border border-blue-200/50 hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-3 mb-3">
                  <CheckCircle2 size={24} className="text-blue-600 flex-shrink-0 mt-0.5" />
                  <h3 className="font-display font-bold text-[#0D0D0D] text-lg">
                    {point.title}
                  </h3>
                </div>
                <p className="font-body text-[#0D0D0D]/70 leading-relaxed ml-9">
                  {point.desc}
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
              Have More Questions?
            </h2>
            <p className="font-body text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Our professional bondsmen are ready to answer all your questions and help you through the process.
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

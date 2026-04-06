/*
 * DESIGN: Velocity Minimalism — FAQ Page
 * Accordion-style FAQ with common questions about bail bonds
 * CONTENT: Common questions about bail bonds services
 */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqItems = [
  {
    category: "Bail Bonds Basics",
    questions: [
      {
        q: "What is a bail bond?",
        a: "A bail bond is a written promise that a defendant will appear in court. A bail bondsman posts the bond to the court as insurance that the defendant will show up for their court date.",
      },
      {
        q: "How much does a bail bond cost?",
        a: "Bail bond fees are typically 10-15% of the total bail amount set by the court. Bail America offers flexible payment plans to make it affordable for families.",
      },
      {
        q: "What's the difference between bail and a bail bond?",
        a: "Bail is the amount of money set by the court. A bail bond is a service where a bondsman posts the bail for you, and you pay a percentage of that amount.",
      },
    ],
  },
  {
    category: "Our Services",
    questions: [
      {
        q: "What types of bonds do you handle?",
        a: "We handle all types of bonds including felony, misdemeanor, traffic, surety, appearance, appeal, fugitive, and non-arrest bonds.",
      },
      {
        q: "Do you offer mobile bonding?",
        a: "Yes! We offer mobile bonding services. We come to you to process your bail bond. This is especially convenient for families who can't visit our office.",
      },
      {
        q: "Are you available 24/7?",
        a: "Yes! Bail America is open 24 hours a day, 7 days a week, 365 days a year. We're always ready to help, even at 2 AM.",
      },
    ],
  },
  {
    category: "The Process",
    questions: [
      {
        q: "How long does it take to get someone out of jail?",
        a: "Once your bail bond is posted with the court, release is typically immediate. Our average release time is about 2 hours from the time you contact us.",
      },
      {
        q: "What information do I need to provide?",
        a: "We'll need the defendant's full name, date of birth, the jail they're being held in, and the charges. Our staff will guide you through the process.",
      },
      {
        q: "What if someone doesn't appear in court?",
        a: "If the defendant fails to appear in court, the bond is forfeited and a warrant is issued. We handle all the paperwork involved in this process.",
      },
    ],
  },
  {
    category: "Payment & Eligibility",
    questions: [
      {
        q: "Do you offer payment plans?",
        a: "Yes! We offer flexible, low payment plans to make bail bonds affordable for families. We work with you to find a payment option that fits your budget.",
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept cash, credit cards, and debit cards. We also offer payment plans for larger amounts.",
      },
      {
        q: "Do you require collateral?",
        a: "For most bonds, we don't require collateral. However, for very large bail amounts, we may discuss collateral options. Call us to discuss your specific situation.",
      },
    ],
  },
  {
    category: "Service Areas",
    questions: [
      {
        q: "What areas do you serve?",
        a: "We serve all of Liberty County, Texas, including Liberty, Hardin, Dayton, Cleveland, and surrounding areas. We handle all Liberty County jails.",
      },
      {
        q: "Do you serve other counties?",
        a: "We primarily serve Liberty County. Contact us to discuss your specific location.",
      },
      {
        q: "Can you help if someone is arrested in another state?",
        a: "We specialize in Texas bail bonds. For out-of-state situations, contact us and we can provide referrals to bondsmen in other states.",
      },
    ],
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="border border-blue-200/50 rounded-xl overflow-hidden hover:border-blue-300 transition-colors"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-blue-50/50 transition-colors text-left"
      >
        <span className="font-body font-semibold text-[#0D0D0D] pr-4">{q}</span>
        <ChevronDown
          size={20}
          className={`text-blue-600 flex-shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="px-6 py-4 bg-blue-50/50 border-t border-blue-200/50"
        >
          <p className="font-body text-[#0D0D0D]/70 leading-relaxed">{a}</p>
        </motion.div>
      )}
    </motion.div>
  );
}

export default function FAQ() {
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
              Frequently Asked Questions
            </h1>
            <p className="font-body text-lg text-[#0D0D0D]/70 leading-relaxed max-w-2xl">
              Get answers to common questions about bail bonds, our services, and the bail process.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-20 lg:py-28">
        <div className="container">
          <div className="max-w-3xl mx-auto space-y-16">
            {faqItems.map((category, categoryIdx) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIdx * 0.1 }}
              >
                <h2 className="font-display font-bold text-[#0D0D0D] text-2xl mb-8 pb-4 border-b-2 border-blue-200">
                  {category.category}
                </h2>
                <div className="space-y-4">
                  {category.questions.map((item) => (
                    <FAQItem key={item.q} q={item.q} a={item.a} />
                  ))}
                </div>
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
              Still Have Questions?
            </h2>
            <p className="font-body text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Our bail bond professionals are ready to answer any questions and help you through the process.
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

/*
 * DESIGN: Velocity Minimalism — Payments Page
 * Payment methods, flexible plans, and payment calculator
 * CONTENT: Actual data from Bail America Liberty
 */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { CreditCard, DollarSign, Smartphone, Building2, CheckCircle2, Calculator } from "lucide-react";
import { useState } from "react";

export default function Payments() {
  const [bondAmount, setBondAmount] = useState(5000);
  const [selectedPlan, setSelectedPlan] = useState("standard");

  // Calculate payment based on bond amount and plan
  const calculatePayment = () => {
    const percentage = selectedPlan === "standard" ? 0.10 : selectedPlan === "premium" ? 0.08 : 0.12;
    return Math.round(bondAmount * percentage * 100) / 100;
  };

  const paymentAmount = calculatePayment();

  const paymentMethods = [
    {
      icon: CreditCard,
      title: "Credit/Debit Card",
      desc: "Visa, Mastercard, American Express, Discover",
      available: true,
    },
    {
      icon: Smartphone,
      title: "Mobile Payment",
      desc: "Apple Pay, Google Pay, Samsung Pay",
      available: true,
    },
    {
      icon: Building2,
      title: "Bank Transfer",
      desc: "Direct ACH transfer from your bank account",
      available: true,
    },
    {
      icon: DollarSign,
      title: "Cash Payment",
      desc: "Pay in person at our office in Liberty, TX",
      available: true,
    },
  ];

  const paymentPlans = [
    {
      id: "standard",
      name: "Standard Plan",
      rate: "10%",
      desc: "Full payment upfront",
      features: ["Immediate bond posting", "No interest charges", "Fastest processing"],
    },
    {
      id: "premium",
      name: "Premium Plan",
      rate: "8%",
      desc: "Reduced rate for larger bonds",
      features: ["Bonds over $10,000", "Lower percentage rate", "Flexible terms"],
    },
    {
      id: "budget",
      name: "Budget Plan",
      rate: "12%",
      desc: "Payment plan options available",
      features: ["Installment payments", "Up to 12 months", "No prepayment penalty"],
    },
  ];

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
              Flexible Payment Options
            </h1>
            <p className="font-body text-lg text-[#0D0D0D]/70 leading-relaxed max-w-2xl">
              We offer multiple payment methods and flexible plans to fit your budget. Choose the option that works best for you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Payment Methods */}
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
              Payment Methods We Accept
            </h2>
            <p className="font-body text-lg text-[#0D0D0D]/60 max-w-2xl">
              Choose from multiple convenient payment options to pay your bail bond fee.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {paymentMethods.map((method, i) => {
              const Icon = method.icon;
              return (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100/50 border border-blue-200/50 text-center"
                >
                  <Icon size={32} className="text-blue-600 mx-auto mb-4" />
                  <h3 className="font-display font-bold text-[#0D0D0D] text-lg mb-2">
                    {method.title}
                  </h3>
                  <p className="font-body text-sm text-[#0D0D0D]/60">{method.desc}</p>
                  {method.available && (
                    <div className="mt-4 flex items-center justify-center gap-1 text-green-600">
                      <CheckCircle2 size={16} />
                      <span className="font-body text-xs font-semibold">Available</span>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Payment Plans */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-blue-50/50 to-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="font-display font-bold text-[#0D0D0D] text-4xl mb-4">
              Payment Plans
            </h2>
            <p className="font-body text-lg text-[#0D0D0D]/60 max-w-2xl">
              Select the payment plan that best fits your situation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {paymentPlans.map((plan, i) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                onClick={() => setSelectedPlan(plan.id)}
                className={`p-8 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                  selectedPlan === plan.id
                    ? "bg-blue-50 border-blue-600 shadow-lg"
                    : "bg-white border-blue-200/50 hover:border-blue-300"
                }`}
              >
                <div className="text-center mb-6">
                  <div className="font-display font-bold text-blue-600 text-4xl mb-2">
                    {plan.rate}
                  </div>
                  <h3 className="font-display font-bold text-[#0D0D0D] text-xl mb-2">
                    {plan.name}
                  </h3>
                  <p className="font-body text-sm text-[#0D0D0D]/60">{plan.desc}</p>
                </div>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="font-body text-sm text-[#0D0D0D]/75">{feature}</span>
                    </li>
                  ))}
                </ul>

                {selectedPlan === plan.id && (
                  <div className="pt-4 border-t border-blue-200">
                    <p className="font-body text-xs text-blue-600 font-semibold text-center">
                      ✓ Selected Plan
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Calculator */}
      <section className="py-20 lg:py-28">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="font-display font-bold text-[#0D0D0D] text-4xl mb-4 flex items-center justify-center gap-3">
                <Calculator size={32} className="text-blue-600" />
                Payment Calculator
              </h2>
              <p className="font-body text-lg text-[#0D0D0D]/60">
                Estimate your bail bond fee based on the bond amount and payment plan.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-blue-50 to-blue-100/50 border border-blue-200/50 rounded-2xl p-8"
            >
              {/* Bond Amount Input */}
              <div className="mb-8">
                <label className="block font-body font-semibold text-[#0D0D0D] mb-3">
                  Bond Amount: ${bondAmount.toLocaleString()}
                </label>
                <input
                  type="range"
                  min="1000"
                  max="100000"
                  step="1000"
                  value={bondAmount}
                  onChange={(e) => setBondAmount(Number(e.target.value))}
                  className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between font-body text-xs text-[#0D0D0D]/50 mt-2">
                  <span>$1,000</span>
                  <span>$100,000</span>
                </div>
              </div>

              {/* Selected Plan Display */}
              <div className="mb-8 p-4 bg-white rounded-lg border border-blue-200/50">
                <p className="font-body text-sm text-[#0D0D0D]/60 mb-1">Selected Plan</p>
                <p className="font-display font-bold text-[#0D0D0D] text-lg">
                  {paymentPlans.find((p) => p.id === selectedPlan)?.name}
                </p>
              </div>

              {/* Calculation Result */}
              <div className="p-6 bg-white rounded-lg border-2 border-blue-600">
                <p className="font-body text-sm text-[#0D0D0D]/60 mb-2">Estimated Bond Fee</p>
                <div className="font-display font-bold text-4xl text-blue-600 mb-4">
                  ${paymentAmount.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                </div>
                <p className="font-body text-xs text-[#0D0D0D]/50">
                  This is an estimate. Actual fees may vary based on bond type and circumstances.
                </p>
              </div>

              {/* CTA Button */}
              <motion.a
                href="tel:+19363341110"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-8 block w-full px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white font-body font-semibold rounded-lg transition-colors text-center"
              >
                Call (936) 334-1110 to Proceed with Payment
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-blue-50/50 to-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="font-display font-bold text-[#0D0D0D] text-4xl mb-12 text-center">
              Payment FAQs
            </h2>

            <div className="space-y-6">
              {[
                {
                  q: "What is the standard bail bond fee?",
                  a: "The standard bail bond fee is typically 10% of the total bond amount. However, we offer flexible payment plans and discounts for larger bonds.",
                },
                {
                  q: "Can I make payments over time?",
                  a: "Yes! Our Budget Plan allows installment payments spread over up to 12 months with no prepayment penalty.",
                },
                {
                  q: "Do you accept credit cards?",
                  a: "Yes, we accept all major credit and debit cards including Visa, Mastercard, American Express, and Discover.",
                },
                {
                  q: "Is there a discount for paying in full upfront?",
                  a: "Our Standard Plan offers the best rate at 10% when you pay the full amount upfront with immediate bond posting.",
                },
                {
                  q: "What if I need to cancel my payment plan?",
                  a: "Contact us immediately at (936) 334-1110. Cancellation terms depend on your specific payment plan and circumstances.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="p-6 rounded-lg bg-white border border-blue-200/50 hover:border-blue-300 transition-colors"
                >
                  <h3 className="font-display font-bold text-[#0D0D0D] text-lg mb-3">
                    {item.q}
                  </h3>
                  <p className="font-body text-[#0D0D0D]/70">{item.a}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

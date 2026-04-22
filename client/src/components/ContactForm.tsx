/*
 * DESIGN: Velocity Minimalism — Contact Form Component
 * Form with validation and submission handling
 */
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, User, MessageSquare, CheckCircle2, AlertCircle } from "lucide-react";
export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isPending, setIsPending] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsPending(true);
    setTimeout(() => {
      setIsPending(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    }, 800);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-2xl mx-auto"
    >
      {submitted && (
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          className="mb-6 p-4 rounded-lg bg-green-50 border border-green-200 flex items-start gap-3"
        >
          <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-body font-semibold text-green-900">Message Sent!</h3>
            <p className="font-body text-sm text-green-800">
              Thank you for contacting us. We'll get back to you as soon as possible.
            </p>
          </div>
        </motion.div>
      )}

      {errors.submit && (
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200 flex items-start gap-3"
        >
          <AlertCircle size={20} className="text-red-600 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-body font-semibold text-red-900">Error</h3>
            <p className="font-body text-sm text-red-800">{errors.submit}</p>
          </div>
        </motion.div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <label className="block font-body font-semibold text-[#0D0D0D] mb-2">
            Full Name *
          </label>
          <div className="relative">
            <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-600 pointer-events-none" />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
              className={`w-full pl-12 pr-4 py-3 rounded-lg border-2 transition-colors font-body ${
                errors.name
                  ? "border-red-300 bg-red-50/30 focus:border-red-400 focus:outline-none"
                  : "border-blue-200 bg-blue-50/30 focus:border-blue-400 focus:outline-none"
              }`}
            />
          </div>
          {errors.name && (
            <p className="font-body text-sm text-red-600 mt-1">{errors.name}</p>
          )}
        </motion.div>

        {/* Email */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          <label className="block font-body font-semibold text-[#0D0D0D] mb-2">
            Email Address *
          </label>
          <div className="relative">
            <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-600 pointer-events-none" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className={`w-full pl-12 pr-4 py-3 rounded-lg border-2 transition-colors font-body ${
                errors.email
                  ? "border-red-300 bg-red-50/30 focus:border-red-400 focus:outline-none"
                  : "border-blue-200 bg-blue-50/30 focus:border-blue-400 focus:outline-none"
              }`}
            />
          </div>
          {errors.email && (
            <p className="font-body text-sm text-red-600 mt-1">{errors.email}</p>
          )}
        </motion.div>

        {/* Phone */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <label className="block font-body font-semibold text-[#0D0D0D] mb-2">
            Phone Number *
          </label>
          <div className="relative">
            <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-600 pointer-events-none" />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="(936) 334-1110"
              className={`w-full pl-12 pr-4 py-3 rounded-lg border-2 transition-colors font-body ${
                errors.phone
                  ? "border-red-300 bg-red-50/30 focus:border-red-400 focus:outline-none"
                  : "border-blue-200 bg-blue-50/30 focus:border-blue-400 focus:outline-none"
              }`}
            />
          </div>
          {errors.phone && (
            <p className="font-body text-sm text-red-600 mt-1">{errors.phone}</p>
          )}
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <label className="block font-body font-semibold text-[#0D0D0D] mb-2">
            Message *
          </label>
          <div className="relative">
            <MessageSquare size={18} className="absolute left-4 top-4 text-blue-600 pointer-events-none" />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your bail bond inquiry..."
              rows={5}
              className={`w-full pl-12 pr-4 py-3 rounded-lg border-2 transition-colors font-body resize-none ${
                errors.message
                  ? "border-red-300 bg-red-50/30 focus:border-red-400 focus:outline-none"
                  : "border-blue-200 bg-blue-50/30 focus:border-blue-400 focus:outline-none"
              }`}
            />
          </div>
          {errors.message && (
            <p className="font-body text-sm text-red-600 mt-1">{errors.message}</p>
          )}
        </motion.div>

        {/* Submit Button */}
        <motion.button
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          type="submit"
          disabled={isPending}
          className="w-full px-6 py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-body font-semibold rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
        >
          {isPending ? (
            <>
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Mail size={18} />
              Send Message
            </>
          )}
        </motion.button>

        <p className="font-body text-xs text-[#0D0D0D]/50 text-center">
          We'll respond to your inquiry within 24 hours.
        </p>
      </form>
    </motion.div>
  );
}

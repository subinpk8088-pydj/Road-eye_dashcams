import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";
import Button from "../components/common/Button";
import { useCart } from "../context/CartContext";
import { getWhatsAppLink } from "../utils/constants";

const CONTACT_INFO = [
  { icon: MapPin, label: "Visit Us", value: "Kannur, Kerala, India" },
  { icon: Phone, label: "Call Us", value: "+91 94963 13744" },
  { icon: Mail, label: "Email Us", value: "support@roadeye.in" },
  { icon: Clock, label: "Support Hours", value: "Mon – Sat: 9AM – 7PM" },
];

export default function Contact() {
  const { showToast } = useCart();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      showToast("Message sent! Our team will be in touch soon.");
      setForm({ name: "", email: "", message: "" });
      setSubmitting(false);
    }, 900);
  };

  return (
    <div className="pt-12 pb-24 bg-cloud min-h-screen">
      <div className="container-custom">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center mb-16">
          <span className="uppercase tracking-[0.2em] text-xs text-blue font-bold">Get In Touch</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold gradient-text mt-3">We're Here to Help</h1>
          <p className="text-ink/60 mt-3 max-w-lg mx-auto">Need help choosing a model, installing, or claiming warranty? Reach out any time.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="glass bg-white rounded-3xl p-8 shadow-glass">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-ink/70 mb-1.5">Full Name</label>
                <input id="name" name="name" required value={form.name} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-cloud border border-mist focus:border-blue focus:outline-none text-sm" placeholder="Jane Doe" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-ink/70 mb-1.5">Email Address</label>
                <input id="email" type="email" name="email" required value={form.email} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-cloud border border-mist focus:border-blue focus:outline-none text-sm" placeholder="jane@example.com" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-ink/70 mb-1.5">Message</label>
                <textarea id="message" name="message" required rows={5} value={form.message} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-cloud border border-mist focus:border-blue focus:outline-none text-sm resize-none" placeholder="Tell us how we can help..." />
              </div>
              <Button type="submit" variant="primary" icon={Send} disabled={submitting} className="w-full">{submitting ? "Sending..." : "Send Message"}</Button>
            </form>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex flex-col gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {CONTACT_INFO.map((info) => (
                <div key={info.label} className="glass bg-white rounded-2xl p-5 shadow-glass flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-gradient flex items-center justify-center flex-shrink-0"><info.icon size={18} className="text-white" /></div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-ink/50">{info.label}</p>
                    <p className="text-sm font-bold text-ink">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="rounded-2xl overflow-hidden shadow-glass flex-1 min-h-[240px]">
              <iframe title="RoadEye location" src="https://www.google.com/maps?q=Kannur,Kerala,India&output=embed" className="w-full h-full min-h-[240px] border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
            <a href={getWhatsAppLink("Hi! I have a question about RoadEye dashcams.")} target="_blank" rel="noopener noreferrer"
              className="glass bg-white rounded-2xl p-5 shadow-glass flex items-center gap-3 hover:shadow-soft transition-shadow">
              <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center flex-shrink-0"><MessageCircle size={18} className="text-white" /></div>
              <div>
                <p className="text-sm font-bold text-ink">Chat with us on WhatsApp</p>
                <p className="text-xs text-ink/50">Usually replies within minutes</p>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

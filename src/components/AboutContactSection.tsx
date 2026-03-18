import { useState, type FormEvent } from "react";
import { MapPin, Mail, Send, CheckCircle, Linkedin, Instagram, Github } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Link } from "react-router-dom";

export default function AboutContactSection() {
  const { t } = useLanguage();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const res = await fetch("https://formspree.io/f/xqeywezb", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formState),
  });
  if (res.ok) {
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: "", email: "", message: "" });
      setTermsAccepted(false);
    }, 4000);
    }
  };

  return (
    <>
      {/* ABOUT */}
      <section id="nosotros" className="relative py-24 bg-[#111827]">
        <div className="absolute top-0 left-0 right-0 gradient-line" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
          <p className="text-[#00D4FF] text-sm font-semibold tracking-widest uppercase mb-3">
            {t("about.subtitle")}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
            {t("about.title")}
          </h2>
          <div className="gradient-line w-24 mx-auto mb-8" />
          <p className="text-[#94A3B8] text-lg leading-relaxed mb-6">
            {t("about.p1")}
          </p>
          <p className="text-[#94A3B8] text-lg leading-relaxed mb-8">
            {t("about.p2")}
          </p>
          <div className="inline-flex items-center gap-2 text-[#00D4FF]">
            <MapPin className="w-5 h-5" />
            <span className="text-sm font-medium">{t("about.location")}</span>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contacto" className="relative py-24 bg-[#0A0E1A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#00D4FF] text-sm font-semibold tracking-widest uppercase mb-3">
              {t("contact.subtitle")}
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              {t("contact.title")}
            </h2>
            <div className="gradient-line w-24 mx-auto mb-6" />
            <div className="inline-flex items-center gap-2 text-[#94A3B8]">
              <Mail className="w-4 h-4 text-[#00D4FF]" />
              <a
                href="mailto:info@francotech.online"
                className="hover:text-[#00D4FF] transition-colors"
              >
                info@francotech.online
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="max-w-lg mx-auto">
            {submitted ? (
              <div className="text-center py-12 animate-fade-in-up">
                <CheckCircle className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">{t("contact.success.title")}</h3>
                <p className="text-[#94A3B8]">{t("contact.success.desc")}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-[#94A3B8] mb-2"
                  >
                    {t("contact.name")}
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg bg-[#111827] border border-[#1E293B] text-white placeholder-[#4B5563] focus:outline-none focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF]/30 transition-all"
                    placeholder={t("contact.name.placeholder")}
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[#94A3B8] mb-2"
                  >
                    {t("contact.email")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg bg-[#111827] border border-[#1E293B] text-white placeholder-[#4B5563] focus:outline-none focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF]/30 transition-all"
                    placeholder={t("contact.email.placeholder")}
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-[#94A3B8] mb-2"
                  >
                    {t("contact.message")}
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg bg-[#111827] border border-[#1E293B] text-white placeholder-[#4B5563] focus:outline-none focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF]/30 transition-all resize-none"
                    placeholder={t("contact.message.placeholder")}
                  />
                </div>
                  {/* Terms checkbox */}
                  <div className="flex items-start gap-3">
                    <div
                      onClick={() => setTermsAccepted(!termsAccepted)}
                      className={`mt-0.5 w-5 h-5 min-w-[20px] rounded border-2 cursor-pointer flex items-center justify-center transition-all ${
                        termsAccepted
                          ? "bg-[#00D4FF] border-[#00D4FF]"
                          : "bg-transparent border-[#1E293B] hover:border-[#00D4FF]/50"
                      }`}
                    >
                      {termsAccepted && (
                        <svg className="w-3 h-3 text-[#0A0E1A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                    <p className="text-[#94A3B8] text-sm leading-relaxed">
                      {t("contact.terms")}
                      <Link to="/privacidad" className="text-[#00D4FF] hover:underline">
                        {t("contact.terms.link")}
                      </Link>
                    </p>
                  </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={!termsAccepted}
                   className={`w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#00D4FF] to-[#0088CC] text-[#0A0E1A] font-bold text-lg rounded-lg transition-all duration-300 ${
                    termsAccepted
                      ? "hover:shadow-[0_0_30px_rgba(0,212,255,0.4)] hover:scale-[1.02] cursor-pointer"
                      : "opacity-40 cursor-not-allowed"
                  }`}
                >
                  {t("contact.submit")}
                  <Send className="w-5 h-5" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-24 border-t border-[#1E293B] pt-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Social Icons */}
            <div className="flex flex-col items-center gap-4 mb-6">
              <div className="flex items-center gap-4">
                <a
                  href="https://www.linkedin.com/company/francotech-online"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-10 h-10 rounded-full border border-[#1E293B] bg-[#111827] flex items-center justify-center text-[#94A3B8] hover:text-[#00D4FF] hover:border-[#00D4FF]/40 transition-all"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/francotech.online/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-full border border-[#1E293B] bg-[#111827] flex items-center justify-center text-[#94A3B8] hover:text-[#00D4FF] hover:border-[#00D4FF]/40 transition-all"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/francotech-online"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="w-10 h-10 rounded-full border border-[#1E293B] bg-[#111827] flex items-center justify-center text-[#94A3B8] hover:text-[#00D4FF] hover:border-[#00D4FF]/40 transition-all"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
              <p className="text-[#4B5563] text-xs">{t("footer.social")}</p>
            </div>

            {/* Footer info */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-[#4B5563] text-sm">
                © {new Date().getFullYear()} FrancoTech. {t("footer.rights")}
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="/privacidad"
                  className="text-[#4B5563] text-sm hover:text-[#00D4FF] transition-colors"
                >
                  {t("footer.privacy")}
                </a>
                <p className="text-[#4B5563] text-sm">
                  {t("footer.location")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
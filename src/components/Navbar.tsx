import { useState } from "react";
import { Menu, X, Shield, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const navLinks = [
  { href: "#inicio", labelKey: "nav.inicio" },
  { href: "#servicios", labelKey: "nav.servicios" },
  { href: "#por-que-francotech", labelKey: "nav.por-que" },
  { href: "#cumplimiento", labelKey: "nav.cumplimiento" },
  { href: "#nosotros", labelKey: "nav.nosotros" },
  { href: "#contacto", labelKey: "nav.contacto" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { lang, toggleLang, t } = useLanguage();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0E1A]/80 backdrop-blur-xl border-b border-[#1E293B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#inicio"
            onClick={(e) => handleClick(e, "#inicio")}
            className="flex items-center gap-2 group"
          >
            <Shield className="w-7 h-7 text-[#00D4FF] group-hover:drop-shadow-[0_0_8px_rgba(0,212,255,0.6)] transition-all" />
            <span className="text-xl font-bold tracking-tight text-white">
              Franco<span className="text-[#00D4FF]">Tech</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="px-3 py-2 text-sm font-medium text-[#94A3B8] hover:text-[#00D4FF] transition-colors rounded-md"
              >
                {t(link.labelKey)}
              </a>
            ))}

            {/* Language Toggle */}
            <button
              onClick={toggleLang}
              className="ml-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#1E293B] bg-[#111827] hover:border-[#00D4FF]/40 text-sm font-semibold transition-all"
              aria-label="Toggle language"
            >
              <Globe className="w-4 h-4 text-[#00D4FF]" />
              <span className="text-white">{lang === "es" ? "ES" : "EN"}</span>
              <span className="text-[#4B5563]">/</span>
              <span className="text-[#4B5563]">{lang === "es" ? "EN" : "ES"}</span>
            </button>
          </div>

          {/* Mobile: Language + Menu */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleLang}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-full border border-[#1E293B] bg-[#111827] text-sm font-semibold transition-all"
              aria-label="Toggle language"
            >
              <Globe className="w-3.5 h-3.5 text-[#00D4FF]" />
              <span className="text-white text-xs">{lang === "es" ? "ES" : "EN"}</span>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-[#94A3B8] hover:text-[#00D4FF] transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-[#0A0E1A]/95 backdrop-blur-xl border-b border-[#1E293B]">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="block px-3 py-2.5 text-sm font-medium text-[#94A3B8] hover:text-[#00D4FF] hover:bg-[#1A2332] rounded-md transition-colors"
              >
                {t(link.labelKey)}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const HERO_IMAGE = "https://mgx-backend-cdn.metadl.com/generate/images/1036348/2026-03-17/39355317-9b88-4146-a7ad-7f70bd0e277a.png";

export default function HeroSection() {
  const { t } = useLanguage();

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center hero-gradient grid-pattern overflow-hidden"
    >
      {/* Background image overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${HERO_IMAGE})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0E1A]/60 via-[#0A0E1A]/40 to-[#0A0E1A]" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <div className="animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-[#00D4FF]/20 bg-[#00D4FF]/5 text-[#00D4FF] text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-[#00D4FF] animate-pulse" />
            {t("hero.badge")}
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
            {t("hero.headline1")}{" "}
            <span className="text-[#00D4FF] glow-text">{t("hero.headline2")}</span>
            <br />
            {t("hero.headline3")}
          </h1>

          {/* Tagline */}
          <p className="text-lg sm:text-xl text-[#94A3B8] max-w-2xl mx-auto mb-10 leading-relaxed">
            {t("hero.tagline")}
          </p>

          {/* CTA */}
          <a
            href="#contacto"
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#00D4FF] to-[#0088CC] text-[#0A0E1A] font-bold text-lg rounded-lg hover:shadow-[0_0_30px_rgba(0,212,255,0.4)] transition-all duration-300 hover:scale-105"
          >
            {t("hero.cta")}
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="w-6 h-10 rounded-full border-2 border-[#94A3B8]/30 flex justify-center pt-2">
            <div className="w-1 h-3 bg-[#00D4FF] rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
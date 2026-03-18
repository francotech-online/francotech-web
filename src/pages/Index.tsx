import { useEffect } from "react";
import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WhyFrancoTechSection from "@/components/WhyFrancoTechSection";
import ComplianceSection from "@/components/ComplianceSection";
import AboutContactSection from "@/components/AboutContactSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import CookieBanner from "@/components/CookieBanner";

function ScrollRevealInit() {
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}

export default function Index() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#0A0E1A] text-white">
        <ScrollRevealInit />
        <Navbar />
        <HeroSection />
        <ServicesSection />
        <WhyFrancoTechSection />
        <ComplianceSection />
        <AboutContactSection />
        <WhatsAppButton />
        <CookieBanner />
      </div>
    </LanguageProvider>
  );
}
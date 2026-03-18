import { ShieldCheck, Network, Code2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const CYBERSECURITY_IMG = "https://mgx-backend-cdn.metadl.com/generate/images/1036348/2026-03-17/3d2b0a2d-e422-40f9-92e6-03e99302c681.png";
const NETWORK_IMG = "https://mgx-backend-cdn.metadl.com/generate/images/1036348/2026-03-17/58a2703d-3f9d-4048-9891-42cf74df138b.png";
const SOFTWARE_IMG = "https://mgx-backend-cdn.metadl.com/generate/images/1036348/2026-03-17/d799b98c-0ddc-42a2-8e19-95bfe6bd31b2.png";

const services = [
  {
    icon: ShieldCheck,
    titleKey: "services.cyber.title",
    descKey: "services.cyber.desc",
    image: CYBERSECURITY_IMG,
  },
  {
    icon: Network,
    titleKey: "services.network.title",
    descKey: "services.network.desc",
    image: NETWORK_IMG,
  },
  {
    icon: Code2,
    titleKey: "services.software.title",
    descKey: "services.software.desc",
    image: SOFTWARE_IMG,
  },
];

export default function ServicesSection() {
  const { t } = useLanguage();

  return (
    <section id="servicios" className="relative py-24 bg-[#0A0E1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 reveal">
          <p className="text-[#00D4FF] text-sm font-semibold tracking-widest uppercase mb-3">
            {t("services.subtitle")}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            {t("services.title")}
          </h2>
          <div className="gradient-line w-24 mx-auto" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.titleKey}
              className="reveal card-hover group relative rounded-xl border border-[#1E293B] bg-[#111827] overflow-hidden"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={t(service.titleKey)}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 rounded-lg bg-[#00D4FF]/10 border border-[#00D4FF]/20 flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-[#00D4FF]" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-[#00D4FF] transition-colors">
                  {t(service.titleKey)}
                </h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed">
                  {t(service.descKey)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
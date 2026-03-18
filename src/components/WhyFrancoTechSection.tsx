import { Scale, Layers, UserCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const differentiators = [
  {
    icon: Scale,
    titleKey: "why.regulatory.title",
    descKey: "why.regulatory.desc",
  },
  {
    icon: Layers,
    titleKey: "why.e2e.title",
    descKey: "why.e2e.desc",
  },
  {
    icon: UserCheck,
    titleKey: "why.personal.title",
    descKey: "why.personal.desc",
  },
];

export default function WhyFrancoTechSection() {
  const { t } = useLanguage();

  return (
    <section id="por-que-francotech" className="relative py-24 bg-[#111827]">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 gradient-line" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 reveal">
          <p className="text-[#00D4FF] text-sm font-semibold tracking-widest uppercase mb-3">
            {t("why.subtitle")}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            {t("why.title")}
          </h2>
          <div className="gradient-line w-24 mx-auto" />
        </div>

        {/* Differentiators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {differentiators.map((item, index) => (
            <div
              key={item.titleKey}
              className="text-center group reveal"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-[#00D4FF]/10 border border-[#00D4FF]/20 flex items-center justify-center group-hover:bg-[#00D4FF]/20 transition-all pulse-glow">
                <item.icon className="w-8 h-8 text-[#00D4FF]" />
              </div>

              <h3 className="text-xl font-bold mb-3">{t(item.titleKey)}</h3>
              <p className="text-[#94A3B8] text-sm leading-relaxed max-w-sm mx-auto">
                {t(item.descKey)}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 gradient-line" />
    </section>
  );
}
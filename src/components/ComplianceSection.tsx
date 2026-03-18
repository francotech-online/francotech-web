import { ShieldCheck, Lock, FileCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const frameworks = [
  {
    icon: ShieldCheck,
    nameKey: "compliance.nis2.name",
    fullNameKey: "compliance.nis2.full",
    descKey: "compliance.nis2.desc",
  },
  {
    icon: Lock,
    nameKey: "compliance.gdpr.name",
    fullNameKey: "compliance.gdpr.full",
    descKey: "compliance.gdpr.desc",
  },
  {
    icon: FileCheck,
    nameKey: "compliance.ens.name",
    fullNameKey: "compliance.ens.full",
    descKey: "compliance.ens.desc",
  },
];

export default function ComplianceSection() {
  const { t } = useLanguage();

  return (
    <section id="cumplimiento" className="relative py-24 bg-[#0A0E1A] grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 reveal">
          <p className="text-[#00D4FF] text-sm font-semibold tracking-widest uppercase mb-3">
            {t("compliance.subtitle")}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            {t("compliance.title")}
          </h2>
          <p className="text-[#94A3B8] max-w-2xl mx-auto">
            {t("compliance.desc")}
          </p>
        </div>

        {/* Framework badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {frameworks.map((fw, index) => (
            <div
              key={fw.nameKey}
              className="reveal card-hover relative p-8 rounded-xl border border-[#1E293B] bg-[#111827]/80 text-center"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {/* Icon circle */}
              <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-[#00D4FF]/10 border border-[#00D4FF]/30 flex items-center justify-center">
                <fw.icon className="w-7 h-7 text-[#00D4FF]" />
              </div>

              {/* Badge name */}
              <h3 className="text-2xl font-extrabold text-[#00D4FF] mb-1">
                {t(fw.nameKey)}
              </h3>
              <p className="text-xs text-[#94A3B8] font-medium uppercase tracking-wider mb-4">
                {t(fw.fullNameKey)}
              </p>

              {/* Description */}
              <p className="text-[#94A3B8] text-sm leading-relaxed">
                {t(fw.descKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
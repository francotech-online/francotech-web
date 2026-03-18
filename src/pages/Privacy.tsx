import { ArrowLeft, Shield } from "lucide-react";
import { LanguageProvider, useLanguage } from "@/context/LanguageContext";

function PrivacyContent() {
  const { t } = useLanguage();

  const sections = [
    { titleKey: "privacy.responsible.title", textKey: "privacy.responsible.text" },
    { titleKey: "privacy.data.title", textKey: "privacy.data.text" },
    { titleKey: "privacy.purpose.title", textKey: "privacy.purpose.text" },
    { titleKey: "privacy.legal.title", textKey: "privacy.legal.text" },
    { titleKey: "privacy.rights.title", textKey: "privacy.rights.text", extra: "privacy.contact.text" },
    { titleKey: "privacy.contact.title", textKey: "privacy.contact.text", isEmail: true },
    { titleKey: "privacy.transfers.title", textKey: "privacy.transfers.text" },
    { titleKey: "privacy.update.title", textKey: "privacy.update.text" },
  ];

  return (
    <div className="min-h-screen bg-[#0A0E1A] text-white">
      {/* Header */}
      <div className="bg-[#0A0E1A]/80 backdrop-blur-xl border-b border-[#1E293B]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 group">
            <Shield className="w-7 h-7 text-[#00D4FF]" />
            <span className="text-xl font-bold tracking-tight text-white">
              Franco<span className="text-[#00D4FF]">Tech</span>
            </span>
          </a>
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm text-[#94A3B8] hover:text-[#00D4FF] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {t("privacy.back")}
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">{t("privacy.title")}</h1>
        <div className="gradient-line w-24 mb-10" />

        <div className="space-y-8">
          {sections.map((section) => (
            <div key={section.titleKey}>
              <h2 className="text-lg font-semibold text-[#00D4FF] mb-2">
                {t(section.titleKey)}
              </h2>
              {section.isEmail ? (
                <a
                  href={`mailto:${t(section.textKey)}`}
                  className="text-[#94A3B8] hover:text-[#00D4FF] transition-colors"
                >
                  {t(section.textKey)}
                </a>
              ) : (
                <p className="text-[#94A3B8] leading-relaxed">
                  {t(section.textKey)}
                  {section.extra && (
                    <>
                      {" "}
                      <a
                        href={`mailto:${t(section.extra)}`}
                        className="text-[#00D4FF] hover:underline"
                      >
                        {t(section.extra)}
                      </a>
                    </>
                  )}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-[#1E293B] py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#4B5563] text-sm">
            © {new Date().getFullYear()} FrancoTech. {t("footer.rights")}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Privacy() {
  return (
    <LanguageProvider>
      <PrivacyContent />
    </LanguageProvider>
  );
}
import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

const COOKIE_KEY = "francotech_cookie_consent";

export default function CookieBanner() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY);
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_KEY, "accepted");
    setVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem(COOKIE_KEY, "rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] bg-[#111827] border-t border-[#1E293B] shadow-2xl">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[#94A3B8] text-sm text-center sm:text-left">
          {t("cookie.text")}{" "}
          <a
            href="/privacidad"
            className="text-[#00D4FF] hover:underline"
          >
            {t("cookie.privacy")}
          </a>
        </p>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={handleReject}
            className="px-5 py-2 text-sm font-medium rounded-lg border border-[#1E293B] text-[#94A3B8] hover:text-white hover:border-[#94A3B8] transition-all"
          >
            {t("cookie.reject")}
          </button>
          <button
            onClick={handleAccept}
            className="px-5 py-2 text-sm font-bold rounded-lg bg-[#00D4FF] text-[#0A0E1A] hover:bg-[#00BFEA] transition-all"
          >
            {t("cookie.accept")}
          </button>
        </div>
      </div>
    </div>
  );
}
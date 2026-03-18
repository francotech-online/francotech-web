import { createContext, useContext, useState, type ReactNode } from "react";

type Language = "es" | "en";

interface LanguageContextType {
  lang: Language;
  toggleLang: () => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  es: {
    // Navbar
    "nav.inicio": "Inicio",
    "nav.servicios": "Servicios",
    "nav.por-que": "Por qué FrancoTech",
    "nav.cumplimiento": "Cumplimiento",
    "nav.nosotros": "Nosotros",
    "nav.contacto": "Contacto",

    // Hero
    "hero.badge": "Ciberseguridad · Redes · Software",
    "hero.headline1": "Protegemos tu",
    "hero.headline2": "infraestructura",
    "hero.headline3": "digital en Europa",
    "hero.tagline":
      "Soluciones integrales de ciberseguridad, infraestructura de red y desarrollo de software bajo los más altos estándares europeos.",
    "hero.cta": "Contáctanos",

    // Services
    "services.subtitle": "Nuestros Servicios",
    "services.title": "Soluciones integrales para tu negocio",
    "services.cyber.title": "Ciberseguridad y Cumplimiento",
    "services.cyber.desc":
      "Auditorías de seguridad, análisis de vulnerabilidades, planes de respuesta ante incidentes y adecuación a normativas europeas como NIS2, GDPR y ENS.",
    "services.network.title": "Infraestructura de Red y RF",
    "services.network.desc":
      "Diseño, implementación y optimización de redes empresariales, sistemas de radiofrecuencia, conectividad segura y monitorización avanzada.",
    "services.software.title": "Desarrollo de Software",
    "services.software.desc":
      "Desarrollo a medida de aplicaciones web, APIs, automatización de procesos y soluciones digitales adaptadas a las necesidades de tu negocio.",

    // Why FrancoTech
    "why.subtitle": "¿Por qué elegirnos?",
    "why.title": "Lo que nos diferencia",
    "why.regulatory.title": "Expertise Regulatorio Europeo",
    "why.regulatory.desc":
      "Conocimiento profundo de las normativas europeas de ciberseguridad y protección de datos. Te guiamos en el cumplimiento de NIS2, GDPR y ENS.",
    "why.e2e.title": "Soluciones de Extremo a Extremo",
    "why.e2e.desc":
      "Desde la auditoría inicial hasta la implementación y el mantenimiento continuo. Un único punto de contacto para todas tus necesidades tecnológicas.",
    "why.personal.title": "Servicio Personalizado",
    "why.personal.desc":
      "Atención directa y dedicada. Trabajamos estrechamente contigo para entender tu negocio y ofrecer soluciones adaptadas a tu realidad.",

    // Compliance
    "compliance.subtitle": "Cumplimiento Normativo",
    "compliance.title": "Marcos regulatorios con los que trabajamos",
    "compliance.desc":
      "Ayudamos a tu organización a cumplir con los principales marcos regulatorios europeos y nacionales en materia de ciberseguridad y protección de datos.",
    "compliance.nis2.name": "NIS2",
    "compliance.nis2.full": "Directiva NIS2",
    "compliance.nis2.desc":
      "Directiva europea de ciberseguridad que establece requisitos de seguridad para entidades esenciales e importantes en la UE.",
    "compliance.gdpr.name": "GDPR",
    "compliance.gdpr.full": "Reglamento General de Protección de Datos",
    "compliance.gdpr.desc":
      "Marco regulatorio europeo para la protección de datos personales y la privacidad de los ciudadanos de la UE.",
    "compliance.ens.name": "ENS",
    "compliance.ens.full": "Esquema Nacional de Seguridad",
    "compliance.ens.desc":
      "Marco normativo español que establece la política de seguridad para la protección de la información en el sector público.",

    // About
    "about.subtitle": "Sobre Nosotros",
    "about.title": "FrancoTech",
    "about.p1":
      "FrancoTech es una consultoría tecnológica independiente especializada en ciberseguridad, infraestructura RF/RAN 4G/5G y desarrollo de software, con sede en Madrid. Ofrecemos un servicio directo, personalizado y altamente técnico respaldado por más de 8 años de experiencia en entornos multinacionales (Samsung, Huawei, Ericsson, Nokia).",
    "about.p2":
      "Trabajamos con PYMEs y empresas tecnológicas en España y Europa, ayudándoles a proteger sus activos digitales, optimizar sus redes y desarrollar soluciones a medida.",
    "about.location": "Madrid · España · Unión Europea",

    // Contact
    "contact.subtitle": "Contacto",
    "contact.title": "Hablemos de tu proyecto",
    "contact.name": "Nombre",
    "contact.name.placeholder": "Tu nombre",
    "contact.email": "Email",
    "contact.email.placeholder": "tu@email.com",
    "contact.message": "Mensaje",
    "contact.message.placeholder": "Cuéntanos sobre tu proyecto o necesidad...",
    "contact.submit": "Enviar Mensaje",
    "contact.success.title": "¡Mensaje enviado!",
    "contact.success.desc": "Gracias por contactarnos. Te responderemos lo antes posible.",
    "contact.terms": "He leído y acepto la ",
    "contact.terms.link": "Política de privacidad",

    // Footer
    "footer.rights": "Todos los derechos reservados.",
    "footer.location": "francotech.online · Madrid · España",
    "footer.privacy": "Política de privacidad",
    "footer.social": "Síguenos en redes sociales",

    // Cookie banner
    "cookie.text": "Usamos cookies para mejorar tu experiencia. Puedes aceptarlas o rechazarlas.",
    "cookie.accept": "Aceptar",
    "cookie.reject": "Rechazar",
    "cookie.privacy": "Política de privacidad",

    // Privacy page
    "privacy.title": "Política de Privacidad",
    "privacy.back": "Volver al inicio",
    "privacy.responsible.title": "Responsable del tratamiento",
    "privacy.responsible.text": "Nelson Franco (FrancoTech)",
    "privacy.data.title": "Datos recogidos",
    "privacy.data.text": "Nombre y correo electrónico proporcionados a través del formulario de contacto.",
    "privacy.purpose.title": "Finalidad",
    "privacy.purpose.text": "Responder a consultas comerciales realizadas a través del formulario de contacto de la web.",
    "privacy.legal.title": "Base legal",
    "privacy.legal.text": "Consentimiento del interesado (RGPD art. 6.1.a).",
    "privacy.rights.title": "Derechos",
    "privacy.rights.text": "Puedes ejercer tus derechos de acceso, rectificación y supresión de tus datos contactando a:",
    "privacy.contact.title": "Contacto",
    "privacy.contact.text": "hola@francotech.online",
    "privacy.transfers.title": "Transferencias internacionales",
    "privacy.transfers.text": "No se realizan transferencias internacionales de datos personales.",
    "privacy.update.title": "Última actualización",
    "privacy.update.text": "Marzo 2026",
  },
  en: {
    // Navbar
    "nav.inicio": "Home",
    "nav.servicios": "Services",
    "nav.por-que": "Why FrancoTech",
    "nav.cumplimiento": "Compliance",
    "nav.nosotros": "About",
    "nav.contacto": "Contact",

    // Hero
    "hero.badge": "Cybersecurity · Networks · Software",
    "hero.headline1": "We protect your",
    "hero.headline2": "digital",
    "hero.headline3": "infrastructure in Europe",
    "hero.tagline":
      "Comprehensive cybersecurity, network infrastructure and software development solutions under the highest European standards.",
    "hero.cta": "Contact Us",

    // Services
    "services.subtitle": "Our Services",
    "services.title": "Comprehensive solutions for your business",
    "services.cyber.title": "Cybersecurity & Compliance",
    "services.cyber.desc":
      "Security audits, vulnerability analysis, incident response plans and compliance with European regulations such as NIS2, GDPR and ENS.",
    "services.network.title": "Network Infrastructure & RF",
    "services.network.desc":
      "Design, implementation and optimization of enterprise networks, radio frequency systems, secure connectivity and advanced monitoring.",
    "services.software.title": "Software Development",
    "services.software.desc":
      "Custom development of web applications, APIs, process automation and digital solutions tailored to your business needs.",

    // Why FrancoTech
    "why.subtitle": "Why choose us?",
    "why.title": "What sets us apart",
    "why.regulatory.title": "European Regulatory Expertise",
    "why.regulatory.desc":
      "Deep knowledge of European cybersecurity and data protection regulations. We guide you through NIS2, GDPR and ENS compliance.",
    "why.e2e.title": "End-to-End Solutions",
    "why.e2e.desc":
      "From the initial audit to implementation and ongoing maintenance. A single point of contact for all your technology needs.",
    "why.personal.title": "Personalized Service",
    "why.personal.desc":
      "Direct and dedicated attention. We work closely with you to understand your business and deliver solutions tailored to your reality.",

    // Compliance
    "compliance.subtitle": "Regulatory Compliance",
    "compliance.title": "Regulatory frameworks we work with",
    "compliance.desc":
      "We help your organization comply with the main European and national regulatory frameworks in cybersecurity and data protection.",
    "compliance.nis2.name": "NIS2",
    "compliance.nis2.full": "NIS2 Directive",
    "compliance.nis2.desc":
      "European cybersecurity directive establishing security requirements for essential and important entities in the EU.",
    "compliance.gdpr.name": "GDPR",
    "compliance.gdpr.full": "General Data Protection Regulation",
    "compliance.gdpr.desc":
      "European regulatory framework for the protection of personal data and privacy of EU citizens.",
    "compliance.ens.name": "ENS",
    "compliance.ens.full": "National Security Framework",
    "compliance.ens.desc":
      "Spanish regulatory framework establishing security policy for information protection in the public sector.",

    // About
    "about.subtitle": "About Us",
    "about.title": "FrancoTech",
    "about.p1":
      "FrancoTech is an independent technology consultancy specializing in cybersecurity, RF/RAN 4G/5G infrastructure and software development, based in Madrid. We offer a direct, personalized and highly technical service backed by over 8 years of experience in multinational environments (Samsung, Huawei, Ericsson, Nokia).",
    "about.p2":
      "We work with SMEs and technology companies in Spain and Europe, helping them protect their digital assets, optimize their networks and develop tailored solutions.",
    "about.location": "Madrid · Spain · European Union",

    // Contact
    "contact.subtitle": "Contact",
    "contact.title": "Let's talk about your project",
    "contact.name": "Name",
    "contact.name.placeholder": "Your name",
    "contact.email": "Email",
    "contact.email.placeholder": "you@email.com",
    "contact.message": "Message",
    "contact.message.placeholder": "Tell us about your project or needs...",
    "contact.submit": "Send Message",
    "contact.success.title": "Message sent!",
    "contact.success.desc": "Thank you for contacting us. We will respond as soon as possible.",
    "contact.terms": "I have read and accept the ",
    "contact.terms.link": "Privacy policy",

    // Footer
    "footer.rights": "All rights reserved.",
    "footer.location": "francotech.online · Madrid · Spain",
    "footer.privacy": "Privacy Policy",
    "footer.social": "Follow us on social media",

    // Cookie banner
    "cookie.text": "We use cookies to improve your experience. You can accept or reject them.",
    "cookie.accept": "Accept",
    "cookie.reject": "Reject",
    "cookie.privacy": "Privacy Policy",

    // Privacy page
    "privacy.title": "Privacy Policy",
    "privacy.back": "Back to home",
    "privacy.responsible.title": "Data Controller",
    "privacy.responsible.text": "Nelson Franco (FrancoTech)",
    "privacy.data.title": "Data Collected",
    "privacy.data.text": "Name and email address provided through the contact form.",
    "privacy.purpose.title": "Purpose",
    "privacy.purpose.text": "To respond to commercial inquiries made through the website contact form.",
    "privacy.legal.title": "Legal Basis",
    "privacy.legal.text": "Consent of the data subject (GDPR art. 6.1.a).",
    "privacy.rights.title": "Rights",
    "privacy.rights.text": "You can exercise your rights of access, rectification and erasure of your data by contacting:",
    "privacy.contact.title": "Contact",
    "privacy.contact.text": "hola@francotech.online",
    "privacy.transfers.title": "International Transfers",
    "privacy.transfers.text": "No international transfers of personal data are made.",
    "privacy.update.title": "Last Updated",
    "privacy.update.text": "March 2026",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("es");

  const toggleLang = () => {
    setLang((prev) => (prev === "es" ? "en" : "es"));
  };

  const t = (key: string): string => {
    return translations[lang][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
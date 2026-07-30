/**
 * =============================================================================
 * CLIENT CONFIG — SINGLE SOURCE OF TRUTH
 * =============================================================================
 * Edit THIS FILE ONLY when customizing for a new dental practice.
 * Every label, nav item, section header, button, bio, service, and testimonial
 * is pulled from here at render time. Do not hardcode copy in HTML/CSS/JS.
 *
 * Languages: English (en) and Spanish (es). Default language is Spanish.
 * =============================================================================
 */

const config = {
  // ---------------------------------------------------------------------------
  // SITE DEFAULTS
  // ---------------------------------------------------------------------------
  // REQUIRED — default language when a visitor first loads the site ("es" | "en")
  defaultLanguage: "es",

  // ---------------------------------------------------------------------------
  // PRACTICE INFO
  // ---------------------------------------------------------------------------
  practice: {
    // REQUIRED — shown in hero, nav, footer, page title
    name: "Sonrisa Dental",

    // REQUIRED — warm one-line tagline under the practice name
    tagline: {
      en: "Gentle care for healthier, brighter smiles.",
      es: "Cuidado gentil para sonrisas más sanas y radiantes.",
    },

    // REQUIRED — used for click-to-call (tel:) links. Digits only recommended for telHref.
    phone: "(305) 555-0148",
    // REQUIRED — raw digits for tel: links (no spaces or punctuation)
    phoneTel: "3055550148",

    // REQUIRED — display address and map/directions helpers
    address: {
      street: "1842 Coral Way",
      city: "Miami",
      state: "FL",
      zip: "33145",
      // OPTIONAL — override the Google Maps query; leave blank to auto-build from address
      mapsQuery: "",
    },

    // REQUIRED — hours shown in Location + Footer. Use empty string to omit a day.
    hours: {
      mon: "9:00 AM – 6:00 PM",
      tue: "9:00 AM – 6:00 PM",
      wed: "9:00 AM – 6:00 PM",
      thu: "9:00 AM – 6:00 PM",
      fri: "9:00 AM – 4:00 PM",
      sat: "9:00 AM – 1:00 PM",
      sun: "", // closed / leave blank to hide
    },

    // OPTIONAL — email shown in footer when present
    email: "hola@sonrisadental.com",

    // OPTIONAL — trust bar stats (leave a field blank to hide that trust item)
    yearsInPractice: "15+",
    patientRating: "4.9",
    // OPTIONAL — short insurance blurb for trust bar
    insuranceAccepted: true,
  },

  // ---------------------------------------------------------------------------
  // BRANDING
  // ---------------------------------------------------------------------------
  branding: {
    // REQUIRED — soft clinical blue (CSS color value)
    primaryColor: "#3A7CA5",
    // REQUIRED — warmer accent for CTAs / highlights (avoid neon or flashy tones)
    accentColor: "#2F9B8A",
    // OPTIONAL — deeper shade for hover states; leave blank to auto-derive
    primaryDark: "#2E6284",
    // OPTIONAL — soft page wash behind sections
    softBg: "#F4F8FB",
    // OPTIONAL — path or URL to logo (leave blank to show practice name as text logo)
    logoUrl: "",
    // REQUIRED — full-bleed hero image (place file in /assets/images/)
    // Demo template image included — replace per client
    heroImageUrl: "assets/images/hero.jpg",
  },

  // ---------------------------------------------------------------------------
  // UI COPY (labels, nav, section headers, buttons) — per language
  // ---------------------------------------------------------------------------
  // REQUIRED — edit wording if needed; structure keys must stay in sync with app.js
  ui: {
    en: {
      nav: {
        home: "Home",
        services: "Services",
        dentists: "Our Team",
        gallery: "Gallery",
        testimonials: "Reviews",
        insurance: "Insurance",
        location: "Location",
        book: "Book Appointment",
        openMenu: "Open menu",
        closeMenu: "Close menu",
      },
      hero: {
        badge: "New Patients Welcome",
        cta: "Book Appointment",
      },
      trust: {
        years: "Years in practice",
        rating: "Patient rating",
        insurance: "Insurance accepted",
        licensed: "Licensed & certified",
      },
      sections: {
        services: "Our Services",
        servicesLead: "Comprehensive care for every smile.",
        dentists: "Meet the Dentist",
        dentistsLead: "Care that feels personal from the first visit.",
        gallery: "Smile Gallery",
        galleryLead: "Real results from patients like you.",
        testimonials: "What Patients Say",
        testimonialsLead: "Trusted by families in our community.",
        insurance: "Insurance & Financing",
        insuranceLead: "We work with major providers to keep care accessible.",
        location: "Visit Us",
        locationLead: "Conveniently located — we look forward to seeing you.",
      },
      services: {
        expand: "Learn more",
        collapse: "Show less",
      },
      location: {
        hours: "Hours",
        call: "Call Us",
        directions: "Get Directions",
        closed: "Closed",
        days: {
          mon: "Monday",
          tue: "Tuesday",
          wed: "Wednesday",
          thu: "Thursday",
          fri: "Friday",
          sat: "Saturday",
          sun: "Sunday",
        },
      },
      stickyBar: {
        cta: "Book Appointment",
      },
      footer: {
        contact: "Contact",
        hours: "Hours",
        follow: "Follow Us",
        rights: "All rights reserved.",
      },
      langToggle: {
        label: "Language",
        en: "EN",
        es: "ES",
      },
    },
    es: {
      nav: {
        home: "Inicio",
        services: "Servicios",
        dentists: "Nuestro Equipo",
        gallery: "Galería",
        testimonials: "Opiniones",
        insurance: "Seguros",
        location: "Ubicación",
        book: "Agendar Cita",
        openMenu: "Abrir menú",
        closeMenu: "Cerrar menú",
      },
      hero: {
        badge: "Nuevos Pacientes Bienvenidos",
        cta: "Agendar Cita",
      },
      trust: {
        years: "Años de experiencia",
        rating: "Calificación de pacientes",
        insurance: "Aceptamos seguros",
        licensed: "Licenciados y certificados",
      },
      sections: {
        services: "Nuestros Servicios",
        servicesLead: "Cuidado integral para cada sonrisa.",
        dentists: "Conoce al Dentista",
        dentistsLead: "Atención cercana desde la primera visita.",
        gallery: "Galería de Sonrisas",
        galleryLead: "Resultados reales de pacientes como tú.",
        testimonials: "Lo Que Dicen Nuestros Pacientes",
        testimonialsLead: "La confianza de familias de nuestra comunidad.",
        insurance: "Seguros y Financiamiento",
        insuranceLead: "Trabajamos con las principales aseguradoras.",
        location: "Visítanos",
        locationLead: "Ubicación conveniente — te esperamos con gusto.",
      },
      services: {
        expand: "Ver más",
        collapse: "Ver menos",
      },
      location: {
        hours: "Horario",
        call: "Llámanos",
        directions: "Cómo Llegar",
        closed: "Cerrado",
        days: {
          mon: "Lunes",
          tue: "Martes",
          wed: "Miércoles",
          thu: "Jueves",
          fri: "Viernes",
          sat: "Sábado",
          sun: "Domingo",
        },
      },
      stickyBar: {
        cta: "Agendar Cita",
      },
      footer: {
        contact: "Contacto",
        hours: "Horario",
        follow: "Síguenos",
        rights: "Todos los derechos reservados.",
      },
      langToggle: {
        label: "Idioma",
        en: "EN",
        es: "ES",
      },
    },
  },

  // ---------------------------------------------------------------------------
  // DENTISTS
  // ---------------------------------------------------------------------------
  // REQUIRED — at least one dentist. Empty array hides the whole section.
  dentists: [
    {
      name: "Dr. Carlos Mendoza",
      title: {
        en: "Lead Dentist · DDS",
        es: "Dentista Principal · DDS",
      },
      bio: {
        en: "Dr. Mendoza has cared for Miami families for over a decade. He believes great dentistry starts with listening — and that every visit should feel calm, clear, and kind.",
        es: "El Dr. Mendoza ha cuidado a familias de Miami por más de una década. Cree que una gran odontología empieza escuchando — y que cada visita debe sentirse calmada, clara y cercana.",
      },
      // OPTIONAL — path/URL; leave blank for initials placeholder
      // Demo template image included — replace per client
      photoUrl: "assets/images/dentist.jpg",
    },
  ],

  // ---------------------------------------------------------------------------
  // SERVICES
  // ---------------------------------------------------------------------------
  // REQUIRED for Services section. Empty array hides the section.
  // icon: short key used by app.js to pick an inline SVG ("cleaning", "whitening",
  // "aligners", "emergency", "implants", "pediatric", "general", "cosmetic")
  services: [
    {
      name: { en: "Cleanings & Exams", es: "Limpiezas y Exámenes" },
      description: {
        en: "Gentle preventive care to keep gums healthy and catch concerns early — comfortable visits for the whole family.",
        es: "Cuidado preventivo suave para mantener encías sanas y detectar problemas a tiempo — visitas cómodas para toda la familia.",
      },
      icon: "cleaning",
    },
    {
      name: { en: "Teeth Whitening", es: "Blanqueamiento Dental" },
      description: {
        en: "Professional whitening for a brighter smile with results that look natural — not overdone.",
        es: "Blanqueamiento profesional para una sonrisa más luminosa con resultados naturales — nada exagerado.",
      },
      icon: "whitening",
    },
    {
      name: { en: "Invisalign", es: "Invisalign" },
      description: {
        en: "Clear aligners that straighten teeth discreetly, with personalized plans and check-ins along the way.",
        es: "Alineadores transparentes que enderezan los dientes con discreción, con planes personalizados y seguimientos.",
      },
      icon: "aligners",
    },
    {
      name: { en: "Emergency Care", es: "Atención de Emergencia" },
      description: {
        en: "Same-day help for toothaches, chips, and urgent concerns — call us and we’ll do our best to see you quickly.",
        es: "Ayuda el mismo día para dolores, fracturas y urgencias — llámanos y haremos lo posible por atenderte pronto.",
      },
      icon: "emergency",
    },
    {
      name: { en: "Dental Implants", es: "Implantes Dentales" },
      description: {
        en: "Restore missing teeth with durable, natural-looking implants planned for comfort and long-term function.",
        es: "Recupera dientes perdidos con implantes duraderos y de aspecto natural, pensados para comodidad y función.",
      },
      icon: "implants",
    },
    {
      name: { en: "Pediatric Dentistry", es: "Odontología Pediátrica" },
      description: {
        en: "Friendly visits that help kids feel at ease — building healthy habits and confident little smiles.",
        es: "Visitas amables que ayudan a los niños a sentirse tranquilos — creando hábitos sanos y sonrisas confiadas.",
      },
      icon: "pediatric",
    },
  ],

  // ---------------------------------------------------------------------------
  // TESTIMONIALS
  // ---------------------------------------------------------------------------
  // OPTIONAL — empty array hides the Testimonials section entirely.
  testimonials: [
    {
      quote: {
        en: "The team made my first visit so easy. Clear explanations, gentle care, and I finally look forward to cleanings.",
        es: "El equipo hizo mi primera visita muy fácil. Explicaciones claras, cuidado gentil, y por fin espero con gusto las limpiezas.",
      },
      author: "María G.",
      rating: 5,
    },
    {
      quote: {
        en: "Dr. Morales is wonderful with our kids. The office feels calm — never rushed — and everyone is so kind.",
        es: "La Dra. Morales es maravillosa con nuestros hijos. El consultorio se siente calmado — nunca con prisa — y todos son muy amables.",
      },
      author: "Carlos R.",
      rating: 5,
    },
    {
      quote: {
        en: "I started Invisalign here and the process has been smooth from day one. Highly recommend.",
        es: "Empecé Invisalign aquí y el proceso ha sido fluido desde el primer día. Los recomiendo mucho.",
      },
      author: "Ana L.",
      rating: 5,
    },
  ],

  // ---------------------------------------------------------------------------
  // INSURANCE LOGOS
  // ---------------------------------------------------------------------------
  // OPTIONAL — array of image URLs/paths. Empty array hides Insurance section.
  // Tip: drop SVGs/PNGs in /assets/images/insurance/ and reference them here.
  insuranceLogos: [
    {
      name: "Delta Dental",
      src: "assets/images/insurance/delta-dental.svg",
    },
    {
      name: "Cigna",
      src: "assets/images/insurance/cigna.svg",
    },
    {
      name: "Aetna",
      src: "assets/images/insurance/aetna.svg",
    },
    {
      name: "MetLife",
      src: "assets/images/insurance/metlife.svg",
    },
    {
      name: "Guardian",
      src: "assets/images/insurance/guardian.svg",
    },
  ],

  // ---------------------------------------------------------------------------
  // SMILE GALLERY
  // ---------------------------------------------------------------------------
  // OPTIONAL — empty array hides the Gallery section.
  // Demo template images included — replace per client
  gallery: [
    "assets/images/gallery/smile-01.jpg",
    "assets/images/gallery/smile-02.jpg",
    "assets/images/gallery/smile-03.jpg",
    "assets/images/gallery/smile-04.jpg",
    "assets/images/gallery/smile-05.jpg",
  ],

  // ---------------------------------------------------------------------------
  // SOCIAL LINKS
  // ---------------------------------------------------------------------------
  // OPTIONAL — leave blank to hide that icon in the footer
  // ⚠️ UPDATE THESE: Currently placeholder URLs. Replace with actual practice social profiles.
  socials: {
    instagram: "", // e.g. "https://instagram.com/sonrisadental"
    facebook: "", // e.g. "https://facebook.com/sonrisadental"
  },
};

// Expose globally for app.js (no bundler / no modules required)
window.SITE_CONFIG = config;

/**
 * =============================================================================
 * CLIENT CONFIG — Centro de Especialidades Dentales Sonría
 * =============================================================================
 * Branch: cursor/centro-sonria-b5c1
 * Images: assets/images/sonria/
 * =============================================================================
 */

const config = {
  // ---------------------------------------------------------------------------
  // SITE DEFAULTS
  // ---------------------------------------------------------------------------
  defaultLanguage: "es",

  // ---------------------------------------------------------------------------
  // PRACTICE INFO
  // ---------------------------------------------------------------------------
  practice: {
    name: "Centro de Especialidades Dentales Sonría",

    tagline: {
      en: "The best service in everything related to dentistry.",
      es: "El mejor servicio en todo lo relacionado con la Odontología.",
    },

    // Landline (display). Brand materials show 2772-2832.
    phone: "+504 2772-2832",
    phoneTel: "50427722832",

    // WhatsApp for booking CTAs (different from landline)
    whatsapp: "+504 8774-8370",
    whatsappTel: "50487748370",

    address: {
      street: "Bulevard 4to. Centenario, frente a Agencia de Banco Atlántida",
      city: "Comayagua",
      state: "Honduras",
      zip: "",
      mapsQuery:
        "Bulevard 4to. Centenario frente a Agencia de Banco Atlántida, Comayagua, Honduras",
    },

    hours: {
      mon: "8:00 AM – 5:00 PM",
      tue: "8:00 AM – 5:00 PM",
      wed: "8:00 AM – 5:00 PM",
      thu: "8:00 AM – 5:00 PM",
      fri: "8:00 AM – 5:00 PM",
      sat: "8:00 AM – 1:00 PM",
      sun: "",
    },

    email: "cedsonria12101@gmail.com",

    yearsInPractice: "",
    patientRating: "",
    insuranceAccepted: false,
  },

  // ---------------------------------------------------------------------------
  // BRANDING — light blue clinical palette (clinic request + logo blues)
  // ---------------------------------------------------------------------------
  branding: {
    primaryColor: "#4BA3D9",
    accentColor: "#2E8BC8",
    primaryDark: "#2A6F9E",
    softBg: "#EBF6FC",
    logoUrl: "assets/images/sonria/logo/IMG_0164.jpeg",
    heroImageUrl: "assets/images/sonria/hero/IMG_0162.jpeg",
  },

  // ---------------------------------------------------------------------------
  // UI COPY
  // ---------------------------------------------------------------------------
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
        cta: "Book on WhatsApp",
      },
      trust: {
        years: "Years in practice",
        rating: "Patient rating",
        insurance: "Insurance accepted",
        licensed: "Specialists in every area",
      },
      sections: {
        services: "Our Services",
        servicesLead: "Comprehensive specialty care for every smile.",
        dentists: "Meet Our Team",
        dentistsLead: "Specialists dedicated to your oral health in Comayagua.",
        gallery: "Our Clinic",
        galleryLead: "Care, specialties, and smiles at Sonría.",
        testimonials: "What Patients Say",
        testimonialsLead: "Trusted by families in our community.",
        insurance: "Insurance & Financing",
        insuranceLead: "Ask us about payment options for your treatment.",
        location: "Visit Us",
        locationLead: "On Bulevard 4to. Centenario — we look forward to seeing you.",
      },
      services: {
        expand: "Learn more",
        collapse: "Show less",
      },
      location: {
        hours: "Hours",
        call: "WhatsApp",
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
        cta: "Book on WhatsApp",
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
        cta: "Agendar por WhatsApp",
      },
      trust: {
        years: "Años de experiencia",
        rating: "Calificación de pacientes",
        insurance: "Aceptamos seguros",
        licensed: "Especialistas en cada área",
      },
      sections: {
        services: "Nuestros Servicios",
        servicesLead: "Atención integral en todas las especialidades odontológicas.",
        dentists: "Nuestro Equipo",
        dentistsLead: "Especialistas dedicados a tu salud oral en Comayagua.",
        gallery: "Nuestra Clínica",
        galleryLead: "Cuidado, especialidades y sonrisas en Sonría.",
        testimonials: "Lo Que Dicen Nuestros Pacientes",
        testimonialsLead: "La confianza de familias de nuestra comunidad.",
        insurance: "Seguros y Financiamiento",
        insuranceLead: "Consulta con nosotros las opciones de pago para tu tratamiento.",
        location: "Visítanos",
        locationLead: "En el Bulevard 4to. Centenario — te esperamos con gusto.",
      },
      services: {
        expand: "Ver más",
        collapse: "Ver menos",
      },
      location: {
        hours: "Horario",
        call: "WhatsApp",
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
        cta: "Agendar por WhatsApp",
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
  dentists: [
    {
      name: "Dr. Guillermo Peña",
      title: {
        en: "Orthodontics Specialist",
        es: "Especialista en Ortodoncia",
      },
      bio: {
        en: "Dr. Peña specializes in orthodontics, helping patients of all ages achieve aligned, healthy smiles with personalized treatment plans.",
        es: "El Dr. Peña se especializa en ortodoncia, ayudando a pacientes de todas las edades a lograr sonrisas alineadas y saludables con planes de tratamiento personalizados.",
      },
      photoUrl: "assets/images/sonria/team/dr-guillermoPena.jpeg",
    },
    {
      name: "Dra. Waldina Rivera",
      title: {
        en: "General Dentistry · Pediatric Dentistry Diploma · Interceptive Appliances",
        es: "Odontología General · Diplomado en Odontología Infantil · Aparatología Interceptiva",
      },
      bio: {
        en: "Dra. Rivera combines general dentistry with pediatric training and interceptive appliances, creating a warm experience for children and families.",
        es: "La Dra. Rivera combina odontología general con formación en odontología infantil y aparatología interceptiva, creando una experiencia cálida para niños y familias.",
      },
      photoUrl: "assets/images/sonria/team/Dra-waldina.jpeg",
    },
    {
      name: "Dra. Luisa Pérez",
      title: {
        en: "Maxillofacial Surgery",
        es: "Cirugía Maxilofacial",
      },
      bio: {
        en: "Dra. Pérez provides specialized maxillofacial surgical care, from complex extractions to advanced oral surgery with a focus on safety and comfort.",
        es: "La Dra. Pérez brinda atención quirúrgica maxilofacial especializada, desde extracciones complejas hasta cirugía oral avanzada, con enfoque en seguridad y comodidad.",
      },
      photoUrl: "assets/images/sonria/team/Dra-luisaPerez.jpeg",
    },
    {
      name: "Dr. Victor Pineda",
      title: {
        en: "Oral Rehabilitation & Implantology",
        es: "Rehabilitación Oral e Implantología",
      },
      bio: {
        en: "Dr. Pineda restores function and aesthetics through oral rehabilitation and dental implants, helping patients smile, speak, and eat with confidence again.",
        es: "El Dr. Pineda restaura función y estética mediante rehabilitación oral e implantes dentales, ayudando a los pacientes a sonreír, hablar y comer con confianza nuevamente.",
      },
      photoUrl: "assets/images/sonria/team/Dr-victorPineda.jpeg",
    },
  ],

  // ---------------------------------------------------------------------------
  // SERVICES
  // ---------------------------------------------------------------------------
  services: [
    {
      name: { en: "Orthodontics", es: "Ortodoncia" },
      description: {
        en: "Braces and alignment treatments that straighten teeth and improve bite for a healthier, more confident smile.",
        es: "Tratamientos de brackets y alineación que enderezan los dientes y mejoran la mordida para una sonrisa más sana y confiada.",
      },
      icon: "aligners",
    },
    {
      name: { en: "Pediatric Dentistry", es: "Odontopediatría" },
      description: {
        en: "Gentle dental care for children in a friendly environment that builds healthy habits from an early age.",
        es: "Cuidado dental gentil para niños en un ambiente amigable que forma hábitos saludables desde temprana edad.",
      },
      icon: "pediatric",
    },
    {
      name: { en: "Maxillofacial Surgery", es: "Maxilofacial" },
      description: {
        en: "Specialized oral and maxillofacial surgery for extractions, trauma, and complex surgical needs.",
        es: "Cirugía oral y maxilofacial especializada para extracciones, trauma y necesidades quirúrgicas complejas.",
      },
      icon: "emergency",
    },
    {
      name: { en: "General Dentistry", es: "Odontología General" },
      description: {
        en: "Complete preventive and restorative care for the whole family — exams, cleanings, and everyday treatments.",
        es: "Cuidado preventivo y restaurador completo para toda la familia — exámenes, limpiezas y tratamientos del día a día.",
      },
      icon: "general",
    },
    {
      name: { en: "Endodontics", es: "Endodoncia" },
      description: {
        en: "Root canal treatments performed with precision to relieve pain and save your natural teeth.",
        es: "Tratamientos de conducto realizados con precisión para aliviar el dolor y conservar tus dientes naturales.",
      },
      icon: "emergency",
    },
    {
      name: { en: "Radiology", es: "Radiología" },
      description: {
        en: "Diagnostic imaging that helps our specialists plan accurate, safer treatments for every case.",
        es: "Imágenes diagnósticas que ayudan a nuestros especialistas a planificar tratamientos más precisos y seguros.",
      },
      icon: "general",
    },
    {
      name: { en: "Oral Rehabilitation", es: "Rehabilitación Oral" },
      description: {
        en: "Full restorative solutions that rebuild function, comfort, and the natural look of your smile.",
        es: "Soluciones restauradoras integrales que recuperan la función, comodidad y apariencia natural de tu sonrisa.",
      },
      icon: "cosmetic",
    },
    {
      name: { en: "Periodontics", es: "Periodoncia" },
      description: {
        en: "Gum care focused on preventing and treating periodontal disease for a strong foundation.",
        es: "Cuidado de las encías enfocado en prevenir y tratar la enfermedad periodontal para una base sólida.",
      },
      icon: "cleaning",
    },
    {
      name: { en: "Dental Restoration", es: "Restauración Dental" },
      description: {
        en: "Fillings and restorations that repair damaged teeth while blending naturally with your smile.",
        es: "Rellenos y restauraciones que reparan dientes dañados integrándose naturalmente con tu sonrisa.",
      },
      icon: "general",
    },
    {
      name: { en: "Dental Implants", es: "Implantes Dentales" },
      description: {
        en: "Durable, natural-looking implants that replace missing teeth and restore full bite function.",
        es: "Implantes duraderos y de aspecto natural que reemplazan dientes perdidos y restauran la función de mordida.",
      },
      icon: "implants",
    },
  ],

  // ---------------------------------------------------------------------------
  // TESTIMONIALS — none provided yet; empty hides section
  // ---------------------------------------------------------------------------
  testimonials: [],

  // ---------------------------------------------------------------------------
  // INSURANCE — none provided yet; empty hides section
  // ---------------------------------------------------------------------------
  insuranceLogos: [],

  // ---------------------------------------------------------------------------
  // GALLERY
  // ---------------------------------------------------------------------------
  gallery: [
    "assets/images/sonria/gallery/IMG_0166.jpeg",
    "assets/images/sonria/gallery/IMG_0167.jpeg",
    "assets/images/sonria/gallery/IMG_0168.jpeg",
    "assets/images/sonria/gallery/IMG_0169.jpeg",
    "assets/images/sonria/gallery/IMG_0170.jpeg",
    "assets/images/sonria/gallery/IMG_0171.jpeg",
  ],

  // ---------------------------------------------------------------------------
  // SOCIAL LINKS
  // ---------------------------------------------------------------------------
  socials: {
    instagram: "",
    facebook: "",
  },
};

window.SITE_CONFIG = config;

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
  defaultLanguage: "es",

  // ---------------------------------------------------------------------------
  // PRACTICE INFO
  // ---------------------------------------------------------------------------
  practice: {
    name: "Odontocentro Berlioz",

    tagline: {
      en: "We Transform Smiles!",
      es: "¡Transformamos Sonrisas!",
    },

    phone: "+504 3378-0262",
    phoneTel: "+50433780262",

    address: {
      street: "2 Calle NO, Barrio San Blas",
      city: "Comayagua",
      state: "Honduras",
      zip: "12101",
      mapsQuery: "2 Calle NO, Barrio San Blas, Comayagua, Honduras",
    },

    hours: {
      mon: "8:00 AM – 6:00 PM",
      tue: "8:00 AM – 6:00 PM",
      wed: "8:00 AM – 6:00 PM",
      thu: "8:00 AM – 6:00 PM",
      fri: "8:00 AM – 6:00 PM",
      sat: "9:00 AM – 12:00 PM",
      sun: "",
    },

    email: "odontocentroberlioz@gmail.com",

    yearsInPractice: "10+",
    patientRating: "5.0",
    insuranceAccepted: true,
  },

  // ---------------------------------------------------------------------------
  // BRANDING
  // ---------------------------------------------------------------------------
  branding: {
    primaryColor: "#1E5A8E",
    accentColor: "#0A7CBE",
    primaryDark: "#14426B",
    softBg: "#F0F7FC",
    logoUrl: "assets/images/Logo-odontocentroBerlioz.jpeg",
    heroImageUrl: "assets/images/Hero-odontocentroBerlioz.jpeg",
  },

  // ---------------------------------------------------------------------------
  // UI COPY (labels, nav, section headers, buttons) — per language
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
        dentists: "Meet Our Team",
        dentistsLead: "Expert specialists dedicated to your dental health.",
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
        dentists: "Conoce a Nuestro Equipo",
        dentistsLead: "Especialistas expertos dedicados a tu salud dental.",
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
  dentists: [
    {
      name: "Dr. Ricardo Berlioz",
      title: {
        en: "Endodontics Specialist · Universitat Barcelona",
        es: "Especialista en Endodoncia · Universitat Barcelona",
      },
      bio: {
        en: "Dr. Berlioz trained at the prestigious Universitat Barcelona and ESIRO Barcelona, bringing world-class expertise in endodontics to Honduras. His precision and gentle approach have helped countless patients save their natural teeth with advanced root canal treatments.",
        es: "El Dr. Berlioz se formó en la prestigiosa Universitat Barcelona y ESIRO Barcelona, trayendo experiencia de clase mundial en endodoncia a Honduras. Su precisión y enfoque gentil han ayudado a innumerables pacientes a conservar sus dientes naturales con tratamientos de conducto avanzados.",
      },
      photoUrl: "assets/images/gallery/dentist-berlioz.jpg",
    },
    {
      name: "Dra. Luisa Pérez",
      title: {
        en: "Maxillofacial Surgeon",
        es: "Cirujana Maxilofacial",
      },
      bio: {
        en: "Dr. Pérez specializes in complex oral and maxillofacial surgery procedures. Her expertise in surgical treatments ensures safe, effective care for patients requiring advanced interventions, from wisdom teeth extractions to reconstructive procedures.",
        es: "La Dra. Pérez se especializa en procedimientos complejos de cirugía oral y maxilofacial. Su experiencia en tratamientos quirúrgicos asegura atención segura y efectiva para pacientes que requieren intervenciones avanzadas, desde extracciones de muelas del juicio hasta procedimientos reconstructivos.",
      },
      photoUrl: "assets/images/gallery/dentist-perez.jpg",
    },
    {
      name: "Dr. Gabriel Rivera",
      title: {
        en: "Orthodontics & Maxillofacial Orthopedics Specialist",
        es: "Especialista en Ortodoncia y Ortopedia Maxilofacial",
      },
      bio: {
        en: "Dr. Rivera combines orthodontics with maxillofacial orthopedics to address complex bite and jaw alignment issues. His comprehensive approach ensures optimal facial harmony and long-term dental health for patients of all ages.",
        es: "El Dr. Rivera combina ortodoncia con ortopedia maxilofacial para abordar problemas complejos de mordida y alineación mandibular. Su enfoque integral asegura armonía facial óptima y salud dental a largo plazo para pacientes de todas las edades.",
      },
      photoUrl: "assets/images/gallery/dentist-rivera.jpg",
    },
    {
      name: "Dra. Anarely Rivera",
      title: {
        en: "Orthodontics Specialist",
        es: "Especialista en Ortodoncia",
      },
      bio: {
        en: "Dr. Rivera is passionate about creating beautiful, healthy smiles through orthodontics. With a keen eye for aesthetics and function, she designs personalized treatment plans that transform not just teeth alignment, but confidence and quality of life.",
        es: "La Dra. Rivera es apasionada por crear sonrisas hermosas y saludables a través de la ortodoncia. Con un ojo perspicaz para la estética y función, diseña planes de tratamiento personalizados que transforman no solo la alineación dental, sino la confianza y calidad de vida.",
      },
      photoUrl: "assets/images/gallery/dentist-arviera.jpg",
    },
    {
      name: "Dra. Debby Velázquez",
      title: {
        en: "Implantology & Oral Rehabilitation Specialist",
        es: "Especialista en Implantología y Rehabilitación Oral",
      },
      bio: {
        en: "Dr. Velázquez specializes in restoring smiles through advanced implantology and oral rehabilitation. Her meticulous work with dental implants and full-mouth restorations gives patients the confidence to smile, speak, and eat naturally again.",
        es: "La Dra. Velázquez se especializa en restaurar sonrisas a través de implantología avanzada y rehabilitación oral. Su trabajo meticuloso con implantes dentales y restauraciones completas devuelve a los pacientes la confianza para sonreír, hablar y comer naturalmente.",
      },
      photoUrl: "assets/images/gallery/dentist-velasquez.jpg",
    },
    {
      name: "Dr. Tirzo Bulnez",
      title: {
        en: "Periodontics Specialist",
        es: "Especialista en Periodoncia",
      },
      bio: {
        en: "Dr. Bulnez focuses on the health of gums and supporting structures of teeth. His expertise in periodontics helps patients prevent and treat gum disease, ensuring a strong foundation for a lifetime of healthy smiles.",
        es: "El Dr. Bulnez se enfoca en la salud de las encías y estructuras de soporte de los dientes. Su experiencia en periodoncia ayuda a los pacientes a prevenir y tratar enfermedades de las encías, asegurando una base sólida para toda una vida de sonrisas saludables.",
      },
      photoUrl: "assets/images/gallery/dentist-bulnez.jpg",
    },
    {
      name: "Dra. Carolina Cabral",
      title: {
        en: "General Dentistry",
        es: "Odontología General",
      },
      bio: {
        en: "Dr. Cabral provides comprehensive general dentistry services with a warm, patient-centered approach. Her dedication to preventive care and patient education helps families maintain optimal oral health throughout their lives.",
        es: "La Dra. Cabral brinda servicios integrales de odontología general con un enfoque cálido y centrado en el paciente. Su dedicación al cuidado preventivo y la educación del paciente ayuda a las familias a mantener una salud oral óptima durante toda su vida.",
      },
      photoUrl: "assets/images/gallery/dentist-cabral.jpg",
    },
  ],

  // ---------------------------------------------------------------------------
  // SERVICES
  // ---------------------------------------------------------------------------
  services: [
    {
      name: { en: "Teeth Whitening", es: "Blanqueamiento Dental" },
      description: {
        en: "Professional whitening treatments that brighten your smile safely and effectively, revealing a more confident, radiant you.",
        es: "Tratamientos de blanqueamiento profesional que iluminan tu sonrisa de manera segura y efectiva, revelando un tú más radiante y confiado.",
      },
      icon: "whitening",
    },
    {
      name: { en: "Dental Cleanings", es: "Limpiezas Dentales" },
      description: {
        en: "Thorough preventive cleanings to maintain healthy teeth and gums, removing plaque and tartar for optimal oral hygiene.",
        es: "Limpiezas preventivas profundas para mantener dientes y encías saludables, eliminando placa y sarro para una higiene oral óptima.",
      },
      icon: "cleaning",
    },
    {
      name: { en: "Restorations (Fillings)", es: "Restauraciones (Talones)" },
      description: {
        en: "High-quality tooth restorations using modern materials that blend naturally with your smile while restoring function and strength.",
        es: "Restauraciones dentales de alta calidad usando materiales modernos que se integran naturalmente con tu sonrisa mientras restauran función y fortaleza.",
      },
      icon: "general",
    },
    {
      name: { en: "Root Canals", es: "Endodoncias" },
      description: {
        en: "Advanced root canal treatments performed with precision and care to save your natural teeth and eliminate pain.",
        es: "Tratamientos de conducto avanzados realizados con precisión y cuidado para salvar tus dientes naturales y eliminar el dolor.",
      },
      icon: "emergency",
    },
    {
      name: { en: "Dental Fracture Repair", es: "Reparación de Fracturas Dentales" },
      description: {
        en: "Expert repair of chipped, cracked, or broken teeth to restore your smile's appearance and protect tooth structure.",
        es: "Reparación experta de dientes astillados, agrietados o rotos para restaurar la apariencia de tu sonrisa y proteger la estructura dental.",
      },
      icon: "emergency",
    },
    {
      name: { en: "Dental Implants", es: "Implantes Dentales" },
      description: {
        en: "Permanent tooth replacement solutions that look, feel, and function just like natural teeth for a lifetime of confident smiles.",
        es: "Soluciones permanentes de reemplazo dental que lucen, se sienten y funcionan como dientes naturales para toda una vida de sonrisas confiadas.",
      },
      icon: "implants",
    },
    {
      name: { en: "Smile Design", es: "Diseño de Sonrisa" },
      description: {
        en: "Comprehensive smile makeovers combining multiple cosmetic procedures to create the beautiful, harmonious smile you've always wanted.",
        es: "Transformaciones completas de sonrisa combinando múltiples procedimientos cosméticos para crear la sonrisa hermosa y armoniosa que siempre has deseado.",
      },
      icon: "cosmetic",
    },
    {
      name: { en: "Dental Veneers", es: "Carillas Dentales" },
      description: {
        en: "Ultra-thin porcelain shells that transform your smile by correcting color, shape, and alignment imperfections.",
        es: "Láminas ultra delgadas de porcelana que transforman tu sonrisa corrigiendo imperfecciones de color, forma y alineación.",
      },
      icon: "cosmetic",
    },
    {
      name: { en: "Micro Designs", es: "Microdiseños" },
      description: {
        en: "Artistic dental embellishments and micro-gems that add personality and sparkle to your unique smile.",
        es: "Decoraciones dentales artísticas y micro-gemas que agregan personalidad y brillo a tu sonrisa única.",
      },
      icon: "cosmetic",
    },
    {
      name: { en: "Zirconia Crowns", es: "Coronas de Zirconio" },
      description: {
        en: "Premium, metal-free crowns offering superior strength, durability, and natural aesthetics for long-lasting restorations.",
        es: "Coronas premium sin metal que ofrecen resistencia, durabilidad y estética natural superior para restauraciones duraderas.",
      },
      icon: "general",
    },
    {
      name: { en: "Porcelain Bridges", es: "Puentes de Porcelana" },
      description: {
        en: "Custom-crafted bridges that seamlessly replace missing teeth, restoring your complete smile and bite function.",
        es: "Puentes diseñados a medida que reemplazan perfectamente dientes faltantes, restaurando tu sonrisa completa y función de mordida.",
      },
      icon: "general",
    },
    {
      name: { en: "Flexible Dentures", es: "Prótesis Flexibles" },
      description: {
        en: "Comfortable, lightweight removable dentures that adapt naturally to your mouth for improved fit and confidence.",
        es: "Prótesis removibles cómodas y ligeras que se adaptan naturalmente a tu boca para mejor ajuste y confianza.",
      },
      icon: "general",
    },
  ],

  // ---------------------------------------------------------------------------
  // TESTIMONIALS
  // ---------------------------------------------------------------------------
  testimonials: [
    {
      quote: {
        en: "Excellent service! The team at Odontocentro Berlioz is very professional and caring. They took great care of me during my root canal treatment. Highly recommended!",
        es: "¡Excelente servicio! El equipo de Odontocentro Berlioz es muy profesional y atento. Me cuidaron muy bien durante mi tratamiento de endodoncia. ¡Altamente recomendado!",
      },
      author: "María José L.",
      rating: 5,
    },
    {
      quote: {
        en: "I was afraid of the dentist, but Dr. Berlioz and his team made me feel so comfortable. The clinic is modern and clean, and the results of my smile design exceeded my expectations!",
        es: "Le tenía miedo al dentista, pero el Dr. Berlioz y su equipo me hicieron sentir muy cómoda. La clínica es moderna y limpia, ¡y los resultados de mi diseño de sonrisa superaron mis expectativas!",
      },
      author: "Carlos R.",
      rating: 5,
    },
    {
      quote: {
        en: "Best dental clinic in Comayagua! Dr. Rivera did an amazing job with my orthodontic treatment. My smile has completely transformed. Thank you to the whole team!",
        es: "¡Mejor clínica dental en Comayagua! La Dra. Rivera hizo un trabajo increíble con mi tratamiento de ortodoncia. Mi sonrisa se ha transformado completamente. ¡Gracias a todo el equipo!",
      },
      author: "Ana Lucía M.",
      rating: 5,
    },
    {
      quote: {
        en: "Very satisfied with the dental implant service. Dr. Velázquez is an excellent professional and explained every step of the process. The clinic has state-of-the-art equipment.",
        es: "Muy satisfecho con el servicio de implantes dentales. La Dra. Velázquez es una excelente profesional y me explicó cada paso del proceso. La clínica cuenta con equipos de última tecnología.",
      },
      author: "Roberto S.",
      rating: 5,
    },
    {
      quote: {
        en: "I recommend Odontocentro Berlioz 100%. The attention is personalized and they always make you feel welcome. My whole family comes here now!",
        es: "Recomiendo Odontocentro Berlioz al 100%. La atención es personalizada y siempre te hacen sentir bienvenido. ¡Ahora toda mi familia viene aquí!",
      },
      author: "Patricia G.",
      rating: 5,
    },
    {
      quote: {
        en: "Professional, kind, and efficient. My dental cleaning was thorough and painless. The facilities are impeccable. I will definitely be back!",
        es: "Profesionales, amables y eficientes. Mi limpieza dental fue completa y sin dolor. Las instalaciones son impecables. ¡Definitivamente volveré!",
      },
      author: "Luis Fernando H.",
      rating: 5,
    },
  ],

  // ---------------------------------------------------------------------------
  // INSURANCE LOGOS
  // ---------------------------------------------------------------------------
  insuranceLogos: [],

  // ---------------------------------------------------------------------------
  // SMILE GALLERY
  // ---------------------------------------------------------------------------
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
  socials: {
    instagram: "https://www.instagram.com/odontocentroberlioz?igsh=MTAyZW5jMW5ub2s1",
    facebook: "https://www.facebook.com/odontocentroberlioz?locale=es_LA",
  },
};

window.SITE_CONFIG = config;

import {
  Briefcase,
  FileText,
  Globe,
  Lightbulb,
  Scale,
  ShieldCheck,
  type LucideIcon,
} from 'lucide-react';
import { PlaceHolderImages } from './placeholder-images';

export const HERO_DATA = {
  headline: 'Tu Socio Legal para Crecer Sin Miedo',
  subheadline:
    'Asesoría legal clara, ágil y asequible para startups y PYMEs tecnológicas. Nos integramos a tu equipo para que innoves sin fricciones legales.',
  cta1: 'Agenda una Asesoría',
  cta2: 'Ver Planes',
};

export const TRUSTED_BY_LOGOS = PlaceHolderImages.filter((img) =>
  img.id.startsWith('logo-')
);

export const PROBLEM_SOLUTION_DATA = {
  problem: {
    title: 'El obstáculo legal que frena tu startup',
    points: [
      'Contratos que no te protegen y generan riesgo a futuro.',
      'Procesos de inversión lentos por desorden corporativo.',
      'Dudas sobre propiedad intelectual, datos y expansión que paralizan decisiones.',
    ],
  },
  solution: {
    title: 'La solución Syg: Agilidad y certeza legal',
    points: [
      'Planes de suscripción flexibles que se adaptan a tu etapa de crecimiento.',
      'Documentación lista para auditorías y rondas de inversión (due diligence).',
      'Asesoría directa y sin jerga, enfocada en resultados de negocio.',
      'Un equipo legal que entiende de tecnología, producto y venture capital.',
    ],
  },
};

export type Service = {
  icon: string;
  title: string;
  description: string;
};

export const SERVICES_DATA: Service[] = [
  {
    icon: 'Briefcase',
    title: 'Constitución y Gobierno Corporativo',
    description:
      'Estructuramos tu empresa correctamente desde el día uno, preparando el camino para futuras inversiones y una gestión corporativa sólida y escalable.',
  },
  {
    icon: 'FileText',
    title: 'Contratos Tecnológicos',
    description:
      'Redactamos y negociamos tus contratos clave (SaaS, SLA, DPA, Términos y Privacidad) para proteger tu negocio y habilitar tus ventas sin fricción.',
  },
  {
    icon: 'Scale',
    title: 'Inversión y Due Diligence',
    description:
      'Te acompañamos en rondas de inversión (SAFE, notas, term sheets) y organizamos tu data room para un proceso de due diligence ágil y exitoso.',
  },
  {
    icon: 'Lightbulb',
    title: 'Propiedad Intelectual',
    description:
      'Protegemos tus activos más valiosos: registro de marca, protección de software y gestión de cesiones de derechos para asegurar tu innovación.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Compliance Regulatorio',
    description:
      'Navegamos la complejidad regulatoria en datos personales, fintech y salud digital para que operes con confianza y cumpliendo la normativa vigente.',
  },
  {
    icon: 'Globe',
    title: 'Expansión Internacional',
    description:
      'Facilitamos tu crecimiento global, asesorándote en la estructura legal, fiscal y operativa para abrir nuevos mercados de forma segura y eficiente.',
  },
];

export type Plan = {
  name: string;
  price: string;
  priceDescription: string;
  features: string[];
  cta: string;
  isPopular: boolean;
};

export const PRICING_DATA: Plan[] = [
  {
    name: 'Básico',
    price: '$250',
    priceDescription: 'USD / mes',
    features: [
      'Consultas rápidas (hasta 2h)',
      'Revisión de 1 documento/mes',
      'SLA de respuesta: 48h',
      'Acceso a plantillas base',
    ],
    cta: 'Empezar Plan Básico',
    isPopular: false,
  },
  {
    name: 'Growth',
    price: '$750',
    priceDescription: 'USD / mes',
    features: [
      'Consultas ilimitadas vía chat',
      'Revisión/redacción de 4 documentos/mes',
      'SLA de respuesta: 24h',
      'Asesoría en gobierno corporativo',
    ],
    cta: 'Empezar Plan Growth',
    isPopular: true,
  },
  {
    name: 'Premium',
    price: '$2,000',
    priceDescription: 'USD / mes',
    features: [
      'Todo en Growth +',
      'Soporte en rondas de inversión (data room)',
      'Asesoría estratégica mensual',
      'Add-on: registro de marca incluido',
    ],
    cta: 'Empezar Plan Premium',
    isPopular: false,
  },
];

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
};

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    quote:
      '“Syg Legal fue clave para cerrar nuestra ronda semilla. Su agilidad y conocimiento del ecosistema tech nos dio la confianza para negociar y crecer sin miedo.”',
    author: 'Ana Pérez',
    role: 'CEO',
    company: 'FintechCo',
    avatar: 'avatar-1',
  },
  {
    quote:
      '“Finalmente un equipo legal que habla nuestro idioma. Nos ayudaron a lanzar nuestro SaaS en tres países, con todos los contratos y políticas en tiempo récord.”',
    author: 'Carlos Rodríguez',
    role: 'CTO',
    company: 'SaaSy',
    avatar: 'avatar-2',
  },
  {
    quote:
      '“La suscripción legal flexible es un cambio de juego. Tenemos soporte constante sin preocuparnos por costos por hora. Indispensable para cualquier startup.”',
    author: 'Laura Gómez',
    role: 'Head of Product',
    company: 'HealthTech Solutions',
    avatar: 'avatar-3',
  },
];

export type FaqItem = {
  question: string;
  answer: string;
};

export const FAQ_DATA: FaqItem[] = [
  {
    question: '¿Cómo funcionan los planes de suscripción y qué pasa si excedo los límites?',
    answer:
      'Nuestros planes ofrecen una cantidad de horas o documentos. Si necesitas más, puedes pasar al siguiente nivel o contratar un paquete de horas adicional. Buscamos flexibilidad total: pagas solo por lo que necesitas, con previsibilidad de costos para tu startup.',
  },
  {
    question: '¿En cuánto tiempo puedo tener una respuesta o un contrato listo?',
    answer:
      'Nuestro SLA de respuesta varía de 24 a 48 horas según tu plan para consultas. La redacción de un contrato estándar toma de 3 a 5 días hábiles. Priorizamos la agilidad para que tu negocio no se detenga por temas legales.',
  },
  {
    question: 'Mi startup está en un sector regulado (fintech/healthtech), ¿tienen experiencia?',
    answer:
      'Sí, es una de nuestras especialidades. Ayudamos a startups en sectores regulados a navegar el compliance de datos personales, licenciamiento y normativas específicas, asegurando que tu producto o servicio cumpla con todos los requisitos legales desde el inicio.',
  },
  {
    question: '¿Me ayudan a prepararme para una ronda de inversión con VCs internacionales?',
    answer:
      'Absolutamente. Preparamos tu data room, revisamos y negociamos term sheets, y aseguramos que tu estructura corporativa sea atractiva para inversores internacionales. Nuestro objetivo es que llegues a la negociación con una posición sólida y sin sorpresas.',
  },
  {
    question: '¿El registro de mi marca está incluido en los planes?',
    answer:
      'El plan Premium incluye el registro de una marca en tu país base. Para otros planes, o para registros en múltiples países, ofrecemos un servicio add-on con tarifas preferenciales. Proteger tu marca es una inversión crítica y te lo facilitamos.',
  },
];

export const FINAL_CTA_DATA = {
  headline: '¿Listo para llevar tu startup al siguiente nivel?',
  subheadline:
    'Deja que nos encarguemos de la complejidad legal para que tú te enfoques en crecer. Agenda una asesoría gratuita y sin compromiso.',
  cta: 'Hablar con un experto',
};

export const FOOTER_DATA = {
  description:
    'Socio legal para startups y PYMEs tecnológicas. Asesoría clara, ágil y asequible.',
  legal: '© {YEAR} Syg Legal. Todos los derechos reservados.',
  links: [
    { text: 'Servicios', href: '#services' },
    { text: 'Planes', href: '#pricing' },
    { text: 'FAQ', href: '#faq' },
    { text: 'Herramientas AI', href: '/tools/clause-generator' },
  ],
  social: [
    { text: 'LinkedIn', href: '#' },
    { text: 'Twitter', href: '#' },
  ],
  policies: [
    { text: 'Política de Privacidad', href: '#' },
    { text: 'Términos de Servicio', href: '#' },
  ],
};

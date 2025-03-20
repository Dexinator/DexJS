import type { ServiceProps } from "../types/services.props";

export const SERVICES: ServiceProps[] = [
  {
    title: "Coaching Individual",
    description:
      "Sesiones personalizadas de coaching enfocadas en el desarrollo personal, autoestima y habilidades emocionales. Acompañamiento para establecer metas y potenciar el crecimiento personal.",
    audience: "Adolescentes y Adultos",
    benefits: [
      "Mejora de autoestima",
      "Logro de objetivos personales",
      "Gestión emocional",
      "Toma de decisiones efectiva"
    ],
    icon: "/images/services/coaching.webp",
  },
  {
    title: "Coaching Organizacional",
    description:
      "Consultoría y capacitación en desarrollo personal dentro de empresas, optimizando el rendimiento de los colaboradores y creando equipos más eficientes y motivados.",
    audience: "Empresas",
    benefits: [
      "Mayor productividad",
      "Equipos más cohesionados",
      "Mejor ambiente laboral",
      "Desarrollo de liderazgo"
    ],
    icon: "/images/services/organizational.webp",
  },
  {
    title: "Talleres de Alto Impacto",
    description:
      "Espacios dinámicos para adolescentes, enfocados en liderazgo, gestión de emociones y toma de decisiones estratégicas.",
    audience: "Adolescentes y Adultos",
    benefits: [
      "Desarrollo de liderazgo",
      "Estrategias para toma de decisiones",
      "Mejor comunicación interpersonal",
      "Fortalecimiento de habilidades sociales"
    ],
    icon: "/images/services/workshops.webp",
  },
];

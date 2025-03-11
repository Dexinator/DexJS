export interface ServiceProps {
    title: string;
    description: string;
    audience: "Adolescentes" | "Adultos" | "Empresas";
    benefits: string[];
    icon?: string; // Icono representativo del servicio
  }
  
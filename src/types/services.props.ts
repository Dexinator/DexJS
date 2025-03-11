export interface ServiceProps {
    title: string;
    description: string;
    audience: "Adolescentes" | "Adultos" | "Empresas" | "Adolescentes y Adultos";
    benefits: string[];
    icon?: string; // Icono representativo del servicio
  }
  
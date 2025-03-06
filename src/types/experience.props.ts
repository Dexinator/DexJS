export interface ExperienceProps {
  dates: string;
  title: string;
  organization: string; // Cambiado de "company" a "organization" para mayor flexibilidad
  organizationUrl?: string; // Ahora opcional, ya que algunas experiencias no tienen sitio web
  description: string;
  technologies: string[];
  logo?: string;
  category?: "Coaching y Educación" | "Comunicación y Proyectos"; // Nueva categoría opcional
}

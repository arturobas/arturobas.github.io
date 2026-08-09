export type SectionId =
  | "hero"
  | "about"
  | "skills"
  | "projects"
  | "experience"
  | "contact";

export interface SectionConfig {
  id: SectionId;
  enabled: boolean;
  showInNav: boolean;
  navLabel?: string;
}

// Para agregar una sección nueva en el futuro:
// 1. Crea el componente en src/components/sections/
// 2. Regístralo en el mapa `registry` de src/pages/index.astro
// 3. Agrega una entrada aquí (enabled/orden/nav)
export const sections: SectionConfig[] = [
  { id: "hero", enabled: true, showInNav: false },
  { id: "about", enabled: true, showInNav: true, navLabel: "Sobre mí" },
  { id: "skills", enabled: true, showInNav: true, navLabel: "Habilidades" },
  { id: "projects", enabled: true, showInNav: true, navLabel: "Proyectos" },
  {
    id: "experience",
    enabled: true,
    showInNav: true,
    navLabel: "Experiencia",
  },
  { id: "contact", enabled: true, showInNav: true, navLabel: "Contacto" },
];

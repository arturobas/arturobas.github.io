export type SectionId = "about" | "skills" | "projects" | "experience" | "contact";

export interface SectionConfig {
  id: SectionId;
  slug: string;
  enabled: boolean;
  showInNav: boolean;
  navLabel: string;
}

// Cada sección (salvo "hero", que vive en la home) es también una ruta propia
// en /<slug>, generada por src/pages/[slug].astro.
//
// Para agregar una sección nueva en el futuro:
// 1. Crea el componente en src/components/sections/
// 2. Regístralo en el mapa `registry` de src/pages/[slug].astro
// 3. Agrega una entrada aquí (id, slug, enabled, nav)
export const sections: SectionConfig[] = [
  { id: "about", slug: "sobre-mi", enabled: true, showInNav: true, navLabel: "Sobre mí" },
  { id: "skills", slug: "habilidades", enabled: true, showInNav: true, navLabel: "Habilidades" },
  { id: "projects", slug: "proyectos", enabled: true, showInNav: true, navLabel: "Proyectos" },
  { id: "experience", slug: "experiencia", enabled: true, showInNav: true, navLabel: "Experiencia" },
  { id: "contact", slug: "contacto", enabled: true, showInNav: true, navLabel: "Contacto" },
];

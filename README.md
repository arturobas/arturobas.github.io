# portafolio

A project to show my skills to the world. Built with [Astro](https://astro.build), organized as independent, config-driven sections — each one its own page/route.

## Desarrollo

```bash
npm install
npm run dev
```

## Editar contenido

- `src/data/site.ts` — nombre, rol, bio, contacto.
- `src/data/skills.ts` — habilidades por categoría.
- `src/content/projects/*.md` — un archivo por proyecto.
- `src/content/experience/*.md` — un archivo por experiencia/trabajo.

## Rutas

- `/` — home (Hero + enlaces a las demás secciones).
- `/sobre-mi`, `/habilidades`, `/proyectos`, `/experiencia`, `/contacto` — una página por sección, generadas dinámicamente por `src/pages/[slug].astro` a partir de `src/config/sections.ts`.

## Agregar una sección nueva

1. Crea el componente en `src/components/sections/`.
2. Regístralo en el mapa `registry` de `src/pages/[slug].astro`.
3. Agrega su entrada (id, slug, enabled, nav) en `src/config/sections.ts` — esto crea la ruta y el link de navegación automáticamente.

Para quitar o reordenar secciones existentes, edita solo `src/config/sections.ts`.

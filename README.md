# portafolio

A project to show my skills to the world. Built with [Astro](https://astro.build), organized as independent, config-driven sections.

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

## Agregar una sección nueva

1. Crea el componente en `src/components/sections/`.
2. Regístralo en el mapa `registry` de `src/pages/index.astro`.
3. Agrega su entrada (id, enabled, nav) en `src/config/sections.ts`.

Para quitar o reordenar secciones existentes, edita solo `src/config/sections.ts`.

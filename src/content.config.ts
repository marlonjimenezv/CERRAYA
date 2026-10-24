import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';
import { categoriasConsejo } from './data/consejos';

// Fotos de trabajos. Se crean desde el panel /admin (Decap CMS) o agregando un .md en src/content/trabajos.
export const serviciosTrabajo = ['Urgencia', 'Cerradura digital', 'Cambio de guardas', 'Cerrojo de seguridad', 'Caja fuerte', 'Vehículo', 'Conjunto o empresa', 'Otro'] as const;

const trabajos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/trabajos' }),
  schema: ({ image }) =>
    z.object({
      titulo: z.string(),
      fecha: z.coerce.date(),
      servicio: z.enum(serviciosTrabajo),
      localidad: z.string().optional(),
      foto: image(),
      antes: image().optional(),
      destacado: z.boolean().default(false),
    }),
});

// Consejos: artículos y respuestas a preguntas de clientes. Se publican desde /admin o con un .md en src/content/consejos.

const consejos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/consejos' }),
  schema: ({ image }) =>
    z.object({
      titulo: z.string(),
      descripcion: z.string(),
      fecha: z.coerce.date(),
      categoria: z.enum(categoriasConsejo),
      imagen: image().optional(),
      destacado: z.boolean().default(false),
    }),
});

export const collections = { trabajos, consejos };

// Comerciales de Cerraya: videos verticales 9:16 guardados en public/videos (con su imagen de portada .jpg).
import { empresa } from './empresa';

export const comerciales = [
  {
    id: 'cerrajero-ya',
    titulo: 'Cerrajero YA',
    descripcion: 'Comercial de Cerraya: cerrajería de urgencia en Bogotá, 24/7. Llama o escribe y vamos en camino.',
    video: '/videos/cerraya-comercial-cerrajero-ya.mp4',
    poster: '/videos/cerraya-comercial-cerrajero-ya.jpg',
    duracion: 'PT19S',
  },
  {
    id: 'cobertura',
    titulo: 'Llegamos a tu localidad',
    descripcion: 'Comercial de Cerraya: llegamos a todas las localidades de Bogotá. Aperturas, cambio de guardas, llaves de carro, cerraduras digitales y cajas fuertes.',
    video: '/videos/cerraya-comercial-cobertura.mp4',
    poster: '/videos/cerraya-comercial-cobertura.jpg',
    duracion: 'PT23S',
  },
];

// Datos para Google (VideoObject), para que los videos puedan salir en la búsqueda de videos.
export const schemaComerciales = (lista = comerciales) =>
  lista.map((c) => ({
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: `${c.titulo} | Cerraya`,
    description: c.descripcion,
    thumbnailUrl: `${empresa.sitio}${c.poster}`,
    contentUrl: `${empresa.sitio}${c.video}`,
    uploadDate: '2026-11-22',
    duration: c.duracion,
  }));

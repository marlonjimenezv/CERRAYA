// Zonas de Bogotá para las búsquedas tipo "cerrajero en el norte de Bogotá".
// Cada zona tiene su página /cerrajero-<zona>-de-bogota y enlaza a las páginas de sus localidades.
import { localidadesBogota, type Localidad } from './localidades';

export type Zona = {
  slug: string; // va en la URL: /cerrajero-norte-de-bogota
  nombre: string; // "norte"
  localidades: string[]; // slugs de localidades
  referencias: string[]; // lugares que la gente usa para ubicarse
  texto: string;
};

export const zonas: Zona[] = [
  {
    slug: 'norte',
    nombre: 'norte',
    localidades: ['usaquen', 'chapinero', 'suba', 'barrios-unidos'],
    referencias: ['Cedritos', 'Santa Bárbara', 'Chicó', 'Unicentro', 'Calle 116', 'Parque de la 93', 'Zona T', 'Usaquén pueblo', 'Rosales', 'Colina Campestre', 'Niza', 'Mazurén', 'Toberín', 'Calle 170', 'Santa Ana', 'Polo Club'],
    texto:
      'En el norte atendemos apartamentos, casas, oficinas y locales comerciales. Aquí vemos muchas cerraduras digitales y de alta seguridad en edificios, y puertas de vidrio templado en locales de la 85, la 93, la 116 y Unicentro, además de porterías de conjuntos en Cedritos, Colina Campestre y Mazurén.',
  },
  {
    slug: 'occidente',
    nombre: 'occidente',
    localidades: ['engativa', 'fontibon', 'kennedy', 'puente-aranda'],
    referencias: ['Modelia', 'Hayuelos', 'Salitre', 'Normandía', 'La Floresta', 'Álamos', 'Ciudad Salitre', 'Castilla', 'Américas', 'Tintal', 'Zona Franca', 'Plaza de las Américas'],
    texto:
      'En el occidente atendemos conjuntos residenciales, casas, bodegas y locales. Hacemos aperturas, cambio de guardas y cerraduras de seguridad en Modelia, Hayuelos, Castilla y Normandía, y mantenimiento de puertas de vidrio y control de acceso en zonas empresariales como Salitre y la Zona Franca.',
  },
  {
    slug: 'sur',
    nombre: 'sur',
    localidades: ['bosa', 'tunjuelito', 'usme', 'ciudad-bolivar', 'rafael-uribe-uribe', 'san-cristobal', 'antonio-narino'],
    referencias: ['20 de Julio', 'Restrepo', 'Venecia', 'Ciudad Tunal', 'Bosa Centro', 'Perdomo', 'Quiroga', 'Olaya', 'San Blas', 'Yomasa', 'Meissen', 'Santa Librada'],
    texto:
      'En el sur atendemos casas, apartamentos, locales y bodegas. Hacemos aperturas sin daños, cambio de guardas, rejas y candados, y cerraduras de seguridad para locales del Restrepo, el 20 de Julio, Venecia y el Tunal.',
  },
  {
    slug: 'centro',
    nombre: 'centro',
    localidades: ['teusaquillo', 'santa-fe', 'la-candelaria', 'los-martires'],
    referencias: ['Galerías', 'Teusaquillo', 'Park Way', 'La Macarena', 'Las Nieves', 'Centro Internacional', 'La Candelaria', 'Paloquemao', 'Ricaurte', 'San Victorino', 'Chapinero Central', 'El Campín'],
    texto:
      'En el centro atendemos oficinas, locales comerciales, casas antiguas y apartamentos. Trabajamos cerraduras de puertas antiguas de madera, cambio de guardas, puertas de vidrio de oficinas y locales, y cajas fuertes en el Centro Internacional, Galerías, Paloquemao y San Victorino.',
  },
];

export const localidadesDeZona = (z: Zona): Localidad[] =>
  z.localidades.map((s) => localidadesBogota.find((l) => l.slug === s)!).filter(Boolean);

export const urlZona = (z: Zona) => `/cerrajero-${z.slug}-de-bogota`;

export const zonaDeLocalidad = (slug: string) => zonas.find((z) => z.localidades.includes(slug));

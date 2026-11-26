// Fotos de la tienda.
// - Foto del producto exacto: src/assets/cerraduras/<id-del-producto>.(jpg|png|webp)
// - Foto de referencia por tipo (Unsplash, licencia libre): src/assets/cerraduras/tipos/<tipo>.jpg
//   Créditos en src/assets/cerraduras/tipos/CREDITOS.md

const productos = import.meta.glob<{ default: ImageMetadata }>('/src/assets/cerraduras/*.{jpg,jpeg,png,webp}', { eager: true });
const tipos = import.meta.glob<{ default: ImageMetadata }>('/src/assets/cerraduras/tipos/*.jpg', { eager: true });

const buscar = (fotos: Record<string, { default: ImageMetadata }>, nombre: string) =>
  Object.entries(fotos).find(([ruta]) => ruta.split('/').pop()!.replace(/\.\w+$/, '') === nombre)?.[1].default;

export const fotoProducto = (id: string) => buscar(productos, id);
export const fotoTipo = (slug: string) => buscar(tipos, slug);

// Foto de referencia para la página de cada servicio (/servicios/<slug>).
const fotoPorServicio: Record<string, string> = {
  'apertura-de-puertas': 'sobreponer',
  'cambio-de-guardas': 'cerrojos',
  'reparacion-puertas-de-vidrio': 'puerta-vidrio',
  'duplicado-de-llaves': 'cerrojos',
  'instalacion-de-cerraduras': 'embutir',
  'cerraduras-digitales': 'digitales',
  'reparacion-de-cerraduras': 'manija-y-pomo',
  'bisagras-hidraulicas': 'puerta-vidrio-lobby',
  'cerraduras-puertas-de-vidrio': 'herraje-vidrio',
  'apertura-puertas-de-vidrio': 'puerta-vidrio-local',
  'vidrio-roto-o-puerta-forzada': 'puerta-vidrio-local',
  'brazos-hidraulicos': 'puerta-vidrio-lobby',
  'herrajes-puertas-de-vidrio': 'herraje-vidrio',
  'puertas-corredizas-de-vidrio': 'puerta-vidrio-oficina',
  'electroimanes-y-control-de-acceso': 'electricas',
  'mantenimiento-puertas-de-vidrio': 'puerta-vidrio-oficina',
  'instalacion-puertas-de-vidrio': 'puerta-vidrio',
  'divisiones-de-bano': 'puerta-vidrio',
  'llave-partida': 'sobreponer',
  'apertura-de-vehiculos': 'llave-entrega',
  'robo-o-forzamiento': 'cerrojos',
  'cerrojos-de-seguridad': 'cerrojos',
  'cajas-fuertes': 'cajas-fuertes',
  'cerraduras-electricas': 'electricas',
  'llave-maestra': 'cerrojos',
  'candados-y-rejas': 'candados',
  'muebles-y-buzones': 'muebles',
};
export const fotoServicio = (slug: string) => (fotoPorServicio[slug] ? fotoTipo(fotoPorServicio[slug]) : undefined);

// Fotos tomadas por Cerraya en el local (publicadas también en Google Maps): no llevan "Imagen de referencia".
const tiposPropios = new Set(['sobreponer', 'candados', 'cerrojos', 'manija-y-pomo', 'embutir', 'vitrina']);
export const tipoConFotoPropia = (slug: string) => tiposPropios.has(slug);
export const servicioConFotoPropia = (slug: string) => tiposPropios.has(fotoPorServicio[slug] ?? '');

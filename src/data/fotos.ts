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

// Marcas y conjuntos que han trabajado con Cerraya.
// Para poner el logo de una marca: guardar la imagen en src/assets/marcas e importarla aquí en `logo`.
// Si no tiene logo, se muestra el nombre.
import type { ImageMetadata } from 'astro';
import coltanques from '../assets/marcas/coltanques.png';
import eclTotal from '../assets/marcas/ecl-total.png';
import fredinno from '../assets/marcas/fredinno.png';
import abaco from '../assets/marcas/abaco.png';
import saludASuAlcance from '../assets/marcas/salud-a-su-alcance.png';
import newBody from '../assets/marcas/new-body.png';

export type Marca = {
  nombre: string;
  tipo: 'empresa' | 'conjunto';
  logo?: ImageMetadata;
};

export const marcas: Marca[] = [
  { nombre: 'Coltanques', tipo: 'empresa', logo: coltanques },
  { nombre: 'ECL Total, Empresa Colombiana de Logística', tipo: 'empresa', logo: eclTotal },
  { nombre: 'Fredinno Helados', tipo: 'empresa', logo: fredinno },
  { nombre: 'Abaco', tipo: 'empresa', logo: abaco },
  { nombre: 'Salud a su Alcanze', tipo: 'empresa', logo: saludASuAlcance },
  { nombre: 'New Body, Club de Antienvejecimiento', tipo: 'empresa', logo: newBody },
  { nombre: 'El Salitral II', tipo: 'conjunto' },
  { nombre: 'Castilla Real', tipo: 'conjunto' },
  { nombre: 'Bella Luna', tipo: 'conjunto' },
  { nombre: 'Bonaire', tipo: 'conjunto' },
];

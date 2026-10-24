// Promociones de Cerraya. CONFIRMAR cada una antes de publicar: valores, condiciones y vigencia.
// Estatuto del Consumidor (Ley 1480 de 2011): toda promoción debe decir condiciones y vigencia,
// y no se puede anunciar un "precio antes" que no haya existido.
import type { NombreIcono } from '../components/iconos';
import { instalacionIncluida } from './cerraduras';

export type Promocion = {
  id: string;
  etiqueta: string;
  titulo: string;
  texto: string;
  condiciones: string;
  vigencia: string; // texto visible, ej. "Hasta el 31 de diciembre de 2026"
  icono: NombreIcono;
  activa: boolean;
  enTienda?: boolean; // se muestra como banda en la tienda
};

export const promociones: Promocion[] = [
  {
    id: 'instalacion-incluida',
    etiqueta: 'Instalación incluida',
    titulo: 'Cerraduras digitales con instalación incluida',
    texto: 'El precio de cada cerradura digital de la tienda ya incluye la instalación profesional. Sin cobros adicionales.',
    condiciones: 'Aplica para cerraduras digitales compradas a Cerraya, instaladas en Bogotá en puertas estándar. No incluye adecuaciones ni refuerzos de la puerta.',
    vigencia: 'Hasta el 31 de diciembre de 2026',
    icono: 'digital',
    // Se enciende sola cuando el precio de las digitales ya trae la instalación (instalacionIncluida en cerraduras.ts).
    // Así nunca se regala: el cliente ve "instalación incluida" y el valor ya está en el precio.
    activa: instalacionIncluida.digitales > 0,
    enTienda: true,
  },
  {
    id: 'vecinos',
    etiqueta: 'Vecinos Cerraya',
    titulo: '10% para cada vecino si se ponen de acuerdo',
    texto: 'Si 3 o más apartamentos del mismo conjunto contratan el mismo servicio el mismo día, cada uno recibe 10% de descuento.',
    condiciones: 'Mínimo 3 apartamentos o casas del mismo conjunto, mismo servicio y misma fecha de visita. Descuento sobre la mano de obra.',
    vigencia: 'Hasta el 31 de diciembre de 2026',
    icono: 'edificio',
    activa: true,
  },
  {
    id: 'combo-seguridad',
    etiqueta: 'Combo',
    titulo: 'Combo puerta segura: cerradura + cerrojo con 15% en la instalación',
    texto: 'Refuerza tu puerta principal con una cerradura nueva y un cerrojo de seguridad, y paga 15% menos en la mano de obra.',
    condiciones: 'Productos comprados a Cerraya e instalados en la misma visita. Descuento sobre la mano de obra, no sobre los productos.',
    vigencia: 'Hasta el 31 de diciembre de 2026',
    icono: 'escudo',
    activa: false, // CONFIRMAR: 15% de la mano de obra; activar solo si la tarifa lo aguanta
  },
  {
    id: 'copias-regalo',
    etiqueta: 'Regalo',
    titulo: 'Cambio de guardas con 2 copias de llave de regalo',
    texto: 'Cuando cambias las guardas con nosotros te llevas dos copias adicionales sin costo.',
    condiciones: 'Aplica a llaves sencillas y de puntos estándar. Llaves de alta seguridad o con tarjeta de propiedad tienen costo.',
    vigencia: 'Hasta el 31 de diciembre de 2026',
    icono: 'llave',
    activa: true,
  },
  {
    id: 'referidos',
    etiqueta: 'Refiere y gana',
    titulo: 'Recomiéndanos y gana 10% en tu próximo servicio',
    texto: 'Cuando alguien que nos recomendaste contrate un servicio, te damos 10% de descuento en tu siguiente servicio.',
    condiciones: 'Tu referido debe mencionar tu nombre al contratar. Un descuento por referido, sobre la mano de obra, válido por 6 meses.',
    vigencia: 'Hasta el 31 de diciembre de 2026',
    icono: 'equipo',
    activa: true,
  },
  {
    id: 'diagnostico-gratis',
    etiqueta: 'Mantenimiento',
    titulo: 'La primera visita de tu plan de mantenimiento es gratis',
    texto: 'Al tomar un plan de mantenimiento preventivo, la visita de diagnóstico inicial no tiene costo.',
    condiciones: 'Aplica para planes de mantenimiento anuales contratados con Cerraya en Bogotá.',
    vigencia: 'Hasta el 31 de diciembre de 2026',
    icono: 'herramienta',
    activa: true,
  },
];

export const promocionesActivas = promociones.filter((p) => p.activa);

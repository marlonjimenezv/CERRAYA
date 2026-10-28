// Catálogo de servicios de Cerraya, ordenado de más pedido a menos pedido.
// CONFIRMAR: ajustar a lo que realmente se presta. Los 6 primeros salen en el inicio.
import type { NombreIcono } from '../components/iconos';

export type Servicio = {
  slug: string;
  titulo: string;
  texto: string;
  incluye: string[];
  icono: NombreIcono;
  urgencia: boolean; // se atiende como urgencia 24/7
  grupo: 'Hogar' | 'Vehículos' | 'Seguridad' | 'Conjuntos y empresas';
};

export const servicios: Servicio[] = [
  {
    slug: 'apertura-de-puertas',
    titulo: 'Apertura de puertas',
    texto: 'Aperturas domiciliarias sin dañar la puerta ni la cerradura, cuando te quedas por fuera o con las llaves adentro.',
    incluye: ['Casas y apartamentos', 'Puertas de seguridad', 'Oficinas y locales'],
    icono: 'puerta',
    urgencia: true,
    grupo: 'Hogar',
  },
  {
    slug: 'cambio-de-guardas',
    titulo: 'Cambio de guardas',
    texto: 'Cambiamos el cilindro y te entregamos llaves nuevas. Ideal si perdiste las llaves, te mudaste o cambió el inquilino.',
    incluye: ['Cilindros de alta seguridad', 'Llaves de puntos y multipunto', 'Servicio inmediato'],
    icono: 'llave',
    urgencia: true,
    grupo: 'Hogar',
  },
  {
    slug: 'duplicado-de-llaves',
    titulo: 'Copias de llaves',
    texto: 'Duplicamos llaves de casa, oficina, candados y cerrojos, incluidas llaves de puntos y de seguridad.',
    incluye: ['Llaves sencillas', 'Llaves de puntos y multipunto', 'Llaves de candado y buzón'],
    icono: 'llave',
    urgencia: false,
    grupo: 'Hogar',
  },
  {
    slug: 'llaves-de-carro',
    titulo: 'Llaves de carro',
    texto: 'Duplicado y fabricación de llaves con chip, navaja y control para las marcas más comunes, aunque no tengas la original.',
    incluye: ['Duplicado de llave', 'Fabricación por pérdida total', 'Programación de chip y control'],
    icono: 'carro',
    urgencia: true,
    grupo: 'Vehículos',
  },
  {
    slug: 'instalacion-de-cerraduras',
    titulo: 'Instalación de cerraduras',
    texto: 'Vendemos e instalamos cerraduras de sobreponer, de embutir, de manija y pomo de las mejores marcas.',
    incluye: ['Producto + instalación', 'Puertas de madera, metálicas y de vidrio', 'Garantía'],
    icono: 'chapa',
    urgencia: false,
    grupo: 'Hogar',
  },
  {
    slug: 'cerraduras-digitales',
    titulo: 'Cerraduras digitales',
    texto: 'Instalamos cerraduras con huella, clave, tarjeta o app y te enseñamos a configurarlas.',
    incluye: ['Yale, Schlage, Kwikset, Philips y más', 'Configuración de usuarios', 'Garantía'],
    icono: 'digital',
    urgencia: false,
    grupo: 'Seguridad',
  },
  {
    slug: 'mantenimiento',
    titulo: 'Mantenimiento preventivo',
    texto: 'Revisamos, lubricamos y ajustamos tus cerraduras antes de que fallen. Planes para hogar, conjuntos y empresas.',
    incluye: ['Plan Hogar', 'Plan Conjunto', 'Plan Empresa'],
    icono: 'herramienta',
    urgencia: false,
    grupo: 'Hogar',
  },
  {
    slug: 'reparacion-de-cerraduras',
    titulo: 'Reparación de chapas',
    texto: 'La chapa está dura, no gira o no cierra bien. La reparamos o te recomendamos cambiarla si ya no tiene arreglo.',
    incluye: ['Lubricación y ajuste', 'Cambio de piezas', 'Alineación de la puerta'],
    icono: 'herramienta',
    urgencia: true,
    grupo: 'Hogar',
  },
  {
    slug: 'llave-partida',
    titulo: 'Llave partida o atascada',
    texto: 'Extraemos la llave rota del cilindro sin dañarlo y te hacemos una copia nueva.',
    incluye: ['Puertas, candados y vehículos', 'Copia de la llave', 'Revisión del cilindro'],
    icono: 'llave',
    urgencia: true,
    grupo: 'Hogar',
  },
  {
    slug: 'apertura-de-vehiculos',
    titulo: 'Apertura de vehículos',
    texto: 'Dejaste las llaves adentro del carro: hacemos la apertura sin dañar la puerta ni la chapa.',
    incluye: ['Carros y camionetas', 'Apertura de baúl', 'Motos'],
    icono: 'carro',
    urgencia: true,
    grupo: 'Vehículos',
  },
  {
    slug: 'robo-o-forzamiento',
    titulo: 'Después de un robo',
    texto: 'Si forzaron tu puerta, salimos de inmediato a cambiar las guardas y reforzar la cerradura.',
    incluye: ['Cambio inmediato de guardas', 'Reparación de marco y chapa', 'Refuerzo con cerrojo'],
    icono: 'escudo',
    urgencia: true,
    grupo: 'Seguridad',
  },
  {
    slug: 'cerrojos-de-seguridad',
    titulo: 'Cerrojos y alta seguridad',
    texto: 'Reforzamos tu puerta principal con cerrojos antitaladro, multipunto y cilindros de alta seguridad.',
    incluye: ['Cerrojos de doble cilindro', 'Escudos antitaladro', 'Cerraduras multipunto'],
    icono: 'escudo',
    urgencia: false,
    grupo: 'Seguridad',
  },
  {
    slug: 'cajas-fuertes',
    titulo: 'Cajas fuertes',
    texto: 'Apertura de cajas fuertes bloqueadas, cambio de combinación y venta e instalación de cajas nuevas.',
    incluye: ['Apertura', 'Cambio de clave', 'Venta, anclaje e instalación'],
    icono: 'caja',
    urgencia: true,
    grupo: 'Seguridad',
  },
  {
    slug: 'cerraduras-electricas',
    titulo: 'Cerraduras eléctricas y portones',
    texto: 'Instalamos y reparamos cerraduras eléctricas, citófonos de apertura y controles para portones.',
    incluye: ['Porterías de edificios', 'Rejas y portones', 'Control remoto y huella'],
    icono: 'rayo',
    urgencia: false,
    grupo: 'Conjuntos y empresas',
  },
  {
    slug: 'llave-maestra',
    titulo: 'Llave maestra',
    texto: 'Sistemas de amaestramiento: cada quien abre su puerta y la administración abre todas con una sola llave.',
    incluye: ['Conjuntos y edificios', 'Oficinas y hoteles', 'Diseño del sistema'],
    icono: 'edificio',
    urgencia: false,
    grupo: 'Conjuntos y empresas',
  },
  {
    slug: 'candados-y-rejas',
    titulo: 'Candados y rejas',
    texto: 'Apertura de candados, cambio de portacandados y venta de candados de alta resistencia.',
    incluye: ['Apertura de candados', 'Portacandados reforzados', 'Venta de candados'],
    icono: 'chapa',
    urgencia: true,
    grupo: 'Seguridad',
  },
  {
    slug: 'muebles-y-buzones',
    titulo: 'Muebles, buzones y lockers',
    texto: 'Cerraduras para cajones, archivadores, buzones, lockers y vitrinas, mecánicas o digitales.',
    incluye: ['Apertura', 'Cambio de chapa', 'Cerraduras digitales para mueble'],
    icono: 'caja',
    urgencia: false,
    grupo: 'Conjuntos y empresas',
  },
];

export const serviciosPopulares = servicios.slice(0, 6);
export const serviciosUrgencia = servicios.filter((s) => s.urgencia);
export const gruposServicio = ['Hogar', 'Vehículos', 'Seguridad', 'Conjuntos y empresas'] as const;

// Página de cada servicio. Llaves de carro y mantenimiento ya tienen su página propia.
const paginasPropias: Record<string, string> = { 'llaves-de-carro': '/llaves-de-carro', mantenimiento: '/mantenimiento' };
export const urlServicio = (slug: string) => paginasPropias[slug] ?? `/servicios/${slug}`;
export const serviciosConPagina = servicios.filter((s) => !paginasPropias[s.slug]);

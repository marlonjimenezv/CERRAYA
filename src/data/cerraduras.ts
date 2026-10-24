// Cerraduras que Cerraya vende e instala.
// Uso interno: los precios base son precios de mercado consultados en Homecenter Colombia el 24 de octubre de 2026
// (producto solo, sin instalación). `fuenteUrl` sirve para actualizarlos. En el sitio no se menciona la fuente.

export const fechaConsulta = '24 de octubre de 2026';

// Margen de Cerraya sobre el precio de mercado, en %. Con 0 se vende a precio de mercado.
export const ajustePrecioPct = 0;

// Valor (COP) que se suma al precio de un tipo para venderlo "con instalación incluida".
// Referencia de mercado en Bogotá (oct 2026): instalar una digital cuesta entre $150.000 y $350.000
// (madera ~$180.000-$250.000; metálica o de seguridad ~$280.000-$350.000).
// Con 0 no hay instalación incluida y la promoción queda apagada.
export const instalacionIncluida: Record<string, number> = { digitales: 0 };

export function precioVenta(precioBase: number, tipo = '') {
  const conMargen = ajustePrecioPct ? Math.ceil((precioBase * (1 + ajustePrecioPct / 100)) / 1000) * 1000 - 100 : precioBase;
  return conMargen + (instalacionIncluida[tipo] ?? 0);
}

export type Modelo = {
  marca: string;
  nombre: string;
  precio: number;
  fuente?: string;
};

export type TipoCerradura = {
  slug: string;
  nombre: string;
  resumen: string;
  descripcion: string;
  usoIdeal: string[];
  aFavor: string[];
  tenerEnCuenta: string[];
  seguridad: 1 | 2 | 3 | 4 | 5;
  marcas: string[];
  fuenteUrl: string;
  modelos: Modelo[];
};

export const tiposCerradura: TipoCerradura[] = [
  {
    slug: 'digitales',
    nombre: 'Cerraduras digitales e inteligentes',
    resumen: 'Abren con huella, clave, tarjeta, app o reconocimiento facial. Adiós a las llaves perdidas.',
    descripcion:
      'Reemplazan o complementan la cerradura de la puerta principal con apertura electrónica. Las inteligentes se conectan por wifi o Bluetooth para abrir desde el celular, dar claves temporales y ver quién entró.',
    usoIdeal: ['Puerta principal de casas y apartamentos', 'Apartamentos en arriendo o Airbnb', 'Oficinas con varias personas entrando'],
    aFavor: ['Sin llaves que perder ni copiar', 'Claves temporales para visitas y empleados', 'Historial de aperturas en los modelos inteligentes'],
    tenerEnCuenta: ['Funcionan con baterías: hay que cambiarlas cada cierto tiempo', 'Verificar el grosor de la puerta antes de comprar', 'Conviene que tengan llave mecánica de respaldo'],
    seguridad: 4,
    marcas: ['Yale', 'Schlage', 'Kwikset', 'Philips', 'MH Security Locks', 'Zerrutti', 'Smartlock', 'Elite'],
    fuenteUrl: 'https://www.homecenter.com.co/homecenter-co/category/cat740127/cerraduras-inteligentes-y-digitales/',
    modelos: [
      { marca: 'Yale', nombre: 'Cerradura digital YMF40 con kit Yale Connect', precio: 2399900 },
      { marca: 'Yale', nombre: 'Kit Yale Connect+ con cerradura digital YMF30', precio: 1384900 },
      { marca: 'Zerrutti', nombre: 'Cerradura digital inteligente 8035', precio: 1042900 },
      { marca: 'MH Security Locks', nombre: 'Cerradura inteligente HC721 con reconocimiento facial', precio: 944900 },
      { marca: 'Zerrutti', nombre: 'Cerradura digital inteligente 8010', precio: 870900 },
      { marca: 'Smartlock', nombre: 'Cerradura inteligente TPSH720, 5 tipos de apertura', precio: 719900 },
      { marca: 'MH Security Locks', nombre: 'Cerradura inteligente HC321, 5 tipos de apertura', precio: 629900 },
      { marca: 'MH Security Locks', nombre: 'Cerradura digital de manija Ibiza', precio: 435900 },
      { marca: 'Kwikset', nombre: 'Cerrojo electrónico Powerbolt 250 con teclado', precio: 419900 },
      { marca: 'Schlage', nombre: 'Cerradura digital de sobreponer S-480 negra', precio: 359900 },
      { marca: 'Philips', nombre: 'Pomo digital PH120', precio: 349900, fuente: 'Tienda Yale Colombia' },
      { marca: 'Yale', nombre: 'Manija digital biométrica Bari negra', precio: 322900 },
      { marca: 'Elite', nombre: 'Cerradura inteligente SL2000L (puertas hasta 6 cm)', precio: 149900 },
    ],
  },
  {
    slug: 'cerrojos',
    nombre: 'Cerrojos de seguridad',
    resumen: 'El refuerzo clásico de la puerta principal: un pasador macizo que entra profundo en el marco.',
    descripcion:
      'Se instalan por encima de la cerradura principal para añadir un segundo punto de cierre. Los de doble cilindro abren con llave por ambos lados y los de mariposa se giran a mano desde adentro.',
    usoIdeal: ['Puerta principal', 'Puertas que dan a patios o terrazas', 'Locales comerciales'],
    aFavor: ['Gran resistencia a la palanca y al golpe', 'Económicos frente a otras soluciones', 'Hay modelos con escudo antitaladro y llave multipunto'],
    tenerEnCuenta: ['El doble cilindro exige tener la llave a mano en caso de emergencia', 'El marco debe estar en buen estado para que el cerrojo cumpla su función'],
    seguridad: 4,
    marcas: ['Yale', 'Schlage', 'KL Security', 'Zerrutti', 'Lock', 'Fixser'],
    fuenteUrl: 'https://www.homecenter.com.co/homecenter-co/category/cat10672/cerrojos-de-seguridad/',
    modelos: [
      { marca: 'Schlage', nombre: 'Cerrojo doble cilindro satín cromo', precio: 279900 },
      { marca: 'Yale', nombre: 'Cerrojo doble niquelado, llave multipunto', precio: 211900 },
      { marca: 'Yale', nombre: 'Cerrojo sencillo 170 multipunto', precio: 199900 },
      { marca: 'KL Security', nombre: 'Cerrojo Titanium acero 304 macizo, llave multipunto', precio: 199900 },
      { marca: 'Zerrutti', nombre: 'Cerrojo de seguridad Z500 con escudo antitaladro', precio: 151900 },
      { marca: 'Yale', nombre: 'Cerrojo Viena satinado, llave y mariposa', precio: 139900 },
      { marca: 'KL Security', nombre: 'Cerrojo KL201 cuadrado negro', precio: 124900 },
      { marca: 'Lock', nombre: 'Cerrojo función doble en acero inoxidable', precio: 102900 },
      { marca: 'Schlage', nombre: 'Cerrojo doble cromo mate', precio: 82900 },
      { marca: 'KL Security', nombre: 'Cerrojo 107 negro, llave y mariposa', precio: 69900 },
      { marca: 'Fixser', nombre: 'Cerrojo doble satinado', precio: 49900 },
    ],
  },
  {
    slug: 'sobreponer',
    nombre: 'Cerraduras de sobreponer',
    resumen: 'Van montadas sobre la cara interior de la puerta. Las más comunes en puertas principales de Bogotá.',
    descripcion:
      'La caja de la cerradura queda por dentro de la puerta, a la vista. Se consiguen con pestillo de resbalón, doble pestillo y llaves de puntos o multipunto, que son mucho más difíciles de copiar.',
    usoIdeal: ['Puertas principales de madera o metálicas', 'Puertas de patio y servicio', 'Reemplazo rápido de una cerradura dañada'],
    aFavor: ['Instalación sencilla y reparación rápida', 'Amplio rango de precios', 'Versiones con llave multipunto de alta seguridad'],
    tenerEnCuenta: ['Viene en versión izquierda o derecha: hay que medir el sentido de apertura', 'Revisar la distancia (50, 60 o 70 mm) para que coincida con la puerta'],
    seguridad: 3,
    marcas: ['Yale', 'Inafer', 'Lock', 'MH Security Locks', 'KL Security', 'Travex'],
    fuenteUrl: 'https://www.homecenter.com.co/homecenter-co/k/cerradura-de-sobreponer',
    modelos: [
      { marca: 'Yale', nombre: 'Cerradura de sobreponer 987, 70 mm, llave multipunto', precio: 224900 },
      { marca: 'Yale', nombre: 'Cerradura de sobreponer 396 Plus', precio: 206900 },
      { marca: 'Yale', nombre: 'Cerradura de sobreponer 396-RS, 60 mm', precio: 189900 },
      { marca: 'Yale', nombre: 'Cerradura de sobreponer 107', precio: 162900 },
      { marca: 'Travex', nombre: 'Cerradura de sobreponer 987 negra, 70 mm', precio: 134900 },
      { marca: 'Lock', nombre: 'Cerradura de sobreponer con llave de puntos', precio: 108900 },
      { marca: 'MH Security Locks', nombre: 'Cerradura de sobreponer 8770', precio: 93900 },
      { marca: 'Inafer', nombre: 'Cerradura de sobreponer C999, 70 mm', precio: 88900 },
      { marca: 'Inafer', nombre: 'Cerradura de sobreponer Supra, 50 mm', precio: 48900 },
      { marca: 'Yale', nombre: 'Cerradura de sobreponer Phillips 2250', precio: 37900 },
    ],
  },
  {
    slug: 'embutir',
    nombre: 'Cerraduras de embutir y multipunto',
    resumen: 'Quedan dentro del espesor de la puerta y cierran con varios bulones a la vez.',
    descripcion:
      'La caja va incrustada en la puerta, así que por fuera solo se ven la manija y el cilindro. Los modelos de 4 bulones o multipunto reparten el cierre en varios puntos y son los preferidos para puertas de seguridad.',
    usoIdeal: ['Puertas de seguridad', 'Puertas principales de diseño', 'Casas y apartamentos que buscan máxima protección'],
    aFavor: ['Acabado limpio: la cerradura no se ve', 'Varios puntos de cierre', 'Muy resistentes al forzamiento'],
    tenerEnCuenta: ['La instalación exige calar la puerta: debe hacerla un cerrajero', 'Cambiarla luego por otro modelo puede requerir ajustes en la puerta'],
    seguridad: 5,
    marcas: ['Yale', 'MH Security Locks', 'Fixser'],
    fuenteUrl: 'https://www.homecenter.com.co/homecenter-co/category/cat10660/cerraduras-y-chapas/',
    modelos: [
      { marca: 'Yale', nombre: 'Cerradura de incrustar 4 bulones, placa Bari', precio: 379900 },
      { marca: 'MH Security Locks', nombre: 'Cerradura principal 4 pasadores, manija placa larga', precio: 339900 },
      { marca: 'Fixser', nombre: 'Cerradura de incrustar 4 bulones, 2 piezas, cuadrada negra', precio: 249900 },
    ],
  },
  {
    slug: 'manija-y-pomo',
    nombre: 'Cerraduras de manija y pomo',
    resumen: 'Para entradas, alcobas y baños. Diseño y comodidad en el día a día.',
    descripcion:
      'Las cerraduras tubulares de manija o de pomo (bola) se usan en puertas interiores y, con cilindro de llave, en entradas secundarias. Hay versiones de entrada (con llave), alcoba (con seguro) y baño (con seguro y desbloqueo exterior).',
    usoIdeal: ['Alcobas, baños y estudios', 'Oficinas', 'Entradas secundarias, junto con un cerrojo'],
    aFavor: ['Fáciles de usar, también para niños y adultos mayores', 'Gran variedad de diseños y acabados', 'Cambio rápido'],
    tenerEnCuenta: ['Por sí solas no son de alta seguridad para la puerta principal', 'Elegir la función correcta: entrada, alcoba o baño'],
    seguridad: 2,
    marcas: ['Yale', 'Kwikset', 'Schlage', 'KL Security', 'MH Security Locks', 'Fixser'],
    fuenteUrl: 'https://www.homecenter.com.co/homecenter-co/k/cerradura-manija',
    modelos: [
      { marca: 'Yale', nombre: 'Manija Bari Black de entrada', precio: 229900 },
      { marca: 'Yale', nombre: 'Manija Bari de entrada', precio: 178900 },
      { marca: 'Kwikset', nombre: 'Manija Balboa níquel satinado para alcoba', precio: 129900 },
      { marca: 'Yale', nombre: 'Manija Alaska de entrada principal', precio: 122900 },
      { marca: 'MH Security Locks', nombre: 'Manija cuadrada para alcoba', precio: 119900 },
      { marca: 'Yale', nombre: 'Manija Austin satín de entrada', precio: 96900 },
      { marca: 'KL Security', nombre: 'Manija tubular de entrada KL113E', precio: 86900 },
      { marca: 'Fixser', nombre: 'Manija de entrada anticado', precio: 70900 },
      { marca: 'Fixser', nombre: 'Manija de baño satín', precio: 65900 },
      { marca: 'Fixser', nombre: 'Pomo de bola satín para alcoba', precio: 39900 },
    ],
  },
  {
    slug: 'electricas',
    nombre: 'Cerraduras eléctricas y control de acceso',
    resumen: 'Para porterías, conjuntos y portones: se abren con un botón, control remoto o huella.',
    descripcion:
      'Las cerraduras eléctricas se conectan a un pulsador, citófono o control remoto para abrir a distancia. Son el estándar en edificios, conjuntos y locales con acceso controlado.',
    usoIdeal: ['Porterías de edificios y conjuntos', 'Portones y rejas', 'Oficinas y locales con recepción'],
    aFavor: ['Apertura a distancia desde portería o citófono', 'Se integran con control remoto, huella o app', 'Cierre automático al pasar'],
    tenerEnCuenta: ['Necesitan cableado y fuente de energía', 'Conviene prever qué pasa si se va la luz'],
    seguridad: 3,
    marcas: ['Yale'],
    fuenteUrl: 'https://www.homecenter.com.co/homecenter-co/k/cerradura-electrica',
    modelos: [
      { marca: 'Yale', nombre: 'Kit Yale Connect + cerradura eléctrica', precio: 1022900 },
      { marca: 'Yale', nombre: 'Cerradura eléctrica con control remoto', precio: 506900 },
      { marca: 'Yale', nombre: 'Combo cerradura eléctrica', precio: 425900 },
      { marca: 'Yale', nombre: 'Cerradura eléctrica Boto, 60 mm', precio: 283900 },
      { marca: 'Yale', nombre: 'Acceso biométrico Autonom', precio: 269900 },
    ],
  },
  {
    slug: 'cajas-fuertes',
    nombre: 'Cajas fuertes',
    resumen: 'Para documentos, efectivo y joyas. Digitales, con huella y resistentes al fuego.',
    descripcion:
      'Desde cajas pequeñas para un clóset hasta modelos resistentes al fuego y al agua. Una caja fuerte protege de verdad solo si queda bien anclada a la pared o al piso.',
    usoIdeal: ['Hogares', 'Oficinas y consultorios', 'Locales con manejo de efectivo'],
    aFavor: ['Protección de documentos y valores', 'Apertura con clave o huella', 'Modelos resistentes al fuego'],
    tenerEnCuenta: ['El anclaje es lo que evita que se la lleven completa', 'Guardar la llave de emergencia fuera de la caja'],
    seguridad: 4,
    marcas: ['Yale', 'SentrySafe', 'Fixser', 'Karson'],
    fuenteUrl: 'https://www.homecenter.com.co/homecenter-co/k/caja-fuerte',
    modelos: [
      { marca: 'SentrySafe', nombre: 'Caja fuerte contra fuego y agua, 34,8 litros', precio: 1499900 },
      { marca: 'Fixser', nombre: 'Caja de seguridad antifuego, 32 litros', precio: 699900 },
      { marca: 'Fixser', nombre: 'Caja de seguridad digital, 54 litros', precio: 559900 },
      { marca: 'Yale', nombre: 'Caja fuerte digital para portátil, 43 × 35 × 20 cm', precio: 399900 },
      { marca: 'Yale', nombre: 'Caja fuerte digital, 8,5 litros', precio: 291900 },
      { marca: 'Fixser', nombre: 'Caja fuerte con huella, 8,5 litros', precio: 286900 },
      { marca: 'Yale', nombre: 'Caja fuerte mediana, 25 × 35 × 25 cm', precio: 279900 },
      { marca: 'Karson', nombre: 'Caja de seguridad, 16 litros', precio: 209900 },
    ],
  },
  {
    slug: 'candados',
    nombre: 'Candados',
    resumen: 'Para rejas, bodegas, portones y equipaje. De gancho protegido, acorazados y TSA.',
    descripcion:
      'Un buen candado se reconoce por el gancho: entre más protegido y grueso, más difícil de cortar. Los acorazados y de tipo sueco cubren el gancho casi por completo.',
    usoIdeal: ['Rejas y portones', 'Bodegas y locales', 'Equipaje (candados TSA)'],
    aFavor: ['Portátiles y fáciles de instalar', 'Modelos acorazados de alta resistencia al corte'],
    tenerEnCuenta: ['El portacandado debe ser tan fuerte como el candado', 'Elegir el tamaño según el grosor del gancho que admite el portacandado'],
    seguridad: 3,
    marcas: ['Yale'],
    fuenteUrl: 'https://www.homecenter.com.co/homecenter-co/k/candado',
    modelos: [
      { marca: 'Yale', nombre: 'Candado 161 acorazado, 90 mm', precio: 196900 },
      { marca: 'Yale', nombre: 'Candado tipo sueco 120, 40 mm', precio: 156900 },
      { marca: 'Yale', nombre: 'Candado 800 de gancho protegido, 70 mm', precio: 130900 },
      { marca: 'Yale', nombre: 'Candado 162, 80 mm', precio: 113900 },
      { marca: 'Yale', nombre: 'Candado 700, 50 mm', precio: 84900 },
      { marca: 'Yale', nombre: 'Candado YTP2 TSA para equipaje', precio: 54900 },
      { marca: 'Yale', nombre: 'Candado YP1', precio: 42900 },
    ],
  },
  {
    slug: 'muebles',
    nombre: 'Cerraduras para muebles',
    resumen: 'Para cajones, archivadores, lockers y vitrinas, mecánicas o digitales.',
    descripcion:
      'Chapas pequeñas para proteger cajones, archivadores, lockers o vitrinas. Las digitales permiten abrir con clave o tarjeta sin llaves.',
    usoIdeal: ['Cajones y archivadores', 'Lockers de empresas y gimnasios', 'Vitrinas'],
    aFavor: ['Económicas', 'Instalación rápida', 'Versiones digitales sin llave'],
    tenerEnCuenta: ['Medir el espesor del mueble', 'Para valores importantes, mejor una caja fuerte'],
    seguridad: 1,
    marcas: ['Yale', 'Fixser'],
    fuenteUrl: 'https://www.homecenter.com.co/homecenter-co/category/cat10660/cerraduras-y-chapas/',
    modelos: [
      { marca: 'Yale', nombre: 'Cerradura digital para mueble YF67', precio: 140900 },
      { marca: 'Fixser', nombre: 'Chapa para cajón niquelada, 19 × 22 mm', precio: 10900 },
    ],
  },
];

export const marcasDestacadas = ['Yale', 'Schlage', 'Kwikset', 'Philips', 'KL Security', 'MH Security Locks', 'Zerrutti', 'Inafer', 'Lock', 'SentrySafe'];

export function rangoPrecios(tipo: TipoCerradura) {
  const precios = tipo.modelos.map((m) => precioVenta(m.precio, tipo.slug));
  return { desde: Math.min(...precios), hasta: Math.max(...precios) };
}

export function pesos(valor: number) {
  return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(valor);
}

// Productos de la tienda (todos los modelos en una sola lista).
// Para poner la foto real de un producto: guardar src/assets/cerraduras/<id>.jpg (o .png / .webp).
export type Producto = { id: string; tipo: string; tipoNombre: string; marca: string; nombre: string; precio: number; seguridad: number };

export function idModelo(m: Pick<Modelo, 'marca' | 'nombre'>) {
  return `${m.marca}-${m.nombre}`
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

export const productos: Producto[] = tiposCerradura.flatMap((t) =>
  t.modelos.map((m) => ({
    id: idModelo(m),
    tipo: t.slug,
    tipoNombre: t.nombre,
    marca: m.marca,
    nombre: m.nombre,
    precio: precioVenta(m.precio, t.slug),
    seguridad: t.seguridad,
  })),
);

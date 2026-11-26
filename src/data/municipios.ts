// Municipios cercanos con página propia (/cerrajero-en/<slug>). No se enlazan desde el inicio:
// solo desde cobertura, la zona occidente y las localidades vecinas, para ayudar al SEO sin mostrarlos de más.
export type Municipio = {
  slug: string;
  nombre: string; // como se muestra
  nombreLargo: string; // para títulos y Google
  barrios: string[];
  vecinasBogota: string[]; // slugs de localidades de Bogotá cercanas
  texto: string;
  casos: { titulo: string; texto: string; href: string }[];
};

export const municipios: Municipio[] = [
  {
    slug: 'funza',
    nombre: 'Funza',
    nombreLargo: 'Funza, Cundinamarca',
    barrios: ['Centro', 'Ciudad Jardín', 'Renacer', 'La Fortuna', 'Senderos', 'Nueva Gerona', 'Altos de Gualí', 'El Hato', 'Siete Trojes', 'Siberia'],
    vecinasBogota: ['fontibon', 'engativa'],
    texto:
      'Funza tiene conjuntos residenciales nuevos, casas en el centro y una zona industrial grande hacia Siberia. Atendemos aperturas, cambio de guardas y cerraduras en casas y apartamentos, y puertas de vidrio, control de acceso y cámaras en bodegas, oficinas y locales.',
    casos: [
      { titulo: 'Te quedaste por fuera', texto: 'Aperturas de casas y apartamentos sin dañar la puerta en Ciudad Jardín, Senderos, Nueva Gerona y todo Funza.', href: '/servicios/apertura-de-puertas' },
      { titulo: 'Bodegas y empresas', texto: 'Cerraduras de alta seguridad, puertas de vidrio, electroimanes y control de acceso para bodegas y oficinas de la zona industrial y Siberia.', href: '/servicios/electroimanes-y-control-de-acceso' },
      { titulo: 'Conjuntos residenciales', texto: 'Cambio de guardas, llave maestra y mantenimiento de porterías para conjuntos de Funza.', href: '/servicios/llave-maestra' },
      { titulo: 'Llaves adentro del carro', texto: 'Abrimos carros y camionetas sin daños en Funza y la vía a Bogotá.', href: '/servicios/apertura-de-vehiculos' },
    ],
  },
  {
    slug: 'madrid-cundinamarca',
    nombre: 'Madrid',
    nombreLargo: 'Madrid, Cundinamarca',
    barrios: ['Centro', 'La Prosperidad', 'San Pablo', 'El Triunfo', 'Lorena', 'Serrezuela', 'La Virgen', 'Hacienda Casablanca', 'Alameda del Río', 'Altos de Madrid'],
    vecinasBogota: ['fontibon', 'kennedy'],
    texto:
      'Madrid creció con conjuntos de varias torres, como los de La Prosperidad y Hacienda Casablanca, además de casas en el centro y empresas sobre la vía a Facatativá. Atendemos aperturas, cambio de guardas, cerraduras digitales y cámaras para hogares, conjuntos y negocios.',
    casos: [
      { titulo: 'Te quedaste por fuera', texto: 'Aperturas sin daños en La Prosperidad, Hacienda Casablanca, el centro y todo Madrid.', href: '/servicios/apertura-de-puertas' },
      { titulo: 'Te mudaste a un conjunto nuevo', texto: 'Cambio de guardas para que nadie más tenga llave de tu apartamento o casa en Madrid.', href: '/servicios/cambio-de-guardas' },
      { titulo: 'Cerraduras digitales y cámaras', texto: 'Cerraduras con huella o clave y cámaras WiFi para casas y apartamentos, configuradas en tu celular.', href: '/cerraduras-con-instalacion' },
      { titulo: 'Llaves adentro del carro', texto: 'Abrimos carros y camionetas sin daños en Madrid y la vía a Bogotá.', href: '/servicios/apertura-de-vehiculos' },
    ],
  },
];

export const municipiosCercaDe = (slugLocalidad: string) => municipios.filter((m) => m.vecinasBogota.includes(slugLocalidad));

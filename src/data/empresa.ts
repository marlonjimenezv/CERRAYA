// Datos del negocio: única fuente para todo el sitio y para los PDF de cotización.
// Lo marcado con CONFIRMAR es provisional.

const telefono = '573001833765'; // con 57 y sin espacios: se usa para llamadas y WhatsApp
const telefonoVisible = '300 183 3765';

export const empresa = {
  nombre: 'Cerraya',
  razonSocial: 'Cerraya', // CONFIRMAR: razón social para la cotización
  nit: '', // CONFIRMAR: NIT o cédula para la cotización
  lema: 'Cerrajería de confianza en Bogotá',
  ciudad: 'Bogotá',
  direccion: '', // CONFIRMAR: dirección del taller, si la hay
  email: 'contacto@cerraya.com', // CONFIRMAR
  sitio: 'https://cerraya.com',
  telefono,
  telefonoVisible,
  horario: 'Atención 24/7, todos los días',
  experiencia: 25, // años de experiencia de los cerrajeros: es el dato principal de confianza
  resenas: { calificacion: '5.0', total: 54 }, // el total no se muestra: son pocas todavía
  // Perfil de Empresa en Google (CID de la ficha CERRAYA en Google Maps).
  enlacePerfilGoogle: 'https://maps.google.com/?cid=13926752197872837465',
  // CONFIRMAR: cambiar por el enlace "Pedir reseñas" del Perfil de Empresa (g.page/r/...), que abre directo el formulario.
  enlaceResenaGoogle: 'https://maps.google.com/?cid=13926752197872837465',
};

export const tel = `tel:+${telefono}`;

export function whatsapp(mensaje = 'Hola Cerraya, necesito un cerrajero') {
  return `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
}

// Google Ads y Analytics. Mientras estén vacíos no se carga ningún script.
// En Google Ads: Objetivos → Conversiones → crear una por cada acción y copiar "AW-…/etiqueta".
export const medicion = {
  googleAdsId: '', // ej. 'AW-123456789'
  ga4Id: '', // ej. 'G-XXXXXXX'
  conversiones: {
    llamada: '', // etiqueta de conversión para clic en "Llamar"
    whatsapp: '', // clic en WhatsApp
    formulario: '', // envío de cotización o de aliado (se dispara en /gracias)
  },
};

export const localidades = [
  'Usaquén', 'Chapinero', 'Santa Fe', 'San Cristóbal', 'Usme', 'Tunjuelito', 'Bosa', 'Kennedy',
  'Fontibón', 'Engativá', 'Suba', 'Barrios Unidos', 'Teusaquillo', 'Los Mártires', 'Antonio Nariño',
  'Puente Aranda', 'La Candelaria', 'Rafael Uribe Uribe', 'Ciudad Bolívar',
];

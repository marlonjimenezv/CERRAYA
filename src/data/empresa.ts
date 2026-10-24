// Datos del negocio: única fuente para todo el sitio y para los PDF de cotización.
// Lo marcado con CONFIRMAR es provisional.

const telefono = '573000000000'; // CONFIRMAR: número real, con 57 y sin espacios
const telefonoVisible = '300 000 0000'; // CONFIRMAR

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
  horario: 'Atención 24/7, todos los días', // CONFIRMAR
  experiencia: 25, // años de experiencia de los cerrajeros: es el dato principal de confianza
  resenas: { calificacion: '5.0', total: 54 }, // el total no se muestra: son pocas todavía
  // CONFIRMAR: enlace "Pedir reseñas" del Perfil de Empresa en Google (g.page/r/...)
  enlaceResenaGoogle: 'https://www.google.com/maps/search/?api=1&query=Cerraya+cerrajer%C3%ADa+Bogot%C3%A1',
  enlacePerfilGoogle: 'https://www.google.com/maps/search/?api=1&query=Cerraya+cerrajer%C3%ADa+Bogot%C3%A1',
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

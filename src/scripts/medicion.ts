// Medición de conversiones para Google Ads / GA4 / Google Tag Manager.
// Cada clic en "Llamar" o "WhatsApp" y cada formulario enviado queda registrado.
import { medicion } from '../data/empresa';

type Accion = 'llamada' | 'whatsapp' | 'formulario';

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function registrar(accion: Accion, detalle = location.pathname) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: `cerraya_${accion}`, detalle });
  if (!window.gtag) return;
  const etiqueta = medicion.conversiones[accion];
  if (medicion.googleAdsId && etiqueta) {
    window.gtag('event', 'conversion', { send_to: `${medicion.googleAdsId}/${etiqueta}` });
  }
  if (medicion.ga4Id) {
    window.gtag('event', `cerraya_${accion}`, { pagina: detalle });
  }
}

export function escucharClics() {
  document.addEventListener('click', (evento) => {
    const enlace = (evento.target as Element | null)?.closest('a');
    const href = enlace?.getAttribute('href') ?? '';
    if (href.startsWith('tel:')) registrar('llamada');
    else if (href.includes('wa.me/')) registrar('whatsapp');
  });
}

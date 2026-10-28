// Datos estructurados (schema.org) del negocio para Google: un solo lugar para nombre, teléfono,
// horario, zona de servicio y ficha de Google Maps, que deben coincidir con el Perfil de Empresa.
import { empresa } from './empresa';
import { localidadesBogota } from './localidades';

export function negocioLocal(extra: Record<string, unknown> = {}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Locksmith',
    '@id': `${empresa.sitio}/#negocio`,
    name: 'CERRAYA',
    alternateName: 'Cerraya Cerrajería',
    description: `${empresa.lema}. Cerrajeros con más de ${empresa.experiencia} años de experiencia: aperturas domiciliarias, cambio de guardas, llaves de carro y venta e instalación de cerraduras.`,
    url: empresa.sitio,
    logo: `${empresa.sitio}/img/logo-cerraya.png`,
    image: `${empresa.sitio}/img/og-cerraya.png`,
    telephone: `+${empresa.telefono}`,
    priceRange: '$$',
    address: { '@type': 'PostalAddress', addressLocality: 'Bogotá', addressRegion: 'Bogotá D.C.', addressCountry: 'CO' },
    geo: { '@type': 'GeoCoordinates', latitude: 4.6482976, longitude: -74.107807 },
    hasMap: empresa.enlacePerfilGoogle,
    sameAs: [empresa.enlacePerfilGoogle],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59',
      },
    ],
    areaServed: [
      { '@type': 'City', name: 'Bogotá' },
      ...localidadesBogota.map((l) => ({ '@type': 'AdministrativeArea', name: `${l.nombre}, Bogotá` })),
    ],
    ...extra,
  };
}

export function migas(items: { nombre: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((x, i) => ({ '@type': 'ListItem', position: i + 1, name: x.nombre, item: x.url })),
  };
}

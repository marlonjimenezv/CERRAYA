// Localidades de Bogotá que cubre Cerraya, con algunos barrios conocidos de cada una.
// Cada localidad tiene su página /cerrajero-en/<slug> para las búsquedas tipo "cerrajero en Suba".

export type Localidad = { slug: string; nombre: string; barrios: string[] };

export const localidadesBogota: Localidad[] = [
  { slug: 'usaquen', nombre: 'Usaquén', barrios: ['Cedritos', 'Santa Bárbara', 'Country Club', 'Toberín', 'Verbenal', 'San Cristóbal Norte', 'Bella Suiza'] },
  { slug: 'chapinero', nombre: 'Chapinero', barrios: ['Chicó', 'El Retiro', 'Rosales', 'Quinta Camacho', 'Chapinero Alto', 'Chapinero Central', 'Marly'] },
  { slug: 'santa-fe', nombre: 'Santa Fe', barrios: ['La Macarena', 'Las Nieves', 'La Perseverancia', 'San Diego', 'Germania'] },
  { slug: 'san-cristobal', nombre: 'San Cristóbal', barrios: ['20 de Julio', 'San Blas', 'La Victoria', 'Villa Javier', 'La Gloria'] },
  { slug: 'usme', nombre: 'Usme', barrios: ['Usme Centro', 'Santa Librada', 'Yomasa', 'Alfonso López', 'Danubio'] },
  { slug: 'tunjuelito', nombre: 'Tunjuelito', barrios: ['Tunjuelito', 'Venecia', 'San Carlos', 'San Benito', 'Fátima'] },
  { slug: 'bosa', nombre: 'Bosa', barrios: ['Bosa Centro', 'El Recreo', 'Bosa Laureles', 'Brasilia', 'El Porvenir'] },
  { slug: 'kennedy', nombre: 'Kennedy', barrios: ['Kennedy Central', 'Castilla', 'Timiza', 'Patio Bonito', 'Américas', 'Marsella', 'Carvajal'] },
  { slug: 'fontibon', nombre: 'Fontibón', barrios: ['Fontibón Centro', 'Modelia', 'Hayuelos', 'Capellanía', 'Salitre Occidental'] },
  { slug: 'engativa', nombre: 'Engativá', barrios: ['Engativá Pueblo', 'Minuto de Dios', 'Boyacá Real', 'La Floresta', 'Normandía', 'Garcés Navas', 'Álamos'] },
  { slug: 'suba', nombre: 'Suba', barrios: ['Niza', 'Colina Campestre', 'Suba Centro', 'Lisboa', 'Prado Veraniego', 'Mazurén', 'Pontevedra', 'Tibabuyes'] },
  { slug: 'barrios-unidos', nombre: 'Barrios Unidos', barrios: ['Doce de Octubre', 'Siete de Agosto', 'Los Andes', 'Rionegro', 'La Castellana', 'Polo Club'] },
  { slug: 'teusaquillo', nombre: 'Teusaquillo', barrios: ['Galerías', 'Palermo', 'La Soledad', 'Park Way', 'Teusaquillo', 'Nicolás de Federmán', 'Quinta Paredes'] },
  { slug: 'los-martires', nombre: 'Los Mártires', barrios: ['Santa Isabel', 'Paloquemao', 'Ricaurte', 'Voto Nacional', 'La Estanzuela'] },
  { slug: 'antonio-narino', nombre: 'Antonio Nariño', barrios: ['Restrepo', 'Ciudad Berna', 'Santander', 'Policarpa', 'Luna Park'] },
  { slug: 'puente-aranda', nombre: 'Puente Aranda', barrios: ['Ciudad Montes', 'Galán', 'Pensilvania', 'La Alquería', 'Muzú', 'Primavera'] },
  { slug: 'la-candelaria', nombre: 'La Candelaria', barrios: ['La Concordia', 'Egipto', 'Belén', 'Centro Histórico'] },
  { slug: 'rafael-uribe-uribe', nombre: 'Rafael Uribe Uribe', barrios: ['Quiroga', 'Olaya', 'Marco Fidel Suárez', 'Diana Turbay', 'Molinos'] },
  { slug: 'ciudad-bolivar', nombre: 'Ciudad Bolívar', barrios: ['Arborizadora Alta', 'Candelaria La Nueva', 'Lucero', 'Meissen', 'Perdomo', 'Sierra Morena'] },
];

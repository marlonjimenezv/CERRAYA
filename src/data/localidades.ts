// Localidades de Bogotá que cubre Cerraya, con algunos barrios conocidos de cada una.
// Cada localidad tiene su página /cerrajero-en/<slug> para las búsquedas tipo "cerrajero en Suba".

export type Localidad = { slug: string; nombre: string; barrios: string[] };

export const localidadesBogota: Localidad[] = [
  { slug: 'usaquen', nombre: 'Usaquén', barrios: ['Cedritos', 'Santa Bárbara', 'Country Club', 'Toberín', 'Verbenal', 'San Cristóbal Norte', 'Bella Suiza', 'Santa Ana', 'Los Cedros', 'La Calleja', 'El Contador', 'Barrancas'] },
  { slug: 'chapinero', nombre: 'Chapinero', barrios: ['Chicó', 'El Retiro', 'Rosales', 'Quinta Camacho', 'Chapinero Alto', 'Chapinero Central', 'Marly', 'Pardo Rubio', 'La Cabrera', 'Antiguo Country', 'Lago Gaitán'] },
  { slug: 'santa-fe', nombre: 'Santa Fe', barrios: ['La Macarena', 'Las Nieves', 'La Perseverancia', 'San Diego', 'Germania', 'Bosque Izquierdo', 'Las Cruces', 'Lourdes'] },
  { slug: 'san-cristobal', nombre: 'San Cristóbal', barrios: ['20 de Julio', 'San Blas', 'La Victoria', 'Villa Javier', 'La Gloria', 'Sosiego', 'Bello Horizonte', 'Los Libertadores', 'Altamira'] },
  { slug: 'usme', nombre: 'Usme', barrios: ['Usme Centro', 'Santa Librada', 'Yomasa', 'Alfonso López', 'Danubio', 'La Aurora', 'Comuneros'] },
  { slug: 'tunjuelito', nombre: 'Tunjuelito', barrios: ['Tunjuelito', 'Venecia', 'San Carlos', 'San Benito', 'Fátima', 'Ciudad Tunal', 'Isla del Sol', 'Abraham Lincoln', 'Samoré'] },
  { slug: 'bosa', nombre: 'Bosa', barrios: ['Bosa Centro', 'El Recreo', 'Bosa Laureles', 'Brasilia', 'El Porvenir', 'Bosa Nova', 'La Libertad', 'Olarte', 'Piamonte'] },
  { slug: 'kennedy', nombre: 'Kennedy', barrios: ['Kennedy Central', 'Castilla', 'Timiza', 'Patio Bonito', 'Américas', 'Marsella', 'Carvajal', 'Mandalay', 'Techo', 'Tintal', 'Bavaria'] },
  { slug: 'fontibon', nombre: 'Fontibón', barrios: ['Fontibón Centro', 'Modelia', 'Hayuelos', 'Capellanía', 'Salitre Occidental', 'Zona Franca', 'Versalles', 'Villemar', 'Granjas de Techo'] },
  { slug: 'engativa', nombre: 'Engativá', barrios: ['Engativá Pueblo', 'Minuto de Dios', 'Boyacá Real', 'La Floresta', 'Normandía', 'Garcés Navas', 'Álamos', 'Las Ferias', 'Quirigua', 'Villa Luz', 'Villas de Granada', 'Bachué'] },
  { slug: 'suba', nombre: 'Suba', barrios: ['Niza', 'Colina Campestre', 'Suba Centro', 'Lisboa', 'Prado Veraniego', 'Mazurén', 'Pontevedra', 'Tibabuyes', 'La Alhambra', 'Pasadena', 'Puente Largo', 'Gratamira', 'El Rincón'] },
  { slug: 'barrios-unidos', nombre: 'Barrios Unidos', barrios: ['Doce de Octubre', 'Siete de Agosto', 'Los Andes', 'Rionegro', 'La Castellana', 'Polo Club', 'San Fernando', 'Entre Ríos', 'Los Alcázares', 'Metrópolis'] },
  { slug: 'teusaquillo', nombre: 'Teusaquillo', barrios: ['Galerías', 'Palermo', 'La Soledad', 'Park Way', 'Teusaquillo', 'Nicolás de Federmán', 'Quinta Paredes', 'Salitre Oriental', 'La Esmeralda', 'Pablo VI', 'El Campín'] },
  { slug: 'los-martires', nombre: 'Los Mártires', barrios: ['Santa Isabel', 'Paloquemao', 'Ricaurte', 'Voto Nacional', 'La Estanzuela', 'La Favorita', 'Samper Mendoza', 'El Listón'] },
  { slug: 'antonio-narino', nombre: 'Antonio Nariño', barrios: ['Restrepo', 'Ciudad Berna', 'Santander', 'Policarpa', 'Luna Park', 'La Fragua', 'Villa Mayor', 'Eduardo Frei'] },
  { slug: 'puente-aranda', nombre: 'Puente Aranda', barrios: ['Ciudad Montes', 'Galán', 'Pensilvania', 'La Alquería', 'Muzú', 'Primavera', 'El Tejar', 'Santa Matilde', 'Zona Industrial', 'San Rafael'] },
  { slug: 'la-candelaria', nombre: 'La Candelaria', barrios: ['La Concordia', 'Egipto', 'Belén', 'Centro Histórico', 'La Catedral', 'Santa Bárbara Centro'] },
  { slug: 'rafael-uribe-uribe', nombre: 'Rafael Uribe Uribe', barrios: ['Quiroga', 'Olaya', 'Marco Fidel Suárez', 'Diana Turbay', 'Molinos', 'Marruecos', 'Gustavo Restrepo', 'San Jorge'] },
  { slug: 'ciudad-bolivar', nombre: 'Ciudad Bolívar', barrios: ['Arborizadora Alta', 'Candelaria La Nueva', 'Lucero', 'Meissen', 'Perdomo', 'Sierra Morena', 'Madelena', 'Jerusalén', 'Potosí', 'Arabia'] },
];

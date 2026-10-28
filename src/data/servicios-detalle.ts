// Texto ampliado de cada servicio para su página propia (/servicios/<slug>): ayuda a que Google
// muestre la página exacta cuando alguien busca ese servicio en Bogotá.

export type DetalleServicio = {
  tituloSeo: string; // lo que la gente escribe en Google
  intro: string;
  faq: { p: string; r: string }[];
};

export const detalleServicios: Record<string, DetalleServicio> = {
  'apertura-de-puertas': {
    tituloSeo: 'Apertura de puertas en Bogotá 24/7',
    intro: 'Hacemos aperturas domiciliarias de casas, apartamentos, oficinas y locales sin dañar la puerta ni la cerradura. Salimos de inmediato a cualquier localidad de Bogotá, de día, de noche, domingos y festivos, y antes de cualquier apertura verificamos que el inmueble es tuyo.',
    faq: [
      { p: '¿Cuánto cuesta abrir una puerta?', r: 'Depende del tipo de cerradura, la puerta y la hora. Por teléfono te damos un valor estimado; si al llegar el trabajo resulta distinto, te lo explicamos y tú decides antes de seguir.' },
      { p: '¿Dañan la puerta para abrirla?', r: 'No. Usamos herramienta de apertura sin daños. Solo si la cerradura está rota por dentro hay que cambiarla, y eso lo decides tú.' },
    ],
  },
  'cambio-de-guardas': {
    tituloSeo: 'Cambio de guardas en Bogotá',
    intro: 'Cambiamos el cilindro de tu cerradura y te entregamos llaves nuevas para que nadie más pueda entrar. Es lo primero que recomendamos al mudarte, perder las llaves o después de un intento de robo. Trabajamos cilindros de puntos y multipunto, mucho más difíciles de copiar.',
    faq: [
      { p: '¿Hay que cambiar toda la cerradura?', r: 'Casi nunca. En la mayoría de casos basta con el cilindro. Si la cerradura está vieja o es de baja seguridad, te recomendamos cambiarla completa.' },
      { p: '¿Cuánto se demora?', r: 'Un cambio de guardas suele tomar menos de una hora en sitio.' },
    ],
  },
  'duplicado-de-llaves': {
    tituloSeo: 'Copias de llaves en Bogotá',
    intro: 'Duplicamos llaves de casa, oficina, candados, cerrojos y buzones, incluidas llaves de puntos y de seguridad. Si necesitas varias copias para tu familia, tu conjunto o tu empresa, te las cotizamos por cantidad.',
    faq: [
      { p: '¿Pueden copiar llaves de seguridad?', r: 'Sí, copiamos llaves de puntos y multipunto. Algunas llaves de alta seguridad solo se duplican con la tarjeta de propiedad del cilindro.' },
      { p: '¿Hacen copias a domicilio?', r: 'Sí, para cantidades o junto con otro servicio. Escríbenos y te decimos cómo hacerlo.' },
    ],
  },
  'llaves-de-carro': {
    tituloSeo: 'Llaves de carro en Bogotá: duplicado y fabricación',
    intro: 'Hacemos copias y llaves nuevas para carros y motos, con chip, navaja o control, aunque hayas perdido la original. Vamos hasta donde está el vehículo en Bogotá, cortamos la llave y la programamos en el carro.',
    faq: [
      { p: '¿Pueden hacer una llave si perdí todas?', r: 'Sí. Fabricamos la llave sin la original y la programamos. Necesitamos la tarjeta de propiedad y tu documento.' },
      { p: '¿Trabajan todas las marcas?', r: 'Trabajamos las más comunes en Colombia: Chevrolet, Renault, Mazda, Kia, Toyota, Nissan, Hyundai, Suzuki, Volkswagen y Ford, entre otras.' },
    ],
  },
  'instalacion-de-cerraduras': {
    tituloSeo: 'Instalación de cerraduras en Bogotá',
    intro: 'Vendemos e instalamos cerraduras de sobreponer, de embutir, multipunto, de manija y de pomo de marcas como Yale, Schlage y Kwikset. Te recomendamos la que va con tu puerta y tu presupuesto, la instalamos y te dejamos garantía.',
    faq: [
      { p: '¿Puedo comprar la cerradura y que ustedes solo la instalen?', r: 'Sí. Cotizamos solo la instalación o el producto con instalación, como prefieras.' },
      { p: '¿Instalan en puertas metálicas y de vidrio?', r: 'Sí, en madera, metal, vidrio, aluminio y puertas de seguridad.' },
    ],
  },
  'cerraduras-digitales': {
    tituloSeo: 'Cerraduras digitales en Bogotá: venta e instalación',
    intro: 'Instalamos cerraduras digitales e inteligentes con huella, clave, tarjeta o app, y te dejamos los usuarios configurados. Revisamos antes el grosor y el material de tu puerta para recomendarte un modelo que cierre bien y dure.',
    faq: [
      { p: '¿Qué pasa si se acaban las baterías?', r: 'Las buenas cerraduras avisan cuando las pilas están bajas y tienen una entrada de emergencia para alimentarlas desde afuera, además de llave mecánica de respaldo.' },
      { p: '¿Sirven para apartamentos en arriendo?', r: 'Sí. Puedes dar claves temporales y borrarlas cuando el huésped o inquilino se va.' },
    ],
  },
  mantenimiento: {
    tituloSeo: 'Mantenimiento de cerraduras en Bogotá',
    intro: 'Revisamos, lubricamos y ajustamos tus cerraduras antes de que fallen. Tenemos planes para hogares, conjuntos residenciales y empresas, con visitas programadas e informe de estado.',
    faq: [
      { p: '¿Cada cuánto se hace el mantenimiento?', r: 'En una casa, una o dos veces al año. En conjuntos y empresas, cada tres meses.' },
      { p: '¿Qué incluye?', r: 'Revisión de cada cerradura, lubricación, ajuste de puertas y pestillos y cambio de baterías de cerraduras digitales.' },
    ],
  },
  'reparacion-de-cerraduras': {
    tituloSeo: 'Reparación de chapas y cerraduras en Bogotá',
    intro: 'Si la chapa está dura, no gira o la puerta no cierra bien, la revisamos y la reparamos en sitio. Cuando ya no tiene arreglo te lo decimos claro y te recomendamos un reemplazo.',
    faq: [
      { p: '¿Vale la pena reparar o es mejor cambiar?', r: 'Si el daño es de ajuste o desgaste leve, reparar es más económico. Si la cerradura tiene piezas rotas o es de baja seguridad, conviene cambiarla.' },
      { p: '¿Atienden urgencias?', r: 'Sí, si la puerta no abre o no cierra salimos de inmediato, 24/7.' },
    ],
  },
  'llave-partida': {
    tituloSeo: 'Llave partida o atascada en la chapa, Bogotá',
    intro: 'Extraemos la llave partida del cilindro sin dañarlo y te hacemos una copia nueva en el momento. Atendemos llaves partidas en puertas, candados y vehículos.',
    faq: [
      { p: '¿Hay que cambiar la cerradura si se partió la llave adentro?', r: 'Normalmente no. Sacamos el pedazo y la cerradura sigue funcionando.' },
      { p: '¿Puedo sacarla yo?', r: 'Es mejor no intentarlo con pinzas o pegante: suele empujar el pedazo más adentro y dañar el cilindro.' },
    ],
  },
  'apertura-de-vehiculos': {
    tituloSeo: 'Apertura de carros en Bogotá 24/7',
    intro: 'Si dejaste las llaves dentro del carro, hacemos la apertura sin dañar la puerta, la chapa ni la pintura. También abrimos baúles y motos, y verificamos que el vehículo es tuyo antes de abrir.',
    faq: [
      { p: '¿Qué documentos piden?', r: 'La tarjeta de propiedad o un documento que demuestre que el vehículo es tuyo, y tu cédula.' },
      { p: '¿Atienden en la noche?', r: 'Sí, 24 horas, en cualquier parte de Bogotá.' },
    ],
  },
  'robo-o-forzamiento': {
    tituloSeo: 'Cerrajero después de un robo en Bogotá',
    intro: 'Si forzaron tu puerta o te robaron las llaves, salimos de inmediato a cambiar las guardas, reparar el marco y la chapa, y reforzar la puerta con un cerrojo de seguridad para que esa misma noche duermas tranquilo.',
    faq: [
      { p: '¿Qué hago primero después de un robo?', r: 'Llama a la Policía (123) y no toques la cerradura forzada hasta que se haga el registro. Después llámanos para asegurar la puerta.' },
      { p: '¿Pueden reforzar la puerta?', r: 'Sí, con cerrojos antitaladro, escudos de cilindro y cerraduras multipunto.' },
    ],
  },
  'cerrojos-de-seguridad': {
    tituloSeo: 'Cerrojos de seguridad en Bogotá',
    intro: 'Instalamos cerrojos de doble cilindro, con escudo antitaladro y llave multipunto para reforzar la puerta principal. Un buen cerrojo bien instalado es de las mejoras de seguridad más efectivas por lo que cuesta.',
    faq: [
      { p: '¿Cerrojo de mariposa o de doble cilindro?', r: 'El de mariposa es más práctico en emergencias; el de doble cilindro es más seguro en puertas con vidrio cerca de la chapa.' },
      { p: '¿Sirve en cualquier puerta?', r: 'En casi todas. El marco debe estar firme para que el cerrojo cumpla su función; si no, lo reforzamos.' },
    ],
  },
  'cajas-fuertes': {
    tituloSeo: 'Cajas fuertes en Bogotá: apertura e instalación',
    intro: 'Abrimos cajas fuertes bloqueadas o con la clave olvidada, cambiamos combinaciones y vendemos e instalamos cajas fuertes ancladas a pared o piso, para hogar, oficina y negocio.',
    faq: [
      { p: '¿Abren cualquier caja fuerte?', r: 'Abrimos la mayoría de cajas digitales y mecánicas. Te pedimos demostrar que la caja es tuya.' },
      { p: '¿Por qué anclarla?', r: 'Porque una caja suelta se la pueden llevar completa. El anclaje es lo que la hace segura.' },
    ],
  },
  'cerraduras-electricas': {
    tituloSeo: 'Cerraduras eléctricas y portones en Bogotá',
    intro: 'Instalamos y reparamos cerraduras eléctricas para porterías, rejas y portones, con apertura por citófono, control remoto o huella. Atendemos conjuntos, edificios y locales.',
    faq: [
      { p: '¿Qué pasa si se va la luz?', r: 'Las cerraduras eléctricas tienen apertura con llave mecánica; también se puede instalar respaldo con batería.' },
      { p: '¿Reparan citófonos?', r: 'Reparamos la parte de apertura de la puerta; te asesoramos si el problema es del citófono.' },
    ],
  },
  'llave-maestra': {
    tituloSeo: 'Sistemas de llave maestra en Bogotá',
    intro: 'Diseñamos sistemas de amaestramiento: cada persona abre solo su puerta y la administración abre todas con una sola llave. Ideal para conjuntos, edificios, oficinas, colegios y hoteles.',
    faq: [
      { p: '¿Sirve con las cerraduras que ya tengo?', r: 'Muchas veces sí: se cambian solo los cilindros. Lo revisamos en una visita técnica.' },
      { p: '¿Es seguro?', r: 'Sí. Las llaves maestras se entregan con registro y control de copias.' },
    ],
  },
  'candados-y-rejas': {
    tituloSeo: 'Apertura de candados y rejas en Bogotá',
    intro: 'Abrimos candados sin llave, cambiamos portacandados y te recomendamos candados acorazados o de gancho protegido que resisten el corte. Para rejas, bodegas, locales y portones.',
    faq: [
      { p: '¿Cómo sé si un candado es bueno?', r: 'Fíjate en el gancho: entre más grueso y protegido, más difícil de cortar.' },
      { p: '¿Cambian el portacandado?', r: 'Sí. El portacandado debe ser tan fuerte como el candado.' },
    ],
  },
  'muebles-y-buzones': {
    tituloSeo: 'Cerraduras de muebles, buzones y lockers en Bogotá',
    intro: 'Abrimos y cambiamos chapas de cajones, archivadores, buzones, lockers y vitrinas, mecánicas o digitales. Atendemos hogares, oficinas, gimnasios y conjuntos.',
    faq: [
      { p: '¿Cambian chapas de buzones de conjunto?', r: 'Sí, por unidad o para todo el conjunto con llaves organizadas.' },
      { p: '¿Hay cerraduras digitales para lockers?', r: 'Sí, con clave o tarjeta, sin llaves que se pierdan.' },
    ],
  },
};

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
      { p: '¿Cuánto se demora?', r: 'Depende de la cerradura y del cilindro. Te lo decimos antes de empezar.' },
    ],
  },
  'reparacion-puertas-de-vidrio': {
    tituloSeo: 'Reparación de puertas de vidrio en Bogotá',
    intro: 'Somos especialistas en puertas de vidrio templado: las que golpean al cerrar, arrastran en el piso, se descolgaron, quedaron desniveladas o ya no aseguran. Revisamos bisagras hidráulicas, cerraduras, zócalos y herrajes, y la dejamos funcionando. Atendemos locales, oficinas, edificios, conjuntos y casas en toda Bogotá, también de noche y en festivos.',
    faq: [
      { p: '¿Por qué mi puerta de vidrio golpea o se cierra muy duro?', r: 'Casi siempre es la bisagra hidráulica de piso o el brazo cierrapuertas desgraduado o sin aceite. Se gradúa o se cambia y la puerta vuelve a cerrar suave.' },
      { p: '¿Arreglan una puerta de vidrio descolgada?', r: 'Sí. Revisamos el pivote superior, el zócalo y la bisagra de piso, nivelamos la hoja y cambiamos la pieza que falló.' },
      { p: '¿Atienden locales comerciales de noche?', r: 'Sí. Si tu local no puede cerrar, salimos de inmediato a cualquier hora para que no quede abierto.' },
    ],
  },
  'bisagras-hidraulicas': {
    tituloSeo: 'Bisagras hidráulicas de piso en Bogotá: cambio y reparación',
    intro: 'La bisagra hidráulica de piso (freno de piso) es el corazón de una puerta de vidrio: controla la velocidad, el cierre y que la hoja vuelva a su sitio. Cuando bota aceite, se queda abierta o azota la puerta, la graduamos o la cambiamos por una nueva de marcas como Dorma, Speedy o Yale, con la caja de cemento y la tapa en acero inoxidable.',
    faq: [
      { p: '¿Cómo sé si hay que cambiar la bisagra hidráulica?', r: 'Si bota aceite, la puerta no regresa al centro o cierra de golpe aunque la gradúes, la bisagra ya está vencida y conviene cambiarla.' },
      { p: '¿Hay que romper el piso para cambiarla?', r: 'Normalmente no: la bisagra nueva va en la misma caja. Solo si la caja está dañada o es de otra medida hay que adecuarla.' },
      { p: '¿Cuánto dura una bisagra hidráulica?', r: 'Con buen uso y mantenimiento, varios años. En locales de mucho tráfico conviene revisarla cada seis meses.' },
    ],
  },
  'cerraduras-puertas-de-vidrio': {
    tituloSeo: 'Cerraduras para puertas de vidrio en Bogotá',
    intro: 'Instalamos y cambiamos cerraduras para vidrio templado: chapas de piso, de zócalo, cerraduras centrales para doble hoja, cerrojos con contracerradura y cerraduras digitales para vidrio. El vidrio templado no se puede perforar después de fabricado, por eso elegimos la cerradura que se adapta a tu puerta sin poner en riesgo el vidrio.',
    faq: [
      { p: '¿Se puede poner cualquier cerradura en una puerta de vidrio?', r: 'No. El vidrio templado no se perfora en obra, así que se usan cerraduras de pinza o de zócalo que se ajustan al vidrio, o las perforaciones que ya tiene.' },
      { p: '¿Hay cerraduras digitales para puertas de vidrio?', r: 'Sí, con huella, tarjeta o clave, que se instalan sin perforar el vidrio. Te recomendamos el modelo según tu puerta.' },
    ],
  },
  'apertura-puertas-de-vidrio': {
    tituloSeo: 'Apertura de puertas de vidrio en Bogotá 24/7',
    intro: 'Si la cerradura de la puerta de vidrio de tu local, oficina o portería no abre, o perdiste la llave, hacemos la apertura sin romper el vidrio ni dañar la cerradura. Si hace falta, cambiamos la guarda para que vuelvas a abrir y cerrar con tranquilidad.',
    faq: [
      { p: '¿Rompen el vidrio para abrir?', r: 'No. Trabajamos sobre la cerradura. Romper un vidrio templado es lo último que se haría y nunca sin tu autorización.' },
      { p: '¿Qué piden para abrir un local?', r: 'Un documento que demuestre que eres el dueño, el arrendatario o el encargado del local.' },
    ],
  },
  'vidrio-roto-o-puerta-forzada': {
    tituloSeo: 'Puerta de vidrio forzada o rota en Bogotá: atención urgente',
    intro: 'Si forzaron o rompieron la puerta de vidrio de tu negocio, salimos de inmediato a asegurar el acceso para que no quede abierto: cambiamos cerradura y herrajes dañados y, si el vidrio se rompió, tomamos medidas y gestionamos el vidrio templado nuevo a la medida.',
    faq: [
      { p: '¿Qué hago primero si forzaron mi local?', r: 'Llama a la Policía (123) y no toques nada hasta que hagan el registro. Después llámanos para asegurar la puerta.' },
      { p: '¿Cuánto se demora un vidrio templado nuevo?', r: 'El vidrio templado se fabrica a la medida y toma unos días. Mientras tanto aseguramos el acceso para que el local no quede expuesto.' },
    ],
  },
  'brazos-hidraulicos': {
    tituloSeo: 'Brazos hidráulicos y cierrapuertas en Bogotá',
    intro: 'Instalamos, cambiamos y graduamos brazos cierrapuertas aéreos para puertas de vidrio, aluminio, madera y metálicas. Una puerta que azota o se queda abierta gasta el marco, las bisagras y la cerradura; con el brazo bien graduado cierra sola y sin golpe.',
    faq: [
      { p: '¿Brazo aéreo o bisagra de piso?', r: 'En vidrio templado sin marco se usa bisagra de piso; en puertas con marco, el brazo aéreo es más económico y fácil de mantener.' },
      { p: '¿Se puede graduar el brazo?', r: 'Sí. Tiene válvulas para la velocidad y el golpe final. Si bota aceite, ya hay que cambiarlo.' },
    ],
  },
  'herrajes-puertas-de-vidrio': {
    tituloSeo: 'Herrajes para puertas de vidrio en Bogotá: zócalos, pivotes y manijas',
    intro: 'Cambiamos los herrajes que sostienen y mueven la puerta de vidrio: zócalos superior e inferior, pivotes, esquineros, bisagras vidrio-pared y vidrio-vidrio, contracerraduras y manijas tipo H o jaladeras en acero inoxidable. Un herraje flojo es la causa más común de una puerta descolgada.',
    faq: [
      { p: '¿Por qué se suelta la manija de la puerta de vidrio?', r: 'Por el uso diario los tornillos se aflojan y el empaque se gasta. Se ajusta con empaques nuevos o se cambia la manija si está doblada.' },
      { p: '¿Tienen herrajes en acero inoxidable?', r: 'Sí, en acabado satinado y brillante, que no se oxidan.' },
    ],
  },
  'puertas-corredizas-de-vidrio': {
    tituloSeo: 'Reparación de puertas corredizas de vidrio en Bogotá',
    intro: 'Arreglamos puertas corredizas de vidrio y aluminio que se salen del riel, se traban, suenan o no cierran: cambiamos rodachines, guías y rieles, ajustamos la hoja y ponemos una cerradura que de verdad asegure la puerta.',
    faq: [
      { p: '¿Por qué la puerta corrediza se pone dura?', r: 'Por rodachines gastados o rotos y suciedad en el riel. Con rodachines nuevos y el riel limpio vuelve a correr suave.' },
      { p: '¿Se le puede poner cerradura de seguridad a una corrediza?', r: 'Sí, cerraduras de gancho y pasadores que impiden levantar la hoja desde afuera.' },
    ],
  },
  'electroimanes-y-control-de-acceso': {
    tituloSeo: 'Electroimanes y control de acceso para puertas de vidrio en Bogotá',
    intro: 'Instalamos electroimanes para puertas de vidrio con apertura por huella, tarjeta, clave, botón de salida o citófono. Es la solución típica de oficinas, consultorios, porterías y locales que necesitan controlar quién entra sin entregar llaves.',
    faq: [
      { p: '¿Qué pasa con el electroimán si se va la luz?', r: 'El electroimán se libera sin energía por seguridad. Se puede instalar una batería de respaldo para que siga cerrado durante el corte.' },
      { p: '¿Sirve en puertas de vidrio sin marco?', r: 'Sí, con soportes especiales en L o U que se ajustan al vidrio.' },
    ],
  },
  'mantenimiento-puertas-de-vidrio': {
    tituloSeo: 'Mantenimiento de puertas de vidrio en Bogotá',
    intro: 'Programamos visitas de mantenimiento para las puertas de vidrio de locales, oficinas, centros comerciales y conjuntos: revisamos y graduamos bisagras hidráulicas, ajustamos herrajes y cerraduras, nivelamos las hojas y te entregamos un informe de estado. Es mucho más barato prevenir que cambiar una bisagra o un vidrio.',
    faq: [
      { p: '¿Cada cuánto se hace?', r: 'En locales y porterías de mucho tráfico, cada tres a seis meses. En casas, una vez al año.' },
      { p: '¿Tienen planes para conjuntos?', r: 'Sí, con visitas programadas para porterías, salones comunales y puertas de torres.' },
    ],
  },
  'instalacion-puertas-de-vidrio': {
    tituloSeo: 'Puertas de vidrio templado en Bogotá: suministro e instalación',
    intro: 'Suministramos e instalamos puertas de vidrio templado a la medida para locales, oficinas, porterías y casas: batientes con bisagra de piso o corredizas, en vidrio de 8 o 10 mm, con herrajes en acero inoxidable y la cerradura adecuada desde el principio.',
    faq: [
      { p: '¿Qué espesor de vidrio se usa?', r: 'Para puertas, 10 mm es lo más común; 8 mm sirve en puertas interiores livianas.' },
      { p: '¿Cuánto se demora?', r: 'Depende de la medida y del tipo de puerta, porque el vidrio templado se fabrica a la medida. Después de tomar medidas te damos la fecha de instalación.' },
    ],
  },
  'divisiones-de-bano': {
    tituloSeo: 'Arreglo de divisiones de baño en vidrio en Bogotá',
    intro: 'Ajustamos divisiones de baño en vidrio que se descuadraron, no cierran o se salen del riel. Cambiamos rodachines, bisagras, manijas, guías y empaques para que la división vuelva a cerrar bien y deje de filtrar agua.',
    faq: [
      { p: '¿Por qué la división del baño se sale del riel?', r: 'Casi siempre por rodachines gastados o rotos. Se cambian y la puerta vuelve a correr.' },
      { p: '¿Cambian el empaque que bota agua?', r: 'Sí, cambiamos empaques y barrederas para que el agua no salga de la ducha.' },
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
    intro: 'Extraemos la llave partida del cilindro sin dañarlo y te hacemos una copia nueva. Atendemos llaves partidas en puertas, candados y vehículos.',
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
    intro: 'Si forzaron tu puerta o te robaron las llaves, salimos de inmediato a cambiar las guardas, reparar el marco y la chapa, y reforzar la puerta con un cerrojo de seguridad para que duermas tranquilo.',
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

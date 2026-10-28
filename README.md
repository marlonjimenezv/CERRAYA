# CERRAYA · cerraya.com

Sitio de Cerraya, cerrajería de confianza en Bogotá. Está hecho con [Astro](https://astro.build): genera páginas HTML estáticas, rápidas y baratas de hospedar. Netlify lo construye solo en cada `git push` a `main`.

## Páginas

| Ruta | Para qué sirve |
| --- | --- |
| `/` | Inicio: dos caminos (urgencia o cotización), servicios más pedidos, promociones, tienda, llaves de carro |
| `/urgencias` | Página de aterrizaje para Google Ads: llamar o escribir, nada más |
| `/servicios` | Los 17 servicios, los más pedidos primero |
| `/llaves-de-carro` | Duplicado y fabricación, con buscador marca → modelo → tipo de llave que arma el mensaje de WhatsApp |
| `/cerraduras` | Tienda: 69 productos con filtros, orden y botón "Agregar a mi cotización" |
| `/cerraduras/<tipo>` | Una página por tipo de cerradura (buena para SEO) |
| `/mi-cotizacion` | El carrito de cotización: lista de productos + formulario |
| `/cotizar` | Formulario de cotización: solo es obligatorio "qué necesitas" y el WhatsApp |
| `/mantenimiento` | Planes de mantenimiento preventivo (Hogar, Conjunto, Empresa) |
| `/promociones` | Promociones activas con condiciones y vigencia |
| `/trabajos` | Galería de fotos de trabajos (se alimenta desde `/admin`) |
| `/consejos` | Artículos y respuestas del cerrajero, con el formulario "Pregúntale al cerrajero" (se publica desde `/admin`) |
| `/aliados` | Reclutamiento de cerrajeros aliados, con código de conducta y formulario |
| `/resena` | Para el QR que el cerrajero muestra al terminar: lleva a calificar en Google |
| `/cotizador` | **Interno**: arma cotizaciones y genera el PDF (no está enlazado ni indexado) |
| `/admin` | **Interno**: panel para subir fotos de trabajos |

## Dónde se cambia cada cosa

Todo el contenido del negocio vive en `src/data/`. Lo marcado con `CONFIRMAR` es provisional.

- **`empresa.ts`**: teléfono, WhatsApp, correo, NIT, horario, años de experiencia, enlace de reseñas de Google y los códigos de Google Ads.
- **`servicios.ts`**: lista de servicios en orden de más a menos pedido. Los 6 primeros salen en el inicio.
- **`cerraduras.ts`**: tipos, modelos y precios de la tienda.
  - `ajustePrecioPct`: margen de Cerraya sobre el precio de mercado. Hoy está en **0%**, o sea, precio de mercado.
  - `instalacionIncluida.digitales`: lo que se suma al precio de cada cerradura digital para venderla "con instalación incluida". Con un valor mayor que 0, la promoción se enciende sola. Hoy está en 0, apagada.
- **`promociones.ts`**: promociones con condiciones y vigencia. Cada una tiene `activa: true/false`.
- **`llaves.ts`**: marcas y modelos de carro, tipos de llave.

### Fotos de productos

Cada producto muestra, en este orden:

1. **Su foto exacta**, si existe `src/assets/cerraduras/<id-del-producto>.jpg` (o `.png` / `.webp`). El id es marca + nombre en minúsculas y con guiones, por ejemplo `yale-manija-digital-biometrica-bari-negra.jpg`.
2. **Una foto de referencia del tipo**, de `src/assets/cerraduras/tipos/`, con la etiqueta "Imagen de referencia". Son fotos de Unsplash con licencia libre para uso comercial; los créditos están en `CREDITOS.md`.
3. Si no hay ninguna, una ilustración.

Para las fotos exactas usen fotos propias o las que les entregue el distribuidor como revendedores. No copien fotos de Homecenter ni de las marcas: tienen derechos de autor.

### Fotos de trabajos (`/admin`)

El panel usa Decap CMS: cada trabajo subido queda como un commit en GitHub y Netlify publica solo. Las fotos se optimizan automáticamente (WebP, varios tamaños). Para activarlo una sola vez:

1. En GitHub: *Settings → Developer settings → OAuth Apps → New OAuth App*.
   - Homepage: `https://cerraya.com`
   - Callback URL: `https://api.netlify.com/auth/done`
2. En Netlify: *Project configuration → Access & security → OAuth → Install provider → GitHub*, y pegar el Client ID y el Client Secret.
3. Entrar a `cerraya.com/admin` → *Login with GitHub*. Quien suba fotos necesita acceso de escritura al repositorio.

## Publicación: GitHub → Netlify → Cloudflare

1. **Netlify**: *Add new project → Import an existing project → GitHub →* `marlonjimenezv/CERRAYA`. Netlify lee `netlify.toml` (build `npm run build`, carpeta `dist`).
2. **Netlify → Domain management → Add a domain**: `cerraya.com`, y elegir DNS externo.
3. **Cloudflare → cerraya.com → DNS → Records**: crear estos registros con el proxy **apagado** (nube gris, "DNS only"):

   | Tipo | Nombre | Contenido |
   | --- | --- | --- |
   | `A` | `@` | `75.2.60.5` |
   | `CNAME` | `www` | `<nombre-del-sitio>.netlify.app` |

4. **Netlify → HTTPS**: esperar a que salga el certificado y dejar `cerraya.com` como dominio principal.
5. **Netlify → Forms**: activar la detección de formularios. Llegan tres: `cotizacion`, `aliados` y `pregunta` (las preguntas de Consejos). Configurar las notificaciones por correo.

## Google Ads

- La página de aterrizaje para los anuncios es `/urgencias`.
- Cada clic en "Llamar" y "WhatsApp" y cada formulario enviado se registran como conversión. Basta con crear las conversiones en Google Ads y pegar el `AW-…` y las etiquetas en `medicion` (`src/data/empresa.ts`). Mientras estén vacíos no se carga ningún script de Google.

## Cotizador interno (`/cotizador`)

- Productos del catálogo con precio, mano de obra (los precios que escribas se recuerdan), descuento, IVA opcional y condiciones.
- Genera el PDF con el logo, numeración automática `COT-2026-0001`, historial y botón para compartir el PDF directo a WhatsApp desde el celular.
- Se le pueden pasar datos por enlace: `/cotizador?nombre=…&telefono=…&localidad=…&detalle=…`.
- Todo se guarda en el navegador de quien lo usa (no hay servidor).

**Siguiente paso**: el automatizador. Una función de Netlify leería cada solicitud de `/cotizar`, propondría los ítems con IA y dejaría el PDF listo para revisar y enviar.

## Referencias de precios de mercado (octubre 2026)

Uso interno, para fijar tarifas. Son cifras de blogs y tiendas, no de un estudio.

- **Instalación de cerradura digital en Bogotá**: $150.000 a $350.000. Puerta de madera ~$180.000 a $250.000; metálica o de seguridad ~$280.000 a $350.000. Yale Colombia cobra $250.000 por su servicio de instalación.
  - Fuentes: [Ipsum Store](https://ipsumstore.com/cerradura-inteligente-en-bogota-guia-de-instalacion-y-precios-2026), [Bluxus](https://bluxus.com/cuanto-cuesta-poner-una-cerradura-inteligente/), [Yale Colombia](https://tiendaonline.yalecolombia.com/products/servicio-de-instalacion-cerradura-de-embutir).
- **Duplicado de llave de carro con chip en Bogotá**: carros comunes ~$100.000 a $300.000; gama media y alta ~$300.000 a $500.000; lujo, más de $500.000.
  - Fuentes: [Cerrajería Bogotá](https://www.cerrajeria-bogota.com.co/autos/duplicado-llaves-con-chip/), [Cerrajero en Envigado](https://cerrajeroenenvigado.com/cuanto-vale-duplicado-llaves-colombia/).
- **Llave de carro sin la original (pérdida total)**: desde ~$200.000 hasta más de $1.500.000, según modelo y tipo de llave. Las inteligentes son las más caras.
  - Fuentes: [Semana](https://www.semana.com/vehiculos/articulo/perdio-la-llave-de-su-carro-la-guia-para-recuperarla-en-colombia/202603/), [C3 Care Car Center](https://www.c3carecarcenter.com/blog/duplicado-llaves-carro-bogota/).
- **Precios de cerraduras de la tienda**: precios de venta de Homecenter Colombia consultados el 24 de octubre de 2026 (producto solo). El enlace de cada categoría está en `fuenteUrl` dentro de `cerraduras.ts`.

## Desarrollo local

```bash
npm install
npm run dev
```

Abre http://localhost:4321. `npm run build` genera el sitio en `dist/` y `npm run check` revisa errores.

## Pendientes antes de lanzar

- [x] Teléfono y WhatsApp reales: 321 655 2205.
- [ ] Enlace "Pedir reseñas" del Perfil de Empresa en Google (el perfil ya está enlazado por su CID).
- [ ] Correo, NIT y razón social para el PDF de cotización.
- [ ] Confirmar servicios, horario 24/7, localidades y respuestas de las preguntas frecuentes.
- [ ] Decidir margen (`ajustePrecioPct`) e instalación incluida en digitales (`instalacionIncluida`).
- [ ] Aprobar cada promoción (`promociones.ts`).
- [ ] Confirmar condiciones del cotizador: forma de pago, tiempos y garantía.
- [ ] Confirmar requisitos y reglas de la red de aliados.
- [ ] Revisar la política de datos con un abogado.
- [ ] Fotos reales de productos y de trabajos.

// Llaves de carro: marcas más comunes en Colombia y tipos de llave.
// CONFIRMAR: dejar solo las marcas y modelos con los que Cerraya trabaja de verdad.

export const marcasCarro: { marca: string; modelos: string[] }[] = [
  { marca: 'Chevrolet', modelos: ['Spark / Spark GT', 'Sail', 'Onix', 'Aveo', 'Beat', 'Tracker', 'Captiva', 'Optra', 'D-Max', 'N300'] },
  { marca: 'Renault', modelos: ['Logan', 'Sandero', 'Stepway', 'Duster', 'Kwid', 'Clio', 'Twingo', 'Captur', 'Koleos', 'Oroch'] },
  { marca: 'Mazda', modelos: ['Mazda 2', 'Mazda 3', 'CX-3', 'CX-30', 'CX-5', 'BT-50', 'Allegro'] },
  { marca: 'Kia', modelos: ['Picanto', 'Rio', 'Soluto', 'Cerato', 'Sportage', 'Sorento', 'Stonic', 'Seltos'] },
  { marca: 'Toyota', modelos: ['Hilux', 'Corolla', 'Corolla Cross', 'Fortuner', 'Prado', 'Yaris', 'RAV4'] },
  { marca: 'Nissan', modelos: ['March', 'Versa', 'Sentra', 'Kicks', 'Frontier', 'X-Trail', 'Tiida'] },
  { marca: 'Hyundai', modelos: ['i10 / Grand i10', 'Accent', 'Elantra', 'Tucson', 'Creta', 'Santa Fe'] },
  { marca: 'Suzuki', modelos: ['Swift', 'Alto', 'Celerio', 'Vitara', 'S-Cross', 'Jimny'] },
  { marca: 'Volkswagen', modelos: ['Gol', 'Voyage', 'Polo', 'T-Cross', 'Tiguan', 'Amarok'] },
  { marca: 'Ford', modelos: ['Fiesta', 'EcoSport', 'Escape', 'Explorer', 'Ranger'] },
  { marca: 'Otra marca', modelos: [] },
];

export const tiposLlave = [
  { id: 'sencilla', nombre: 'Llave sencilla', texto: 'Metálica, sin botones ni chip. Típica de carros más antiguos.' },
  { id: 'chip', nombre: 'Llave con chip', texto: 'Parece sencilla, pero tiene un chip en la cabeza que el carro debe reconocer para encender.' },
  { id: 'navaja', nombre: 'Llave navaja con control', texto: 'La llave se dobla dentro del control y tiene botones para abrir y cerrar.' },
  { id: 'control', nombre: 'Llave con control aparte', texto: 'Llave con chip y un control remoto separado para las puertas.' },
  { id: 'inteligente', nombre: 'Llave inteligente', texto: 'Para carros con botón de encendido: abre y enciende sin sacarla del bolsillo.' },
];

export const serviciosLlave = [
  { titulo: 'Duplicado de llave', texto: 'Tienes una llave que funciona y quieres una copia. Copiamos la llave y programamos el chip o el control.' },
  { titulo: 'Fabricación por pérdida', texto: 'Perdiste todas las llaves. Fabricamos una nueva sin la original y la programamos en el carro.' },
  { titulo: 'Programación de chip y control', texto: 'El control dejó de funcionar o compraste uno nuevo. Lo programamos para tu carro.' },
  { titulo: 'Cambio de carcasa', texto: 'La carcasa está rota o gastada. La cambiamos y pasamos el chip y el circuito a la nueva.' },
  { titulo: 'Llaves de moto', texto: 'Duplicado y fabricación de llaves para las motos más comunes.' },
  { titulo: 'Apertura del vehículo', texto: 'Las llaves quedaron adentro. Apertura sin dañar puertas ni chapas.' },
];

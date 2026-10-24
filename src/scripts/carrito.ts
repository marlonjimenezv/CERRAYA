// Carrito de cotización: el cliente arma su lista de cerraduras y la envía para cotizar con instalación.
// Vive en localStorage del navegador del cliente; no hay pagos en línea.

export type ItemCarrito = { id: string; nombre: string; marca: string; tipo: string; precio: number; cantidad: number };

const CLAVE = 'cerraya.carrito';
const EVENTO = 'cerraya:carrito';

export function leerCarrito(): ItemCarrito[] {
  try {
    return JSON.parse(localStorage.getItem(CLAVE) ?? '[]');
  } catch {
    return [];
  }
}

function guardarCarrito(items: ItemCarrito[]) {
  try {
    localStorage.setItem(CLAVE, JSON.stringify(items));
  } catch {
    /* almacenamiento no disponible */
  }
  window.dispatchEvent(new CustomEvent(EVENTO));
}

export function agregar(item: Omit<ItemCarrito, 'cantidad'>, cantidad = 1) {
  const items = leerCarrito();
  const existente = items.find((i) => i.id === item.id);
  if (existente) existente.cantidad += cantidad;
  else items.push({ ...item, cantidad });
  guardarCarrito(items);
}

export function cambiarCantidad(id: string, cantidad: number) {
  const items = leerCarrito()
    .map((i) => (i.id === id ? { ...i, cantidad } : i))
    .filter((i) => i.cantidad > 0);
  guardarCarrito(items);
}

export function vaciar() {
  guardarCarrito([]);
}

export const totalUnidades = (items = leerCarrito()) => items.reduce((n, i) => n + i.cantidad, 0);

export function alCambiar(fn: () => void) {
  window.addEventListener(EVENTO, fn);
  window.addEventListener('storage', (e) => e.key === CLAVE && fn());
}

// Botones "Agregar a mi cotización" y contador del encabezado, en cualquier página.
export function iniciarCarrito() {
  const pintar = () => {
    const items = leerCarrito();
    const n = totalUnidades(items);
    document.querySelectorAll<HTMLElement>('[data-carrito-contador]').forEach((el) => {
      el.textContent = String(n);
      el.hidden = n === 0;
    });
    document.querySelectorAll<HTMLButtonElement>('[data-agregar]').forEach((b) => {
      const dentro = items.some((i) => i.id === b.dataset.id);
      b.classList.toggle('en-carrito', dentro);
      b.querySelector('[data-texto]')!.textContent = dentro ? 'En tu cotización' : 'Agregar a mi cotización';
    });
  };
  document.addEventListener('click', (e) => {
    const b = (e.target as Element | null)?.closest<HTMLButtonElement>('[data-agregar]');
    if (!b) return;
    const { id, nombre, marca, tipo, precio } = b.dataset;
    if (leerCarrito().some((i) => i.id === id)) {
      location.href = '/mi-cotizacion';
      return;
    }
    agregar({ id: id!, nombre: nombre!, marca: marca!, tipo: tipo!, precio: Number(precio) });
    document.querySelectorAll('[data-carrito-link]').forEach((el) => {
      el.classList.remove('pulso');
      void (el as HTMLElement).offsetWidth;
      el.classList.add('pulso');
    });
  });
  alCambiar(pintar);
  pintar();
}

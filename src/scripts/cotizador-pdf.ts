// Genera el PDF de una cotización Cerraya con jsPDF.
import { jsPDF } from 'jspdf';
import { autoTable } from 'jspdf-autotable';
import { empresa } from '../data/empresa';

export type Item = { descripcion: string; tipo: 'Producto' | 'Mano de obra' | 'Otro'; cantidad: number; valor: number };

export type Cotizacion = {
  numero: string;
  fecha: string; // AAAA-MM-DD
  validezDias: number;
  atendidoPor: string;
  cliente: { nombre: string; documento: string; telefono: string; email: string; direccion: string; tipo: string };
  items: Item[];
  descuentoPct: number;
  iva: boolean;
  formaPago: string;
  tiempoEjecucion: string;
  garantia: string;
  notas: string;
};

export const IVA = 0.19;

export function totales(c: Cotizacion) {
  const subtotal = c.items.reduce((s, i) => s + i.cantidad * i.valor, 0);
  const descuento = Math.round((subtotal * c.descuentoPct) / 100);
  const base = subtotal - descuento;
  const iva = c.iva ? Math.round(base * IVA) : 0;
  return { subtotal, descuento, base, iva, total: base + iva };
}

const formato = new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 });
// jsPDF usa fuentes estándar (WinAnsi): se cambian los espacios especiales de Intl por espacios normales.
export const pesos = (v: number) => formato.format(v).replace(/\s/g, ' ');

function fechaLarga(iso: string) {
  const [a, m, d] = iso.split('-').map(Number);
  return new Date(Date.UTC(a, m - 1, d)).toLocaleDateString('es-CO', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
}

function sumarDias(iso: string, dias: number) {
  const [a, m, d] = iso.split('-').map(Number);
  const f = new Date(Date.UTC(a, m - 1, d + dias));
  return f.toISOString().slice(0, 10);
}

async function cargarImagen(url: string) {
  const blob = await (await fetch(url)).blob();
  return await new Promise<string>((ok, error) => {
    const lector = new FileReader();
    lector.onload = () => ok(lector.result as string);
    lector.onerror = error;
    lector.readAsDataURL(blob);
  });
}

const VERDE: [number, number, number] = [9, 50, 38];
const CREMA: [number, number, number] = [247, 245, 232];
const TEXTO: [number, number, number] = [29, 43, 37];
const GRIS: [number, number, number] = [96, 110, 103];
const ACENTO: [number, number, number] = [242, 179, 61];

export async function crearPdf(c: Cotizacion) {
  const doc = new jsPDF({ unit: 'mm', format: 'a4' });
  const ancho = doc.internal.pageSize.getWidth();
  const alto = doc.internal.pageSize.getHeight();
  const m = 16;
  const t = totales(c);

  // Encabezado
  doc.setFillColor(...VERDE);
  doc.rect(0, 0, ancho, 40, 'F');
  doc.setFillColor(...ACENTO);
  doc.rect(0, 40, ancho, 1.2, 'F');
  const logo = await cargarImagen('/img/logo-cerraya-horizontal.jpg');
  doc.addImage(logo, 'JPEG', m - 2, 9, 63, 22);

  doc.setTextColor(...CREMA);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(20);
  doc.text('COTIZACIÓN', ancho - m, 17, { align: 'right' });
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.text(`No. ${c.numero}`, ancho - m, 24, { align: 'right' });
  doc.text(`Fecha: ${fechaLarga(c.fecha)}`, ancho - m, 29, { align: 'right' });
  doc.text(`Válida hasta: ${fechaLarga(sumarDias(c.fecha, c.validezDias))}`, ancho - m, 34, { align: 'right' });

  // Bloques de cliente y empresa
  let y = 52;
  const col = (ancho - m * 2) / 2;
  const bloque = (x: number, titulo: string, lineas: string[]) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(...GRIS);
    doc.text(titulo.toUpperCase(), x, y);
    doc.setFontSize(11);
    doc.setTextColor(...TEXTO);
    doc.text(lineas[0] || '-', x, y + 6);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9.5);
    lineas.slice(1).filter(Boolean).forEach((l, i) => doc.text(l, x, y + 11.5 + i * 5));
  };
  bloque(m, 'Cliente', [
    c.cliente.nombre,
    c.cliente.documento && `Doc./NIT: ${c.cliente.documento}`,
    c.cliente.telefono && `Tel: ${c.cliente.telefono}`,
    c.cliente.email,
    c.cliente.direccion,
  ]);
  bloque(m + col + 6, 'Cotiza', [
    empresa.razonSocial,
    empresa.nit && `NIT: ${empresa.nit}`,
    `Tel: ${empresa.telefonoVisible}`,
    empresa.email,
    'cerraya.com',
  ]);

  // Ítems
  autoTable(doc, {
    startY: y + 36,
    margin: { left: m, right: m },
    head: [['#', 'Descripción', 'Tipo', 'Cant.', 'Valor unitario', 'Total']],
    body: c.items.map((i, n) => [String(n + 1), i.descripcion, i.tipo, String(i.cantidad), pesos(i.valor), pesos(i.cantidad * i.valor)]),
    theme: 'plain',
    styles: { font: 'helvetica', fontSize: 9.5, textColor: TEXTO, cellPadding: { top: 3, bottom: 3, left: 2.5, right: 2.5 } },
    headStyles: { fillColor: VERDE, textColor: CREMA, fontStyle: 'bold', fontSize: 8.5 },
    alternateRowStyles: { fillColor: [250, 249, 242] },
    columnStyles: {
      0: { cellWidth: 9, halign: 'center' },
      2: { cellWidth: 28, textColor: GRIS, fontSize: 8.5 },
      3: { cellWidth: 14, halign: 'center' },
      4: { cellWidth: 30, halign: 'right' },
      5: { cellWidth: 30, halign: 'right', fontStyle: 'bold' },
    },
  });
  y = (doc as unknown as { lastAutoTable: { finalY: number } }).lastAutoTable.finalY + 6;

  // Totales
  const filas: [string, string][] = [['Subtotal', pesos(t.subtotal)]];
  if (t.descuento) filas.push([`Descuento (${c.descuentoPct}%)`, `- ${pesos(t.descuento)}`]);
  if (c.iva) filas.push([`IVA (${IVA * 100}%)`, pesos(t.iva)]);
  const xEtiqueta = ancho - m - 75;
  if (y + filas.length * 6 + 16 > alto - 30) { doc.addPage(); y = 20; }
  doc.setFontSize(10);
  filas.forEach(([e, v]) => {
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...GRIS);
    doc.text(e, xEtiqueta, y);
    doc.setTextColor(...TEXTO);
    doc.text(v, ancho - m, y, { align: 'right' });
    y += 6;
  });
  doc.setFillColor(...VERDE);
  doc.roundedRect(xEtiqueta - 4, y - 2, 75 + 4, 12, 2, 2, 'F');
  doc.setTextColor(...CREMA);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.text('TOTAL', xEtiqueta, y + 5.8);
  doc.text(pesos(t.total), ancho - m - 2, y + 5.8, { align: 'right' });
  if (!c.iva) {
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(...GRIS);
    doc.text('Valores sin IVA.', ancho - m, y + 15, { align: 'right' });
  }
  y += 24;

  // Condiciones
  const condiciones: [string, string][] = [
    ['Forma de pago', c.formaPago],
    ['Tiempo de ejecución', c.tiempoEjecucion],
    ['Garantía', c.garantia],
    ['Observaciones', c.notas],
  ].filter(([, v]) => v.trim()) as [string, string][];
  condiciones.forEach(([e, v]) => {
    const lineas = doc.splitTextToSize(v, ancho - m * 2 - 42);
    if (y + lineas.length * 4.6 > alto - 40) { doc.addPage(); y = 20; }
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(...VERDE);
    doc.text(e, m, y);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...TEXTO);
    doc.text(lineas, m + 42, y);
    y += Math.max(lineas.length * 4.6, 5) + 3;
  });

  // Firma
  if (y > alto - 52) { doc.addPage(); y = 20; }
  y += 8;
  doc.setDrawColor(...GRIS);
  doc.setLineWidth(0.2);
  doc.line(m, y + 12, m + 70, y + 12);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(...TEXTO);
  doc.text(c.atendidoPor || empresa.nombre, m, y + 17);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(...GRIS);
  doc.text(`${empresa.nombre} · ${empresa.lema}`, m, y + 22);

  // Pie de página en todas las hojas
  const paginas = doc.getNumberOfPages();
  for (let p = 1; p <= paginas; p++) {
    doc.setPage(p);
    doc.setFillColor(...CREMA);
    doc.rect(0, alto - 16, ancho, 16, 'F');
    doc.setFontSize(8.5);
    doc.setTextColor(...VERDE);
    doc.setFont('helvetica', 'bold');
    doc.text(`Cerrajeros con más de ${empresa.experiencia} años de experiencia · ${empresa.resenas.calificacion} en Google`, m, alto - 9.5);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...GRIS);
    doc.text(`cerraya.com · ${empresa.telefonoVisible} · ${empresa.email}`, m, alto - 5);
    doc.text(`Página ${p} de ${paginas}`, ancho - m, alto - 7, { align: 'right' });
  }

  return doc;
}

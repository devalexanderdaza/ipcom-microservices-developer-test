import Decimal from 'decimal.js';

/**
 * Interface for the Sales Stadistics
 */
export interface ISalesStadistics {
  total: number;
  comprasPorTDC: Record<string, Decimal>;
  nocompraron: number;
  compraMasAlta: Decimal;
}

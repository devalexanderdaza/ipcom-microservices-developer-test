import Decimal from 'decimal.js';

import { ISalesStadistics } from './app.interface';

/**
 * @description Stadistics of sales
 * @implements ISalesStadistics
 * @export
 */
export class SalesStadisticsDto implements ISalesStadistics {
  total: number;
  comprasPorTDC: Record<string, Decimal>;
  nocompraron: number;
  compraMasAlta: Decimal;
}

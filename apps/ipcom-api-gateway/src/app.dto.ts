import Decimal from 'decimal.js';

import { IProcessedCsv, ISalesStadistics, IUser } from './app.interface';

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

/**
 * @description Processed csv file
 * @implements IProcessedCsv
 * @export
 */
export class ProcessedCsvDto implements IProcessedCsv {
  organization: string;
  users: IUser[];
}

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

/**
 * Interface for the processed csv
 */
export interface IProcessedCsv {
  organization: string;
  users: IUser[];
}

/**
 * Interface for the user in the processed csv
 */
export interface IUser {
  username: string;
  roles: string[];
}

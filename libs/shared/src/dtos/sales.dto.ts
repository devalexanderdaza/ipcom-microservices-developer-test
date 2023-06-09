import { ISale } from '../interfaces';

export class SaleDto implements ISale {
  clientId: number;
  nombre: string;
  compro: boolean;
  tdc?: string;
  monto?: number;
  date: string;
}

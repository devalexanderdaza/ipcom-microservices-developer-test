/**
 * Interface for the 'Sale' data
 */
export interface ISale {
  clientId: number;
  nombre: string;
  compro: boolean;
  tdc?: string;
  monto?: number;
  date: string;
}

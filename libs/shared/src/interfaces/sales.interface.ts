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

/**
 * @interface IResumeDate
 */
export interface IResumeDate {
  date: string;
}

/**
 * @interface IResumeDays
 */
export interface IResumeDays {
  dias: number;
}

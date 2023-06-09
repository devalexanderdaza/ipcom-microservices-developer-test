import { SaleDto } from '@ipcom/shared';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private sales: SaleDto[] = [
    {
      clientId: 1304956280,
      nombre: 'Chaya Thiel',
      compro: false,
      date: '2019-12-01T16:47:32.569662Z',
    },
    {
      clientId: 1150426348,
      nombre: 'Cristobal Stanton',
      compro: true,
      tdc: 'privada',
      monto: 8272.33,
      date: '2019-12-01T16:47:09.569662Z',
    },
    {
      clientId: 1569384689,
      nombre: 'Lenny Homenick',
      compro: true,
      tdc: 'visa debit',
      monto: 28037.69,
      date: '2019-12-01T16:46:27.569662Z',
    },
  ];

  async getSales(): Promise<SaleDto[]> {
    return this.sales;
  }
}

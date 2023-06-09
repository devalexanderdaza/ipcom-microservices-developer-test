import { ResumeDateDto, ResumeDaysDto, SaleDto } from '@ipcom/shared';

import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

import { Observable } from 'rxjs';

@Injectable()
export class AppService {
  constructor(
    @Inject('SALES_SERVICE')
    private readonly salesMicroserviceClientProxy: ClientProxy,
  ) {}

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

  getSales(date: ResumeDateDto, days: ResumeDaysDto): Observable<SaleDto[]> {
    const pattern: object = { cmd: 'get-all-sales' };
    const payload: object = { date, days };
    const sales: Observable<any> = this.salesMicroserviceClientProxy.send(
      pattern,
      payload,
    );
    console.debug(sales);
    // console.debug(
    //   `getSales(${JSON.stringify(date)}, ${JSON.stringify(days)})`,
    //   AppService.name,
    // );
    return sales;
  }
}

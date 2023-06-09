import { ResumeDateDto, SaleDto } from '@ipcom/shared';

import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

import { lastValueFrom, Observable } from 'rxjs';

@Injectable()
export class AppService {
  constructor(
    // Inject the sales microservice client proxy
    @Inject('SALES_SERVICE')
    private readonly salesMicroserviceClientProxy: ClientProxy,
  ) {}

  /**
   * @description Get all sales from microservice
   * @param date Date to get sales
   * @returns All sales from microservice
   */
  async getSales(date: ResumeDateDto): Promise<SaleDto[]> {
    const pattern: object = { cmd: 'get-all-sales' };
    const payload: object = { date };
    const sales$: Observable<SaleDto[]> =
      this.salesMicroserviceClientProxy.send(pattern, payload);
    return await lastValueFrom(sales$);
  }
}

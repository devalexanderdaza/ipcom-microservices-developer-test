import { ResumeDateDto, SaleDto } from '@ipcom/shared';

import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

import { SalesMicroserviceService } from './sales-microservice.service';

@Controller()
export class SalesMicroserviceController {
  constructor(
    private readonly salesMicroserviceService: SalesMicroserviceService,
  ) {}

  /**
   * @description Get all sales from external source
   * @param payload Payload with date
   * @returns All sales from external source
   */
  @MessagePattern({ cmd: 'get-all-sales' })
  async getAllSales(payload: { date: ResumeDateDto }): Promise<SaleDto[]> {
    return await this.salesMicroserviceService.getSalesFromExternalSource(
      payload.date,
    );
  }
}

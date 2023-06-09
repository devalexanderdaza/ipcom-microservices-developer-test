import { ResumeDateDto, ResumeDaysDto } from '@ipcom/shared';

import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

import { SalesMicroserviceService } from './sales-microservice.service';

@Controller()
export class SalesMicroserviceController {
  constructor(
    private readonly salesMicroserviceService: SalesMicroserviceService,
  ) {}

  @MessagePattern({ cmd: 'get-all-sales' })
  async getAllSales(date: ResumeDateDto, days: ResumeDaysDto): Promise<any> {
    return await this.salesMicroserviceService.getSalesFromExternalSource(
      date,
      days,
    );
  }
}

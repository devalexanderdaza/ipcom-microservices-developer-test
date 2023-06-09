import { Controller, Get } from '@nestjs/common';
import { SalesMicroserviceService } from './sales-microservice.service';

@Controller()
export class SalesMicroserviceController {
  constructor(private readonly salesMicroserviceService: SalesMicroserviceService) {}

  @Get()
  getHello(): string {
    return this.salesMicroserviceService.getHello();
  }
}

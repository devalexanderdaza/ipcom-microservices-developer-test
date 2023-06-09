import { Controller, Get } from '@nestjs/common';
import { CsvMicroserviceService } from './csv-microservice.service';

@Controller()
export class CsvMicroserviceController {
  constructor(private readonly csvMicroserviceService: CsvMicroserviceService) {}

  @Get()
  getHello(): string {
    return this.csvMicroserviceService.getHello();
  }
}

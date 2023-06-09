import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { SaleDto } from '@ipcom/shared';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('sales')
  getSales(): Promise<SaleDto[]> {
    return this.appService.getSales();
  }
}

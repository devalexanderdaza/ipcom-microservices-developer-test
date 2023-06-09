import { Controller, Get, Param, Query } from '@nestjs/common';
import { ResumeDateDto, ResumeDaysDto, SaleDto } from '@ipcom/shared';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('resumen/:date')
  getSales(
    @Param() params: ResumeDateDto,
    @Query() query: ResumeDaysDto,
  ): Promise<SaleDto[]> {
    return this.appService.getSales(params, query);
  }
}

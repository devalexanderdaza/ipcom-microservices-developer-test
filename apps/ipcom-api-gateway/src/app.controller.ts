import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { SaleDto } from '@ipcom/shared';
import { ResumeDateDto, ResumeDaysDto } from './app.dto';

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

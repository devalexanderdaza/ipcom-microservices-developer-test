import { ResumeDateDto, ResumeDaysDto, SaleDto } from '@ipcom/shared';

import { Controller, Get, Param, Query } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('resumen/:date')
  async getSales(
    @Param() params: ResumeDateDto,
    @Query() query: ResumeDaysDto,
  ): Promise<SaleDto[]> {
    return await this.appService.getSales(params, query);
  }
}

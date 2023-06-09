import { ResumeDateDto, ResumeDaysDto, SaleDto } from '@ipcom/shared';

import { Controller, Get, Param, Query } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  /**
   * @description Get all sales from external source
   * @param params Date to get sales
   * @param query Days to get sales
   * @returns Stadistics of sales
   */
  @Get('resumen/:date')
  async getSales(
    @Param() params: ResumeDateDto,
    @Query() query: ResumeDaysDto,
  ): Promise<SaleDto[]> {
    return await this.appService.getSales(params);
  }
}

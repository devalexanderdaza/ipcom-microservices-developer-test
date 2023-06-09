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
    const days: number = query.dias ? query.dias : 1;
    const sales: SaleDto[] = [];
    for (let i = 0; i < days; i++) {
      const date: Date = new Date(params.date);
      date.setDate(date.getDate() + i);
      sales.push(
        ...(await this.appService.getSales({
          date: date.toISOString(),
        })),
      );
    }
    return sales;
  }
}

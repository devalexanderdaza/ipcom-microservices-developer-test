import { ResumeDateDto, ResumeDaysDto, SaleDto } from '@ipcom/shared';

import { Controller, Get, Param, Query } from '@nestjs/common';

import { Decimal } from 'decimal.js';

import { SalesStadisticsDto } from './app.dto';
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
  ): Promise<SalesStadisticsDto> {
    // Get days to get sales
    const days: number = query.dias ? query.dias : 1;

    // Initialize sales
    const sales: SaleDto[] = [];

    // Iterate over days
    for (let i = 0; i < days; i++) {
      // Transform date
      const date: Date = new Date(params.date);

      // Add days to date
      date.setDate(date.getDate() + i);

      // Get sales from microservice and add to sales
      sales.push(
        ...(await this.appService.getSales({
          date: date.toISOString(),
        })),
      );
    }

    // Return stadistics
    return await this.getStadistics(sales);
  }

  /**
   * @description Get stadistics from sales
   * @param sales Sales to get stadistics
   * @returns Stadistics of sales
   */
  private async getStadistics(sales: SaleDto[]): Promise<SalesStadisticsDto> {
    // Initialize variables
    let totalSales = new Decimal(0);
    let maxSale = new Decimal(0);
    let notBuyers = 0;
    const totalSalesByCreditCard: Record<string, Decimal> = {};

    // Iterate over sales
    for (const sale of sales) {
      if (sale.compro) {
        // Sum all sales
        totalSales = totalSales.plus(sale.monto);
        // Check for max sale
        if (sale.monto && new Decimal(sale.monto).greaterThan(maxSale)) {
          maxSale = new Decimal(sale.monto);
        }
        // Count all buyers by credit card
        if (sale.tdc) {
          if (totalSalesByCreditCard[sale.tdc]) {
            totalSalesByCreditCard[sale.tdc] = totalSalesByCreditCard[
              sale.tdc
            ].plus(sale.monto);
          } else {
            totalSalesByCreditCard[sale.tdc] = new Decimal(sale.monto);
          }
        }
      } else {
        // Count all not buyers
        notBuyers++;
      }
    }

    // Return stadistics
    return {
      total: totalSales.toNumber(),
      comprasPorTDC: totalSalesByCreditCard,
      nocompraron: notBuyers,
      compraMasAlta: maxSale,
    };
  }
}

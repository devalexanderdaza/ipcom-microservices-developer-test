import { ResumeDateDto, ResumeDaysDto } from '@ipcom/shared';

import { Injectable } from '@nestjs/common';

@Injectable()
export class SalesMicroserviceService {
  async getSalesFromExternalSource(
    date: ResumeDateDto,
    days: ResumeDaysDto,
  ): Promise<any> {
    return {
      date,
      days,
    };
  }
}

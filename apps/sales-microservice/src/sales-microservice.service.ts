import { Injectable } from '@nestjs/common';

@Injectable()
export class SalesMicroserviceService {
  getHello(): string {
    return 'Hello World!';
  }
}

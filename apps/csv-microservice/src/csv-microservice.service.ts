import { Injectable } from '@nestjs/common';

@Injectable()
export class CsvMicroserviceService {
  getHello(): string {
    return 'Hello World!';
  }
}

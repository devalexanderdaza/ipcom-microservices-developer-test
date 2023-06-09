import { Module } from '@nestjs/common';
import { SalesMicroserviceController } from './sales-microservice.controller';
import { SalesMicroserviceService } from './sales-microservice.service';

@Module({
  imports: [],
  controllers: [SalesMicroserviceController],
  providers: [SalesMicroserviceService],
})
export class SalesMicroserviceModule {}

import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

import { SalesMicroserviceController } from './sales-microservice.controller';
import { SalesMicroserviceService } from './sales-microservice.service';

@Module({
  imports: [HttpModule],
  controllers: [SalesMicroserviceController],
  providers: [SalesMicroserviceService],
})
export class SalesMicroserviceModule {}

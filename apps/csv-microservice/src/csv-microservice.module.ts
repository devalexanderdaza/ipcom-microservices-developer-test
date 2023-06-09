import { Module } from '@nestjs/common';
import { CsvMicroserviceController } from './csv-microservice.controller';
import { CsvMicroserviceService } from './csv-microservice.service';

@Module({
  imports: [],
  controllers: [CsvMicroserviceController],
  providers: [CsvMicroserviceService],
})
export class CsvMicroserviceModule {}

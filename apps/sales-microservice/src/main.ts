import { NestFactory } from '@nestjs/core';
import { SalesMicroserviceModule } from './sales-microservice.module';

async function bootstrap() {
  const app = await NestFactory.create(SalesMicroserviceModule);
  await app.listen(3000);
}
bootstrap();

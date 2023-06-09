import { NestFactory } from '@nestjs/core';
import { SalesMicroserviceModule } from './sales-microservice.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  // Create a Nest microservice instance
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    SalesMicroserviceModule,
    {
      transport: Transport.TCP,
    },
  );
  await app.listen();
}
bootstrap();

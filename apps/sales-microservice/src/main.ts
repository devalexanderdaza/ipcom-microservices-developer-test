import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { INestMicroservice } from '@nestjs/common';

import { SalesMicroserviceModule } from './sales-microservice.module';

async function bootstrap() {
  // Create a Nest microservice instance
  const app: INestMicroservice =
    await NestFactory.createMicroservice<MicroserviceOptions>(
      SalesMicroserviceModule,
      {
        transport: Transport.TCP,
        options: {
          host: 'localhost',
          port: 3001,
        },
      },
    );

  // Start listening for incoming requests
  await app.listen();
}
bootstrap();

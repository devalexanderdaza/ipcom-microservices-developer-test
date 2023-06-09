import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { INestMicroservice } from '@nestjs/common';

import { CsvMicroserviceModule } from './csv-microservice.module';

async function bootstrap() {
  // Create a Nest microservice instance
  const app: INestMicroservice =
    await NestFactory.createMicroservice<MicroserviceOptions>(
      CsvMicroserviceModule,
      {
        transport: Transport.TCP,
        options: {
          host: 'localhost',
          port: 3002,
        },
      },
    );

  // Start listening for incoming requests
  await app.listen();
}
bootstrap();

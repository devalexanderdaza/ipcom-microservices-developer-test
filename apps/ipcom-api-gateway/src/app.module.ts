import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';

import * as Joi from 'joi';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      expandVariables: true,
      envFilePath: ['.development.env', '.test.env', '.env'],
      validationSchema: Joi.object({
        APP_DEBUG: Joi.boolean().required(),
        API_GATEWAY_HOST: Joi.string().required(),
        API_GATEWAY_PORT: Joi.number().required(),
        API_GATEWAY_URL: Joi.string().required(),
        API_GATEWAY_VERSION: Joi.string().required(),
        API_GATEWAY_NAME: Joi.string().required(),
        API_GATEWAY_DESCRIPTION: Joi.string().required(),
        API_GATEWAY_CONTACT_NAME: Joi.string().required(),
        API_GATEWAY_CONTACT_URL: Joi.string().required(),
        API_GATEWAY_CONTACT_EMAIL: Joi.string().required(),
        API_GATEWAY_LICENSE_NAME: Joi.string().required(),
        API_GATEWAY_LICENSE_URL: Joi.string().required(),
      }),
      validationOptions: {
        allowUnknown: true,
        abortEarly: true,
      },
    }),
    ClientsModule.register([
      {
        name: 'SALES_SERVICE',
        transport: Transport.TCP,
        options: {
          host: 'localhost',
          port: 3001,
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

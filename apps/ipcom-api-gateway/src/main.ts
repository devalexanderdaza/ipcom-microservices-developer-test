import { NestFactory } from '@nestjs/core';
import { INestApplication, Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import * as compression from 'compression';

import { AppModule } from './app.module';

async function bootstrap() {
  // Create logger
  const logger: Logger = new Logger('API Gateway Bootstrap');

  // Create a Nest application instance
  const app: INestApplication = await NestFactory.create(AppModule);

  // Add validation pipe
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
    }),
  );

  // Get configuration from the ConfigService
  const configService: ConfigService = app.get(ConfigService);

  // Enable compression
  app.use(compression());

  // Enable CORS
  app.enableCors();

  // Get environment variables from the ConfigService
  const appDebug: boolean = configService.get<boolean>('APP_DEBUG');
  const apiGatewayHost: string = configService.get<string>('API_GATEWAY_HOST');
  const apiGatewayPort: number = configService.get<number>('API_GATEWAY_PORT');
  const apiGatewayUrl: string = configService.get<string>('API_GATEWAY_URL');
  const apiGatewayVersion: string = configService.get<string>(
    'API_GATEWAY_VERSION',
  );
  const apiGatewayName: string = configService.get<string>('API_GATEWAY_NAME');
  const apiGatewayDescription: string = configService.get<string>(
    'API_GATEWAY_DESCRIPTION',
  );
  const apiGatewayContactName: string = configService.get<string>(
    'API_GATEWAY_CONTACT_NAME',
  );
  const apiGatewayContactUrl: string = configService.get<string>(
    'API_GATEWAY_CONTACT_URL',
  );
  const apiGatewayContactEmail: string = configService.get<string>(
    'API_GATEWAY_CONTACT_EMAIL',
  );
  const apiGatewayLicenseName: string = configService.get<string>(
    'API_GATEWAY_LICENSE_NAME',
  );
  const apiGatewayLicenseUrl: string = configService.get<string>(
    'API_GATEWAY_LICENSE_URL',
  );

  // Set global prefix
  app.setGlobalPrefix('api');

  // Set gllobal versioning
  app.setGlobalPrefix(apiGatewayVersion);

  // Set Swagger options
  const swaggerOptions = new DocumentBuilder()
    .setTitle(apiGatewayName)
    .setDescription(apiGatewayDescription)
    .setVersion(apiGatewayVersion)
    .setContact(
      apiGatewayContactName,
      apiGatewayContactUrl,
      apiGatewayContactEmail,
    )
    .setLicense(apiGatewayLicenseName, apiGatewayLicenseUrl)
    .addServer(apiGatewayUrl)
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, swaggerOptions);
  SwaggerModule.setup('documentation', app, document);

  // Start listening for requests
  await app.listen(apiGatewayPort, apiGatewayHost, async () => {
    logger.log(
      `API Gateway is listening on ${apiGatewayHost}:${apiGatewayPort}`,
    );
    if (appDebug) {
      logger.debug(
        `API Gateway Swagger UI is available at ${apiGatewayUrl}/documentation`,
      );
    }
  });
}
bootstrap();

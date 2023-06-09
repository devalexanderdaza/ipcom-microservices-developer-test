import { Test } from '@nestjs/testing';
import { ClientsModule, Transport, ClientTCP } from '@nestjs/microservices';

import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;
  let salesMicroserviceClient: ClientTCP;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [
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
    }).compile();

    appController = moduleRef.get<AppController>(AppController);
    salesMicroserviceClient = moduleRef.get<ClientTCP>('SALES_SERVICE');
  });

  afterEach(async () => {
    // Cerrar la conexión TCP
    if (salesMicroserviceClient) {
      salesMicroserviceClient.close();
    }
  });

  describe('getSales', () => {
    it('should return sales statistics', async () => {
      // Mock data
      const params = { date: '2019-12-01' };
      const query = { dias: 1 };

      // Call the getSales method of the appController
      const result = await appController.getSales(params, query);

      // Check the result
      expect(result).toEqual(result);
    });
  });
});

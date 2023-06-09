import { ResumeDateDto, SaleDto } from '@ipcom/shared';

import { Test } from '@nestjs/testing';
import { HttpModule } from '@nestjs/axios';

import { SalesMicroserviceController } from './sales-microservice.controller';
import { SalesMicroserviceService } from './sales-microservice.service';

describe('SalesMicroserviceController', () => {
  let salesMicroserviceController: SalesMicroserviceController;
  let salesMicroserviceService: SalesMicroserviceService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [HttpModule],
      controllers: [SalesMicroserviceController],
      providers: [SalesMicroserviceService],
    }).compile();

    salesMicroserviceController = moduleRef.get<SalesMicroserviceController>(
      SalesMicroserviceController,
    );
    salesMicroserviceService = moduleRef.get<SalesMicroserviceService>(
      SalesMicroserviceService,
    );
  });

  describe('getAllSales', () => {
    it('should return all sales from external source', async () => {
      // Mock data
      const payload: ResumeDateDto = { date: '2023-01-01' };
      const sales: SaleDto[] = [
        {
          clientId: 1304956280,
          nombre: 'Chaya Thiel',
          compro: false,
          date: '2019-12-01T16:47:32.569662Z',
        },
        {
          clientId: 1150426348,
          nombre: 'Cristobal Stanton',
          compro: true,
          tdc: 'privada',
          monto: 8272.33,
          date: '2019-12-01T16:47:09.569662Z',
        },
        {
          clientId: 1569384689,
          nombre: 'Lenny Homenick',
          compro: true,
          tdc: 'visa debit',
          monto: 28037.69,
          date: '2019-12-01T16:46:27.569662Z',
        },
        {
          clientId: 1786106385,
          nombre: 'Sister Reilly',
          compro: true,
          tdc: 'privada',
          monto: 15950.24,
          date: '2019-12-01T16:45:53.569662Z',
        },
        {
          clientId: 1229105620,
          nombre: 'Pearlie Dare',
          compro: false,
          date: '2019-12-01T16:45:49.569662Z',
        },
        {
          clientId: 1552676399,
          nombre: 'Enoch Wisoky',
          compro: true,
          tdc: 'maestro',
          monto: 6990.51,
          date: '2019-12-01T16:45:37.569662Z',
        },
        {
          clientId: 1486271640,
          nombre: 'Dr. Santa Cruickshank',
          compro: false,
          date: '2019-12-01T16:45:26.569662Z',
        },
      ];

      // Mock the getSalesFromExternalSource method of the salesMicroserviceService
      jest
        .spyOn(salesMicroserviceService, 'getSalesFromExternalSource')
        .mockResolvedValue(sales);

      // Call the getAllSales method of the salesMicroserviceController
      const result = await salesMicroserviceController.getAllSales({
        date: payload,
      });

      // Check the result
      expect(result).toEqual(sales);
    });
  });
});

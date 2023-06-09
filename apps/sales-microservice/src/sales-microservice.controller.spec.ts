import { Test, TestingModule } from '@nestjs/testing';
import { SalesMicroserviceController } from './sales-microservice.controller';
import { SalesMicroserviceService } from './sales-microservice.service';

describe('SalesMicroserviceController', () => {
  let salesMicroserviceController: SalesMicroserviceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [SalesMicroserviceController],
      providers: [SalesMicroserviceService],
    }).compile();

    salesMicroserviceController = app.get<SalesMicroserviceController>(SalesMicroserviceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(salesMicroserviceController.getHello()).toBe('Hello World!');
    });
  });
});

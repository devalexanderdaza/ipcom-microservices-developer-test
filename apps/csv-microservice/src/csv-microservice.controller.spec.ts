import { Test, TestingModule } from '@nestjs/testing';
import { CsvMicroserviceController } from './csv-microservice.controller';
import { CsvMicroserviceService } from './csv-microservice.service';

describe('CsvMicroserviceController', () => {
  let csvMicroserviceController: CsvMicroserviceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CsvMicroserviceController],
      providers: [CsvMicroserviceService],
    }).compile();

    csvMicroserviceController = app.get<CsvMicroserviceController>(CsvMicroserviceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(csvMicroserviceController.getHello()).toBe('Hello World!');
    });
  });
});

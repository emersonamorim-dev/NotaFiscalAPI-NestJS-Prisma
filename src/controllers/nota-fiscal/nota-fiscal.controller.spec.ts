import { Test, TestingModule } from '@nestjs/testing';
import { NotaFiscalController } from './nota-fiscal.controller';

describe('NotaFiscalController', () => {
  let controller: NotaFiscalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NotaFiscalController],
    }).compile();

    controller = module.get<NotaFiscalController>(NotaFiscalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

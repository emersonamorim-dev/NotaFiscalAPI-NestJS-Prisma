import { Test, TestingModule } from '@nestjs/testing';
import { NotaFiscalService } from './nota-fiscal.service';

describe('NotaFiscalService', () => {
  let service: NotaFiscalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NotaFiscalService],
    }).compile();

    service = module.get<NotaFiscalService>(NotaFiscalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

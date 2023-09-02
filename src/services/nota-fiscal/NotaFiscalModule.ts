import { Module } from '@nestjs/common';
import { NotaFiscalService } from './nota-fiscal.service';
import { PrismaService } from '../PrismaService';
import { NotaFiscalController } from 'src/controllers/nota-fiscal/nota-fiscal.controller';

@Module({
  providers: [NotaFiscalService, PrismaService],
  exports: [NotaFiscalService],
  controllers: [NotaFiscalController],
})
export class NotaFiscalModule {}

import { Module } from '@nestjs/common';
import { EnderecoService } from './endereco.service';
import { PrismaService } from '../PrismaService';
import { EnderecoController } from 'src/controllers/endereco/endereco.controller';

@Module({
  providers: [EnderecoService, PrismaService],
  exports: [EnderecoService],
  controllers: [EnderecoController],
})
export class EnderecoModule {}

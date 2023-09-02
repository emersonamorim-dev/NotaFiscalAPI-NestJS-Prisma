import { Module } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { ClienteController } from 'src/controllers/cliente/cliente.controller';
import { PrismaService } from '../PrismaService';

@Module({
  providers: [ClienteService, PrismaService],
  exports: [ClienteService],
  controllers: [ClienteController],
})
export class ClienteModule {}

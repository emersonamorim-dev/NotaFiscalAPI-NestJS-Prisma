import { Module } from '@nestjs/common';
import { PedidoService } from './pedido.service';
import { PedidoController } from 'src/controllers/pedido/pedido.controller';
import { PrismaService } from '../PrismaService';

@Module({
  providers: [PedidoService, PrismaService],
  exports: [PedidoService],
  controllers: [PedidoController],
})
export class PedidoModule {}

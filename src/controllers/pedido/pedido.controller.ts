import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  NotFoundException,
  Put,
  Delete,
} from '@nestjs/common';
import { Pedido } from 'src/models/pedido.model';
import { PedidoService } from 'src/services/pedido/pedido.service';

@Controller('pedidos')
export class PedidoController {
  constructor(private readonly pedidoService: PedidoService) {}

  @Post()
  createPedido(@Body() pedido: Pedido): Pedido {
    return this.pedidoService.create(pedido);
  }

  @Get()
  findAll(): Pedido[] {
    return this.pedidoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Pedido {
    const pedido = this.pedidoService.findOne(id);
    if (!pedido) {
      throw new NotFoundException(`Pedido com ID ${id} não encontrado`);
    }
    return pedido;
  }

  @Put(':id')
  updatePedido(@Param('id') id: number, @Body() pedido: Pedido): Pedido {
    return this.pedidoService.update(id, pedido);
  }

  @Delete(':id')
  deletePedido(@Param('id') id: number): void {
    this.pedidoService.delete(id);
  }
}

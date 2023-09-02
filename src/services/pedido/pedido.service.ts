import { Injectable, NotFoundException } from '@nestjs/common';
import { Pedido } from 'src/models/pedido.model';

@Injectable()
export class PedidoService {
  private pedidos: Pedido[] = [];

  create(pedido: Pedido): Pedido {
    this.pedidos.push(pedido);
    return pedido;
  }

  findAll(): Pedido[] {
    return this.pedidos;
  }

  findOne(id: number): Pedido | undefined {
    return this.pedidos.find((pedido) => pedido.id === id);
  }

  update(id: number, updatedPedido: Pedido): Pedido {
    const index = this.pedidos.findIndex((pedido) => pedido.id === id);
    if (index !== -1) {
      this.pedidos[index] = updatedPedido;
      return updatedPedido;
    }
    throw new NotFoundException(`Pedido com ID ${id} não encontrado`);
  }

  delete(id: number): void {
    const index = this.pedidos.findIndex((pedido) => pedido.id === id);
    if (index !== -1) {
      this.pedidos.splice(index, 1);
    } else {
      throw new NotFoundException(`Pedido com ID ${id} não encontrado`);
    }
  }
}

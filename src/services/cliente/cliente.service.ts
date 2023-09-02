import { Injectable } from '@nestjs/common';
import { Cliente } from 'src/models/cliente.model';

@Injectable()
export class ClienteService {
  private clientes: Cliente[] = [];

  create(cliente: Cliente): Cliente {
    this.clientes.push(cliente);
    return cliente;
  }

  findAll(): Cliente[] {
    return this.clientes;
  }

  findOne(id: number): Cliente {
    return this.clientes.find((cliente) => cliente.id === id);
  }

  update(id: number, cliente: Cliente): Cliente {
    const index = this.clientes.findIndex((c) => c.id === id);
    this.clientes[index] = cliente;
    return cliente;
  }

  delete(id: number): void {
    this.clientes = this.clientes.filter((cliente) => cliente.id !== id);
  }
}

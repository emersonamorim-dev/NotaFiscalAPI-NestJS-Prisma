import { Injectable } from '@nestjs/common';
import { Endereco } from 'src/models/endereco.model';

@Injectable()
export class EnderecoService {
  private enderecos: Endereco[] = [];

  create(endereco: Endereco): Endereco {
    this.enderecos.push(endereco);
    return endereco;
  }

  findAll(): Endereco[] {
    return this.enderecos;
  }

  findOne(id: number): Endereco {
    return this.enderecos.find((endereco) => endereco.id === id);
  }

  update(id: number, endereco: Endereco): Endereco {
    const index = this.enderecos.findIndex((e) => e.id === id);
    if (index !== -1) {
      this.enderecos[index] = endereco;
    }
    return endereco;
  }

  delete(id: number): void {
    this.enderecos = this.enderecos.filter((endereco) => endereco.id !== id);
  }
}

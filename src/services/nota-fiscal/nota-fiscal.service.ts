import { Injectable } from '@nestjs/common';
import { NotaFiscal } from 'src/models/notafiscal.model';

@Injectable()
export class NotaFiscalService {
  private notasFiscais: NotaFiscal[] = [];

  create(notaFiscal: NotaFiscal): NotaFiscal {
    this.notasFiscais.push(notaFiscal);
    return notaFiscal;
  }

  findAll(): NotaFiscal[] {
    return this.notasFiscais;
  }

  findOne(id: number): NotaFiscal | undefined {
    return this.notasFiscais.find((notaFiscal) => notaFiscal.id === id);
  }

  update(id: number, notaFiscal: NotaFiscal): NotaFiscal {
    const index = this.notasFiscais.findIndex((nf) => nf.id === id);
    if (index !== -1) {
      this.notasFiscais[index] = notaFiscal;
    }
    return notaFiscal;
  }

  delete(id: number): void {
    this.notasFiscais = this.notasFiscais.filter(
      (notaFiscal) => notaFiscal.id !== id,
    );
  }
}

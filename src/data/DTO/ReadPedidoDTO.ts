import { IsDate, IsNotEmpty, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { Cliente } from 'src/models/cliente.model';
import { ReadNotaFiscalDTO } from './ReadNotaFiscalDTO';

export class ReadPedidoDTO {
  @IsNotEmpty()
  valorBruto: number;

  @ValidateNested({ each: true })
  @Type(() => Cliente)
  cliente: Cliente;

  @ValidateNested({ each: true })
  @Type(() => ReadNotaFiscalDTO)
  nf: ReadNotaFiscalDTO;

  @IsDate()
  horaDaConsulta: Date = new Date();
}

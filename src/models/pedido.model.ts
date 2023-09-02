import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { Cliente } from './cliente.model';
import { NotaFiscal } from './notafiscal.model';

export class Pedido {
  @IsInt()
  @IsNotEmpty()
  id: number;

  @IsNumber()
  @IsNotEmpty({ message: 'Pedido deve possuir um valor bruto!' })
  valorBruto: number;

  @ValidateNested()
  @Type(() => Cliente)
  @IsNotEmpty({ message: 'O pedido deve possuir um cliente associado!' })
  cliente: Cliente;

  @ValidateNested()
  @Type(() => NotaFiscal)
  @IsOptional()
  nf?: NotaFiscal;
}

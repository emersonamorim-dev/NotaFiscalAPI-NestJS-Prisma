import { IsInt, IsNotEmpty, IsNumber } from 'class-validator';

export class NotaFiscal {
  @IsInt()
  @IsNotEmpty()
  id: number;

  @IsNumber()
  valorComImpostosAplicados: number;
}

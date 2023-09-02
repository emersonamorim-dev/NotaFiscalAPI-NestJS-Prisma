import { IsNumber } from 'class-validator';

export class CreateNotaFiscalDTO {
  @IsNumber({}, { message: 'ValorComImpostosAplicados deve ser um número!' })
  valorComImpostosAplicados: number;
}

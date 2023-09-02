import { IsNumber, IsDate } from 'class-validator';

export class ReadNotaFiscalDTO {
  @IsNumber()
  valorComImpostosAplicados: number;

  @IsDate()
  horaDaConsulta: Date = new Date();
}

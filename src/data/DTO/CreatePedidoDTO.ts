import { IsNotEmpty, IsNumber, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { Cliente } from 'src/models/cliente.model';

export class CreatePedidoDTO {
  @IsNumber()
  @IsNotEmpty({ message: 'Pedido deve possuir um valor bruto!' })
  valorBruto: number;

  @ValidateNested()
  @Type(() => Cliente)
  @IsNotEmpty({ message: 'O pedido deve possuir um cliente associado!' })
  cliente: Cliente;
}

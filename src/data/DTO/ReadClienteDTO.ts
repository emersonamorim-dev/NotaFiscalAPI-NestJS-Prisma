import { IsNotEmpty, IsString, MaxLength, IsDate } from 'class-validator';
import { Type } from 'class-transformer';
import { Endereco } from 'src/models/endereco.model';

export class ReadClienteDTO {
  @IsString()
  @IsNotEmpty({ message: 'O cliente deve ter um nome!' })
  @MaxLength(50, { message: 'O nome não pode ter mais de 50 caracteres!' })
  nome: string;

  @Type(() => Endereco)
  @IsNotEmpty({ message: 'O cliente deve ter um endereço!' })
  endereco: Endereco;

  @IsDate()
  horaDaConsulta: Date = new Date();
}

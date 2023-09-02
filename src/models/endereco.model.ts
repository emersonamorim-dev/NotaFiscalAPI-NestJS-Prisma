import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class Endereco {
  @IsInt()
  @IsNotEmpty()
  id: number;

  @IsString()
  @IsNotEmpty({ message: 'Código postal é obrigatório para o endereço!' })
  codigoPostal: string;

  @IsString()
  @IsNotEmpty({ message: 'Descrição é obrigatória para o endereço!' })
  descricao: string;

  @IsString()
  @IsOptional()
  complemento?: string;
}

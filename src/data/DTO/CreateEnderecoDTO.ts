import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateEnderecoDTO {
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

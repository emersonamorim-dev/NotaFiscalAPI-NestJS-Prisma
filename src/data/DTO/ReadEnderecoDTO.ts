import { IsNotEmpty, IsString, MaxLength, IsDate } from 'class-validator';

export class ReadEnderecoDTO {
  @IsString()
  @IsNotEmpty({ message: 'O endereço deve ter um nome de rua!' })
  @MaxLength(50, {
    message: 'O nome da rua não pode ter mais de 50 caracteres!',
  })
  nomeRua: string;

  // Aqui você pode adicionar outros campos relacionados ao Endereco, como número, cidade, estado, etc.

  @IsDate()
  horaDaConsulta: Date = new Date();
}

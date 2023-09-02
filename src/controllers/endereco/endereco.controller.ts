import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  NotFoundException,
  Put,
  Delete,
} from '@nestjs/common';
import { Endereco } from 'src/models/endereco.model';
import { EnderecoService } from 'src/services/endereco/endereco.service';

@Controller('enderecos')
export class EnderecoController {
  constructor(private readonly enderecoService: EnderecoService) {}

  @Post()
  createEndereco(@Body() endereco: Endereco): Endereco {
    return this.enderecoService.create(endereco);
  }

  @Get()
  findAll(): Endereco[] {
    return this.enderecoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Endereco {
    const endereco = this.enderecoService.findOne(id);
    if (!endereco) {
      throw new NotFoundException(`Endereço com ID ${id} não encontrado`);
    }
    return endereco;
  }

  @Put(':id')
  updateEndereco(
    @Param('id') id: number,
    @Body() endereco: Endereco,
  ): Endereco {
    return this.enderecoService.update(id, endereco);
  }

  @Delete(':id')
  deleteEndereco(@Param('id') id: number): void {
    this.enderecoService.delete(id);
  }
}

import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Delete,
  Param,
} from '@nestjs/common';
import { Cliente } from 'src/models/cliente.model';
import { ClienteService } from 'src/services/cliente/cliente.service';

@Controller('clientes')
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) {}

  @Post()
  create(@Body() cliente: Cliente): Cliente {
    return this.clienteService.create(cliente);
  }

  @Get()
  findAll(): Cliente[] {
    return this.clienteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Cliente {
    return this.clienteService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() cliente: Cliente): Cliente {
    return this.clienteService.update(+id, cliente);
  }

  @Delete(':id')
  delete(@Param('id') id: string): void {
    this.clienteService.delete(+id);
  }
}

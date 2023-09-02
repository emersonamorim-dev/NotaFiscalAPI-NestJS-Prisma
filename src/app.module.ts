import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EnderecoService } from './services/endereco/endereco.service';
import { NotaFiscalService } from './services/nota-fiscal/nota-fiscal.service';
import { PedidoService } from './services/pedido/pedido.service';
import { ClienteController } from './controllers/cliente/cliente.controller';
import { EnderecoController } from './controllers/endereco/endereco.controller';
import { PedidoController } from './controllers/pedido/pedido.controller';
import { PrismaService } from './services/PrismaService';
import { ClienteService } from './services/cliente/cliente.service';
import { NotaFiscalController } from './controllers/nota-fiscal/nota-fiscal.controller';

@Module({
  imports: [], // Adicione módulos relevantes aqui, como o módulo de banco de dados, se houver
  controllers: [
    AppController,
    ClienteController,
    EnderecoController,
    PedidoController,
    NotaFiscalController,
  ],
  providers: [
    AppService,
    ClienteService,
    EnderecoService,
    NotaFiscalService,
    PedidoService,
    PrismaService,
  ],
})
export class AppModule {}

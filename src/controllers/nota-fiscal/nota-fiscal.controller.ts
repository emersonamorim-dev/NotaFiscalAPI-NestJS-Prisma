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
import { NotaFiscal } from 'src/models/notafiscal.model';
import { NotaFiscalService } from 'src/services/nota-fiscal/nota-fiscal.service';

@Controller('notas-fiscais')
export class NotaFiscalController {
  constructor(private readonly notaFiscalService: NotaFiscalService) {}

  @Post()
  createNotaFiscal(@Body() notaFiscal: NotaFiscal): NotaFiscal {
    return this.notaFiscalService.create(notaFiscal);
  }

  @Get()
  findAll(): NotaFiscal[] {
    return this.notaFiscalService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): NotaFiscal {
    const notaFiscal = this.notaFiscalService.findOne(id);
    if (!notaFiscal) {
      throw new NotFoundException(`Nota Fiscal com ID ${id} não encontrada`);
    }
    return notaFiscal;
  }

  @Put(':id')
  updateNotaFiscal(
    @Param('id') id: number,
    @Body() notaFiscal: NotaFiscal,
  ): NotaFiscal {
    return this.notaFiscalService.update(id, notaFiscal);
  }

  @Delete(':id')
  deleteNotaFiscal(@Param('id') id: number): void {
    this.notaFiscalService.delete(id);
  }
}

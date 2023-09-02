import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { RedirectMiddleware } from './RedirectMiddleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Aplicar o middleware
  app.use(new RedirectMiddleware().use);

  // Configuração do Swagger
  const config = new DocumentBuilder()
    .setTitle('NotaFiscalAPI - NestJS - Prisma')
    .setDescription('API de Nota Fiscal')
    .setVersion('v1')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();

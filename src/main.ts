import { NestFactory } from '@nestjs/core'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  const config = new DocumentBuilder()
    .setTitle('sura api')
    .setDescription('sura api')
    .setVersion('1.0')
    .addTag('sura')
    .build()

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api/sura', app, document)

  app.enableCors({
    allowedHeaders: '*',
    origin: '*',
  })

  await app.listen(3001)
}
bootstrap()

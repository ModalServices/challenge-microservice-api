import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { AppModule } from './app.module'
import * as config from 'config'

async function bootstrap() {
  const serverConfig = config.get('server')
  const app = await NestFactory.create(AppModule)
  app.setGlobalPrefix('api/v1')
  const port = process.env.PORT || serverConfig.port
  app.enableCors()
  if (process.env.NODE_ENV !== 'production') {
    const APP_VERSION = process.env.npm_package_version
    const options = new DocumentBuilder()
      .setTitle('Challenge Microservice Api')
      .setVersion(APP_VERSION)
      .build()
    const document = SwaggerModule.createDocument(app, options)
    SwaggerModule.setup('api-docs', app, document, {
      swaggerOptions: {
        tagsSorter: 'alpha',
        operationsSorter: 'alpha',
      },
    })
  }
  await app.listen(port)
}
bootstrap()

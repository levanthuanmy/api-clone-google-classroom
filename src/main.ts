import { Logger } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.enableCors()
  const config = app.get(ConfigService)
  const port: number = config.get('port') || 3000
  const globalPrefix = 'api'
  app.setGlobalPrefix(globalPrefix)
  await app.listen(port, () => {
    Logger.log(`Listening at http://localhost:${port}/${globalPrefix}`)
  })
}
bootstrap()

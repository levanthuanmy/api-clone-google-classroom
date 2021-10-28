import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ClassroomsModule } from './classrooms/classrooms.module'
import { configuration } from './config/configuration'
import { validationSchema } from './config/validation'

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    load: [configuration],
    validationSchema
  }), ClassroomsModule, MongooseModule.forRoot(configuration().dbUrl)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

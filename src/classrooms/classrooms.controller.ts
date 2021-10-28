import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { ClassroomsService } from './classrooms.service'
import { Classroom } from './interfaces/classroom.interface'
import { ClassroomDTO } from './dtos/classroom.dto'

@Controller('classrooms')
export class ClassroomsController {
  constructor(private readonly classroomsService: ClassroomsService) { }

  @Get()
  getAll(): string {
    return "hehe"
  }

  @Get(':id')
  getOneById(@Param('id') id): Promise<Classroom> {
    return this.classroomsService.getOneById(id)
  }

  @Post()
  create(@Body() classroom: ClassroomDTO): Promise<Classroom> {
    return this.classroomsService.create(classroom)
  }

  @Put()
  update(): string {
    return "update"
  }

  @Delete()
  delete(): string {
    return "delete"
  }
}

import { Injectable } from '@nestjs/common'
import { Classroom } from './interfaces/classroom.interface'
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'
import { themeColors } from 'src/config/default'

@Injectable()
export class ClassroomsService {
  constructor(@InjectModel('Classroom') private readonly classroomModel: Model<Classroom>) { }

  async getAll(): Promise<Classroom[]> {
    return await this.classroomModel.find().exec()
  }

  async getOneById(id: string): Promise<Classroom> {
    return await this.classroomModel.findOne({ _id: id })
  }

  async create(classroom: Classroom): Promise<Classroom> {
    const newClass = new this.classroomModel(classroom)
    if (!newClass.themeColor?.length) {
      const random = Math.floor(Math.random() * themeColors.length)
      newClass['themeColor'] = themeColors[random]
    }
    return await newClass.save()
  }

  async update(id: string, classroom: Classroom): Promise<Classroom> {
    return await this.classroomModel.findByIdAndUpdate(id, classroom, { new: true })
  }

  async delete(id: string): Promise<Classroom> {
    return await this.classroomModel.findByIdAndRemove(id)
  }
}

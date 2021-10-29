import * as mongoose from 'mongoose'

export const ClassroomSchema = new mongoose.Schema({
  id: String,
  name: String,
  description: String,
  themeColor: String,
  banner: String,
  numberOfStudents: Number,
  numberOfTeachers: Number,
  students: Array,
  teachers: Array,
  host: Object,
})
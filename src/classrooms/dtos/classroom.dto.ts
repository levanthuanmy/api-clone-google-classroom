export class ClassroomDTO {
  readonly name: string
  readonly subject: string
  readonly description: string
  readonly banner: string
  readonly themeColor: string
  readonly numberOfStudents: number
  readonly numberOfTeachers: number
  readonly students: any[]
  readonly teachers: any[]
  readonly host: object
}
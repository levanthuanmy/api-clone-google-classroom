export interface Classroom {
  id?: string,
  name: string,
  description: string,
  banner: string,
  numberOfStudents: number,
  numberOfTeachers: number,
  students: any[],
  teachers: any[],
  host: object,
}
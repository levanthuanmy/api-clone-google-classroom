export interface Classroom {
  id?: string,
  name: string,
  description: string,
  banner: string,
  themeColor: string,
  numberOfStudents: number,
  numberOfTeachers: number,
  students: any[],
  teachers: any[],
  host: object,
}
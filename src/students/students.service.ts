import { Injectable } from '@nestjs/common';
import { Student } from './entity/students.entity';
import { StudentsDto } from './dto/students.dto';

@Injectable()
export class StudentsService {
  private studentsList: Student[];

  addStudent(student: StudentsDto): Student {
    const id = new Date().toString();
    const newStudent = { id, ...student };
    this.studentsList.push(newStudent);
    return newStudent;
  }

  getById(id: string): Student {
    const student: Student = this.studentsList.find((stud) => stud.id == id);
    return student;
  }

  getAll(): Student[] {
    return [...this.studentsList];
  }
}

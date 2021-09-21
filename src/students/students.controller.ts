import { Body, Get, Param, Post } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import {
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { StudentsDto } from './dto/students.dto';
import { Student } from './entity/students.entity';
import { StudentsService } from './students.service';

@ApiTags('students')
@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @ApiQuery({ name: 'id', required: true })
  @ApiOkResponse({ type: Student, isArray: true })
  @Get()
  getAllStudents(): Student[] {
    return this.studentsService.getAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: Student })
  @ApiNotFoundResponse()
  getStudentById(@Param('id') id: string): Student {
    return this.studentsService.getById(id);
  }

  @Post()
  addStudent(@Body() student: StudentsDto): Student {
    return this.studentsService.addStudent(student);
  }
}

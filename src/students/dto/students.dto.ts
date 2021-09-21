import { ApiProperty } from '@nestjs/swagger';

export class StudentsDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  surname: string;

  @ApiProperty()
  year: number;
}

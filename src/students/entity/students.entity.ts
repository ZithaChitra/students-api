import { ApiProperty } from '@nestjs/swagger';

export class Student {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  surname: string;

  @ApiProperty()
  year: number;
}

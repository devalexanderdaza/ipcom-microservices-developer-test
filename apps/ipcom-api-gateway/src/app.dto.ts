import { IsDate, IsNotEmpty, IsNumber, Max, Min } from 'class-validator';
import { IResumeDate, IResumeDays } from './app.interface';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

/**
 * @class ResumeDateDto
 * @implements {IResumeDate}
 * @description ResumeDateDto class that implements IResumeDate interface
 * @exports
 */
export class ResumeDateDto implements IResumeDate {
  @ApiProperty()
  @IsDate()
  @Type(() => Date)
  @IsNotEmpty()
  date: string;
}

/**
 * @class ResumeDaysDto
 * @implements {IResumeDays}
 * @description ResumeDaysDto class that implements IResumeDays interface
 * @exports
 */
export class ResumeDaysDto implements IResumeDays {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber({
    allowNaN: false,
    allowInfinity: false,
    maxDecimalPlaces: 0,
  })
  @Type(() => Number)
  @Min(1)
  @Max(30)
  dias: number;
}

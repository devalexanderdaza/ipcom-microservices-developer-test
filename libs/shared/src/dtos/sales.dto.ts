import { IsDate, IsNotEmpty, IsNumber, Max, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IResumeDate, IResumeDays, ISale } from '../interfaces';

/**
 * @class SaleDto
 * @implements {ISale}
 * @description Data Transfer Object (DTO) for Sale
 */
export class SaleDto implements ISale {
  clientId: number;
  nombre: string;
  compro: boolean;
  tdc?: string;
  monto?: number;
  date: string;
}

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

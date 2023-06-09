import { ApiProperty } from '@nestjs/swagger';
import { IFileUpload } from '../interfaces';

/**
 * @description File upload dto
 * @class FileUploadDto
 * @implements {IFileUpload}
 * @export
 */
export class FileUploadDto implements IFileUpload {
  @ApiProperty({ type: 'string', format: 'binary' })
  csv: any;
}

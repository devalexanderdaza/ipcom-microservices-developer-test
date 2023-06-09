import { ResumeDateDto, SaleDto } from '@ipcom/shared';

import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

import { AxiosError } from 'axios';

import { catchError, firstValueFrom } from 'rxjs';

@Injectable()
export class SalesMicroserviceService {
  constructor(private readonly httpService: HttpService) {}

  async getSalesFromExternalSource(date: ResumeDateDto): Promise<SaleDto[]> {
    const dateService: string = date.date.split('T')[0];
    const { data } = await firstValueFrom(
      this.httpService
        .get<SaleDto[]>(
          `https://apirecruit-gjvkhl2c6a-uc.a.run.app/compras/${dateService}`,
        )
        .pipe(
          catchError((error: AxiosError) => {
            console.error(error);
            throw 'An error happened!';
          }),
        ),
    );
    return data;
  }
}

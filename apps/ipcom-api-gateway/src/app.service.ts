import { ResumeDateDto, SaleDto } from '@ipcom/shared';

import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

import { createReadStream, rename, rm } from 'fs';

import * as csvParser from 'csv-parser';

import { lastValueFrom, Observable } from 'rxjs';

import { ProcessedCsvDto } from './app.dto';

@Injectable()
export class AppService {
  constructor(
    // Inject the sales microservice client proxy
    @Inject('SALES_SERVICE')
    private readonly salesMicroserviceClientProxy: ClientProxy,
    @Inject('CSV_SERVICE')
    private readonly csvMicroserviceClientProxy: ClientProxy,
  ) {}

  /**
   * @description Get all sales from microservice
   * @param date Date to get sales
   * @returns All sales from microservice
   */
  async getSales(date: ResumeDateDto): Promise<SaleDto[]> {
    const pattern: object = { cmd: 'get-all-sales' };
    const payload: object = { date };
    const sales$: Observable<SaleDto[]> =
      this.salesMicroserviceClientProxy.send(pattern, payload);
    return await lastValueFrom(sales$);
  }

  /**
   * @description Process csv file
   * @param filePath Path to csv file
   * @returns Processed csv file
   */
  async processCsv(filePath: string): Promise<ProcessedCsvDto[]> {
    return new Promise<any[]>((resolve, reject) => {
      // Rename file
      rename(
        `${process.cwd()}/${filePath}`,
        `${process.cwd()}/${filePath}.csv`,
        () => {
          console.log(`${process.cwd()}/${filePath}.csv`);
        },
      );
      const jsonResult = [];

      // Parse csv file
      createReadStream(`${process.cwd()}/${filePath}.csv`)
        .pipe(csvParser({ separator: ';' }))
        .on('data', (data) => {
          // Extract data
          const organizacion = Object.values(data)[0].toString();
          const usuario = data.usuario;
          const rol = data.rol;

          // Find organization
          let org = jsonResult.find(
            (item) => item.organization === organizacion,
          );

          // If organization not found, create it
          if (!org) {
            org = {
              organization: organizacion,
              users: [],
            };
            jsonResult.push(org);
          }

          // Find user
          const user = org.users.find((user) => user.username === usuario);

          // If user not found, create it
          if (!user) {
            org.users.push({
              username: usuario,
              roles: [rol],
            });
          } else {
            user.roles.push(rol);
          }

          // Delete file
          rm(`${process.cwd()}/${filePath}.csv`, () => {
            return true;
          });
        })
        .on('end', () => {
          resolve(jsonResult);
        })
        .on('error', (error) => {
          reject(error);
        });
    });
  }
}

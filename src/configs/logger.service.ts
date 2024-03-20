import { Injectable } from '@nestjs/common';
import * as winston from 'winston';
const LokiTransport = require("winston-loki");

@Injectable()
export class LoggerService {
  private readonly logger: winston.Logger;

  constructor() {
    this.logger = winston.createLogger({
      level: 'info',
    //   format: winston.format.json(),
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
      ),
      transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'combined.log' }),
        new LokiTransport({
          host: "http://140.238.187.194:3100",
          labels: { job: 'azure-nest-log' }
        })
      ],
    });
  }

  logInfo(message: string) {
    this.logger.log('info', message);
  }

  logError(message: string) {
    this.logger.log('error', message);
  }
}
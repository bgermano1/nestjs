import { LoggerService } from '../configs/logger.service';
export declare class UsersController {
    private readonly loggerService;
    constructor(loggerService: LoggerService);
    getHealth(): {
        status: string;
    };
    forceError(): void;
}

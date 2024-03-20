
import { Controller, Post, Body, Get, InternalServerErrorException  } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { ReturnUserDto } from './dto/return-user.dto';
import { LoggerService } from '../configs/logger.service';

@Controller('users')
export class UsersController {
  constructor(private readonly loggerService: LoggerService) {}
  // constructor(private usersService: UsersService) {}

  // @Post()
  // async createAdminUser(
  //   @Body() createUserDto: CreateUserDto,
  // ): Promise<ReturnUserDto> {
  //   const user = await this.usersService.createAdminUser(createUserDto);
  //   return {
  //     user,
  //     message: 'Administrador cadastrado com sucesso',
  //   };
  // }

  @Get('/health')
  getHealth(): { status: string } {
    this.loggerService.logInfo('Health check performed');
    return { status: 'OK' };
  }
  
  @Get('/force-error')
  forceError(): void {
    this.loggerService.logError('Forcing an error');
    throw new InternalServerErrorException('Forced internal server error');
  }

}

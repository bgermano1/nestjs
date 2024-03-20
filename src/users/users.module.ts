import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { UserRepository } from './users.repository';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { LoggerService } from '../configs/logger.service';

@Module({
  // imports: [TypeOrmModule.forFeature([UserRepository])],
  imports: [],
  providers: [UsersService, LoggerService],
  controllers: [UsersController],
})
export class UsersModule {}

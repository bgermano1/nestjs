import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { typeOrmConfig } from './configs/typeorm.config';
import { UsersModule } from './users/users.module';
import { LoggerService } from './configs/logger.service';


@Module({
  // imports: [TypeOrmModule.forRoot(typeOrmConfig), UsersModule],
  imports: [UsersModule],
  controllers: [],
  providers: [LoggerService],
})
export class AppModule {}
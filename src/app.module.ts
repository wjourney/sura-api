import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { env } from './common/config';
// import { APP_PIPE } from '@nestjs/core';
import { UserModule } from './feature/user/user.module';

@Module({
  imports: [TypeOrmModule.forRoot(env.DATABASE_CONFIG), UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

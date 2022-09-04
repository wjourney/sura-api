import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { env } from './common/config';
import { UserModule } from './feature/user/user.module';
import { DataSource } from 'typeorm';
import { GoodsModule } from './feature/goods/goods.module';
@Module({
  imports: [
    TypeOrmModule.forRoot(env.DATABASE_CONFIG),
    UserModule,
    GoodsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}

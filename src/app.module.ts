import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { config } from './common/config'
import { UserModule } from './features/user/user.module'
import { DataSource } from 'typeorm'
import { GoodsModule } from './features/goods/goods.module'
@Module({
  imports: [
    TypeOrmModule.forRoot(config.DATABASE_CONFIG),
    UserModule,
    GoodsModule,
  ],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}

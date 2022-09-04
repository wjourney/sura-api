import { Module } from '@nestjs/common'
import { GoodsController } from '@/features/goods/goods.controller'
import { GoodsService } from '@/features/goods/goods.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Goods } from '@/features/goods/entities/goods.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Goods])],
  controllers: [GoodsController],
  providers: [GoodsService],
})
export class GoodsModule {}

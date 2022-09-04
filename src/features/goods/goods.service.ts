import { Injectable } from '@nestjs/common'
import { CreateGoodsBody } from '@/features/goods/dto/goods.dto'
import { Goods } from '@/features/goods/entities/goods.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

@Injectable()
export class GoodsService {
  constructor(
    @InjectRepository(Goods)
    private readonly goodsRepository: Repository<Goods>,
  ) {}

  // add goods
  async createGoods(
    createGoodsBody: CreateGoodsBody,
  ): Promise<CreateGoodsBody> {
    const goodsData = await this.goodsRepository.save(createGoodsBody)
    return goodsData
  }
}

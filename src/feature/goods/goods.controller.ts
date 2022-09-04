import { Controller, Post, Body } from '@nestjs/common';
import { GoodsService } from './goods.service';
import { CreateGoodsBody } from './dto/goods.dto';

@Controller('goods')
export class GoodsController {
  constructor(private readonly goodsService: GoodsService) {}

  @Post('create')
  async create(@Body() createGoodsBody: CreateGoodsBody) {
    const userData = await this.goodsService.createGoods(createGoodsBody);
    return userData;
  }
}

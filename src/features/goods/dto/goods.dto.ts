import { ApiProperty } from '@nestjs/swagger'

export class CreateGoodsBody {
  @ApiProperty()
  unitPrice: number

  @ApiProperty()
  quantity: number
}
